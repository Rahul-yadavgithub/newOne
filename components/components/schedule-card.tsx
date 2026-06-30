'use client'

import { Calendar, Clock } from 'lucide-react'

interface ScheduleItem {
  id: number
  title: string
  type: 'meeting' | 'interview' | 'drive' | 'deadline'
  time: string
  date: string
  location?: string
  company?: string
}

export function ScheduleCard() {
  const scheduleItems: ScheduleItem[] = [
    {
      id: 1,
      title: 'Google Pre-Placement Talk',
      type: 'meeting',
      time: '10:00 AM',
      date: 'Tomorrow',
      location: 'Auditorium A',
      company: 'Google',
    },
    {
      id: 2,
      title: 'Microsoft Round 2 Interviews',
      type: 'interview',
      time: '2:00 PM',
      date: 'Dec 28',
      location: 'Interview Room 3',
      company: 'Microsoft',
    },
    {
      id: 3,
      title: 'Amazon Hiring Drive',
      type: 'drive',
      time: '9:00 AM',
      date: 'Dec 30',
      location: 'Campus',
      company: 'Amazon',
    },
    {
      id: 4,
      title: 'Application Submission Deadline',
      type: 'deadline',
      time: '11:59 PM',
      date: 'Dec 29',
      location: 'Online',
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-700'
      case 'interview':
        return 'bg-purple-100 text-purple-700'
      case 'drive':
        return 'bg-emerald-100 text-emerald-700'
      case 'deadline':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Calendar size={20} />
          Upcoming Schedule
        </h2>
      </div>

      <div className="space-y-3">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{item.title}</p>
                {item.company && (
                  <p className="text-xs text-muted-foreground">{item.company}</p>
                )}
              </div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${getTypeColor(
                  item.type
                )}`}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{item.time}</span>
              </div>
              <span>{item.date}</span>
              {item.location && <span>{item.location}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
