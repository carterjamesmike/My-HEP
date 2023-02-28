import React from "react";

const Home = () => {
  return (
    <div>
      {/* ----------NAVBAR---------- */}
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
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
          <a href="#" className="p-4">
            Home
          </a>
          <a href="#" className="p-4">
            About
          </a>
          <a href="#" className="p-4">
            Contact
          </a>
          <a href="#" className="p-4">
            Login
          </a>
        </div>
      </nav>
      {/* ----------HERO---------- */}
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">My HEP</h2>
          <p className="text-gray-600">
            <p>Welcome to My HEP - your resource for all things H, E, and P</p>
            <p>Be sure to buy our merch!</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
