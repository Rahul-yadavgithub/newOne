# PlacementHub - Complete Navigation Guide

## 🗺️ URL Map & Navigation

### Root URLs

#### Landing Page (Home)
```
URL: http://localhost:3000
Type: Public
Description: Main entry point showcasing platform features
Features:
  - Hero section
  - Premium features showcase
  - Student profile preview
  - Company dashboard overview
  - Call-to-action buttons
Accessible From: 
  - Logo click (from any page)
  - Direct URL
Links To:
  - /app/companies/1/students/1 (View Sample Profile)
  - /app/companies/1 (Go to Dashboard)
```

---

### Company Management

#### Company Dashboard
```
URL: http://localhost:3000/app/companies/1
Type: Protected (Future)
Description: Central hub for managing company placements
Tabs Available:
  1. Overview - Quick statistics and key metrics
  2. Timeline - Placement drive timeline and milestones
  3. Placement Drive - Drive management and details
  4. Students - All students applying to this company
  5. Communication - Messaging and notifications

Navigation:
  - From Landing Page: "Go to Dashboard" button
  - Direct URL access
  - From Student Profile: "Back to Students" link
```

---

### Student Management

#### Student Profile (Main Page)
```
URL: http://localhost:3000/app/companies/1/students/1
Type: Protected (Future)
Description: Complete student profile and placement workspace
Description: Complete student profile and placement workspace
Param: 
  - [id] = Company ID (1)
  - [studentId] = Student ID (1)

Main Sections:
  1. Hero Section
     - Student name and ID
     - Department and academic info
     - Contact details
     - CGPA and Score display
     - Placement status

  2. Tab Navigation (10 Tabs)
     ✅ IMPLEMENTED TABS:
       - Overview (Full featured with 8 cards)
     
     📝 PLACEHOLDER TABS:
       - Resume (Coming Soon)
       - Skills (Coming Soon)
       - Projects (Coming Soon)
       - Applications (Coming Soon)
       - Interviews (Coming Soon)
       - Education (Coming Soon)
       - Evaluations (Coming Soon)
       - Timeline (Coming Soon)
       - Documents (Coming Soon)

  3. Sidebar
     - Placement Coordinator info
     - Online Profiles (LeetCode, GitHub, Portfolio)
     - Resume Status
     - Projects
     - Quick Action Buttons

Navigation:
  - From Landing Page: "View Sample Profile" button
  - From Company Dashboard: 
    * Students Tab → Click any "View Profile" button
    * Students Tab → Click student card
  - Direct URL access
  - Back to Dashboard: "Back to Students" link (top left)
```

---

## 📊 Component Hierarchy

### Landing Page (`/`)
```
RootLayout
└── Page Component
    ├── Header
    │   ├── Logo (links to /)
    │   └── Dashboard Button (links to /app/companies/1)
    ├── Hero Section
    │   ├── Tagline
    │   ├── Main Heading
    │   ├── Description
    │   └── CTA Buttons
    ├── Premium Features Section
    │   ├── Student Profiles Card
    │   ├── Analytics & Insights Card
    │   └── Performance Metrics Card
    ├── Advanced Student Profile Section
    │   ├── Features List
    │   └── CTA Button
    ├── Company Dashboard Section
    │   ├── Dashboard Preview
    │   └── Features List
    ├── Final CTA Section
    └── Footer
```

### Student Profile (`/app/companies/[id]/students/[studentId]`)
```
RootLayout
└── Page Component
    ├── Hero Component
    │   ├── Back Link (to /app/companies/[id])
    │   ├── Student Avatar
    │   ├── Student Info
    │   ├── Contact Details
    │   ├── Social Links
    │   └── Score Display
    ├── Workspace Tabs
    │   ├── Tab Navigation (10 tabs)
    │   └── Tab Content
    │       ├── Overview Tab (Full)
    │       │   ├── Academic Summary Card
    │       │   ├── Candidate Evaluation Card
    │       │   ├── Technical Skills Card
    │       │   ├── Placement Status Card
    │       │   ├── Applications Card
    │       │   ├── Interview Progress Card
    │       │   ├── Activity Feed Card
    │       │   └── Current Applications Card
    │       └── Other Tabs (Placeholder)
    └── Sidebar
        ├── Placement Coordinator Section
        ├── Online Profiles Section
        ├── Resume Status Section
        ├── Projects Section
        └── Quick Actions Section
```

---

## 🔗 Navigation Flow Examples

### First-Time User Flow
```
1. Landing Page (/)
   ↓ (Scroll & Read)
2. Click "View Sample Profile"
   ↓
3. Student Profile (/app/companies/1/students/1)
   ↓ (Explore cards)
4. Click on different tabs
   ↓ (See placeholders)
5. Click "Back to Students" link
   ↓
6. Company Dashboard (/app/companies/1)
   ↓ (Explore Students Tab)
7. Click "View Profile" on student card
   ↓
8. Student Profile (/app/companies/1/students/1)
```

### Direct Navigation Flow
```
1. Landing Page (/)
   ↓ (Click "Go to Dashboard")
2. Company Dashboard (/app/companies/1)
   ↓ (Click on Students Tab)
3. Students Tab with all student cards
   ↓ (Click "View Profile" button)
4. Student Profile (/app/companies/1/students/1)
```

### Tab Exploration Flow
```
Student Profile (/app/companies/1/students/1)
   ├─ Click "Overview" → Full featured overview (Current)
   ├─ Click "Resume" → Placeholder (Resume Section)
   ├─ Click "Skills" → Placeholder (Skills Section)
   ├─ Click "Projects" → Placeholder (Projects Section)
   ├─ Click "Applications" → Placeholder (Applications Section)
   ├─ Click "Interviews" → Placeholder (Interviews Section)
   ├─ Click "Education" → Placeholder (Education Section)
   ├─ Click "Evaluations" → Placeholder (Evaluations Section)
   ├─ Click "Timeline" → Placeholder (Timeline Section)
   └─ Click "Documents" → Placeholder (Documents Section)
```

---

## 🎯 Quick Navigation Reference

### Main Pages
| Name | URL | Purpose |
|------|-----|---------|
| Home | `/` | Entry point, feature showcase |
| Company Dashboard | `/app/companies/1` | Manage company placements |
| Student Profile | `/app/companies/1/students/1` | Student details & placement tracking |

### Companies
- **Sample Company ID**: `1`
- **URL Pattern**: `/app/companies/[id]`
- **Example**: `/app/companies/1`

### Students
- **Sample Student ID**: `1`
- **URL Pattern**: `/app/companies/[id]/students/[studentId]`
- **Example**: `/app/companies/1/students/1`

---

## 🔘 Button Navigation Map

### Landing Page Buttons
```
Header:
  - "PlacementHub" Logo → / (Landing Page)
  - "Dashboard" Button → /app/companies/1 (Company Dashboard)

Hero Section:
  - "View Sample Profile" → /app/companies/1/students/1
  - "Go to Dashboard" → /app/companies/1

Features Section:
  - "Explore Student Profile" → /app/companies/1/students/1

Student Profile Section:
  - "Explore Student Profile" → /app/companies/1/students/1

Dashboard Section:
  - "Visit Dashboard" → /app/companies/1

CTA Section:
  - "Explore Student Profile" → /app/companies/1/students/1
  - "Go to Company Dashboard" → /app/companies/1

Footer:
  - (No navigation buttons)
```

### Company Dashboard Buttons
```
Students Tab:
  - "View Profile" (on each student card) → /app/companies/1/students/[studentId]

Other Tabs:
  - (Placeholder content - no navigation)
```

### Student Profile Buttons
```
Header:
  - "Back to Students" Link → /app/companies/1

Tabs:
  - All tab buttons stay on same page (client-side switching)

Sidebar:
  - Online Profile Links → External URLs (LeetCode, GitHub, Portfolio)
  - Quick Action Buttons → Placeholder (no navigation)
```

---

## 🧭 Breadcrumb Navigation

### Student Profile Breadcrumb
```
Back to Students > Company Dashboard > Students Tab > [Student Name]
```

Clicking "Back to Students" navigates:
```
/app/companies/1/students/1 → /app/companies/1 (Students Tab)
```

---

## 📱 Mobile Navigation Adjustments

### Mobile Landing Page
- Navigation stays in header (sticky)
- Buttons stack vertically
- All sections remain accessible via scrolling
- Responsive typography

### Mobile Student Profile
- Hero section stacks vertically
- Tabs scroll horizontally
- Cards display in single column
- Sidebar moves to bottom (on very small screens)
- Back link stays accessible

### Mobile Dashboard
- Tabs stack or scroll horizontally
- Student cards display in single column
- Full functionality maintained

---

## 🔐 Route Protection (Ready for Implementation)

Currently all routes are public. To implement authentication:

```typescript
// Routes that should be protected:
- /app/companies/[id]
- /app/companies/[id]/students/[studentId]
- /app/companies/[id]/students
- (All /app/* routes)

// Public routes:
- / (Landing Page)
- /login (Ready for implementation)
- /signup (Ready for implementation)
```

---

## 🔄 URL Parameter Patterns

### Company Routes
```
Pattern: /app/companies/[id]
Example: /app/companies/1
Param:
  - id: Company identifier (string or number)
```

### Student Routes
```
Pattern: /app/companies/[id]/students/[studentId]
Example: /app/companies/1/students/1
Params:
  - id: Company identifier
  - studentId: Student identifier
```

---

## 📋 Navigation Checklist

### Quick Start
- [ ] Visit landing page: `http://localhost:3000`
- [ ] Read platform description
- [ ] Click "View Sample Profile" button
- [ ] Explore student profile page
- [ ] Check all 8 overview cards
- [ ] Review sidebar information
- [ ] Click different tabs to see placeholders
- [ ] Use "Back to Students" to return
- [ ] Visit company dashboard
- [ ] Explore students tab

### Deep Dive
- [ ] Test all navigation buttons
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Check breadcrumb navigation
- [ ] Test tab switching on profile
- [ ] Verify external links (LinkedIn, GitHub, Portfolio)
- [ ] Review mock data in components
- [ ] Check console for any errors
- [ ] Test back button functionality

---

## 🆘 Troubleshooting Navigation

### Page Not Found
**Issue**: 404 error when navigating to a URL
**Solution**: 
- Check URL format matches pattern
- Verify parameters are correct
- Ensure dev server is running

### Links Not Working
**Issue**: Clicking buttons doesn't navigate
**Solution**:
- Check browser console for JavaScript errors
- Verify Next.js dev server is running
- Try browser refresh
- Clear browser cache

### Infinite Loops
**Issue**: Navigation loops between pages
**Solution**:
- Likely won't happen with current implementation
- Check if "Back to Students" link exists
- Use browser back button as fallback

### Mobile Navigation Issues
**Issue**: Buttons or navigation unresponsive on mobile
**Solution**:
- Ensure viewport is set correctly
- Check for CSS overflow issues
- Try landscape orientation
- Clear browser cache

---

## 📞 Support

For navigation help:
1. Check this guide
2. Review URLs in code: `/app/page.tsx` and `/components`
3. Check Next.js documentation for routing
4. Review breadcrumb patterns in components

---

**Happy navigating! 🎉**

Use this guide for quick reference. Visit [QUICKSTART.md](./QUICKSTART.md) for feature details and [README.md](./README.md) for technical information.
