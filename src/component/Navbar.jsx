import React from 'react'

function Navbar() {
  return (
    <nav className='flex items-center justify-between p-2.5 bg-black'>
        <span className="material-symbols-outlined text-gray-400 ">menu</span>
        <span className='text-2xl'>Index</span>
        <div className='w-10 h-10 bg-red-800 rounded-full text-center'
        style={{
          backgroundImage:"URL('/logo/DSCN0141.JPG')",
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}
        ></div>
    </nav>
  )
}

export default Navbar