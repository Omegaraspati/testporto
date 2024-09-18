'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import alexa1 from '@/assets/alexa1.jpg'
import alexa2 from '@/assets/alexa2.jpg'
import alexa3 from '@/assets/alexa3.jpg'
import alexa4 from '@/assets/alexa4.jpg'
import alexa5 from '@/assets/alexa5.jpg'
import alexa6 from '@/assets/alexa6.jpg'
import alexa7 from '@/assets/alexa7.jpg'
import alexa8 from '@/assets/alexa8.jpg'
import alexa9 from '@/assets/alexa9.jpg'
import alexa10 from '@/assets/alexa10.jpg'
import alexa11 from '@/assets/alexa11.jpg'
import alexa12 from '@/assets/alexa12.jpg'
import alexa13 from '@/assets/alexa13.jpg'
import alexa14 from '@/assets/alexa14.jpg'
import alexa15 from '@/assets/alexa15.jpg'
import alexa16 from '@/assets/alexa16.jpg'
import alexa17 from '@/assets/alexa17.jpg'
import alexa18 from '@/assets/alexa18.jpg'
import alexa19 from '@/assets/alexa19.jpg'
import alexa20 from '@/assets/alexa20.jpg'
import alexa21 from '@/assets/alexa21.jpg'
import alexa22 from '@/assets/alexa22.jpg'
import alexa23 from '@/assets/alexa23.jpg'
import alexa24 from '@/assets/alexa24.jpg'
import alexa25 from '@/assets/alexa25.jpg'
import alexa26 from '@/assets/alexa26.jpg'
import alexa27 from '@/assets/alexa27.jpg'
import alexa28 from '@/assets/alexa28.jpg'
import alexa29 from '@/assets/alexa29.jpg'
import alexa30 from '@/assets/alexa30.jpg'
import alexa31 from '@/assets/alexa31.jpg'
import alexa32 from '@/assets/alexa32.jpg'
import alexa33 from '@/assets/alexa33.jpg'
import alexa34 from '@/assets/alexa34.jpg'
import alexa35 from '@/assets/alexa35.jpg'
import alexa36 from '@/assets/alexa36.jpg'
import alexa37 from '@/assets/alexa37.jpg'
import alexa38 from '@/assets/alexa38.jpg'
import alexa39 from '@/assets/alexa39.jpg'
import alexa40 from '@/assets/alexa40.jpg'
import alexa41 from '@/assets/alexa41.jpg'
import alexa42 from '@/assets/alexa42.jpg'
import alexa43 from '@/assets/alexa43.jpg'
import alexa44 from '@/assets/alexa44.jpg'
import alexa45 from '@/assets/alexa45.jpg'

const allImages = [
  { src: alexa1, alt: 'alexa1' },
  { src: alexa2, alt: 'alexa2' },
  { src: alexa3, alt: 'alexa3' },
  { src: alexa4, alt: 'alexa4' },
  { src: alexa5, alt: 'alexa5' },
  { src: alexa6, alt: 'alexa6' },
  { src: alexa7, alt: 'alexa7' },
  { src: alexa8, alt: 'alexa8' },
  { src: alexa9, alt: 'alexa9' },
  { src: alexa10, alt: 'alexa10' },
  { src: alexa12, alt: 'alexa12' },
  { src: alexa13, alt: 'alexa13' },
  { src: alexa14, alt: 'alexa14' },
  { src: alexa15, alt: 'alexa15' },
  { src: alexa16, alt: 'alexa16' },
  { src: alexa17, alt: 'alexa17' },
  { src: alexa18, alt: 'alexa18' },
  { src: alexa19, alt: 'alexa19' },
  { src: alexa20, alt: 'alexa20' },
  { src: alexa21, alt: 'alexa21' },
  { src: alexa22, alt: 'alexa22' },
  { src: alexa23, alt: 'alexa23' },
  { src: alexa24, alt: 'alexa24' },
  { src: alexa25, alt: 'alexa25' },
  { src: alexa26, alt: 'alexa26' },
  { src: alexa27, alt: 'alexa27' },
  { src: alexa28, alt: 'alexa28' },
  { src: alexa29, alt: 'alexa29' },
  { src: alexa30, alt: 'alexa30' },
  { src: alexa31, alt: 'alexa31' },
  { src: alexa32, alt: 'alexa32' },
  { src: alexa33, alt: 'alexa33' },
  { src: alexa34, alt: 'alexa34' },
  { src: alexa35, alt: 'alexa35' },
  { src: alexa36, alt: 'alexa36' },
  { src: alexa37, alt: 'alexa37' },
  { src: alexa38, alt: 'alexa38' },
  { src: alexa39, alt: 'alexa39' },
  { src: alexa40, alt: 'alexa40' },
  { src: alexa41, alt: 'alexa41' },
  { src: alexa42, alt: 'alexa42' },
  { src: alexa43, alt: 'alexa43' },
  { src: alexa44, alt: 'alexa44' },
  { src: alexa45, alt: 'alexa45' },
  { src: alexa11, alt: 'alexa11' },
];

const PortfolioGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleImages, setVisibleImages] = useState(8); // Mulai dengan 4 gambar

    // Fungsi untuk membuka modal dan menampilkan gambar
    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    // Fungsi untuk melihat lebih banyak gambar
    const showMoreImages = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 8); // 
    };

    return (
        <div>
            <div className='text-white bg-gradient-to-b from-[#381a5f] to-[#381a5f]'>
                <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold pb-10'>
                    My Design <span className='text-orange-400'>Gallery</span>
                </h1>
                <div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-10 mx-auto max-w-[1200px]"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    {allImages.slice(0, visibleImages).map((image, index) => (
                        <a
                            key={index}
                            className="group block relative overflow-hidden rounded-lg"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); 
                                openModal(image.src.src); 
                            }}
                        >
                            <Image
                                className="w-full h-auto object-cover"
                                src={image.src}
                                alt={image.alt}
                                width={300} 
                                height={300} 
                            />
                            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                                <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <svg
                                        className="shrink-0 size-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                    <span className="text-xs">View</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {visibleImages < allImages.length && (
                    <div className="text-center">
                        <button
                            className="bg-orange-400 text-white py-2 px-4 rounded-lg"
                            onClick={showMoreImages}
                        >
                            More
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            {isOpen && selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={closeModal} 
                >
                    <div className="relative">
                        <Image
                            className="w-auto h-auto max-w-full max-h-full"
                            src={selectedImage}
                            alt="Full Image"
                            width={1000} 
                            height={1000}
                        />
                        <button
                            className="absolute top-2 right-2 bg-white p-2 rounded-full"
                            onClick={(e) => {
                                e.stopPropagation(); // Agar modal tidak menutup ketika tombol klik
                                closeModal();
                            }}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioGallery;
