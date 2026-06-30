'use client'

import { Check, Circle } from 'lucide-react'

const stages = [
  { id: 1, name: 'Interested', date: 'Nov 15, 2024' },
  { id: 2, name: 'Invitation Sent', date: 'Nov 16, 2024' },
  { id: 3, name: 'Invitation Accepted', date: 'Nov 17, 2024' },
  { id: 4, name: 'JNF Pending', date: 'Nov 18, 2024' },
  { id: 5, name: 'JNF Received', date: 'Nov 20, 2024' },
  { id: 6, name: 'Eligibility Finalized', date: 'Nov 22, 2024', current: true },
  { id: 7, name: 'Student DB Requested', date: 'Nov 25, 2024' },
  { id: 8, name: 'Student DB Sent', date: '' },
  { id: 9, name: 'Interview Scheduled', date: '' },
  { id: 10, name: 'Drive Running', date: '' },
  { id: 11, name: 'Offer Released', date: '' },
  { id: 12, name: 'Students Selected', date: '' },
  { id: 13, name: 'Drive Completed', date: '' },
  { id: 14, name: 'Closed', date: '' },
]

export function ProgressTracker() {
  return (
    <div className="bg-white border-b border-border sticky top-20 md:top-20 z-10">
      <div className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-semibold text-foreground mb-4">Placement Journey</h3>

          {/* Horizontal Scrollable Progress */}
          <div className="overflow-x-auto -mx-2 px-2">
            <div className="flex gap-2 pb-4 min-w-min">
              {stages.map((stage, idx) => {
                const isCompleted = idx < 5
                const isCurrent = stage.current
                const isUpcoming = idx > 5

                return (
                  <div key={stage.id} className="flex items-center">
                    {/* Stage Node */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isCompleted
                            ? 'bg-green-100 border-2 border-green-500'
                            : isCurrent
                            ? 'bg-primary/10 border-2 border-primary ring-4 ring-primary/20'
                            : 'bg-muted border-2 border-border'
                        }`}
                      >
                        {isCompleted ? (
                          <Check size={18} className="text-green-600" />
                        ) : isCurrent ? (
                          <Circle size={18} className="text-primary fill-primary" />
                        ) : (
                          <Circle size={18} className="text-muted-foreground" />
                        )}
                      </div>
                      {/* Date Badge */}
                      <div
                        className={`text-xs mt-2 text-center font-medium whitespace-nowrap ${
                          isCurrent
                            ? 'text-primary'
                            : isCompleted
                            ? 'text-green-700'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {stage.date || 'Pending'}
                      </div>
                    </div>

                    {/* Connecting Line */}
                    {idx < stages.length - 1 && (
                      <div
                        className={`w-8 h-0.5 mx-1 ${
                          isCompleted && stages[idx + 1]
                            ? 'bg-green-500'
                            : isCurrent
                            ? 'bg-primary/30'
                            : 'bg-border'
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stage Names Below (on smaller screens, appears on hover) */}
          <div className="overflow-x-auto -mx-2 px-2">
            <div className="flex gap-2 pb-2 min-w-min">
              {stages.map((stage, idx) => {
                const isCompleted = idx < 5
                const isCurrent = stage.current

                return (
                  <div key={`label-${stage.id}`} className="flex flex-col items-center">
                    <div className="w-10 text-center">
                      <span
                        className={`text-xs font-medium whitespace-normal break-words ${
                          isCurrent
                            ? 'text-primary font-semibold'
                            : isCompleted
                            ? 'text-green-700'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {stage.name.replace(' ', '\n')}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
