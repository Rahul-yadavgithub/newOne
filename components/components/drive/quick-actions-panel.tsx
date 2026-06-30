'use client'

import {
  Calendar,
  Users,
  User,
  Download,
  Upload,
  Mail,
  FileText,
  LucideIcon,
} from 'lucide-react'

interface QuickAction {
  id: string
  label: string
  icon: LucideIcon
  description: string
}

interface QuickActionsPanelProps {
  actions?: QuickAction[]
}

const defaultActions: QuickAction[] = [
  {
    id: 'schedule',
    label: 'Schedule Interview',
    icon: Calendar,
    description: 'Set up interviews for candidates',
  },
  {
    id: 'students',
    label: 'Generate Student List',
    icon: Users,
    description: 'Create eligible student list',
  },
  {
    id: 'assign',
    label: 'Assign Panel',
    icon: User,
    description: 'Assign interview panels',
  },
  {
    id: 'download',
    label: 'Download Attendance',
    icon: Download,
    description: 'Export attendance records',
  },
  {
    id: 'upload',
    label: 'Upload Results',
    icon: Upload,
    description: 'Submit drive results',
  },
  {
    id: 'email',
    label: 'Send Email',
    icon: Mail,
    description: 'Communicate with students',
  },
  {
    id: 'notice',
    label: 'Create Notice',
    icon: FileText,
    description: 'Post important announcements',
  },
]

export function QuickActionsPanel({ actions = defaultActions }: QuickActionsPanelProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {actions.map((action) => {
        const Icon = action.icon

        return (
          <button
            key={action.id}
            className="group flex flex-col items-center justify-center p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
          >
            <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors mb-2">
              <Icon size={20} className="text-foreground group-hover:text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground text-center">{action.label}</p>
            <p className="text-xs text-muted-foreground text-center mt-1">{action.description}</p>
          </button>
        )
      })}
    </div>
  )
}
