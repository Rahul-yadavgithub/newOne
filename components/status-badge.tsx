'use client'

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  interested: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  'invitation-sent': { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
  'invitation-accepted': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
  'jnf-pending': { bg: 'bg-yellow-50', text: 'text-yellow-700', dot: 'bg-yellow-500' },
  'jnf-received': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
  'eligibility-finalized': { bg: 'bg-indigo-50', text: 'text-indigo-700', dot: 'bg-indigo-500' },
  'student-database-requested': { bg: 'bg-orange-50', text: 'text-orange-700', dot: 'bg-orange-500' },
  'student-database-sent': { bg: 'bg-teal-50', text: 'text-teal-700', dot: 'bg-teal-500' },
  'interview-scheduled': { bg: 'bg-cyan-50', text: 'text-cyan-700', dot: 'bg-cyan-500' },
  'drive-running': { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  'offer-released': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
  'students-selected': { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  'drive-completed': { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-500' },
  closed: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
}

const statusLabels: Record<string, string> = {
  interested: 'Interested',
  'invitation-sent': 'Invitation Sent',
  'invitation-accepted': 'Invitation Accepted',
  'jnf-pending': 'JNF Pending',
  'jnf-received': 'JNF Received',
  'eligibility-finalized': 'Eligibility Finalized',
  'student-database-requested': 'DB Requested',
  'student-database-sent': 'DB Sent',
  'interview-scheduled': 'Interview Scheduled',
  'drive-running': 'Drive Running',
  'offer-released': 'Offer Released',
  'students-selected': 'Students Selected',
  'drive-completed': 'Drive Completed',
  closed: 'Closed',
}

export function StatusBadge({ status }: { status: keyof typeof statusColors }) {
  const colors = statusColors[status] || statusColors.interested
  const label = statusLabels[status] || status

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
      {label}
    </span>
  )
}
