import { useState } from 'react'
import { Filter, X, Plus } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface Props {
  config: any
  onUpdate?: () => void
}

export function FilterSettings({ config, onUpdate }: Props) {
  const [patterns, setPatterns] = useState<string[]>(config?.filters?.exclude_patterns || [])
  const [newPattern, setNewPattern] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  if (!config) return null

  const handleAddPattern = () => {
    if (newPattern.trim() && !patterns.includes(newPattern.trim())) {
      setPatterns([...patterns, newPattern.trim()])
      setNewPattern('')
    }
  }

  const handleRemovePattern = (pattern: string) => {
    setPatterns(patterns.filter(p => p !== pattern))
  }

  const handleSave = async () => {
    setIsSaving(true)
    const response = await fetch('http://localhost:8924/api/config/exclude-patterns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patterns })
    })

    if (response.ok) {
      onUpdate?.()
    }
    setIsSaving(false)
  }

  const handleReset = () => {
    setPatterns(config.filters.exclude_patterns)
  }

  const hasChanges = JSON.stringify(patterns) !== JSON.stringify(config.filters.exclude_patterns)

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Exclude Patterns</h3>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Pattern tags */}
        <div className="flex flex-wrap gap-2 min-h-[40px] p-3 rounded-lg bg-secondary/30 border border-border/30">
          {patterns.length === 0 && (
            <span className="text-xs text-muted-foreground">No patterns configured</span>
          )}
          {patterns.map((pattern: string) => (
            <Badge
              key={pattern}
              variant="secondary"
              className="gap-1.5 bg-secondary/50 hover:bg-secondary/70 transition-colors"
            >
              <span className="font-mono text-[11px]">{pattern}</span>
              <button
                onClick={() => handleRemovePattern(pattern)}
                className="ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 transition-colors"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </Badge>
          ))}
        </div>

        {/* Add pattern */}
        <div className="flex gap-2">
          <Input
            placeholder="Add pattern (e.g., *.log, temp_*)"
            value={newPattern}
            onChange={(e) => setNewPattern(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddPattern()}
            className="flex-1 h-9 text-xs font-mono bg-background/50"
          />
          <Button
            onClick={handleAddPattern}
            size="sm"
            variant="outline"
            className="h-9 px-3 gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </Button>
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
