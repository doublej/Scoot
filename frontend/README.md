# Disk Usage Analyzer - Frontend

Modern React frontend with shadcn/ui components for the disk usage analyzer.

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components (Radix UI + Tailwind)
- **D3.js** - Data visualization for treemap
- **Lucide React** - Beautiful icon set

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at http://localhost:5173

The Vite dev server is configured to proxy API requests to the backend at `localhost:8924`.

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## Project Structure

```
src/
├── components/       # React components
│   ├── ScanProgress.tsx     # Real-time progress display
│   ├── FilterSettings.tsx   # Active filters and templates
│   └── TreeMap.tsx          # D3.js treemap visualization
├── hooks/            # Custom React hooks
│   └── useScanWebSocket.ts  # WebSocket connection for scans
├── lib/              # Utility functions
│   └── utils.ts      # Common utilities (cn, formatBytes)
├── App.tsx           # Main application component
├── main.tsx          # React entry point
└── index.css         # Global styles + Tailwind

## Features

### Real-Time Progress
- WebSocket connection shows live scan progress
- File count, directory count, and total size updates
- Current path being scanned

### Filter Configuration
- Displays active exclusion patterns
- Shows extension categories with colors
- Visual representation of configuration

### Treemap Visualization
- D3.js squarified treemap algorithm
- Color-coded by file extension categories
- Hover effects and tooltips
- Size-proportional tiles

### Configuration-Driven
- Extension categories from backend config
- Special folder highlighting
- System folder warnings

## Development

### Adding New Components

Components follow shadcn/ui patterns:
1. Use Radix UI primitives
2. Style with Tailwind
3. Use `cn()` utility for conditional classes

### API Integration

Backend API endpoints:
- `POST /api/scan` - Synchronous scan (legacy)
- `WebSocket /ws/scan?path=<path>` - Real-time scan with progress
- `GET /api/config` - Get configuration

### WebSocket Protocol

Messages from server:
```json
{"type": "started", "path": "/some/path"}
{"type": "progress", "files": 100, "directories": 10, "total_size": 1024000, "current_path": "/..."}
{"type": "complete", "tree": {...}, "files": 1000, "directories": 50}
{"type": "error", "message": "error details"}
{"type": "warning", "message": "warning details"}
```

## Configuration

Vite proxy configuration in `vite.config.ts`:
- API requests to `/api/*` proxied to `localhost:8924`
- WebSocket connections to `/ws/*` proxied to `ws://localhost:8924`

## Styling

Uses Tailwind with custom CSS variables for theming:
- Dark mode ready (toggle not yet implemented)
- shadcn/ui design tokens
- Consistent spacing and typography

## License

GPL-2.0-or-later
