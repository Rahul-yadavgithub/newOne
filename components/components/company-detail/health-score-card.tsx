'use client'

import { Activity, TrendingUp } from 'lucide-react'

interface HealthScoreCardProps {
  score: number
}

export function HealthScoreCard({ score }: HealthScoreCardProps) {
  const getHealthStatus = (score: number) => {
    if (score >= 80) return { status: 'Excellent', color: 'text-green-600', bg: 'bg-green-50', borderColor: 'border-green-200' }
    if (score >= 60) return { status: 'Good', color: 'text-blue-600', bg: 'bg-blue-50', borderColor: 'border-blue-200' }
    if (score >= 40) return { status: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-50', borderColor: 'border-yellow-200' }
    return { status: 'At Risk', color: 'text-red-600', bg: 'bg-red-50', borderColor: 'border-red-200' }
  }

  const health = getHealthStatus(score)

  return (
    <div className={`${health.bg} border ${health.borderColor} rounded-lg p-6 shadow-sm`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Activity size={18} className={health.color} />
            <h3 className="text-lg font-semibold text-foreground">Relationship Health</h3>
          </div>
          <p className={`text-sm ${health.color} font-semibold`}>{health.status}</p>
        </div>

        {/* Score Circle */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200" />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${(score / 100) * 283} 283`}
              strokeLinecap="round"
              className={health.color}
              style={{
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%',
                transition: 'stroke-dasharray 0.6s ease',
              }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className={`text-2xl font-bold ${health.color}`}>{score}</span>
            <span className="text-xs text-muted-foreground">/ 100</span>
          </div>
        </div>
      </div>

      {/* Health Indicators */}
      <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-current border-opacity-10">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">8</div>
          <p className="text-xs text-muted-foreground mt-1">Updates</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">12</div>
          <p className="text-xs text-muted-foreground mt-1">Days Active</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">95%</div>
          <p className="text-xs text-muted-foreground mt-1">Engagement</p>
        </div>
      </div>

      {/* Trend */}
      <div className="flex items-center gap-1 mt-4 text-green-600 text-xs font-semibold">
        <TrendingUp size={12} />
        <span>+5 points last week</span>
      </div>
    </div>
  )
}
