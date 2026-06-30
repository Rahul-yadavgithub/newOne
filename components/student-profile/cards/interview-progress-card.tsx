import { Calendar, CheckCircle2 } from 'lucide-react'

interface InterviewProgressCardProps {
  student: {
    interviews: Array<{
      id: string
      company: string
      type: string
      scheduledDate: string | null
      round: number
      status: string
    }>
  }
}

export function InterviewProgressCard({ student }: InterviewProgressCardProps) {
  const scheduled = student.interviews.filter(i => i.status === 'Scheduled').length
  const pending = student.interviews.filter(i => i.status === 'Pending').length
  const completed = student.interviews.filter(i => i.status === 'Completed').length

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700'
      case 'Completed':
        return 'bg-emerald-100 text-emerald-700'
      default:
        return 'bg-amber-100 text-amber-700'
    }
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center">
            <Calendar className="text-purple-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Interview Progress</h3>
            <p className="text-xs text-muted-foreground">{student.interviews.length} Interviews</p>
          </div>
        </div>
        <CheckCircle2 className="text-purple-600" size={20} />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border/50">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{scheduled}</p>
          <p className="text-xs text-muted-foreground">Scheduled</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-600">{completed}</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-amber-600">{pending}</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
      </div>

      {/* Interviews List */}
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {student.interviews.map((interview) => (
          <div key={interview.id} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{interview.company}</p>
              <p className="text-xs text-muted-foreground">
                {interview.type} • Round {interview.round}
              </p>
              {interview.scheduledDate && (
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(interview.scheduledDate).toLocaleDateString()}
                </p>
              )}
            </div>
            <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${getStatusColor(interview.status)}`}>
              {interview.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
