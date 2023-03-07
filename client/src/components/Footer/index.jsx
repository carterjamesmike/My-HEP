import React from "react";

const Footer = () => {
  return (
    <div>
  <nav
    className="flex justify-between mb-2 items-center h-16 bg-white text-black shadow-sm font-mono"
    role="navigation"
  >
    <a href="/" className="pl-8">
    </a>
    <div className="pr-8 md:block hidden">
      <a href="/Home" className="p-4">
        Home
      </a>
      <a href="/Signup" className="p-4">
        My Profile
      </a>
    </div>
  </nav>
  </div>
  )
};

export default Footer;