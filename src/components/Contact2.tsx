"use client"

import React from 'react'

import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
import { SiAdobephotoshop, SiAdobepremierepro, SiCoreldraw, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript, SiVegas } from 'react-icons/si';

const Contact2 = () => {

const skillIcons = [
    {icon : <FaHtml5 size={140} />, label : "HTML"},
    {icon : <FaCss3Alt size={140} />, label : "CSS"},
    {icon : <SiTypescript size={140} />, label : "TypeScript"},
    {icon : <FaJsSquare size={140} />, label : "javaScript"},
    {icon : <SiVegas size={110} />, label : "VegasPro"},
    {icon : <SiAdobephotoshop size={140} />, label : "Adobe Photoshop"},
    {icon : <SiAdobepremierepro size={140} />, label : "Adobe Premier Pro"},
    {icon : <SiCoreldraw size={140} />, label : "Corel Draw"},
    {icon : <FaReact size={140} />, label : "React.js"},
    {icon : <SiTailwindcss size={140} />, label : "TailwindCss"},
    {icon : <SiNextdotjs size={140} />, label : "Next.js"},
    {icon : <SiMysql size={140} />, label : "MySql"},
];
  return (
    <div>
         <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {skillIcons.map((skill,index) => (
                    <div
                        key={index}
                        className=" h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
                        >
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
                <div className=''>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact2