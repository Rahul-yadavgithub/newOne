'use client'

import { X } from 'lucide-react'

export type TagType = 'important' | 'pending-review' | 'approved' | 'confidential' | 'shared' | 'latest' | 'archive'

const tagConfig: Record<TagType, { bg: string; text: string; border: string }> = {
  important: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
  'pending-review': { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
  approved: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
  confidential: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
  shared: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  latest: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
  archive: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' },
}

const tagLabels: Record<TagType, string> = {
  important: 'Important',
  'pending-review': 'Pending Review',
  approved: 'Approved',
  confidential: 'Confidential',
  shared: 'Shared',
  latest: 'Latest',
  archive: 'Archive',
}

interface TagProps {
  type: TagType
  onRemove?: () => void
}

export function Tag({ type, onRemove }: TagProps) {
  const config = tagConfig[type] || tagConfig.latest
  const label = tagLabels[type] || type

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${config.bg} ${config.text} border ${config.border}`}>
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-0.5 hover:opacity-70 transition-opacity"
          aria-label={`Remove ${label} tag`}
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}
