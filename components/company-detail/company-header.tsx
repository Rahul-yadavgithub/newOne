'use client'

import { Building2, Globe, Phone, Mail, MapPin, DollarSign, Briefcase } from 'lucide-react'
import { StatusBadge } from '@/components/status-badge'

interface CompanyHeaderProps {
  company: {
    id: string
    name: string
    logo: string
    industry: string
    website: string
    ctc: number
    hiringType: 'Full-time' | 'Internship' | 'Contract'
    departments: string[]
    coordinator: string
    coordinatorEmail: string
    hrContact: string
    hrPhone: string
    status: string
  }
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
      {/* Hero Section */}
      <div className="px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Company Name */}
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-white border-2 border-border flex items-center justify-center flex-shrink-0 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {company.logo}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {company.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-muted-foreground text-sm">{company.industry}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm flex items-center gap-1"
                >
                  <Globe size={14} />
                  {company.website}
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <StatusBadge status={company.status as any} />
                <span className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground font-medium">
                  {company.hiringType}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* CTC */}
            <div className="bg-white rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={16} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Package (CTC)</span>
              </div>
              <div className="text-2xl font-bold text-foreground">
                ₹{company.ctc} LPA
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={16} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Departments Hiring</span>
              </div>
              <div className="text-2xl font-bold text-foreground">
                {company.departments.length}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {company.departments.slice(0, 2).join(', ')}
                {company.departments.length > 2 && `...`}
              </div>
            </div>

            {/* Coordinator */}
            <div className="bg-white rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Building2 size={16} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Coordinator</span>
              </div>
              <div className="font-semibold text-foreground text-sm">{company.coordinator}</div>
              <a
                href={`mailto:${company.coordinatorEmail}`}
                className="text-xs text-primary hover:underline mt-1 block"
              >
                <Mail size={12} className="inline mr-1" />
                Contact
              </a>
            </div>

            {/* HR Contact */}
            <div className="bg-white rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground">HR Contact</span>
              </div>
              <div className="font-semibold text-foreground text-sm">{company.hrContact}</div>
              <a
                href={`tel:${company.hrPhone}`}
                className="text-xs text-primary hover:underline mt-1 block"
              >
                <Phone size={12} className="inline mr-1" />
                {company.hrPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
