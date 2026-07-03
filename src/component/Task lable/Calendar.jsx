import React, { useState } from 'react'

function Calendar({ timer, back, form, setForm }) {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth();


  const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let totalDays = new Date(year, month + 1, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay()
  let days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(i)
  }

  const [ses, setSes] = useState(date.getDate())

  function chooseTime(value) {
    if (value === null || value === 0) return
    setForm({
      ...form,
      date: value,
      month: MONTHS[month],
    })
    setSes(0)
    timer()
  }



  return (
    <div className='bg-black/70 absolute h-screen w-screen flex justify-center items-center text-white  z-70'>
      <div className='bg-[rgb(36,36,36)] p-5'>


        <div className='flex justify-between py-4 items-center border-b '>
          <div className='material-symbols-outlined '>arrow_back_ios</div>
          <div>
            <div className='text-2xl text-center'>{MONTHS[month]}</div>
            <div className='text-center text-gray-500'>{year}</div>
          </div>
          <div className='material-symbols-outlined'>arrow_forward_ios</div>
        </div>

        <div className='grid grid-cols-7 my-5 gap-5'>

          {WEEK_DAYS.map(ele => (
            <div className='text-center'>{ele}</div>
          ))}


          {days.map((ele, index) => (
            <div
              key={ele !== null ? `day-${ele}` : `empty-${index}`}
              onClick={() => ele !== null && setSes(ele)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg font-medium  ${ses === ele ? "bg-[#8B82F8] text-white" : "bg-[#2B2B2B] text-gray-200"}
            `}>{ele}</div>
          ))}

        </div>

        <div className='flex gap-5 text-2xl mt-10 w-full justify-center'>
          <button className=' w-full rounded-sm py-2.5 ' onClick={back} >Cancel</button>
          <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={()=> chooseTime(ses)}>Choose Time</button>
        </div>
      </div>
    </div >

  )
}

export default Calendar