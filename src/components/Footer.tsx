"use client"

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
        <h1 className='text-2xl font-bold'>Omegaraspati</h1>
        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/omega-anggun-raspati-912a29314/" target='blank'className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
            <a href="https://www.tiktok.com/@omegaraspati" target='blank'className='hover:text-gray-300'>
                <FaTiktok size={24}/>
            </a>
            <a href="https://www.instagram.com/omegaraspati/" target='blank' className='hover:text-gray-300'>
                <FaInstagram size={24}/>
            </a>
            <a href="https://web.facebook.com/meghz.labschool/" target='blank' className='hover:text-gray-300'>
                <FaFacebook size={24}/>
            </a>
        </div>
    </div>
  )
}

export default Footer