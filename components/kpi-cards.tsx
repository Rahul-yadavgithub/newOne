'use client'

import { ArrowDown, ArrowUp, TrendingUp } from 'lucide-react'
import type React from 'react'

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: number
  icon: React.ReactNode
  bgColor?: string
}

export function KPICard({
  title,
  value,
  subtitle,
  trend,
  icon,
  bgColor = 'bg-primary/10',
}: KPICardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mt-1">{value}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${bgColor}`}>{icon}</div>
      </div>

      {trend !== undefined && (
        <div className="flex items-center gap-1 text-sm">
          {trend > 0 ? (
            <>
              <ArrowUp size={16} className="text-emerald-500" />
              <span className="text-emerald-500 font-semibold">{trend}%</span>
              <span className="text-muted-foreground">vs last month</span>
            </>
          ) : (
            <>
              <ArrowDown size={16} className="text-red-500" />
              <span className="text-red-500 font-semibold">{Math.abs(trend)}%</span>
              <span className="text-muted-foreground">vs last month</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export function KPIGrid() {
  const kpis = [
    {
      title: 'Total Companies',
      value: '48',
      subtitle: 'Registered partners',
      trend: 12,
      icon: <span className="text-xl">🏢</span>,
    },
    {
      title: 'Active Drives',
      value: '12',
      subtitle: 'Ongoing placements',
      trend: 8,
      icon: <span className="text-xl">📋</span>,
    },
    {
      title: 'Students Placed',
      value: '324',
      subtitle: 'This academic year',
      trend: 15,
      icon: <span className="text-xl">👨‍🎓</span>,
    },
    {
      title: 'Placement %',
      value: '87%',
      subtitle: 'Overall success rate',
      trend: 5,
      icon: <span className="text-xl">📈</span>,
    },
    {
      title: 'Avg Package',
      value: '₹8.5L',
      subtitle: 'Per annum',
      trend: 3,
      icon: <span className="text-xl">💰</span>,
    },
    {
      title: 'Highest Package',
      value: '₹42L',
      subtitle: 'Software Engineer role',
      trend: 20,
      icon: <span className="text-xl">⭐</span>,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {kpis.map((kpi, index) => (
        <KPICard
          key={index}
          title={kpi.title}
          value={kpi.value}
          subtitle={kpi.subtitle}
          trend={kpi.trend}
          icon={kpi.icon}
        />
      ))}
    </div>
  )
}
