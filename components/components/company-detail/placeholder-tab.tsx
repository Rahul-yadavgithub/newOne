'use client'

import { Construction, ArrowRight } from 'lucide-react'

interface PlaceholderTabProps {
  tabName: string
  description?: string
}

export function PlaceholderTab({ tabName, description }: PlaceholderTabProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Construction size={64} className="text-muted-foreground opacity-30" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          {tabName} Coming Soon
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          {description || `The ${tabName} section is under development. Check back soon for exciting features!`}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer">
          Back to Overview
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  )
}
