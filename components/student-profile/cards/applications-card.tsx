import { Send, TrendingUp } from 'lucide-react'

interface ApplicationsCardProps {
  student: {
    applications: Array<{
      id: string
      company: string
      position: string
      appliedDate: string
      status: string
    }>
  }
}

export function ApplicationsCard({ student }: ApplicationsCardProps) {
  const shortlisted = student.applications.filter(a => a.status === 'Shortlisted').length
  const rejected = student.applications.filter(a => a.status === 'Rejected').length
  const inProgress = student.applications.filter(a => a.status === 'In Progress').length

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return '✓'
      case 'Rejected':
        return '✕'
      default:
        return '→'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-emerald-100 text-emerald-700'
      case 'Rejected':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
            <Send className="text-blue-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Applications</h3>
            <p className="text-xs text-muted-foreground">{student.applications.length} Total</p>
          </div>
        </div>
        <TrendingUp className="text-blue-600" size={20} />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border/50">
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-600">{shortlisted}</p>
          <p className="text-xs text-muted-foreground">Shortlisted</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{inProgress}</p>
          <p className="text-xs text-muted-foreground">In Progress</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">{rejected}</p>
          <p className="text-xs text-muted-foreground">Rejected</p>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {student.applications.map((app) => (
          <div key={app.id} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{app.company}</p>
              <p className="text-xs text-muted-foreground">{app.position}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(app.appliedDate).toLocaleDateString()}
              </p>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(app.status)}`}>
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
