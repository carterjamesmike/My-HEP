import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="fixed w-full">
  <nav
    className="flex justify-between mb-2 items-center h-16 bg-white text-black shadow-sm font-mono"
    role="navigation"
  >
     <a href="/" className="pl-8">
      <img className="scale-50" src="./images/myHepLogo2.png" alt="myhep logo" />
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
    {Auth.loggedIn() ? (
      <>
        <div className="pr-8 md:block hidden">
          <a href="/UserProfile" className="p-4">
            My Profile
          </a>
          <a href="/" onClick={logout} className="p-4">
            Logout
          </a>
        </div>
      </>
    ) : (
      <>
        <div className="pr-8 md:block hidden">
          <a href="/Login" className="p-4">
            Login
          </a>
        </div>    
      </>
    )}
  </nav>
  </div>
  )
};

export default Navbar;
