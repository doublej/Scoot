# Disk Usage Analyzer

A modern, GPU-accelerated disk usage analyzer with interactive 3D visualization. Python port of KDirStat with WebGL-powered treemap rendering for analyzing folder structures and finding disk space hogs.

![3D Depth Visualization](docs/screenshots/depth-mode-3d.png)
*3D depth mode showing folder nesting levels as elevation - deeper files appear higher*

## Features

### GPU-Accelerated Visualization
- **WebGL rendering** with Three.js for smooth 60 FPS performance
- Handle 100k+ files without lag
- Real-time hover interactions with raycasting

### Dual View Modes
- **2D Mode**: Classic flat treemap layout
- **3D Mode**: Extruded boxes with interactive camera controls
  - Orbit, pan, and zoom
  - Physically-based rendering with lighting

### Depth Visualization
- **Size Mode**: Box height represents file size
- **Depth Mode**: Elevation shows folder nesting levels
  - Staircase effect for hierarchical structure
  - Color gradient from blue (shallow) to red (deep)
  - Perfect for spotting over-engineered folder trees

### Smart File Classification
- 19 extension categories with 344+ file types
- Automatic color-coding by extension
- Categories: code, documents, images, videos, audio, archives, 3D models, fonts, spreadsheets, presentations, databases, scripts, encrypted files, and more

### Performance Features
- **Result caching**: Instant reload for previously scanned folders
- **Real-time progress**: WebSocket updates during scanning
- **Scan cancellation**: Stop long-running scans
- **Efficient scanning**: Async scanner with configurable filters

### Analytics
- File type breakdown with counts and sizes
- Statistics: total size, file count, max depth, avg size
- Sortable legend showing largest categories first

## Quick Start

### Backend (FastAPI + Python)
```bash
cd codex
uv venv
source .venv/bin/activate
uv pip install -e .[dev]
python run_server.py
```

Server runs on http://localhost:8924

### Frontend (React + Vite)
```bash
cd codex/frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173

## Usage

1. Enter a path in the search box (default: current project folder)
2. Click **Scan** to analyze the directory
3. View results in the interactive treemap
4. Toggle between **2D** and **3D** modes
5. In 3D mode, switch between **Size** and **Depth** visualization
6. Use **File Type Breakdown** to see category distribution

### 3D Controls
- **Left drag**: Rotate view
- **Right drag**: Pan
- **Scroll**: Zoom in/out
- **Hover**: Show file details

## Configuration

Edit `codex/config.yaml` to customize:
- Exclusion patterns (node_modules, .git, etc.)
- Extension categories and colors
- Special folder handling
- Performance settings

## Architecture

```
codex/
├── src/diskusage/        # Backend Python modules
│   ├── scanner/          # Filesystem scanning (sync & async)
│   ├── model/            # Tree structures and statistics
│   ├── cache/            # Result caching
│   ├── config/           # YAML configuration
│   └── web/              # FastAPI + WebSocket server
├── frontend/             # React + TypeScript frontend
│   └── src/
│       ├── components/   # React components
│       │   ├── TreeMapWebGL.tsx     # 3D visualization
│       │   ├── ExtensionLegend.tsx  # Category breakdown
│       │   └── ExtensionStats.tsx   # Statistics panel
│       └── hooks/        # WebSocket integration
└── tests/                # Unit and integration tests
```

## Technology Stack

**Backend:**
- Python 3.11+ with type hints
- FastAPI for REST + WebSocket API
- Uvicorn ASGI server
- PyYAML for configuration

**Frontend:**
- React 18 with TypeScript
- Three.js for WebGL rendering
- D3.js for treemap layout
- shadcn/ui components
- Tailwind CSS
- Vite build system

## Development

### Testing
```bash
cd codex
pytest                              # Run all tests
pytest tests/unit/test_scanner.py  # Specific test file
```

### API Endpoints
- `POST /api/scan` - Synchronous scan
- `WS /ws/scan?path=<path>` - Real-time scan with progress
- `GET /api/config` - Get configuration
- `GET /api/cache/status` - Cache statistics
- `DELETE /api/cache` - Clear cache

## Performance Targets

- Scan 100k files: < 5 seconds
- Memory usage: < 200MB for 1M files
- WebGL rendering: 60 FPS with 150k+ nodes
- UI responsiveness: Real-time updates every 100 files

## Credits

Python port of [KDirStat](https://github.com/shundhammer/kdirstat) by Stefan Hundhammer.
