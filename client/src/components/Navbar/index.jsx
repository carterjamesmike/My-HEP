import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Auth from "../../utils/auth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  <header className="sticky top-0 z-50">
  <Navbar />
</header>

  return (
    <div className="top-0 z-50 fixed w-full">
  <nav
    className="flex justify-between mb-2 items-center h-16 bg-white text-black shadow-sm font-mono"
    role="navigation"
  >
     <a href="/" className="pl-8">
      <img className="scale-50" src="./images/myHepLogo2.png" alt="myhep logo" />
      </a>

    {/* Mobile Hambuger */}
    <div onClick={handleClick} className="px-4 cursor-pointer md:hidden z-10">
      {!nav ? <FaBars /> : <FaTimes />}
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
    {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute bg-blue-100 top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='UserProfile'>
                        My Profile
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={() => {
                        handleClick();
                        logout();                      
                    }} 
                    to='About'>
                        Logout
                    </Link>                    
                </li>                             
            </ul>

      </>
    ) : (
      <>
        <div className="pr-8 md:block hidden">
          <a href="/Login" className="p-4">
            Login
          </a>
        </div>  
    {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute bg-blue-100 top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='Login'>
                        My Login
                    </Link>
                </li>                           
        </ul>
      </>
    )}
  </nav>
  </div>
  )
};

export default Navbar;
