import { useState } from 'react'
import {
  Users,
  UserCheck,
  BookOpen,
  Brain,
  BadgeCheck,
  Award,
  CheckCircle2,
  XCircle,
  LayoutGrid,
  LayoutList,
  SquareStack,
} from 'lucide-react'
import { StudentKPICard } from '@/components/students/student-kpi-card'
import { StudentFilterPanel } from '@/components/students/student-filter-panel'
import { StudentTable } from '@/components/students/student-table'
import { StudentCard } from '@/components/students/student-card'
import { SelectionPipeline } from '@/components/students/selection-pipeline'
import { StudentStatistics } from '@/components/students/student-statistics'

const mockStudents = [
  {
    id: '1',
    name: 'Arjun Kumar',
    rollNo: '21BCS001',
    department: 'CSE',
    cgpa: 8.7,
    skills: ['Python', 'React', 'DSA', 'System Design'],
    resumeStatus: 'Completed',
    registrationStatus: 'Registered',
    interviewStatus: 'Pending',
    currentStage: 'Assessment Qualified',
    overallScore: 85,
    resumeCompletion: 100,
    codingProfile: 'leetcode.com/arjunkumar',
    placementStatus: 'Shortlisted',
    interviewProgress: 75,
  },
  {
    id: '2',
    name: 'Priya Singh',
    rollNo: '21BCS002',
    department: 'CSE',
    cgpa: 9.1,
    skills: ['Java', 'Spring Boot', 'SQL'],
    resumeStatus: 'Completed',
    registrationStatus: 'Registered',
    interviewStatus: 'In Progress',
    currentStage: 'Technical Interview',
    overallScore: 92,
    resumeCompletion: 100,
    codingProfile: 'leetcode.com/priyasingh',
    placementStatus: 'Shortlisted',
    interviewProgress: 90,
  },
  {
    id: '3',
    name: 'Raj Patel',
    rollNo: '21BCS003',
    department: 'CSE',
    cgpa: 7.8,
    skills: ['JavaScript', 'Node.js', 'MongoDB'],
    resumeStatus: 'Completed',
    registrationStatus: 'Registered',
    interviewStatus: 'Pending',
    currentStage: 'Assessment Qualified',
    overallScore: 78,
    resumeCompletion: 95,
    codingProfile: 'leetcode.com/rajpatel',
    placementStatus: 'In Progress',
    interviewProgress: 50,
  },
  {
    id: '4',
    name: 'Neha Gupta',
    rollNo: '21BCS004',
    department: 'ECE',
    cgpa: 8.4,
    skills: ['C++', 'Embedded Systems', 'DSA'],
    resumeStatus: 'Completed',
    registrationStatus: 'Registered',
    interviewStatus: 'Completed',
    currentStage: 'HR Interview',
    overallScore: 88,
    resumeCompletion: 100,
    codingProfile: 'leetcode.com/nehagupta',
    placementStatus: 'Shortlisted',
    interviewProgress: 85,
  },
  {
    id: '5',
    name: 'Vikram Singh',
    rollNo: '21BIT005',
    department: 'IT',
    cgpa: 6.9,
    skills: ['Python', 'Flask', 'Databases'],
    resumeStatus: 'Pending',
    registrationStatus: 'Registered',
    interviewStatus: 'Not Started',
    currentStage: 'Eligible',
    overallScore: 65,
    resumeCompletion: 60,
    codingProfile: '',
    placementStatus: 'In Progress',
    interviewProgress: 0,
  },
]

const pipelineStages = [
  { name: 'Applied', count: 284, percentage: 100 },
  { name: 'Eligible', count: 268, percentage: 94 },
  { name: 'Assessment', count: 196, percentage: 73 },
  { name: 'Technical', count: 156, percentage: 80 },
  { name: 'HR', count: 108, percentage: 69 },
  { name: 'Selected', count: 35, percentage: 32 },
  { name: 'Offer Accepted', count: 28, percentage: 80 },
]

export function StudentsTab() {
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'compact'>('table')
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const toggleStudentSelection = (id: string) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Students Management</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage and track all students participating in the placement drive
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
            Import Students
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors text-sm">
            Export List
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StudentKPICard
          icon={Users}
          label="Eligible Students"
          value={284}
          trend={12}
          trendDirection="up"
          color="primary"
        />
        <StudentKPICard
          icon={UserCheck}
          label="Registered"
          value={268}
          trend={8}
          trendDirection="up"
          color="secondary"
        />
        <StudentKPICard
          icon={BookOpen}
          label="Shortlisted"
          value={156}
          trend={-2}
          trendDirection="down"
          color="accent"
        />
        <StudentKPICard
          icon={Brain}
          label="Assessment Qualified"
          value={108}
          trend={15}
          trendDirection="up"
          color="emerald"
        />
        <StudentKPICard
          icon={Award}
          label="Selected"
          value={35}
          trend={5}
          trendDirection="up"
          color="amber"
        />
      </div>

      {/* Filter Panel */}
      <StudentFilterPanel activeFilterCount={0} />

      {/* View Mode Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold mb-2">Students List</h3>
          <p className="text-xs text-muted-foreground">Showing 5 of 284 students</p>
        </div>
        <div className="flex gap-2 bg-muted p-1 rounded-lg">
          <button
            onClick={() => setViewMode('table')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'table'
                ? 'bg-background text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Table View"
          >
            <LayoutList size={18} />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'grid'
                ? 'bg-background text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Grid View"
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setViewMode('compact')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'compact'
                ? 'bg-background text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Compact View"
          >
            <SquareStack size={18} />
          </button>
        </div>
      </div>

      {/* Students View */}
      {viewMode === 'table' && (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <StudentTable
            students={mockStudents}
            onSelectStudent={toggleStudentSelection}
            selectedStudents={selectedStudents}
          />
        </div>
      )}

      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockStudents.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              department={student.department}
              cgpa={student.cgpa}
              skills={student.skills}
              resumeCompletion={student.resumeCompletion}
              codingProfile={student.codingProfile}
              placementStatus={student.placementStatus}
              interviewProgress={student.interviewProgress}
              onViewProfile={() => console.log('View profile:', student.id)}
              onShortlist={() => console.log('Shortlist:', student.id)}
              onReject={() => console.log('Reject:', student.id)}
              onAssignInterview={() => console.log('Assign interview:', student.id)}
            />
          ))}
        </div>
      )}

      {viewMode === 'compact' && (
        <div className="bg-card border border-border rounded-lg p-4 space-y-2">
          {mockStudents.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-3 hover:bg-muted rounded transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded font-semibold text-xs flex items-center justify-center">
                  {student.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.rollNo}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold">{student.cgpa.toFixed(1)}</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                  {student.placementStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selection Pipeline */}
      <SelectionPipeline stages={pipelineStages} />

      {/* Statistics */}
      <div>
        <h3 className="text-lg font-bold mb-4">Statistics & Analytics</h3>
        <StudentStatistics />
      </div>

      {/* Right Sidebar Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2" />
        <div className="bg-card border border-border rounded-lg p-6 sticky top-24 h-fit">
          <h4 className="font-bold mb-4">Quick Info</h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Placement Coordinator</p>
              <p className="font-semibold">Dr. Priya Sharma</p>
              <p className="text-xs text-muted-foreground">priya.sharma@nit.ac.in</p>
            </div>
            <div className="bg-muted rounded p-3">
              <p className="text-xs text-muted-foreground mb-2">Upcoming Interviews</p>
              <p className="text-lg font-bold">12</p>
              <p className="text-xs text-muted-foreground">Today</p>
            </div>
            <div className="bg-muted rounded p-3">
              <p className="text-xs text-muted-foreground mb-2">Pending Reviews</p>
              <p className="text-lg font-bold">28</p>
              <p className="text-xs text-muted-foreground">Resume screenings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
