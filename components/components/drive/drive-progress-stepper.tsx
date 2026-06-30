'use client'

import { CheckCircle2 } from 'lucide-react'

interface Stage {
  id: string
  name: string
  date: string
  owner: string
  completionPercent: number
  isCompleted: boolean
  isCurrent: boolean
}

interface DriveProgressStepperProps {
  stages: Stage[]
}

export function DriveProgressStepper({ stages }: DriveProgressStepperProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Placement Drive Progress</h2>

      {/* Horizontal Stepper */}
      <div className="overflow-x-auto -mx-6 px-6 pb-4">
        <div className="flex gap-2 min-w-max">
          {stages.map((stage, index) => (
            <div key={stage.id} className="flex items-start gap-2">
              {/* Stage Container */}
              <div className="flex flex-col items-center gap-2 min-w-max">
                {/* Stage Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    stage.isCompleted
                      ? 'bg-emerald-50 border-emerald-600'
                      : stage.isCurrent
                        ? 'bg-primary/10 border-primary'
                        : 'bg-muted border-border'
                  }`}
                >
                  {stage.isCompleted ? (
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  ) : (
                    <div
                      className={`w-3 h-3 rounded-full ${
                        stage.isCurrent ? 'bg-primary' : 'bg-muted-foreground'
                      }`}
                    ></div>
                  )}
                </div>

                {/* Stage Info */}
                <div className="text-center min-w-40">
                  <p className="text-xs font-semibold text-foreground mb-1">{stage.name}</p>
                  <p className="text-xs text-muted-foreground mb-1">{stage.date}</p>
                  <p className="text-xs text-muted-foreground mb-2">Owner: {stage.owner}</p>

                  {/* Progress */}
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        stage.isCompleted ? 'bg-emerald-600' : 'bg-primary'
                      }`}
                      style={{ width: `${stage.completionPercent}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stage.completionPercent}%
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < stages.length - 1 && (
                <div className="flex items-center mt-5">
                  <div
                    className={`w-8 h-0.5 ${
                      stage.isCompleted ? 'bg-emerald-600' : 'bg-border'
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
