'use client'

import { useState, useMemo } from 'react'
import { Upload, Plus, BarChart3, Download, Grid3x3, List, Search } from 'lucide-react'
import { StatisticsCard } from '@/components/documents/statistics-card'
import { FolderCard } from '@/components/documents/folder-card'
import { DocumentCard } from '@/components/documents/document-card'
import { DocumentTable } from '@/components/documents/document-table'
import { FilterPanel } from '@/components/documents/filter-panel'
import { PreviewDrawer } from '@/components/documents/preview-drawer'
import type { DocumentStatus } from '@/components/documents/document-status-badge'
import type { TagType } from '@/components/documents/tag-component'

interface Document {
  id: string
  name: string
  type: string
  version: string
  uploadedBy: string
  uploadDate: string
  size: string
  status: DocumentStatus
  lastModified: string
  folder: string
  tags: TagType[]
}

const mockFolders = [
  { id: '1', name: 'Invitation Letters', documentCount: 12, lastUpdated: '2 hours ago', owner: 'Dr. Priya Sharma' },
  { id: '2', name: 'JNF Forms', documentCount: 8, lastUpdated: '1 day ago', owner: 'Rajesh Kumar' },
  { id: '3', name: 'Student Databases', documentCount: 24, lastUpdated: '3 days ago', owner: 'Dr. Amit Patel' },
  { id: '4', name: 'Offer Letters', documentCount: 15, lastUpdated: '5 days ago', owner: 'Sarah Johnson' },
  { id: '5', name: 'Meeting Notes', documentCount: 6, lastUpdated: '1 week ago', owner: 'Dr. Priya Sharma' },
  { id: '6', name: 'Archives', documentCount: 42, lastUpdated: '2 weeks ago', owner: 'System' },
]

const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Placement_Brochure_2026.pdf',
    type: 'PDF',
    version: '3',
    uploadedBy: 'Dr. Priya Sharma',
    uploadDate: '2 days ago',
    size: '2.4 MB',
    status: 'approved',
    lastModified: '2 days ago',
    folder: 'Invitation Letters',
    tags: ['latest', 'approved'],
  },
  {
    id: '2',
    name: 'JNF_Microsoft_2026.pdf',
    type: 'PDF',
    version: '2',
    uploadedBy: 'Rajesh Kumar',
    uploadDate: '3 days ago',
    size: '1.8 MB',
    status: 'pending-review',
    lastModified: '1 day ago',
    folder: 'JNF Forms',
    tags: ['pending-review', 'important'],
  },
  {
    id: '3',
    name: 'Eligibility_Criteria_Final.pdf',
    type: 'PDF',
    version: '4',
    uploadedBy: 'Dr. Amit Patel',
    uploadDate: '1 week ago',
    size: '1.2 MB',
    status: 'approved',
    lastModified: '3 days ago',
    folder: 'Invitation Letters',
    tags: ['approved', 'shared'],
  },
  {
    id: '4',
    name: 'Google_Offer_Letter.pdf',
    type: 'PDF',
    version: '1',
    uploadedBy: 'Sarah Johnson',
    uploadDate: '2 days ago',
    size: '0.9 MB',
    status: 'approved',
    lastModified: '2 days ago',
    folder: 'Offer Letters',
    tags: ['latest', 'approved'],
  },
  {
    id: '5',
    name: 'Interview_Schedule_2026.xlsx',
    type: 'Excel',
    version: '5',
    uploadedBy: 'Dr. Priya Sharma',
    uploadDate: '4 days ago',
    size: '0.5 MB',
    status: 'approved',
    lastModified: 'Today',
    folder: 'Meeting Notes',
    tags: ['latest', 'shared'],
  },
  {
    id: '6',
    name: 'Student_Database_CSE.xlsx',
    type: 'Excel',
    version: '3',
    uploadedBy: 'Rajesh Kumar',
    uploadDate: '1 week ago',
    size: '3.2 MB',
    status: 'pending-review',
    lastModified: '3 days ago',
    folder: 'Student Databases',
    tags: ['pending-review', 'important'],
  },
  {
    id: '7',
    name: 'Company_Presentation_Microsoft.pptx',
    type: 'PowerPoint',
    version: '2',
    uploadedBy: 'Sarah Johnson',
    uploadDate: '5 days ago',
    size: '4.1 MB',
    status: 'approved',
    lastModified: '2 days ago',
    folder: 'Invitation Letters',
    tags: ['approved'],
  },
  {
    id: '8',
    name: 'Campus_Visit_Minutes.docx',
    type: 'Word',
    version: '1',
    uploadedBy: 'Dr. Amit Patel',
    uploadDate: '1 week ago',
    size: '0.3 MB',
    status: 'draft',
    lastModified: '5 days ago',
    folder: 'Meeting Notes',
    tags: [],
  },
]

const mockVersions = [
  { id: 'v1', version: '3', updatedBy: 'Dr. Priya Sharma', updatedDate: '2 days ago', summary: 'Final version with corrected eligibility criteria' },
  { id: 'v2', version: '2', updatedBy: 'Rajesh Kumar', updatedDate: '1 week ago', summary: 'Added company achievements and culture section' },
  { id: 'v3', version: '1', updatedBy: 'System', updatedDate: '2 weeks ago', summary: 'Initial document creation' },
]

const mockActivities = [
  { id: 'a1', type: 'download', actor: 'Dr. Amit Patel', action: 'downloaded this document', timestamp: '2 hours ago' },
  { id: 'a2', type: 'view', actor: 'Sarah Johnson', action: 'viewed this document', timestamp: '5 hours ago' },
  { id: 'a3', type: 'share', actor: 'Rajesh Kumar', action: 'shared with Academics Department', timestamp: '1 day ago' },
]

const mockComments = [
  { id: 'c1', author: 'Dr. Priya Sharma', avatar: 'PS', comment: 'Please review the latest eligibility criteria', timestamp: '2 hours ago' },
  { id: 'c2', author: 'Rajesh Kumar', avatar: 'RK', comment: 'The document looks good. Ready for final approval', timestamp: '1 hour ago' },
]

export function DocumentsTab() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    documentType: 'All Types',
    status: 'All Status',
    dateRange: 'All Time',
    uploader: 'All Users',
    folder: 'All Folders',
    version: 'All Versions',
  })

  // Filter and search documents
  const filteredDocuments = useMemo(() => {
    return mockDocuments.filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = filters.documentType === 'All Types' || doc.type === filters.documentType
      const matchesStatus = filters.status === 'All Status' || doc.status === filters.status
      const matchesUploader = filters.uploader === 'All Users' || doc.uploadedBy === filters.uploader
      const matchesFolder = filters.folder === 'All Folders' || doc.folder === filters.folder

      return matchesSearch && matchesType && matchesStatus && matchesUploader && matchesFolder
    })
  }, [searchQuery, filters])

  const handleResetFilters = () => {
    setFilters({
      documentType: 'All Types',
      status: 'All Status',
      dateRange: 'All Time',
      uploader: 'All Users',
      folder: 'All Folders',
      version: 'All Versions',
    })
  }

  const selectedDoc = mockDocuments.find((d) => d.id === selectedDocument)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Documents</h2>
          <p className="text-sm text-muted-foreground mt-1">{filteredDocuments.length} of {mockDocuments.length} documents</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            <Upload size={18} />
            Upload
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
            <Plus size={18} />
            New Folder
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
            <BarChart3 size={18} />
            Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <StatisticsCard icon={Upload} label="Total Documents" value={mockDocuments.length} color="blue" />
        <StatisticsCard icon={Download} label="Pending Reviews" value={3} trend={{ value: 2, isPositive: false }} color="amber" />
        <StatisticsCard icon={Plus} label="Approved" value={5} trend={{ value: 15, isPositive: true }} color="emerald" />
        <StatisticsCard icon={Upload} label="Recently Uploaded" value={2} color="purple" />
        <StatisticsCard icon={Plus} label="Shared Files" value={4} color="cyan" />
        <StatisticsCard icon={Upload} label="Archived" value={42} color="rose" />
      </div>

      {/* Search and Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documents by name, type, or uploader..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <FilterPanel filters={filters} onFilterChange={setFilters} onReset={handleResetFilters} />
      </div>

      {/* Folders Section */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Folders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockFolders.map((folder) => (
            <FolderCard key={folder.id} {...folder} onOpen={() => console.log('Open folder:', folder.id)} />
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground">All Documents</h3>
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-background text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Grid3x3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded transition-colors ${viewMode === 'table' ? 'bg-background text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="text-center py-12 bg-card border border-dashed border-border rounded-lg">
            <div className="text-4xl mb-2">📄</div>
            <h3 className="font-semibold text-foreground mb-1">No documents found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                {...doc}
                onPreview={() => setSelectedDocument(doc.id)}
                onDownload={() => console.log('Download:', doc.id)}
                onShare={() => console.log('Share:', doc.id)}
              />
            ))}
          </div>
        ) : (
          <DocumentTable
            documents={filteredDocuments}
            onPreview={(id) => setSelectedDocument(id)}
            onDownload={(id) => console.log('Download:', id)}
            onShare={(id) => console.log('Share:', id)}
            onDelete={(id) => console.log('Delete:', id)}
          />
        )}
      </div>

      {/* Preview Drawer */}
      <PreviewDrawer
        document={
          selectedDoc
            ? {
                id: selectedDoc.id,
                name: selectedDoc.name,
                type: selectedDoc.type,
                size: selectedDoc.size,
                status: selectedDoc.status,
                uploadedBy: selectedDoc.uploadedBy,
                uploadDate: selectedDoc.uploadDate,
                version: selectedDoc.version,
                tags: selectedDoc.tags,
              }
            : null
        }
        versions={mockVersions}
        activities={mockActivities}
        comments={mockComments}
        onClose={() => setSelectedDocument(null)}
        onDownload={() => console.log('Download')}
        onShare={() => console.log('Share')}
      />
    </div>
  )
}
