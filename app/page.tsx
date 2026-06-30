
'use client'
import { ActivityFeed } from '@/components/activity-feed'
import { ChartsSection } from '@/components/charts'
import { KPIGrid } from '@/components/kpi-cards'
import { Navbar } from '@/components/navbar'
import { QuickActions } from '@/components/quick-actions'
import { ScheduleCard } from '@/components/schedule-card'
import { Sidebar } from '@/components/sidebar'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, TrendingUp, Briefcase, Award, Clock, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Navbar />

      {/* Main Content */}
      <main className="md:ml-64 pt-20 pb-12">
        <div className="px-6 max-w-7xl mx-auto">
          {/* Quick Actions */}
          <QuickActions />

          {/* KPI Grid */}
          <KPIGrid />

          {/* Charts Grid */}
          <ChartsSection />

          {/* Activity and Schedule Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <div className="lg:col-span-1">
              <ScheduleCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}