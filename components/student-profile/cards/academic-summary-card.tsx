import { BookOpen, TrendingUp } from 'lucide-react'

interface AcademicSummaryCardProps {
  student: {
    name: string
    cgpa: number
    overallScore: number
    resumeScore: number
    department: string
  }
}

export function AcademicSummaryCard({ student }: AcademicSummaryCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600'
    if (score >= 80) return 'text-blue-600'
    if (score >= 70) return 'text-amber-600'
    return 'text-red-600'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-emerald-100'
    if (score >= 80) return 'bg-blue-100'
    if (score >= 70) return 'bg-amber-100'
    return 'bg-red-100'
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <BookOpen className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Academic Summary</h3>
            <p className="text-xs text-muted-foreground">{student.department}</p>
          </div>
        </div>
        <TrendingUp className="text-primary" size={20} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* CGPA */}
        <div className="bg-card rounded-lg p-4 border border-border/50">
          <p className="text-xs text-muted-foreground mb-2">CGPA</p>
          <p className="text-2xl font-bold mb-1">{student.cgpa.toFixed(2)}</p>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className="bg-primary h-1.5 rounded-full"
              style={{ width: `${(student.cgpa / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Overall Score */}
        <div className="bg-card rounded-lg p-4 border border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Overall Score</p>
          <p className={`text-2xl font-bold mb-1 ${getScoreColor(student.overallScore)}`}>
            {student.overallScore}
          </p>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className={`${getScoreBgColor(student.overallScore)} h-1.5 rounded-full`}
              style={{ width: `${student.overallScore}%` }}
            />
          </div>
        </div>

        {/* Resume Score */}
        <div className="bg-card rounded-lg p-4 border border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Resume Score</p>
          <p className={`text-2xl font-bold mb-1 ${getScoreColor(student.resumeScore)}`}>
            {student.resumeScore}
          </p>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className={`${getScoreBgColor(student.resumeScore)} h-1.5 rounded-full`}
              style={{ width: `${student.resumeScore}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
