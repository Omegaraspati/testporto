'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const navLinks = [
    {title:"About", path:"#about"},
    {title:"Education", path:"#education"},
    {title:"Portfolio", path:"#portfolio"},
    {title:"Experience", path:"#experience"},
    {title:"Contact", path:"#contact"},
    
]

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav =() => {
        setNav(false)
    }

    const menuVariants = {
        open : {
            x: 0,
            transition : {
                stiffness: 20,
                damping : 15
            }
        },
        closed : {
            x:'-100%',
            transition : {
                stiffnes:20,
                damping : 15
            }
        }
    }

  return (
    <div className ="text-white/70 pt-6 pr-52 ">
        <div className ="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
            <ul className='flex flex-row p-4 space-x-8'>
                <li>
                    <a href='/'className='group'>
                        <h1 className='text-lg font-bold text-white/70 cursor-pointer '>Home</h1>
                        <div className ="relative">
                            <div className ="absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                            <div className ="mt-2 w-2/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"> </div>
                        </div>
                    </a>
                </li>
                {navLinks.map((link,index) => (
                    <li key={index}>
                        
                        <Link href ={link.path} className=' hover:text-orange-400 group'>
                            <p>{link.title}</p>
                            <div className ="relative">
                            <div className ="absolute hover:w-1/3 h-1 hover:transition-all duration-700 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                            <div className ="mt-3 w-2/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"> </div>
                        </div>
                        </Link>
                        
                    </li>
                ))}

            </ul>

        </div>
        <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded text-white /70 border-white/70 p-2 z-50 '>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
        initial={false}
        animate={nav? 'open' : 'closed'}
        variants={menuVariants}
        className='fixed left-0 top-0 w-full z-40 bg-black/90 '>

            <ul className ="text-4xl font-semibold my-24 text-center space-y-8 ">
                {navLinks.map((link,index) => (
                    <li key={index}>
                        <Link href = {link.path} onClick={closeNav}>
                        {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </motion.div>

    </div>
  )
}
