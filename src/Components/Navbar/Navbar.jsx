 import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { IoPersonAddOutline,IoSearchSharp  } from "react-icons/io5";

import { HiPrinter } from "react-icons/hi";
import Logo from '../../assets/logo.png'
import { useState } from "react";


const Navbar = () => {
   
        const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

return (
  <nav className="bg-white shadow-md fixed top-0 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
      
        <div className="flex-shrink-0 flex items-center">
          <Link to="#"className="text-xl font-bold text-gray-800">
          <img src={Logo} alt="Logo" className="w-[50px] h-[50px] rounded-full" />
         </Link>
        </div>

       
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

      
        <div className="hidden md:flex md:space-x-8 md:items-center">
          <Link  to="/Home"  className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          >
            Home
            </Link>
          <Link to="/" 
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
           >
              Shop
          </Link>
       <Link to="/About"   className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          >
            About
        </Link>
         <Link to="/contact" className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          >
            Contact
            </Link>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/Contect" className="text-gray-800 hover:text-gray-600">
            <IoPersonAddOutline className="h-5 w-5" /></Link>
          
          <Link to="/Home" className="text-gray-800 hover:text-gray-600">
           <FaRegHeart className="h-5 w-5" /></Link>
         
          <Link to="#"className="text-gray-800 hover:text-gray-600">  <IoSearchSharp className="h-5 w-5" /></Link>
        
          <Link to="#" className="text-gray-800 hover:text-gray-600"> < HiPrinter className="h-5 w-5" /></Link>
         
        </div>
      </div>
    </div>

   
    {isOpen && (
      <div className="md:hidden  bg-slate-50 w-[75%] float-right">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link to="/Home" className="block text-gray-800 hover:text-gray-600 text-sm font-medium">  Home</Link>
       
          <Link to="/About" className="block text-gray-800 hover:text-gray-600 text-sm font-medium"> Shop</Link>
         
          <Link to="/About"   className="block text-gray-800 hover:text-gray-600 text-sm font-medium">  About</Link>
         
          <Link to="/ Contact"    className="block text-gray-800 hover:text-gray-600 text-sm font-medium">Contact</Link>
        
          <div className="hidden space-x-4 mt-4">
            <Link to="" className="text-gray-800 hover:text-gray-600">  <IoPersonAddOutline className="h-5 w-5" /></Link>
         
            <Link to="#" className="text-gray-800 hover:text-gray-600"> <FaRegHeart  className="h-5 w-5" /></Link>
            
            
            <Link to="#" className="text-gray-800 hover:text-gray-600"><IoSearchSharp className="h-5 w-5" /></Link>
            
            <Link to="#" className="text-gray-800 hover:text-gray-600">  < HiPrinter className="h-5 w-5" /></Link>
            
          </div>
        </div>
      </div>
    )}
  </nav>
);
};

export default Navbar;