import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-4 py-3">
      <span className="material-symbols-outlined text-gray-400">menu</span>
      <span className="text-base font-medium">Index</span>
      <div
        className="h-9 w-9 rounded-full bg-red-800 text-center"
        style={{
          backgroundImage: "URL('/logo/DSCN0141.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </nav>
  );
}

export default Navbar