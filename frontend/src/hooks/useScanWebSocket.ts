import { useState, useCallback, useRef } from 'react'

export interface ScanProgress {
  files: number
  directories: number
  total_size: number
  current_path: string
}

interface ScanState {
  path: string
  tree: any
  fromCache: boolean
  timestamp: number
}

const STORAGE_KEY = 'diskusage_last_scan'

function saveToStorage(state: ScanState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function loadFromStorage(): ScanState | null {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    return JSON.parse(stored)
  }
  return null
}

export function useScanWebSocket() {
  const [scanning, setScanning] = useState(false)
  const [progress, setProgress] = useState<ScanProgress | null>(null)
  const [tree, setTree] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [fromCache, setFromCache] = useState(false)
  const [scanStartTime, setScanStartTime] = useState<number | null>(null)
  const wsRef = useRef<WebSocket | null>(null)

  const cancelScan = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close()
      wsRef.current = null
      setScanning(false)
      setError('Scan cancelled')
    }
  }, [])

  const restoreLastScan = useCallback((path: string): boolean => {
    const stored = loadFromStorage()
    if (stored && stored.path === path) {
      setTree(stored.tree)
      setFromCache(true)
      return true
    }
    return false
  }, [])

  const startScan = useCallback((path: string) => {
    setScanning(true)
    setProgress(null)
    setTree(null)
    setError(null)
    setFromCache(false)
    setScanStartTime(Date.now())

    const ws = new WebSocket(`ws://localhost:8924/ws/scan?path=${encodeURIComponent(path)}`)
    wsRef.current = ws

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      switch (data.type) {
        case 'started':
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
          // Save to localStorage for recovery after refresh
          if (!data.from_cache) {
            saveToStorage({
              path,
              tree: data.tree,
              fromCache: false,
              timestamp: Date.now()
            })
          }
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

  return { scanning, progress, tree, error, fromCache, startScan, cancelScan, restoreLastScan, scanStartTime }
}
