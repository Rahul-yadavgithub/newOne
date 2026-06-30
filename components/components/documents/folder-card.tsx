'use client'

import { Folder, Clock, User } from 'lucide-react'

interface FolderCardProps {
  id: string
  name: string
  documentCount: number
  lastUpdated: string
  owner: string
  onOpen?: () => void
}

export function FolderCard({ name, documentCount, lastUpdated, owner, onOpen }: FolderCardProps) {
  return (
    <button
      onClick={onOpen}
      className="w-full text-left bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/50 transition-all group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Folder className="text-primary" size={24} />
        </div>
        <span className="px-2 py-1 bg-muted text-xs font-medium rounded text-foreground">
          {documentCount} file{documentCount !== 1 ? 's' : ''}
        </span>
      </div>
      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{name}</h3>
      <div className="space-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{lastUpdated}</span>
        </div>
        <div className="flex items-center gap-2">
          <User size={14} />
          <span>{owner}</span>
        </div>
      </div>
    </button>
  )
}
