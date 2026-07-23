import React from 'react'
import ListCard from '../tables/ListCard'
import { cn } from '../../utils'

const RecentLogsPanel = ({ logs, title = 'Recent AI Logs' }) => (
  <ListCard
    title={title}
    titleClassName="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4"
  >
    {logs.map((log, index) => (
      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
        <div className={cn(
          "w-1.5 h-1.5 rounded-full mt-1.5",
          log.type === 'info' ? 'bg-blue-400' :
          log.type === 'success' ? 'bg-green-400' :
          'bg-yellow-400'
        )} />
        <div>
          <p className="text-xs text-muted-foreground">{log.time}</p>
          <p className="text-sm">{log.message}</p>
        </div>
      </div>
    ))}
  </ListCard>
)

export default RecentLogsPanel
