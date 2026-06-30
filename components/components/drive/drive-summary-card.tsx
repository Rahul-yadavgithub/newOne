'use client'

interface DriveSummaryCardProps {
  role: string
  jobDescription: string
  salary: string
  internship: boolean
  fullTime: boolean
  location: string
  bond: string
  joiningDate: string
  workingMode: string
  selectionProcess: string[]
  departments: string[]
}

export function DriveSummaryCard({
  role,
  jobDescription,
  salary,
  internship,
  fullTime,
  location,
  bond,
  joiningDate,
  workingMode,
  selectionProcess,
  departments,
}: DriveSummaryCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Drive Summary</h2>

      {/* Role & Description */}
      <div className="mb-6 pb-6 border-b border-border">
        <p className="text-xs font-medium text-muted-foreground mb-1">Role</p>
        <p className="text-lg font-bold text-foreground mb-4">{role}</p>
        <p className="text-xs font-medium text-muted-foreground mb-2">Job Description</p>
        <p className="text-sm text-foreground text-pretty line-clamp-3">{jobDescription}</p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Salary</p>
          <p className="text-sm font-semibold text-foreground">{salary}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Employment Type</p>
          <div className="flex flex-wrap gap-1">
            {fullTime && (
              <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                Full-Time
              </span>
            )}
            {internship && (
              <span className="inline-block text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                Internship
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Location</p>
          <p className="text-sm font-semibold text-foreground">{location}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Bond</p>
          <p className="text-sm font-semibold text-foreground">{bond}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Joining Date</p>
          <p className="text-sm font-semibold text-foreground">{joiningDate}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Working Mode</p>
          <p className="text-sm font-semibold text-foreground">{workingMode}</p>
        </div>
      </div>

      {/* Selection Process */}
      <div className="mb-6 pb-6 border-b border-border">
        <p className="text-xs font-medium text-muted-foreground mb-3">Selection Process</p>
        <ol className="space-y-2">
          {selectionProcess.map((step, index) => (
            <li key={index} className="flex gap-3 text-sm">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Departments */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-3">Hiring Departments</p>
        <div className="flex flex-wrap gap-2">
          {departments.map((dept) => (
            <span key={dept} className="inline-block text-xs bg-muted text-foreground px-3 py-1 rounded-full">
              {dept}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
