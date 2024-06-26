import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <div className=" text-black hidden justify-between align-center px-4  mx-32 my-12 md:flex">

        <div className='font-bebas text-2xl'>
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
          <button className='bg-slate-200 w-12 rounded-md flex justify-center align-center p-2  hover:bg-blue-300'>
            <a href="https://drive.google.com/file/d/1f7mQ3ClMwu7rk5MNAxtXzgeVlfPHOi0T/view?usp=sharing" download> 
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
