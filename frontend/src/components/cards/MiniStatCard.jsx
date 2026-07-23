import React from 'react'
import Card from '../ui/Card'

// The small icon/value/label/change tile repeated at the top of nearly
// every page (Sales Agent, Design Agent, Medical Billing, Developer Agent,
// Trading Agent, CRM, Analytics).
const MiniStatCard = ({ icon: Icon, label, value, change, positive = true, hover = false }) => (
  <Card hover={hover}>
    <div className="flex items-center justify-between">
      <Icon className="w-5 h-5 text-muted-foreground" />
      <span className={`text-xs ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-2xl font-bold mt-2">{value}</h3>
    <p className="text-sm text-muted-foreground">{label}</p>
  </Card>
)

export default MiniStatCard
