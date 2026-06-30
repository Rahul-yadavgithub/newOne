'use client'

import { AlertTriangle, CheckCircle2, AlertCircle, Zap } from 'lucide-react'

interface DriveHealthCardProps {
  coordinator: string
  coordinatorEmail: string
  coordinatorPhone: string
  upcomingDeadlines: Array<{ title: string; date: string; priority: 'high' | 'medium' | 'low' }>
  recentUpdates: Array<{ title: string; time: string }>
  riskAlerts: Array<{ message: string; severity: 'high' | 'medium' | 'low' }>
  driveHealth: number
}

export function DriveHealthCard({
  coordinator,
  coordinatorEmail,
  coordinatorPhone,
  upcomingDeadlines,
  recentUpdates,
  riskAlerts,
  driveHealth,
}: DriveHealthCardProps) {
  const healthColor = driveHealth >= 80 ? 'emerald' : driveHealth >= 60 ? 'amber' : 'red'

  return (
    <div className="space-y-4">
      {/* Coordinator Info */}
      <div className="bg-card border border-border rounded-xl p-4 sticky top-24 z-20">
        <h3 className="font-semibold text-foreground mb-3">Drive Coordinator</h3>
        <div>
          <p className="text-sm font-medium text-foreground">{coordinator}</p>
          <a href={`mailto:${coordinatorEmail}`} className="text-xs text-primary hover:underline">
            {coordinatorEmail}
          </a>
          <a href={`tel:${coordinatorPhone}`} className="text-xs text-primary hover:underline block">
            {coordinatorPhone}
          </a>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground mb-3">Upcoming Deadlines</h3>
        <div className="space-y-2">
          {upcomingDeadlines.slice(0, 3).map((deadline, index) => (
            <div key={index} className="flex items-start gap-2">
              <div
                className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${
                  deadline.priority === 'high'
                    ? 'bg-red-600'
                    : deadline.priority === 'medium'
                      ? 'bg-amber-600'
                      : 'bg-emerald-600'
                }`}
              ></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground text-pretty line-clamp-1">
                  {deadline.title}
                </p>
                <p className="text-xs text-muted-foreground">{deadline.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground mb-3">Recent Updates</h3>
        <div className="space-y-2">
          {recentUpdates.slice(0, 3).map((update, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground text-pretty line-clamp-1">
                  {update.title}
                </p>
                <p className="text-xs text-muted-foreground">{update.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Alerts */}
      {riskAlerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={16} className="text-red-600" />
            <h3 className="font-semibold text-red-600">Risk Alerts</h3>
          </div>
          <div className="space-y-2">
            {riskAlerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-2">
                <AlertCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-red-700">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Drive Health */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">Drive Health</h3>
          <Zap
            size={16}
            className={`text-${healthColor}-600`}
          />
        </div>
        <div className="relative h-6 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full bg-${healthColor}-600 rounded-full transition-all`}
            style={{ width: `${driveHealth}%` }}
          ></div>
        </div>
        <p className={`text-xs font-semibold text-${healthColor}-600 mt-2`}>{driveHealth}%</p>
      </div>
    </div>
  )
}
