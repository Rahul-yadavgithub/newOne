import { Mail, Phone, FileText, Code, BookOpen, ExternalLink } from 'lucide-react'

interface StudentProfileSidebarProps {
  student: {
    coordinatorName: string
    coordinatorEmail: string
    coordinatorPhone: string
    codingProfile: string
    githubProfile?: string
    portfolioLink?: string
    resumeCompletion: number
    projects: Array<{ id: string; title: string }>
  }
}

export function StudentProfileSidebar({ student }: StudentProfileSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Coordinator Info Card */}
      <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6 sticky top-24">
        <div className="mb-4">
          <h3 className="font-semibold mb-4">Placement Coordinator</h3>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-1">{student.coordinatorName}</p>
            <div className="space-y-2">
              <a
                href={`mailto:${student.coordinatorEmail}`}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} />
                <span className="truncate">{student.coordinatorEmail}</span>
              </a>
              <a
                href={`tel:${student.coordinatorPhone}`}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} />
                <span>{student.coordinatorPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Profiles Card */}
      <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6">
        <h3 className="font-semibold mb-4">Online Profiles</h3>
        
        <div className="space-y-3">
          {student.codingProfile && (
            <a
              href={student.codingProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <Code size={18} className="text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">LeetCode</p>
                <p className="text-xs text-muted-foreground truncate">View Profile</p>
              </div>
              <ExternalLink size={14} className="text-muted-foreground flex-shrink-0" />
            </a>
          )}

          {student.githubProfile && (
            <a
              href={student.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <Code size={18} className="text-secondary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-xs text-muted-foreground truncate">View Repositories</p>
              </div>
              <ExternalLink size={14} className="text-muted-foreground flex-shrink-0" />
            </a>
          )}

          {student.portfolioLink && (
            <a
              href={student.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <BookOpen size={18} className="text-accent flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Portfolio</p>
                <p className="text-xs text-muted-foreground truncate">View Work</p>
              </div>
              <ExternalLink size={14} className="text-muted-foreground flex-shrink-0" />
            </a>
          )}
        </div>
      </div>

      {/* Resume Status Card */}
      <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center">
            <FileText className="text-blue-600" size={20} />
          </div>
          <h3 className="font-semibold">Resume Status</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Completion</p>
            <p className="text-sm font-bold">{student.resumeCompletion}%</p>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all"
              style={{ width: `${student.resumeCompletion}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          {student.resumeCompletion === 100
            ? 'Resume is complete and ready'
            : `${100 - student.resumeCompletion}% remaining`}
        </p>
      </div>

      {/* Projects Overview Card */}
      {student.projects.length > 0 && (
        <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Projects ({student.projects.length})</h3>
          
          <div className="space-y-2">
            {student.projects.map((project) => (
              <div
                key={project.id}
                className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <p className="text-sm font-medium line-clamp-2">{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="space-y-2">
        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
          Send Message
        </button>
        <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/90 transition-colors">
          Schedule Interview
        </button>
        <button className="w-full px-4 py-2 bg-muted text-foreground rounded-lg font-medium text-sm hover:bg-muted/80 transition-colors">
          Download Resume
        </button>
      </div>
    </div>
  )
}
