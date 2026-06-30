import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'

interface StudentKPICardProps {
  icon: LucideIcon
  label: string
  value: number
  trend: number
  trendDirection: 'up' | 'down' | 'neutral'
  supportingText?: string
  color?: 'primary' | 'secondary' | 'accent' | 'emerald' | 'amber' | 'red'
}

export function StudentKPICard({
  icon: Icon,
  label,
  value,
  trend,
  trendDirection,
  supportingText,
  color = 'primary',
}: StudentKPICardProps) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    emerald: 'bg-emerald-500/10 text-emerald-600',
    amber: 'bg-amber-500/10 text-amber-600',
    red: 'bg-red-500/10 text-red-600',
  }

  const trendColor = {
    up: 'text-emerald-600',
    down: 'text-red-600',
    neutral: 'text-muted-foreground',
  }

  const TrendIcon = trendDirection === 'up' ? TrendingUp : trendDirection === 'down' ? TrendingDown : TrendingUp

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          <Icon size={20} />
        </div>
        {trend !== 0 && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trendColor[trendDirection]}`}>
            <TrendIcon size={14} />
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold mb-2">{value.toLocaleString()}</p>
      {supportingText && <p className="text-xs text-muted-foreground">{supportingText}</p>}
    </div>
  )
}
