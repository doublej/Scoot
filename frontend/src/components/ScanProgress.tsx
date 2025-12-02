import { ScanProgress as ScanProgressType } from '../hooks/useScanWebSocket'
import { formatBytes } from '../lib/utils'
import { Files, FolderOpen, HardDrive, Radio } from 'lucide-react'

interface Props {
  progress: ScanProgressType | null
}

export function ScanProgress({ progress }: Props) {
  if (!progress) {
    return (
      <div className="glass-panel rounded-xl p-6 glow-border scan-line">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Radio className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <div className="absolute inset-0 rounded-xl pulse-ring" />
          </div>
          <div>
            <span className="text-sm font-medium">Initializing scan...</span>
            <p className="text-xs text-muted-foreground mt-0.5">Preparing file system traversal</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-panel rounded-xl overflow-hidden glow-border">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Radio className="w-4 h-4 text-primary" />
              </div>
              <div className="absolute inset-0 rounded-lg pulse-ring" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Scanning in progress</h3>
              <p className="text-xs text-muted-foreground font-mono truncate max-w-[300px] sm:max-w-[500px]">
                {progress.current_path}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6">
          <StatBlock
            icon={<Files className="w-4 h-4" />}
            label="Files"
            value={progress.files.toLocaleString()}
          />
          <StatBlock
            icon={<FolderOpen className="w-4 h-4" />}
            label="Directories"
            value={progress.directories.toLocaleString()}
          />
          <StatBlock
            icon={<HardDrive className="w-4 h-4" />}
            label="Total Size"
            value={formatBytes(progress.total_size)}
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-secondary/50 scan-line">
        <div className="h-full bg-gradient-to-r from-primary via-primary to-accent w-full animate-data-stream"
             style={{ backgroundSize: '200% 100%' }} />
      </div>
    </div>
  )
}

function StatBlock({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-2xl font-semibold data-readout text-glow-subtle">{value}</div>
    </div>
  )
}
