"""Asynchronous filesystem scanner with progress reporting."""

import asyncio
import os
from pathlib import Path
from typing import AsyncIterator, Callable, Optional

from diskusage.scanner.base import DirInfo, FileInfo, ProgressCallback, ScanJob
from diskusage.config.settings import get_config


class AsyncScanJob(ScanJob):
    """Asynchronous scanner with progress callbacks."""

    def __init__(
        self,
        progress_callback: Optional[ProgressCallback] = None,
        exclude_patterns: Optional[list[str]] = None
    ):
        self.progress_callback = progress_callback
        self._cancelled = False
        self._files_scanned = 0

        config = get_config()
        self.exclude_patterns = exclude_patterns or config.exclude_patterns
        self.exclude_hidden = config.exclude_hidden
        self.cross_filesystems = config.cross_filesystems
        self.min_file_size = config.min_file_size
        self.progress_interval = config.progress_update_interval
        self.max_depth = config.max_scan_depth

    def scan(self, root_path: Path) -> DirInfo:
        """Synchronous wrapper for async scan."""
        return asyncio.run(self.scan_async(root_path))

    async def scan_async(self, root_path: Path) -> DirInfo:
        """Asynchronously scan directory tree."""
        if not root_path.exists():
            raise FileNotFoundError(f"Path does not exist: {root_path}")

        if not root_path.is_dir():
            raise ValueError(f"Path is not a directory: {root_path}")

        root_info = DirInfo(
            path=root_path,
            size=0,
            mtime=root_path.stat().st_mtime,
            mode=root_path.stat().st_mode,
            parent=None
        )

        await self._scan_recursive(root_info, depth=0)
        return root_info

    async def _scan_recursive(self, dir_info: DirInfo, depth: int) -> None:
        """Recursively scan directory contents."""
        if self._cancelled:
            return

        # Send progress when entering directory (feedback during listing)
        await self._send_progress(dir_info)

        try:
            entries = list(os.scandir(dir_info.path))

            for entry in entries:
                if self._cancelled:
                    return

                # Skip if matches exclusion pattern
                if self._should_exclude(entry.name):
                    continue

                # Skip hidden if configured
                if self.exclude_hidden and entry.name.startswith('.'):
                    continue

                try:
                    stat_info = entry.stat(follow_symlinks=False)

                    if entry.is_file(follow_symlinks=False):
                        # Skip files below minimum size threshold
                        if stat_info.st_size < self.min_file_size:
                            continue

                        file_info = FileInfo(
                            path=Path(entry.path),
                            size=stat_info.st_size,
                            mtime=stat_info.st_mtime,
                            mode=stat_info.st_mode,
                            parent=dir_info
                        )
                        dir_info.add_child(file_info)

                        self._files_scanned += 1
                        if self._files_scanned % self.progress_interval == 0:
                            await self._send_progress(file_info)

                    elif entry.is_dir(follow_symlinks=False):
                        # Check filesystem boundaries
                        if not self.cross_filesystems:
                            parent_dev = dir_info.path.stat().st_dev
                            child_dev = stat_info.st_dev
                            if parent_dev != child_dev:
                                continue

                        child_dir = DirInfo(
                            path=Path(entry.path),
                            size=0,
                            mtime=stat_info.st_mtime,
                            mode=stat_info.st_mode,
                            parent=dir_info
                        )
                        dir_info.add_child(child_dir)

                        # Only recurse if the next level won't exceed depth limit
                        if self.max_depth == 0 or (depth + 1) < self.max_depth:
                            await self._scan_recursive(child_dir, depth + 1)
                        else:
                            # At depth limit: mark and calculate total size without recursing
                            child_dir.at_depth_limit = True
                            child_dir.size = await self._calculate_dir_size(child_dir.path)

                except (PermissionError, OSError):
                    # Skip inaccessible files/directories
                    continue

        except (PermissionError, OSError):
            # Skip inaccessible directories
            pass

    async def _calculate_dir_size(self, dir_path: Path) -> int:
        """Calculate total size of directory without detailed scanning."""
        total_size = 0
        try:
            for entry in os.scandir(dir_path):
                try:
                    if entry.is_file(follow_symlinks=False):
                        stat_info = entry.stat(follow_symlinks=False)
                        if stat_info.st_size >= self.min_file_size:
                            total_size += stat_info.st_size
                    elif entry.is_dir(follow_symlinks=False):
                        # Recursively sum subdirectories
                        if not self._should_exclude(entry.name):
                            if not self.exclude_hidden or not entry.name.startswith('.'):
                                total_size += await self._calculate_dir_size(Path(entry.path))
                except (PermissionError, OSError):
                    continue
        except (PermissionError, OSError):
            pass

        return total_size

    async def _send_progress(self, node: FileInfo) -> None:
        """Send progress update."""
        if self.progress_callback:
            self.progress_callback(node)
            # Yield control to event loop
            await asyncio.sleep(0)

    def _should_exclude(self, name: str) -> bool:
        """Check if path matches exclusion patterns."""
        for pattern in self.exclude_patterns:
            # Simple pattern matching (could use fnmatch for full glob support)
            if pattern.startswith('*'):
                if name.endswith(pattern[1:]):
                    return True
            elif pattern.endswith('*'):
                if name.startswith(pattern[:-1]):
                    return True
            elif name == pattern:
                return True
        return False

    def cancel(self) -> None:
        """Cancel the scan operation."""
        self._cancelled = True


__all__ = ["AsyncScanJob"]
