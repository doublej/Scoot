import { useState } from 'react'
import { Palette, X, Plus, Edit2, Trash2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'

interface Props {
  config: any
  onUpdate?: () => void
}

interface CategoryData {
  color: string
  extensions: string[]
  description: string
  icon: string
}

export function ExtensionCategories({ config, onUpdate }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    color: '#6366f1',
    extensions: '',
    description: ''
  })
  const [isSaving, setIsSaving] = useState(false)

  if (!config) return null

  const handleEdit = (name: string, data: CategoryData) => {
    setEditingCategory(name)
    setFormData({
      name,
      color: data.color,
      extensions: data.extensions.join(', '),
      description: data.description || ''
    })
    setIsDialogOpen(true)
  }

  const handleNew = () => {
    setEditingCategory(null)
    setFormData({
      name: '',
      color: '#6366f1',
      extensions: '',
      description: ''
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    if (!formData.name || !formData.extensions) return

    setIsSaving(true)
    try {
      const extensions = formData.extensions
        .split(',')
        .map(e => e.trim())
        .filter(e => e.length > 0)

      const response = await fetch('http://localhost:8924/api/config/extension-category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          color: formData.color,
          extensions,
          description: formData.description
        })
      })

      if (response.ok) {
        setIsDialogOpen(false)
        onUpdate?.()
      }
    } catch (error) {
      console.error('Failed to save category:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (name: string) => {
    if (!confirm(`Delete category "${name}"?`)) return

    try {
      const response = await fetch(`http://localhost:8924/api/config/extension-category/${name}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        onUpdate?.()
      }
    } catch (error) {
      console.error('Failed to delete category:', error)
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Extension Categories
              </CardTitle>
              <CardDescription>
                File type categorization with colors
              </CardDescription>
            </div>
            <Button onClick={handleNew} size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add Category
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(config.extension_templates).map(([name, data]: [string, any]) => (
              <div key={name} className="flex items-center justify-between p-2 border rounded-md hover:bg-accent/50">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: data.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="capitalize font-medium">{name}</span>
                      <span className="text-muted-foreground text-xs">
                        ({data.extensions.length} extensions)
                      </span>
                    </div>
                    {data.description && (
                      <p className="text-xs text-muted-foreground mt-0.5">{data.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    onClick={() => handleEdit(name, data)}
                    size="sm"
                    variant="ghost"
                  >
                    <Edit2 className="h-3 w-3" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(name)}
                    size="sm"
                    variant="ghost"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingCategory ? 'Edit Category' : 'New Category'}
            </DialogTitle>
            <DialogDescription>
              Configure file extension category
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category Name</label>
              <Input
                placeholder="e.g., code, documents"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!!editingCategory}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  placeholder="#6366f1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Extensions</label>
              <Input
                placeholder="py, js, ts, tsx (comma-separated)"
                value={formData.extensions}
                onChange={(e) => setFormData({ ...formData, extensions: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Enter extensions without dots, separated by commas
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description (optional)</label>
              <Input
                placeholder="e.g., Programming source files"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving || !formData.name || !formData.extensions}>
              {isSaving ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
