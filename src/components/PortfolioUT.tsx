'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import ut1 from '@/assets/ut1.png'
import ut2 from '@/assets/ut2.png'
import ut3 from '@/assets/ut3.png'
import ut4 from '@/assets/ut4.png'
import ut5 from '@/assets/ut5.png'

const UTImages = [
    { src: ut1, alt: 'example' },
    { src: ut2, alt: 'example' },
    { src: ut3, alt: 'example' },
    { src: ut4, alt: 'example' },
];

const PortfolioUT = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleImages, setVisibleImages] = useState(8); // Mulai dengan 8 gambar

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
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 8);
    };

    return (
        <div>
            <div className='text-white bg-gradient-to-b from-[#381a5f] to-[#381a5f]'>
                <h1 className='text-white text-3xl max-w-[400px] md:mx-60 font-semibold pb-10 uppercase'>
                    Universitas<span className='text-blue-400 uppercase'> Terbuka</span>
                </h1>
                <div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-10 mx-auto max-w-[1200px]"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    {UTImages.slice(0, visibleImages).map((image, index) => (
                        <a
                            key={index}
                            className="group block relative overflow-hidden rounded-lg"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); 
                                openModal(image.src.src); // Menggunakan image.src.src untuk Next.js
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

                {visibleImages < UTImages.length && (
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

export default PortfolioUT;
