import React from "react";
import Modal from "@/components/shared/Modal";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";

interface CarDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    id: number;
    name: string;
    model: string;
    price: string;
    image: string;
    description: string;
    specs: {
      seats: number;
      transmission: string;
      mileage: string;
      engine: string;
      fuel: string;
      horsepower: string;
    };
    rating: number;
    reviews: number;
  };
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({
  isOpen,
  onClose,
  car,
}) => {
  if (!car) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className='w-full max-w-4xl md:max-w-5xl lg:max-w-6xl h-[80vh] md:h-[85vh]'
      width='w-full max-w-4xl md:max-w-5xl lg:max-w-6xl'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 h-full'>
        {/* Car Image */}
        <div className='relative w-full h-64 md:h-80 lg:h-full overflow-hidden rounded-2xl'>
          <img
            src={car.image}
            alt={`${car.name} ${car.model}`}
            className='w-full h-full object-cover'
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/cars/tempCars/bg.png";
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
        </div>

        {/* Car Details */}
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-start mb-4'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-white'>
                {car.name}
              </h2>
              <p className='text-gray-400 text-lg'>{car.model}</p>
            </div>
            <div className='text-right'>
              <div className='text-2xl md:text-3xl font-bold text-white'>
                {car.price}
              </div>
              <div className='text-gray-400'>/day</div>
            </div>
          </div>

          <div className='flex items-center mb-4'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(car.rating)
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
            <span className='text-gray-400 ml-2'>({car.reviews} reviews)</span>
          </div>

          <div className='mb-6'>
            <h3 className='text-xl font-bold text-white mb-2'>Description</h3>
            <p className='text-gray-300'>{car.description}</p>
          </div>

          <Card className='mb-6 flex-grow'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Specifications
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex justify-between py-2 border-b border-[#2E2E2E]'>
                <span className='text-gray-400'>Engine</span>
                <span className='text-white font-medium'>
                  {car.specs.engine}
                </span>
              </div>
              <div className='flex justify-between py-2 border-b border-[#2E2E2E]'>
                <span className='text-gray-400'>Fuel</span>
                <span className='text-white font-medium'>{car.specs.fuel}</span>
              </div>
              <div className='flex justify-between py-2 border-b border-[#2E2E2E]'>
                <span className='text-gray-400'>Horsepower</span>
                <span className='text-white font-medium'>
                  {car.specs.horsepower}
                </span>
              </div>
              <div className='flex justify-between py-2 border-b border-[#2E2E2E]'>
                <span className='text-gray-400'>Transmission</span>
                <span className='text-white font-medium'>
                  {car.specs.transmission}
                </span>
              </div>
              <div className='flex justify-between py-2 border-b border-[#2E2E2E]'>
                <span className='text-gray-400'>Mileage</span>
                <span className='text-white font-medium'>
                  {car.specs.mileage}
                </span>
              </div>
              <div className='flex justify-between py-2 border-b border-[#2E2E2E]'>
                <span className='text-gray-400'>Seats</span>
                <span className='text-white font-medium'>
                  {car.specs.seats}
                </span>
              </div>
            </div>
          </Card>

          <div className='flex gap-4 mt-auto'>
            <Button variant='outline' fullWidth onClick={onClose}>
              Close
            </Button>
            <Button variant='primary' fullWidth>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailModal;
