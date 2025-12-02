"""In-memory cache for scan results."""

from pathlib import Path
from typing import Dict, Optional
from datetime import datetime
import hashlib
import json


class ScanCache:
    """Simple in-memory cache for scan results."""

    def __init__(self, max_size: int = 10):
        self._cache: Dict[str, dict] = {}
        self._max_size = max_size

    def _make_cache_key(self, path: Path, filters: dict) -> str:
        """Create cache key from path and filter configuration."""
        # Create stable filter signature
        filter_sig = {
            'exclude_patterns': sorted(filters.get('exclude_patterns', [])),
            'exclude_hidden': filters.get('exclude_hidden', False),
            'min_file_size': filters.get('min_file_size', 0),
            'max_depth': filters.get('max_depth', 0)
        }
        filter_json = json.dumps(filter_sig, sort_keys=True)
        filter_hash = hashlib.md5(filter_json.encode()).hexdigest()[:8]

        cache_key = f"{path.resolve()}#{filter_hash}"
        return cache_key

    def get(self, path: Path, filters: dict) -> Optional[dict]:
        """Retrieve cached scan result if filters match."""
        key = self._make_cache_key(path, filters)
        cached = self._cache.get(key)

        if cached:
            result = {k: v for k, v in cached.items() if k != '_cached_at_dt'}
            result['cache_hit'] = True
            return result

        return None

    def set(self, path: Path, filters: dict, result: dict) -> None:
        """Store scan result in cache with filter signature."""
        now = datetime.now()

        if len(self._cache) >= self._max_size:
            # Remove oldest entry
            oldest = min(self._cache.items(), key=lambda x: x[1]['_cached_at_dt'])
            del self._cache[oldest[0]]

        key = self._make_cache_key(path, filters)
        result['_cached_at_dt'] = now  # Internal use only (for sorting)
        result['cached_at_display'] = now.strftime('%Y-%m-%d %H:%M:%S')
        result['cache_hit'] = False
        # Note: filters are part of cache key, no need to store in result
        self._cache[key] = result

    def clear(self) -> None:
        """Clear all cached results."""
        self._cache.clear()

    def remove(self, path: Path) -> bool:
        """Remove specific cached result."""
        key = str(path.resolve())
        if key in self._cache:
            del self._cache[key]
            return True
        return False

    def size(self) -> int:
        """Get cache size."""
        return len(self._cache)


_cache = ScanCache()


def get_cache() -> ScanCache:
    """Get global cache instance."""
    return _cache
