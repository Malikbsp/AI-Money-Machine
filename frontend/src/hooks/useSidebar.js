import { useState, useCallback } from 'react'

// Encapsulates the open/closed state of the dashboard sidebar so any
// component in the tree can read or control it via SidebarContext.
export function useSidebar(initialOpen = true) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, setIsOpen, toggle, open, close }
}
