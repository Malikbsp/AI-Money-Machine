import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const RevenueAreaChart = ({ data, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
      <XAxis dataKey="month" stroke="#94a3b8" />
      <YAxis stroke="#94a3b8" />
      <Tooltip
        contentStyle={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '8px'
        }}
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#3B82F6"
        strokeWidth={2}
        fill="url(#revenueGradient)"
      />
    </AreaChart>
  </ResponsiveContainer>
)

export default RevenueAreaChart
