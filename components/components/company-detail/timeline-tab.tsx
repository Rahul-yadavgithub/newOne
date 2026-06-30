'use client'

import { useState } from 'react'
import { TimelineCard } from '../timeline/timeline-card'
import { TimelineFilters } from '../timeline/timeline-filters'
import { ActivityDrawer } from '../timeline/activity-drawer'
import { TimelineStats } from '../timeline/timeline-stats'

// Mock timeline activities
const mockActivities = [
  {
    id: '1',
    type: 'email',
    title: 'Offer Letter Uploaded',
    description: 'HR has uploaded the offer letter for selected candidates. Review and finalize.',
    fullDescription:
      'The offer letter for all selected candidates has been uploaded to the system. This contains the final compensation package, joining date, and terms of employment. Please review and finalize with the candidates.',
    timestamp: '2 hours ago',
    person: 'Rajesh Kumar',
    personEmail: 'rajesh.kumar@company.com',
    department: 'HR',
    status: 'completed' as const,
    priority: 'high' as const,
    attachments: 1,
    comments: 3,
    previousStatus: 'HR Round Completed',
    nextStatus: 'Students Selected',
    relatedDocuments: ['offer_letter_template.docx', 'final_selection_list.xlsx'],
    linkedMeeting: 'Final Offer Discussion - Jan 15, 2:00 PM',
  },
  {
    id: '2',
    type: 'meeting',
    title: 'HR Round Completed',
    description: 'All candidates have completed the HR interview round. Results pending.',
    fullDescription:
      'The HR interview round for all shortlisted candidates has been completed. The hiring team is currently evaluating the candidates and will provide results by EOD tomorrow.',
    timestamp: '5 hours ago',
    person: 'Dr. Priya Sharma',
    personEmail: 'priya.sharma@nit.ac.in',
    department: 'Academics',
    status: 'pending' as const,
    priority: 'high' as const,
    attachments: 2,
    comments: 1,
    previousStatus: 'Technical Round Completed',
    nextStatus: 'Offer Letter Uploaded',
    linkedMeeting: 'HR Interview - Jan 14, 10:00 AM',
  },
  {
    id: '3',
    type: 'document',
    title: 'Interview Schedule Uploaded',
    description: 'Final interview schedule has been uploaded. 8 candidates selected for HR round.',
    fullDescription:
      'The final interview schedule for the HR round has been uploaded. A total of 8 candidates have been shortlisted and will participate in the HR round on January 14th.',
    timestamp: '1 day ago',
    person: 'Dr. Amit Patel',
    personEmail: 'amit.patel@nit.ac.in',
    department: 'Placement Cell',
    status: 'completed' as const,
    priority: 'high' as const,
    attachments: 1,
    comments: 2,
    relatedDocuments: ['interview_schedule.pdf', 'candidate_list.xlsx'],
  },
  {
    id: '4',
    type: 'completed',
    title: 'Written Test Conducted',
    description: 'Online written test was conducted. 20 candidates participated.',
    fullDescription:
      'The online written assessment was successfully conducted on January 10th. A total of 20 candidates participated in the test covering data structures, algorithms, and problem-solving skills.',
    timestamp: '3 days ago',
    person: 'Rajesh Kumar',
    personEmail: 'rajesh.kumar@company.com',
    department: 'HR',
    status: 'completed' as const,
    priority: 'medium' as const,
    attachments: 1,
    comments: 0,
    relatedDocuments: ['test_questions.pdf', 'test_results.xlsx'],
  },
  {
    id: '5',
    type: 'students',
    title: 'Database Sent',
    description: 'Student database with 120 eligible candidates has been sent to the company.',
    fullDescription:
      'The approved student database containing 120 eligible candidates from CSE, ECE, IT, and ME departments has been successfully sent to Microsoft HR. The database includes academic records, contact information, and eligibility criteria compliance.',
    timestamp: '1 week ago',
    person: 'Dr. Priya Sharma',
    personEmail: 'priya.sharma@nit.ac.in',
    department: 'Academics',
    status: 'completed' as const,
    priority: 'high' as const,
    attachments: 3,
    comments: 5,
    previousStatus: 'Database Requested',
    relatedDocuments: ['student_database.xlsx', 'eligibility_criteria.pdf'],
  },
  {
    id: '6',
    type: 'update',
    title: 'Eligibility Updated',
    description: 'Eligibility criteria finalized: CGPA 7.0+, No active backlogs.',
    fullDescription:
      'The eligibility criteria for Microsoft placement drive has been finalized and updated in the system. Students with CGPA 7.0 and above without active backlogs are eligible to participate.',
    timestamp: '2 weeks ago',
    person: 'Dr. Amit Patel',
    personEmail: 'amit.patel@nit.ac.in',
    department: 'Placement Cell',
    status: 'completed' as const,
    priority: 'medium' as const,
    attachments: 0,
    comments: 1,
  },
  {
    id: '7',
    type: 'upload',
    title: 'JNF Received',
    description: 'Job Notification Form received from Microsoft with job descriptions.',
    fullDescription:
      'The Job Notification Form has been received from Microsoft containing detailed job descriptions for 4 different roles: Software Engineer, Cloud Architect, Data Scientist, and Product Manager.',
    timestamp: '3 weeks ago',
    person: 'Rajesh Kumar',
    personEmail: 'rajesh.kumar@company.com',
    department: 'HR',
    status: 'completed' as const,
    priority: 'high' as const,
    attachments: 1,
    comments: 2,
    previousStatus: 'Invitation Accepted',
    nextStatus: 'Database Requested',
    relatedDocuments: ['JNF_Microsoft.pdf', 'job_descriptions.docx'],
  },
  {
    id: '8',
    type: 'email',
    title: 'Invitation Accepted',
    description: 'Microsoft has accepted the placement invitation. Drive preparation started.',
    fullDescription:
      'Microsoft has formally accepted the placement drive invitation for NIT Placement 2025. The company is now preparing for the selection process and will provide additional details shortly.',
    timestamp: '1 month ago',
    person: 'Rajesh Kumar',
    personEmail: 'rajesh.kumar@company.com',
    department: 'HR',
    status: 'completed' as const,
    priority: 'high' as const,
    attachments: 0,
    comments: 0,
    previousStatus: 'Invitation Email Sent',
    nextStatus: 'JNF Received',
  },
  {
    id: '9',
    type: 'email',
    title: 'Invitation Email Sent',
    description: 'Formal placement invitation has been sent to Microsoft HR.',
    fullDescription:
      'A formal placement drive invitation email has been sent to Microsoft HR department. The email includes information about our institute, student statistics, and placement process timeline.',
    timestamp: '1 month ago',
    person: 'Dr. Priya Sharma',
    personEmail: 'priya.sharma@nit.ac.in',
    department: 'Academics',
    status: 'completed' as const,
    priority: 'medium' as const,
    attachments: 1,
    comments: 0,
    relatedDocuments: ['invitation_letter.pdf'],
  },
  {
    id: '10',
    type: 'company',
    title: 'Company Added',
    description: 'Microsoft added to placement drive for 2025 season.',
    fullDescription:
      'Microsoft has been successfully added to the placement database for NIT 2025 placement season. The company profile has been created and is ready for placement drive coordination.',
    timestamp: '1 month ago',
    person: 'Dr. Amit Patel',
    personEmail: 'amit.patel@nit.ac.in',
    department: 'Placement Cell',
    status: 'completed' as const,
    priority: 'low' as const,
    attachments: 0,
    comments: 0,
    nextStatus: 'Invitation Email Sent',
  },
]

export function TimelineTab() {
  const [selectedActivity, setSelectedActivity] = useState<(typeof mockActivities)[0] | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [filteredActivities, setFilteredActivities] = useState(mockActivities)

  const handleActivitySelect = (id: string) => {
    const activity = mockActivities.find((a) => a.id === id)
    if (activity) {
      setSelectedActivity(activity)
      setIsDrawerOpen(true)
    }
  }

  const handleFilters = (filters: {
    search?: string
    activityType?: string
    dateRange?: string
    user?: string
    priority?: string
    status?: string
  }) => {
    let filtered = mockActivities

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(searchLower) ||
          a.description.toLowerCase().includes(searchLower) ||
          a.person.toLowerCase().includes(searchLower)
      )
    }

    if (filters.activityType && filters.activityType !== 'All Types') {
      filtered = filtered.filter((a) => {
        const typeMap: Record<string, string[]> = {
          'Communication': ['email', 'comment', 'update'],
          'Meetings': ['meeting'],
          'Documents': ['document', 'upload', 'download'],
          'Placement Drive': ['company', 'students'],
          'Student Updates': ['students'],
          'Timeline Changes': ['update', 'system'],
          'Emails': ['email'],
          'Notes': ['comment'],
          'System Logs': ['system'],
        }
        return typeMap[filters.activityType]?.includes(a.type) || false
      })
    }

    if (filters.user && filters.user !== 'All Users') {
      filtered = filtered.filter((a) => a.person === filters.user)
    }

    if (filters.priority && filters.priority !== 'All Priorities') {
      filtered = filtered.filter((a) => a.priority === filters.priority.toLowerCase())
    }

    if (filters.status && filters.status !== 'All Status') {
      filtered = filtered.filter((a) => a.status === filters.status.toLowerCase())
    }

    setFilteredActivities(filtered)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Timeline */}
        <div className="lg:col-span-3">
          {/* Filters */}
          <TimelineFilters
            onSearchChange={(search) => handleFilters({ search })}
            onActivityTypeChange={(type) => handleFilters({ activityType: type })}
            onDateRangeChange={(range) => handleFilters({ dateRange: range })}
            onUserChange={(user) => handleFilters({ user })}
            onPriorityChange={(priority) => handleFilters({ priority })}
            onStatusChange={(status) => handleFilters({ status })}
            onResetFilters={() => setFilteredActivities(mockActivities)}
          />

          {/* Timeline */}
          {filteredActivities.length > 0 ? (
            <div className="mt-6">
              {filteredActivities.map((activity) => (
                <TimelineCard
                  key={activity.id}
                  {...activity}
                  onViewDetails={handleActivitySelect}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 p-12 text-center bg-muted rounded-lg border border-border">
              <p className="text-muted-foreground">No activities match your filters.</p>
              <button
                onClick={() => setFilteredActivities(mockActivities)}
                className="mt-4 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Statistics Sidebar */}
        <div className="lg:col-span-1">
          <TimelineStats
            totalActivities={mockActivities.length}
            emailsSent={mockActivities.filter((a) => a.type === 'email').length}
            meetings={mockActivities.filter((a) => a.type === 'meeting').length}
            documents={mockActivities.filter((a) => a.type === 'document').length}
            timelineEvents={mockActivities.filter((a) => a.status === 'completed').length}
            pendingTasks={mockActivities.filter((a) => a.status === 'pending').length}
            completionPercent={75}
            riskLevel="low"
          />
        </div>
      </div>

      {/* Activity Drawer */}
      <ActivityDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activity={selectedActivity || undefined}
      />
    </div>
  )
}
