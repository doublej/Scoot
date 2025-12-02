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

  const filesPerSec = elapsed > 1000 ? Math.round((progress?.files || 0) / (elapsed / 1000)) : 0
  const hasFiles = (progress?.files || 0) > 0
  const hasDirs = (progress?.directories || 0) > 0

  return (
    <div className="py-5 space-y-3">
      <div className="space-y-1">
        <TaskLine
          status="done"
          label="Connected to server"
        />
        <TaskLine
          status={progress ? 'done' : 'active'}
          label="Initializing scan"
        />
        <TaskLine
          status={hasDirs ? 'done' : progress ? 'active' : 'pending'}
          label="Listing directories"
          detail={hasDirs ? `${progress?.directories.toLocaleString()} dirs` : undefined}
        />
        <TaskLine
          status={hasFiles ? 'active' : 'pending'}
          label="Processing files"
          detail={hasFiles ? `${progress?.files.toLocaleString()} files · ${formatBytes(progress?.total_size || 0)} · ${filesPerSec}/s` : undefined}
        />
        <TaskLine
          status="pending"
          label="Building visualization"
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
