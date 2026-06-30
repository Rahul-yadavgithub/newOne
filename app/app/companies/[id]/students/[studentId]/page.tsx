'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { StudentProfileHero } from '@/components/student-profile/student-profile-hero'
import { StudentProfileSidebar } from '@/components/student-profile/student-profile-sidebar'
import { StudentWorkspaceTabs } from '@/components/student-profile/student-workspace-tabs'

// Mock student data
const mockStudent = {
  id: '1',
  name: 'Arjun Kumar',
  rollNo: '21BCS001',
  department: 'Computer Science & Engineering',
  email: 'arjun.kumar@nit.ac.in',
  phone: '+91 98765 43210',
  avatar: 'AK',
  cgpa: 8.7,
  overallScore: 85,
  resumeScore: 92,
  codingScore: 88,
  communicationScore: 82,
  technicalScore: 86,
  leadersshipScore: 85,
  adaptabilityScore: 80,
  analyticsScore: 84,
  
  resumeCompletion: 100,
  codingProfile: 'https://leetcode.com/arjunkumar',
  githubProfile: 'https://github.com/arjunkumar',
  linkedinProfile: 'https://linkedin.com/in/arjunkumar',
  portfolioLink: 'https://arjunkumar.dev',
  
  placementStatus: 'Shortlisted',
  interviewProgress: 75,
  currentStage: 'Assessment Qualified',
  
  skills: [
    { name: 'Python', proficiency: 95 },
    { name: 'React', proficiency: 88 },
    { name: 'DSA', proficiency: 92 },
    { name: 'System Design', proficiency: 85 },
    { name: 'JavaScript', proficiency: 90 },
    { name: 'SQL', proficiency: 87 },
    { name: 'Node.js', proficiency: 83 },
    { name: 'TypeScript', proficiency: 86 },
  ],
  
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/arjunkumar/ecommerce',
      startDate: '2023-06',
      endDate: '2023-09',
    },
    {
      id: '2',
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat app with TypeScript and Socket.io',
      technologies: ['TypeScript', 'Socket.io', 'React', 'Express'],
      link: 'https://github.com/arjunkumar/chat-app',
      startDate: '2023-04',
      endDate: '2023-06',
    },
  ],
  
  education: [
    {
      degree: 'Bachelor of Technology',
      institution: 'National Institute of Technology',
      field: 'Computer Science & Engineering',
      startYear: 2021,
      endYear: 2025,
      cgpa: 8.7,
    },
  ],
  
  applications: [
    { id: '1', company: 'Google', position: 'Software Engineer', appliedDate: '2024-05-15', status: 'Shortlisted' },
    { id: '2', company: 'Microsoft', position: 'Associate Developer', appliedDate: '2024-05-10', status: 'In Progress' },
    { id: '3', company: 'Amazon', position: 'SDE Intern', appliedDate: '2024-05-12', status: 'Rejected' },
  ],
  
  interviews: [
    { id: '1', company: 'Google', type: 'Technical', scheduledDate: '2024-06-20', round: 1, status: 'Scheduled' },
    { id: '2', company: 'Microsoft', type: 'HR', scheduledDate: null, round: 1, status: 'Pending' },
  ],
  
  activities: [
    { id: '1', type: 'resume_update', title: 'Resume updated', description: 'Technical skills section enhanced', date: '2024-06-15' },
    { id: '2', type: 'interview_scheduled', title: 'Interview scheduled', description: 'Google Technical Round 1', date: '2024-06-14' },
    { id: '3', type: 'application_submitted', title: 'New application', description: 'Applied for Amazon SDE position', date: '2024-06-10' },
    { id: '4', type: 'profile_completed', title: 'Profile completed', description: '100% profile completion', date: '2024-06-05' },
  ],
  
  coordinatorName: 'Dr. Priya Sharma',
  coordinatorEmail: 'priya.sharma@nit.ac.in',
  coordinatorPhone: '+91 98765 43210',
}

export default function StudentProfilePage({
  params,
}: {
  params: { id: string; studentId: string }
}) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link
            href={`/app/companies/${params.id}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Students</span>
          </Link>
        </div>
      </div>

      {/* Student Hero */}
      <StudentProfileHero student={mockStudent} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabs Content */}
          <div className="lg:col-span-2">
            <StudentWorkspaceTabs activeTab={activeTab} setActiveTab={setActiveTab} student={mockStudent} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <StudentProfileSidebar student={mockStudent} />
          </div>
        </div>
      </div>
    </div>
  )
}
