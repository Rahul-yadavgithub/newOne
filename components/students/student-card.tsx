import { Star, MessageCircle, CheckCircle2, XCircle } from 'lucide-react'
<<<<<<< HEAD
import { StudentAvatar } from './student-avatar'

interface StudentCardProps {
=======
import Link from 'next/link'
import { StudentAvatar } from './student-avatar'

interface StudentCardProps {
  id?: string
  companyId?: string
>>>>>>> ee4078c (feat: pass companyId to StudentsTab and add new StudentProfilePage component)
  name: string
  department: string
  cgpa: number
  skills: string[]
  resumeCompletion: number
  codingProfile: string
  placementStatus: string
  interviewProgress: number
  onViewProfile?: () => void
  onShortlist?: () => void
  onReject?: () => void
  onAssignInterview?: () => void
}

export function StudentCard({
<<<<<<< HEAD
=======
  id,
  companyId,
>>>>>>> ee4078c (feat: pass companyId to StudentsTab and add new StudentProfilePage component)
  name,
  department,
  cgpa,
  skills,
  resumeCompletion,
  codingProfile,
  placementStatus,
  interviewProgress,
  onViewProfile,
  onShortlist,
  onReject,
  onAssignInterview,
}: StudentCardProps) {
<<<<<<< HEAD
=======
  const profileLink = id && companyId ? `/app/companies/${companyId}/students/${id}` : '#'
>>>>>>> ee4078c (feat: pass companyId to StudentsTab and add new StudentProfilePage component)
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-emerald-100 text-emerald-700'
      case 'Rejected':
        return 'bg-red-100 text-red-700'
      case 'In Progress':
        return 'bg-amber-100 text-amber-700'
      default:
        return 'bg-muted text-foreground'
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-all hover:border-primary/50 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <StudentAvatar name={name} initials={getInitials(name)} size="md" />
          <div className="flex-1">
            <h3 className="font-bold text-foreground line-clamp-1">{name}</h3>
            <p className="text-xs text-muted-foreground">{department}</p>
          </div>
        </div>
        <button
          onClick={onShortlist}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-amber-500"
        >
          <Star size={18} />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-muted rounded p-2">
          <p className="text-xs text-muted-foreground mb-1">CGPA</p>
          <p className="font-bold text-sm">{cgpa.toFixed(2)}</p>
        </div>
        <div className="bg-muted rounded p-2">
          <p className="text-xs text-muted-foreground mb-1">Interviews</p>
          <p className="font-bold text-sm">{interviewProgress}%</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">Skills</p>
        <div className="flex gap-1 flex-wrap">
          {skills.slice(0, 3).map((skill) => (
            <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Resume Completion</p>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${resumeCompletion}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Interview Progress</p>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all"
              style={{ width: `${interviewProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Status & Coding */}
      <div className="flex items-center justify-between mb-4 pb-4 border-t border-border pt-4">
        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(placementStatus)}`}>
          {placementStatus}
        </span>
        <a href={codingProfile} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
          {codingProfile ? 'LeetCode' : 'N/A'}
        </a>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
<<<<<<< HEAD
        <button
          onClick={onViewProfile}
          className="flex-1 bg-primary text-primary-foreground rounded px-3 py-2 text-xs font-medium hover:bg-primary/90 transition-colors"
        >
          View Profile
        </button>
        <button
          onClick={onAssignInterview}
          className="flex-1 bg-secondary text-secondary-foreground rounded px-3 py-2 text-xs font-medium hover:bg-secondary/90 transition-colors"
=======
        <Link
          href={profileLink}
          className="flex-1 bg-primary text-primary-foreground rounded px-3 py-2 text-xs font-medium hover:bg-primary/90 transition-colors text-center block"
        >
          View Profile
        </Link>
        <button
          onClick={onAssignInterview}
          className="flex-1 bg-secondary text-secondary-foreground rounded px-3 py-2 text-xs font-medium hover:bg-secondary/90 transition-colors"
          title="Assign Interview"
>>>>>>> ee4078c (feat: pass companyId to StudentsTab and add new StudentProfilePage component)
        >
          Interview
        </button>
        <button
          onClick={onReject}
          className="px-2 py-2 text-muted-foreground hover:text-red-600 transition-colors"
          title="Reject"
        >
          <XCircle size={16} />
        </button>
      </div>
    </div>
  )
}
