'use client'

import { X, FileText, MessageSquare, Paperclip, User, Calendar, Flag, Copy } from 'lucide-react'
import { useState } from 'react'
import { ActivityBadge } from './activity-badge'

interface ActivityDrawerProps {
  isOpen: boolean
  onClose: () => void
  activity?: {
    id: string
    type: string
    title: string
    description: string
    fullDescription: string
    timestamp: string
    person: string
    personEmail: string
    department: string
    status: 'completed' | 'pending' | 'alert'
    priority: 'low' | 'medium' | 'high'
    previousStatus?: string
    nextStatus?: string
    linkedMeeting?: string
    attachments?: Array<{
      name: string
      type: string
      size: string
      uploadedBy: string
      uploadedAt: string
    }>
    comments?: Array<{
      author: string
      avatar: string
      text: string
      time: string
    }>
    relatedDocuments?: string[]
  }
}

export function ActivityDrawer({ isOpen, onClose, activity }: ActivityDrawerProps) {
  const [commentText, setCommentText] = useState('')

  if (!isOpen || !activity) return null

  const attachmentIcons: Record<string, React.ReactNode> = {
    pdf: '📄',
    excel: '📊',
    word: '📝',
    presentation: '🎯',
    image: '🖼️',
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl overflow-y-auto z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ActivityBadge type={activity.type} size="md" />
            <h2 className="font-semibold text-foreground truncate">{activity.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Status Badge and Priority */}
          <div className="flex gap-2">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                activity.priority === 'high'
                  ? 'bg-red-100 text-red-700'
                  : activity.priority === 'medium'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-emerald-100 text-emerald-700'
              }`}
            >
              {activity.priority.toUpperCase()}
            </span>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                activity.status === 'completed'
                  ? 'bg-emerald-100 text-emerald-700'
                  : activity.status === 'pending'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-red-100 text-red-700'
              }`}
            >
              {activity.status.toUpperCase()}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
            <p className="text-sm text-foreground leading-relaxed">
              {activity.fullDescription}
            </p>
          </div>

          {/* Metadata */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <User size={16} />
              <div>
                <div className="text-foreground font-medium">{activity.person}</div>
                <div className="text-xs">{activity.personEmail}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar size={16} />
              <span className="text-foreground">{activity.timestamp}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Flag size={16} />
              <span className="text-foreground">{activity.department}</span>
            </div>
          </div>

          {/* Status Transition */}
          {(activity.previousStatus || activity.nextStatus) && (
            <div className="bg-muted rounded-lg p-3">
              <h3 className="text-xs font-semibold text-muted-foreground mb-2">Status Flow</h3>
              <div className="flex items-center gap-2 text-xs">
                {activity.previousStatus && (
                  <>
                    <span className="px-2 py-1 bg-background rounded border border-border text-foreground">
                      {activity.previousStatus}
                    </span>
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
                <span className="px-2 py-1 bg-primary rounded text-primary-foreground font-medium">
                  {activity.status.toUpperCase()}
                </span>
                {activity.nextStatus && (
                  <>
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="px-2 py-1 bg-background rounded border border-border text-muted-foreground">
                      {activity.nextStatus}
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Linked Meeting */}
          {activity.linkedMeeting && (
            <div className="bg-muted rounded-lg p-3">
              <h3 className="text-xs font-semibold text-muted-foreground mb-2">Linked Meeting</h3>
              <div className="text-sm text-foreground">{activity.linkedMeeting}</div>
            </div>
          )}

          {/* Related Documents */}
          {activity.relatedDocuments && activity.relatedDocuments.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                Related Documents
              </h3>
              <div className="space-y-2">
                {activity.relatedDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <FileText size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground flex-1 truncate">{doc}</span>
                    <Copy size={14} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attachments */}
          {activity.attachments && activity.attachments.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Attachments</h3>
              <div className="space-y-2">
                {activity.attachments.map((attachment, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">
                        {attachmentIcons[attachment.type] || '📎'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">
                          {attachment.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{attachment.size}</div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      <div>Uploaded by {attachment.uploadedBy}</div>
                      <div>{attachment.uploadedAt}</div>
                    </div>
                    <button className="w-full px-2 py-1 text-xs text-primary border border-primary rounded hover:bg-primary/5 transition-colors">
                      Preview
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Comments ({activity.comments?.length || 0})
            </h3>

            {/* Comments List */}
            {activity.comments && activity.comments.length > 0 && (
              <div className="space-y-3 mb-4">
                {activity.comments.map((comment, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">
                          {comment.author}
                        </div>
                        <div className="text-xs text-muted-foreground">{comment.time}</div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Add Comment */}
            <div className="space-y-2">
              <textarea
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={3}
              />
              <button className="w-full px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
