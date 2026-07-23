import {
  LayoutDashboard,
  Bot,
  Users,
  Stethoscope,
  Code2,
  TrendingUp,
  Palette,
  Database,
  BarChart3,
  Settings,
} from 'lucide-react'

export const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Bot, label: 'AI Manager', path: '/ai-manager' },
  { icon: Users, label: 'Sales Agent', path: '/sales-agent' },
  { icon: Stethoscope, label: 'Medical Billing', path: '/medical-billing' },
  { icon: Code2, label: 'Developer Agent', path: '/developer-agent' },
  { icon: TrendingUp, label: 'Trading Agent', path: '/trading-agent' },
  { icon: Palette, label: 'Design Agent', path: '/design-agent' },
  { icon: Database, label: 'CRM', path: '/crm' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]
