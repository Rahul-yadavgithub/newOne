'use client'

import { useState } from 'react'
import { CompanyHeader } from '@/components/company-detail/company-header'
import { ProgressTracker } from '@/components/company-detail/progress-tracker'
import { WorkspaceTabs } from '@/components/company-detail/workspace-tabs'
import { OverviewTab } from '@/components/company-detail/overview-tab'
import { PlaceholderTab } from '@/components/company-detail/placeholder-tab'
import { SidebarPanel } from '@/components/company-detail/sidebar-panel'

// Mock company data
const mockCompanyData = {
  id: '1',
  name: 'Microsoft',
  logo: 'MS',
  industry: 'Technology & Software',
  website: 'microsoft.com',
  ctc: 30,
  hiringType: 'Full-time' as const,
  departments: ['CSE', 'ECE', 'IT', 'ME'],
  coordinator: 'Dr. Priya Sharma',
  coordinatorEmail: 'priya.sharma@nit.ac.in',
  hrContact: 'Rajesh Kumar',
  hrPhone: '+91-98765-43210',
  status: 'drive-running',
  
  // About Company
  description: 'Microsoft is a technology company with a mission to empower every person and every organization on the planet to achieve more. We create solutions to help people achieve their goals with software and services.',
  founded: 1975,
  employees: '200,000+',
  headquarters: 'Redmond, Washington, USA',
  achievements: [
    'World leader in cloud computing services (Azure)',
    'Enterprise software solutions (Office 365, Teams)',
    'Artificial Intelligence and Machine Learning advancements',
    'Strong commitment to diversity and sustainability'
  ],
  
  // Hiring Information
  roles: ['Software Engineer', 'Cloud Architect', 'Data Scientist', 'Product Manager'],
  salary: '₹25-32 LPA',
  bond: '2 years',
  workLocation: 'Bangalore, India',
  joiningDate: 'June 2025',
  selectionProcess: [
    'Online Assessment (Programming & Problem Solving)',
    'Technical Interview Round 1 (Data Structures & Algorithms)',
    'Technical Interview Round 2 (System Design & Project Discussion)',
    'HR Round (Culture fit & Benefits discussion)'
  ],
  hiringCount: 8,
  
  // Eligibility
  branches: ['CSE', 'ECE', 'IT', 'ME'],
  minimumCGPA: 7.0,
  backlogs: 'Allowed (Max 1 past backlog)',
  activeBacklogs: 'Not Allowed',
  skillsRequired: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Design', 'Web Development', 'Cloud Computing Basics'],
  gateScore: 'Not Required',
  
  healthScore: 82,
}

const mockActivities = [
  {
    id: '1',
    type: 'email',
    title: 'JNF Document Received',
    description: 'Microsoft sent the Job Notification Form with position details and requirements.',
    timestamp: '2 hours ago',
    person: 'Rajesh Kumar'
  },
  {
    id: '2',
    type: 'milestone',
    title: 'Eligibility Finalized',
    description: 'Verified that 45 students from CSE, ECE, IT, and ME departments meet the eligibility criteria.',
    timestamp: '1 day ago',
    person: 'Dr. Priya Sharma'
  },
  {
    id: '3',
    type: 'call',
    title: 'Coordinator Call',
    description: 'Discussed interview schedule and confirmed 8 students for the first round.',
    timestamp: '2 days ago',
    person: 'Rajesh Kumar'
  },
  {
    id: '4',
    type: 'document',
    title: 'Student Database Sent',
    description: 'Sent the list of 45 eligible students with their academic records.',
    timestamp: '3 days ago',
    person: 'Dr. Priya Sharma'
  },
  {
    id: '5',
    type: 'message',
    title: 'Invitation Accepted',
    description: 'Microsoft confirmed their participation in the placement drive.',
    timestamp: '5 days ago',
    person: 'System'
  }
]

const mockDocuments = [
  {
    id: '1',
    name: 'Job Notification Form (JNF) - Microsoft 2024',
    type: 'PDF',
    uploadedBy: 'Rajesh Kumar',
    uploadedAt: '2 hours ago',
    size: '2.4 MB'
  },
  {
    id: '2',
    name: 'Eligibility Criteria - Microsoft',
    type: 'XLSX',
    uploadedBy: 'Dr. Priya Sharma',
    uploadedAt: '1 day ago',
    size: '1.2 MB'
  },
  {
    id: '3',
    name: 'Interview Schedule & Guidelines',
    type: 'PDF',
    uploadedBy: 'Rajesh Kumar',
    uploadedAt: '2 days ago',
    size: '890 KB'
  },
  {
    id: '4',
    name: 'Microsoft Company Profile',
    type: 'PPTX',
    uploadedBy: 'System',
    uploadedAt: '5 days ago',
    size: '5.3 MB'
  }
]

const mockDeadlines = [
  {
    id: '1',
    title: 'First Round Results',
    dueDate: 'Dec 22, 2024',
    priority: 'high',
    status: 'pending'
  },
  {
    id: '2',
    title: 'Final Offers Due',
    dueDate: 'Dec 28, 2024',
    priority: 'high',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Student Database Review',
    dueDate: 'Dec 20, 2024',
    priority: 'medium',
    status: 'pending'
  }
]

const mockMeetings = [
  {
    id: '1',
    title: 'Results Announcement Call',
    time: 'Dec 22, 2024 - 3:00 PM',
    attendee: 'Rajesh Kumar'
  },
  {
    id: '2',
    title: 'Final Round Discussion',
    time: 'Dec 24, 2024 - 10:00 AM',
    attendee: 'Dr. Priya Sharma'
  }
]

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="md:ml-64 pt-20">
        <CompanyHeader company={mockCompanyData} />
      </div>

      {/* Progress Tracker */}
      <div className="md:ml-64">
        <ProgressTracker />
      </div>

      {/* Tabs and Content */}
      <div className="md:ml-64">
        <WorkspaceTabs activeTab={activeTab} onTabChange={setActiveTab}>
          {activeTab === 'overview' && (
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <OverviewTab 
                    company={mockCompanyData}
                    activities={mockActivities}
                    documents={mockDocuments}
                  />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <SidebarPanel
                    coordinator={{
                      name: mockCompanyData.coordinator,
                      email: mockCompanyData.coordinatorEmail,
                      phone: mockCompanyData.hrPhone
                    }}
                    deadlines={mockDeadlines}
                    upcomingMeetings={mockMeetings}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && <PlaceholderTab tabName="Timeline" />}
          {activeTab === 'drive' && <PlaceholderTab tabName="Placement Drive" />}
          {activeTab === 'students' && <PlaceholderTab tabName="Students" />}
          {activeTab === 'communication' && <PlaceholderTab tabName="Communication" />}
          {activeTab === 'meetings' && <PlaceholderTab tabName="Meetings" />}
          {activeTab === 'documents' && <PlaceholderTab tabName="Documents" description="Explore all documents related to this placement drive." />}
          {activeTab === 'activity' && <PlaceholderTab tabName="Activity" />}
          {activeTab === 'notes' && <PlaceholderTab tabName="Notes" />}
        </WorkspaceTabs>
      </div>
    </div>
  )
}
