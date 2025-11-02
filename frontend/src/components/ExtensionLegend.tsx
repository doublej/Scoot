import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { formatBytes } from '../lib/utils'

interface Props {
  config: any
  tree: any
}

interface CategoryStats {
  count: number
  totalSize: number
  color: string
  description: string
}

export function ExtensionLegend({ config, tree }: Props) {
  if (!config || !tree) return null

  // Calculate statistics for each category
  const categoryStats: Record<string, CategoryStats> = {}

  const traverseTree = (node: any) => {
    // Process files with extension info
    if (!node.is_directory && node.extension_info) {
      const category = node.extension_info.category
      if (!categoryStats[category]) {
        const templateData = config.extension_templates[category]
        categoryStats[category] = {
          count: 0,
          totalSize: 0,
          color: templateData?.color || '#gray',
          description: templateData?.description || ''
        }
      }
      categoryStats[category].count++
      categoryStats[category].totalSize += node.size
    }

    // Process folders with folder info
    if (node.is_directory && node.folder_info) {
      const category = node.folder_info.category
      if (!categoryStats[category]) {
        categoryStats[category] = {
          count: 0,
          totalSize: 0,
          color: node.folder_info.color || '#gray',
          description: node.folder_info.description || ''
        }
      }
      categoryStats[category].count++
      categoryStats[category].totalSize += node.size
    }

    if (node.children) {
      node.children.forEach(traverseTree)
    }
  }

  traverseTree(tree)

  // Sort by total size descending
  const sortedCategories = Object.entries(categoryStats)
    .sort(([, a], [, b]) => b.totalSize - a.totalSize)

  if (sortedCategories.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Type Breakdown</CardTitle>
        <CardDescription>
          Distribution of files and folders by category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sortedCategories.map(([category, stats]) => (
            <div key={category} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div
                  className="w-4 h-4 rounded flex-shrink-0"
                  style={{ backgroundColor: stats.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium capitalize truncate">
                    {category.replace(/_/g, ' ')}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {stats.description}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Badge variant="secondary" className="font-mono">
                  {stats.count}
                </Badge>
                <div className="text-sm font-medium w-20 text-right">
                  {formatBytes(stats.totalSize)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
