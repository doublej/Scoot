import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'
import * as d3 from 'd3'
import { formatBytes } from '../lib/utils'
import { BarChart3, Box, Layers } from 'lucide-react'
import { Button } from './ui/button'

interface Props {
  data: any
  config: any
}

type ViewMode = '2d' | '3d'
type VisualizationMode = 'size' | 'depth'

export function TreeMapWebGL({ data, config }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.Camera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const hoveredMeshRef = useRef<THREE.Mesh | null>(null)
  const [tooltip, setTooltip] = useState<{text: string, x: number, y: number} | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('2d')
  const [vizMode, setVizMode] = useState<VisualizationMode>('size')

  useEffect(() => {
    if (!containerRef.current || !data) return

    const width = containerRef.current.clientWidth
    const height = 600

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0a)
    sceneRef.current = scene

    // Camera setup based on mode
    let camera: THREE.Camera
    if (viewMode === '3d') {
      camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000)
      camera.position.set(width / 2, height / 2, Math.max(width, height))
      camera.lookAt(width / 2, height / 2, 0)
    } else {
      camera = new THREE.OrthographicCamera(0, width, height, 0, 1, 1000)
      camera.position.z = 100
    }
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    rendererRef.current = renderer

    containerRef.current.appendChild(renderer.domElement)

    // Lighting for 3D mode
    if (viewMode === '3d') {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(width / 2, height / 2, Math.max(width, height))
      scene.add(directionalLight)

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
      directionalLight2.position.set(-width / 2, -height / 2, Math.max(width, height) / 2)
      scene.add(directionalLight2)
    }

    // Orbit controls for 3D mode
    let controls: OrbitControls | null = null
    if (viewMode === '3d' && camera instanceof THREE.PerspectiveCamera) {
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.target.set(width / 2, height / 2, 0)
      controls.update()
      controlsRef.current = controls
    }

    // Build treemap data
    const hierarchy = d3.hierarchy(data)
      .sum(d => {
        if (d.is_directory) {
          return d.at_depth_limit ? d.size : 0
        }
        return d.size
      })
      .sort((a, b) => (b.value || 0) - (a.value || 0))

    const treemap = d3.treemap<any>()
      .size([width, height])
      .padding(1)
      .round(true)

    treemap(hierarchy)

    const leaves = hierarchy.leaves()
    console.log('Treemap hierarchy leaves:', leaves.length)

    // Find max depth for normalization (avoid stack overflow with large arrays)
    let maxDepth = 0
    for (const node of leaves) {
      if (node.depth > maxDepth) {
        maxDepth = node.depth
      }
    }

    // Create meshes for each node
    const meshes: THREE.Mesh[] = []
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    // Limit rendering for very large trees to prevent browser freeze
    const maxNodesToRender = 50000
    const nodesToRender = leaves.length > maxNodesToRender
      ? leaves.slice(0, maxNodesToRender)
      : leaves

    if (leaves.length > maxNodesToRender) {
      console.warn(`Rendering limited to ${maxNodesToRender} of ${leaves.length} nodes for performance`)
    }

    nodesToRender.forEach((node: any) => {
      const w = node.x1 - node.x0
      const h = node.y1 - node.y0

      if (w < 2 || h < 2) return

      // Get color based on mode
      let color = 0x4a90e2
      const isDepthLimit = node.data.at_depth_limit === true

      if (vizMode === 'depth') {
        // Color by depth - gradient from blue to red
        const depthRatio = node.depth / maxDepth
        const hue = (1 - depthRatio) * 240 // 240 = blue, 0 = red
        const tempColor = new THREE.Color()
        tempColor.setHSL(hue / 360, 0.8, 0.5)
        color = tempColor.getHex()

        // Override for depth-limit folders
        if (isDepthLimit) {
          color = 0xfb923c // Orange for depth-limit folders
        }
      } else {
        // Color by extension/folder type
        if (isDepthLimit) {
          // Depth-limit folders get distinct orange color
          color = 0xfb923c
        } else if (node.data.extension_info?.color) {
          const hexColor = node.data.extension_info.color.replace('#', '')
          color = parseInt(hexColor, 16)
        } else if (node.data.folder_info?.color) {
          const hexColor = node.data.folder_info.color.replace('#', '')
          color = parseInt(hexColor, 16)
        } else {
          const colors = [0x3b82f6, 0x8b5cf6, 0xec4899, 0xf59e0b, 0x10b981, 0x06b6d4]
          color = colors[node.depth % colors.length]
        }
      }

      // Create geometry based on mode
      let geometry: THREE.BufferGeometry
      let boxHeight = 1
      let zPosition = 0

      if (viewMode === '3d') {
        if (isDepthLimit) {
          // Depth-limit folders: flat with moderate height to stand out
          boxHeight = 15
          zPosition = boxHeight / 2
        } else if (vizMode === 'depth') {
          // Height represents nesting level
          boxHeight = (node.depth + 1) * 20
          // Elevation based on depth (staircase effect)
          zPosition = node.depth * 30
        } else {
          // Height represents file size
          boxHeight = Math.max(5, Math.log10(node.data.size + 1) * 10)
          zPosition = boxHeight / 2
        }
        geometry = new THREE.BoxGeometry(w, h, boxHeight)
      } else {
        geometry = new THREE.PlaneGeometry(w, h)
      }

      const material = viewMode === '3d'
        ? new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.7 })
        : new THREE.MeshBasicMaterial({ color })

      const mesh = new THREE.Mesh(geometry, material)

      // Position
      if (viewMode === '3d') {
        mesh.position.set(
          node.x0 + w / 2,
          height - (node.y0 + h / 2),
          zPosition
        )
      } else {
        mesh.position.set(
          node.x0 + w / 2,
          height - (node.y0 + h / 2),
          0
        )
      }

      mesh.userData = {
        name: node.data.name,
        path: node.data.path || node.data.name,
        size: node.data.size,
        depth: node.depth,
        originalColor: color,
        at_depth_limit: isDepthLimit
      }

      scene.add(mesh)
      meshes.push(mesh)
    })

    console.log('Created meshes:', meshes.length)
    console.log('Scene children:', scene.children.length)

    // Mouse interaction with zoom
    let zoomLevel = 1
    const maxZoom = 10
    const minZoom = 1

    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(meshes)

      // Reset previous hovered mesh
      if (hoveredMeshRef.current) {
        const mat = hoveredMeshRef.current.material as THREE.MeshBasicMaterial
        mat.color.setHex(hoveredMeshRef.current.userData.originalColor)
        hoveredMeshRef.current = null
        setTooltip(null)
      }

      // Highlight new hovered mesh
      if (intersects.length > 0) {
        const mesh = intersects[0].object as THREE.Mesh
        const mat = mesh.material as THREE.MeshBasicMaterial
        mat.color.setHex(0x0e639c)
        hoveredMeshRef.current = mesh

        const depthInfo = viewMode === '3d' && vizMode === 'depth'
          ? `\nDepth: ${mesh.userData.depth}`
          : ''
        const depthLimitInfo = mesh.userData.at_depth_limit
          ? '\n⚠️ At depth limit (aggregate size)'
          : ''
        setTooltip({
          text: `${mesh.userData.path}\n${formatBytes(mesh.userData.size)}${depthInfo}${depthLimitInfo}`,
          x: event.clientX,
          y: event.clientY
        })
      }
    }

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()

      if (viewMode === '2d' && camera instanceof THREE.OrthographicCamera) {
        const delta = event.deltaY * -0.001
        zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel + delta))
        camera.zoom = zoomLevel
        camera.updateProjectionMatrix()
      }
    }

    renderer.domElement.addEventListener('mousemove', onMouseMove)
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false })

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate)
      if (controls) {
        controls.update()
      }
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener('mousemove', onMouseMove)
      renderer.domElement.removeEventListener('wheel', onWheel)
      if (controls) {
        controls.dispose()
      }
      renderer.dispose()
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [data, config, viewMode, vizMode])

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Storage Map</h3>
              <p className="text-xs text-muted-foreground">
                {viewMode === '3d' ? 'Drag to rotate, scroll to zoom' : 'Hover for details, scroll to zoom'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant={viewMode === '2d' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('2d')}
              className={`h-8 px-3 gap-1.5 ${viewMode === '2d' ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Layers className="h-3.5 w-3.5" />
              2D
            </Button>
            <Button
              variant={viewMode === '3d' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('3d')}
              className={`h-8 px-3 gap-1.5 ${viewMode === '3d' ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Box className="h-3.5 w-3.5" />
              3D
            </Button>
            {viewMode === '3d' && (
              <>
                <div className="w-px h-5 bg-border/50 mx-1" />
                <Button
                  variant={vizMode === 'size' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVizMode('size')}
                  className={`h-8 px-3 text-xs ${vizMode === 'size' ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Size
                </Button>
                <Button
                  variant={vizMode === 'depth' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVizMode('depth')}
                  className={`h-8 px-3 text-xs ${vizMode === 'depth' ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Depth
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Treemap Container */}
      <div className="treemap-container relative">
        <div ref={containerRef} />
        {tooltip && (
          <div
            className="fixed pointer-events-none z-50 max-w-sm animate-fade-in"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y - 60
            }}
          >
            <div className="glass-panel rounded-lg px-4 py-3 shadow-glow-lg border border-primary/20">
              <div className="text-xs font-mono whitespace-pre-line text-foreground">
                {tooltip.text}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
