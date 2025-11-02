"""Unit tests for the local filesystem scanner."""

from __future__ import annotations

from pathlib import Path

from diskusage.model import DiskUsageTree, TreeStatistics
from diskusage.scanner import DirInfo, ExclusionRules, LocalScanJob
from tests.fixtures.sample_trees import create_sample_tree


def test_local_scan_collects_directory_tree(tmp_path: Path) -> None:
    create_sample_tree(tmp_path)

    job = LocalScanJob()
    root = job.scan(tmp_path)

    assert root.path == tmp_path
    assert root.size == len("root") + len("alpha") + len("binary") + len("nested")

    child_names = sorted(child.name for child in root.iter_children())
    assert child_names == ["folder_a", "folder_b", "root.txt"]

    folder_b = next(child for child in root.iter_children() if child.name == "folder_b")
    assert isinstance(folder_b, DirInfo)
    assert folder_b.size == len("binary") + len("nested")

    tree = DiskUsageTree(root)
    stats = TreeStatistics(root)
    assert tree.total_size == stats.total_size
    assert stats.file_count == 4
    assert stats.directory_count == 4


def test_exclusion_rules_skip_requested_patterns(tmp_path: Path) -> None:
    create_sample_tree(tmp_path)

    rules = ExclusionRules(["*.bin"])
    job = LocalScanJob(exclusions=rules)
    root = job.scan(tmp_path)

    names = [child.name for child in root.iter_children()]
    b_folder = next(child for child in root.iter_children() if child.name == "folder_b")
    assert isinstance(b_folder, DirInfo)

    # root.txt should remain while b.bin is excluded from folder_b
    assert "root.txt" in names
    assert all(grandchild.name != "b.bin" for grandchild in b_folder.iter_children())


def test_max_depth_limits_recursion(tmp_path: Path) -> None:
    create_sample_tree(tmp_path)

    job = LocalScanJob(max_depth=0)
    root = job.scan(tmp_path)

    nested_directory = next(child for child in root.iter_children() if child.name == "folder_b")
    assert isinstance(nested_directory, DirInfo)
    assert nested_directory.size == 0
    assert list(nested_directory.iter_children()) == []
