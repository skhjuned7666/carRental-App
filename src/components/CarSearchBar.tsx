"use client";

import React, { useState, useRef, useEffect } from "react";
import Button from "@/components/shared/Button";

const CarSearchBar = () => {
  const [filters, setFilters] = useState({
    carType: "",
    budgetRange: "",
    rentalDuration: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    location: "",
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Car types options
  const carTypes = [
    "SUV",
    "Sedan",
    "Hatchback",
    "Luxury",
    "Convertible",
    "Electric",
    "Sports Car",
  ];

  // Budget range options
  const budgetRanges = [
    "₹1000–₹3000/day",
    "₹3000–₹5000/day",
    "₹5000–₹8000/day",
    "₹8000–₹12000/day",
    "₹12000+/day",
  ];

  // Rental duration options
  const rentalDurations = ["Hourly", "Daily", "Weekly", "Monthly"];

  // Location options
  const locations = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Miami",
    "San Francisco",
    "Las Vegas",
    "Orlando",
    "Seattle",
  ];

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleSearch = () => {
    // In a real app, this would trigger a search
    console.log("Search filters:", filters);
    // For now, we'll just scroll to the car categories section
    const carSection = document.getElementById("cars");
    if (carSection) {
      carSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get display text for each filter
  const getDisplayText = (filterName: string, value: string) => {
    if (!value) {
      switch (filterName) {
        case "carType":
          return "Car Type";
        case "budgetRange":
          return "Budget Range";
        case "rentalDuration":
          return "Rental Duration";
        case "pickupDate":
          return "Pickup Date";
        case "pickupTime":
          return "Pickup Time";
        case "returnDate":
          return "Return Date";
        case "returnTime":
          return "Return Time";
        case "location":
          return "Location";
        default:
          return "";
      }
    }
    return value;
  };

  return (
    <div
      ref={dropdownRef}
      className='relative bg-gradient-to-br from-[#2E2E2E]/20 to-black/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-[#2E2E2E] max-w-6xl mx-auto mb-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Car Type Dropdown */}
        <div className='relative'>
          <button
            onClick={() => toggleDropdown("carType")}
            className='w-full flex items-center justify-between px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914]'>
            <span className={filters.carType ? "text-white" : ""}>
              {getDisplayText("carType", filters.carType)}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                openDropdown === "carType" ? "rotate-180" : ""
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'></path>
            </svg>
          </button>

          {openDropdown === "carType" && (
            <div className='absolute z-10 mt-2 w-full bg-gradient-to-br from-[#2E2E2E]/90 to-black backdrop-blur-lg rounded-lg shadow-lg border border-[#2E2E2E] overflow-hidden animate-fadeIn'>
              {carTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilterChange("carType", type)}
                  className='block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#E50914]/20 hover:text-white transition-colors duration-200'>
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Budget Range Dropdown */}
        <div className='relative'>
          <button
            onClick={() => toggleDropdown("budgetRange")}
            className='w-full flex items-center justify-between px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914]'>
            <span className={filters.budgetRange ? "text-white" : ""}>
              {getDisplayText("budgetRange", filters.budgetRange)}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                openDropdown === "budgetRange" ? "rotate-180" : ""
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'></path>
            </svg>
          </button>

          {openDropdown === "budgetRange" && (
            <div className='absolute z-10 mt-2 w-full bg-gradient-to-br from-[#2E2E2E]/90 to-black backdrop-blur-lg rounded-lg shadow-lg border border-[#2E2E2E] overflow-hidden animate-fadeIn'>
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => handleFilterChange("budgetRange", range)}
                  className='block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#E50914]/20 hover:text-white transition-colors duration-200'>
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Rental Duration Dropdown */}
        <div className='relative'>
          <button
            onClick={() => toggleDropdown("rentalDuration")}
            className='w-full flex items-center justify-between px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914]'>
            <span className={filters.rentalDuration ? "text-white" : ""}>
              {getDisplayText("rentalDuration", filters.rentalDuration)}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                openDropdown === "rentalDuration" ? "rotate-180" : ""
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'></path>
            </svg>
          </button>

          {openDropdown === "rentalDuration" && (
            <div className='absolute z-10 mt-2 w-full bg-gradient-to-br from-[#2E2E2E]/90 to-black backdrop-blur-lg rounded-lg shadow-lg border border-[#2E2E2E] overflow-hidden animate-fadeIn'>
              {rentalDurations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => handleFilterChange("rentalDuration", duration)}
                  className='block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#E50914]/20 hover:text-white transition-colors duration-200'>
                  {duration}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location Dropdown */}
        <div className='relative'>
          <button
            onClick={() => toggleDropdown("location")}
            className='w-full flex items-center justify-between px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914]'>
            <span className={filters.location ? "text-white" : ""}>
              {getDisplayText("location", filters.location)}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                openDropdown === "location" ? "rotate-180" : ""
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'></path>
            </svg>
          </button>

          {openDropdown === "location" && (
            <div className='absolute z-10 mt-2 w-full bg-gradient-to-br from-[#2E2E2E]/90 to-black backdrop-blur-lg rounded-lg shadow-lg border border-[#2E2E2E] overflow-hidden animate-fadeIn'>
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => handleFilterChange("location", location)}
                  className='block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#E50914]/20 hover:text-white transition-colors duration-200'>
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pickup Date */}
        <div>
          <label htmlFor='pickupDate' className='sr-only'>
            Pickup Date
          </label>
          <input
            type='date'
            id='pickupDate'
            value={filters.pickupDate}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, pickupDate: e.target.value }))
            }
            className='w-full px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-[#E50914]'
            aria-label='Pickup Date'
          />
        </div>

        {/* Pickup Time */}
        <div>
          <label htmlFor='pickupTime' className='sr-only'>
            Pickup Time
          </label>
          <input
            type='time'
            id='pickupTime'
            value={filters.pickupTime}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, pickupTime: e.target.value }))
            }
            className='w-full px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-[#E50914]'
            aria-label='Pickup Time'
          />
        </div>

        {/* Return Date */}
        <div>
          <label htmlFor='returnDate' className='sr-only'>
            Return Date
          </label>
          <input
            type='date'
            id='returnDate'
            value={filters.returnDate}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, returnDate: e.target.value }))
            }
            className='w-full px-4 py-3 bg-black/50 text-gray-300 rounded-lg border border-[#2E2E2E] hover:border-[#E50914] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-[#E50914]'
            aria-label='Return Date'
          />
        </div>

        {/* Search Button */}
        <div>
          <Button
            variant='primary'
            fullWidth
            onClick={handleSearch}
            className='h-full flex items-center justify-center'>
            Find Cars
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CarSearchBar;
