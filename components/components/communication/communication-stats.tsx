'use client'

import { TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export interface CommunicationStatsProps {
  totalEmails: number
  pendingReplies: number
  averageResponseTime: string
  unreadCount: number
}

export function CommunicationStats({
  totalEmails,
  pendingReplies,
  averageResponseTime,
  unreadCount,
}: CommunicationStatsProps) {
  return (
    <div className="w-72 bg-card border-l border-border h-full flex flex-col overflow-hidden p-4 space-y-4">
      <h3 className="text-sm font-bold text-foreground">Communication Stats</h3>

      {/* Total Emails */}
      <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 space-y-1">
        <div className="flex items-center gap-2">
          <TrendingUp size={16} className="text-blue-600" />
          <p className="text-xs font-semibold text-blue-600">Total Emails</p>
        </div>
        <p className="text-2xl font-bold text-blue-700">{totalEmails}</p>
        <p className="text-xs text-blue-600">Since project started</p>
      </div>

      {/* Pending Replies */}
      <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 space-y-1">
        <div className="flex items-center gap-2">
          <AlertCircle size={16} className="text-amber-600" />
          <p className="text-xs font-semibold text-amber-600">Pending Replies</p>
        </div>
        <p className="text-2xl font-bold text-amber-700">{pendingReplies}</p>
        <p className="text-xs text-amber-600">Require attention</p>
      </div>

      {/* Average Response Time */}
      <div className="rounded-lg bg-green-50 border border-green-200 p-3 space-y-1">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-green-600" />
          <p className="text-xs font-semibold text-green-600">Avg Response Time</p>
        </div>
        <p className="text-2xl font-bold text-green-700">{averageResponseTime}</p>
        <p className="text-xs text-green-600">Hours</p>
      </div>

      {/* Unread Count */}
      <div className="rounded-lg bg-purple-50 border border-purple-200 p-3 space-y-1">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-purple-600" />
          <p className="text-xs font-semibold text-purple-600">Unread Messages</p>
        </div>
        <p className="text-2xl font-bold text-purple-700">{unreadCount}</p>
        <p className="text-xs text-purple-600">To review</p>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-3 space-y-2">
        <button className="w-full px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors">
          View All Conversations
        </button>
        <button className="w-full px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded transition-colors">
          Export Communication Log
        </button>
      </div>
    </div>
  )
}
