import { useState, useCallback, useRef } from 'react'

export interface ScanProgress {
  files: number
  directories: number
  total_size: number
  current_path: string
}

export function useScanWebSocket() {
  const [scanning, setScanning] = useState(false)
  const [progress, setProgress] = useState<ScanProgress | null>(null)
  const [tree, setTree] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [fromCache, setFromCache] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)

  const cancelScan = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close()
      wsRef.current = null
      setScanning(false)
      setError('Scan cancelled')
    }
  }, [])

  const startScan = useCallback((path: string) => {
    setScanning(true)
    setProgress(null)
    setTree(null)
    setError(null)
    setFromCache(false)

    const ws = new WebSocket(`ws://localhost:8924/ws/scan?path=${encodeURIComponent(path)}`)
    wsRef.current = ws

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      switch (data.type) {
        case 'started':
          console.log('Scan started:', data.path)
          break

        case 'progress':
          setProgress({
            files: data.files,
            directories: data.directories,
            total_size: data.total_size,
            current_path: data.current_path
          })
          break

        case 'warning':
          console.warn(data.message)
          break

        case 'complete':
          setTree(data.tree)
          setFromCache(data.from_cache || false)
          setScanning(false)
          ws.close()
          break

        case 'error':
          setError(data.message)
          setScanning(false)
          ws.close()
          break
      }
    }

    ws.onerror = () => {
      setError('WebSocket connection error')
      setScanning(false)
    }

    ws.onclose = () => {
      setScanning(false)
    }
  }, [])

  return { scanning, progress, tree, error, fromCache, startScan, cancelScan }
}
