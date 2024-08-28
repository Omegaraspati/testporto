"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import heropng from '../assets/hero.png'

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
            <div className="relative">
                <div className='text-8xl font-bold text-center'>
                    <h1 className="text-[#98B4ce]">Hi I&apos;m</h1>
                    <h1 className="text-[#E48A57]">Omega</h1>
                </div>

                <motion.div className='hidden md:block absolute left-[280px] top-[170px]' drag>
                    <Image
                        src={cursor}
                        height='190'
                        width='190'
                        alt='cursor'
                        draggable='false'
                        className='' />
                </motion.div>

                <motion.div className='hidden md:block absolute right-[220px] top-[20px]' drag>
                    <Image
                        src={lightning}
                        height='120'
                        width='120'
                        alt='lighnting'
                        draggable='false'
                        className='' />
                </motion.div>

                <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
                I am a graduate of Informatics Engineering. I have skills in the world of computers and IT, 
                one of which is in the field of Front End Web Development.
                </p>

                <Image
                    src={heropng}
                    alt={'profile picture'}
                    className="h-auto mx-auto w-auto"
                />
            </div>
        </div>
    )
}

export default Hero