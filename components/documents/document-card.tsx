'use client'

import { FileText, Download, Share2, MoreVertical, Eye } from 'lucide-react'
import { DocumentStatusBadge, type DocumentStatus } from './document-status-badge'

interface DocumentCardProps {
  id: string
  name: string
  type: string
  version: string
  status: DocumentStatus
  owner: string
  uploadDate: string
  onPreview?: () => void
  onDownload?: () => void
  onShare?: () => void
}

export function DocumentCard({
  name,
  type,
  version,
  status,
  owner,
  uploadDate,
  onPreview,
  onDownload,
  onShare,
}: DocumentCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="p-3 bg-primary/10 rounded-lg">
          <FileText className="text-primary" size={24} />
        </div>
        <button className="p-1 hover:bg-muted rounded opacity-0 group-hover:opacity-100 transition-all">
          <MoreVertical size={16} className="text-muted-foreground" />
        </button>
      </div>
      
      <div className="mb-3">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-1">{name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">{type}</span>
          <span className="text-xs text-muted-foreground">v{version}</span>
        </div>
        <DocumentStatusBadge status={status} />
      </div>

      <div className="text-xs text-muted-foreground mb-3 space-y-0.5">
        <div>Uploaded by {owner}</div>
        <div>{uploadDate}</div>
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onPreview}
          className="flex-1 flex items-center justify-center gap-2 px-2 py-1.5 text-xs font-medium text-primary hover:bg-primary/5 rounded transition-colors"
        >
          <Eye size={14} />
          Preview
        </button>
        <button
          onClick={onDownload}
          className="flex items-center justify-center px-2 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted rounded transition-colors"
        >
          <Download size={14} />
        </button>
        <button
          onClick={onShare}
          className="flex items-center justify-center px-2 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted rounded transition-colors"
        >
          <Share2 size={14} />
        </button>
      </div>
    </div>
  )
}
