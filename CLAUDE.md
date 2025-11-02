# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This repository contains parallel Python ports of the KDirStat disk usage analyzer:

- `codex/` - Active development branch with complete Python implementation
- `claude/` - Alternative implementation branch
- Both contain original C++ KDirStat sources in `kdirstat/` subdirectories (reference only)

**Primary development location: `codex/`**

## Development Commands

All commands should be run from the `codex/` directory:

```bash
cd codex

# Setup environment
uv venv
source .venv/bin/activate
uv pip install -e .[dev]

# Run web server
python run_server.py                           # Start on http://localhost:8924

# Run tests
pytest                                          # All tests
pytest tests/unit/test_scanner.py              # Specific file
pytest tests/unit/test_scanner.py::test_name   # Single test

# Package management
uv pip install <package>                       # Always use uv, never pip
```

## Architecture

### Core Module Organization (`codex/src/diskusage/`)

```
scanner/     # Filesystem scanning (base.py: FileInfo/DirInfo/ScanJob, local.py: LocalScanJob)
model/       # Tree structures (tree.py: DiskUsageTree, stats.py: TreeStatistics)
visualization/ # Treemap and tree view widgets (planned)
ui/          # Application windows and dialogs (planned)
actions/     # Cleanup actions (planned)
config/      # Configuration management (planned)
```

### Key Classes

**FileInfo** (`scanner/base.py`): Lightweight filesystem entry with `__slots__` for memory efficiency
**DirInfo** (`scanner/base.py`): Directory node with child management and aggregate statistics
**LocalScanJob** (`scanner/local.py`): Synchronous scanner using `os.scandir()`
**DiskUsageTree** (`model/tree.py`): Root container with depth-first iteration

### Design Patterns

- **Memory optimization**: `__slots__` for handling 150k+ files
- **Parent-child links**: `DirInfo.children` for tree structure, `FileInfo.parent` for upward traversal
- **Lazy evaluation**: Statistics computed on-demand and cached
- **Iterator pattern**: `iter_depth_first()`, `iter_directories()`, `find()` methods

## C++ to Python Translation

Original KDirStat class mappings:
- `KFileInfo` → `FileInfo`
- `KDirInfo` → `DirInfo`
- `KDirTree` → `DiskUsageTree`
- `KLocalDirReadJob` → `LocalScanJob`
- Qt signals/slots → Direct callbacks + Observer pattern (planned: asyncio)

## Test Structure

```
tests/
├── fixtures/sample_trees.py   # Test directory structure generators
├── unit/                       # Component-level tests
└── integration/                # End-to-end workflow tests (planned)
```

All tests use `tmp_path` fixture for isolated filesystem operations.

## Implementation Status

**Completed**: Core scanner interface, local filesystem scanner, tree model, depth-first iteration

**Planned**: Async scanner, treemap visualization (squarified algorithm with cushion rendering), PyQt6 UI, cleanup actions, cache file I/O

## Performance Targets

- Scan 100k files: <5s
- Memory: <200MB for 1M files
- UI responsiveness: 60 FPS during scanning (when implemented)

## Documentation

- `codex/PYTHON_PORT_ARCHITECTURE.md` - Detailed implementation design
- `codex/KDIRSTAT_ARCHITECTURE.md` - Original C++ architecture analysis
- `codex/README.md` - Project overview
