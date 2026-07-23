import React from 'react'
import Card from '../ui/Card'
import { cn } from '../../utils'

// Card + heading + vertically-spaced list wrapper, used for every
// "Recent X" / "Top X" panel across the app.
const ListCard = ({
  title,
  titleClassName = 'font-semibold mb-4',
  spacing = 'space-y-3',
  className,
  children,
}) => (
  <Card className={className}>
    {title && <h3 className={titleClassName}>{title}</h3>}
    <div className={spacing}>{children}</div>
  </Card>
)

export default ListCard
