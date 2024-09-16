import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useCustomContext } from '../context/contextProvider';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {setUser} = useCustomContext();

  const logout = ()=>{
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login",{replace:true})
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="" className="text-2xl font-bold text-blue-600 cursor-pointer">MyLogo</Link>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6 items-center md:mr-20">
          <li>
            <Link to="" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="about" className="text-gray-700 hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="service" className="text-gray-700 hover:text-blue-600">Services</Link>
          </li>
          <li>
            <Link to="contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </li>
          <li className='ml-12'>
            <span className='text-blue-800 cursor-pointer' onClick={logout}>
              <RiLogoutCircleRLine />
            </span>
          </li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">

            {isOpen ? (
              <RxCross2 />
            ) : (
              <IoMenuOutline />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <li className="border-b">
              <Link to="" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Home</Link>
            </li>
            <li className="border-b">
              <Link to="about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">About</Link>
            </li>
            <li className="border-b">
              <Link to="service" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Services</Link>
            </li>
            <li className="border-b">
              <Link to="contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Contact</Link>
            </li>
            <li className=''>
            <span className='text-blue-800 cursor-pointer block py-2 px-4' onClick={logout}>
              Logout
            </span>
          </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
