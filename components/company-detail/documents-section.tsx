'use client'

import { FileText, Download, Eye, Trash2, Upload } from 'lucide-react'

interface Document {
  id: string
  name: string
  type: string
  uploadedBy: string
  uploadedAt: string
  size: string
}

interface DocumentsSectionProps {
  documents: Document[]
}

export function DocumentsSection({ documents }: DocumentsSectionProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Documents</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors">
          <Upload size={16} />
          <span className="hidden sm:inline">Upload</span>
        </button>
      </div>

      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="bg-blue-100 text-blue-700 p-2.5 rounded-lg flex-shrink-0">
                <FileText size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm text-foreground truncate">{doc.name}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                  <span>•</span>
                  <span>by {doc.uploadedBy}</span>
                  <span>•</span>
                  <span>{doc.uploadedAt}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 hover:bg-blue-100 rounded text-blue-700 transition-colors" title="View">
                <Eye size={16} />
              </button>
              <button className="p-1.5 hover:bg-green-100 rounded text-green-700 transition-colors" title="Download">
                <Download size={16} />
              </button>
              <button className="p-1.5 hover:bg-red-100 rounded text-red-700 transition-colors" title="Delete">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {documents.length === 0 && (
        <div className="text-center py-8">
          <FileText size={32} className="text-muted-foreground mx-auto mb-2 opacity-50" />
          <p className="text-sm text-muted-foreground">No documents yet</p>
          <button className="text-sm text-primary hover:underline mt-2">Upload your first document</button>
        </div>
      )}
    </div>
  )
}
