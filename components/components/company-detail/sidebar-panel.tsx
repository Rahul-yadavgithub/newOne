'use client'

import { Clock, Mail, Calendar, Zap, MessageSquare } from 'lucide-react'

interface Deadline {
  id: string
  title: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'completed' | 'overdue'
}

interface Meeting {
  id: string
  title: string
  time: string
  attendee: string
}

interface SidebarPanelProps {
  coordinator: {
    name: string
    email: string
    phone: string
  }
  deadlines: Deadline[]
  upcomingMeetings: Meeting[]
}

export function SidebarPanel({ coordinator, deadlines, upcomingMeetings }: SidebarPanelProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50'
      case 'medium':
        return 'border-yellow-200 bg-yellow-50'
      case 'low':
        return 'border-green-200 bg-green-50'
      default:
        return 'border-border bg-background'
    }
  }

  return (
    <div className="space-y-4">
      {/* Coordinator Info */}
      <div className="bg-white rounded-lg border border-border p-4 shadow-sm sticky top-64">
        <h3 className="text-sm font-semibold text-foreground mb-3">Primary Coordinator</h3>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="font-semibold text-primary text-sm">{coordinator.name.charAt(0)}</span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm">{coordinator.name}</p>
            <p className="text-xs text-muted-foreground truncate">{coordinator.email}</p>
          </div>
        </div>
        <div className="space-y-2">
          <a
            href={`mailto:${coordinator.email}`}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded transition-colors"
          >
            <Mail size={14} />
            Email
          </a>
          <a
            href={`tel:${coordinator.phone}`}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded transition-colors"
          >
            <Zap size={14} />
            Call
          </a>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-lg border border-border p-4 shadow-sm sticky top-96">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <Clock size={16} className="text-primary" />
          Upcoming Deadlines
        </h3>
        <div className="space-y-2">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className={`text-xs p-2.5 rounded border ${getPriorityColor(deadline.priority)}`}>
              <p className="font-medium text-foreground">{deadline.title}</p>
              <p className="text-muted-foreground mt-1">{deadline.dueDate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white rounded-lg border border-border p-4 shadow-sm sticky top-96">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <Calendar size={16} className="text-primary" />
          Upcoming Meetings
        </h3>
        <div className="space-y-2">
          {upcomingMeetings.length > 0 ? (
            upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="text-xs p-2.5 rounded border border-border hover:bg-muted/50 transition-colors">
                <p className="font-medium text-foreground">{meeting.title}</p>
                <p className="text-muted-foreground mt-1">{meeting.time}</p>
                <p className="text-muted-foreground text-xs mt-1">with {meeting.attendee}</p>
              </div>
            ))
          ) : (
            <p className="text-xs text-muted-foreground py-2">No upcoming meetings</p>
          )}
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-white rounded-lg border border-border p-4 shadow-sm sticky top-96">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <MessageSquare size={16} className="text-primary" />
          Quick Notes
        </h3>
        <textarea
          placeholder="Add notes about this company..."
          className="w-full text-xs p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          rows={4}
        />
        <button className="w-full mt-2 px-3 py-1.5 text-xs font-medium text-white bg-primary hover:bg-primary/90 rounded transition-colors">
          Save Notes
        </button>
      </div>
    </div>
  )
}
