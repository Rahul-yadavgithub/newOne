'use client'

import { CheckCircle2, AlertCircle } from 'lucide-react'

interface EligibilityCardProps {
  company: {
    branches: string[]
    minimumCGPA: number
    backlogs: string
    activeBacklogs: string
    skillsRequired: string[]
    gateScore?: string
  }
}

export function EligibilityCard({ company }: EligibilityCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-4">Eligibility Criteria</h3>

      <div className="space-y-4">
        {/* Branches */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Eligible Branches</p>
          <div className="flex flex-wrap gap-2">
            {company.branches.map((branch, idx) => (
              <div key={idx} className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                <CheckCircle2 size={12} />
                {branch}
              </div>
            ))}
          </div>
        </div>

        {/* Minimum CGPA */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-blue-900">Minimum CGPA</p>
              <p className="text-sm text-blue-800">{company.minimumCGPA.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Backlogs Status */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <AlertCircle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-amber-900">Backlogs Allowed</p>
              <p className="text-sm text-amber-800">{company.backlogs}</p>
            </div>
          </div>
        </div>

        {/* Active Backlogs */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <AlertCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-red-900">Active Backlogs</p>
              <p className="text-sm text-red-800">{company.activeBacklogs}</p>
            </div>
          </div>
        </div>

        {/* Skills Required */}
        {company.skillsRequired && company.skillsRequired.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Skills Required</p>
            <ul className="space-y-1.5">
              {company.skillsRequired.map((skill, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* GATE Score */}
        {company.gateScore && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-purple-900">GATE Score Required</p>
                <p className="text-sm text-purple-800">{company.gateScore}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
