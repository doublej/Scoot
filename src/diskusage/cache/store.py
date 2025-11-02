"""In-memory cache for scan results."""

from pathlib import Path
from typing import Dict, Optional
from datetime import datetime


class ScanCache:
    """Simple in-memory cache for scan results."""

    def __init__(self, max_size: int = 10):
        self._cache: Dict[str, dict] = {}
        self._max_size = max_size

    def get(self, path: Path) -> Optional[dict]:
        """Retrieve cached scan result."""
        key = str(path.resolve())
        cached = self._cache.get(key)

        if cached:
            cached['cache_hit'] = True
            cached['cached_at_display'] = cached['cached_at'].strftime('%Y-%m-%d %H:%M:%S')

        return cached

    def set(self, path: Path, result: dict) -> None:
        """Store scan result in cache."""
        if len(self._cache) >= self._max_size:
            # Remove oldest entry
            oldest = min(self._cache.items(), key=lambda x: x[1]['cached_at'])
            del self._cache[oldest[0]]

        key = str(path.resolve())
        result['cached_at'] = datetime.now()
        result['cache_hit'] = False
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
