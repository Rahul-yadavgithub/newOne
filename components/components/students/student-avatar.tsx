import { cn } from '@/lib/utils'

interface StudentAvatarProps {
  name: string
  initials: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function StudentAvatar({
  name,
  initials,
  size = 'md',
  className,
}: StudentAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  }

  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-amber-500',
    'bg-green-500',
    'bg-red-500',
  ]

  const colorIndex = initials.charCodeAt(0) % colors.length
  const bgColor = colors[colorIndex]

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg font-semibold text-white',
        sizeClasses[size],
        bgColor,
        className
      )}
      title={name}
    >
      {initials}
    </div>
  )
}
