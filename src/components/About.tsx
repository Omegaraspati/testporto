"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import finance from '../assets/finance.png'
import card from '../assets/card.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
        Aos.refresh()
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto' id='about'>
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 '
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                About <span className="text-orange-400">Me</span>
            </h1>

            <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
                <div data-aos="flip-up" className='w-full flex md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className='flex flex-row p-6'>

                        <Image
                            src={book}
                            alt='book'
                            className='sm:max-w-[130px] max-h-[150px]' />
                    </div>
                    <div className='flex flex-col mt-4 '>
                        <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                        <p className='text-sm text-white/70 mt-2 pr-5'>Education is the most important thing to achieve my dreams.
                            These are some of my successes in completing my education </p>
                    </div>
                </div>
                <div data-aos="flip-up" className='w-full flex md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={pc}
                            alt='pc'
                            className='sm:max-w-[130px] max-h-[150px]' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>My Projects</h2>
                        <p className='text-sm text-white/70 mt-2 pr-5'>A project or activity that takes place over a certain period of time,
                            is one of the factors that influences my success in honing my abilities. </p>
                    </div>
                </div>

                <div data-aos="flip-up" className='w-full flex md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={card}
                            alt='card'
                            className='sm:max-w-[130px] max-h-[150px]' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                        <p className='text-sm text-white/70 mt-2 pr-5'>Experience is the best teacher. The following are some of my experiences during my career.</p>
                    </div>
                </div>

                <div data-aos="flip-up" className='w-full flex md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={finance}
                            alt='finance'
                            className='sm:max-w-[130px] max-h-[150px]' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Skills</h2>
                        <p className='text-sm text-white/70 mt-2'>My skills are a current assessment of what I can do. Click to find out some of my skills to support my career.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About