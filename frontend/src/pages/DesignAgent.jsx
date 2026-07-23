import React from 'react'
import { Palette, Image, Layout, Type, Download } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import StatGrid from '../components/cards/StatGrid'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'

const stats = [
  { icon: Image, label: 'Designs Created', value: '1,847', change: '+120' },
  { icon: Layout, label: 'Templates', value: '324', change: '+18' },
  { icon: Type, label: 'Fonts Used', value: '1,247', change: '+45' },
  { icon: Download, label: 'Downloads', value: '12.4K', change: '+23%' },
]

const projects = [
  { project: 'Brand Identity', progress: '75%', status: 'In Progress' },
  { project: 'UI Kit', progress: '90%', status: 'Review' },
  { project: 'Social Media', progress: '45%', status: 'Draft' },
]

const DesignAgent = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Design Agent" subtitle="AI-powered design automation" />

      <StatGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="font-semibold mb-4">Recent Designs</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-secondary/50 rounded-lg flex items-center justify-center hover:bg-secondary/70 transition-all cursor-pointer">
                <div className="text-center">
                  <Palette className="w-8 h-8 text-muted-foreground mx-auto" />
                  <p className="text-xs text-muted-foreground mt-2">Design {i}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-4">Active Projects</h3>
          <div className="space-y-3">
            {projects.map((project, i) => (
              <div key={i} className="p-3 bg-secondary/20 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{project.project}</span>
                  <span className="text-xs text-muted-foreground">{project.progress}</span>
                </div>
                <ProgressBar percent={project.progress} animated={false} />
                <p className="text-xs text-muted-foreground mt-1">{project.status}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DesignAgent
