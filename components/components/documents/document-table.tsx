'use client'

import { Download, Share2, Trash2, Clock, Eye } from 'lucide-react'
import { DocumentStatusBadge, type DocumentStatus } from './document-status-badge'

interface TableDocument {
  id: string
  name: string
  type: string
  version: string
  uploadedBy: string
  uploadDate: string
  size: string
  status: DocumentStatus
  lastModified: string
}

interface DocumentTableProps {
  documents: TableDocument[]
  onPreview?: (id: string) => void
  onDownload?: (id: string) => void
  onShare?: (id: string) => void
  onDelete?: (id: string) => void
}

export function DocumentTable({
  documents,
  onPreview,
  onDownload,
  onShare,
  onDelete,
}: DocumentTableProps) {
  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left font-semibold text-foreground">File Name</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Version</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Uploaded By</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Date</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Size</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Last Modified</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-b border-border hover:bg-muted/30 transition-colors group"
            >
              <td className="px-4 py-3 font-medium text-foreground max-w-xs truncate">
                {doc.name}
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <span className="px-2 py-1 bg-muted text-xs rounded">{doc.type}</span>
              </td>
              <td className="px-4 py-3 text-muted-foreground">v{doc.version}</td>
              <td className="px-4 py-3 text-muted-foreground">{doc.uploadedBy}</td>
              <td className="px-4 py-3 text-muted-foreground">{doc.uploadDate}</td>
              <td className="px-4 py-3 text-muted-foreground">{doc.size}</td>
              <td className="px-4 py-3">
                <DocumentStatusBadge status={doc.status} />
              </td>
              <td className="px-4 py-3 text-muted-foreground text-xs flex items-center gap-1">
                <Clock size={14} />
                {doc.lastModified}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onPreview?.(doc.id)}
                    className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                    title="Preview"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => onDownload?.(doc.id)}
                    className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                    title="Download"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() => onShare?.(doc.id)}
                    className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                    title="Share"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete?.(doc.id)}
                    className="p-1.5 hover:bg-red-50 rounded text-muted-foreground hover:text-red-600 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
