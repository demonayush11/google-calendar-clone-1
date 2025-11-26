import React from 'react'
import MonthView from './month-view'
import { Sidebar } from 'lucide-react'
const MainView = () => {
  return (
    <div className='flex'>
      
      <div className="w-full flex-1">
        <MonthView />
      </div>
    </div>
  )
}

export default MainView
