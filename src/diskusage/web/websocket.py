"""WebSocket handler for real-time scan progress."""

from pathlib import Path

from fastapi import WebSocket, WebSocketDisconnect

from diskusage.scanner.async_scanner import AsyncScanJob
from diskusage.scanner.base import FileInfo
from diskusage.config.settings import get_config
from diskusage.cache.store import get_cache


async def handle_scan_progress(websocket: WebSocket, path: str) -> None:
    """Handle WebSocket scan with real-time progress updates."""
    await websocket.accept()

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

        # Send update every 100 files
        if files_processed % 100 == 0:
            try:
                import asyncio
                asyncio.create_task(websocket.send_json({
                    "type": "progress",
                    "files": files_processed,
                    "directories": dirs_processed,
                    "total_size": total_size,
                    "current_path": str(node.path)
                }))
            except:
                pass

    try:
        target = Path(path).expanduser()
        if not target.exists() or not target.is_dir():
            await websocket.send_json({"type": "error", "message": "Invalid path"})
            return

        config = get_config()
        cache = get_cache()

        # Check cache first
        cached_result = cache.get(target)
        if cached_result:
            await websocket.send_json({
                "type": "complete",
                "path": cached_result['path'],
                "total_size": cached_result['total_size'],
                "files": cached_result['files'],
                "directories": cached_result['directories'],
                "tree": cached_result['tree'],
                "from_cache": True,
                "cached_at": cached_result['cached_at_display']
            })
            return

        # Check for special folder warnings
        folder_info = config.get_folder_info(target)
        if folder_info and folder_info.get('warn_on_scan'):
            await websocket.send_json({
                "type": "warning",
                "message": f"Scanning system folder: {target}",
                "category": folder_info['category']
            })

        await websocket.send_json({"type": "started", "path": str(target)})

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

        # Cache the result
        cache.set(target, result)

        await websocket.send_json({
            "type": "complete",
            **result,
            "from_cache": False
        })

    except WebSocketDisconnect:
        pass
    except Exception as e:
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
        folder_info = config.get_folder_info(node.path)
        if folder_info:
            result["folder_info"] = folder_info

        # Recursively serialize children
        from diskusage.scanner.base import DirInfo
        if isinstance(node, DirInfo):
            result["children"] = [
                serialize_with_metadata(child, config)
                for child in node.iter_children()
            ]

    return result
