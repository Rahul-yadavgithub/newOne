'use client'

import { ArrowDown, ArrowUp, TrendingDown } from 'lucide-react'
import type { ReactNode } from 'react'

interface CompanyStatCardProps {
  icon: ReactNode
  label: string
  value: number
  description: string
  trend?: {
    direction: 'up' | 'down' | 'neutral'
    percentage: number
  }
}

export function CompanyStatCard({
  icon,
  label,
  value,
  description,
  trend,
}: CompanyStatCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        {trend && (
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
              trend.direction === 'up'
                ? 'bg-green-50 text-green-700'
                : trend.direction === 'down'
                  ? 'bg-red-50 text-red-700'
                  : 'bg-gray-50 text-gray-700'
            }`}
          >
            {trend.direction === 'up' && <ArrowUp size={12} />}
            {trend.direction === 'down' && <ArrowDown size={12} />}
            {trend.direction === 'neutral' && <TrendingDown size={12} />}
            {trend.percentage}%
          </div>
        )}
      </div>

      <div className="mb-3">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>

      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}
