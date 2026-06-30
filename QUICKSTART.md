# PlacementHub - Quick Start Guide

Welcome to PlacementHub! This guide will help you quickly explore and navigate the campus placement management system.

## 🎯 Key Entry Points

### 1. **Landing Page** (Home)
**URL**: `http://localhost:3000`

This is your entry point to the platform. It showcases:
- ✨ System overview and key features
- 🎯 Call-to-action buttons for quick navigation
- 📋 Details about the student profile system
- 📊 Information about the company dashboard

**Quick Actions**:
- Click "View Sample Profile" to see a student profile
- Click "Go to Dashboard" to access the company dashboard
- Click "PlacementHub" logo to return home anytime

---

### 2. **Student Profile** (Premium Workspace)
**URL**: `http://localhost:3000/app/companies/1/students/1`

A comprehensive 360-degree view of a student's placement journey.

#### Hero Section
- Student name and ID (Arjun Kumar • 21BCS001)
- Department and academic info
- Contact details and social profiles
- CGPA and overall score display
- Placement status badge

#### Tab Navigation (10 Tabs)
| Tab | Status | Content |
|-----|--------|---------|
| Overview | ✅ Full | 8 premium data cards |
| Resume | 📝 Placeholder | Coming soon |
| Skills | 📝 Placeholder | Coming soon |
| Projects | 📝 Placeholder | Coming soon |
| Applications | 📝 Placeholder | Coming soon |
| Interviews | 📝 Placeholder | Coming soon |
| Education | 📝 Placeholder | Coming soon |
| Evaluations | 📝 Placeholder | Coming soon |
| Timeline | 📝 Placeholder | Coming soon |
| Documents | 📝 Placeholder | Coming soon |

#### 8 Premium Overview Cards

1. **Academic Summary**
   - CGPA: 8.70
   - Overall Score: 85/100
   - Resume Score: 92/100
   - Department badge

2. **Candidate Evaluation** (7 Key Metrics)
   - Technical Skills: 86%
   - Coding Proficiency: 88%
   - Communication: 82%
   - Leadership: 85%
   - Adaptability: 80%
   - Analytics: 84%
   - Resume Quality: 92%

3. **Technical Skills** (8 Categories)
   - Frontend Development
   - Backend Development
   - Database Design
   - Cloud Services
   - DevOps
   - Testing & QA
   - Version Control
   - System Design

4. **Placement Status**
   - 8-Stage Journey Visualization
   - Current Stage: Shortlisted
   - Timeline progress indicator

5. **Applications**
   - 3 Total applications
   - 1 Shortlisted (Google)
   - 1 In Progress (Microsoft)
   - 1 Rejected (Amazon)

6. **Interview Progress**
   - 1 Scheduled
   - 0 Completed
   - 1 Pending

7. **Activity Feed**
   - Recent updates timeline
   - Key milestones tracking
   - Activity history

8. **Current Applications**
   - Active applications list
   - Google (Shortlisted)
   - Microsoft (In Progress)

#### Smart Sidebar
- **Placement Coordinator**: Dr. Priya Sharma contact info
- **Online Profiles**: LeetCode, GitHub, Portfolio links
- **Resume Status**: 85% complete with action buttons
- **Projects**: Featured student projects
- **Quick Actions**: Send message, Schedule interview, Download resume

---

### 3. **Company Dashboard**
**URL**: `http://localhost:3000/app/companies/1`

Central management hub for all placement activities.

#### Main Tabs

1. **Overview**
   - Quick statistics
   - Recent activities
   - Key metrics

2. **Timeline**
   - Placement drive timeline
   - Scheduled events
   - Milestones

3. **Placement Drive**
   - Drive management
   - Company information
   - Drive details

4. **Students**
   - All students applying to company
   - Student cards with key info
   - Quick profile access via "View Profile" button
   - Click any student card to see their detailed profile

5. **Communication**
   - Internal messaging
   - Notifications
   - Announcements

---

## 🚀 Suggested Navigation Flow

### For First-Time Users:
1. Start at **Landing Page** (`/`)
2. Scroll through and read about features
3. Click **"View Sample Profile"** to see student profile
4. Explore the 8 cards and sidebar
5. Try clicking different tabs (all lead to placeholders)
6. Use **"Back to Students"** link to return
7. Explore the **Company Dashboard**

### For Specific Task:
- **View a Student Profile**: `/app/companies/1/students/1`
- **Manage Students**: `/app/companies/1` → Students Tab
- **See Dashboard Overview**: `/app/companies/1` → Overview Tab
- **Go Home**: Click PlacementHub logo or navigate to `/`

---

## 📱 Responsive Design

PlacementHub is fully responsive:

| Device | Viewport | Experience |
|--------|----------|------------|
| Mobile | 375x667 | Single column, optimized touch |
| Tablet | 768x1024 | 2-column layout |
| Desktop | 1440x900+ | Full multi-column layout |

---

## 🎨 Color & Design

### Color Palette
- **Primary Purple**: #7c3aed (Main actions, highlights)
- **Secondary Pink**: oklch(52% 0.25 329) (Accents)
- **Light/Dark Modes**: Automatic based on system preference

### Key Design Elements
- Modern, clean interface
- Consistent spacing and typography
- Smooth transitions
- Intuitive navigation
- Professional card-based layouts
- Color-coded status indicators

---

## 📊 Sample Data

### Student Profile Data
- **Name**: Arjun Kumar
- **ID**: 21BCS001
- **Department**: Computer Science & Engineering
- **CGPA**: 8.70/10
- **Placement Status**: Shortlisted
- **Email**: arjun.kumar@nit.ac.in
- **Phone**: +91 98765 43210
- **Social**: GitHub, LinkedIn, Portfolio

### Mock Companies
- Google (Shortlisted)
- Microsoft (In Progress)
- Amazon (Rejected)

### Placement Coordinator
- **Name**: Dr. Priya Sharma
- **Email**: priya.sharma@nit.ac.in
- **Phone**: +91 98765 43210

---

## 🔧 Keyboard Navigation

### Browser Navigation
- **Back**: Use browser back button or "Back to Students" link
- **Home**: Click PlacementHub logo
- **Links**: Click blue underlined text to navigate

### Tab Navigation
- **Click any tab** to switch sections
- **Tabs with ✅** have full content
- **Tabs with 📝** show "Coming Soon" placeholders

---

## 💡 Tips & Tricks

1. **Return to Dashboard**: Click "Back to Students" link on student profile
2. **View Any Student**: Go to Company Dashboard → Students Tab
3. **See Sample Data**: All data is pre-populated for demo
4. **Test Responsiveness**: Resize browser or use mobile device
5. **Explore Cards**: Scroll through overview to see all 8 cards
6. **Check Sidebar**: Look at right sidebar for additional info

---

## ❓ Frequently Asked Questions

**Q: Where's the data stored?**
A: Currently using mock data for demonstration. Ready for backend API integration.

**Q: Can I edit student information?**
A: The UI displays data. Editing functionality is ready for backend integration.

**Q: How do I create a new student profile?**
A: This feature is ready for implementation. Currently, you can view the sample profile.

**Q: Are all tabs functional?**
A: Overview tab is fully implemented. Other tabs show "Coming Soon" placeholders, ready for content.

**Q: Can I download reports?**
A: Export functionality is ready for backend integration.

---

## 🎓 Learning Path

### Beginner
1. Explore landing page
2. View student profile
3. Check all cards on overview tab
4. Review sidebar information

### Intermediate
1. Navigate between dashboard and profiles
2. Understand the tab structure
3. Review data organization
4. Explore company dashboard

### Advanced
1. Study component structure in `/components`
2. Review mock data patterns
3. Plan backend API integration
4. Design data model extensions

---

## 🚀 Next Steps

- Integrate with backend API
- Implement real data fetching
- Add user authentication
- Enable editing functionality
- Add more placement drives
- Implement notifications
- Create advanced analytics
- Add export/import features

---

## 📞 Support

For questions:
1. Check this guide first
2. Review component documentation
3. Check README.md for project details
4. Review code comments in components

---

**Happy exploring! 🎉**

Visit the [README.md](./README.md) for detailed technical documentation.
