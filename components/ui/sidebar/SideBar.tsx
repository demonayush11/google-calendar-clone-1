import React from 'react'
import {cn} from '@/lib/utils'
import Create from './create'
import SideBarCalendar from './side-bar-calendar'
import SearchUsers from './search-user'
const SideBar = () => {
  return (
    <aside   className={cn(
        "w-92 hidden border-t px-2 py-3 transition-all duration-300 ease-in-out lg:block",
        
      )} >
      <Create/>
    <SideBarCalendar/>
    <SearchUsers />
    </aside>
  )
}

export default SideBar
