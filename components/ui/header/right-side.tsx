import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Avatar,AvatarImage } from '../avatar'

const HeaderRight = () => {
  return (
    <div className='flex items-center space-x-4'>
   <Select>
  <SelectTrigger className="w-24 focus-visible:outline-none focus">
    <SelectValue placeholder="Month" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Month</SelectItem>
    <SelectItem value="dark">Week</SelectItem>
    <SelectItem value="system">Day</SelectItem>
  </SelectContent>
</Select>

<Avatar>
    <AvatarImage src="/img/inst2.png" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>
  )
}

export default HeaderRight
