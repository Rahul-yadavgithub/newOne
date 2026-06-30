'use client'

import {
  Mail,
  Calendar,
  FileText,
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Upload,
  Edit,
  MessageSquare,
  Building,
  Zap,
  Award,
  CheckSquare,
} from 'lucide-react'

interface ActivityBadgeProps {
  type: string
  size?: 'sm' | 'md' | 'lg'
}

const activityTypes: Record<
  string,
  { icon: React.ReactNode; color: string; bg: string; label: string }
> = {
  email: {
    icon: Mail,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    label: 'Email',
  },
  meeting: {
    icon: Calendar,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    label: 'Meeting',
  },
  document: {
    icon: FileText,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    label: 'Document',
  },
  students: {
    icon: Users,
    color: 'text-green-600',
    bg: 'bg-green-100',
    label: 'Students',
  },
  completed: {
    icon: CheckCircle,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    label: 'Completed',
  },
  pending: {
    icon: Clock,
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
    label: 'Pending',
  },
  alert: {
    icon: AlertCircle,
    color: 'text-red-600',
    bg: 'bg-red-100',
    label: 'Alert',
  },
  upload: {
    icon: Upload,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
    label: 'Upload',
  },
  download: {
    icon: Download,
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
    label: 'Download',
  },
  update: {
    icon: Edit,
    color: 'text-teal-600',
    bg: 'bg-teal-100',
    label: 'Update',
  },
  comment: {
    icon: MessageSquare,
    color: 'text-pink-600',
    bg: 'bg-pink-100',
    label: 'Comment',
  },
  system: {
    icon: Zap,
    color: 'text-amber-600',
    bg: 'bg-amber-100',
    label: 'System',
  },
  milestone: {
    icon: Award,
    color: 'text-violet-600',
    bg: 'bg-violet-100',
    label: 'Milestone',
  },
  offer: {
    icon: CheckSquare,
    color: 'text-lime-600',
    bg: 'bg-lime-100',
    label: 'Offer',
  },
  company: {
    icon: Building,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    label: 'Company',
  },
}

export function ActivityBadge({ type, size = 'md' }: ActivityBadgeProps) {
  const activity = activityTypes[type] || activityTypes.system
  const IconComponent = activity.icon as React.ElementType

  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <div className={`${activity.bg} ${sizeClasses[size]} rounded-lg flex items-center justify-center`}>
      <IconComponent size={iconSizes[size]} className={activity.color} />
    </div>
  )
}
