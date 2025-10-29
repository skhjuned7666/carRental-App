"use client";

import { useState, useRef, useEffect } from "react";
import CarCard from "@/components/CarCard";
import CarDetailModal from "@/components/CarDetailModal";

const CarCategoriesSection = () => {
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sample car data organized by categories
  const carCategories = [
    {
      id: 1,
      name: "Luxury Cars",
      cars: [
        {
          id: 101,
          name: "Mercedes S-Class",
          model: "S 580",
          price: "$250",
          image: "/cars/luxury cars/1.jpg",
          specs: {
            seats: 5,
            transmission: "Auto",
            mileage: "15K",
          },
          description:
            "Experience ultimate luxury and comfort with the Mercedes S-Class. This flagship sedan offers a refined ride with cutting-edge technology and premium materials throughout.",
          specsDetails: {
            seats: 5,
            transmission: "Automatic",
            mileage: "15,000 miles",
            engine: "3.0L Turbo I6",
            fuel: "Premium Gas",
            horsepower: "429 hp",
          },
          rating: 4.8,
          reviews: 124,
        },
        {
          id: 102,
          name: "BMW 7 Series",
          model: "750i xDrive",
          price: "$220",
          image: "/cars/luxury cars/2.jpg",
          specs: {
            seats: 5,
            transmission: "Auto",
            mileage: "12K",
          },
          description:
            "The BMW 7 Series combines elegant design with powerful performance. Enjoy a smooth ride with advanced driver assistance systems and a luxurious interior.",
          specsDetails: {
            seats: 5,
            transmission: "Automatic",
            mileage: "12,000 miles",
            engine: "4.4L Twin-Turbo V8",
            fuel: "Premium Gas",
            horsepower: "530 hp",
          },
          rating: 4.7,
          reviews: 98,
        },
        {
          id: 103,
          name: "Audi A8",
          model: "A8 L",
          price: "$240",
          image: "/cars/luxury cars/3.jpg",
          specs: {
            seats: 5,
            transmission: "Auto",
            mileage: "14K",
          },
          description:
            "The Audi A8 L delivers a sophisticated driving experience with its spacious cabin, advanced technology, and smooth performance. Perfect for executive travel.",
          specsDetails: {
            seats: 5,
            transmission: "Automatic",
            mileage: "14,000 miles",
            engine: "3.0L Turbo V6",
            fuel: "Premium Gas",
            horsepower: "335 hp",
          },
          rating: 4.6,
          reviews: 87,
        },
        {
          id: 104,
          name: "Rolls Royce Phantom",
          model: "V12",
          price: "$400",
          image: "/cars/luxury cars/4.jpg",
          specs: {
            seats: 5,
            transmission: "Auto",
            mileage: "10K",
          },
          description:
            "The Rolls Royce Phantom represents the pinnacle of automotive luxury. With its handcrafted interior and whisper-quiet ride, it offers an unparalleled driving experience.",
          specsDetails: {
            seats: 5,
            transmission: "Automatic",
            mileage: "10,000 miles",
            engine: "6.7L V12",
            fuel: "Premium Gas",
            horsepower: "563 hp",
          },
          rating: 4.9,
          reviews: 76,
        },
      ],
    },
    {
      id: 2,
      name: "SUVs",
      cars: [
        {
          id: 201,
          name: "Range Rover",
          model: "Sport SVR",
          price: "$300",
          image: "/cars/Suv-Cars/1.jpg",
          specs: {
            seats: 5,
            transmission: "Auto",
            mileage: "18K",
          },
          description:
            "The Range Rover Sport SVR combines luxury with off-road capability. With its powerful supercharged engine, it delivers both performance and versatility.",
          specsDetails: {
            seats: 5,
            transmission: "Automatic",
            mileage: "18,000 miles",
            engine: "5.0L Supercharged V8",
            fuel: "Premium Gas",
            horsepower: "575 hp",
          },
          rating: 4.9,
          reviews: 156,
        },
        {
          id: 202,
          name: "Tesla Model X",
          model: "Plaid",
          price: "$280",
          image: "/cars/Suv-Cars/2.jpg",
          specs: {
            seats: 7,
            transmission: "Auto",
            mileage: "Electric",
          },
          description:
            "The Tesla Model X Plaid offers incredible acceleration with its electric powertrain. Features include falcon wing doors and advanced autopilot capabilities.",
          specsDetails: {
            seats: 7,
            transmission: "Automatic",
            mileage: "360 miles range",
            engine: "Electric",
            fuel: "Electric",
            horsepower: "1,020 hp",
          },
          rating: 4.8,
          reviews: 203,
        },
        {
          id: 203,
          name: "BMW X7",
          model: "M60i",
          price: "$260",
          image: "/cars/Suv-Cars/3.jpg",
          specs: {
            seats: 7,
            transmission: "Auto",
            mileage: "15K",
          },
          description:
            "The BMW X7 M60i combines luxury and performance in a spacious SUV package. Features a powerful V8 engine and premium interior materials.",
          specsDetails: {
            seats: 7,
            transmission: "Automatic",
            mileage: "15,000 miles",
            engine: "4.4L Twin-Turbo V8",
            fuel: "Premium Gas",
            horsepower: "523 hp",
          },
          rating: 4.7,
          reviews: 142,
        },
      ],
    },
    {
      id: 3,
      name: "Sports Cars",
      cars: [
        {
          id: 301,
          name: "Porsche 911",
          model: "Turbo S",
          price: "$350",
          image: "/cars/1.jpg",
          specs: {
            seats: 2,
            transmission: "Auto",
            mileage: "10K",
          },
          description:
            "The Porsche 911 Turbo S represents the pinnacle of sports car engineering. With its twin-turbo flat-six engine, it delivers breathtaking performance and precision.",
          specsDetails: {
            seats: 2,
            transmission: "Automatic",
            mileage: "10,000 miles",
            engine: "3.7L Twin-Turbo Flat-6",
            fuel: "Premium Gas",
            horsepower: "640 hp",
          },
          rating: 4.9,
          reviews: 189,
        },
        {
          id: 302,
          name: "Ferrari F8",
          model: "Tributo",
          price: "$450",
          image: "/cars/2.jpg",
          specs: {
            seats: 2,
            transmission: "Auto",
            mileage: "8K",
          },
          description:
            "The Ferrari F8 Tributo is a masterpiece of Italian engineering. This mid-engine supercar delivers exhilarating performance with its twin-turbo V8 engine.",
          specsDetails: {
            seats: 2,
            transmission: "Automatic",
            mileage: "8,000 miles",
            engine: "3.9L Twin-Turbo V8",
            fuel: "Premium Gas",
            horsepower: "710 hp",
          },
          rating: 5.0,
          reviews: 92,
        },
        {
          id: 303,
          name: "Lamborghini Huracán",
          model: "EVO",
          price: "$380",
          image: "/cars/5.jpg",
          specs: {
            seats: 2,
            transmission: "Auto",
            mileage: "9K",
          },
          description:
            "The Lamborghini Huracán EVO combines stunning design with blistering performance. Its naturally aspirated V10 engine delivers an unforgettable driving experience.",
          specsDetails: {
            seats: 2,
            transmission: "Automatic",
            mileage: "9,000 miles",
            engine: "5.2L V10",
            fuel: "Premium Gas",
            horsepower: "631 hp",
          },
          rating: 4.9,
          reviews: 156,
        },
        {
          id: 304,
          name: "McLaren 720S",
          model: "Spider",
          price: "$420",
          image: "/cars/7.jpg",
          specs: {
            seats: 2,
            transmission: "Auto",
            mileage: "7K",
          },
          description:
            "The McLaren 720S Spider offers the ultimate open-top supercar experience. With its lightweight carbon fiber construction and powerful V8 engine, it's built for speed.",
          specsDetails: {
            seats: 2,
            transmission: "Automatic",
            mileage: "7,000 miles",
            engine: "4.0L Twin-Turbo V8",
            fuel: "Premium Gas",
            horsepower: "710 hp",
          },
          rating: 4.9,
          reviews: 134,
        },
      ],
    },
    {
      id: 4,
      name: "Electric Cars",
      cars: [
        {
          id: 401,
          name: "Tesla Model S",
          model: "Plaid",
          price: "$260",
          image: "/cars/3.jpg",
          specs: {
            seats: 5,
            transmission: "Auto",
            mileage: "Electric",
          },
          description:
            "The Tesla Model S Plaid sets new standards for electric vehicles with its incredible acceleration and long-range capabilities. Features a minimalist interior with a large touchscreen display.",
          specsDetails: {
            seats: 5,
            transmission: "Automatic",
            mileage: "405 miles range",
            engine: "Electric",
            fuel: "Electric",
            horsepower: "1,020 hp",
          },
          rating: 4.8,
          reviews: 245,
        },
        {
          id: 402,
          name: "Porsche Taycan",
          model: "Turbo S",
          price: "$320",
          image: "/cars/4.jpg",
          specs: {
            seats: 4,
            transmission: "Auto",
            mileage: "Electric",
          },
          description:
            "The Porsche Taycan Turbo S combines electric power with Porsche's legendary driving dynamics. Experience instant torque and precise handling in this luxury electric sedan.",
          specsDetails: {
            seats: 4,
            transmission: "Automatic",
            mileage: "227 miles range",
            engine: "Electric",
            fuel: "Electric",
            horsepower: "750 hp",
          },
          rating: 4.7,
          reviews: 134,
        },
        {
          id: 403,
          name: "Audi e-tron GT",
          model: "RS",
          price: "$290",
          image: "/cars/6.jpg",
          specs: {
            seats: 4,
            transmission: "Auto",
            mileage: "Electric",
          },
          description:
            "The Audi e-tron GT RS combines luxury with electric performance. Features a sleek design and advanced technology in a premium electric vehicle.",
          specsDetails: {
            seats: 4,
            transmission: "Automatic",
            mileage: "238 miles range",
            engine: "Electric",
            fuel: "Electric",
            horsepower: "590 hp",
          },
          rating: 4.6,
          reviews: 112,
        },
      ],
    },
  ];

  const handleOpenModal = (carId: number) => {
    // Find the car across all categories
    let foundCar = null;
    for (const category of carCategories) {
      foundCar = category.cars.find((car) => car.id === carId);
      if (foundCar) break;
    }

    if (foundCar) {
      setSelectedCar(foundCar);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

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
    <section id='cars' className='py-20 px-4 md:px-8 bg-[#0E0E0E]'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 text-white'>
          Car <span className='text-[#E50914]'>Categories</span>
        </h2>

        <div className='space-y-20'>
          {carCategories.map((category) => (
            <div key={category.id} className='relative'>
              <h3 className='text-3xl font-bold mb-8 text-white'>
                {category.name}
              </h3>

              <div className='relative group'>
                {/* Left Arrow */}
                {showLeftArrow && (
                  <button
                    onClick={scrollLeft}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 p-3 rounded-full arrow-glow-effect transition-all duration-300 opacity-0 group-hover:opacity-100'
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

                {/* Cards Container */}
                <div
                  ref={scrollContainerRef}
                  className='flex overflow-x-auto scrollbar-hide gap-6 pb-4'
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  onScroll={checkScrollButtons}>
                  <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {category.cars.map((car) => (
                    <div key={car.id} className='flex-shrink-0 w-80'>
                      <CarCard
                        id={car.id}
                        name={car.name}
                        model={car.model}
                        price={car.price}
                        image={car.image}
                        specs={car.specs}
                        onOpenModal={handleOpenModal}
                      />
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
          ))}
        </div>

        <CarDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          car={selectedCar}
        />
      </div>
    </section>
  );
};

export default CarCategoriesSection;
