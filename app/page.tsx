
'use client'
import { ActivityFeed } from '@/components/activity-feed'
import { ChartsSection } from '@/components/charts'
import { KPIGrid } from '@/components/kpi-cards'
import { Navbar } from '@/components/navbar'
import { QuickActions } from '@/components/quick-actions'
import { ScheduleCard } from '@/components/schedule-card'
import { Sidebar } from '@/components/sidebar'

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
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, TrendingUp, Briefcase, Award, Clock, CheckCircle2 } from 'lucide-react'

>>>>>>> 13a8b99 (feat: add comprehensive build summary documentation)
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-lg">PlacementHub</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/app/companies/1">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">✨ Campus Placement Management System</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Manage Student Placements with <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Precision</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            A comprehensive platform for tracking student applications, interviews, and placement status. View detailed candidate profiles, analytics, and manage the entire placement workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/app/companies/1/students/1">
              <Button size="lg" className="gap-2">
                View Sample Profile <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/app/companies/1">
              <Button size="lg" variant="outline" className="gap-2">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Features</h2>
            <p className="text-muted-foreground text-lg">Everything you need to manage campus placements effectively</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Profiles</h3>
              <p className="text-muted-foreground">
                Comprehensive profiles with academic records, technical skills, resume scores, and placement history.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
              <p className="text-muted-foreground">
                Track placement trends, candidate evaluations, skill assessments, and interview progress metrics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
              <p className="text-muted-foreground">
                7-point candidate evaluation system, coding profiles, technical skills assessment, and placement timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Profile Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Student Profile System</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our premium student workspace provides a 360-degree view of each candidate with:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>8 Premium Overview Cards</strong> - Academic summary, candidate evaluation, skills, placement status, applications, interviews, activity feed, and current applications
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>10 Tab Navigation</strong> - Overview, Resume, Skills, Projects, Applications, Interviews, Education, Evaluations, Timeline, Documents
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Smart Sidebar</strong> - Placement coordinator info, online profiles, resume status, projects, and quick action buttons
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Comprehensive Data Visualization</strong> - Score metrics, skill proficiency bars, placement timeline, and activity tracking
                  </span>
                </li>
              </ul>

              <Link href="/app/companies/1/students/1">
                <Button size="lg" className="gap-2">
                  Explore Student Profile <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-xl bg-card border border-border p-6 overflow-hidden">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg animate-pulse" />
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded-lg w-3/4 animate-pulse" />
                    <div className="h-4 bg-muted rounded-lg w-1/2 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="h-24 bg-muted rounded-lg animate-pulse" />
                    <div className="h-24 bg-muted rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-xl bg-card border border-border p-6 overflow-hidden">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="h-3 bg-primary rounded-full w-3" />
                    <div className="h-3 bg-primary/60 rounded-full w-3" />
                    <div className="h-3 bg-muted rounded-full w-3" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-muted rounded-lg w-2/3 animate-pulse" />
                    <div className="h-4 bg-muted rounded-lg w-full animate-pulse" />
                    <div className="h-4 bg-muted rounded-lg w-4/5 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <div className="h-20 bg-muted rounded-lg animate-pulse" />
                    <div className="h-20 bg-muted rounded-lg animate-pulse" />
                    <div className="h-20 bg-muted rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Company Dashboard</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Manage all company placements and student interactions from one unified dashboard:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">View and manage all students applying to your company</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Track application timelines and interview schedules</span>
                </li>
                <li className="flex gap-3 items-start">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Monitor placement trends and candidate quality metrics</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Rate and evaluate students with detailed feedback</span>
                </li>
              </ul>

              <Link href="/app/companies/1">
                <Button size="lg" className="gap-2">
                  Visit Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Placements?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start managing your campus placements with our comprehensive platform today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app/companies/1/students/1">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Explore Student Profile <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/app/companies/1">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Go to Company Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center text-muted-foreground">
        <p>&copy; 2024 PlacementHub. All rights reserved.</p>
      </footer>
    </main>
>>>>>>> 98f1e27 (Initial commit from v0)
  )
}
