import React from 'react'

function Footer({show}) {
    
    return (
        <div className='bg-[rgb(36,36,36)] flex w-full justify-between p-3'>
            <div className='flex flex-col items-center'>
                <span className='material-symbols-outlined'>home</span>
                <div>Home</div>
            </div>

            <div className='flex flex-col items-center'>
                <span className='material-symbols-outlined'>calendar_month</span>
                <div>Calendar</div>
            </div>

            <div className='bg-purple-400 rounded-full w-15 h-15 flex justify-center items-center'>
                <button className='material-symbols-outlined text-xl' onClick={()=>show(true)}>add</button>
            </div>

            <div className='flex flex-col items-center'>
                <span className='material-symbols-outlined'>schedule</span>
                <div>Focuse</div>
            </div>

            <div className='flex flex-col items-center'>
                <span className='material-symbols-outlined'>person</span>
                <div>Profile</div>
            </div>


        </div>

        
    )
}

export default Footer