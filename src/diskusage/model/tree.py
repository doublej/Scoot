"""Disk usage tree container."""

from __future__ import annotations

from pathlib import Path
from typing import Callable, Iterable, Iterator, List

from diskusage.scanner.base import DirInfo, FileInfo, ScanJob


class DiskUsageTree:
    """Facade around the scanned directory tree."""

    def __init__(self, root: DirInfo) -> None:
        self.root = root

    @classmethod
    def from_path(cls, path: Path, scanner: ScanJob) -> "DiskUsageTree":
        root = scanner.scan(path)
        return cls(root)

    @property
    def total_size(self) -> int:
        return self.root.size

    def iter_depth_first(self) -> Iterator[FileInfo]:
        stack: List[FileInfo] = [self.root]
        while stack:
            node = stack.pop()
            yield node
            if isinstance(node, DirInfo):
                children = list(node.iter_children())
                stack.extend(reversed(children))

    def iter_directories(self) -> Iterator[DirInfo]:
        for node in self.iter_depth_first():
            if isinstance(node, DirInfo):
                yield node

    def find(self, predicate: Callable[[FileInfo], bool]) -> Iterable[FileInfo]:
        for node in self.iter_depth_first():
            if predicate(node):
                yield node

    def __repr__(self) -> str:
        return f"DiskUsageTree(root={self.root.path!r}, size={self.root.size})"


__all__ = ["DiskUsageTree"]
