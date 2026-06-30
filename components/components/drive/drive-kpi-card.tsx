'use client'

import { LucideIcon } from 'lucide-react'

interface DriveKPICardProps {
  icon: LucideIcon
  label: string
  value: number
  max?: number
  supportingText?: string
  color?: 'primary' | 'secondary' | 'accent' | 'emerald' | 'amber' | 'red'
}

export function DriveKPICard({
  icon: Icon,
  label,
  value,
  max = 100,
  supportingText,
  color = 'primary',
}: DriveKPICardProps) {
  const percentage = (value / max) * 100

  const colorClasses = {
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    accent: 'text-accent bg-accent/10',
    emerald: 'text-emerald-600 bg-emerald-50',
    amber: 'text-amber-600 bg-amber-50',
    red: 'text-red-600 bg-red-50',
  }

  const barColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    emerald: 'bg-emerald-600',
    amber: 'bg-amber-600',
    red: 'bg-red-600',
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {supportingText && (
            <p className="text-xs text-muted-foreground mt-1">{supportingText}</p>
          )}
        </div>
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          <Icon size={20} />
        </div>
      </div>

      {/* Progress Bar */}
      {max && (
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${barColorClasses[color]}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}
