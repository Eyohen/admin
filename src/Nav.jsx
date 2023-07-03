import React, { useState } from 'react'
import Button from './Button'

const Nav = () => {
    let Links = [
        {name: "HOME", link:"/"},
        {name: "SERVICE", link:"/"},
        {name: "ABOUT", link:"/"},
        {name: "CONTACT", link:"/"},
    ];
    const [open,setOpen]= useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0 relative'>
        <div className='md:flex items-center justify-between bg-teal-500 py-4 md:px-10 px-7'>

            <div className='font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-gray-100'>
                Bloomfounder
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                {open ? (<svg className='w-6 text-white' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>):(  <svg className='w-6 text-white' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
</svg>)}
           
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-teal-500 md:z-auto z-[-1] left-0 w-full md:w-auto
            md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'} 
            `}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-md font-bold md:my-0 my-7'>
                            <a href={link.link} className='text-gray-100 hover:text-gray-300'>{link.name}</a>
                        </li>
                    ))
                }
                <Button>
                    Get Started
                </Button>
            </ul>

        </div>
    </div>
  )
}

export default Nav