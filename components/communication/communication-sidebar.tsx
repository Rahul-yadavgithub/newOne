'use client'

import { Mail, Send, FileText, Zap, Clock, ArchiveX, Settings2, Plus } from 'lucide-react'

interface CommunicationSidebarProps {
  activeFolder: string
  onFolderChange: (folder: string) => void
  onComposeClick: () => void
}

export function CommunicationSidebar({ activeFolder, onFolderChange, onComposeClick }: CommunicationSidebarProps) {
  const folders = [
    { id: 'inbox', label: 'Inbox', icon: Mail, count: 24, color: 'bg-blue-100 text-blue-700' },
    { id: 'sent', label: 'Sent', icon: Send, count: 42, color: 'bg-green-100 text-green-700' },
    { id: 'drafts', label: 'Drafts', icon: FileText, count: 3, color: 'bg-amber-100 text-amber-700' },
    { id: 'templates', label: 'Templates', icon: Zap, count: 8, color: 'bg-purple-100 text-purple-700' },
    { id: 'scheduled', label: 'Scheduled', icon: Clock, count: 2, color: 'bg-orange-100 text-orange-700' },
    { id: 'archive', label: 'Archive', icon: ArchiveX, count: 156, color: 'bg-slate-100 text-slate-700' },
  ]

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col overflow-hidden">
      {/* Compose Button */}
      <div className="p-4 border-b border-border">
        <button
          onClick={onComposeClick}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus size={18} />
          Compose
        </button>
      </div>

      {/* Folder Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {folders.map((folder) => {
          const Icon = folder.icon
          const isActive = activeFolder === folder.id
          return (
            <button
              key={folder.id}
              onClick={() => onFolderChange(folder.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span className="text-sm font-medium">{folder.label}</span>
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                isActive ? 'bg-primary-foreground/20' : folder.color
              }`}>
                {folder.count}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Settings */}
      <div className="p-3 border-t border-border">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-muted transition-colors">
          <Settings2 size={18} />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </div>
  )
}
