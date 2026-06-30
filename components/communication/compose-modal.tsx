'use client'

import { X, Send, Paperclip, RotateCw } from 'lucide-react'
import { useState } from 'react'

interface ComposeModalProps {
  isOpen: boolean
  onClose: () => void
  onSend: (data: any) => void
}

export function ComposeModal({ isOpen, onClose, onSend }: ComposeModalProps) {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    body: '',
    template: 'none',
  })

  const templates = [
    { id: 'none', label: 'Blank' },
    { id: 'invitation', label: 'Send Invitation' },
    { id: 'jnf', label: 'Share JNF' },
    { id: 'meeting', label: 'Schedule Meeting' },
    { id: 'reminder', label: 'Send Reminder' },
    { id: 'offer', label: 'Offer Letter' },
    { id: 'followup', label: 'Follow Up' },
    { id: 'thanks', label: 'Thank You' },
  ]

  const handleTemplateSelect = (templateId: string) => {
    const templates: Record<string, { subject: string; body: string }> = {
      invitation: {
        subject: 'Placement Drive Invitation',
        body: 'Dear HR Team,\n\nWe are delighted to invite your esteemed organization for our campus placement drive.\n\nLooking forward to your positive response.',
      },
      jnf: {
        subject: 'Job Notification Form (JNF) - Attached',
        body: 'Please find the JNF attached for your review. Please confirm receipt and provide your feedback at the earliest.',
      },
      meeting: {
        subject: 'Meeting Request',
        body: 'We would like to schedule a meeting to discuss the upcoming placement drive. Please suggest your available slots.',
      },
      reminder: {
        subject: 'Reminder - Placement Drive',
        body: 'This is a friendly reminder about the upcoming placement drive scheduled for [DATE].',
      },
    }

    if (templateId !== 'none' && templates[templateId]) {
      setFormData({
        ...formData,
        template: templateId,
        subject: templates[templateId].subject,
        body: templates[templateId].body,
      })
    }
  }

  const handleSend = () => {
    if (formData.to && formData.subject && formData.body) {
      onSend(formData)
      setFormData({ to: '', subject: '', body: '', template: 'none' })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Compose Email</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Template Selection */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Use Template</label>
            <div className="grid grid-cols-4 gap-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                  className={`px-3 py-2 text-xs rounded font-medium transition-colors ${
                    formData.template === template.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {template.label}
                </button>
              ))}
            </div>
          </div>

          {/* To Field */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">To</label>
            <input
              type="email"
              placeholder="recipient@company.com"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Subject</label>
            <input
              type="text"
              placeholder="Email subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Body Field */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Message</label>
            <textarea
              placeholder="Write your message here..."
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              rows={8}
            />
          </div>

          {/* Attach & Schedule */}
          <div className="flex gap-4 text-sm">
            <button className="flex items-center gap-2 px-3 py-2 text-foreground hover:bg-muted rounded transition-colors">
              <Paperclip size={16} />
              Attach Files
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-foreground hover:bg-muted rounded transition-colors">
              <RotateCw size={16} />
              Schedule
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 flex items-center justify-between bg-muted/20">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!formData.to || !formData.subject || !formData.body}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
