import { useState } from 'react'
import { ChevronRight, ChevronDown, File, Folder, AlertTriangle } from 'lucide-react'

interface TreeNode {
  name: string
  path: string
  size: number
  is_directory: boolean
  at_depth_limit?: boolean
  children?: TreeNode[]
}

interface Props {
  tree: TreeNode
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`
}

function TreeItem({ node, depth }: { node: TreeNode; depth: number }) {
  const [expanded, setExpanded] = useState(depth < 2)
  const hasChildren = node.children && node.children.length > 0
  const isDepthLimit = node.at_depth_limit === true

  const sortedChildren = node.children
    ? [...node.children].sort((a, b) => {
        if (a.is_directory && !b.is_directory) return -1
        if (!a.is_directory && b.is_directory) return 1
        return b.size - a.size
      })
    : []

  return (
    <div>
      <div
        className={`
          group flex items-center gap-2 py-1.5 px-2 rounded-md
          hover:bg-primary/5 transition-colors cursor-pointer
          ${isDepthLimit ? 'bg-amber-500/5' : ''}
        `}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {/* Expand/Collapse */}
        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
          {hasChildren ? (
            expanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            )
          ) : null}
        </div>

        {/* Icon */}
        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
          {isDepthLimit ? (
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          ) : node.is_directory ? (
            <Folder className="w-3.5 h-3.5 text-primary/70" />
          ) : (
            <File className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </div>

        {/* Name */}
        <span className={`
          flex-1 text-xs font-mono truncate
          ${isDepthLimit ? 'text-amber-400' : node.is_directory ? 'font-medium' : 'text-muted-foreground'}
        `}>
          {node.name}
          {isDepthLimit && (
            <span className="ml-2 text-[10px] text-amber-500/70 font-sans">DEPTH LIMIT</span>
          )}
        </span>

        {/* Size */}
        <span className={`
          text-xs font-mono tabular-nums flex-shrink-0 w-20 text-right
          ${node.size > 1024 * 1024 * 100 ? 'text-primary' : 'text-muted-foreground'}
        `}>
          {formatBytes(node.size)}
        </span>
      </div>

      {/* Children */}
      {expanded && hasChildren && (
        <div>
          {sortedChildren.map((child, i) => (
            <TreeItem key={`${child.path}-${i}`} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function ListView({ tree }: Props) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</span>
        </div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider w-20 text-right">Size</span>
      </div>

      {/* Tree */}
      <div className="p-2 max-h-[600px] overflow-auto">
        <TreeItem node={tree} depth={0} />
      </div>
    </div>
  )
}
