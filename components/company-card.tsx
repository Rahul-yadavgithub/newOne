'use client'

import {
  Building2,
  Calendar,
  FileText,
  MessageSquare,
  MoreVertical,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { StatusBadge } from './status-badge'

interface CompanyCardProps {
  id: string
  logo: string
  name: string
  industry: string
  package: string
  departments: string[]
  status: string
  coordinator: string
  deadline: string
  progress: number
  onActionClick?: (action: string) => void
}

const actionMenu = [
  { id: 'details', label: 'View Details', icon: Building2 },
  { id: 'timeline', label: 'Open Timeline', icon: Calendar },
  { id: 'meeting', label: 'Schedule Meeting', icon: Calendar },
  { id: 'students', label: 'View Students', icon: Users },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'communication', label: 'Communication', icon: MessageSquare },
]

export function CompanyCard({
  id,
  logo,
  name,
  industry,
  package: pkg,
  departments,
  status,
  coordinator,
  deadline,
  progress,
  onActionClick,
}: CompanyCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
            {logo}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-xs text-muted-foreground">{industry}</p>
          </div>
        </div>

        {/* Action Menu */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <MoreVertical size={16} className="text-muted-foreground" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-20">
              {actionMenu.map((action) => {
                const Icon = action.icon
                return (
                  <button
                    key={action.id}
                    onClick={() => {
                      onActionClick?.(action.id)
                      setIsMenuOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <Icon size={16} className="text-muted-foreground" />
                    <span>{action.label}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Package and Department */}
      <div className="mb-4 pb-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">Package</span>
          <span className="text-lg font-bold text-primary">{pkg}</span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Departments</p>
          <div className="flex flex-wrap gap-1">
            {departments.map((dept) => (
              <span key={dept} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                {dept}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Status and Coordinator */}
      <div className="mb-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Current Status</p>
          <StatusBadge status={status as any} />
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Coordinator</p>
          <p className="text-sm font-medium text-foreground">{coordinator}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground">Progress</p>
          <p className="text-xs font-medium text-foreground">{progress}%</p>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Deadline and Primary Action */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted rounded-lg p-2">
          <Calendar size={14} />
          <span>{deadline}</span>
        </div>
        <button
          onClick={() => onActionClick?.('details')}
          className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
