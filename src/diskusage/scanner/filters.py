"""Filtering helpers for filesystem scanning."""

from __future__ import annotations

from fnmatch import fnmatch
from pathlib import Path
from typing import Iterable, List


class ExclusionRules:
    """Simple glob-style exclusion rules."""

    def __init__(self, patterns: Iterable[str] | None = None) -> None:
        self._patterns: List[str] = list(patterns or [])

    def add(self, pattern: str) -> None:
        self._patterns.append(pattern)

    def should_exclude(self, path: Path) -> bool:
        candidate = path.name or str(path)
        for pattern in self._patterns:
            if fnmatch(candidate, pattern):
                return True
        return False

    def __bool__(self) -> bool:
        return bool(self._patterns)


__all__ = ["ExclusionRules"]
