import React from 'react'
import { cn } from '../../utils'

// Thin gradient progress track used by AIAgentCard (CPU/Memory) and the
// Design Agent's project-progress list.
const ProgressBar = ({
  percent,
  gradientClass = 'from-blue-500 to-purple-500',
  animated = true,
  trackClassName,
  barClassName,
}) => {
  const width = typeof percent === 'number' ? `${percent}%` : percent

  return (
    <div className={cn('w-full h-1.5 bg-secondary rounded-full overflow-hidden', trackClassName)}>
      <div
        className={cn(
          'h-full rounded-full bg-gradient-to-r',
          gradientClass,
          animated && 'transition-all',
          barClassName
        )}
        style={{ width }}
      />
    </div>
  )
}

export default ProgressBar
