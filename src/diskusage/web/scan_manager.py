"""Scan session manager for tracking active and completed scans."""

from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Optional
from uuid import uuid4


@dataclass
class ScanProgress:
    """Progress state for an active scan."""
    files: int = 0
    directories: int = 0
    total_size: int = 0
    current_path: str = ""


@dataclass
class ScanSession:
    """Represents an active or completed scan session."""
    session_id: str
    path: str
    started_at: datetime
    progress: ScanProgress = field(default_factory=ScanProgress)
    completed: bool = False
    result: Optional[dict] = None
    error: Optional[str] = None


class ScanManager:
    """Manages scan sessions globally for state recovery."""

    _instance: Optional["ScanManager"] = None

    def __init__(self):
        self._active: dict[str, ScanSession] = {}  # session_id -> session
        self._by_path: dict[str, str] = {}  # path -> session_id
        self._completed: dict[str, ScanSession] = {}  # path -> last completed session
        self._max_completed = 5

    @classmethod
    def get(cls) -> "ScanManager":
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

    def start_scan(self, path: str) -> str:
        """Register a new scan, return session ID."""
        session_id = uuid4().hex[:8]
        session = ScanSession(
            session_id=session_id,
            path=path,
            started_at=datetime.now()
        )
        self._active[session_id] = session
        self._by_path[path] = session_id
        return session_id

    def update_progress(self, session_id: str, files: int, directories: int,
                       total_size: int, current_path: str) -> None:
        """Update progress for an active scan."""
        session = self._active.get(session_id)
        if session:
            session.progress.files = files
            session.progress.directories = directories
            session.progress.total_size = total_size
            session.progress.current_path = current_path

    def complete_scan(self, session_id: str, result: dict) -> None:
        """Mark scan as completed with result."""
        session = self._active.pop(session_id, None)
        if session:
            session.completed = True
            session.result = result
            del self._by_path[session.path]

            # Store in completed (evict oldest if needed)
            if len(self._completed) >= self._max_completed:
                oldest_path = min(self._completed,
                    key=lambda p: self._completed[p].started_at)
                del self._completed[oldest_path]
            self._completed[session.path] = session

    def fail_scan(self, session_id: str, error: str) -> None:
        """Mark scan as failed."""
        session = self._active.pop(session_id, None)
        if session:
            session.error = error
            if session.path in self._by_path:
                del self._by_path[session.path]

    def get_status(self, path: str) -> dict:
        """Get status for a path (active or last completed)."""
        # Check active first
        session_id = self._by_path.get(path)
        if session_id:
            session = self._active[session_id]
            return {
                "active": True,
                "session_id": session.session_id,
                "progress": {
                    "files": session.progress.files,
                    "directories": session.progress.directories,
                    "total_size": session.progress.total_size,
                    "current_path": session.progress.current_path
                },
                "started_at": session.started_at.isoformat()
            }

        # Check completed
        completed = self._completed.get(path)
        if completed:
            return {
                "active": False,
                "completed": True,
                "session_id": completed.session_id,
                "result": completed.result,
                "started_at": completed.started_at.isoformat()
            }

        return {"active": False, "completed": False}

    def get_session(self, session_id: str) -> Optional[ScanSession]:
        """Get active session by ID."""
        return self._active.get(session_id)

    def get_all_active(self) -> list[dict]:
        """Get all active scans."""
        return [
            {
                "session_id": s.session_id,
                "path": s.path,
                "progress": {
                    "files": s.progress.files,
                    "directories": s.progress.directories,
                    "total_size": s.progress.total_size,
                    "current_path": s.progress.current_path
                },
                "started_at": s.started_at.isoformat()
            }
            for s in self._active.values()
        ]


def get_scan_manager() -> ScanManager:
    """Get the global scan manager instance."""
    return ScanManager.get()
