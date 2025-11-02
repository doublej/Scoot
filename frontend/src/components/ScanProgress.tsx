import { ScanProgress as ScanProgressType } from '../hooks/useScanWebSocket'
import { formatBytes } from '../lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { Loader2, Files, FolderOpen, HardDrive } from 'lucide-react'

interface Props {
  progress: ScanProgressType | null
}

export function ScanProgress({ progress }: Props) {
  if (!progress) {
    return (
      <Card>
        <CardContent className="flex items-center gap-3 pt-6">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <span>Initializing scan...</span>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          Scanning in progress
        </CardTitle>
        <CardDescription className="truncate">
          Current: {progress.current_path}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Files className="h-4 w-4" />
              <span>Files</span>
            </div>
            <div className="text-2xl font-bold">{progress.files.toLocaleString()}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FolderOpen className="h-4 w-4" />
              <span>Directories</span>
            </div>
            <div className="text-2xl font-bold">{progress.directories.toLocaleString()}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HardDrive className="h-4 w-4" />
              <span>Total Size</span>
            </div>
            <div className="text-2xl font-bold">{formatBytes(progress.total_size)}</div>
          </div>
        </div>

        <Progress value={100} className="animate-pulse" />
      </CardContent>
    </Card>
  )
}
