import React from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { cn } from '../../utils'
import { NAV_ITEMS } from '../../constants/navigation'
import { useSidebarContext } from '../../context/SidebarContext'

const Sidebar = () => {
  const { isOpen, toggle } = useSidebarContext()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full bg-secondary/30 backdrop-blur-xl border-r border-secondary/50 transition-all duration-300 z-50",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-secondary/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {isOpen && (
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Money Machine
            </span>
          )}
        </div>
        <button
          onClick={toggle}
          className="p-1 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary/20 text-primary shadow-lg shadow-primary/10"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                !isOpen && "justify-center"
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Version */}
      {isOpen && (
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="px-3 py-2 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground">Version 2.0.1</p>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
