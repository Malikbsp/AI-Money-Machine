import React from 'react'
import { cn } from '../../utils'

// Base surface used across the dashboard for panels, stat tiles and list
// containers: bg-secondary/30 + border + rounded-xl + padding.
const Card = ({ children, className, hover = false, as: Component = 'div', ...props }) => {
  return (
    <Component
      className={cn(
        'bg-secondary/30 border border-secondary/50 rounded-xl p-6',
        hover && 'hover:border-primary/20 transition-all',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card
