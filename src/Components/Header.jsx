import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <div className=" text-black justify-between align-center  p-4 flex md:p-10 text-sm md:text-xl ">

        <div className='font-bebas '>
           <NavLink to="/">
           <h1 className="hover:text-slate-600">Aditya Pippal</h1>
           </NavLink>
          </div>
        <div className='flex justify-between align-center list-none gap-6 text-xl font-semibold ' >
         <NavLink to="/project">
         <li className="hover:text-slate-600">Projects</li>
         </NavLink> 
         <NavLink to="/about">
         <li className="hover:text-slate-600">About Me</li>
         </NavLink> 
         <NavLink to="/contact">
         <li className="hover:text-slate-600">Contact</li>
         </NavLink> 
          </div>
        <div className='flex gap-2 align-center justify-center'>
          <h1 className='text-xl font-semibold'>Resume</h1> 
          <button className='bg-slate-200 w-12 rounded-md flex justify-center align-center p-2  hover:bg-[#8EC2CD] '>
            <a href="https://drive.google.com/file/d/1qOUvd3jlwUF8d-YOwBS_NOldmG-eTbFm/view?usp=sharing" download> 
            <img 
            className='w-6 '
            src="/download.png" alt="" />
            </a>
</button></div>

    </div>
    
    </>
  )
}

export default Header
