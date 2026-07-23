import React from 'react'
import { Bot, Cpu, MemoryStick } from 'lucide-react'
import { cn } from '../../utils'
import ProgressBar from '../ui/ProgressBar'

const AIAgentCard = ({ name, status, task, cpu, memory, online }) => {
  const statusColors = {
    active: 'text-green-400 border-green-400/20 bg-green-400/10',
    idle: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10',
    offline: 'text-red-400 border-red-400/20 bg-red-400/10',
  }

  return (
    <div className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 rounded-xl p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full border",
              statusColors[status]
            )}>
              {status}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            online ? 'bg-green-400 animate-pulse' : 'bg-red-400'
          )} />
          <span className="text-xs text-muted-foreground">
            {online ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Current Task: <span className="text-foreground">{task}</span>
      </p>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground flex items-center gap-1">
              <Cpu className="w-3 h-3" /> CPU
            </span>
            <span>{cpu}%</span>
          </div>
          <ProgressBar percent={cpu} gradientClass="from-blue-500 to-purple-500" />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground flex items-center gap-1">
              <MemoryStick className="w-3 h-3" /> Memory
            </span>
            <span>{memory}%</span>
          </div>
          <ProgressBar percent={memory} gradientClass="from-purple-500 to-pink-500" />
        </div>
      </div>
    </div>
  )
}

export default AIAgentCard
