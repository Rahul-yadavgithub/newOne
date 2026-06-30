'use client'

import { Download, Copy, Forward } from 'lucide-react'
import { useState } from 'react'

interface EmailBubbleProps {
  sender: string
  timestamp: string
  subject: string
  body: string
  attachments?: { id: string; name: string; size: string; type: string }[]
  isOutgoing: boolean
  quoted?: string
}

export function EmailBubble({
  sender,
  timestamp,
  subject,
  body,
  attachments,
  isOutgoing,
  quoted,
}: EmailBubbleProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-2xl rounded-lg border p-4 ${
          isOutgoing
            ? 'bg-primary/10 border-primary/20 rounded-br-none'
            : 'bg-muted border-border rounded-bl-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="text-sm font-semibold text-foreground">{sender}</p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
          {isHovering && (
            <div className="flex gap-1">
              <button className="p-1 hover:bg-muted rounded transition-colors">
                <Copy size={14} className="text-muted-foreground" />
              </button>
              <button className="p-1 hover:bg-muted rounded transition-colors">
                <Forward size={14} className="text-muted-foreground" />
              </button>
            </div>
          )}
        </div>

        {/* Subject */}
        {subject && (
          <p className="text-sm font-semibold text-foreground mb-2">{subject}</p>
        )}

        {/* Body */}
        <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed mb-3">
          {body}
        </p>

        {/* Quoted Message */}
        {quoted && (
          <div className="mt-3 p-3 border-l-4 border-muted-foreground bg-muted/30 rounded text-xs text-muted-foreground mb-3">
            <p className="line-clamp-3">{quoted}</p>
          </div>
        )}

        {/* Attachments */}
        {attachments && attachments.length > 0 && (
          <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
            <p className="text-xs font-semibold text-foreground">Attachments ({attachments.length})</p>
            <div className="space-y-1">
              {attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center justify-between p-2 rounded bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded flex items-center justify-center bg-muted text-xs font-semibold flex-shrink-0">
                      {attachment.type.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-foreground truncate">
                        {attachment.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{attachment.size}</p>
                    </div>
                  </div>
                  <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={14} className="text-primary" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
