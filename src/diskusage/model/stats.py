"""Aggregate statistics helpers for disk usage trees."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Tuple

from diskusage.scanner.base import DirInfo, FileInfo


@dataclass
class TreeStatistics:
    """Calculate aggregate metrics for a scanned tree."""

    root: DirInfo
    _totals_cached: bool = False
    _file_count: int = 0
    _dir_count: int = 0

    @property
    def total_size(self) -> int:
        return self.root.size

    @property
    def file_count(self) -> int:
        self._ensure_totals()
        return self._file_count

    @property
    def directory_count(self) -> int:
        self._ensure_totals()
        return self._dir_count

    def counts(self) -> Tuple[int, int]:
        self._ensure_totals()
        return self._file_count, self._dir_count

    def _ensure_totals(self) -> None:
        if self._totals_cached:
            return
        files = 0
        dirs = 0
        stack: list[FileInfo] = [self.root]
        while stack:
            node = stack.pop()
            if isinstance(node, DirInfo):
                dirs += 1
                stack.extend(node.iter_children())
            else:
                files += 1
        self._file_count = files
        self._dir_count = dirs
        self._totals_cached = True


__all__ = ["TreeStatistics"]
