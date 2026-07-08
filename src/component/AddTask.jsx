import React, { useRef, useState } from 'react'

function AddTask({ show, data, openPriority, openTimer, openCalendar, openLabel, form, setForm, id }) {
    const takeinput = useRef('')

    function Readydata(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    const date = new Date()


function saveTask() {
    if (form.title.trim() === "") return;

    const task = {
        id: Date.now(),
        ...form,
        date: form.date || date.getDate(),
        month: form.month || MONTHS[date.getMonth()],
        done: false,
    };

    data(prev => [task, ...prev]);
    
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
        <div className='fixed inset-x-0 bottom-0 z-20 flex w-full flex-col gap-3 rounded-t-2xl bg-[rgb(36,36,36)] p-4'>
            <div className='text-base font-medium'>Add Task</div>
            <input type="text" placeholder='Enter your task' required className='rounded-sm bg-black p-3 text-sm' name='title' value={form.title} onChange={Readydata} onKeyDown={handleClick} />
            <input type="text" placeholder='Description' name='description' value={form.description} className='rounded-sm bg-black p-3 text-sm' onChange={Readydata} />

            <div className='mt-2 flex items-center justify-between'>
                <div className='flex gap-4'>
                    <span className='material-symbols-outlined text-base' onClick={openCalendar}>calendar_month</span>
                    <span className='material-symbols-outlined text-base' onClick={openLabel}>sell</span>
                    <span className='material-symbols-outlined text-base' onClick={openPriority}>flag_2</span>
                </div>
                <button className='material-symbols-outlined text-base' onClick={saveTask}>send</button>
            </div>
        </div>
    )
}

export default AddTask