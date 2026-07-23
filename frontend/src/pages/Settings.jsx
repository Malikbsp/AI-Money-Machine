import React from 'react'
import { User, Bell, Shield, Palette, Database, Globe } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'

const settingsSections = [
  { icon: User, label: 'Profile', description: 'Manage your account settings' },
  { icon: Bell, label: 'Notifications', description: 'Configure notification preferences' },
  { icon: Shield, label: 'Security', description: 'Security and privacy settings' },
  { icon: Palette, label: 'Appearance', description: 'Customize the dashboard appearance' },
  { icon: Database, label: 'Data', description: 'Data management and backup' },
  { icon: Globe, label: 'Preferences', description: 'Language and regional settings' },
]

const systemStatus = [
  { name: 'API Version', value: 'v2.1.0' },
  { name: 'Database Status', value: 'Connected' },
  { name: 'Cache Status', value: 'Active' },
  { name: 'AI Services', value: 'All Operational' },
]

const Settings = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Configure your dashboard preferences" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {settingsSections.map((section, i) => (
          <div key={i} className="bg-secondary/30 border border-secondary/50 rounded-xl p-6 hover:border-primary/20 transition-all cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-primary/20 transition-colors">
                <section.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold">{section.label}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ListCard title="System Status" spacing="space-y-2">
        {systemStatus.map((item, i) => (
          <ListRow key={i}>
            <span className="text-sm">{item.name}</span>
            <span className="text-sm font-medium">{item.value}</span>
          </ListRow>
        ))}
      </ListCard>
    </div>
  )
}

export default Settings
