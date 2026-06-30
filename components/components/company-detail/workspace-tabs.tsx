'use client'

import { useState } from 'react'
import { FileText, Clock, Briefcase, Users, MessageSquare, Calendar, FolderOpen, Activity, Notebook } from 'lucide-react'

interface WorkspaceTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  children: React.ReactNode
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: Briefcase },
  { id: 'timeline', label: 'Timeline', icon: Clock },
  { id: 'drive', label: 'Placement Drive', icon: FileText },
  { id: 'students', label: 'Students', icon: Users },
  { id: 'communication', label: 'Communication', icon: MessageSquare },
  { id: 'meetings', label: 'Meetings', icon: Calendar },
  { id: 'documents', label: 'Documents', icon: FolderOpen },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'notes', label: 'Notes', icon: Notebook },
]

export function WorkspaceTabs({ activeTab, onTabChange, children }: WorkspaceTabsProps) {
  return (
    <>
      {/* Tab Navigation */}
      <div className="bg-white border-b border-border sticky top-[180px] z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto -mx-6 px-6">
            <div className="flex gap-0 min-w-min">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                      isActive
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {children}
      </div>
    </>
  )
}
