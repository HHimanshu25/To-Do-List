import React, { useState } from 'react'
import './LabelModal.css'

function LabelModal({ back, form, setForm }) {
  const [prr, setPrr] = useState([])

  


  function addLabel(prr){
    back()
    if(prr == '') return
    setForm({...form, category:prr,})
    setPrr('')  
  }


  return (
    <div className=' bg-[rgb(0,0,0,0.7)] h-screen w-screen absolute flex justify-center items-center flex-col z-3'>
      <div className='flex justify-center items-center flex-col bg-[rgb(36,36,36)] p-5'>
        <div className='text-2xl p-2.5'>Choose Category</div>
        <div className='w-full border border-gray-300 mb-8'></div>
        <ul className=' grid grid-cols-3  gap-10'>
          <li className='lable-card' onClick={()=>setPrr(['grocery','Grocery'])} ><span className='lable-digram material-symbols-outlined p-5 rounded-sm text-center  bg-[#CCFF80]'>grocery</span><span className='lable-text'>Grocery</span></li>
          <li className='lable-card' onClick={()=>setPrr(['work','Work'])} ><span className='lable-digram material-symbols-outlined p-5 rounded-sm text-center  bg-[#ff9680]'>work</span><span className='lable-text'>Work</span></li>
          <li className='lable-card' onClick={()=>setPrr(['exercise','Sport'])} ><span className='lable-digram material-symbols-outlined p-5 rounded-sm text-center  bg-[#80ffff]'>exercise</span><span className='lable-text'>Sport</span></li>
          <li className='lable-card' onClick={()=>setPrr(['action_key','Design'])} ><span className='lable-digram material-symbols-outlined p-5 rounded-sm text-center  bg-[#80ffd9]'>action_key</span><span className='lable-text'>Design</span></li>
          <li className='lable-card' onClick={()=>setPrr(['book_3','University'])} ><span className='lable-digram material-symbols-outlined p-5 rounded-sm text-center  bg-[#809cff]'>book_3</span><span className='lable-text'>University</span></li>
          <li className='lable-card' onClick={()=>setPrr(['brand_awareness','Social'])} ><span className='lable-digram material-symbols-outlined p-5 rounded-sm text-center  bg-[#ff80eb]'>brand_awareness</span><span className='lable-text'>Social</span></li>
        </ul>
        <div className='flex gap-5 text-2xl mt-5 w-full justify-center'>
          <button className=' w-full rounded-sm py-2.5 ' onClick={back}>Cancel</button>
          <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={()=>addLabel(prr)}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default LabelModal