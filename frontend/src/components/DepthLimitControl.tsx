import { useState, useEffect } from 'react'
import { Layers } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface Props {
  config: any
  onUpdate?: () => void
}

export function DepthLimitControl({ config, onUpdate }: Props) {
  const [depth, setDepth] = useState<number>(config?.filters?.max_depth ?? 3)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (config?.filters?.max_depth !== undefined) {
      setDepth(config.filters.max_depth)
    }
  }, [config?.filters?.max_depth])

  if (!config) return null

  const handleSave = async () => {
    setIsSaving(true)
    const response = await fetch('http://localhost:8924/api/config/depth-limit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ max_depth: depth })
    })

    if (response.ok) {
      onUpdate?.()
    }
    setIsSaving(false)
  }

  const handleReset = () => {
    setDepth(config.filters.max_depth ?? 3)
  }

  const hasChanges = depth !== (config.filters.max_depth ?? 3)
  const presets = [
    { label: 'Unlimited', value: 0 },
    { label: '3', value: 3 },
    { label: '5', value: 5 },
    { label: '10', value: 10 },
  ]

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Depth Limit</h3>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Maximum directory nesting level
        </p>
      </div>

      <div className="p-5 space-y-4">
        {/* Input with label */}
        <div className="flex gap-3 items-center">
          <Input
            type="number"
            min="0"
            max="50"
            value={depth}
            onChange={(e) => setDepth(parseInt(e.target.value) || 0)}
            className="w-20 h-9 text-center font-mono bg-background/50"
          />
          <span className="text-xs text-muted-foreground">
            {depth === 0 ? 'No limit' : `${depth} level${depth !== 1 ? 's' : ''} deep`}
          </span>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-1.5">
          {presets.map((preset) => (
            <button
              key={preset.value}
              onClick={() => setDepth(preset.value)}
              className={`
                px-3 py-1.5 rounded-md text-xs font-medium transition-all
                border border-border/50 hover:border-primary/30 hover:bg-primary/5
                ${depth === preset.value ? 'bg-primary/10 text-primary border-primary/30' : 'text-muted-foreground'}
              `}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Save/Reset */}
        {hasChanges && (
          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleSave}
              size="sm"
              disabled={isSaving}
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button onClick={handleReset} size="sm" variant="ghost">
              Reset
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
