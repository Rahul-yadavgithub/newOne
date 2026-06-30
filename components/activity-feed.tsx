'use client'

import { CheckCircle, Clock, Mail, MapPin, MessageSquare, User } from 'lucide-react'

interface Activity {
  id: number
  type: 'offer' | 'shortlist' | 'meeting' | 'invite' | 'message'
  title: string
  description: string
  timestamp: string
  icon: React.ReactNode
  color: string
}

export function ActivityFeed() {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'offer',
      title: 'Offer Released',
      description: 'TCS extended offer to 15 students',
      timestamp: '2 hours ago',
      icon: <CheckCircle size={18} />,
      color: 'bg-emerald-100',
    },
    {
      id: 2,
      type: 'shortlist',
      title: 'Students Shortlisted',
      description: 'Infosys shortlisted 8 candidates for final round',
      timestamp: '4 hours ago',
      icon: <Mail size={18} />,
      color: 'bg-blue-100',
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Meeting Scheduled',
      description: 'Accenture pre-placement talk scheduled',
      timestamp: '6 hours ago',
      icon: <Clock size={18} />,
      color: 'bg-purple-100',
    },
    {
      id: 4,
      type: 'invite',
      title: 'Company Invitation',
      description: 'Amazon accepted drive invitation for next week',
      timestamp: '1 day ago',
      icon: <MessageSquare size={18} />,
      color: 'bg-orange-100',
    },
    {
      id: 5,
      type: 'message',
      title: 'Database Request',
      description: 'HCL Industries requested student database',
      timestamp: '2 days ago',
      icon: <User size={18} />,
      color: 'bg-pink-100',
    },
  ]

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <a href="#" className="text-sm text-primary hover:underline font-medium">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-4 pb-4 last:pb-0 last:border-0 border-b border-border last:border-b-0">
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center`}
            >
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
