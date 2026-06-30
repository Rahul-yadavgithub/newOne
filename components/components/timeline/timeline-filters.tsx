'use client'

import { Search, X } from 'lucide-react'
import { useState } from 'react'

interface TimelineFiltersProps {
  onSearchChange?: (search: string) => void
  onActivityTypeChange?: (type: string) => void
  onDateRangeChange?: (range: string) => void
  onUserChange?: (user: string) => void
  onPriorityChange?: (priority: string) => void
  onStatusChange?: (status: string) => void
  onResetFilters?: () => void
}

const activityTypes = [
  'All Types',
  'Communication',
  'Meetings',
  'Documents',
  'Placement Drive',
  'Student Updates',
  'Timeline Changes',
  'Emails',
  'Notes',
  'System Logs',
]

const dateRanges = [
  'All Time',
  'Last 24 Hours',
  'Last 7 Days',
  'Last 30 Days',
  'This Month',
  'Custom',
]

const users = [
  'All Users',
  'Dr. Priya Sharma',
  'Rajesh Kumar',
  'System',
  'Dr. Amit Patel',
]

const priorities = ['All Priorities', 'High', 'Medium', 'Low']
const statuses = ['All Status', 'Completed', 'Pending', 'Alert']

export function TimelineFilters({
  onSearchChange,
  onActivityTypeChange,
  onDateRangeChange,
  onUserChange,
  onPriorityChange,
  onStatusChange,
  onResetFilters,
}: TimelineFiltersProps) {
  const [search, setSearch] = useState('')
  const [activityType, setActivityType] = useState('All Types')
  const [dateRange, setDateRange] = useState('All Time')
  const [user, setUser] = useState('All Users')
  const [priority, setPriority] = useState('All Priorities')
  const [status, setStatus] = useState('All Status')
  const [showMobile, setShowMobile] = useState(false)

  const handleReset = () => {
    setSearch('')
    setActivityType('All Types')
    setDateRange('All Time')
    setUser('All Users')
    setPriority('All Priorities')
    setStatus('All Status')
    onResetFilters?.()
  }

  const isFiltered =
    search ||
    activityType !== 'All Types' ||
    dateRange !== 'All Time' ||
    user !== 'All Users' ||
    priority !== 'All Priorities' ||
    status !== 'All Status'

  return (
    <div className="bg-white border border-border rounded-lg p-4 mb-6 sticky top-24 z-10">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search activities by user, activity, document..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            onSearchChange?.(e.target.value)
          }}
          className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
        {/* Activity Type */}
        <select
          value={activityType}
          onChange={(e) => {
            setActivityType(e.target.value)
            onActivityTypeChange?.(e.target.value)
          }}
          className="px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {activityTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Date Range */}
        <select
          value={dateRange}
          onChange={(e) => {
            setDateRange(e.target.value)
            onDateRangeChange?.(e.target.value)
          }}
          className="px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {dateRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>

        {/* User */}
        <select
          value={user}
          onChange={(e) => {
            setUser(e.target.value)
            onUserChange?.(e.target.value)
          }}
          className="px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {users.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>

        {/* Priority */}
        <select
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value)
            onPriorityChange?.(e.target.value)
          }}
          className="px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {priorities.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value)
            onStatusChange?.(e.target.value)
          }}
          className="px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Reset Button */}
        {isFiltered && (
          <button
            onClick={handleReset}
            className="px-3 py-2 border border-border bg-muted hover:bg-muted/80 text-foreground rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <X size={14} />
            Clear All
          </button>
        )}
      </div>

      {/* Active Filters Display */}
      {isFiltered && (
        <div className="text-xs text-muted-foreground">
          Showing filtered results • Use "Clear All" to reset filters
        </div>
      )}
    </div>
  )
}
