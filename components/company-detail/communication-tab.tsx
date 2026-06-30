'use client'

import { useState } from 'react'
import { CommunicationSidebar } from '@/components/communication/communication-sidebar'
import { ConversationList } from '@/components/communication/conversation-list'
import { ConversationViewer } from '@/components/communication/conversation-viewer'
import { CommunicationStats } from '@/components/communication/communication-stats'
import { ComposeModal } from '@/components/communication/compose-modal'
import type { ConversationCardProps } from '@/components/communication/conversation-card'

const mockConversations: ConversationCardProps[] = [
  {
    id: '1',
    company: 'Google India',
    sender: 'Sarah Johnson',
    subject: 'Placement Drive Confirmation - Summer 2024',
    preview: 'Thank you for confirming the placement drive...',
    timestamp: '2h ago',
    unread: true,
    starred: true,
    avatar: 'GI',
    priority: 'high',
  },
  {
    id: '2',
    company: 'Microsoft India',
    sender: 'Rajesh Kumar',
    subject: 'JNF Received - Action Required',
    preview: 'We have received your JNF. Please review the attached...',
    timestamp: '4h ago',
    unread: true,
    starred: false,
    avatar: 'MI',
    priority: 'high',
  },
  {
    id: '3',
    company: 'Amazon India',
    sender: 'Priya Sharma',
    subject: 'Meeting Scheduled - Drive Planning',
    preview: 'The meeting is scheduled for tomorrow at 2 PM IST...',
    timestamp: '1d ago',
    unread: false,
    starred: false,
    avatar: 'AI',
    priority: 'medium',
  },
  {
    id: '4',
    company: 'JPMorgan Chase',
    sender: 'David Smith',
    subject: 'Student Database - Ready for Review',
    preview: 'The student database has been uploaded. Please review...',
    timestamp: '2d ago',
    unread: false,
    starred: true,
    avatar: 'JP',
    priority: 'medium',
  },
  {
    id: '5',
    company: 'Infosys Limited',
    sender: 'Arun Patel',
    subject: 'Interview Schedule Attached',
    preview: 'Attached is the detailed interview schedule...',
    timestamp: '3d ago',
    unread: false,
    starred: false,
    avatar: 'IL',
    priority: 'low',
  },
]

const mockEmails = [
  {
    id: '1',
    sender: 'Sarah Johnson (Google)',
    timestamp: '2 hours ago',
    subject: 'Placement Drive Confirmation - Summer 2024',
    body: 'Hello,\n\nThank you for confirming the placement drive scheduled for June. We are excited to participate in your campus recruitment program.\n\nPlease find the JNF attached. We will need to finalize the details by next week.\n\nBest regards,\nSarah Johnson\nRecruiter, Google India',
    isOutgoing: false,
    attachments: [
      { id: '1', name: 'Google_JNF_2024.pdf', size: '250 KB', type: 'pdf' },
    ],
  },
  {
    id: '2',
    sender: 'You',
    timestamp: '1 hour ago',
    subject: 'Re: Placement Drive Confirmation - Summer 2024',
    body: 'Hi Sarah,\n\nThank you for sending the JNF. We have reviewed it and everything looks good. The details have been forwarded to all departments.\n\nWe will send you the student database by tomorrow end of day.\n\nRegards,\nPlacement Cell',
    isOutgoing: true,
    quoted: 'Thank you for confirming the placement drive scheduled for June. We are excited to participate in your campus recruitment program.',
  },
  {
    id: '3',
    sender: 'Sarah Johnson (Google)',
    timestamp: '30 minutes ago',
    subject: 'Re: Placement Drive Confirmation - Summer 2024',
    body: 'Perfect! We look forward to receiving the student database.\n\nIn the meantime, we will prepare our technical round question paper.\n\nThank you!',
    isOutgoing: false,
    quoted: 'We will send you the student database by tomorrow end of day.',
  },
]

export function CommunicationTab() {
  const [activeFolder, setActiveFolder] = useState('inbox')
  const [selectedConversation, setSelectedConversation] = useState('1')
  const [isComposeOpen, setIsComposeOpen] = useState(false)

  const selected = mockConversations.find((c) => c.id === selectedConversation)

  return (
    <div className="flex h-[calc(100vh-280px)] bg-background rounded-lg overflow-hidden border border-border">
      {/* Sidebar */}
      <CommunicationSidebar
        activeFolder={activeFolder}
        onFolderChange={setActiveFolder}
        onComposeClick={() => setIsComposeOpen(true)}
      />

      {/* Conversation List */}
      <ConversationList
        conversations={mockConversations}
        selectedId={selectedConversation}
        onSelect={setSelectedConversation}
      />

      {/* Conversation Viewer */}
      {selected && (
        <ConversationViewer
          company={selected.company}
          subject={selected.subject}
          emails={mockEmails}
        />
      )}

      {/* Stats Sidebar */}
      <CommunicationStats
        totalEmails={127}
        pendingReplies={3}
        averageResponseTime="4.2"
        unreadCount={6}
      />

      {/* Compose Modal */}
      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        onSend={(data) => console.log('Send:', data)}
      />
    </div>
  )
}
