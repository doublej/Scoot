#!/usr/bin/env python3
"""Simple server runner with socket management."""

import socket
import sys
from pathlib import Path

# Add src to path
src_dir = Path(__file__).parent / "src"
sys.path.insert(0, str(src_dir))


def check_port(port: int) -> bool:
    """Check if port is available."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(("127.0.0.1", port))
            return True
        except OSError:
            return False


def main():
    port = 8924

    if not check_port(port):
        print(f"Port {port} is already in use")
        sys.exit(1)

    print(f"Starting server on http://127.0.0.1:{port}")
    print("Press Ctrl+C to stop")

    import uvicorn
    from diskusage.web.api import app

    uvicorn.run(
        app,
        host="127.0.0.1",
        port=port,
        log_level="info",
        access_log=False
    )


if __name__ == "__main__":
    main()
