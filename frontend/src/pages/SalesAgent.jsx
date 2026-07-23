import React from 'react'
import { Users, Mail, TrendingUp, Target, BarChart } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'
import StatusBadge from '../components/ui/StatusBadge'

const stats = [
  { icon: Users, label: 'Leads Generated', value: '1,847', change: '+12%' },
  { icon: Mail, label: 'Emails Sent', value: '42,500', change: '+8%' },
  { icon: TrendingUp, label: 'Conversion Rate', value: '23.4%', change: '+3%' },
  { icon: Target, label: 'Deals Closed', value: '156', change: '+15%' },
]

const recentLeads = [
  { name: 'Tech Corp', status: 'Hot', time: '2 min ago' },
  { name: 'Innovate Inc', status: 'Warm', time: '15 min ago' },
  { name: 'Global Systems', status: 'Cold', time: '1 hour ago' },
]

const campaigns = [
  { name: 'Email Campaign Q4', rate: '78%', status: 'Active' },
  { name: 'Social Media Ads', rate: '65%', status: 'Paused' },
  { name: 'LinkedIn Outreach', rate: '92%', status: 'Active' },
]

const SalesAgent = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Sales Agent" subtitle="AI-powered sales automation" />

      <StatGrid stats={stats} hover />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ListCard title="Recent Leads">
          {recentLeads.map((lead, i) => (
            <ListRow key={i}>
              <div>
                <p className="font-medium">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.time}</p>
              </div>
              <StatusBadge className={
                lead.status === 'Hot' ? 'bg-red-400/10 text-red-400' :
                lead.status === 'Warm' ? 'bg-yellow-400/10 text-yellow-400' :
                'bg-blue-400/10 text-blue-400'
              }>
                {lead.status}
              </StatusBadge>
            </ListRow>
          ))}
        </ListCard>

        <ListCard title="Campaign Performance" spacing="space-y-4">
          {campaigns.map((campaign, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{campaign.name}</p>
                <div className="flex items-center gap-2">
                  <BarChart className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{campaign.rate} open rate</span>
                </div>
              </div>
              <StatusBadge className={
                campaign.status === 'Active' ? 'bg-green-400/10 text-green-400' :
                'bg-yellow-400/10 text-yellow-400'
              }>
                {campaign.status}
              </StatusBadge>
            </div>
          ))}
        </ListCard>
      </div>
    </div>
  )
}

export default SalesAgent
