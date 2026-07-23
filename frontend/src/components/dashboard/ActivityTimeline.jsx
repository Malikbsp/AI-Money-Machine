import React from 'react'
import ListCard from '../tables/ListCard'

const ActivityTimeline = ({ activities, title = 'Activity Timeline' }) => (
  <ListCard
    title={title}
    titleClassName="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4"
    spacing="space-y-4"
  >
    {activities.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">{item.time}</p>
          <p className="text-sm">{item.event}</p>
        </div>
      </div>
    ))}
  </ListCard>
)

export default ActivityTimeline
