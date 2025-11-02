import { useState } from 'react'
import { Settings, Filter, X, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
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
    try {
      const response = await fetch('http://localhost:8924/api/config/exclude-patterns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patterns })
      })

      if (response.ok) {
        onUpdate?.()
      }
    } catch (error) {
      console.error('Failed to save patterns:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setPatterns(config.filters.exclude_patterns)
  }

  const hasChanges = JSON.stringify(patterns) !== JSON.stringify(config.filters.exclude_patterns)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuration
        </CardTitle>
        <CardDescription>
          Active filters and extension categorization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Excluded Patterns
          </h4>

          <div className="flex flex-wrap gap-2 min-h-[40px] p-2 border rounded-md">
            {patterns.map((pattern: string) => (
              <Badge key={pattern} variant="secondary" className="gap-1">
                {pattern}
                <button
                  onClick={() => handleRemovePattern(pattern)}
                  className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Add pattern (e.g., *.log, temp_*)"
              value={newPattern}
              onChange={(e) => setNewPattern(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddPattern()}
            />
            <Button onClick={handleAddPattern} size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>

          {hasChanges && (
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm" disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button onClick={handleReset} size="sm" variant="outline">
                Reset
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
