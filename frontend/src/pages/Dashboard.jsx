import React from 'react'
import StatCard from '../components/cards/StatCard'
import AIAgentCard from '../components/cards/AIAgentCard'
import TaskItem from '../components/dashboard/TaskItem'
import RevenueAreaChart from '../components/charts/RevenueAreaChart'
import EmailPieChart from '../components/charts/EmailPieChart'
import ActivityTimeline from '../components/dashboard/ActivityTimeline'
import RecentLeadsPanel from '../components/dashboard/RecentLeadsPanel'
import RecentLogsPanel from '../components/dashboard/RecentLogsPanel'
import { EMAIL_CHART_COLORS } from '../constants/chartColors'
import {
  dashboardStats,
  revenueData,
  emailData,
  agents,
  tasks,
  activities,
  recentLeads,
  aiLogs,
} from '../data/dashboardData'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {dashboardStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-secondary/30 backdrop-blur-sm border border-secondary/50 rounded-xl p-6 hover:border-primary/20 transition-all">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Revenue Overview
          </h3>
          <RevenueAreaChart data={revenueData} />
        </div>

        <div className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 rounded-xl p-6 hover:border-primary/20 transition-all">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Email Performance
          </h3>
          <EmailPieChart data={emailData} colors={EMAIL_CHART_COLORS} />
        </div>
      </div>

      {/* AI Agents & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              AI Agents
            </h3>
            <button className="text-xs text-primary hover:text-primary/80 transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agents.map((agent, index) => (
              <AIAgentCard key={index} {...agent} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Today's Tasks
            </h3>
            <span className="text-xs text-muted-foreground">4 tasks</span>
          </div>
          <div className="space-y-2">
            {tasks.map((task, index) => (
              <TaskItem key={index} {...task} />
            ))}
          </div>
        </div>
      </div>

      {/* Activity, Leads, Logs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActivityTimeline activities={activities} />
        <RecentLeadsPanel leads={recentLeads} />
        <RecentLogsPanel logs={aiLogs} />
      </div>
    </div>
  )
}

export default Dashboard
