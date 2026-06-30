'use client'

import { Mail, Calendar, FileText, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'

interface TimelineStatsProps {
  totalActivities: number
  emailsSent: number
  meetings: number
  documents: number
  timelineEvents: number
  pendingTasks: number
  completionPercent: number
  riskLevel: 'low' | 'medium' | 'high'
}

export function TimelineStats({
  totalActivities,
  emailsSent,
  meetings,
  documents,
  timelineEvents,
  pendingTasks,
  completionPercent,
  riskLevel,
}: TimelineStatsProps) {
  const riskColors = {
    low: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    medium: 'bg-amber-50 border-amber-200 text-amber-700',
    high: 'bg-red-50 border-red-200 text-red-700',
  }

  const riskIcons = {
    low: '✓',
    medium: '⚠',
    high: '✕',
  }

  return (
    <div className="bg-white border border-border rounded-lg p-4 sticky top-24 h-fit">
      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <TrendingUp size={16} className="text-primary" />
        Timeline Statistics
      </h3>

      <div className="space-y-3">
        {/* Total Activities */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-primary" />
            <span className="text-muted-foreground">Total Activities</span>
          </div>
          <span className="text-lg font-semibold text-foreground">{totalActivities}</span>
        </div>

        {/* Emails Sent */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} className="text-blue-600" />
            <span className="text-muted-foreground">Emails Sent</span>
          </div>
          <span className="text-lg font-semibold text-foreground">{emailsSent}</span>
        </div>

        {/* Meetings */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} className="text-purple-600" />
            <span className="text-muted-foreground">Meetings</span>
          </div>
          <span className="text-lg font-semibold text-foreground">{meetings}</span>
        </div>

        {/* Documents */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <FileText size={16} className="text-orange-600" />
            <span className="text-muted-foreground">Documents</span>
          </div>
          <span className="text-lg font-semibold text-foreground">{documents}</span>
        </div>

        {/* Timeline Events */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-base">📊</span>
            <span className="text-muted-foreground">Timeline Events</span>
          </div>
          <span className="text-lg font-semibold text-foreground">{timelineEvents}</span>
        </div>

        {/* Pending Tasks */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle size={16} className="text-amber-600" />
            <span className="text-muted-foreground">Pending Tasks</span>
          </div>
          <span className="text-lg font-semibold text-foreground">{pendingTasks}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-2" />

        {/* Completion Percentage */}
        <div className="p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Completion</span>
            <span className="text-lg font-semibold text-foreground">{completionPercent}%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>

        {/* Risk Level */}
        <div
          className={`p-3 rounded-lg border ${riskColors[riskLevel]}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Risk Level</span>
            <span className="text-xl font-bold flex items-center gap-1">
              {riskIcons[riskLevel]} {riskLevel.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Export Button */}
        <button className="w-full px-3 py-2 border border-border bg-background hover:bg-muted text-foreground rounded-lg text-sm font-medium transition-colors mt-4">
          Export Timeline
        </button>
      </div>
    </div>
  )
}
