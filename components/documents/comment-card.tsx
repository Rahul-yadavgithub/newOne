'use client'

import { MessageCircle } from 'lucide-react'

interface CommentCardProps {
  id: string
  author: string
  avatar: string
  comment: string
  timestamp: string
  onReply?: () => void
}

export function CommentCard({ author, avatar, comment, timestamp, onReply }: CommentCardProps) {
  return (
    <div className="flex gap-3 pb-3 mb-3 border-b border-border last:border-b-0">
      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0">
        {avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-sm text-foreground">{author}</h4>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-foreground mb-2">{comment}</p>
        <button
          onClick={onReply}
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle size={14} />
          Reply
        </button>
      </div>
    </div>
  )
}
