import { ChevronRight } from 'lucide-react'

interface PipelineStage {
  name: string
  count: number
  percentage: number
}

interface SelectionPipelineProps {
  stages: PipelineStage[]
}

export function SelectionPipeline({ stages }: SelectionPipelineProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <h3 className="text-lg font-bold mb-6">Selection Pipeline</h3>
      
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex items-center">
            {/* Stage Box */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-4 min-w-fit">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {stage.name}
              </p>
              <p className="text-2xl font-bold text-foreground mb-1">{stage.count}</p>
              <p className="text-xs text-muted-foreground">{stage.percentage}% progression</p>
            </div>

            {/* Connector Arrow */}
            {index < stages.length - 1 && (
              <div className="flex items-center gap-1 px-2">
                <ChevronRight size={20} className="text-muted-foreground/50" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Total Applied</p>
          <p className="text-xl font-bold">{stages[0]?.count || 0}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Final Selection Rate</p>
          <p className="text-xl font-bold">
            {Math.round((stages[stages.length - 1]?.count || 0 / stages[0]?.count) * 100)}%
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Dropout Rate</p>
          <p className="text-xl font-bold">
            {Math.round(
              ((stages[0]?.count - stages[stages.length - 1]?.count) / stages[0]?.count) * 100
            )}%
          </p>
        </div>
      </div>
    </div>
  )
}
