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
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [scanStartTime, setScanStartTime] = useState<number | null>(null)
  const wsRef = useRef<WebSocket | null>(null)

  const cancelScan = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close()
      wsRef.current = null
      setScanning(false)
      setSessionId(null)
      setError('Scan cancelled')
    }
  }, [])

  const checkStatus = useCallback(async (path: string): Promise<boolean> => {
    const response = await fetch(
      `http://localhost:8924/api/scan/status?path=${encodeURIComponent(path)}`
    )
    const status = await response.json()

    if (status.active) {
      // Active scan in progress - show progress
      setScanning(true)
      setSessionId(status.session_id)
      setProgress(status.progress)
      return true
    }

    if (status.completed && status.result) {
      // Completed scan available - load result
      setTree(status.result.tree)
      setFromCache(true)
      return true
    }

    // Check localStorage for previous result
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
    setSessionId(null)
    setScanStartTime(Date.now())

    const ws = new WebSocket(`ws://localhost:8924/ws/scan?path=${encodeURIComponent(path)}`)
    wsRef.current = ws

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      switch (data.type) {
        case 'started':
          console.log('Scan started:', data.path, 'session:', data.session_id)
          setSessionId(data.session_id)
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
          setSessionId(null)
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
          setSessionId(null)
          ws.close()
          break
      }
    }

    ws.onerror = () => {
      setError('WebSocket connection error')
      setScanning(false)
      setSessionId(null)
    }

    ws.onclose = () => {
      setScanning(false)
    }
  }, [])

  return { scanning, progress, tree, error, fromCache, startScan, cancelScan, checkStatus, sessionId, scanStartTime }
}
