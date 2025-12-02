"""Configuration management for disk usage analyzer."""

from pathlib import Path
from typing import Dict, List, Optional, Any

import yaml


class Config:
    """Application configuration loaded from YAML."""

    def __init__(self, config_path: Optional[Path] = None):
        if config_path is None:
            config_path = Path(__file__).parents[3] / "config.yaml"

        self.config_path = config_path
        self._data: Dict[str, Any] = {}
        self.load()

    def load(self) -> None:
        """Load configuration from YAML file."""
        if not self.config_path.exists():
            raise FileNotFoundError(f"Config file not found: {self.config_path}")

        with open(self.config_path, 'r') as f:
            self._data = yaml.safe_load(f)

    def save(self) -> None:
        """Save configuration to YAML file."""
        with open(self.config_path, 'w') as f:
            yaml.safe_dump(self._data, f, default_flow_style=False, sort_keys=False)

    def get(self, key: str, default: Any = None) -> Any:
        """Get configuration value by dot-notation key."""
        keys = key.split('.')
        value = self._data

        for k in keys:
            if isinstance(value, dict):
                value = value.get(k)
                if value is None:
                    return default
            else:
                return default

        return value

    def set(self, key: str, value: Any) -> None:
        """Set configuration value by dot-notation key."""
        keys = key.split('.')
        data = self._data

        for k in keys[:-1]:
            if k not in data:
                data[k] = {}
            data = data[k]

        data[keys[-1]] = value

    @property
    def exclude_patterns(self) -> List[str]:
        """Get exclusion patterns."""
        return self.get('filters.exclude_patterns', [])

    @property
    def exclude_hidden(self) -> bool:
        """Whether to exclude hidden files."""
        return self.get('filters.exclude_hidden', False)

    @property
    def cross_filesystems(self) -> bool:
        """Whether to cross filesystem boundaries."""
        return self.get('filters.cross_filesystems', False)

    @property
    def min_file_size(self) -> int:
        """Minimum file size in bytes."""
        return self.get('filters.min_file_size', 0)

    @property
    def max_scan_depth(self) -> int:
        """Maximum directory depth to scan (0 = unlimited)."""
        return self.get('filters.max_depth', 0)

    @property
    def extension_templates(self) -> Dict[str, Dict]:
        """Get extension templates."""
        return self.get('extension_templates', {})

    @property
    def special_folders(self) -> Dict[str, Dict]:
        """Get special folder configurations."""
        return self.get('special_folders', {})

    @property
    def progress_update_interval(self) -> int:
        """Files between progress updates."""
        return self.get('performance.progress_update_interval', 100)

    @property
    def max_depth(self) -> int:
        """Maximum directory depth."""
        return self.get('performance.max_depth', 50)

    @property
    def server_port(self) -> int:
        """Server port."""
        return self.get('server.port', 8924)

    @property
    def cors_origins(self) -> List[str]:
        """CORS allowed origins."""
        return self.get('server.cors_origins', [])

    def get_extension_info(self, ext: str) -> Optional[Dict]:
        """Get color, icon, and description for file extension."""
        ext = ext.lower()
        for template_name, template_data in self.extension_templates.items():
            if ext in template_data.get('extensions', []):
                return {
                    'category': template_name,
                    'color': template_data.get('color'),
                    'icon': template_data.get('icon'),
                    'description': template_data.get('description')
                }
        return None

    def get_folder_info(self, path: Path) -> Optional[Dict]:
        """Get info for special folders."""
        path_str = str(path)

        for category, data in self.special_folders.items():
            for special_path in data.get('paths', []):
                special_path = Path(special_path).expanduser()
                if path.resolve() == special_path.resolve():
                    return {
                        'category': category,
                        'color': data.get('color'),
                        'icon': data.get('icon'),
                        'warn_on_scan': data.get('warn_on_scan', False)
                    }
        return None


# Global config instance
_config: Optional[Config] = None


def get_config() -> Config:
    """Get global configuration instance."""
    global _config
    if _config is None:
        _config = Config()
    return _config


__all__ = ["Config", "get_config"]
