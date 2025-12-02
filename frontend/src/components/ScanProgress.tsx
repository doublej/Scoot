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

type TaskStatus = 'done' | 'active' | 'pending'

function TaskLine({ status, label, detail }: { status: TaskStatus; label: string; detail?: string }) {
  const icon = status === 'done' ? '×' : status === 'active' ? '○' : '-'
  const opacity = status === 'pending' ? 'opacity-40' : ''
  const animate = status === 'active' ? 'animate-pulse' : ''

  return (
    <div className={`flex items-center gap-3 font-mono text-sm ${opacity}`}>
      <span className={`w-4 text-center ${animate}`}>{icon}</span>
      <span>{label}</span>
      {detail && <span className="text-muted-foreground ml-auto">{detail}</span>}
    </div>
  )
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

  const files = progress?.files || 0
  const dirs = progress?.directories || 0
  const size = progress?.total_size || 0
  const filesPerSec = elapsed > 1000 ? Math.round(files / (elapsed / 1000)) : 0

  // Phases: connecting → listing → processing
  const isListing = progress && files === 0
  const isProcessing = files > 0

  return (
    <div className="py-5 space-y-3">
      <div className="space-y-1">
        <TaskLine
          status="done"
          label="Connected"
        />
        <TaskLine
          status={isListing ? 'active' : isProcessing ? 'done' : 'pending'}
          label="Scanning directories"
          detail={dirs > 0 ? `${dirs.toLocaleString()}` : undefined}
        />
        <TaskLine
          status={isProcessing ? 'active' : 'pending'}
          label="Processing files"
          detail={isProcessing ? `${files.toLocaleString()} · ${formatBytes(size)} · ${filesPerSec}/s` : undefined}
        />
      </div>

      {progress?.current_path && (
        <code className="block text-xs text-muted-foreground truncate pl-7">
          {progress.current_path}
        </code>
      )}

      <div className="text-xs text-muted-foreground pl-7">
        {formatElapsed(elapsed)}
      </div>
    </div>
  )
}
