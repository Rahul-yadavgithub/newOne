import { Checkbox } from 'lucide-react'
import { StudentAvatar } from './student-avatar'

interface Student {
  id: string
  name: string
  rollNo: string
  department: string
  cgpa: number
  skills: string[]
  resumeStatus: string
  registrationStatus: string
  interviewStatus: string
  currentStage: string
  overallScore: number
}

interface StudentTableProps {
  students: Student[]
  onSelectStudent?: (id: string) => void
  selectedStudents?: string[]
}

export function StudentTable({
  students,
  onSelectStudent,
  selectedStudents = [],
}: StudentTableProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registered':
      case 'Completed':
        return 'bg-emerald-100 text-emerald-700'
      case 'Pending':
      case 'In Progress':
        return 'bg-amber-100 text-amber-700'
      case 'Not Registered':
      case 'Rejected':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-muted text-foreground'
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-muted border-b border-border">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground w-8">
              <input type="checkbox" className="cursor-pointer" />
            </th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Name</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Roll No</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Department</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">CGPA</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Skills</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Resume</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Registration</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Interview</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Current Stage</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Score</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => onSelectStudent?.(student.id)}
                  className="cursor-pointer"
                />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <StudentAvatar
                    name={student.name}
                    initials={getInitials(student.name)}
                    size="sm"
                  />
                  <span className="font-medium">{student.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{student.rollNo}</td>
              <td className="px-4 py-3 text-muted-foreground">{student.department}</td>
              <td className="px-4 py-3 font-semibold">{student.cgpa.toFixed(2)}</td>
              <td className="px-4 py-3 text-muted-foreground">
                <div className="flex gap-1 flex-wrap">
                  {student.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {student.skills.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{student.skills.length - 2}</span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(student.resumeStatus)}`}>
                  {student.resumeStatus}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(student.registrationStatus)}`}>
                  {student.registrationStatus}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(student.interviewStatus)}`}>
                  {student.interviewStatus}
                </span>
              </td>
              <td className="px-4 py-3 font-medium">{student.currentStage}</td>
              <td className="px-4 py-3 font-semibold">{student.overallScore}/100</td>
              <td className="px-4 py-3">
                <button className="text-primary hover:text-primary/80 font-medium text-xs">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
