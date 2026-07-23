import React from 'react'
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { cn } from '../../utils'

const TaskItem = ({ title, priority, time, status }) => {
  const priorityColors = {
    high: 'text-red-400 bg-red-400/10',
    medium: 'text-yellow-400 bg-yellow-400/10',
    low: 'text-green-400 bg-green-400/10',
  }

  const statusIcons = {
    completed: CheckCircle,
    in_progress: Clock,
    pending: AlertCircle,
  }

  const StatusIcon = statusIcons[status]

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all cursor-pointer">
      <div className="flex items-center gap-3 flex-1">
        <StatusIcon className={cn(
          "w-4 h-4",
          status === 'completed' ? 'text-green-400' :
          status === 'in_progress' ? 'text-yellow-400' : 'text-muted-foreground'
        )} />
        <div className="flex-1">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
      </div>
      <span className={cn(
        "text-xs px-2 py-1 rounded-full",
        priorityColors[priority]
      )}>
        {priority}
      </span>
    </div>
  )
}

export default TaskItem
