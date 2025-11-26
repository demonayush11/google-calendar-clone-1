import React, { Fragment } from 'react'
import { getMonth } from '@/lib/getTime'
const MonthView = () => {

  const currentMonth =getMonth()
  return (
    <section className='grid grid-cols-7 grid-rowa-5 lg:h-[100vh]'>
      {
        currentMonth.map((row,i) =>(
          <Fragment key={i}>
            {
              row.map((day,index)=>(
                <h3 key={index}>{day.format('D')}</h3>
              ))
            }
          </Fragment>
        ))
      }

    </section>
  )
}

export default MonthView
