import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../public/logo.png"
const Navbar = () => {
  return (
    <div className='bg-black'>
      <nav className="flex justify-between items-center px-14 lg:px-36 text-2xl">
        <Link to="/" className="text-md gradient-text  sm:text-4xl font-bold py-2 ">
          <img src={logo} alt="logo" className='w-[150px] h-auto object-contain' />
        </Link>
        <ul className="flex space-x-8 ">
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/" >Trang chủ</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/creator-agency" >Creator - Agency</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/benifit" >Quyền lợi</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/contact" >Liên hệ</Link></li>
          <li className='gradient-text transition-transform transform hover:scale-110 duration-200 will-change-transform'><Link to="/about-us" >Về chúng tôi</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar