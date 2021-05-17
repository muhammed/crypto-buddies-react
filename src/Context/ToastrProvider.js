import React, { createContext, useState } from 'react'

export const ToastrContext = createContext({})

export const ToastrProvider = ({ children }) => {
  const [toastrList, setToastrList] = useState([])
  return (
    <ToastrContext.Provider value={{ toastrList, setToastrList }}>
      {children}
    </ToastrContext.Provider>
  )
}
