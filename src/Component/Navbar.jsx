import React from 'react'
import {NavLink} from 'react-router-dom'
import { FcHome } from "react-icons/fc";


function Navbar() {
  return (
    <div className='flex flex-row items-center pl-4 md:pl-8 py-1 shadow-sm shadow-slate-400 justify-between'>

        <NavLink to='/' className='text-2xl'><FcHome /></NavLink>

        <nav className='flex flex-row gap-3 text-sm md:text-lg md:gap-6 items-center'>
          
          <NavLink to='home' className={({isActive}) =>`${isActive ? "text-blue-500" : "text-yellow-800 "} duration-200`} >Home</NavLink>

          <NavLink to='about' className={({isActive}) =>`${isActive ? "text-blue-500" : "text-yellow-800 "} duration-200`} >About Us</NavLink>

          <NavLink to='work' className={({isActive}) =>`${isActive ? "text-blue-500" : "text-yellow-800 "} duration-200`}>Work</NavLink>

          <NavLink to='contact' className={({isActive}) =>`${isActive ? "text-blue-500" : "text-white "} duration-200 bg-yellow-900 pr-8 md:pr-12 pl-2 py-1`} >Contact</NavLink>

          
        </nav>
    </div>
  )
}

export default Navbar