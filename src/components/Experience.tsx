"use client"

import React from 'react'
import transtv1 from '@/assets/transtv1.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import alexa from '@/assets/alexa.jpeg'
import permana from '@/assets/permana.jpeg'
import utbali from '@/assets/utbali.jpg'

const theplace= [
    {
        title :"TransTv",
        desc :"Menara Bank Mega, Jl. Kapten Tendean, Mampang Prapatan, Kota, South Jakarta City, Jakarta 12790",
        devstack :"Creative Team & Asistence Producer (2017-2017)",
        tahun:"2017-2017",
        link :"https://portfoliomarsyaagn-git-main-omegaraspatis-projects.vercel.app/",
        git :"https://github.com/Omegaraspati/portfolio-nextjs",
        scr :transtv1,
    },
    {
        title :"Permana Komputer",
        desc :"Jl. Kiara Condong, Babakan Surabaya, Kiaracondong, Bandung City, West Java 40272",
        devstack :"Digital Marketing & PC Technician (2023-2023)",
        link :"https://valorant-website.vercel.app/",
        git :"https://github.com/Omegaraspati/valorant-website",
        scr :permana,
    } ,
   
    {
        title :"Alexa Highly Pure Water",
        desc :"Jl. Pamubusan, Cibiru Wetan, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40625",
        devstack :"Grapich Designer & IT Support(2023-2024)",
        link :"https://itenas-bandung.vercel.app/",
        git :"https://github.com/Omegaraspati/website-itenas",
        scr :alexa,
    },
    {
        title :"Universitas Terbuka Denpasar",
        desc :"Jl. Raya Sesetan No.121, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80223",
        devstack :"IT Support & UI/UX Design (2024-2025)",
        link :"https://itenas-bandung.vercel.app/",
        git :"https://github.com/Omegaraspati/website-itenas",
        scr :utbali,
    },
]

const Experience = () => {
  return (
    <div className='text-white bg-gradient-to-b from-[#381a5f] to-[#381a5f] py-18' id="experience">

        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold '>My <span className='text-orange-400'>Experience</span>

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
            <Image src={project.scr} alt={project.title} className='h-[350px] w-auto object-cover '/>
        </div>
                </motion.div>

            ))}
           
        </div>
    </div>
  )
}

export default Experience