import { Activity, FileText, Calendar, CheckCircle2, Send } from 'lucide-react'

interface ActivityFeedCardProps {
  student: {
    activities: Array<{
      id: string
      type: string
      title: string
      description: string
      date: string
    }>
  }
}

export function ActivityFeedCard({ student }: ActivityFeedCardProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'resume_update':
        return <FileText size={16} className="text-blue-600" />
      case 'interview_scheduled':
        return <Calendar size={16} className="text-purple-600" />
      case 'profile_completed':
        return <CheckCircle2 size={16} className="text-emerald-600" />
      case 'application_submitted':
        return <Send size={16} className="text-blue-600" />
      default:
        return <Activity size={16} className="text-muted-foreground" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'resume_update':
        return 'bg-blue-100'
      case 'interview_scheduled':
        return 'bg-purple-100'
      case 'profile_completed':
        return 'bg-emerald-100'
      case 'application_submitted':
        return 'bg-blue-100'
      default:
        return 'bg-muted'
    }
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
            <Activity className="text-teal-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Activity Feed</h3>
            <p className="text-xs text-muted-foreground">Recent Updates</p>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-4 max-h-64 overflow-y-auto">
        {student.activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-3">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              {index < student.activities.length - 1 && (
                <div className="w-0.5 h-8 bg-border mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <p className="font-medium text-sm">{activity.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
