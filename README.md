# Disk Usage Analyzer (Python Port)

This project tracks a ground-up Python refactor of the historic KDirStat disk usage analyzer. The goal is to deliver a modern, cross-platform application with a modular architecture, native macOS support, and a testable code base.

## Project Layout

```
src/diskusage/       # Application source code grouped by feature modules
    scanner/         # Filesystem scanning and cache logic
    model/           # Tree data structures and statistics
    visualization/   # Treemap and tree view widgets
    ui/              # Windows, menus, dialogs, shared widgets
    actions/         # Cleanup actions and execution helpers
    config/          # Persistent configuration handling

tests/               # Unit and integration tests
kdirstat/            # Original C++ sources kept for reference
```

## Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
pytest
```
