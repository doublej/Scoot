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
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { AlertCircle, Layers, List, Sliders, Trash2, Play, X, Database } from 'lucide-react'
import './App.css'

export default function App() {
  const [path, setPath] = useState('/Users/jurrejan/Documents/development/python/disk-usage-macos/codex')
  const [config, setConfig] = useState<any>(null)
  const { scanning, progress, tree, error, fromCache, startScan, cancelScan } = useScanWebSocket()

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
    alert('Cache cleared. Re-scan to see updated results.')
  }

  useEffect(() => {
    loadConfig()
  }, [])

  const handleScan = () => {
    startScan(path)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="observatory-header sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-border">
                  <Database className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-glow-subtle">
                  Disk Observatory
                </h1>
                <p className="text-xs text-muted-foreground font-mono">
                  Storage Analysis System
                </p>
              </div>
            </div>

            {fromCache && !scanning && tree && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                <div className="status-dot-amber" />
                <span className="text-xs font-medium text-amber-400">Cached</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8 reveal-stagger">
          {/* Scan Controls */}
          <div className="glass-panel rounded-xl p-6 glow-border">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                  placeholder="Enter path to analyze..."
                  className="h-12 pl-4 pr-4 bg-background/50 border-border/50 font-mono text-sm focus:border-primary/50 transition-all"
                  disabled={scanning}
                />
              </div>
              {scanning ? (
                <Button
                  onClick={cancelScan}
                  variant="destructive"
                  size="lg"
                  className="h-12 px-6 gap-2 font-medium"
                >
                  <X className="w-4 h-4" />
                  Cancel Scan
                </Button>
              ) : (
                <Button
                  onClick={handleScan}
                  size="lg"
                  className="h-12 px-8 gap-2 font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
                >
                  <Play className="w-4 h-4" />
                  Analyze
                </Button>
              )}
            </div>
          </div>

          {/* Progress */}
          {scanning && <ScanProgress progress={progress} />}

          {/* Error */}
          {error && (
            <Alert variant="destructive" className="glass-panel border-destructive/30">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="font-medium">{error}</AlertDescription>
            </Alert>
          )}

          {/* Tabbed Interface */}
          <Tabs defaultValue="visualization" className="w-full">
            <TabsList className="glass-panel-subtle h-12 p-1 gap-1 rounded-xl">
              <TabsTrigger
                value="visualization"
                className="h-10 px-4 gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all"
              >
                <Layers className="h-4 w-4" />
                <span className="hidden sm:inline">Visualization</span>
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="h-10 px-4 gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">List View</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="h-10 px-4 gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all"
              >
                <Sliders className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="visualization" className="mt-6 animate-fade-up">
              {tree && !scanning && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                    <div className="xl:col-span-3">
                      <TreeMapWebGL data={tree} config={config} />
                    </div>
                    <div className="space-y-6">
                      <ExtensionStats tree={tree} />
                      <ExtensionLegend config={config} tree={tree} />
                    </div>
                  </div>
                </div>
              )}
              {!tree && !scanning && (
                <div className="glass-panel rounded-xl p-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-6">
                    <Layers className="w-8 h-8 text-primary/40" />
                  </div>
                  <p className="text-muted-foreground text-lg font-light">
                    Enter a path and click Analyze to visualize storage usage
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="list" className="mt-6 animate-fade-up">
              {tree && !scanning && (
                <ListView tree={tree} />
              )}
              {!tree && !scanning && (
                <div className="glass-panel rounded-xl p-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-6">
                    <List className="w-8 h-8 text-primary/40" />
                  </div>
                  <p className="text-muted-foreground text-lg font-light">
                    Enter a path and click Analyze to view file list
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="settings" className="mt-6 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Configuration</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customize scan behavior and filters
                    </p>
                  </div>
                  <Button
                    onClick={clearCache}
                    variant="outline"
                    size="sm"
                    className="gap-2 border-destructive/30 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear Cache
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {config && <DepthLimitControl config={config} onUpdate={loadConfig} />}
                  {config && <FilterSettings config={config} onUpdate={loadConfig} />}
                  {config && <ExtensionCategories config={config} onUpdate={loadConfig} />}
                  <SizeFilter onFilterChange={handleSizeFilterChange} />
                </div>

                <p className="text-xs text-muted-foreground glass-panel-subtle rounded-lg px-4 py-3">
                  Settings apply to the next scan. Clear cache to re-scan with new filters.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
