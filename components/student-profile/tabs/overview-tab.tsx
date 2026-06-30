import { AcademicSummaryCard } from '../cards/academic-summary-card'
import { CandidateEvaluationCard } from '../cards/candidate-evaluation-card'
import { TechnicalSkillsCard } from '../cards/technical-skills-card'
import { PlacementStatusCard } from '../cards/placement-status-card'
import { ApplicationsCard } from '../cards/applications-card'
import { InterviewProgressCard } from '../cards/interview-progress-card'
import { ActivityFeedCard } from '../cards/activity-feed-card'
import { CurrentApplicationsCard } from '../cards/current-applications-card'

interface StudentOverviewTabProps {
  student: any
}

export function StudentOverviewTab({ student }: StudentOverviewTabProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Top Row - Academic & Evaluation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AcademicSummaryCard student={student} />
        <CandidateEvaluationCard student={student} />
      </div>

      {/* Second Row - Skills & Placement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TechnicalSkillsCard student={student} />
        <PlacementStatusCard student={student} />
      </div>

      {/* Third Row - Applications & Interviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ApplicationsCard student={student} />
        <InterviewProgressCard student={student} />
      </div>

      {/* Bottom Row - Activity & Current Apps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeedCard student={student} />
        <CurrentApplicationsCard student={student} />
      </div>
    </div>
  )
}
