import React, { useEffect } from 'react'
import { useState } from 'react'
import './AddTask.css'
// import { createLogger } from 'vite'
function PriorityModel({ back, form, setForm }) {
    const [prr, setPrr] = useState(0)
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [selected, setSelected] = useState(null)
    useEffect(()=>{
        setPrr(form.priority)
    },[])
    function handelselect(value) {
        back()
        if (value == 0) return
        
            setForm({
                ...form,
                priority: value,
            })
        
        setPrr(0)
    }
    return (
        <div className=' bg-[rgb(0,0,0,0.7)] h-screen w-screen absolute flex justify-center items-center flex-col z-3'>
            <div className='flex justify-center items-center flex-col bg-[rgb(36,36,36)] p-5'>
                <div className='text-2xl p-2.5'>Task Priority</div>
                <div className='w-full border border-gray-300 mb-8'></div>
                <ul className='priorty'>
                    {
                        arr.map((ele) => (
                            <li className={prr == ele ? 'priorty-card card' : 'priorty-card'} onClick={() => setPrr(ele)}><span className='material-symbols-outlined '>flag_2</span>{ele}</li>
                        ))
                    }
                </ul>
                <div className='flex gap-5 text-2xl mt-5 w-full justify-center'>
                    <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={back}>Cancel</button>
                    <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={() => handelselect(prr)} >Save</button>
                </div>
            </div>
        </div>

    )
}

export default PriorityModel