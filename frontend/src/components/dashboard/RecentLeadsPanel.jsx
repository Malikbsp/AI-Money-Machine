import React from 'react'
import ListCard from '../tables/ListCard'
import StatusBadge from '../ui/StatusBadge'

const RecentLeadsPanel = ({ leads, title = 'Recent Leads' }) => (
  <ListCard
    title={title}
    titleClassName="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4"
  >
    {leads.map((lead, index) => (
      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
        <div>
          <p className="font-medium">{lead.name}</p>
          <p className="text-xs text-muted-foreground">Value: {lead.value}</p>
        </div>
        <StatusBadge className={
          lead.status === 'Hot' ? 'bg-red-400/10 text-red-400' :
          lead.status === 'Warm' ? 'bg-yellow-400/10 text-yellow-400' :
          'bg-blue-400/10 text-blue-400'
        }>
          {lead.status}
        </StatusBadge>
      </div>
    ))}
  </ListCard>
)

export default RecentLeadsPanel
