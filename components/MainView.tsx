"use client";
import React from 'react'
import MonthView from './month-view'
import  SideBar  from './ui/sidebar/SideBar'
import { useViewStore } from '@/lib/store'
import DayView from './ui/day-view'
import WeekView from './ui/week-view'
const MainView = () => {
   
  const { selectedView } = useViewStore()

  return (
    <div className='flex'>
      <SideBar />
      <div className="w-full flex-1">
       {selectedView ==="month" && <MonthView/>}
        {selectedView === "week" && <WeekView />}
        {selectedView === "day" && <DayView />}
      </div>
    </div>
  )
}

export default MainView
