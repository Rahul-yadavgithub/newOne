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

interface Company {
  id: string
  logo: string
  name: string
  industry: string
  package: string
  departments: string[]
  status: string
  coordinator: string
  lastUpdated: string
  progress: number
}

interface CompanyTableProps {
  companies: Company[]
  onRowClick?: (company: Company) => void
  onActionClick?: (action: string, company: Company) => void
}

const actionMenu = [
  { id: 'details', label: 'View Details', icon: Building2 },
  { id: 'timeline', label: 'Open Timeline', icon: Calendar },
  { id: 'meeting', label: 'Schedule Meeting', icon: Calendar },
  { id: 'students', label: 'View Students', icon: Users },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'communication', label: 'Communication', icon: MessageSquare },
]

export function CompanyTable({ companies, onRowClick, onActionClick }: CompanyTableProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Company</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Industry</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Package</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Departments</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Coordinator</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Updated</th>
              <th className="px-6 py-3 text-left font-semibold text-foreground">Progress</th>
              <th className="px-6 py-3 text-center font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {companies.map((company) => (
              <tr
                key={company.id}
                className="hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => onRowClick?.(company)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {company.logo}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{company.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground">{company.industry}</td>
                <td className="px-6 py-4 font-medium text-foreground">{company.package}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {company.departments.slice(0, 2).map((dept) => (
                      <span key={dept} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {dept}
                      </span>
                    ))}
                    {company.departments.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        +{company.departments.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={company.status as any} />
                </td>
                <td className="px-6 py-4 text-muted-foreground">{company.coordinator}</td>
                <td className="px-6 py-4 text-muted-foreground text-xs">{company.lastUpdated}</td>
                <td className="px-6 py-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all"
                      style={{ width: `${company.progress}%` }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="relative inline-block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenMenu(openMenu === company.id ? null : company.id)
                      }}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <MoreVertical size={16} className="text-muted-foreground" />
                    </button>

                    {/* Action Menu */}
                    {openMenu === company.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-20">
                        {actionMenu.map((action) => {
                          const Icon = action.icon
                          return (
                            <button
                              key={action.id}
                              onClick={(e) => {
                                e.stopPropagation()
                                onActionClick?.(action.id, company)
                                setOpenMenu(null)
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
