'use client'

import {
  BarChart3,
  Calendar,
  Database,
  MessageSquare,
  Plus,
  Users,
} from 'lucide-react'
import { useState } from 'react'

interface Action {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  color: string
  hover: string
}

export function QuickActions() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const actions: Action[] = [
    {
      id: 1,
      icon: <Plus size={24} />,
      title: 'Create Drive',
      description: 'Launch new placement drive',
      color: 'bg-blue-100 text-blue-700',
      hover: 'hover:bg-blue-200',
    },
    {
      id: 2,
      icon: <Users size={24} />,
      title: 'Add Company',
      description: 'Register new company partner',
      color: 'bg-emerald-100 text-emerald-700',
      hover: 'hover:bg-emerald-200',
    },
    {
      id: 3,
      icon: <Calendar size={24} />,
      title: 'Schedule Meeting',
      description: 'Book new campus interview',
      color: 'bg-purple-100 text-purple-700',
      hover: 'hover:bg-purple-200',
    },
    {
      id: 4,
      icon: <BarChart3 size={24} />,
      title: 'View Reports',
      description: 'Analyze placement statistics',
      color: 'bg-orange-100 text-orange-700',
      hover: 'hover:bg-orange-200',
    },
    {
      id: 5,
      icon: <Database size={24} />,
      title: 'Send Database',
      description: 'Share student information',
      color: 'bg-pink-100 text-pink-700',
      hover: 'hover:bg-pink-200',
    },
    {
      id: 6,
      icon: <MessageSquare size={24} />,
      title: 'Send Announcement',
      description: 'Notify all students',
      color: 'bg-indigo-100 text-indigo-700',
      hover: 'hover:bg-indigo-200',
    },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onMouseEnter={() => setHoveredId(action.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`p-4 rounded-lg border border-border transition-all transform hover:scale-105 active:scale-95 group cursor-pointer`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${action.color} ${action.hover} transition-colors`}
              >
                {action.icon}
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {action.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {action.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
