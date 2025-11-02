import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { BarChart3 } from 'lucide-react'
import { formatBytes } from '../lib/utils'

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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Statistics
        </CardTitle>
        <CardDescription>
          Overview of scanned directory
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Total Size</span>
            <span className="font-mono font-medium">{formatBytes(totalSize)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Files</span>
            <span className="font-mono font-medium">{totalFiles.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Directories</span>
            <span className="font-mono font-medium">{totalDirs.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Max Depth</span>
            <span className="font-mono font-medium">{maxDepth}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Avg File Size</span>
            <span className="font-mono font-medium">{formatBytes(avgFileSize)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
