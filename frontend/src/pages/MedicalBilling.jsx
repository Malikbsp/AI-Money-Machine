import React from 'react'
import { Stethoscope, DollarSign, CheckCircle, AlertCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'
import StatusBadge from '../components/ui/StatusBadge'

const stats = [
  { icon: Stethoscope, label: 'Total Claims', value: '1,247', change: '+45' },
  { icon: DollarSign, label: 'Total Value', value: '$3.2M', change: '+12%' },
  { icon: CheckCircle, label: 'Processed', value: '1,103', change: '88%' },
  { icon: AlertCircle, label: 'Pending', value: '144', change: '12%' },
]

const claims = [
  { id: 'CLM-001', patient: 'John Smith', amount: '$12,450', status: 'Approved', time: '10 min ago' },
  { id: 'CLM-002', patient: 'Sarah Johnson', amount: '$8,230', status: 'Processing', time: '25 min ago' },
  { id: 'CLM-003', patient: 'Michael Brown', amount: '$15,890', status: 'Review', time: '1 hour ago' },
]

const MedicalBilling = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Medical Billing" subtitle="AI-powered medical billing automation" />

      <StatGrid stats={stats} />

      <ListCard title="Recent Claims">
        {claims.map((claim, i) => (
          <ListRow key={i}>
            <div>
              <p className="font-medium">{claim.id}</p>
              <p className="text-sm text-muted-foreground">{claim.patient}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{claim.amount}</p>
              <StatusBadge className={
                claim.status === 'Approved' ? 'bg-green-400/10 text-green-400' :
                claim.status === 'Processing' ? 'bg-yellow-400/10 text-yellow-400' :
                'bg-blue-400/10 text-blue-400'
              }>
                {claim.status}
              </StatusBadge>
            </div>
          </ListRow>
        ))}
      </ListCard>
    </div>
  )
}

export default MedicalBilling
