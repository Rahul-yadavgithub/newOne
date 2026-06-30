'use client'

import { Check, Clock, AlertCircle } from 'lucide-react'

interface ChecklistTask {
  id: string
  title: string
  status: 'completed' | 'pending' | 'overdue'
  owner: string
  dueDate: string
  progress: number
}

interface TaskChecklistProps {
  tasks: ChecklistTask[]
}

export function TaskChecklist({ tasks }: TaskChecklistProps) {
  const statusConfig = {
    completed: {
      icon: Check,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
    pending: {
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    overdue: {
      icon: AlertCircle,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
    },
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Project Checklist</h2>

      <div className="space-y-3">
        {tasks.map((task) => {
          const config = statusConfig[task.status]
          const IconComponent = config.icon

          return (
            <div
              key={task.id}
              className={`border rounded-lg p-4 ${config.border} ${config.bg}`}
            >
              <div className="flex items-start gap-3">
                {/* Status Icon */}
                <div className={`p-2 rounded-lg bg-white ${config.border} border`}>
                  <IconComponent size={18} className={config.color} />
                </div>

                {/* Task Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className={`font-semibold ${config.color.replace('text-', 'text-')}`}>
                      {task.title}
                    </p>
                    <span className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap ${config.color} ${config.bg}`}>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Owner: {task.owner}</span>
                    <span>Due: {task.dueDate}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-border">
                    <div
                      className={`h-full transition-all ${
                        task.status === 'completed'
                          ? 'bg-emerald-600'
                          : task.status === 'overdue'
                            ? 'bg-red-600'
                            : 'bg-amber-600'
                      }`}
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right">{task.progress}%</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
