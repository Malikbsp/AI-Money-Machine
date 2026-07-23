import React from 'react'
import { cn } from '../../utils'

// The "flex items-center justify-between p-3 bg-secondary/20 rounded-lg"
// row pattern repeated across leads, claims, trades, interactions, tasks
// and campaigns lists.
const ListRow = ({ children, className }) => (
  <div className={cn('flex items-center justify-between p-3 bg-secondary/20 rounded-lg', className)}>
    {children}
  </div>
)

export default ListRow
