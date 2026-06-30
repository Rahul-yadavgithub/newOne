'use client'

import { Archive, Trash2, MoreVertical, Flag } from 'lucide-react'
import { EmailBubble } from './email-bubble'
import { ReplyBox } from './reply-box'

interface Email {
  id: string
  sender: string
  timestamp: string
  subject: string
  body: string
  attachments?: { id: string; name: string; size: string; type: string }[]
  isOutgoing: boolean
  quoted?: string
}

interface ConversationViewerProps {
  company: string
  subject: string
  emails: Email[]
  onReply?: (message: string) => void
}

export function ConversationViewer({
  company,
  subject,
  emails,
  onReply,
}: ConversationViewerProps) {
  return (
    <div className="flex-1 bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border bg-card p-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-foreground">{company}</h3>
          <p className="text-sm text-muted-foreground">{subject}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
            <Flag size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
            <Archive size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
            <Trash2 size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Email Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {emails.map((email) => (
          <EmailBubble
            key={email.id}
            sender={email.sender}
            timestamp={email.timestamp}
            subject={email.subject}
            body={email.body}
            attachments={email.attachments}
            isOutgoing={email.isOutgoing}
            quoted={email.quoted}
          />
        ))}
      </div>

      {/* Reply Box */}
      <ReplyBox onSend={onReply || (() => {})} />
    </div>
  )
}
