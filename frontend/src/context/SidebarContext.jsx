import React, { createContext, useContext } from 'react'
import { useSidebar } from '../hooks/useSidebar'

const SidebarContext = createContext(undefined)

export const SidebarProvider = ({ children }) => {
  const sidebar = useSidebar(true)
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider')
  }
  return context
}
