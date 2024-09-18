"use client"
import React, { useEffect } from 'react'
import portomarsya from '../assets/PortoMarsya.png'
import itenas from '../assets/itenas.png'
import valorant from '../assets/valorant.png'
import transtv from '../assets/transtv.png'
import Image from 'next/image'
import whiskas from '@/assets/whiskas.png'
import cleo from '@/assets/cleo.png'
import { motion } from 'framer-motion'
import Aos from 'aos'
import xxi from '@/assets/xxi.png'
import 'aos/dist/aos.css';
import UT from '@/assets/UT.png'


const projects= [
    {
        title :"Portfolio Marsya Nurma Guvita",
        desc :"Making Portfolio Website",
        devstack :"FrontEnd with Next.js",
        link :"https://portfoliomarsyaagn-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/portfolio-nextjs",
        scr :portomarsya,
    },
    {
        title :"Universitas Terbuka Denpasar",
        desc :"Clonning Website UT-Denpasar",
        devstack :"FrontEnd with Next.js",
        link :"https://universitas-terbuka-denpasar-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/UT_DPS",
        scr :UT,
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
        title :"Valorant ID",
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
    {
        title :"Cinema 21 ",
        desc :"Clonning Website XXI - Cinema 21",
        devstack :"FrontEnd with Next.js",
        link :"https://cinema-21-seven.vercel.app/",
        git :"https://github.com/Omegaraspati/xxi",
        scr :xxi,
    },
    {
        title :"Whiskas ",
        desc :"Clonning Website Whiskas Website",
        devstack :"FrontEnd with Next.js",
        link :"https://whiskas-web.vercel.app/",
        git :"https://github.com/Omegaraspati/Whiskas",
        scr :whiskas,
    },
    {
        title :"Cleo Pure Water",
        desc :"Clonning Website Cleo Website",
        devstack :"FrontEnd with Next.js",
        link :"https://cleo-website.vercel.app/",
        git :"https://github.com/Omegaraspati/cleo",
        scr :cleo,
    },
]
const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 1200
    });  // Inisialisasi AOS
      }, []);

  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52 pb-52' id="portfolio">

        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>FrontEnd <span className='text-orange-400'>Projects</span>

        </h1>
        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y:75}}
                whileInView={{opacity : 1, y:0}}
                viewport={{once : true}}
                transition={{ duration: 0.5, delay: 0.25}}
                data-aos="fade-right"
                className={`flex mt-12 flex-col ${index % 1 === 1 ?" md:flex-row-reverse gap-12 ":" md:flex-row" }`}>

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
            <Image src={project.scr} alt={project.title} className='h-[350px] sm:m-auto m-20 w-auto object-cover border rounded border-gray-700'data-aos="fade-left"/>
        </div>
                </motion.div>

            ))}
           
        </div>

        
    </div>
  )
}

export default Portfolio 