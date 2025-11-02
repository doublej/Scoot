import { useState, useEffect } from 'react'
import { ScanProgress } from './components/ScanProgress'
import { FilterSettings } from './components/FilterSettings'
import { TreeMapWebGL } from './components/TreeMapWebGL'
import { ExtensionLegend } from './components/ExtensionLegend'
import { ExtensionStats } from './components/ExtensionStats'
import { useScanWebSocket } from './hooks/useScanWebSocket'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Alert, AlertDescription } from './components/ui/alert'
import { AlertCircle } from 'lucide-react'
import './App.css'

export default function App() {
  const [path, setPath] = useState('/Users/jurrejan/Documents/development/python/disk-usage-macos/codex')
  const [config, setConfig] = useState<any>(null)
  const { scanning, progress, tree, error, fromCache, startScan, cancelScan } = useScanWebSocket()

  useEffect(() => {
    // Load configuration
    fetch('/api/config')
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error)
  }, [])

  const handleScan = () => {
    startScan(path)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold">Disk Usage Analyzer</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Scan Controls */}
          <div className="flex gap-4">
            <Input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="Enter path to scan"
              className="flex-1"
              disabled={scanning}
            />
            {scanning ? (
              <Button
                onClick={cancelScan}
                variant="destructive"
                size="lg"
              >
                Cancel
              </Button>
            ) : (
              <Button
                onClick={handleScan}
                size="lg"
              >
                Scan
              </Button>
            )}
          </div>

          {/* Progress */}
          {scanning && <ScanProgress progress={progress} />}

          {/* Error */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Filter Settings */}
          {config && <FilterSettings config={config} />}

          {/* Results */}
          {tree && !scanning && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Results</h2>
                {fromCache && (
                  <span className="text-sm text-muted-foreground">Loaded from cache</span>
                )}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <TreeMapWebGL data={tree} config={config} />
                </div>
                <div className="space-y-4">
                  <ExtensionStats tree={tree} />
                  <ExtensionLegend config={config} tree={tree} />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
