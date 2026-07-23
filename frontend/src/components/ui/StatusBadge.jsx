import React from 'react'
import { cn } from '../../utils'

// Small pill used for statuses everywhere (leads, claims, trades, campaigns).
// Callers pass the color classes since the palette differs by status.
const StatusBadge = ({ children, className }) => (
  <span className={cn('text-xs px-2 py-1 rounded-full', className)}>
    {children}
  </span>
)

export default StatusBadge
