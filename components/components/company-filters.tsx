'use client'

import { ChevronDown, Search, X } from 'lucide-react'
import { useState } from 'react'

interface FilterState {
  search: string
  status: string
  department: string
  packageRange: string
  year: string
  season: string
  sort: string
}

interface CompanyFiltersProps {
  onFilterChange?: (filters: FilterState) => void
  activeFilters?: number
  onClearFilters?: () => void
}

export function CompanyFilters({
  onFilterChange,
  activeFilters = 0,
  onClearFilters,
}: CompanyFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    status: 'all',
    department: 'all',
    packageRange: 'all',
    year: 'all',
    season: 'all',
    sort: 'recent',
  })

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleClearFilters = () => {
    const clearedFilters = {
      search: '',
      status: 'all',
      department: 'all',
      packageRange: 'all',
      year: 'all',
      season: 'all',
      sort: 'recent',
    }
    setFilters(clearedFilters)
    onClearFilters?.()
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          type="text"
          placeholder="Search companies by name..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
        />
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Status Filter */}
        <div className="relative">
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="all">All Status</option>
            <option value="interested">Interested</option>
            <option value="invitation-sent">Invitation Sent</option>
            <option value="invitation-accepted">Invitation Accepted</option>
            <option value="drive-running">Drive Running</option>
            <option value="drive-completed">Drive Completed</option>
            <option value="closed">Closed</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
        </div>

        {/* Department Filter */}
        <div className="relative">
          <select
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="all">All Departments</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="me">Mechanical</option>
            <option value="civil">Civil</option>
            <option value="it">IT</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
        </div>

        {/* Package Range Filter */}
        <div className="relative">
          <select
            value={filters.packageRange}
            onChange={(e) => handleFilterChange('packageRange', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="all">All Packages</option>
            <option value="5-10">5-10 LPA</option>
            <option value="10-15">10-15 LPA</option>
            <option value="15-20">15-20 LPA</option>
            <option value="20+">20+ LPA</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
        </div>

        {/* Year Filter */}
        <div className="relative">
          <select
            value={filters.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="all">All Years</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
        </div>
      </div>

      {/* Second Row Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Season Filter */}
        <div className="relative">
          <select
            value={filters.season}
            onChange={(e) => handleFilterChange('season', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="all">All Seasons</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={filters.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="recent">Most Recent</option>
            <option value="package-high">Highest Package</option>
            <option value="package-low">Lowest Package</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
        </div>

        {/* Clear Filters Button */}
        {activeFilters > 0 && (
          <button
            onClick={handleClearFilters}
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-muted-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <X size={16} />
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  )
}
