import { Briefcase, ArrowRight } from 'lucide-react'

interface CurrentApplicationsCardProps {
  student: {
    applications: Array<{
      id: string
      company: string
      position: string
      status: string
      appliedDate: string
    }>
  }
}

export function CurrentApplicationsCard({ student }: CurrentApplicationsCardProps) {
  const activeApplications = student.applications.filter(
    a => a.status === 'In Progress' || a.status === 'Shortlisted'
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return { color: 'bg-emerald-100 text-emerald-700', label: 'Shortlisted' }
      case 'In Progress':
        return { color: 'bg-blue-100 text-blue-700', label: 'In Progress' }
      case 'Rejected':
        return { color: 'bg-red-100 text-red-700', label: 'Rejected' }
      default:
        return { color: 'bg-muted text-foreground', label: status }
    }
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center">
            <Briefcase className="text-orange-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Active Applications</h3>
            <p className="text-xs text-muted-foreground">{activeApplications.length} Active</p>
          </div>
        </div>
        <ArrowRight className="text-orange-600" size={20} />
      </div>

      {/* Application Cards */}
      <div className="space-y-3">
        {activeApplications.length > 0 ? (
          activeApplications.map((app) => (
            <div
              key={app.id}
              className="bg-muted/50 border border-border/50 rounded-lg p-4 hover:border-border transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm">{app.company}</p>
                  <p className="text-xs text-muted-foreground">{app.position}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusBadge(app.status).color}`}>
                  {getStatusBadge(app.status).label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Applied {new Date(app.appliedDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-muted-foreground">No active applications</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Applications</p>
            <p className="text-xl font-bold">{student.applications.length}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Success Rate</p>
            <p className="text-xl font-bold">
              {Math.round(
                (student.applications.filter(a => a.status === 'Shortlisted').length /
                  student.applications.length) *
                  100
              )}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
