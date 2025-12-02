import { useState } from 'react'
import { Tags, Plus, Edit2, Trash2 } from 'lucide-react'
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
    color: '#22d3ee',
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
      color: '#22d3ee',
      extensions: '',
      description: ''
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    if (!formData.name || !formData.extensions) return

    setIsSaving(true)
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
    setIsSaving(false)
  }

  const handleDelete = async (name: string) => {
    if (!confirm(`Delete category "${name}"?`)) return

    const response = await fetch(`http://localhost:8924/api/config/extension-category/${name}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      onUpdate?.()
    }
  }

  return (
    <>
      <div className="glass-panel rounded-xl overflow-hidden lg:col-span-2">
        <div className="px-5 py-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Tags className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold">Extension Categories</h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                File type categorization with colors
              </p>
            </div>
            <Button
              onClick={handleNew}
              size="sm"
              className="h-8 px-3 gap-1.5 bg-primary/10 text-primary hover:bg-primary/20"
            >
              <Plus className="h-3.5 w-3.5" />
              Add
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(config.extension_templates).map(([name, data]: [string, any]) => (
              <div
                key={name}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className="w-3 h-3 rounded-sm flex-shrink-0 ring-1 ring-white/10"
                    style={{ backgroundColor: data.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="capitalize text-sm font-medium truncate">{name}</span>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {data.extensions.length}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => handleEdit(name, data)}
                    size="sm"
                    variant="ghost"
                    className="h-7 w-7 p-0"
                  >
                    <Edit2 className="h-3 w-3" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(name)}
                    size="sm"
                    variant="ghost"
                    className="h-7 w-7 p-0 hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="glass-panel border-border/50">
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
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category Name
              </label>
              <Input
                placeholder="e.g., code, documents"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!!editingCategory}
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Color
              </label>
              <div className="flex gap-2">
                <div className="relative">
                  <Input
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-12 h-10 p-1 cursor-pointer"
                  />
                </div>
                <Input
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  placeholder="#22d3ee"
                  className="flex-1 font-mono text-sm bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Extensions
              </label>
              <Input
                placeholder="py, js, ts, tsx"
                value={formData.extensions}
                onChange={(e) => setFormData({ ...formData, extensions: e.target.value })}
                className="font-mono text-sm bg-background/50"
              />
              <p className="text-[10px] text-muted-foreground">
                Comma-separated, without dots
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Description
              </label>
              <Input
                placeholder="e.g., Programming source files"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-background/50"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving || !formData.name || !formData.extensions}
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              {isSaving ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
