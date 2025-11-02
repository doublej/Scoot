# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Python port of KDirStat disk usage analyzer. This is a ground-up refactor translating the C++/Qt/KDE application into modern Python with a web-based UI for cross-platform accessibility.

## Development Commands

### Setup
```bash
uv venv
source .venv/bin/activate
uv pip install -e .[dev]
```

### Running the Application

**Backend Server:**
```bash
# Simple server runner (recommended)
python run_server.py

# Or directly with uvicorn (development with auto-reload)
uvicorn diskusage.web.api:app --reload --port 8924
```

**Frontend (React + shadcn/ui):**
```bash
cd frontend
npm install
npm run dev
```

Then open http://localhost:5173 in your browser (frontend dev server with Vite).

### Testing
```bash
# Run all tests
pytest

# Run with quiet output (default)
pytest -q

# Run specific test file
pytest tests/unit/test_scanner.py

# Run single test
pytest tests/unit/test_scanner.py::test_local_scan_collects_directory_tree
```

### Package Management
Always use `uv` for dependency management, never pip directly.

## Architecture Overview

### Module Structure
```
src/diskusage/
├── scanner/          # Filesystem scanning
│   ├── base.py       # Core abstractions (FileInfo, DirInfo, ScanJob)
│   ├── local.py      # Synchronous local scanner
│   ├── async_scanner.py  # Async scanner with progress callbacks
│   └── filters.py    # Exclusion pattern handling
├── model/            # Tree structures and statistics (tree.py, stats.py)
├── web/              # FastAPI backend
│   ├── api.py        # REST endpoints and WebSocket routes
│   ├── websocket.py  # Real-time scan progress handler
│   └── static/       # Legacy static files (deprecated)
├── config/           # Configuration system
│   └── settings.py   # YAML config loader
└── actions/          # Cleanup actions (planned)

frontend/             # React + shadcn/ui frontend
├── src/
│   ├── components/   # React components (ScanProgress, FilterSettings, TreeMap)
│   ├── hooks/        # Custom hooks (useScanWebSocket)
│   ├── lib/          # Utilities
│   └── App.tsx       # Main application
└── config.yaml       # Application configuration
```

### Core Classes

**scanner/base.py**:
- `FileInfo`: Lightweight filesystem entry with `__slots__` for memory efficiency
- `DirInfo`: Directory node with child management and aggregate statistics
- `ScanJob`: Abstract scanner interface

**scanner/local.py**:
- `LocalScanJob`: Synchronous local filesystem scanner using `os.scandir()`
- `ExclusionRules`: Pattern-based file filtering

**model/tree.py**:
- `DiskUsageTree`: Root container with depth-first iteration and search

**model/stats.py**:
- `TreeStatistics`: Aggregate calculations (total size, file/directory counts)

**web/api.py**:
- FastAPI application with `/api/scan` endpoint
- Serves static files and HTML frontend
- Serializes tree data to JSON

**scanner/async_scanner.py**:
- `AsyncScanJob`: Asynchronous scanner with progress callbacks
- Respects configuration filters and exclusion patterns
- Yields control every N files for real-time updates

**config/settings.py**:
- `Config`: YAML-based configuration management
- Extension templates with colors and icons
- Special folder handling (system, dev, etc.)
- Filter patterns loaded from config.yaml

**web/api.py**:
- REST endpoints: `/api/scan`, `/api/config`
- WebSocket route: `/ws/scan` for real-time progress
- CORS middleware for frontend integration

**frontend/src/components**:
- `ScanProgress`: Real-time progress UI with file/dir/size counters
- `FilterSettings`: Shows active filters and extension categories
- `TreeMap`: D3.js visualization with color-coded extensions

### Key Design Patterns

1. **Memory Optimization**: `FileInfo` uses `__slots__` to minimize footprint for handling 150k+ files
2. **Parent-Child Links**: `DirInfo.children` maintains tree structure; `FileInfo.parent` enables upward traversal
3. **Lazy Evaluation**: Statistics computed on-demand and cached in `DirInfo`
4. **Iterator Pattern**: Multiple traversal strategies (depth-first, directory-only, filtered)
5. **Web Architecture**: FastAPI backend + D3.js frontend for cross-platform access

## Configuration System (`config.yaml`)

All settings are centralized in `config.yaml`:

### Filters
- **exclude_patterns**: Glob-style patterns (node_modules, *.pyc, .git, etc.)
- **exclude_hidden**: Toggle for hidden files (default: false)
- **cross_filesystems**: Allow crossing filesystem boundaries

### Extension Templates
Predefined categories with colors and icons:
- **code**: .py, .js, .ts, .java, .cpp (blue)
- **documents**: .pdf, .doc, .md (orange)
- **images**: .jpg, .png, .svg (purple)
- **videos**: .mp4, .avi, .mov (pink)
- **audio**: .mp3, .wav, .flac (teal)
- **archives**: .zip, .tar, .gz (yellow)
- **data**: .json, .xml, .csv (green)

### Special Folders (macOS)
- **system**: /System, /Library, /usr (red, warns on scan)
- **important**: ~/Documents, ~/Desktop, ~/Downloads (blue)
- **development**: ~/Projects, ~/Code (violet)
- **applications**: /Applications (cyan)

## Architecture

### Backend (FastAPI)
- `/api/scan` - POST endpoint for synchronous scans
- `/ws/scan` - WebSocket endpoint for real-time progress
- `/api/config` - GET endpoint returns configuration
- CORS enabled for frontend integration

### Frontend (React + shadcn/ui + Vite)
- **Modern React 18** with TypeScript
- **shadcn/ui components** built on Radix UI
- **Tailwind CSS** for styling with dark mode support
- **D3.js** for treemap visualization
- **WebSocket hook** for real-time scan progress
- **Vite dev server** with HMR and proxy to backend

## C++ to Python Translation Guidelines

This port follows the original KDirStat C++ architecture:

- **KFileInfo → FileInfo**: Base filesystem entry class
- **KDirInfo → DirInfo**: Directory node with children
- **KDirTree → DiskUsageTree**: Root tree container
- **KLocalDirReadJob → LocalScanJob**: Local filesystem scanner
- **KDirTreeIterators → DiskUsageTree.iter_***: Tree traversal methods

### Signal/Slot Pattern
The original uses Qt signals for loose coupling. Web UI port uses:
- REST API for scan requests
- WebSocket for real-time progress (planned)
- JSON serialization for data transfer

### Time-Sliced Operations
Original C++ uses QTimer for non-blocking scans. Web UI port uses:
- HTTP async handlers via FastAPI
- WebSocket streaming for progress updates
- Client-side rendering with D3.js

## Testing Strategy

**fixtures/sample_trees.py**: Creates test directory structures
**unit/**: Component-level tests (scanner, model, stats)
**integration/**: End-to-end workflow tests (planned)

All tests use `tmp_path` fixture for isolated filesystem operations.

## Performance Targets

- Scan 100,000 files: < 5 seconds
- Memory usage: < 200MB for 1M files
- Browser rendering: Smooth treemap interaction for 10k+ nodes

## Current Implementation Status

**Completed**:
- Core scanner interface (`ScanJob`, `FileInfo`, `DirInfo`)
- Synchronous and asynchronous scanners
- **YAML configuration system** (`config.yaml`)
- **Extension templates** with color coding
- **Special folder handling** (system, dev, apps, etc.)
- **Default exclusion filters** (node_modules, .git, __pycache__, etc.)
- **Real-time progress tracking** via WebSocket
- **React + shadcn/ui frontend** with Vite
- **Progress UI component** showing files/dirs/size in real-time
- **Filter settings display** with active patterns
- **D3.js treemap visualization** color-coded by extension/folder type
- Tree model and statistics
- FastAPI backend with REST and WebSocket endpoints

**Planned**:
- Enhanced treemap interactivity (zoom, drill-down, click-to-focus)
- Cleanup actions with file operations
- Cache file read/write (`.diskusage.cache.gz`)
- Filter editing in UI (enable/disable patterns)
- Authentication for multi-user deployments
- Dark mode toggle
