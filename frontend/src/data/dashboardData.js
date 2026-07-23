import {
  DollarSign,
  Users,
  Mail,
  UserPlus,
  Calendar,
  Bot,
} from 'lucide-react'

export const dashboardStats = [
  { icon: DollarSign, label: 'Revenue', value: '$124,592', trend: '12.5%', subtitle: 'vs last month', color: 'green' },
  { icon: Users, label: 'Leads', value: '1,847', trend: '8.2%', subtitle: 'vs last month', color: 'blue' },
  { icon: Mail, label: 'Emails Sent', value: '42.5K', trend: '15.3%', subtitle: 'vs last month', color: 'purple' },
  { icon: UserPlus, label: 'Active Clients', value: '328', trend: '5.7%', subtitle: 'vs last month', color: 'yellow' },
  { icon: Calendar, label: 'Meetings', value: '47', trend: '2.1%', subtitle: 'vs last month', color: 'red' },
  { icon: Bot, label: 'AI Agents Online', value: '6', subtitle: 'All systems operational', color: 'blue' },
]

export const revenueData = [
  { month: 'Jan', revenue: 6500 },
  { month: 'Feb', revenue: 7800 },
  { month: 'Mar', revenue: 9200 },
  { month: 'Apr', revenue: 8500 },
  { month: 'May', revenue: 10200 },
  { month: 'Jun', revenue: 11500 },
  { month: 'Jul', revenue: 12400 },
]

// Not currently charted in the UI (it wasn't wired to a chart in the
// original code either) — kept here for parity with the original data set.
export const leadsData = [
  { month: 'Jan', leads: 120 },
  { month: 'Feb', leads: 150 },
  { month: 'Mar', leads: 180 },
  { month: 'Apr', leads: 160 },
  { month: 'May', leads: 210 },
  { month: 'Jun', leads: 240 },
  { month: 'Jul', leads: 280 },
]

export const emailData = [
  { name: 'Opened', value: 65 },
  { name: 'Clicked', value: 25 },
  { name: 'Bounced', value: 10 },
]

export const agents = [
  { name: 'SalesBot Pro', status: 'active', task: 'Processing leads', cpu: 45, memory: 62, online: true },
  { name: 'MediAI', status: 'active', task: 'Billing analysis', cpu: 78, memory: 85, online: true },
  { name: 'DevAssist', status: 'idle', task: 'Code review', cpu: 12, memory: 30, online: true },
  { name: 'TradeMaster', status: 'active', task: 'Market analysis', cpu: 92, memory: 88, online: true },
  { name: 'DesignGen', status: 'offline', task: 'Idle', cpu: 0, memory: 0, online: false },
]

export const tasks = [
  { title: 'Review AI training data', priority: 'high', time: '2 hours ago', status: 'in_progress' },
  { title: 'Deploy new model version', priority: 'medium', time: '4 hours ago', status: 'pending' },
  { title: 'Update documentation', priority: 'low', time: '1 day ago', status: 'completed' },
  { title: 'Fix database connection', priority: 'high', time: '3 hours ago', status: 'in_progress' },
]

export const activities = [
  { time: '10:30 AM', event: 'New lead generated from website', type: 'lead' },
  { time: '09:15 AM', event: 'AI SalesBot sent 250 emails', type: 'email' },
  { time: '08:45 AM', event: 'Database backup completed', type: 'system' },
  { time: '08:00 AM', event: 'Daily performance report ready', type: 'report' },
]

export const recentLeads = [
  { name: 'Acme Corp', status: 'Hot', value: '$25,000' },
  { name: 'TechStart Inc', status: 'Warm', value: '$12,500' },
  { name: 'Global Solutions', status: 'Cold', value: '$8,000' },
]

export const aiLogs = [
  { time: '10:28 AM', message: 'SalesBot processed 45 leads', type: 'info' },
  { time: '10:15 AM', message: 'MediAI completed billing cycle', type: 'success' },
  { time: '09:50 AM', message: 'TradeMaster detected anomaly', type: 'warning' },
]
