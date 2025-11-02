"""Core data structures and scanner interface definitions."""

from __future__ import annotations

from abc import ABC, abstractmethod
from pathlib import Path
from typing import Callable, Iterable, List, Optional, Protocol


class ProgressCallback(Protocol):
    """Callable signature for reporting scan progress."""

    def __call__(self, node: "FileInfo") -> None:  # pragma: no cover - Protocol hook
        ...


class FileInfo:
    """Lightweight representation of a filesystem entry."""

    __slots__ = ("path", "size", "mtime", "mode", "parent", "_is_dir")

    def __init__(
        self,
        path: Path,
        size: int,
        mtime: float,
        mode: int,
        parent: Optional["DirInfo"] = None,
        *,
        is_dir: bool = False,
    ) -> None:
        self.path = path
        self.size = size
        self.mtime = mtime
        self.mode = mode
        self.parent = parent
        self._is_dir = is_dir

    @property
    def name(self) -> str:
        return self.path.name or str(self.path)

    @property
    def is_directory(self) -> bool:
        return self._is_dir

    def __repr__(self) -> str:
        cls = self.__class__.__name__
        return f"{cls}(path={self.path!r}, size={self.size})"


class DirInfo(FileInfo):
    """Directory node with child bookkeeping."""

    __slots__ = ("children", "error", "file_count", "dir_count")

    def __init__(
        self,
        path: Path,
        size: int = 0,
        mtime: float = 0.0,
        mode: int = 0,
        parent: Optional["DirInfo"] = None,
    ) -> None:
        super().__init__(path, size, mtime, mode, parent, is_dir=True)
        self.children: List[FileInfo] = []
        self.error: Optional[BaseException] = None
        self.file_count = 0
        self.dir_count = 0

    def add_child(self, child: FileInfo) -> None:
        child.parent = self
        self.children.append(child)

    def iter_children(self) -> Iterable[FileInfo]:
        return iter(self.children)

    def update_aggregates(self) -> None:
        files = dirs = total = 0
        for child in self.children:
            total += child.size
            if child.is_directory:
                dirs += 1
            else:
                files += 1
        self.size = total
        self.file_count = files
        self.dir_count = dirs

    def set_error(self, error: BaseException) -> None:
        self.error = error


class ScanJob(ABC):
    """Abstract base for filesystem scanning jobs."""

    def __init__(self, *, follow_symlinks: bool = False, progress: Optional[ProgressCallback] = None) -> None:
        self.follow_symlinks = follow_symlinks
        self.progress = progress

    @abstractmethod
    def scan(self, root_path: Path) -> DirInfo:
        """Perform the scan and return the root directory info."""


__all__ = ["FileInfo", "DirInfo", "ScanJob", "ProgressCallback"]
