"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const images = [
  '/images/Slide/Slide1.jpeg',
  '/images/Slide/Slide2.jpeg',
  '/images/Slide/Slide3.jpeg',
  '/images/Slide/Slide4.jpeg',
  '/images/Slide/Slide5.jpeg',
];

export default function FacilitySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds interval
    return () => clearInterval(autoPlay);
  }, [nextSlide]);

  return (
    <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full opacity-10 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12 relative z-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200 border border-slate-300 text-blue-950 font-bold text-sm mb-4">
            📷 แกลเลอรี่อู่ ช.รวมช่าง
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight">
            บรรยากาศและผลงานของเรา
          </h2>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] group rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(2,6,23,0.15)] border-4 border-slate-200 z-10 bg-blue-950/5">
          
          {/* Images */}
          <div 
            className="w-full h-full flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full shrink-0 relative">
                <Image
                  src={src}
                  alt={`Facility Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="hidden group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 flex-col justify-center items-center rounded-full bg-blue-950/70 hover:bg-cyan-500 text-white cursor-pointer transition-all border border-cyan-400/50 backdrop-blur-md shadow-lg z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="hidden group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 flex-col justify-center items-center rounded-full bg-blue-950/70 hover:bg-cyan-500 text-white cursor-pointer transition-all border border-cyan-400/50 backdrop-blur-md shadow-lg z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 bg-blue-950/50 px-4 py-2 rounded-full backdrop-blur-md z-20">
            {images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === slideIndex 
                    ? 'w-6 h-3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
                    : 'w-3 h-3 bg-white/60 hover:bg-white'
                }`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
