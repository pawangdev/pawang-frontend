import React from 'react'
import { Sidebar } from './Components/Sidebar'

function App({ children }) {
  return (
    <div className="antialiased text-tiny tracking-tight">
      <div className="flex flex-row">
        <Sidebar />
        {children}
      </div>
    </div >
  )
}

export default App
