import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Filter } from 'lucide-react'

interface Props {
  onFilterChange: (minSizeBytes: number) => void
}

export function SizeFilter({ onFilterChange }: Props) {
  const [sizeKB, setSizeKB] = useState('')

  const presets = [
    { label: 'All files', kb: 0 },
    { label: '> 10 KB', kb: 10 },
    { label: '> 100 KB', kb: 100 },
    { label: '> 1 MB', kb: 1024 },
    { label: '> 10 MB', kb: 10240 },
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Size Filter
        </CardTitle>
        <CardDescription>
          Exclude files below minimum size
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min size (KB)"
              value={sizeKB}
              onChange={(e) => setSizeKB(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleApply} size="sm">
              Apply
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <Badge
                key={preset.kb}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => handlePreset(preset.kb)}
              >
                {preset.label}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
