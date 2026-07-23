import React from 'react'
import { Search, Bell, User, Plus, Menu } from 'lucide-react'
import { useSidebarContext } from '../../context/SidebarContext'

const Header = () => {
  const { toggle } = useSidebarContext()

  return (
    <header className="h-16 border-b border-secondary/50 bg-secondary/20 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="p-2 rounded-lg hover:bg-secondary/50 transition-colors lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search everything..."
            className="w-80 pl-10 pr-4 py-2 bg-secondary/50 rounded-lg border border-secondary/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Quick Action</span>
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-secondary/50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
