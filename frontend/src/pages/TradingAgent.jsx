import React from 'react'
import { TrendingUp, DollarSign, Activity, Clock } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'

const stats = [
  { icon: TrendingUp, label: 'Portfolio Value', value: '$2.4M', change: '+8.2%', positive: true },
  { icon: DollarSign, label: 'Total Returns', value: '$342K', change: '+12.5%', positive: true },
  { icon: Activity, label: 'Active Trades', value: '127', change: '-3', positive: false },
  { icon: Clock, label: 'Win Rate', value: '68%', change: '+5%', positive: true },
]

const positions = [
  { asset: 'BTC/USD', value: '$45,230', change: '+2.4%', positive: true },
  { asset: 'ETH/USD', value: '$3,120', change: '-1.2%', positive: false },
  { asset: 'AAPL', value: '$182.50', change: '+1.8%', positive: true },
]

const trades = [
  { action: 'Buy', asset: 'BTC/USD', amount: '$12,500', time: '5 min ago' },
  { action: 'Sell', asset: 'ETH/USD', amount: '$8,200', time: '15 min ago' },
  { action: 'Buy', asset: 'AAPL', amount: '$4,850', time: '30 min ago' },
]

const TradingAgent = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Trading Agent" subtitle="AI-powered trading and market analysis" />

      <StatGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ListCard title="Top Positions">
          {positions.map((position, i) => (
            <ListRow key={i}>
              <span className="font-medium">{position.asset}</span>
              <div className="text-right">
                <p>{position.value}</p>
                <span className={`text-xs ${position.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {position.change}
                </span>
              </div>
            </ListRow>
          ))}
        </ListCard>

        <ListCard title="Recent Trades">
          {trades.map((trade, i) => (
            <ListRow key={i}>
              <div>
                <p className="font-medium">{trade.asset}</p>
                <p className="text-xs text-muted-foreground">{trade.time}</p>
              </div>
              <div className="text-right">
                <span className={`text-sm ${trade.action === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                  {trade.action}
                </span>
                <p className="text-xs text-muted-foreground">{trade.amount}</p>
              </div>
            </ListRow>
          ))}
        </ListCard>
      </div>
    </div>
  )
}

export default TradingAgent
