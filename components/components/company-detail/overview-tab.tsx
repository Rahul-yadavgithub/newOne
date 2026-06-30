'use client'

import { CompanySummary } from './company-summary'
import { HiringInfoCard } from './hiring-info-card'
import { EligibilityCard } from './eligibility-card'
import { QuickActions } from './quick-actions'
import { HealthScoreCard } from './health-score-card'
import { ActivityTimeline } from './activity-timeline'
import { DocumentsSection } from './documents-section'

interface OverviewTabProps {
  company: any
  activities: any[]
  documents: any[]
}

export function OverviewTab({ company, activities, documents }: OverviewTabProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <QuickActions />

          {/* Health Score */}
          <HealthScoreCard score={company.healthScore} />

          {/* Company Summary and Hiring Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CompanySummary company={company} />
            <HiringInfoCard company={company} />
          </div>

          {/* Eligibility Criteria */}
          <EligibilityCard company={company} />

          {/* Activity Timeline */}
          <ActivityTimeline activities={activities} />

          {/* Documents */}
          <DocumentsSection documents={documents} />
        </div>

        {/* Sidebar - Right Column (1/3) */}
        <div className="lg:col-span-1">
          {/* Will be filled by parent component with SidebarPanel */}
        </div>
      </div>
    </div>
  )
}
