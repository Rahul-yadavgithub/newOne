import { Award, Star } from 'lucide-react'

interface CandidateEvaluationCardProps {
  student: {
    resumeScore: number
    codingScore: number
    communicationScore: number
    technicalScore: number
    leadersshipScore: number
    adaptabilityScore: number
    analyticsScore: number
    overallScore: number
  }
}

export function CandidateEvaluationCard({ student }: CandidateEvaluationCardProps) {
  const scores = [
    { label: 'Technical Skills', value: student.technicalScore, color: 'bg-blue-500' },
    { label: 'Coding Proficiency', value: student.codingScore, color: 'bg-purple-500' },
    { label: 'Communication', value: student.communicationScore, color: 'bg-amber-500' },
    { label: 'Leadership', value: student.leadersshipScore, color: 'bg-rose-500' },
    { label: 'Adaptability', value: student.adaptabilityScore, color: 'bg-teal-500' },
    { label: 'Analytics', value: student.analyticsScore, color: 'bg-green-500' },
    { label: 'Resume', value: student.resumeScore, color: 'bg-indigo-500' },
  ]

  const avgScore = Math.round(
    (student.technicalScore +
      student.codingScore +
      student.communicationScore +
      student.leadersshipScore +
      student.adaptabilityScore +
      student.analyticsScore +
      student.resumeScore) /
      7
  )

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <Award className="text-accent" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Candidate Evaluation</h3>
            <p className="text-xs text-muted-foreground">7 Key Metrics</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Star className="text-amber-500" size={18} fill="currentColor" />
          <span className="text-lg font-bold">{avgScore}</span>
        </div>
      </div>

      <div className="space-y-3">
        {scores.map((score) => (
          <div key={score.label} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <p className="text-sm font-medium text-foreground">{score.label}</p>
                <span className="text-xs font-bold text-muted-foreground">{score.value}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`${score.color} h-2 rounded-full transition-all`}
                  style={{ width: `${score.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Average Score Indicator */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Average Evaluation Score</p>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{avgScore}</p>
              <p className="text-xs text-muted-foreground">out of 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
