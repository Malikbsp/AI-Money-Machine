import React from 'react'
import { BarChart, LineChart, TrendingUp, Users, DollarSign, Activity } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'

const stats = [
  { icon: TrendingUp, label: 'Total Revenue', value: '$2.4M', change: '+18%' },
  { icon: Users, label: 'Active Users', value: '12,847', change: '+12%' },
  { icon: DollarSign, label: 'Avg Order Value', value: '$347', change: '+5%' },
  { icon: Activity, label: 'Conversion Rate', value: '3.2%', change: '+0.4%' },
]

const campaigns = [
  { name: 'Email Marketing Q4', revenue: '$45,230', roi: '345%', status: 'Active' },
  { name: 'Social Media Ads', revenue: '$32,890', roi: '278%', status: 'Active' },
  { name: 'Content Marketing', revenue: '$28,450', roi: '234%', status: 'Paused' },
]

const Analytics = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" subtitle="Comprehensive business intelligence" />

      <StatGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 border border-secondary/50 rounded-xl p-6 h-64 flex items-center justify-center">
          <div className="text-center">
            <BarChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">Revenue Chart (Coming Soon)</p>
          </div>
        </div>
        <div className="bg-secondary/30 border border-secondary/50 rounded-xl p-6 h-64 flex items-center justify-center">
          <div className="text-center">
            <LineChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">User Growth Chart (Coming Soon)</p>
          </div>
        </div>
      </div>

      <ListCard title="Top Performing Campaigns">
        {campaigns.map((campaign, i) => (
          <ListRow key={i}>
            <div>
              <p className="font-medium">{campaign.name}</p>
              <p className="text-xs text-muted-foreground">ROI: {campaign.roi}</p>
            </div>
            <div className="text-right">
              <p>{campaign.revenue}</p>
              <span className={`text-xs ${
                campaign.status === 'Active' ? 'text-green-400' : 'text-yellow-400'
              }`}>
                {campaign.status}
              </span>
            </div>
          </ListRow>
        ))}
      </ListCard>
    </div>
  )
}

export default Analytics
