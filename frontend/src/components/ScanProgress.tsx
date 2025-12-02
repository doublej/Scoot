import { useState, useEffect } from 'react'
import { ScanProgress as ScanProgressType } from '../hooks/useScanWebSocket'
import { formatBytes } from '../lib/utils'

interface Props {
  progress: ScanProgressType | null
  startTime: number | null
}

function formatElapsed(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (minutes > 0) {
    return `${minutes}m ${secs}s`
  }
  return `${secs}s`
}

export function ScanProgress({ progress, startTime }: Props) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    if (!startTime) return
    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime)
    }, 100)
    return () => clearInterval(interval)
  }, [startTime])

  const filesPerSec = elapsed > 0 ? Math.round((progress?.files || 0) / (elapsed / 1000)) : 0

  if (!progress) {
    return (
      <div className="py-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-muted-foreground">Connecting...</span>
          {startTime && <span className="text-xs text-muted-foreground ml-auto">{formatElapsed(elapsed)}</span>}
        </div>
      </div>
    )
  }

  return (
    <div className="py-4 space-y-4">
      {/* Current path - prominent */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <code className="text-sm flex-1 truncate">{progress.current_path}</code>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{formatElapsed(elapsed)}</span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-5 gap-4">
        <div className="data-cell">
          <div className="label">FILES</div>
          <div className="value text-tabular">{progress.files.toLocaleString()}</div>
        </div>
        <div className="data-cell">
          <div className="label">DIRS</div>
          <div className="value text-tabular">{progress.directories.toLocaleString()}</div>
        </div>
        <div className="data-cell">
          <div className="label">SIZE</div>
          <div className="value text-tabular">{formatBytes(progress.total_size)}</div>
        </div>
        <div className="data-cell">
          <div className="label">RATE</div>
          <div className="value text-tabular">{filesPerSec.toLocaleString()}/s</div>
        </div>
        <div className="data-cell">
          <div className="label">ELAPSED</div>
          <div className="value text-tabular">{formatElapsed(elapsed)}</div>
        </div>
      </div>

      {/* Animated progress bar */}
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{
            width: '100%',
            animation: 'scan-pulse 1.5s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  )
}
