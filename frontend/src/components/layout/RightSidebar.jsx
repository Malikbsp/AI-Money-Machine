import React from 'react'
import { Server, Database, Bot, CheckCircle, AlertCircle, Wifi } from 'lucide-react'

const healthItems = [
  { icon: Server, label: 'Backend', status: 'operational', color: 'text-green-500' },
  { icon: Wifi, label: 'API', status: 'operational', color: 'text-green-500' },
  { icon: Database, label: 'Database', status: 'degraded', color: 'text-yellow-500' },
  { icon: Bot, label: 'AI Services', status: 'operational', color: 'text-green-500' },
]

const RightSidebar = () => {
  return (
    <aside className="hidden xl:block w-80 border-l border-secondary/50 bg-secondary/20 backdrop-blur-sm p-4 overflow-y-auto">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        System Health
      </h3>

      <div className="space-y-3">
        {healthItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs capitalize">{item.status}</span>
              {item.status === 'operational' ? (
                <CheckCircle className={`w-4 h-4 ${item.color}`} />
              ) : (
                <AlertCircle className={`w-4 h-4 ${item.color}`} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-secondary/50">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Quick Stats
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Uptime</span>
            <span className="font-medium">99.97%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Response Time</span>
            <span className="font-medium">142ms</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Active Users</span>
            <span className="font-medium">1,234</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
