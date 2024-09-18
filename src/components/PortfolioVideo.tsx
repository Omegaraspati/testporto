'use client'

import React, { useState } from 'react'

const allVideos = [
    { src: '/videos/Video1.mp4', alt: 'Video 1' },
    { src: '/videos/Video2.mp4', alt: 'Video 2' },
    { src: '/videos/Video13.mp4', alt: 'Video 13' },
    { src: '/videos/Video4.mp4', alt: 'Video 4' },
    { src: '/videos/Video15.mp4', alt: 'Video 15' },
    { src: '/videos/Video3.mp4', alt: 'Video 3'},
    { src: '/videos/Video14.mp4', alt: 'Video 14' },
    { src: '/videos/Video6.mp4', alt: 'Video 6' },
    { src: '/videos/Video12.mp4', alt: 'Video 12' },
    { src: '/videos/Video11.mp4', alt: 'Video 11' },
    { src: '/videos/Video10.mp4', alt: 'Video 10' },
    { src: '/videos/Video9.mp4', alt: 'Video 9' },
    { src: '/videos/Video8.mp4', alt: 'Video 8' },
    { src: '/videos/Video7.mp4', alt: 'Video 7' },
    { src: '/videos/Video5.mp4', alt: 'Video 5' },
];

const PortfolioVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [visibleVideos, setVisibleVideos] = useState(4); // Mulai dengan 2 video

    // Fungsi untuk membuka modal dan menampilkan video
    const openModal = (video: string) => {
        setSelectedVideo(video);
        setIsOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedVideo(null);
    };

    // Fungsi untuk melihat lebih banyak video
    const showMoreVideos = () => {
        setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 4); // Tampilkan 2 video lagi
    };

    return (
        <div>
            <div className='text-white bg-gradient-to-b from-[#381a5f] to-[#381a5f]'>
                <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold pb-10'>
                    My Video <span className='text-orange-400'>Gallery</span>
                </h1>
                <div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-10 mx-auto max-w-[1200px]"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    {allVideos.slice(0, visibleVideos).map((video, index) => (
                        <div
                            key={index}
                            className="group block relative overflow-hidden rounded-lg"
                            onClick={() => openModal(video.src)}
                        >
                            <video className="w-full h-auto object-cover" controls>
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                                <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <span className="text-xs">Play</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleVideos < allVideos.length && (
                    <div className="text-center">
                        <button
                            className="bg-orange-400 text-white py-2 px-4 rounded-lg"
                            onClick={showMoreVideos}
                        >
                            More
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            {isOpen && selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={closeModal} // Tutup modal ketika area luar modal diklik
                >
                    <div className="relative">
                        <video className="w-auto h-auto max-w-full max-h-full" controls autoPlay>
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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

export default PortfolioVideo;
