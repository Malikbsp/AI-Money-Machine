import React from 'react'
import MiniStatCard from './MiniStatCard'

const StatGrid = ({
  stats,
  hover = false,
  className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
}) => (
  <div className={className}>
    {stats.map((stat, i) => (
      <MiniStatCard key={i} hover={hover} {...stat} />
    ))}
  </div>
)

export default StatGrid
