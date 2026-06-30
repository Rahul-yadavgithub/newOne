'use client'

export type DocumentStatus = 'draft' | 'pending-review' | 'approved' | 'archived' | 'shared' | 'latest' | 'confidential'

const statusConfig: Record<DocumentStatus, { bg: string; text: string; dot: string }> = {
  draft: { bg: 'bg-gray-50', text: 'text-gray-700', dot: 'bg-gray-500' },
  'pending-review': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  approved: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  archived: { bg: 'bg-slate-50', text: 'text-slate-700', dot: 'bg-slate-500' },
  shared: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  latest: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
  confidential: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
}

const statusLabels: Record<DocumentStatus, string> = {
  draft: 'Draft',
  'pending-review': 'Pending Review',
  approved: 'Approved',
  archived: 'Archived',
  shared: 'Shared',
  latest: 'Latest',
  confidential: 'Confidential',
}

export function DocumentStatusBadge({ status }: { status: DocumentStatus }) {
  const config = statusConfig[status] || statusConfig.draft
  const label = statusLabels[status] || status

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {label}
    </span>
  )
}
