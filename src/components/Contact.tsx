"use client"

import React from 'react'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import githubanimated from '../assets/pnggithub.png'
import linktree from '@/assets/linktreanimated.png'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 '
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                Contac&apos;t <span className="text-orange-400">Me</span>
            </h1>
            
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id='contact'>
      <div className='flex justify-center items-center'>
        <div className=''>
        <ul className='space-y-4'>
          <a href="https://wa.me/62882000090278?text=Halo" target="blank" className='overflow-hidden hover:group'>
          <li className='flex items-center transform transition-transform duration-300 hover:scale-110 hover:group hover:text-orange-400 hover:underline'>
            <Image src={phone} alt={'phone'} className='h-[110px] w-auto mr-6' />
            <p className='text-xl'>WhatsApp Me</p>
          </li>
            </a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=omegaraspatiii@gmail.com" target='blank' className='overflow-hidden hover:group'>
          <li className='flex items-center transform transition-transform duration-300 hover:scale-110 hover:group hover:text-orange-400 hover:underline'>
            <Image src={mail} alt={'mail'} className='h-[110px] w-auto mr-6' />
            <p className='text-xl'>Email</p>
          </li>
          </a>
          <ul>
          <a href="https://github.com/Omegaraspati" target="blank" className='overflow-hidden hover:group'>
          <li className='flex items-center transform transition-transform duration-300 hover:scale-110 hover:group hover:text-orange-400 hover:underline'>
            <Image src={githubanimated} alt={'github'} className='h-[110px] w-auto mr-6' />
            <p className='text-xl '>GITHUB</p>
          </li>
            </a>
            <a href="https://www.linkedin.com/in/omega-anggun-raspati-912a29314/" target="blank" className='overflow-hidden hover:group'>
          <li className='flex items-center transition-transform duration-300 hover:scale-110 hover:group hover:text-orange-400 hover:underline'>
            <Image src={linktree} alt={'linktree'} className='h-[110px] w-auto mr-6' />
            <p className='text-xl'>Linkedin</p>
          </li>
          </a>
          </ul>
        </ul>
        </div>
      </div>

     
    </div>
    </div>
  )
}

export default Contact
