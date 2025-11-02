"""Local filesystem scanner implementation."""

from __future__ import annotations

import os
from pathlib import Path
from typing import Optional

from .base import DirInfo, FileInfo, ProgressCallback, ScanJob
from .filters import ExclusionRules


class LocalScanJob(ScanJob):
    """Scan the local filesystem using os.scandir."""

    def __init__(
        self,
        *,
        follow_symlinks: bool = False,
        progress: Optional[ProgressCallback] = None,
        exclusions: Optional[ExclusionRules] = None,
        max_depth: Optional[int] = None,
    ) -> None:
        super().__init__(follow_symlinks=follow_symlinks, progress=progress)
        self.exclusions = exclusions or ExclusionRules()
        self.max_depth = max_depth

    def scan(self, root_path: Path) -> DirInfo:
        path = Path(root_path).expanduser()
        if not path.exists():
            raise FileNotFoundError(path)
        if not path.is_dir():
            raise NotADirectoryError(path)

        stat_result = path.stat()
        root = DirInfo(path=path, size=stat_result.st_size, mtime=stat_result.st_mtime, mode=stat_result.st_mode)
        self._walk(root, depth=0)
        root.update_aggregates()
        return root

    def _walk(self, directory: DirInfo, *, depth: int) -> None:
        try:
            entries = os.scandir(directory.path)
        except OSError as error:
            directory.set_error(error)
            return

        with entries as scandir_it:
            for entry in scandir_it:
                entry_path = Path(entry.path)
                if self.exclusions and self.exclusions.should_exclude(entry_path):
                    continue

                try:
                    stat_result = entry.stat(follow_symlinks=self.follow_symlinks)
                except OSError:
                    continue

                if entry.is_dir(follow_symlinks=self.follow_symlinks):
                    child = DirInfo(
                        path=entry_path,
                        size=stat_result.st_size,
                        mtime=stat_result.st_mtime,
                        mode=stat_result.st_mode,
                        parent=directory,
                    )
                    directory.add_child(child)
                    if self.progress:
                        self.progress(child)
                    if self.max_depth is None or depth < self.max_depth:
                        self._walk(child, depth=depth + 1)
                    child.update_aggregates()
                else:
                    child = FileInfo(
                        path=entry_path,
                        size=stat_result.st_size,
                        mtime=stat_result.st_mtime,
                        mode=stat_result.st_mode,
                        parent=directory,
                    )
                    directory.add_child(child)
                    if self.progress:
                        self.progress(child)

        directory.update_aggregates()


__all__ = ["LocalScanJob"]
