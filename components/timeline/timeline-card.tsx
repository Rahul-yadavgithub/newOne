'use client'

import { FileText, MessageSquare, Paperclip, User } from 'lucide-react'
import { ActivityBadge } from './activity-badge'

interface TimelineCardProps {
  id: string
  type: string
  title: string
  description: string
  timestamp: string
  person: string
  department: string
  status: 'completed' | 'pending' | 'alert'
  priority: 'low' | 'medium' | 'high'
  attachments?: number
  comments?: number
  onViewDetails?: (id: string) => void
}

export function TimelineCard({
  id,
  type,
  title,
  description,
  timestamp,
  person,
  department,
  status,
  priority,
  attachments = 0,
  comments = 0,
  onViewDetails,
}: TimelineCardProps) {
  const priorityColors = {
    low: 'bg-emerald-100 text-emerald-700',
    medium: 'bg-amber-100 text-amber-700',
    high: 'bg-red-100 text-red-700',
  }

  const statusColors = {
    completed: 'bg-emerald-50 border-emerald-200',
    pending: 'bg-amber-50 border-amber-200',
    alert: 'bg-red-50 border-red-200',
  }

  return (
    <div className="relative pl-12 pb-12">
      {/* Timeline Dot and Connector */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="w-8 h-8 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-md">
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
        <div className="w-0.5 h-12 bg-border mt-2" />
      </div>

      {/* Timeline Card */}
      <div
        className={`p-4 rounded-lg border ${statusColors[status]} hover:shadow-md transition-all cursor-pointer group`}
        onClick={() => onViewDetails?.(id)}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 mt-1">
            <ActivityBadge type={type} size="md" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title and Badge Row */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {title}
                </h3>
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ${priorityColors[priority]}`}
              >
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>

            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{person}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="px-2 py-1 bg-muted rounded text-foreground font-medium">
                  {department}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span>{timestamp}</span>
              </div>
            </div>

            {/* Attachments and Comments */}
            {(attachments > 0 || comments > 0) && (
              <div className="flex gap-4 text-xs text-muted-foreground">
                {attachments > 0 && (
                  <div className="flex items-center gap-1">
                    <Paperclip size={14} />
                    <span>{attachments} attachment{attachments !== 1 ? 's' : ''}</span>
                  </div>
                )}
                {comments > 0 && (
                  <div className="flex items-center gap-1">
                    <MessageSquare size={14} />
                    <span>{comments} comment{comments !== 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Arrow Icon */}
          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary mt-1">
            <svg
              className="w-5 h-5"
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
          </div>
        </div>
      </div>
    </div>
  )
}
