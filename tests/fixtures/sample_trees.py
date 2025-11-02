"""Helpers for constructing sample directory trees during tests."""

from __future__ import annotations

from pathlib import Path
from typing import Dict


def create_sample_tree(base: Path) -> Dict[str, Path]:
    """Create a small fixture tree used by scanner tests."""

    base.mkdir(parents=True, exist_ok=True)

    folders = {
        "folder_a": base / "folder_a",
        "folder_b": base / "folder_b",
        "nested": base / "folder_b" / "nested",
    }
    for folder in folders.values():
        folder.mkdir(parents=True, exist_ok=True)

    files = {
        "root": base / "root.txt",
        "a": folders["folder_a"] / "a.txt",
        "b": folders["folder_b"] / "b.bin",
        "nested": folders["nested"] / "deep.log",
    }

    files["root"].write_text("root", encoding="utf-8")
    files["a"].write_text("alpha", encoding="utf-8")
    files["b"].write_bytes(b"binary")
    files["nested"].write_text("nested", encoding="utf-8")

    return {**folders, **files}
