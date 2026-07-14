import React from 'react'
import { Link } from 'react-router-dom'

function Footer({show}) {
    return (
        <div className='flex w-full justify-between bg-[rgb(36,36,36)] px-3 py-3'>
            <Link className='flex flex-col items-center gap-1' to='/'>
                <span className='material-symbols-outlined text-base'>home</span>
                <div className='text-[11px]'>Home</div>
            </Link>

            <Link className='flex flex-col items-center gap-1 ' to='/calendar'>
                <span className='material-symbols-outlined text-base'>calendar_month</span>
                <div className='text-[11px]'>Calendar</div>
            </Link>

            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-purple-400'>
                <button className='material-symbols-outlined text-lg' onClick={()=>show(true)}>add</button>
            </div>

            <Link className='flex flex-col items-center gap-1'>
                <span className='material-symbols-outlined text-base'>schedule</span>
                <div className='text-[11px]'>Focus</div>
            </Link>

            <Link className='flex flex-col items-center gap-1' to='/profile'>
                <span className='material-symbols-outlined text-base'>person</span>
                <div className='text-[11px]'>Profile</div>
            </Link>
        </div>
    )
}

export default Footer