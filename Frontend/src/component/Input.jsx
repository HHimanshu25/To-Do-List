import React, { useEffect, useState } from 'react'

function Input({ form, setForm, back }) {

    // const [the, setthe] = useState({name: form.title, descreption: form.descreption})


    const title = form.title
    const descreption = form.descreption
    useEffect(() => {
        console.log(title, descreption)
    }, [])


    function Readydata(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function cancel() {
        setForm({
            ...form,
            title,
            descreption
        })

        back()
    }
    

    return (
        <div className=' bg-[rgb(0,0,0,0.7)] h-screen w-screen absolute flex justify-center items-center flex-col z-3 right-0 bottom-0'>
            <div className='flex justify-center items-center flex-col gap-2 bg-[rgb(36,36,36)] p-5'>
                <div className='py-2.5'>Add Task</div>

                <input type="text" placeholder='Enter you task ' required className='bg-black p-2 rounded-sm' name='title' value={form.title} onChange={Readydata} />
                <input type="text" placeholder='Descreption' name='descreption' value={form.descreption} className='bg-black p-2 rounded-sm' onChange={Readydata} />


                <div className='flex gap-5 text-2xl mt-5 w-full justify-center'>
                    <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={cancel}>Cancel</button>
                    <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={back} >Save</button>
                </div>
            </div>
        </div>
    )
}

export default Input