import { formatBytes } from '../lib/utils'
import { Palette } from 'lucide-react'

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

  const categoryStats: Record<string, CategoryStats> = {}

  const traverseTree = (node: any) => {
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

  const sortedCategories = Object.entries(categoryStats)
    .sort(([, a], [, b]) => b.totalSize - a.totalSize)

  if (sortedCategories.length === 0) {
    return null
  }

  const totalSize = sortedCategories.reduce((acc, [, stats]) => acc + stats.totalSize, 0)

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">File Types</h3>
        </div>
      </div>

      <div className="p-5 space-y-3">
        {sortedCategories.slice(0, 8).map(([category, stats]) => {
          const percentage = totalSize > 0 ? (stats.totalSize / totalSize) * 100 : 0

          return (
            <div key={category} className="group">
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div
                    className="w-2.5 h-2.5 rounded-sm flex-shrink-0 ring-1 ring-white/10"
                    style={{ backgroundColor: stats.color }}
                  />
                  <span className="text-xs font-medium capitalize truncate">
                    {category.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {stats.count}
                  </span>
                  <span className="text-xs font-mono font-medium w-16 text-right">
                    {formatBytes(stats.totalSize)}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 rounded-full bg-secondary/30 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: stats.color,
                    boxShadow: `0 0 8px ${stats.color}40`
                  }}
                />
              </div>
            </div>
          )
        })}

        {sortedCategories.length > 8 && (
          <p className="text-[10px] text-muted-foreground text-center pt-2">
            +{sortedCategories.length - 8} more categories
          </p>
        )}
      </div>
    </div>
  )
}
