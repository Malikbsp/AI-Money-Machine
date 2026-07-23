import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const EmailPieChart = ({ data, colors, height = 300 }) => (
  <>
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
    <div className="flex justify-center gap-4 mt-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index] }} />
          <span className="text-xs text-muted-foreground">{item.name} ({item.value}%)</span>
        </div>
      ))}
    </div>
  </>
)

export default EmailPieChart
