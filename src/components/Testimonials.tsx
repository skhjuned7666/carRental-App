"use client";

import { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Luxury Traveler",
      content:
        "The Ferrari I rented was in pristine condition. The booking process was seamless and the car exceeded my expectations. Will definitely rent again!",
      rating: 5,
      avatar: "/cars/tempCars/bg.png",
    },
    {
      id: 2,
      name: "Sophia Williams",
      role: "Weekend Explorer",
      content:
        "Fantastic service and an impressive fleet of vehicles. The Lamborghini experience was unforgettable. Highly recommended for luxury seekers.",
      rating: 5,
      avatar: "/cars/tempCars/bg1.png",
    },
    {
      id: 3,
      name: "James Peterson",
      role: "Car Enthusiast",
      content:
        "Perfect for our mountain road trip. The Porsche had all the features we needed for comfort and performance. Exceptional service throughout.",
      rating: 5,
      avatar: "/cars/tempCars/bg3.png",
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Business Executive",
      content:
        "The Rolls Royce was perfect for our corporate event. The attention to detail and service quality was outstanding. Will use again for important clients.",
      rating: 5,
      avatar: "/cars/tempCars/bg4.png",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Tech Entrepreneur",
      content:
        "The Tesla Model S was exactly what I needed for my sustainable travel. High-tech features and incredible performance. Great experience overall!",
      rating: 4,
      avatar: "/cars/tempCars/bg6.png",
    },
    {
      id: 6,
      name: "Olivia Johnson",
      role: "Wedding Planner",
      content:
        "We rented several luxury cars for our wedding party and everyone was thrilled. The vehicles were immaculate and the service was impeccable.",
      rating: 5,
      avatar: "/cars/Suv-Cars/5.jpg",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons(); // Initial check
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  return (
    <section className='min-h-screen flex items-center py-20 px-4 md:px-8 bg-black/50'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 text-white'>
          Customer{" "}
          <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
            Testimonials
          </span>
        </h2>

        <div className='relative group'>
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className='absolute left-0 top-1 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 p-3 rounded-full arrow-glow-effect transition-all duration-300 opacity-0 group-hover:opacity-100'
              aria-label='Scroll left'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'></path>
              </svg>
            </button>
          )}

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className='flex overflow-x-auto scrollbar-hide gap-8 pb-4'
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={checkScrollButtons}>
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='flex-shrink-0 w-80 glow-effect bg-gradient-to-br from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-2xl p-8 border border-[#2E2E2E] transition-all duration-300 hover:scale-105'>
                <div className='flex items-center mb-6'>
                  <div className='relative w-16 h-16 rounded-full overflow-hidden'>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='w-full h-full object-cover'
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "/cars/tempCars/bg.png";
                      }}
                    />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-xl font-bold text-white'>
                      {testimonial.name}
                    </h4>
                    <p className='text-[#FF3838]'>{testimonial.role}</p>
                  </div>
                </div>

                <div className='flex mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>

                <p className='text-gray-300 italic'>"{testimonial.content}"</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 p-3 rounded-full arrow-glow-effect transition-all duration-300 opacity-0 group-hover:opacity-100'
              aria-label='Scroll right'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
