import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface StudentProfileHeroProps {
  student: {
    name: string
    rollNo: string
    department: string
    email: string
    phone: string
    avatar: string
    cgpa: number
    overallScore: number
    placementStatus: string
    linkedinProfile?: string
    githubProfile?: string
    portfolioLink?: string
  }
}

export function StudentProfileHero({ student }: StudentProfileHeroProps) {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          {/* Left Section - Student Info */}
          <div className="flex gap-6 flex-1">
            {/* Avatar */}
            <div className="w-24 h-24 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-3xl shadow-lg flex-shrink-0">
              {student.avatar}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-1">{student.name}</h1>
                  <p className="text-muted-foreground mb-3">{student.rollNo} • {student.department}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-4">
                <a href={`mailto:${student.email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Mail size={16} className="text-muted-foreground" />
                  <span>{student.email}</span>
                </a>
                <a href={`tel:${student.phone}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Phone size={16} className="text-muted-foreground" />
                  <span>{student.phone}</span>
                </a>
              </div>

              {/* Social Links */}
              {(student.linkedinProfile || student.githubProfile || student.portfolioLink) && (
                <div className="flex gap-3">
                  {student.linkedinProfile && (
                    <a
                      href={student.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded hover:bg-primary/20 transition-colors inline-flex items-center gap-1"
                    >
                      LinkedIn
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {student.githubProfile && (
                    <a
                      href={student.githubProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded hover:bg-secondary/20 transition-colors inline-flex items-center gap-1"
                    >
                      GitHub
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {student.portfolioLink && (
                    <a
                      href={student.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded hover:bg-accent/20 transition-colors inline-flex items-center gap-1"
                    >
                      Portfolio
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Quick Stats */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold mb-1">{student.cgpa.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">CGPA</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold mb-1">{student.overallScore}</p>
              <p className="text-xs text-muted-foreground">Score</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center col-span-2">
              <p className={`px-3 py-1 rounded text-xs font-medium inline-block ${
                student.placementStatus === 'Shortlisted'
                  ? 'bg-emerald-100 text-emerald-700'
                  : student.placementStatus === 'Rejected'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {student.placementStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
