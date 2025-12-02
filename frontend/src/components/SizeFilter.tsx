import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Scale } from 'lucide-react'

interface Props {
  onFilterChange: (minSizeBytes: number) => void
}

export function SizeFilter({ onFilterChange }: Props) {
  const [sizeKB, setSizeKB] = useState('')

  const presets = [
    { label: 'All', kb: 0 },
    { label: '10KB+', kb: 10 },
    { label: '100KB+', kb: 100 },
    { label: '1MB+', kb: 1024 },
    { label: '10MB+', kb: 10240 },
  ]

  const handleApply = () => {
    const kb = parseInt(sizeKB) || 0
    onFilterChange(kb * 1024)
  }

  const handlePreset = (kb: number) => {
    setSizeKB(kb.toString())
    onFilterChange(kb * 1024)
  }

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Size Filter</h3>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Exclude files below minimum size
        </p>
      </div>

      <div className="p-5 space-y-4">
        {/* Input */}
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Min size (KB)"
            value={sizeKB}
            onChange={(e) => setSizeKB(e.target.value)}
            className="flex-1 h-9 text-xs font-mono bg-background/50"
          />
          <Button
            onClick={handleApply}
            size="sm"
            className="h-9 px-4 bg-primary/10 text-primary hover:bg-primary/20"
          >
            Apply
          </Button>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-1.5">
          {presets.map((preset) => (
            <button
              key={preset.kb}
              onClick={() => handlePreset(preset.kb)}
              className={`
                px-3 py-1.5 rounded-md text-xs font-medium transition-all
                border border-border/50 hover:border-primary/30 hover:bg-primary/5
                ${parseInt(sizeKB) === preset.kb ? 'bg-primary/10 text-primary border-primary/30' : 'text-muted-foreground'}
              `}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
