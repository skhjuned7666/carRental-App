"use client";

import { useState, useEffect } from "react";

const FeaturedCarsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured cars data
  const featuredCars = [
    {
      id: 1,
      name: "Lamborghini Huracán",
      price: "$250/day",
      image: "/cars/5.jpg",
      features: ["V10 Engine", "All-Wheel Drive", "Carbon Fiber"],
    },
    {
      id: 2,
      name: "Porsche 911 Turbo",
      price: "$200/day",
      image: "/cars/6.jpg",
      features: ["Turbocharged", "Sport Chrono", "Premium Sound"],
    },
    {
      id: 3,
      name: "McLaren 720S",
      price: "$300/day",
      image: "/cars/7.jpg",
      features: ["Twin-Turbo V8", "Carbon Fiber", "Diablo Mode"],
    },
  ];

  // Auto slide for featured cars carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === featuredCars.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredCars.length]);

  return (
    <section
      id='cars'
      className='min-h-screen flex items-center py-20 px-4 md:px-8 bg-black/50'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 text-white'>
          Featured{" "}
          <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
            Vehicles
          </span>
        </h2>

        <div className='relative max-w-4xl mx-auto'>
          <div className='overflow-hidden rounded-3xl'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredCars.map((car) => (
                <div key={car.id} className='min-w-full p-4'>
                  <div className='glow-effect bg-gradient-to-br from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-3xl border border-[#2E2E2E] overflow-hidden'>
                    <div className='md:flex'>
                      <div className='md:w-1/2 p-8 flex flex-col justify-center'>
                        <h3 className='text-3xl font-bold mb-2 text-white'>
                          {car.name}
                        </h3>
                        <p className='text-2xl text-[#FF3838] mb-6'>
                          {car.price}
                        </p>
                        <ul className='mb-8 space-y-2'>
                          {car.features.map((feature, index) => (
                            <li key={index} className='flex items-center'>
                              <svg
                                className='w-5 h-5 text-[#E50914] mr-2'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='M5 13l4 4L19 7'></path>
                              </svg>
                              <span className='text-gray-300'>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className='self-start glow-effect bg-gradient-to-r from-[#E50914] to-[#FF3838] hover:from-[#FF3838] hover:to-[#E50914] text-white font-bold py-3 px-6 rounded-full transition-all duration-300'>
                          Rent Now
                        </button>
                      </div>
                      <div className='md:w-1/2 flex items-center justify-center p-8'>
                        <div className='relative w-full h-64 overflow-hidden rounded-2xl'>
                          <img
                            src={car.image}
                            alt={car.name}
                            className='w-full h-full object-cover'
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.src = "/cars/tempCars/bg.png";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-center mt-8 space-x-2'>
            {featuredCars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-[#E50914]" : "bg-[#2E2E2E]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsCarousel;
