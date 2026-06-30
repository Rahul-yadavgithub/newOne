'use client'

import { RotateCcw } from 'lucide-react'

interface Version {
  id: string
  version: string
  updatedBy: string
  updatedDate: string
  summary: string
}

interface VersionTimelineProps {
  versions: Version[]
  onRestore?: (versionId: string) => void
}

export function VersionTimeline({ versions, onRestore }: VersionTimelineProps) {
  return (
    <div className="space-y-4">
      {versions.map((version, index) => (
        <div key={version.id} className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary border-4 border-background" />
            {index !== versions.length - 1 && (
              <div className="w-0.5 h-16 bg-border mt-2" />
            )}
          </div>
          <div className="flex-1 pt-1 pb-4">
            <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-foreground">Version {version.version}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Updated by {version.updatedBy} on {version.updatedDate}
                  </p>
                </div>
                {index !== 0 && (
                  <button
                    onClick={() => onRestore?.(version.id)}
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    title="Restore this version"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
              </div>
              <p className="text-sm text-foreground bg-muted/50 rounded p-2">{version.summary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
