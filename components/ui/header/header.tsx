import React from 'react'
import HeaderRight from './right-side'
import HeaderLeft from './left-side'
import MainView from '@/components/MainView'

const header = () => {
  return (
    <div className='mx-3 flex items-center  justify-between py-4'>
        <HeaderLeft>
     
     </HeaderLeft>
     
     <HeaderRight></HeaderRight>
    </div>

  )
}

export default header
