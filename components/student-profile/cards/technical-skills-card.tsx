import { Zap, TrendingUp } from 'lucide-react'

interface TechnicalSkillsCardProps {
  student: {
    skills: Array<{
      name: string
      proficiency: number
    }>
  }
}

export function TechnicalSkillsCard({ student }: TechnicalSkillsCardProps) {
  const topSkills = student.skills.slice(0, 8)
  const avgProficiency = Math.round(
    topSkills.reduce((sum, skill) => sum + skill.proficiency, 0) / topSkills.length
  )

  return (
    <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Zap className="text-secondary" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Technical Skills</h3>
            <p className="text-xs text-muted-foreground">{topSkills.length} Skills Profiled</p>
          </div>
        </div>
        <TrendingUp className="text-secondary" size={20} />
      </div>

      <div className="space-y-4">
        {topSkills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3">
            <div className="w-20 flex-shrink-0">
              <p className="text-sm font-medium text-foreground">{skill.name}</p>
            </div>
            <div className="flex-1">
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    skill.proficiency >= 90
                      ? 'bg-emerald-500'
                      : skill.proficiency >= 80
                      ? 'bg-blue-500'
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
            <div className="w-12 text-right">
              <p className="text-xs font-bold text-muted-foreground">{skill.proficiency}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
        <p className="text-sm font-medium">Average Proficiency</p>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-xl font-bold text-primary">{avgProficiency}%</p>
            <p className="text-xs text-muted-foreground">Across Skills</p>
          </div>
        </div>
      </div>
    </div>
  )
}
