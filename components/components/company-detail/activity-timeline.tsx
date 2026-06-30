'use client'

import { Mail, Phone, FileText, CheckCircle2, Clock, MessageSquare } from 'lucide-react'

interface Activity {
  id: string
  type: 'email' | 'call' | 'document' | 'milestone' | 'meeting' | 'message'
  title: string
  description: string
  timestamp: string
  person: string
}

interface ActivityTimelineProps {
  activities: Activity[]
}

const activityIcons: Record<string, any> = {
  email: Mail,
  call: Phone,
  document: FileText,
  milestone: CheckCircle2,
  meeting: Clock,
  message: MessageSquare,
}

const activityColors: Record<string, string> = {
  email: 'bg-blue-100 text-blue-700',
  call: 'bg-green-100 text-green-700',
  document: 'bg-purple-100 text-purple-700',
  milestone: 'bg-green-100 text-green-700',
  meeting: 'bg-orange-100 text-orange-700',
  message: 'bg-pink-100 text-pink-700',
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((activity, idx) => {
          const Icon = activityIcons[activity.type]
          const colorClass = activityColors[activity.type]

          return (
            <div key={activity.id} className="flex gap-4">
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                <div className={`${colorClass} p-2.5 rounded-lg`}>
                  <Icon size={16} />
                </div>
                {idx !== activities.length - 1 && (
                  <div className="w-0.5 h-12 bg-border mt-2" />
                )}
              </div>

              {/* Activity Content */}
              <div className="pb-4 flex-1 pt-1">
                <div className="flex items-start justify-between mb-1">
                  <p className="font-semibold text-foreground text-sm">{activity.title}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{activity.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{activity.person}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Load More Button */}
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors">
        Load More Activity
      </button>
    </div>
  )
}
