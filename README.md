# PlacementHub - Campus Placement Management System

A modern, comprehensive platform for managing student placements with advanced analytics, profile management, and seamless workflow integration.

## 🌟 Overview

PlacementHub is a full-featured campus placement management system designed to streamline the recruitment process and provide detailed insights into student placements. The platform includes a premium student profile workspace with comprehensive analytics, interview tracking, and application management.

## 🚀 Features

### Landing Page
- **Modern Hero Section**: Eye-catching introduction to the platform
- **Premium Features Showcase**: Highlights key system capabilities
- **Student Profile Preview**: Demonstrates the advanced profile system
- **Company Dashboard Overview**: Shows dashboard features and capabilities
- **Call-to-Action Sections**: Easy navigation to key areas

### Student Profile Workspace

#### 8 Premium Overview Cards
1. **Academic Summary** - CGPA, overall score, resume score, department info
2. **Candidate Evaluation** - 7-point metric system (Technical Skills, Coding Proficiency, Communication, Leadership, Adaptability, Analytics, Resume)
3. **Technical Skills** - 8 skill categories with proficiency bars
4. **Placement Status** - 8-stage placement journey with timeline
5. **Applications** - Application counts and company details
6. **Interview Progress** - Interview status tracking
7. **Activity Feed** - Real-time activity timeline
8. **Current Applications** - Active applications with status

#### 10 Tab Navigation
- **Overview** - Comprehensive profile dashboard
- **Resume** - Resume section placeholder
- **Skills** - Skills section placeholder
- **Projects** - Project showcase placeholder
- **Applications** - Application management placeholder
- **Interviews** - Interview tracking placeholder
- **Education** - Education details placeholder
- **Evaluations** - Candidate evaluations placeholder
- **Timeline** - Placement timeline placeholder
- **Documents** - Documents section placeholder

#### Smart Sidebar
- **Placement Coordinator** - Contact information and details
- **Online Profiles** - Links to LeetCode, GitHub, Portfolio
- **Resume Status** - Resume completion percentage
- **Projects** - Featured student projects
- **Quick Actions** - One-click action buttons

### Company Dashboard
- **Students Tab Integration** - View all students applying to company
- **Placement Timeline** - Track placement progress
- **Drive Management** - Manage placement drives
- **Communication Tools** - Built-in communication features

## 🎨 Design System

### Colors
- **Primary**: #7c3aed (Purple)
- **Primary Light**: oklch(69% 0.22 290)
- **Secondary**: oklch(52% 0.25 329)
- **Background**: Light/Dark mode support
- **Muted**: oklch(40% 0.02 290)

### Typography
- **Heading Font**: Geist (var)
- **Body Font**: Geist (var)
- **Mono Font**: Geist Mono

### Components
- Built with shadcn/ui
- Lucide icons for visual elements
- Tailwind CSS for styling
- Responsive design (Mobile, Tablet, Desktop)

## 📁 Project Structure

```
/app
  ├── page.tsx (Landing Page)
  ├── layout.tsx (Root Layout)
  ├── globals.css (Global Styles)
  └── /app
      └── /companies
          ├── [id]
          │   ├── page.tsx (Company Dashboard)
          │   ├── /students
          │   │   └── [studentId]
          │   │       └── page.tsx (Student Profile)
          │   └── ... (other routes)

/components
  ├── /student-profile
  │   ├── student-profile-hero.tsx (Hero Section)
  │   ├── student-profile-sidebar.tsx (Sidebar)
  │   ├── student-workspace-tabs.tsx (Tab Navigation)
  │   ├── /tabs
  │   │   ├── overview-tab.tsx (Overview Tab)
  │   │   └── tab-placeholder.tsx (Tab Placeholders)
  │   └── /cards
  │       ├── academic-summary-card.tsx
  │       ├── candidate-evaluation-card.tsx
  │       ├── technical-skills-card.tsx
  │       ├── placement-status-card.tsx
  │       ├── applications-card.tsx
  │       ├── interview-progress-card.tsx
  │       ├── activity-feed-card.tsx
  │       └── current-applications-card.tsx
  ├── /company-detail
  │   └── students-tab.tsx (Students Tab)
  ├── /students
  │   └── student-card.tsx (Student Card Component)
  └── /ui (shadcn/ui components)
```

## 🔍 Key Pages

### Landing Page (`/`)
The main entry point showcasing PlacementHub's features and capabilities.

**Quick Links:**
- "View Sample Profile" → Student profile demo
- "Go to Dashboard" → Company dashboard

### Student Profile (`/app/companies/[id]/students/[studentId]`)
Complete student information and placement tracking workspace.

**Features:**
- Hero section with student information
- Tab-based navigation system
- 8 premium overview cards
- Smart sidebar with quick actions
- Responsive design

### Company Dashboard (`/app/companies/[id]`)
Central hub for managing company placements and student interactions.

**Tabs:**
- Overview
- Timeline
- Placement Drive
- Students
- Communication

## 🎯 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
http://localhost:3000
```

### Navigation

1. **Start at Landing Page** - `http://localhost:3000`
2. **View Sample Student Profile** - `http://localhost:3000/app/companies/1/students/1`
3. **Visit Company Dashboard** - `http://localhost:3000/app/companies/1`

## 📊 Mock Data

The system includes comprehensive mock data for demonstration:

### Sample Student (Arjun Kumar)
- **ID**: 21BCS001
- **Department**: Computer Science & Engineering
- **CGPA**: 8.70
- **Score**: 85/100
- **Skills**: 8 technical skills with proficiency levels
- **Applications**: Multiple company applications
- **Interviews**: Interview tracking and scheduling
- **Projects**: Featured student projects

### Student Evaluation Metrics
- Technical Skills: 86%
- Coding Proficiency: 88%
- Communication: 82%
- Leadership: 85%
- Adaptability: 80%
- Analytics: 84%
- Resume: 92%

## 🛠 Technologies Used

- **Framework**: Next.js 16 (App Router)
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Icons
- **Typography**: Geist Font Family
- **Language**: TypeScript
- **Package Manager**: pnpm

## ✨ Highlights

### Premium Features
- ✅ Comprehensive student profiles
- ✅ 7-point candidate evaluation system
- ✅ Technical skills assessment with proficiency tracking
- ✅ Placement timeline visualization (8-stage journey)
- ✅ Activity feed with real-time updates
- ✅ Multiple application tracking
- ✅ Interview progress monitoring
- ✅ Online profile integration (LeetCode, GitHub, Portfolio)
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Beautiful UI with consistent design language

### User Experience
- 🎨 Modern, clean design
- 📱 Fully responsive layout
- ⚡ Fast page loads with optimized components
- 🧭 Intuitive navigation
- 🎯 Clear information hierarchy
- 🔄 Smooth transitions and interactions

## 🚀 Future Enhancements

- Backend API integration for real data
- User authentication and authorization
- Advanced analytics dashboard
- Bulk student imports
- Email notifications
- Interview scheduling system
- Document management
- Integration with placement drives
- Advanced filtering and search
- Export reports functionality

## 📝 Notes

- The project includes mock data for demonstration purposes
- Tab placeholders are ready for content expansion
- All components are modular and reusable
- The design system follows modern best practices
- Responsive design works seamlessly across all devices

## 🤝 Integration Points

The student profile page is fully integrated with:
- **Company Dashboard** - Students tab shows all students and links to profiles
- **Navigation** - "Back to Students" link returns to company dashboard
- **URL Structure** - Clean, predictable routing with params

## 📞 Support

For questions or improvements, refer to the component documentation in individual files. Each component includes comprehensive JSDoc comments explaining its props and functionality.

---

**PlacementHub** - Making campus placements simple, transparent, and effective.
