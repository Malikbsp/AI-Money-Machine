import React from 'react'
import { Bot, Send, MessageSquare, Settings } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'

const messages = [
  { id: 1, sender: 'ai', message: 'Hello! How can I help you today?', time: '10:30 AM' },
  { id: 2, sender: 'user', message: 'Can you analyze our sales data?', time: '10:31 AM' },
  { id: 3, sender: 'ai', message: "Sure! I've analyzed the sales data. Revenue is up 15% this month.", time: '10:32 AM' },
]

const recentChats = ['Sales Analysis', 'Lead Generation', 'Data Insights', 'Performance Review']

const AIChat = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Manager"
        subtitle="Chat with your AI assistant"
        action={
          <button className="px-4 py-2 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-all flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-secondary/30 border border-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-green-400">● Online</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider">Recent Chats</h4>
            {recentChats.map((chat, i) => (
              <div key={i} className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all cursor-pointer">
                <MessageSquare className="w-4 h-4 inline-block mr-2 text-muted-foreground" />
                <span className="text-sm">{chat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 bg-secondary/30 border border-secondary/50 rounded-xl p-6 flex flex-col h-[600px]">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-4 rounded-xl ${msg.sender === 'user' ? 'bg-primary/20' : 'bg-secondary/50'}`}>
                  <p>{msg.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-secondary/50 rounded-lg border border-secondary/50 focus:border-primary/50 focus:outline-none"
            />
            <button className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-all flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIChat
