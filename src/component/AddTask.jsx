import React, { useRef, useState } from 'react'

function AddTask({ show, data, openPriority, openTimer, openCalendar, openLabel, form, setForm }) {
        const takeinput = useRef('')

    function Readydata(e){
        setForm({...form, [e.target.name] : e.target.value})
    }
    function saveTask() {
const title = form.title
        console.log(title)
        if (title.trim() != "") {

            const task={
                id: Date.now(),
                ...form,
                done:false
            }
            
           data(prev =>[task, ...prev])
        }

        setForm({})
        show(false);
    };

    const handleClick = (e) => {
        if (e.key === "Enter" && e.target.value.trim() != "") {
            saveTask();
            console.log('fuck off bitches')
        }
    }



    return (
        <div className='z-2 fixed inset-x-0 bottom-0 bg-[rgb(36,36,36)] w-full flex flex-col p-3 gap-2 rounded-2xl'>
            <div className='py-2.5'>Add Task</div>
            <input type="text" placeholder='Enter you task ' required className='bg-black p-2 rounded-sm' name='title' value={form.title} onChange={Readydata} onKeyDown={handleClick} />
            <input type="text" placeholder='Descreption' name='descreption' value={form.descreption} className='bg-black p-2 rounded-sm' onChange={Readydata} />

            <div className='flex items-center justify-between mt-6'>
                <div className='flex gap-5'>
                    {/* <span className='material-symbols-outlined' onClick={openTimer}>timer</span> */}
                    <span className='material-symbols-outlined' onClick={openCalendar}>calendar_month</span>
                    <span className='material-symbols-outlined' onClick={openLabel}>sell</span>
                    <span className='material-symbols-outlined' onClick={openPriority}>flag_2</span>
                </div>
                <button className='material-symbols-outlined' onClick={saveTask}>send</button>
            </div>
        </div>
    )
}

export default AddTask