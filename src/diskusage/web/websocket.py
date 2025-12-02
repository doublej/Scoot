"""WebSocket handler for real-time scan progress."""

import asyncio
from pathlib import Path

from fastapi import WebSocket, WebSocketDisconnect

from diskusage.scanner.async_scanner import AsyncScanJob
from diskusage.scanner.base import FileInfo
from diskusage.config.settings import get_config
from diskusage.cache.store import get_cache
from diskusage.web.scan_manager import get_scan_manager


async def handle_scan_progress(websocket: WebSocket, path: str) -> None:
    """Handle WebSocket scan with real-time progress updates."""
    await websocket.accept()

    manager = get_scan_manager()
    session_id = None
    files_processed = 0
    dirs_processed = 0
    total_size = 0

    def progress_callback(node: FileInfo) -> None:
        """Send progress updates via WebSocket."""
        nonlocal files_processed, dirs_processed, total_size

        if node.is_directory:
            dirs_processed += 1
        else:
            files_processed += 1
            total_size += node.size

        # Update manager state
        if session_id:
            manager.update_progress(
                session_id, files_processed, dirs_processed,
                total_size, str(node.path)
            )

        # Send update every 100 files
        if files_processed % 100 == 0:
            asyncio.create_task(websocket.send_json({
                "type": "progress",
                "files": files_processed,
                "directories": dirs_processed,
                "total_size": total_size,
                "current_path": str(node.path)
            }))

    try:
        target = Path(path).expanduser()
        if not target.exists() or not target.is_dir():
            await websocket.send_json({"type": "error", "message": "Invalid path"})
            return

        config = get_config()
        cache = get_cache()

        # Get current filter configuration
        current_filters = {
            'exclude_patterns': config.exclude_patterns,
            'exclude_hidden': config.exclude_hidden,
            'min_file_size': config.min_file_size,
            'max_depth': config.max_scan_depth
        }

        # Debug: log filter configuration
        import json
        print(f"[SCAN] Path: {target}")
        print(f"[SCAN] Current filters: {json.dumps(current_filters, indent=2)}")

        # Check cache first (will only match if filters are identical)
        cached_result = cache.get(target, current_filters)
        if cached_result:
            print(f"[CACHE HIT] Returning cached result")
        else:
            print(f"[CACHE MISS] No matching cache entry")
        if cached_result:
            # Remove internal datetime object before sending
            response = {
                "type": "complete",
                "path": cached_result['path'],
                "total_size": cached_result['total_size'],
                "files": cached_result['files'],
                "directories": cached_result['directories'],
                "tree": cached_result['tree'],
                "from_cache": True,
                "cached_at": cached_result['cached_at_display']
            }
            await websocket.send_json(response)
            return

        # Check for special folder warnings
        folder_info = config.get_folder_info(target)
        if folder_info and folder_info.get('warn_on_scan'):
            await websocket.send_json({
                "type": "warning",
                "message": f"Scanning system folder: {target}",
                "category": folder_info['category']
            })

        # Register scan with manager
        session_id = manager.start_scan(str(target))

        await websocket.send_json({
            "type": "started",
            "path": str(target),
            "session_id": session_id
        })

        scanner = AsyncScanJob(progress_callback=progress_callback)
        root = await scanner.scan_async(target)

        # Serialize tree with extension/folder info
        tree_data = serialize_with_metadata(root, config)

        result = {
            "path": str(root.path),
            "total_size": root.size,
            "files": files_processed,
            "directories": dirs_processed,
            "tree": tree_data
        }

        # Send response first (before caching modifies result)
        response = {
            "type": "complete",
            "path": result['path'],
            "total_size": result['total_size'],
            "files": result['files'],
            "directories": result['directories'],
            "tree": result['tree'],
            "from_cache": False,
            "session_id": session_id
        }
        await websocket.send_json(response)

        # Mark scan complete in manager
        if session_id:
            manager.complete_scan(session_id, result)

        # Cache the result with current filter configuration (modifies result dict)
        cache.set(target, current_filters, result)

    except WebSocketDisconnect:
        # Client disconnected - scan result stored in manager if completed
        pass
    except Exception as e:
        if session_id:
            manager.fail_scan(session_id, str(e))
        await websocket.send_json({"type": "error", "message": str(e)})


def serialize_with_metadata(node: FileInfo, config) -> dict:
    """Serialize node with extension and folder metadata."""
    result = {
        "name": node.name,
        "path": str(node.path),
        "size": node.size,
        "is_directory": node.is_directory
    }

    # Add extension info for files
    if not node.is_directory:
        ext = node.path.suffix
        ext_info = config.get_extension_info(ext)
        if ext_info:
            result["extension_info"] = ext_info

    # Add folder info for directories
    if node.is_directory:
        from diskusage.scanner.base import DirInfo
        if isinstance(node, DirInfo):
            # Mark if at depth limit
            if node.at_depth_limit:
                result["at_depth_limit"] = True
                result["folder_info"] = {
                    "category": "depth_limit",
                    "color": "#fb923c",
                    "icon": "layers",
                    "description": "Folder at scan depth limit"
                }
            else:
                folder_info = config.get_folder_info(node.path)
                if folder_info:
                    result["folder_info"] = folder_info

            # Recursively serialize children
            result["children"] = [
                serialize_with_metadata(child, config)
                for child in node.iter_children()
            ]

    return result
