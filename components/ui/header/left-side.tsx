import React from 'react'
import { Button } from '../button'
import {Menu} from "lucide-react"
import Image from 'next/image'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const HeaderLeft = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className="hidden items-center lg:flex">
        <Button variant="ghost" className='rounded-full p-2'>
            <Menu className="size-6"></Menu>
        </Button>
        <Image
         src="/img/calendar_1_2x.png"
        width={40}
        height={40}
        alt="icon"
        />
        <h1 className='text-xl'>Calendar</h1>
      </div>
      <Button variant="outline">Today</Button>
      <div className='flex items-center gap-3'>
        <MdKeyboardArrowLeft className='size-6 cursor-pointer font-bold'/>
        <MdKeyboardArrowRight className='size-6 cursor-pointer font-bold'/>
      </div>
      <h1 className='hidden text-xl lg:block'>November 21 2025 </h1>
    </div>
  )
}

export default HeaderLeft
