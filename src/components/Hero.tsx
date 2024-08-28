"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import cursor from "../assets/heroleft.png"
import lightning from "../assets/heroright.png"
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
                        height='400'
                        width='400'
                        alt='cursor'
                        draggable='false'
                        className='' />
                </motion.div>

                <motion.div className='hidden md:block absolute right-[220px] top-[20px]' drag>
                    <Image
                        src={lightning}
                        height='400'
                        width='400'
                        alt='lighnting'
                        draggable='false'
                        className='transform scale-x-[-1]' />
                </motion.div>
                <div className='text-center text-xl max-w-[500px] sm:mx-auto mt-8 mx-10 text-white/80'>
                    <p className='pb-12'>
                        I am a graduate of Informatics Engineering. I have skills in the world of computers and IT,
                        one of which is in the field of Front End Web Development.
                    </p>
                    <a href="https://drive.google.com/uc?export=download&id=1uiGnOQmtbGEbZhK1k4qTQfYpFOaqgmmr">
                    <button
                        type="button"
                        className="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none dark:hover:bg-yellow-950 dark:focus:bg-yellow-950"
                        data-twe-ripple-init>
                        Download CV
                    </button>
                    </a>
                </div>
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