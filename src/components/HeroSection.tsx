"use client";

import { useState, useEffect } from "react";
import CarSearchBar from "@/components/CarSearchBar";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of image paths from the heroImgs folder
  const heroImages = [
    // "/cars/heroImgs/bg.png",
    "/heroImgs/bg1.jpg",
    "/heroImgs/bg2.png",
    "/heroImgs/bg3.jpg",
    "/heroImgs/bg4.png",
    "/heroImgs/bg5.png",
    "/heroImgs/bg6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center md:py-32 py-12 px-4 md:px-8 overflow-hidden md:pt-24 pt-10 bg-[#0E0E0E]'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob'></div>
        <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF3838] rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#E50914] rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
      </div>

      {/* Background images for mobile view */}
      <div className='absolute inset-0 z-0 md:hidden'>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>
      {/* Car Search Bar - positioned above the hero content */}
      <div className='absolute md:top-20 top-0 left-0 right-0 z-20 px-4 md:px-8 hidden md:block'>
        <CarSearchBar />
      </div>
      <div className='container top-25 mx-auto relative z-10 md:pt-0 pt-30 pb-0'>
        <div className='flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]'>
          <div className='lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white'>
              Drive Into{" "}
              <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
                Inferno
              </span>
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0'>
              Experience the thrill of premium car rentals with our luxury
              fleet. Where speed meets sophistication.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button
                onClick={() => scrollToSection("pricing")}
                className='glow-effect bg-gradient-to-r from-[#E50914] to-[#FF3838] hover:from-[#FF3838] hover:to-[#E50914] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105'>
                Book Now
              </button>
              <button
                onClick={() => scrollToSection("cars")}
                className='glow-effect bg-transparent border-2 border-[#E50914] hover:bg-[#E50914]/20 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg transition-all duration-300'>
                Explore Cars
              </button>
            </div>
          </div>

          {/* Desktop images - hidden on mobile */}
          <div className='relative w-full h-100 md:w-100% md:h-100% hidden md:block'>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "90% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
