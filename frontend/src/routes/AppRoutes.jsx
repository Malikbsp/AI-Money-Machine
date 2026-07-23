import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import AIChat from '../pages/AIChat'
import SalesAgent from '../pages/SalesAgent'
import MedicalBilling from '../pages/MedicalBilling'
import DeveloperAgent from '../pages/DeveloperAgent'
import TradingAgent from '../pages/TradingAgent'
import DesignAgent from '../pages/DesignAgent'
import CRM from '../pages/CRM'
import Analytics from '../pages/Analytics'
import Settings from '../pages/Settings'
import { ROUTES } from '../constants/routes'

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.DASHBOARD} element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="ai-manager" element={<AIChat />} />
      <Route path="sales-agent" element={<SalesAgent />} />
      <Route path="medical-billing" element={<MedicalBilling />} />
      <Route path="developer-agent" element={<DeveloperAgent />} />
      <Route path="trading-agent" element={<TradingAgent />} />
      <Route path="design-agent" element={<DesignAgent />} />
      <Route path="crm" element={<CRM />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
)

export default AppRoutes
