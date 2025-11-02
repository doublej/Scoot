"""FastAPI application for disk usage analyzer."""

from pathlib import Path
from typing import Dict, List

from fastapi import FastAPI, HTTPException, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from diskusage.model.tree import DiskUsageTree
from diskusage.scanner.local import LocalScanJob
from diskusage.web.websocket import handle_scan_progress
from diskusage.config.settings import get_config
from diskusage.cache.store import get_cache


class ScanRequest(BaseModel):
    path: str

app = FastAPI(title="Disk Usage Analyzer")

# Configure CORS
config = get_config()
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint - API information."""
    return {
        "name": "Disk Usage Analyzer API",
        "version": "0.1.0",
        "endpoints": {
            "scan": "POST /api/scan",
            "websocket": "WS /ws/scan?path=<path>",
            "config": "GET /api/config"
        }
    }


@app.post("/api/scan")
async def scan_directory(request: ScanRequest) -> Dict:
    target = Path(request.path).expanduser()
    if not target.exists():
        raise HTTPException(status_code=404, detail="Path not found")
    if not target.is_dir():
        raise HTTPException(status_code=400, detail="Path must be a directory")

    scanner = LocalScanJob()
    tree = DiskUsageTree.from_path(target, scanner)

    return {
        "path": str(tree.root.path),
        "total_size": tree.total_size,
        "root": serialize_node(tree.root)
    }


def serialize_node(node) -> Dict:
    result = {
        "name": node.name,
        "path": str(node.path),
        "size": node.size,
        "is_directory": node.is_directory
    }

    if node.is_directory:
        result["children"] = [serialize_node(child) for child in node.iter_children()]

    return result


@app.websocket("/ws/scan")
async def websocket_scan(websocket: WebSocket, path: str):
    """WebSocket endpoint for real-time scan progress."""
    await handle_scan_progress(websocket, path)


@app.get("/api/config")
async def get_configuration():
    """Get current configuration."""
    return {
        "filters": {
            "exclude_patterns": config.exclude_patterns,
            "exclude_hidden": config.exclude_hidden
        },
        "extension_templates": config.extension_templates,
        "special_folders": config.special_folders
    }


@app.get("/api/cache/status")
async def cache_status():
    """Get cache status."""
    cache = get_cache()
    return {
        "size": cache.size(),
        "max_size": cache._max_size
    }


@app.delete("/api/cache")
async def clear_cache():
    """Clear all cached results."""
    cache = get_cache()
    cache.clear()
    return {"message": "Cache cleared"}


@app.delete("/api/cache/{path:path}")
async def remove_cache_entry(path: str):
    """Remove specific cache entry."""
    cache = get_cache()
    target = Path(path).expanduser()
    removed = cache.remove(target)
    return {"removed": removed}


class FilterUpdate(BaseModel):
    min_file_size: int


class ExcludePatternsUpdate(BaseModel):
    patterns: List[str]


class ExtensionCategoryUpdate(BaseModel):
    name: str
    color: str
    extensions: List[str]
    description: str = ""
    icon: str = ""


@app.post("/api/config/filter")
async def update_filter(update: FilterUpdate):
    """Update filter configuration."""
    config.set('filters.min_file_size', update.min_file_size)
    config.save()
    return {"min_file_size": update.min_file_size}


@app.post("/api/config/exclude-patterns")
async def update_exclude_patterns(update: ExcludePatternsUpdate):
    """Update exclude patterns."""
    config.set('filters.exclude_patterns', update.patterns)
    config.save()
    return {"patterns": update.patterns}


@app.post("/api/config/extension-category")
async def update_extension_category(update: ExtensionCategoryUpdate):
    """Add or update extension category."""
    category_data = {
        'color': update.color,
        'extensions': update.extensions,
        'description': update.description,
        'icon': update.icon
    }

    if 'extension_templates' not in config._data:
        config._data['extension_templates'] = {}

    config._data['extension_templates'][update.name] = category_data
    config.save()
    return {"category": update.name, "data": category_data}


@app.delete("/api/config/extension-category/{category_name}")
async def delete_extension_category(category_name: str):
    """Delete extension category."""
    if 'extension_templates' in config._data and category_name in config._data['extension_templates']:
        del config._data['extension_templates'][category_name]
        config.save()
        return {"deleted": category_name}
    raise HTTPException(status_code=404, detail="Category not found")


@app.post("/api/config/reload")
async def reload_config():
    """Reload configuration from file."""
    config.load()
    return {"message": "Configuration reloaded"}
