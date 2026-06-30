'use client'

import { Briefcase, DollarSign, FileText, MapPin, Clock, Users } from 'lucide-react'

interface HiringInfoCardProps {
  company: {
    roles: string[]
    salary: string
    bond: string
    workLocation: string
    joiningDate: string
    selectionProcess: string[]
    hiringCount: number
  }
}

export function HiringInfoCard({ company }: HiringInfoCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-4">Hiring Information</h3>

      <div className="space-y-4">
        {/* Roles */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Roles Open</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {company.roles.map((role, idx) => (
              <span key={idx} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Salary */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Salary Range</p>
          </div>
          <p className="text-sm text-foreground font-semibold">{company.salary}</p>
        </div>

        {/* Bond */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FileText size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Service Bond</p>
          </div>
          <p className="text-sm text-foreground">{company.bond}</p>
        </div>

        {/* Work Location */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Work Location</p>
          </div>
          <p className="text-sm text-foreground">{company.workLocation}</p>
        </div>

        {/* Joining Date */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Expected Joining Date</p>
          </div>
          <p className="text-sm text-foreground">{company.joiningDate}</p>
        </div>

        {/* Hiring Count */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users size={16} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Expected Hiring</p>
          </div>
          <p className="text-sm text-foreground font-semibold">{company.hiringCount} Students</p>
        </div>

        {/* Selection Process */}
        {company.selectionProcess && company.selectionProcess.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Selection Process</p>
            <ol className="text-sm space-y-1 text-muted-foreground">
              {company.selectionProcess.map((step, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="font-semibold text-primary">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}
