'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import sman27 from '@/assets/sman27.png'
import itenasedu from '@/assets/itenasedu.png'
import stmik from '@/assets/stmik.png'
import pwdk from '@/assets/pwdk.jpeg'
const theplace= [
    {
        title :"SMAN 27 Bandung",
        desc :"Jurusan IPA",
        devstack :"2013 - 2016",
        link :"https://portfoliomarsyaagn-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/portfolio-nextjs",
        scr :sman27,
    },
    {
        title :"Itenas - Institut Teknologi Nasional",
        desc :"S1 Teknik Informatika",
        devstack :"2016-2020",
        link :"https://itenas-bandung.vercel.app/",
        git :"https://github.com/Omegaraspati/website-itenas",
        scr :itenasedu,
    },
    {
        title :"STMIK Jabar",
        desc :"RPL S1 Teknik Informatika",
        devstack :"2023-2023",
        link :"https://valorant-website.vercel.app/",
        git :"https://github.com/Omegaraspati/valorant-website",
        scr :stmik,
    } ,
    {
        title :"Purwadhika Digital Technology School ",
        desc :"Full Stack Web Deveolpment",
        devstack :"2024-2024",
        link :"https://trans-tv-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/trans-tv",
        scr :pwdk,
    },
]

const Education = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-black py-18 mt-52' id="education">

    <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>Previous <span className='text-orange-400'>Education</span>

    </h1>
    <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {theplace.map((project, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y:75}}
            whileInView={{opacity : 1, y:0}}
            viewport={{once : true}}
            transition={{ duration: 0.5, delay: 0.25}}
            className={`flex mt-12 flex-col ${index % 2 === 1 ?" md:flex-row-reverse gap-12 ":" md:flex-row" }`}>

    <div className='space-y-2 max-w-[550px]'>
        <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1  }`}</h2>
        <h2 className='text-4xl'>{project.title}</h2>
        <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
        <p className='text-lg text-orange-500 font-semibold'>{project.devstack}</p>
       
    </div>
    <div className='flex justify-center items-center'>
        <Image src={project.scr} alt={project.title} className='h-[200px] w-auto object-cover'/>
    </div>
            </motion.div>

        ))}
       
    </div>
</div>
  )
}

export default Education