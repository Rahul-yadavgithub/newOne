'use client'

import { Bell, Search, User } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Date()
    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setCurrentDate(formatted)
  }, [])

  return (
    <nav className="sticky top-0 left-0 right-0 z-30 bg-background border-b border-border">
      <div className="h-20 px-6 flex items-center justify-between md:ml-64">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, <span className="text-primary">Admin</span>
          </h1>
          <p className="text-sm text-muted-foreground">{currentDate}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-56">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-0 outline-none text-sm w-full placeholder:text-muted-foreground"
            />
          </div>

          {/* Notification Icon */}
          <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
            <Bell size={20} className="text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>

          {/* User Profile Icon */}
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
              AR
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
