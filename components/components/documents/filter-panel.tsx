'use client'

import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

interface FilterState {
  documentType: string
  status: string
  dateRange: string
  uploader: string
  folder: string
  version: string
}

interface FilterPanelProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onReset: () => void
}

const documentTypes = ['All Types', 'PDF', 'Excel', 'Word', 'PowerPoint', 'Image', 'Archive']
const statuses = ['All Status', 'Draft', 'Pending Review', 'Approved', 'Archived', 'Shared']
const dateRanges = ['All Time', 'Today', 'This Week', 'This Month', 'Last 3 Months', 'Custom']
const uploaders = ['All Users', 'Dr. Priya Sharma', 'Rajesh Kumar', 'Dr. Amit Patel', 'Sarah Johnson']
const folders = ['All Folders', 'Invitation Letters', 'JNF Forms', 'Student Databases', 'Offer Letters', 'Archives']
const versions = ['All Versions', 'Latest Only', 'All Versions']

export function FilterPanel({ filters, onFilterChange, onReset }: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const hasFilters =
    filters.documentType !== 'All Types' ||
    filters.status !== 'All Status' ||
    filters.dateRange !== 'All Time' ||
    filters.uploader !== 'All Users' ||
    filters.folder !== 'All Folders' ||
    filters.version !== 'All Versions'

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
      >
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          Filters
          {hasFilters && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
              {Object.values(filters).filter((v) => v !== 'All Types' && v !== 'All Status' && v !== 'All Time' && v !== 'All Users' && v !== 'All Folders' && v !== 'All Versions').length}
            </span>
          )}
        </span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="space-y-3 p-4 bg-card border border-border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Document Type</label>
              <select
                value={filters.documentType}
                onChange={(e) => handleChange('documentType', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {documentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Status</label>
              <select
                value={filters.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Date Range</label>
              <select
                value={filters.dateRange}
                onChange={(e) => handleChange('dateRange', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {dateRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Uploader</label>
              <select
                value={filters.uploader}
                onChange={(e) => handleChange('uploader', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {uploaders.map((uploader) => (
                  <option key={uploader} value={uploader}>
                    {uploader}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Folder</label>
              <select
                value={filters.folder}
                onChange={(e) => handleChange('folder', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {folders.map((folder) => (
                  <option key={folder} value={folder}>
                    {folder}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Version</label>
              <select
                value={filters.version}
                onChange={(e) => handleChange('version', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {versions.map((version) => (
                  <option key={version} value={version}>
                    {version}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={onReset}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <X size={16} />
              Clear All Filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}
