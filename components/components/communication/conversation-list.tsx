'use client'

import { Search, Filter } from 'lucide-react'
import { useState } from 'react'
import { ConversationCard, type ConversationCardProps } from './conversation-card'

interface ConversationListProps {
  conversations: ConversationCardProps[]
  selectedId?: string
  onSelect: (id: string) => void
}

export function ConversationList({ conversations, selectedId, onSelect }: ConversationListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')

  const filtered = conversations.filter((conv) => {
    const matchesSearch = 
      conv.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.subject.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPriority = priorityFilter === 'all' || conv.priority === priorityFilter

    return matchesSearch && matchesPriority
  })

  return (
    <div className="w-80 bg-background border-r border-border h-full flex flex-col overflow-hidden">
      {/* Search & Filter */}
      <div className="p-4 border-b border-border space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Priority Filter */}
        <div className="flex gap-2">
          {(['all', 'high', 'medium', 'low'] as const).map((priority) => (
            <button
              key={priority}
              onClick={() => setPriorityFilter(priority)}
              className={`text-xs px-2.5 py-1.5 rounded font-medium transition-colors ${
                priorityFilter === priority
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {priority === 'all' ? 'All' : priority.charAt(0).toUpperCase() + priority.slice(1)}
            </button>
          ))}
        </div>

        <div className="text-xs text-muted-foreground">
          Showing {filtered.length} of {conversations.length} conversations
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filtered.length > 0 ? (
          filtered.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              {...conversation}
              isSelected={selectedId === conversation.id}
              onClick={() => onSelect(conversation.id)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <Filter className="text-muted-foreground mb-2" size={32} />
            <p className="text-sm font-medium text-foreground">No conversations found</p>
            <p className="text-xs text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
