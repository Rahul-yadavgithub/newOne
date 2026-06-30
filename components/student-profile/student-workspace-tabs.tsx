'use client'

import { StudentOverviewTab } from './tabs/overview-tab'
import { StudentTabPlaceholder } from './tabs/tab-placeholder'

interface StudentWorkspaceTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  student: any
}

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'resume', label: 'Resume' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'applications', label: 'Applications' },
  { id: 'interviews', label: 'Interviews' },
  { id: 'education', label: 'Education' },
  { id: 'evaluations', label: 'Evaluations' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'documents', label: 'Documents' },
]

export function StudentWorkspaceTabs({ activeTab, setActiveTab, student }: StudentWorkspaceTabsProps) {
  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-card border border-border rounded-lg p-1 flex gap-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-card border border-border rounded-lg">
        {activeTab === 'overview' && <StudentOverviewTab student={student} />}
        {activeTab === 'resume' && <StudentTabPlaceholder title="Resume" />}
        {activeTab === 'skills' && <StudentTabPlaceholder title="Skills" />}
        {activeTab === 'projects' && <StudentTabPlaceholder title="Projects" />}
        {activeTab === 'applications' && <StudentTabPlaceholder title="Applications" />}
        {activeTab === 'interviews' && <StudentTabPlaceholder title="Interviews" />}
        {activeTab === 'education' && <StudentTabPlaceholder title="Education" />}
        {activeTab === 'evaluations' && <StudentTabPlaceholder title="Evaluations" />}
        {activeTab === 'timeline' && <StudentTabPlaceholder title="Timeline" />}
        {activeTab === 'documents' && <StudentTabPlaceholder title="Documents" />}
      </div>
    </div>
  )
}
