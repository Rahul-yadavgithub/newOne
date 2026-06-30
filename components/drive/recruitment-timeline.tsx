'use client'

import { Calendar } from 'lucide-react'

interface TimelineEvent {
  id: string
  title: string
  date: string
  status: 'completed' | 'upcoming' | 'current'
  icon: string
}

interface RecruitmentTimelineProps {
  events: TimelineEvent[]
}

export function RecruitmentTimeline({ events }: RecruitmentTimelineProps) {
  const statusColors = {
    completed: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    current: 'bg-primary/10 text-primary border-primary/30',
    upcoming: 'bg-muted text-muted-foreground border-border',
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Recruitment Timeline</h2>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={event.id} className="flex gap-4">
            {/* Timeline Line & Dot */}
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${statusColors[event.status]}`}
              >
                {event.icon}
              </div>

              {/* Connector Line */}
              {index < events.length - 1 && (
                <div
                  className={`w-0.5 h-12 mt-2 ${
                    event.status === 'completed' ? 'bg-emerald-600' : 'bg-border'
                  }`}
                ></div>
              )}
            </div>

            {/* Event Details */}
            <div className={`flex-1 pt-1 pb-4 border-l-2 pl-4 ${
              statusColors[event.status].split(' ')[0].replace('bg-', 'border-')
                ? `border-l-${event.status === 'completed' ? 'emerald-600' : event.status === 'current' ? 'primary' : 'border'}`
                : 'border-border'
            }`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar size={14} />
                    {event.date}
                  </p>
                </div>
                {event.status === 'completed' && (
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    Completed
                  </span>
                )}
                {event.status === 'current' && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    Ongoing
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
