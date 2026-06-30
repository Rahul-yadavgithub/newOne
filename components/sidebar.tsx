'use client'

import {
  BarChart3,
  Bell,
  Calendar,
  Cog,
  GraduationCap,
  Home,
  LogOut,
  Menu,
  Users,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '#', active: true },
  { icon: Users, label: 'Companies', href: '#' },
  { icon: GraduationCap, label: 'Placement Drives', href: '#' },
  { icon: Users, label: 'Students', href: '#' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Calendar, label: 'Calendar', href: '#' },
  { icon: Bell, label: 'Notifications', href: '#' },
  { icon: Cog, label: 'Settings', href: '#' },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Header */}
        <div className="h-20 flex items-center px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">TPO</span>
            </div>
            <span className="font-semibold text-sidebar-foreground">TPO Hub</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-6 py-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
              AR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Admin Rani
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                head.tpo@university.edu
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all group ${
                  item.active
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-sidebar-border bg-sidebar">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors text-sm font-medium">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
