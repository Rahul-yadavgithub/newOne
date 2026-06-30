import { useState } from 'react'
import { Search, ChevronDown, X } from 'lucide-react'

interface StudentFilterPanelProps {
  onFilterChange?: (filters: any) => void
  activeFilterCount?: number
}

export function StudentFilterPanel({
  onFilterChange,
  activeFilterCount = 0,
}: StudentFilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6 sticky top-24 z-30">
      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-4">
        <Search size={18} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search students by name, roll no, or skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent text-sm placeholder-muted-foreground outline-none"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Filter Options */}
      {isExpanded && (
        <div className="mt-4 space-y-3 border-t border-border pt-4">
          {/* Department */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              Department
            </label>
            <select className="w-full bg-muted border border-border rounded px-3 py-2 text-sm">
              <option>All Departments</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>ME</option>
              <option>Civil</option>
              <option>IT</option>
            </select>
          </div>

          {/* CGPA Range */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              CGPA Range
            </label>
            <select className="w-full bg-muted border border-border rounded px-3 py-2 text-sm">
              <option>All CGPA</option>
              <option>8.0 - 10.0</option>
              <option>7.0 - 7.9</option>
              <option>6.0 - 6.9</option>
              <option>Below 6.0</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              Registration Status
            </label>
            <select className="w-full bg-muted border border-border rounded px-3 py-2 text-sm">
              <option>All Status</option>
              <option>Registered</option>
              <option>Not Registered</option>
            </select>
          </div>

          {/* Placement Status */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              Placement Status
            </label>
            <select className="w-full bg-muted border border-border rounded px-3 py-2 text-sm">
              <option>All Placement Status</option>
              <option>Shortlisted</option>
              <option>Assessment Qualified</option>
              <option>Technical Qualified</option>
              <option>HR Qualified</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              Skills
            </label>
            <input
              type="text"
              placeholder="e.g., Python, React, DSA"
              className="w-full bg-muted border border-border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button className="flex-1 bg-primary text-primary-foreground rounded px-3 py-2 text-xs font-medium hover:bg-primary/90 transition-colors">
              Apply Filters
            </button>
            <button className="flex-1 bg-muted text-foreground rounded px-3 py-2 text-xs font-medium hover:bg-muted/80 transition-colors">
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
