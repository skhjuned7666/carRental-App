import React from "react";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";

interface CarCardProps {
  id: number;
  name: string;
  model: string;
  price: string;
  image: string;
  specs: {
    seats: number;
    transmission: string;
    mileage: string;
  };
  onOpenModal: (id: number) => void;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  model,
  price,
  image,
  specs,
  onOpenModal,
}) => {
  return (
    <Card
      glow
      className='overflow-hidden transition-all duration-300 hover:scale-105'>
      <div className='relative'>
        <div className='h-48 overflow-hidden'>
          <img
            src={image}
            alt={`${name} ${model}`}
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/cars/tempCars/bg.png";
            }}
          />
        </div>
        <div className='absolute top-4 right-4 bg-[#E50914] text-white text-xs font-bold px-2 py-1 rounded'>
          NEW
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-1'>{name}</h3>
        <p className='text-gray-400 text-sm mb-4'>{model}</p>

        <div className='flex justify-between items-center mb-4'>
          <span className='text-2xl font-bold text-white'>{price}</span>
          <span className='text-gray-400 text-sm'>/day</span>
        </div>

        <div className='flex justify-between text-sm text-gray-300 mb-6'>
          <div className='flex items-center'>
            <svg
              className='w-4 h-4 mr-1 text-[#E50914]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
            </svg>
            <span>{specs.seats} seats</span>
          </div>
          <div>
            <span>{specs.transmission}</span>
          </div>
          <div>
            <span>{specs.mileage}</span>
          </div>
        </div>

        <Button variant='primary' fullWidth onClick={() => onOpenModal(id)}>
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default CarCard;
