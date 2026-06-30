'use client'

import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'

interface StatisticsCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  color: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'cyan'
}

const colorConfig = {
  blue: 'bg-blue-50 text-blue-700',
  emerald: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-amber-50 text-amber-700',
  purple: 'bg-purple-50 text-purple-700',
  rose: 'bg-rose-50 text-rose-700',
  cyan: 'bg-cyan-50 text-cyan-700',
}

const iconBg = {
  blue: 'bg-blue-100',
  emerald: 'bg-emerald-100',
  amber: 'bg-amber-100',
  purple: 'bg-purple-100',
  rose: 'bg-rose-100',
  cyan: 'bg-cyan-100',
}

export function StatisticsCard({ icon: Icon, label, value, trend, color }: StatisticsCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2.5 rounded-lg ${iconBg[color]}`}>
          <Icon size={20} className={colorConfig[color]} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trend.isPositive ? 'text-emerald-700' : 'text-rose-700'}`}>
            {trend.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  )
}
