import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import RightSidebar from '../components/layout/RightSidebar'
import { SidebarProvider } from '../context/SidebarContext'

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex">
        <Sidebar />

        <div className="flex-1 flex flex-col min-h-screen transition-all duration-300">
          <Header />

          <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>

        <RightSidebar />
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
