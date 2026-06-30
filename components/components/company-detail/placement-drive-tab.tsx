'use client'

import { useState } from 'react'
import { DriveHeader } from '@/components/drive/drive-header'
import { DriveKPICard } from '@/components/drive/drive-kpi-card'
import { DriveProgressStepper } from '@/components/drive/drive-progress-stepper'
import { DriveSummaryCard } from '@/components/drive/drive-summary-card'
import { RecruitmentTimeline } from '@/components/drive/recruitment-timeline'
import { TaskChecklist } from '@/components/drive/task-checklist'
import { QuickActionsPanel } from '@/components/drive/quick-actions-panel'
import { DriveStatistics } from '@/components/drive/drive-statistics'
import { DriveHealthCard } from '@/components/drive/drive-health-card'
import {
  Users,
  UserCheck,
  Briefcase,
  Trophy,
  XCircle,
  Award,
  CheckCircle2,
} from 'lucide-react'

const mockDriveData = {
  companyLogo: 'GG',
  companyName: 'Google India',
  driveName: 'Google SWE Hiring 2027',
  role: 'Software Engineer',
  package: '₹45-52 LPA',
  campus: 'NIT Trichy',
  season: 'Summer 2027',
  status: 'drive-running',
  owner: 'Dr. Amit Patel',
  coordinator: 'Dr. Priya Sharma',

  // KPI Data
  currentStage: 'Technical Interview',
  totalEligibleStudents: 1850,
  registeredStudents: 284,
  shortlisted: 156,
  interviewed: 108,
  selected: 35,
  rejected: 73,
  offersReleased: 35,
  joiningConfirmed: 28,

  // Drive Summary
  jobDescription:
    'Join Googles Software Engineering team and work on products used by billions. We are looking for talented engineers passionate about solving real-world problems at scale.',
  salary: '₹45-52 LPA',
  internship: false,
  fullTime: true,
  location: 'Bangalore, India',
  bond: 'None',
  joiningDate: 'July 2027',
  workingMode: 'On-site',
  selectionProcess: [
    'Online Assessment (DSA & Problem Solving)',
    'Technical Interview Round 1 (Data Structures)',
    'Technical Interview Round 2 (System Design)',
    'Technical Interview Round 3 (Behavioral)',
    'HR Round',
  ],
  departments: ['CSE', 'ECE', 'IT'],

  // Stages
  stages: [
    {
      id: '1',
      name: 'Planning',
      date: 'Dec 1-15, 2026',
      owner: 'Dr. Amit Patel',
      completionPercent: 100,
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: '2',
      name: 'Eligibility',
      date: 'Dec 16-20, 2026',
      owner: 'Dr. Priya Sharma',
      completionPercent: 100,
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: '3',
      name: 'Registration',
      date: 'Dec 21 - Jan 5',
      owner: 'Rajesh Kumar',
      completionPercent: 100,
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: '4',
      name: 'Screening',
      date: 'Jan 6-10, 2027',
      owner: 'Dr. Priya Sharma',
      completionPercent: 100,
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: '5',
      name: 'Shortlisting',
      date: 'Jan 11-13, 2027',
      owner: 'Rajesh Kumar',
      completionPercent: 100,
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: '6',
      name: 'Assessment',
      date: 'Jan 14-15, 2027',
      owner: 'Dr. Amit Patel',
      completionPercent: 100,
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: '7',
      name: 'Tech Interview',
      date: 'Jan 18-25, 2027',
      owner: 'Panel Members',
      completionPercent: 65,
      isCompleted: false,
      isCurrent: true,
    },
    {
      id: '8',
      name: 'HR Interview',
      date: 'Jan 26-27, 2027',
      owner: 'HR Team',
      completionPercent: 0,
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: '9',
      name: 'Final Selection',
      date: 'Jan 28, 2027',
      owner: 'Dr. Amit Patel',
      completionPercent: 0,
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: '10',
      name: 'Offer Release',
      date: 'Jan 29, 2027',
      owner: 'Google HR',
      completionPercent: 0,
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: '11',
      name: 'Acceptance',
      date: 'Jan 29 - Feb 5',
      owner: 'Students',
      completionPercent: 0,
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: '12',
      name: 'Completion',
      date: 'Feb 28, 2027',
      owner: 'Placement Cell',
      completionPercent: 0,
      isCompleted: false,
      isCurrent: false,
    },
  ],

  // Timeline Events
  timelineEvents: [
    {
      id: '1',
      title: 'Registration Opens',
      date: 'Dec 21, 2026',
      status: 'completed' as const,
      icon: '✓',
    },
    {
      id: '2',
      title: 'Registration Closes',
      date: 'Jan 5, 2027',
      status: 'completed' as const,
      icon: '✓',
    },
    {
      id: '3',
      title: 'Assessment Test',
      date: 'Jan 14, 2027',
      status: 'completed' as const,
      icon: '✓',
    },
    {
      id: '4',
      title: 'Technical Rounds',
      date: 'Jan 18-25, 2027',
      status: 'current' as const,
      icon: '◆',
    },
    {
      id: '5',
      title: 'HR Rounds',
      date: 'Jan 26-27, 2027',
      status: 'upcoming' as const,
      icon: '→',
    },
    {
      id: '6',
      title: 'Offer Release',
      date: 'Jan 29, 2027',
      status: 'upcoming' as const,
      icon: '→',
    },
  ],

  // Tasks
  tasks: [
    {
      id: '1',
      title: 'Invitation Sent',
      status: 'completed' as const,
      owner: 'Dr. Priya Sharma',
      dueDate: 'Dec 21, 2026',
      progress: 100,
    },
    {
      id: '2',
      title: 'Meeting Completed',
      status: 'completed' as const,
      owner: 'Dr. Amit Patel',
      dueDate: 'Dec 20, 2026',
      progress: 100,
    },
    {
      id: '3',
      title: 'Eligibility Approved',
      status: 'completed' as const,
      owner: 'Rajesh Kumar',
      dueDate: 'Dec 20, 2026',
      progress: 100,
    },
    {
      id: '4',
      title: 'Assessment Scheduled',
      status: 'completed' as const,
      owner: 'Dr. Priya Sharma',
      dueDate: 'Jan 14, 2027',
      progress: 100,
    },
    {
      id: '5',
      title: 'Rooms Booked',
      status: 'completed' as const,
      owner: 'Admin Team',
      dueDate: 'Jan 10, 2027',
      progress: 100,
    },
    {
      id: '6',
      title: 'Panels Confirmed',
      status: 'pending' as const,
      owner: 'Dr. Amit Patel',
      dueDate: 'Jan 17, 2027',
      progress: 85,
    },
    {
      id: '7',
      title: 'Results Uploaded',
      status: 'pending' as const,
      owner: 'Interview Teams',
      dueDate: 'Jan 26, 2027',
      progress: 0,
    },
    {
      id: '8',
      title: 'Offer Letters Sent',
      status: 'pending' as const,
      owner: 'Google HR',
      dueDate: 'Jan 29, 2027',
      progress: 0,
    },
  ],

  // Sidebar Data
  upcomingDeadlines: [
    { title: 'HR Rounds Completion', date: 'Jan 27, 2027', priority: 'high' as const },
    { title: 'Final Selection Results', date: 'Jan 28, 2027', priority: 'high' as const },
    { title: 'Offer Letter Distribution', date: 'Jan 29, 2027', priority: 'medium' as const },
  ],
  recentUpdates: [
    { title: 'Technical rounds started - 24 candidates completed', time: '2 hours ago' },
    { title: 'Assessment results published to candidates', time: '1 day ago' },
    { title: 'Registration closed - 284 candidates registered', time: '3 days ago' },
  ],
  riskAlerts: [
    { message: 'Panel availability reduced - 2 panelists unable to attend next round', severity: 'high' as const },
    { message: '15% of selected students still pending acceptance', severity: 'medium' as const },
  ],
  driveHealth: 78,
}

export function PlacementDriveTab() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="md:ml-64 pt-4 pb-12">
      <div className="px-6 max-w-7xl mx-auto">
        {/* Header */}
        <DriveHeader
          companyLogo={mockDriveData.companyLogo}
          companyName={mockDriveData.companyName}
          driveName={mockDriveData.driveName}
          role={mockDriveData.role}
          package={mockDriveData.package}
          campus={mockDriveData.campus}
          season={mockDriveData.season}
          status={mockDriveData.status}
          owner={mockDriveData.owner}
          coordinator={mockDriveData.coordinator}
        />

        {/* Quick Actions */}
        <QuickActionsPanel />

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DriveKPICard
            icon={Users}
            label="Total Eligible Students"
            value={mockDriveData.totalEligibleStudents}
            max={2000}
            supportingText="Across all departments"
            color="primary"
          />
          <DriveKPICard
            icon={UserCheck}
            label="Registered Students"
            value={mockDriveData.registeredStudents}
            max={1000}
            supportingText={`${((mockDriveData.registeredStudents / mockDriveData.totalEligibleStudents) * 100).toFixed(1)}% registration rate`}
            color="secondary"
          />
          <DriveKPICard
            icon={Trophy}
            label="Selected"
            value={mockDriveData.selected}
            max={100}
            supportingText="Offers pending acceptance"
            color="emerald"
          />
          <DriveKPICard
            icon={XCircle}
            label="Rejected"
            value={mockDriveData.rejected}
            max={150}
            supportingText="Post screening round"
            color="red"
          />
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-6 border-b border-border pb-4">
          {['overview', 'registration', 'assessment', 'interview', 'results'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content - 3 Columns */}
            <div className="lg:col-span-3 space-y-6">
              {/* Progress Stepper */}
              <DriveProgressStepper stages={mockDriveData.stages} />

              {/* Drive Summary */}
              <DriveSummaryCard
                role={mockDriveData.role}
                jobDescription={mockDriveData.jobDescription}
                salary={mockDriveData.salary}
                internship={mockDriveData.internship}
                fullTime={mockDriveData.fullTime}
                location={mockDriveData.location}
                bond={mockDriveData.bond}
                joiningDate={mockDriveData.joiningDate}
                workingMode={mockDriveData.workingMode}
                selectionProcess={mockDriveData.selectionProcess}
                departments={mockDriveData.departments}
              />

              {/* Recruitment Timeline */}
              <RecruitmentTimeline events={mockDriveData.timelineEvents} />

              {/* Task Checklist */}
              <TaskChecklist tasks={mockDriveData.tasks} />

              {/* Statistics */}
              <DriveStatistics />
            </div>

            {/* Sidebar - 1 Column */}
            <div className="lg:col-span-1">
              <DriveHealthCard
                coordinator={mockDriveData.coordinator}
                coordinatorEmail="priya.sharma@nit.ac.in"
                coordinatorPhone="+91-98765-43210"
                upcomingDeadlines={mockDriveData.upcomingDeadlines}
                recentUpdates={mockDriveData.recentUpdates}
                riskAlerts={mockDriveData.riskAlerts}
                driveHealth={mockDriveData.driveHealth}
              />
            </div>
          </div>
        )}

        {/* Placeholder Tabs */}
        {['registration', 'assessment', 'interview', 'results'].includes(activeTab) && (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
              <Users size={24} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Coming soon. This module will provide comprehensive management for the {activeTab} phase of the placement drive.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
