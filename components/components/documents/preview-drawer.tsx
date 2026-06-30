'use client'

import { useState } from 'react'
import { X, Download, Share2, ChevronDown } from 'lucide-react'
import { DocumentStatusBadge, type DocumentStatus } from './document-status-badge'
import { Tag, type TagType } from './tag-component'
import { VersionTimeline } from './version-timeline'
import { CommentCard } from './comment-card'

interface PreviewDocument {
  id: string
  name: string
  type: string
  size: string
  status: DocumentStatus
  uploadedBy: string
  uploadDate: string
  version: string
  tags: TagType[]
}

interface Version {
  id: string
  version: string
  updatedBy: string
  updatedDate: string
  summary: string
}

interface Activity {
  id: string
  type: string
  actor: string
  action: string
  timestamp: string
}

interface Comment {
  id: string
  author: string
  avatar: string
  comment: string
  timestamp: string
}

interface PreviewDrawerProps {
  document: PreviewDocument | null
  versions: Version[]
  activities: Activity[]
  comments: Comment[]
  onClose: () => void
  onDownload?: () => void
  onShare?: () => void
}

export function PreviewDrawer({
  document,
  versions,
  activities,
  comments,
  onClose,
  onDownload,
  onShare,
}: PreviewDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<'versions' | 'activity' | 'comments' | null>('versions')

  if (!document) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 lg:relative lg:bg-transparent" onClick={onClose} />
      
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-background border-l border-border z-50 lg:relative lg:w-80 lg:border-l lg:border-border shadow-lg lg:shadow-none overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <h3 className="font-semibold text-foreground line-clamp-1">{document.name}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Thumbnail */}
          <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="text-3xl mb-2">📄</div>
              <p className="text-xs text-muted-foreground">{document.type}</p>
            </div>
          </div>

          {/* Metadata */}
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <DocumentStatusBadge status={document.status} />
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground mb-1">Tags</p>
              <div className="flex flex-wrap gap-2">
                {document.tags.map((tag) => (
                  <Tag key={tag} type={tag} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-muted-foreground">Size</p>
                <p className="font-medium text-sm">{document.size}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Version</p>
                <p className="font-medium text-sm">v{document.version}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Uploaded by</p>
              <p className="font-medium text-sm">{document.uploadedBy}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Upload Date</p>
              <p className="font-medium text-sm">{document.uploadDate}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={onDownload}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Download
            </button>
            <button
              onClick={onShare}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>

          {/* Version History */}
          <div className="border-t border-border pt-4">
            <button
              onClick={() => setExpandedSection(expandedSection === 'versions' ? null : 'versions')}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Version History ({versions.length})
              <ChevronDown size={16} className={`transition-transform ${expandedSection === 'versions' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'versions' && (
              <div className="mt-3">
                <VersionTimeline versions={versions} />
              </div>
            )}
          </div>

          {/* Activity */}
          <div className="border-t border-border pt-4">
            <button
              onClick={() => setExpandedSection(expandedSection === 'activity' ? null : 'activity')}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Recent Activity ({activities.length})
              <ChevronDown size={16} className={`transition-transform ${expandedSection === 'activity' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'activity' && (
              <div className="mt-3 space-y-2">
                {activities.map((activity) => (
                  <div key={activity.id} className="text-xs text-muted-foreground p-2 bg-muted rounded">
                    <p><span className="font-medium text-foreground">{activity.actor}</span> {activity.action}</p>
                    <p>{activity.timestamp}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Comments */}
          <div className="border-t border-border pt-4">
            <button
              onClick={() => setExpandedSection(expandedSection === 'comments' ? null : 'comments')}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Comments ({comments.length})
              <ChevronDown size={16} className={`transition-transform ${expandedSection === 'comments' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'comments' && (
              <div className="mt-3 space-y-2">
                {comments.map((comment) => (
                  <CommentCard key={comment.id} {...comment} />
                ))}
                <button className="w-full mt-3 px-3 py-2 border border-border rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors">
                  Add Comment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
