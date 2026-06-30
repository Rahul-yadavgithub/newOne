'use client'

import { CompanyCard } from '@/components/company-card'
import { CompanyFilters } from '@/components/company-filters'
import { CompanyStatCard } from '@/components/company-stat-card'
import { CompanyTable } from '@/components/company-table'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import {
  Award,
  BriefcaseIcon,
  Building2,
  Grid3x3,
  List,
  Plus,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

interface Company {
  id: string
  logo: string
  name: string
  industry: string
  package: string
  departments: string[]
  status: string
  coordinator: string
  lastUpdated: string
  deadline: string
  progress: number
}

const mockCompanies: Company[] = [
  {
    id: '1',
    logo: 'TCS',
    name: 'Tata Consultancy Services',
    industry: 'IT Services',
    package: '12 LPA',
    departments: ['CSE', 'IT', 'ECE'],
    status: 'drive-running',
    coordinator: 'Dr. Raj Kumar',
    lastUpdated: '2 hours ago',
    deadline: 'Dec 15',
    progress: 75,
  },
  {
    id: '2',
    logo: 'AZ',
    name: 'Amazon',
    industry: 'Cloud & Tech',
    package: '28 LPA',
    departments: ['CSE', 'IT'],
    status: 'interview-scheduled',
    coordinator: 'Prof. Anita Singh',
    lastUpdated: '1 hour ago',
    deadline: 'Dec 20',
    progress: 60,
  },
  {
    id: '3',
    logo: 'GGL',
    name: 'Google',
    industry: 'Technology',
    package: '35 LPA',
    departments: ['CSE', 'IT'],
    status: 'offer-released',
    coordinator: 'Dr. Priya Sharma',
    lastUpdated: '30 mins ago',
    deadline: 'Dec 10',
    progress: 95,
  },
  {
    id: '4',
    logo: 'JPM',
    name: 'JPMorgan Chase',
    industry: 'FinTech',
    package: '24 LPA',
    departments: ['CSE', 'IT', 'ECE'],
    status: 'jnf-received',
    coordinator: 'Prof. Vikram Patel',
    lastUpdated: '4 hours ago',
    deadline: 'Dec 18',
    progress: 45,
  },
  {
    id: '5',
    logo: 'MSFT',
    name: 'Microsoft',
    industry: 'Software',
    package: '30 LPA',
    departments: ['CSE', 'IT'],
    status: 'student-database-sent',
    coordinator: 'Dr. Seema Gupta',
    lastUpdated: '5 hours ago',
    deadline: 'Dec 22',
    progress: 55,
  },
  {
    id: '6',
    logo: 'IB',
    name: 'Infosys',
    industry: 'IT Services',
    package: '14 LPA',
    departments: ['CSE', 'IT', 'ECE', 'ME'],
    status: 'invitation-accepted',
    coordinator: 'Prof. Rajesh Kumar',
    lastUpdated: '8 hours ago',
    deadline: 'Dec 25',
    progress: 40,
  },
  {
    id: '7',
    logo: 'HCL',
    name: 'HCL Technologies',
    industry: 'IT Services',
    package: '11 LPA',
    departments: ['CSE', 'IT'],
    status: 'invitation-sent',
    coordinator: 'Dr. Meera Rao',
    lastUpdated: '12 hours ago',
    deadline: 'Dec 28',
    progress: 20,
  },
  {
    id: '8',
    logo: 'CAP',
    name: 'Capgemini',
    industry: 'IT Services',
    package: '10 LPA',
    departments: ['CSE', 'IT', 'ECE'],
    status: 'interested',
    coordinator: 'Prof. Rohan Singh',
    lastUpdated: '1 day ago',
    deadline: 'Jan 5',
    progress: 10,
  },
]

export default function CompaniesPage() {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table')
  const [filteredCompanies, setFilteredCompanies] = useState(mockCompanies)

  const handleFilterChange = (filters: any) => {
    let filtered = mockCompanies

    if (filters.search) {
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(filters.search.toLowerCase()),
      )
    }

    if (filters.status !== 'all') {
      filtered = filtered.filter((c) => c.status === filters.status)
    }

    if (filters.department !== 'all') {
      filtered = filtered.filter((c) => c.departments.includes(filters.department.toUpperCase()))
    }

    if (filters.packageRange !== 'all') {
      filtered = filtered.filter((c) => {
        const pkg = parseInt(c.package)
        if (filters.packageRange === '5-10') return pkg >= 5 && pkg <= 10
        if (filters.packageRange === '10-15') return pkg >= 10 && pkg <= 15
        if (filters.packageRange === '15-20') return pkg >= 15 && pkg <= 20
        if (filters.packageRange === '20+') return pkg >= 20
        return true
      })
    }

    if (filters.sort === 'package-high') {
      filtered.sort((a, b) => parseInt(b.package) - parseInt(a.package))
    } else if (filters.sort === 'package-low') {
      filtered.sort((a, b) => parseInt(a.package) - parseInt(b.package))
    } else if (filters.sort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    } else if (filters.sort === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name))
    }

    setFilteredCompanies(filtered)
  }

  const handleActionClick = (action: string, company: Company) => {
    console.log(`Action: ${action} on company: ${company.name}`)
  }

  const handleCardActionClick = (action: string, companyId: string) => {
    const company = mockCompanies.find((c) => c.id === companyId)
    if (company) handleActionClick(action, company)
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Navbar />

      <main className="md:ml-64 pt-20 pb-12">
        <div className="px-6 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Companies</h1>
              <p className="text-muted-foreground">
                Manage all companies participating in campus placements
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Plus size={18} />
              Add Company
            </button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <CompanyStatCard
              icon={<Building2 size={24} />}
              label="Total Companies"
              value={mockCompanies.length}
              description="Registered companies"
              trend={{ direction: 'up', percentage: 12 }}
            />
            <CompanyStatCard
              icon={<Zap size={24} />}
              label="Active Companies"
              value={mockCompanies.filter((c) => c.status !== 'closed').length}
              description="Currently active"
              trend={{ direction: 'up', percentage: 8 }}
            />
            <CompanyStatCard
              icon={<BriefcaseIcon size={24} />}
              label="Ongoing Drives"
              value={mockCompanies.filter((c) => c.status === 'drive-running').length}
              description="Recruitment drives"
              trend={{ direction: 'up', percentage: 5 }}
            />
            <CompanyStatCard
              icon={<Award size={24} />}
              label="Completed Drives"
              value={mockCompanies.filter((c) => c.status === 'drive-completed').length}
              description="Finished drives"
              trend={{ direction: 'neutral', percentage: 0 }}
            />
          </div>

          {/* Filter Section */}
          <CompanyFilters
            onFilterChange={handleFilterChange}
            activeFilters={filteredCompanies.length < mockCompanies.length ? 1 : 0}
          />

          {/* View Toggle and Info */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCompanies.length} of {mockCompanies.length} companies
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <List size={18} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Grid3x3 size={18} />
              </button>
            </div>
          </div>

          {/* Table View */}
          {viewMode === 'table' && (
            <CompanyTable companies={filteredCompanies} onActionClick={handleActionClick} />
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <CompanyCard
                  key={company.id}
                  id={company.id}
                  logo={company.logo}
                  name={company.name}
                  industry={company.industry}
                  package={company.package}
                  departments={company.departments}
                  status={company.status}
                  coordinator={company.coordinator}
                  deadline={company.deadline}
                  progress={company.progress}
                  onActionClick={(action) => handleCardActionClick(action, company.id)}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredCompanies.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 bg-card border border-border rounded-xl">
              <Building2 size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No companies found</h3>
              <p className="text-muted-foreground text-center max-w-sm mb-6">
                Try adjusting your filters or add a new company to get started.
              </p>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                <Plus size={18} />
                Add Company
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
