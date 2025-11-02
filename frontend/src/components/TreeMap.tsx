import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { formatBytes } from '../lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { BarChart3 } from 'lucide-react'

interface Props {
  data: any
  config: any
}

export function TreeMap({ data, config }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const width = svgRef.current.clientWidth
    const height = 600

    // Clear previous
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    const hierarchy = d3.hierarchy(data)
      .sum(d => {
        if (d.is_directory) {
          return d.at_depth_limit ? d.size : 0
        }
        return d.size
      })
      .sort((a, b) => (b.value || 0) - (a.value || 0))

    const treemap = d3.treemap()
      .size([width, height])
      .padding(1)
      .round(true)

    treemap(hierarchy)

    // Color scale based on extension category
    const getColor = (node: any): string => {
      if (node.data.extension_info) {
        return node.data.extension_info.color
      }
      if (node.data.folder_info) {
        return node.data.folder_info.color
      }
      // Default color by depth
      const depth = node.depth
      return d3.interpolateCool(depth / 10)
    }

    const cells = svg.selectAll('g')
      .data(hierarchy.leaves())
      .join('g')
      .attr('transform', (d: any) => `translate(${d.x0},${d.y0})`)

    cells.append('rect')
      .attr('width', (d: any) => d.x1 - d.x0)
      .attr('height', (d: any) => d.y1 - d.y0)
      .attr('fill', getColor)
      .attr('stroke', '#1e1e1e')
      .attr('stroke-width', 1)
      .style('cursor', 'pointer')
      .on('mouseover', function() {
        d3.select(this)
          .attr('stroke', '#0e639c')
          .attr('stroke-width', 2)
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('stroke', '#1e1e1e')
          .attr('stroke-width', 1)
      })

    cells.append('text')
      .attr('x', (d: any) => (d.x1 - d.x0) / 2)
      .attr('y', (d: any) => (d.y1 - d.y0) / 2)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '12px')
      .style('pointer-events', 'none')
      .text((d: any) => {
        const width = d.x1 - d.x0
        const height = d.y1 - d.y0
        return width > 50 && height > 20 ? d.data.name : ''
      })

    cells.append('title')
      .text((d: any) => `${d.data.name}\n${formatBytes(d.data.size)}`)

  }, [data, config])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Disk Usage Treemap
        </CardTitle>
        <CardDescription>
          Visual representation of disk space usage. Hover over tiles for details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md overflow-hidden bg-muted/30">
          <svg ref={svgRef} className="w-full" />
        </div>
      </CardContent>
    </Card>
  )
}
