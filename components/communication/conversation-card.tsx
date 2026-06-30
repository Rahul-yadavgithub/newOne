'use client'

import { Star, Trash2, Archive } from 'lucide-react'
import { useState } from 'react'

export interface ConversationCardProps {
  id: string
  company: string
  sender: string
  subject: string
  preview: string
  timestamp: string
  unread: boolean
  starred: boolean
  avatar: string
  isSelected: boolean
  onClick: () => void
  priority?: 'high' | 'medium' | 'low'
}

export function ConversationCard({
  id,
  company,
  sender,
  subject,
  preview,
  timestamp,
  unread,
  starred,
  avatar,
  isSelected,
  onClick,
  priority = 'medium',
}: ConversationCardProps) {
  const [isStarred, setIsStarred] = useState(starred)
  const [showActions, setShowActions] = useState(false)

  const priorityColors = {
    high: 'border-l-4 border-l-red-500',
    medium: 'border-l-4 border-l-amber-500',
    low: 'border-l-4 border-l-blue-500',
  }

  const priorityBadgeColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-blue-100 text-blue-700',
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className={`p-3 rounded-lg border cursor-pointer transition-all ${
        isSelected
          ? 'bg-primary/10 border-primary'
          : 'bg-card border-border hover:border-primary/50'
      } ${priorityColors[priority]}`}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 text-white text-sm font-semibold"
        >
          {avatar}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-semibold truncate ${unread ? 'text-foreground font-bold' : 'text-foreground'}`}>
                {sender}
              </p>
              <p className="text-xs text-muted-foreground">{company}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {unread && <div className="w-2 h-2 rounded-full bg-primary" />}
              <span className="text-xs text-muted-foreground whitespace-nowrap">{timestamp}</span>
            </div>
          </div>

          <p className={`text-sm mt-1 truncate ${unread ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
            {subject}
          </p>
          <p className="text-xs text-muted-foreground truncate mt-0.5">{preview}</p>

          {/* Priority & Actions */}
          <div className="flex items-center justify-between mt-2 gap-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded capitalize ${priorityBadgeColors[priority]}`}>
              {priority}
            </span>
            {showActions && (
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsStarred(!isStarred)
                  }}
                  className="p-1 hover:bg-muted rounded transition-colors"
                >
                  <Star size={14} className={isStarred ? 'fill-amber-500 text-amber-500' : 'text-muted-foreground'} />
                </button>
                <button className="p-1 hover:bg-muted rounded transition-colors text-muted-foreground">
                  <Archive size={14} />
                </button>
                <button className="p-1 hover:bg-muted rounded transition-colors text-muted-foreground">
                  <Trash2 size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
