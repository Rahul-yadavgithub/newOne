'use client'

import { Send, Paperclip, Type, Clock } from 'lucide-react'
import { useState } from 'react'

interface ReplyBoxProps {
  onSend: (message: string) => void
  isLoading?: boolean
}

export function ReplyBox({ onSend, isLoading = false }: ReplyBoxProps) {
  const [message, setMessage] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSend = () => {
    if (message.trim()) {
      onSend(message)
      setMessage('')
    }
  }

  return (
    <div className="border-t border-border bg-card p-4 space-y-3">
      {/* Subject/Context */}
      <div className="text-xs text-muted-foreground">
        Re: Placement Drive Invitation - Position Details
      </div>

      {/* Compose Area */}
      <div
        onClick={() => setIsExpanded(true)}
        className="rounded-lg border border-border bg-background focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all"
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your reply here... (Shift+Enter for new line)"
          className="w-full p-3 bg-transparent text-sm resize-none outline-none min-h-24"
          rows={3}
        />

        {isExpanded && (
          <div className="border-t border-border bg-muted/20 p-3 flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
                <Paperclip size={16} />
              </button>
              <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
                <Type size={16} />
              </button>
              <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
                <Clock size={16} />
              </button>
            </div>
            <button
              onClick={handleSend}
              disabled={!message.trim() || isLoading}
              className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {!isExpanded && (
        <div className="flex gap-2 text-xs text-muted-foreground">
          <button className="p-1 hover:bg-muted rounded transition-colors">
            <Paperclip size={14} />
          </button>
          <span className="text-xs">Attach files • Use formatting • Schedule send</span>
        </div>
      )}
    </div>
  )
}
