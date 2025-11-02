# Disk Usage Analyzer

Python port of KDirStat with WebGL treemap visualization.

![3D Depth Visualization](docs/screenshots/depth-mode-3d.png)
*3D depth mode - elevation represents folder nesting level*

## Features

### Visualization
- WebGL rendering using Three.js
- 2D flat treemap layout
- 3D mode with extruded boxes
- Orbit/pan/zoom camera controls
- Hover tooltips with file details

### Depth Modes
- **Size**: Box height = file size (logarithmic scale)
- **Depth**: Box elevation = nesting level
  - Color gradient: blue (root) to red (deep)
  - Identifies deeply nested folder structures

### File Classification
- 19 extension categories covering 344+ file types
- Color-coded by category
- Categories: code, documents, images, videos, audio, archives, 3D models, fonts, spreadsheets, presentations, binaries, databases, scripts, encrypted, system files, disk images, web assets, ebooks

### Implementation
- Async filesystem scanner with progress callbacks
- In-memory result caching (LRU, configurable size)
- WebSocket for real-time scan updates
- Configurable exclusion patterns
- Scan cancellation support

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

1. Enter directory path
2. Click Scan
3. Toggle 2D/3D mode
4. In 3D mode, select Size or Depth visualization

**Controls:**
- Left drag: rotate
- Right drag: pan
- Scroll: zoom
- Hover: file details

## Configuration

Edit `config.yaml`:
- Exclusion patterns
- Extension categories and colors
- Special folder definitions
- Performance limits

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

## Performance

Tested on MacBook Pro M1:
- 100k files: ~3s scan time
- 1M files: ~180MB memory
- WebGL: 60 FPS up to 150k nodes
- Progress updates: every 100 files

## Credits

Python port of [KDirStat](https://github.com/shundhammer/kdirstat) by Stefan Hundhammer.
