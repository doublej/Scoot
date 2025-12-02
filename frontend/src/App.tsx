import { useState, useEffect } from 'react'
import { ScanProgress } from './components/ScanProgress'
import { FilterSettings } from './components/FilterSettings'
import { SizeFilter } from './components/SizeFilter'
import { DepthLimitControl } from './components/DepthLimitControl'
import { ExtensionCategories } from './components/ExtensionCategories'
import { TreeMapWebGL } from './components/TreeMapWebGL'
import { ExtensionLegend } from './components/ExtensionLegend'
import { ExtensionStats } from './components/ExtensionStats'
import { ListView } from './components/ListView'
import { useScanWebSocket } from './hooks/useScanWebSocket'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Alert, AlertDescription } from './components/ui/alert'
import { AlertCircle, X } from 'lucide-react'
import './App.css'

export default function App() {
  const [path, setPath] = useState('/Users/jurrejan/Documents/development/python/disk-usage-macos/codex')
  const [config, setConfig] = useState<any>(null)
  const [statusChecked, setStatusChecked] = useState(false)
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'config'>('map')
  const { scanning, progress, tree, error, fromCache, startScan, cancelScan, checkStatus, scanStartTime } = useScanWebSocket()

  const handleSizeFilterChange = async (minSizeBytes: number) => {
    await fetch('http://localhost:8924/api/config/filter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ min_file_size: minSizeBytes })
    })
  }

  const loadConfig = () => {
    fetch('http://localhost:8924/api/config')
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error)
  }

  const clearCache = async () => {
    await fetch('http://localhost:8924/api/cache', { method: 'DELETE' })
    alert('Cache cleared')
  }

  useEffect(() => {
    loadConfig()
  }, [])

  useEffect(() => {
    if (!statusChecked && path) {
      checkStatus(path).then(() => setStatusChecked(true))
    }
  }, [path, statusChecked, checkStatus])

  return (
    <div className="min-h-screen grid-bg">
      {/* Header */}
      <header className="border-b-2 border-foreground bg-background">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-medium">diskusage</h1>
              <nav className="flex border-l border-border">
                {(['map', 'list', 'config'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm border-r border-border transition-colors ${
                      activeTab === tab
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {fromCache && tree && <span className="text-primary">[CACHED]</span>}
              {scanning && <span className="text-primary animate-pulse">[SCANNING]</span>}
            </div>
          </div>
        </div>
      </header>

      {/* Input Bar */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto py-3">
          <div className="flex gap-2">
            <div className="flex-1 flex border border-border">
              <span className="px-3 py-2 bg-secondary text-muted-foreground text-xs border-r border-border">
                PATH
              </span>
              <Input
                type="text"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                placeholder="/path/to/directory"
                className="flex-1 border-0 h-auto py-2"
                disabled={scanning}
              />
            </div>
            {scanning ? (
              <Button onClick={cancelScan} variant="destructive" className="px-6">
                <X className="w-4 h-4 mr-2" />
                STOP
              </Button>
            ) : (
              <Button onClick={() => startScan(path)} className="px-6 bg-primary text-primary-foreground">
                SCAN
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Progress */}
      {scanning && (
        <div className="border-b border-border">
          <div className="container mx-auto">
            <ScanProgress progress={progress} startTime={scanStartTime} />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="border-b border-destructive bg-destructive/5">
          <div className="container mx-auto py-2">
            <Alert variant="destructive" className="border-0 p-0 bg-transparent">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto py-6">
        {activeTab === 'map' && (
          <>
            {tree && !scanning ? (
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                <div className="xl:col-span-3">
                  <TreeMapWebGL data={tree} config={config} />
                </div>
                <div className="space-y-4">
                  <ExtensionStats tree={tree} />
                  <ExtensionLegend config={config} tree={tree} />
                </div>
              </div>
            ) : (
              <div className="border border-border p-12 text-center text-muted-foreground">
                Enter path and click SCAN to analyze disk usage
              </div>
            )}
          </>
        )}

        {activeTab === 'list' && (
          <>
            {tree && !scanning ? (
              <ListView tree={tree} />
            ) : (
              <div className="border border-border p-12 text-center text-muted-foreground">
                No data. Run a scan first.
              </div>
            )}
          </>
        )}

        {activeTab === 'config' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="label">CONFIGURATION</span>
              <Button onClick={clearCache} variant="outline" size="sm" className="text-xs">
                CLEAR CACHE
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {config && <DepthLimitControl config={config} onUpdate={loadConfig} />}
              {config && <FilterSettings config={config} onUpdate={loadConfig} />}
              {config && <ExtensionCategories config={config} onUpdate={loadConfig} />}
              <SizeFilter onFilterChange={handleSizeFilterChange} />
            </div>
            <p className="text-xs text-muted-foreground border-t border-border pt-3">
              Settings apply on next scan. Clear cache to rescan.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
