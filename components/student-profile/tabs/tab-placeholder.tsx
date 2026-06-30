import { Package } from 'lucide-react'

interface StudentTabPlaceholderProps {
  title: string
}

export function StudentTabPlaceholder({ title }: StudentTabPlaceholderProps) {
  return (
    <div className="p-12 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
          <Package className="text-muted-foreground" size={32} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title} Section</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            This section is coming soon. More detailed information about {title.toLowerCase()} will be available here.
          </p>
        </div>
      </div>
    </div>
  )
}
