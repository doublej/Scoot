import { formatBytes } from '../lib/utils'
import { Activity, Files, FolderTree, Layers, TrendingUp } from 'lucide-react'

interface Props {
  tree: any
}

export function ExtensionStats({ tree }: Props) {
  if (!tree) return null

  let totalFiles = 0
  let totalSize = 0
  let totalDirs = 0
  let maxDepth = 0

  const traverseTree = (node: any, depth: number = 0) => {
    maxDepth = Math.max(maxDepth, depth)

    if (node.is_directory) {
      totalDirs++
      if (node.children) {
        node.children.forEach((child: any) => traverseTree(child, depth + 1))
      }
    } else {
      totalFiles++
      totalSize += node.size
    }
  }

  traverseTree(tree)

  const avgFileSize = totalFiles > 0 ? totalSize / totalFiles : 0

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Statistics</h3>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <StatRow
          icon={<Layers className="w-3.5 h-3.5" />}
          label="Total Size"
          value={formatBytes(totalSize)}
          highlight
        />
        <StatRow
          icon={<Files className="w-3.5 h-3.5" />}
          label="Files"
          value={totalFiles.toLocaleString()}
        />
        <StatRow
          icon={<FolderTree className="w-3.5 h-3.5" />}
          label="Directories"
          value={totalDirs.toLocaleString()}
        />
        <StatRow
          icon={<TrendingUp className="w-3.5 h-3.5" />}
          label="Max Depth"
          value={maxDepth.toString()}
        />
        <StatRow
          icon={<Activity className="w-3.5 h-3.5" />}
          label="Avg File Size"
          value={formatBytes(avgFileSize)}
        />
      </div>
    </div>
  )
}

function StatRow({
  icon,
  label,
  value,
  highlight = false
}: {
  icon: React.ReactNode
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <span className={`font-mono text-sm font-medium ${highlight ? 'text-primary text-glow-subtle' : ''}`}>
        {value}
      </span>
    </div>
  )
}
