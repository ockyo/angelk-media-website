import React from 'react'
import { Link } from "react-router-dom";
import logo from "/logo.png"
const Navbar = () => {
  return (
    <div className='bg-black'>
      <nav className="flex justify-between items-center px-14 lg:px-36 text-2xl">
        <Link to="/" className="text-md gradient-text  sm:text-4xl font-bold py-2 ">
          <img src={logo} alt="logo" className='w-[150px] h-auto object-fill' />
        </Link>
        <ul className="hidden md:flex space-x-8 ">
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/" >Trang chủ</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/creator-agency" >Creator - Agency</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/benifit" >Quyền lợi</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/contact" >Liên hệ</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/about-us" >Về chúng tôi</Link></li>
        </ul>
        <button
          className="md:hidden p-2 text-gray-500 rounded-lg border-1 border-amber-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default Navbar