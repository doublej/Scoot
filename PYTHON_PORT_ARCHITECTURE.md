# Python Port Architecture for Disk Usage Analyzer

## Executive Summary
Complete Python port of KDirStat, broken into modular components with clear interfaces and modern Python patterns.

## Core Architecture Components

### 1. File System Scanner Module (`scanner/`)
**Purpose**: Asynchronous directory traversal and file system data collection

```python
scanner/
├── __init__.py
├── base.py          # Abstract scanner interface
├── local.py         # Local filesystem scanner using os.scandir()
├── async_scanner.py # AsyncIO-based scanner for non-blocking operations
├── cache.py         # Cache file reading/writing (.diskusage.cache.gz)
└── filters.py       # Exclusion rules and filtering logic
```

**Key Classes**:
- `FileInfo`: Base class for file/directory information (uses `__slots__` for memory efficiency)
- `DirInfo`: Directory-specific class with child management
- `ScanJob`: Abstract base for scanning operations
- `AsyncScanJob`: Asyncio implementation with progress callbacks
- `ExclusionRules`: Regex-based file filtering

**Communication**: Event-based using Python's `asyncio` and callback system

### 2. Data Model Module (`model/`)
**Purpose**: Tree data structure and statistics management

```python
model/
├── __init__.py
├── tree.py          # Main tree structure
├── node.py          # Tree node implementation
├── stats.py         # Statistics calculation and caching
└── iterators.py     # Various tree traversal patterns
```

**Key Classes**:
- `DiskUsageTree`: Root tree coordinator
- `TreeNode`: Individual node with lazy evaluation
- `Statistics`: Size calculations with caching
- `TreeIterator`: Multiple traversal strategies

### 3. Visualization Module (`visualization/`)
**Purpose**: TreeMap and tree view rendering

```python
visualization/
├── __init__.py
├── treemap/
│   ├── __init__.py
│   ├── widget.py    # Main treemap widget
│   ├── tile.py      # Individual tile rendering
│   ├── algorithms.py # Squarified treemap algorithm
│   └── cushion.py   # 3D cushion effect rendering
└── treeview/
    ├── __init__.py
    ├── widget.py    # Tree list widget
    └── columns.py   # Column definitions and sorting
```

**Key Classes**:
- `TreeMapWidget`: PyQt6 QGraphicsView-based treemap
- `TreeMapTile`: QGraphicsItem for individual tiles
- `SquarifiedAlgorithm`: Layout algorithm implementation
- `CushionRenderer`: 3D surface effect generator
- `TreeListWidget`: QTreeView-based hierarchical display

### 4. UI Framework Module (`ui/`)
**Purpose**: Main window, menus, and dialogs

```python
ui/
├── __init__.py
├── main_window.py   # Main application window
├── menus.py         # Menu and toolbar setup
├── dialogs/
│   ├── __init__.py
│   ├── settings.py  # Settings dialog
│   └── feedback.py  # Feedback dialog
└── widgets/
    ├── __init__.py
    ├── splitter.py  # Custom splitter widget
    └── progress.py  # Progress indicators
```

### 5. Actions Module (`actions/`)
**Purpose**: Cleanup and file operations

```python
actions/
├── __init__.py
├── base.py          # Abstract action interface
├── standard.py      # Standard cleanup actions
├── custom.py        # User-defined actions
└── executor.py      # Action execution and variable substitution
```

**Key Classes**:
- `CleanupAction`: Base action class with command expansion
- `ActionCollection`: Manages all available actions
- `ActionExecutor`: Subprocess execution with refresh policies

### 6. Configuration Module (`config/`)
**Purpose**: Settings management and persistence

```python
config/
├── __init__.py
├── settings.py      # Main settings manager
├── colors.py        # Color scheme configuration
├── cleanup.py       # Cleanup action configuration
└── persistence.py   # Save/load functionality
```

## Component Communication Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Main Window                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │              Controller/Coordinator              │    │
│  └─────────────────────────────────────────────────┘    │
│           ↓                    ↓              ↓          │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────┐   │
│   │   Scanner    │   │  Data Model  │   │  Actions  │   │
│   │   Module     │   │    (Tree)    │   │  Module   │   │
│   └──────────────┘   └──────────────┘   └──────────┘   │
│           ↓                    ↓                         │
│   ┌──────────────────────────────────────────────────┐  │
│   │              Visualization Layer                  │  │
│   │  ┌──────────────┐        ┌──────────────┐       │  │
│   │  │   TreeMap    │        │   TreeView   │       │  │
│   │  └──────────────┘        └──────────────┘       │  │
│   └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Communication Patterns**:
1. **Signals/Slots**: Using PyQt6's signal system for loose coupling
2. **Observer Pattern**: Model notifies views of changes
3. **Async/Await**: For non-blocking file system operations
4. **Callbacks**: Progress reporting during scanning

## Implementation Phases

### Phase 1: Core Functionality (MVP)
```python
# Minimal working analyzer
diskusage/
├── scanner.py       # Basic synchronous scanner
├── model.py         # Simple tree structure
├── treemap.py       # Basic treemap visualization
└── main.py          # Simple PyQt6 window
```

### Phase 2: Performance Optimizations
- Async scanning implementation
- Memory-efficient data structures
- Caching and lazy evaluation
- Time-sliced operations

### Phase 3: Full Feature Parity
- All cleanup actions
- Settings persistence
- Advanced visualizations
- Cross-platform support

## Technology Stack

### Core Dependencies
```toml
[project]
dependencies = [
    "PyQt6>=6.4.0",           # GUI framework
    "numpy>=1.24.0",          # Numerical operations for cushion rendering
    "Pillow>=10.0.0",         # Image processing for cushion effects
    "aiofiles>=23.0.0",       # Async file operations
    "send2trash>=1.8.0",      # Cross-platform trash operations
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "pytest-asyncio>=0.21.0",
    "pytest-qt>=4.0.0",
    "mypy>=1.0.0",
]
```

### Alternative Lightweight Stack (tkinter)
```python
# For simpler deployment without Qt dependencies
import tkinter as tk
from tkinter import ttk
import os
import json  # For settings
```

## Key Design Decisions

### 1. Memory Management
- Use `__slots__` for FileInfo/DirInfo classes
- Weak references for parent pointers
- Generator-based iteration for large trees
- Tile object pooling for treemap

### 2. Performance Strategies
- `os.scandir()` for efficient directory traversal
- Asyncio for non-blocking operations
- NumPy for cushion calculations
- Spatial indexing for visible tile detection

### 3. Cross-Platform Considerations
```python
import platform
import sys

class PlatformAdapter:
    @staticmethod
    def get_adapter():
        system = platform.system()
        if system == "Darwin":
            return MacOSAdapter()
        elif system == "Windows":
            return WindowsAdapter()
        else:
            return LinuxAdapter()
```

### 4. Testing Strategy
```python
# Test structure
tests/
├── unit/
│   ├── test_scanner.py
│   ├── test_model.py
│   └── test_algorithms.py
├── integration/
│   ├── test_scanning.py
│   └── test_visualization.py
└── fixtures/
    └── sample_trees.py
```

## Sample Implementation

### Scanner Module Example
```python
# scanner/async_scanner.py
import asyncio
import os
from pathlib import Path
from typing import Callable, Optional

class AsyncScanner:
    def __init__(self, progress_callback: Optional[Callable] = None):
        self.progress_callback = progress_callback
        self._cancelled = False

    async def scan(self, root_path: Path) -> DirInfo:
        """Asynchronously scan directory tree"""
        root = DirInfo(root_path)
        await self._scan_recursive(root)
        return root

    async def _scan_recursive(self, dir_info: DirInfo):
        if self._cancelled:
            return

        try:
            async for entry in self._async_scandir(dir_info.path):
                if entry.is_file():
                    file_info = FileInfo.from_entry(entry)
                    dir_info.add_child(file_info)
                elif entry.is_dir():
                    child_dir = DirInfo.from_entry(entry)
                    dir_info.add_child(child_dir)
                    await self._scan_recursive(child_dir)

                if self.progress_callback:
                    await self.progress_callback(dir_info)

        except PermissionError:
            pass  # Skip inaccessible directories
```

### TreeMap Algorithm Example
```python
# visualization/treemap/algorithms.py
class SquarifiedTreeMap:
    def layout(self, items: List[FileInfo], rect: QRect) -> List[TileLayout]:
        """Generate squarified treemap layout"""
        if not items:
            return []

        # Sort by size (largest first)
        sorted_items = sorted(items, key=lambda x: x.size, reverse=True)

        # Calculate scale factor
        total_size = sum(item.size for item in sorted_items)
        scale = (rect.width() * rect.height()) / total_size

        # Filter items too small to display
        min_size = 3  # pixels
        visible_items = [item for item in sorted_items
                        if item.size * scale >= min_size]

        return self._squarify(visible_items, rect, scale)
```

## Migration Path from C++

1. **Header Analysis**: Each `.h` file becomes a Python module
2. **Signal/Slot**: Qt signals → PyQt6 signals
3. **Memory Management**: RAII → Context managers and weak refs
4. **Iterators**: STL iterators → Python generators
5. **Templates**: C++ templates → Python generics/protocols

## Performance Benchmarks Target

- Scan 100,000 files: < 5 seconds
- Render 10,000 tiles: < 100ms
- Memory usage: < 200MB for 1M files
- UI responsiveness: 60 FPS during scanning

## Deployment Strategy

### macOS App Bundle
```bash
# Using py2app
python setup.py py2app
```

### Windows Executable
```bash
# Using PyInstaller
pyinstaller --windowed --onefile diskusage.py
```

### Linux AppImage
```bash
# Using appimage-builder
appimage-builder --recipe AppImageBuilder.yml
```

## Next Steps

1. Set up project structure with `uv` package manager
2. Implement core scanner module with tests
3. Build basic tree model
4. Create minimal treemap visualization
5. Add PyQt6 main window
6. Iterate on features based on priority