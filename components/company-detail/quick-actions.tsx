'use client'

import { Mail, MessageSquare, Calendar, FileText, Download, Settings } from 'lucide-react'

const actions = [
  {
    id: 'email',
    label: 'Send Email',
    icon: Mail,
    description: 'Send communication to HR',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'message',
    label: 'Send Message',
    icon: MessageSquare,
    description: 'Quick message',
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 'schedule',
    label: 'Schedule Meeting',
    icon: Calendar,
    description: 'Book a meeting',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'document',
    label: 'Upload Document',
    icon: FileText,
    description: 'Add documents',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'download',
    label: 'Download Data',
    icon: Download,
    description: 'Export information',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    id: 'settings',
    label: 'Company Settings',
    icon: Settings,
    description: 'Manage details',
    color: 'bg-gray-100 text-gray-700',
  },
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <button
              key={action.id}
              className={`flex flex-col items-center justify-center p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer`}
            >
              <div className={`${action.color} p-2 rounded-lg mb-2 group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
              </div>
              <p className="text-xs font-semibold text-center text-foreground">{action.label}</p>
              <p className="text-xs text-muted-foreground text-center mt-1 hidden sm:block">{action.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
