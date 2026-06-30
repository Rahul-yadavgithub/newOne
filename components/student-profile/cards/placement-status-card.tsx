import { CheckCircle2, Clock } from 'lucide-react'

interface PlacementStatusCardProps {
  student: {
    placementStatus: string
    currentStage: string
    interviewProgress: number
  }
}

export function PlacementStatusCard({ student }: PlacementStatusCardProps) {
  const stages = [
    { name: 'Application', completed: true },
    { name: 'Eligible', completed: true },
    { name: 'Assessment', completed: true },
    { name: 'Technical', completed: student.interviewProgress >= 50 },
    { name: 'HR', completed: false },
    { name: 'Selected', completed: false },
    { name: 'Offer', completed: false },
    { name: 'Onboarding', completed: false },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-emerald-100 text-emerald-700'
      case 'Rejected':
        return 'bg-red-100 text-red-700'
      case 'In Progress':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-amber-100 text-amber-700'
    }
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="text-emerald-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Placement Status</h3>
            <p className="text-xs text-muted-foreground">8-Stage Journey</p>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="mb-6 pb-6 border-b border-border/50">
        <p className="text-xs text-muted-foreground mb-2">Current Status</p>
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(student.placementStatus)}`}>
            {student.placementStatus}
          </span>
          <span className="text-sm text-muted-foreground">{student.currentStage}</span>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="space-y-3">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex items-center gap-3">
            <div className="relative flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  stage.completed
                    ? 'bg-emerald-500 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {stage.completed ? '✓' : index + 1}
              </div>
              {index < stages.length - 1 && (
                <div
                  className={`w-0.5 h-6 ${stage.completed ? 'bg-emerald-500' : 'bg-muted'}`}
                />
              )}
            </div>
            <p className={`text-sm ${stage.completed ? 'text-emerald-600 font-medium' : 'text-muted-foreground'}`}>
              {stage.name}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground mb-3">Overall Progress</p>
        <div className="w-full bg-muted rounded-full h-3">
          <div
            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full transition-all"
            style={{ width: `${(stages.filter(s => s.completed).length / stages.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-right">
          {stages.filter(s => s.completed).length} of {stages.length} stages completed
        </p>
      </div>
    </div>
  )
}
