'use client'

import { Download, Edit2, Plus } from 'lucide-react'
import { StatusBadge } from '@/components/status-badge'

interface DriveHeaderProps {
  companyLogo: string
  companyName: string
  driveName: string
  role: string
  package: string
  campus: string
  season: string
  status: string
  owner: string
  coordinator: string
}

export function DriveHeader({
  companyLogo,
  companyName,
  driveName,
  role,
  package: pkg,
  campus,
  season,
  status,
  owner,
  coordinator,
}: DriveHeaderProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-6">
      {/* Top Section: Company & Drive Info */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-xl font-bold text-primary">
            {companyLogo}
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{companyName}</p>
            <h1 className="text-2xl font-bold text-foreground mb-2">{driveName}</h1>
            <div className="flex items-center gap-3">
              <StatusBadge status={status as any} />
              <span className="text-sm text-muted-foreground">Ongoing</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
            <Plus size={16} />
            Create
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
            <Edit2 size={16} />
            Edit
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Role</p>
          <p className="text-sm font-semibold text-foreground">{role}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Package</p>
          <p className="text-sm font-semibold text-foreground">{pkg}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Campus</p>
          <p className="text-sm font-semibold text-foreground">{campus}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Season</p>
          <p className="text-sm font-semibold text-foreground">{season}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Owner</p>
          <p className="text-sm font-semibold text-foreground">{owner}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Coordinator</p>
          <p className="text-sm font-semibold text-foreground">{coordinator}</p>
        </div>
      </div>
    </div>
  )
}
