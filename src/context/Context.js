'use client'
import React, { createContext, useState } from 'react'

export const SideBarContext = createContext()

const Context = ({ children }) => {
  const [expanded, setExpanded] = useState(true);  
  const toggle = () => {
    setExpanded(prev => !prev)
  }

  return (
    <SideBarContext.Provider value={{
      toggle,
      expanded,
      setExpanded,
    }}>
      {children}
    </SideBarContext.Provider>
  )
}

export default Context