import React from 'react'

const Exercise = () => {
    return (
<div>
     {/* ----------NAVBAR---------- */}
     <nav
        className="flex justify-between mb-2 items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <a href="#" className="pl-8">
          Logo
        </a>
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <a href="/Home" className="p-4">
            Home
          </a>
          <a href="#" className="p-4">
            My Profile
          </a>
        </div>
      </nav>
      <h1 className="text-3xl font-bold mb-2 text-gray-800 flex justify-center">Exercise</h1>

</div>
    )
    }
    