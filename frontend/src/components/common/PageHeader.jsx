import React from 'react'

// Shared page title + subtitle block used at the top of every page except
// the Dashboard. Pass `action` to render a control on the right (e.g. the
// Settings button on the AI Manager page) — matches the original markup
// exactly whether or not an action is provided.
const PageHeader = ({ title, subtitle, action }) => (
  <div className={action ? 'flex items-center justify-between' : undefined}>
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
    {action}
  </div>
)

export default PageHeader
