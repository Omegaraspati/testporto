"use client"
import React from 'react'
import portomarsya from '../assets/PortoMarsya.png'
import itenas from '../assets/itenas.png'
import valorant from '../assets/valorant.png'
import transtv from '../assets/transtv.png'
import Image from 'next/image'
import { motion } from 'framer-motion'


const projects= [
    {
        title :"Portfolio Marsya Nurma Guvita",
        desc :"Membuat sebuah perkenalan diri berbasis Website",
        devstack :"FrontEnd woth Next.js",
        link :"https://portfoliomarsyaagn-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/portfolio-nextjs",
        scr :portomarsya,
    },
    {
        title :"Itenas - Institut Teknologi Nasional",
        desc :"Clonning Website Itenas Bandung",
        devstack :"FrontEnd with Next.js",
        link :"https://itenas-bandung.vercel.app/",
        git :"https://github.com/Omegaraspati/website-itenas",
        scr :itenas,
    },
    {
        title :"Valorant-ID",
        desc :"Clonning Website RIOT GAME Valorant-ID",
        devstack :"FrontEnd with Next.js",
        link :"https://valorant-website.vercel.app/",
        git :"https://github.com/Omegaraspati/valorant-website",
        scr :valorant,
    } ,
    {
        title :"Trans TV ",
        desc :"Clonning Website TRANS TV",
        devstack :"FrontEnd with Next.js",
        link :"https://trans-tv-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/trans-tv",
        scr :transtv,
    },
]
const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52 pb-52' id="portfolio">

        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>Selected <span className='text-orange-400'>Projects</span>

        </h1>
        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project, index) => (
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
            <div className='w-64 h-[1px] bg-gray-400 my-4 flex '>
                <a href={project.link} target='blank' className='mr-6 hover:text-orange-500 '>Go to Website</a>
                <a href={project.git} target='blank'className='hover:text-orange-500'>Github</a>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <Image src={project.scr} alt={project.title} className='h-[350px] w-auto object-cover border rounded border-gray-700'/>
        </div>
                </motion.div>

            ))}
           
        </div>
    </div>
  )
}

export default Portfolio 