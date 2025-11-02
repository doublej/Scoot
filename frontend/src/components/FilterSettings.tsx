import { Settings, Filter, Palette } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

interface Props {
  config: any
}

export function FilterSettings({ config }: Props) {
  if (!config) return null

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
        {/* Exclude Patterns */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Excluded Patterns
          </h4>
          <div className="flex flex-wrap gap-2">
            {config.filters.exclude_patterns.map((pattern: string) => (
              <Badge key={pattern} variant="secondary">
                {pattern}
              </Badge>
            ))}
          </div>
        </div>

        {/* Extension Templates */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Extension Categories
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(config.extension_templates).map(([name, data]: [string, any]) => (
              <div key={name} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: data.color }}
                />
                <span className="capitalize font-medium">{name}</span>
                <span className="text-muted-foreground text-xs">
                  ({data.extensions.length})
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
