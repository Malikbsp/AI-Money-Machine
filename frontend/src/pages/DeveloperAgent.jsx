import React from 'react'
import { Code2, GitBranch, Database, Terminal, CheckCircle, Clock } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import ListCard from '../components/tables/ListCard'
import ListRow from '../components/tables/ListRow'

const stats = [
  { icon: Code2, label: 'Code Reviews', value: '247', change: '+15' },
  { icon: GitBranch, label: 'Pull Requests', value: '86', change: '+8' },
  { icon: Database, label: 'Deployments', value: '156', change: '+23' },
  { icon: Terminal, label: 'Tests Passed', value: '98%', change: '+2%' },
]

const activeTasks = [
  { task: 'API optimization', status: 'In Progress', time: '2 hours' },
  { task: 'Database migration', status: 'Pending', time: '4 hours' },
  { task: 'Security audit', status: 'Completed', time: '1 day' },
]

const commits = [
  { message: 'Fix: API rate limiting issue', author: 'AI Agent', time: '10 min ago' },
  { message: 'Feature: Add new endpoint', author: 'AI Agent', time: '25 min ago' },
  { message: 'Refactor: Clean up code', author: 'AI Agent', time: '1 hour ago' },
]

const DeveloperAgent = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Developer Agent" subtitle="AI-powered development assistant" />

      <StatGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ListCard title="Active Tasks">
          {activeTasks.map((task, i) => (
            <ListRow key={i}>
              <div className="flex items-center gap-2">
                {task.status === 'Completed' ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Clock className="w-4 h-4 text-yellow-400" />
                )}
                <span>{task.task}</span>
              </div>
              <span className="text-xs text-muted-foreground">{task.time}</span>
            </ListRow>
          ))}
        </ListCard>

        <ListCard title="Recent Commits">
          {commits.map((commit, i) => (
            <div key={i} className="p-3 bg-secondary/20 rounded-lg">
              <p className="text-sm font-mono">{commit.message}</p>
              <div className="flex items-center gap-2 mt-1">
                <Code2 className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{commit.author}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{commit.time}</span>
              </div>
            </div>
          ))}
        </ListCard>
      </div>
    </div>
  )
}

export default DeveloperAgent
