'use client'

import { MapPin, Users, Calendar, ExternalLink } from 'lucide-react'

interface CompanySummaryProps {
  company: {
    name: string
    description: string
    founded: number
    employees: string
    headquarters: string
    website: string
    achievements: string[]
  }
}

export function CompanySummary({ company }: CompanySummaryProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-4">About Company</h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {company.description}
      </p>

      {/* Company Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-start gap-3">
          <Calendar size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Founded</p>
            <p className="text-sm font-semibold text-foreground">{company.founded}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Users size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Employees</p>
            <p className="text-sm font-semibold text-foreground">{company.employees}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Headquarters</p>
            <p className="text-sm font-semibold text-foreground">{company.headquarters}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ExternalLink size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Website</p>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Visit
            </a>
          </div>
        </div>
      </div>

      {/* Achievements */}
      {company.achievements && company.achievements.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Key Achievements</p>
          <ul className="space-y-2">
            {company.achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
