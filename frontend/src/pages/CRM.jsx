import React from 'react'
import { Users, UserPlus, Mail, Phone, Calendar, Star } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'
import StatusBadge from '../components/ui/StatusBadge'

const stats = [
  { icon: Users, label: 'Total Contacts', value: '4,827', change: '+124' },
  { icon: UserPlus, label: 'New Leads', value: '328', change: '+45' },
  { icon: Mail, label: 'Email Sent', value: '42.5K', change: '+12%' },
  { icon: Star, label: 'Satisfaction', value: '4.8/5', change: '+0.3' },
]

const interactions = [
  { name: 'Acme Corp', type: 'Email', time: '10 min ago', status: 'Opened' },
  { name: 'TechStart Inc', type: 'Call', time: '25 min ago', status: 'Completed' },
  { name: 'Global Solutions', type: 'Meeting', time: '1 hour ago', status: 'Scheduled' },
]

const typeIcon = {
  Email: Mail,
  Call: Phone,
  Meeting: Calendar,
}

const CRM = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="CRM" subtitle="Customer relationship management" />

      <StatGrid stats={stats} />

      <ListCard title="Recent Interactions">
        {interactions.map((interaction, i) => {
          const TypeIcon = typeIcon[interaction.type]
          return (
            <ListRow key={i}>
              <div>
                <p className="font-medium">{interaction.name}</p>
                <div className="flex items-center gap-2">
                  <TypeIcon className="w-3 h-3" />
                  <span className="text-xs text-muted-foreground">{interaction.type}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{interaction.time}</span>
                </div>
              </div>
              <StatusBadge className={
                interaction.status === 'Opened' ? 'bg-blue-400/10 text-blue-400' :
                interaction.status === 'Completed' ? 'bg-green-400/10 text-green-400' :
                'bg-yellow-400/10 text-yellow-400'
              }>
                {interaction.status}
              </StatusBadge>
            </ListRow>
          )
        })}
      </ListCard>
    </div>
  )
}

export default CRM
