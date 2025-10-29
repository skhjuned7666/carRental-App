import React, { useState, useEffect } from "react";
import Modal from "@/components/shared/Modal";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Card from "@/components/shared/Card";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    id: number;
    name: string;
    model: string;
    price: string;
    image: string;
  };
  onBookingSuccess: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  car,
  onBookingSuccess,
}) => {
  const [formData, setFormData] = useState({
    carName: `${car.name} ${car.model}`,
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    location: "",
    userName: "",
    contact: "",
    payment: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const paymentOptions = [
    "Credit Card",
    "Debit Card",
    "PayPal",
    "Apple Pay",
    "Google Pay",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
    if (!formData.pickupTime) newErrors.pickupTime = "Pickup time is required";
    if (!formData.returnDate) newErrors.returnDate = "Return date is required";
    if (!formData.returnTime) newErrors.returnTime = "Return time is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.userName) newErrors.userName = "Name is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.payment) newErrors.payment = "Payment method is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        onBookingSuccess();
      }, 1500);
    }
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        carName: `${car.name} ${car.model}`,
        pickupDate: "",
        pickupTime: "",
        returnDate: "",
        returnTime: "",
        location: "",
        userName: "",
        contact: "",
        payment: "",
      });
      setErrors({});
    }
  }, [isOpen, car.name, car.model]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className='w-full max-w-2xl'
      width='w-full max-w-2xl'>
      <div className='py-4'>
        <h2 className='text-2xl font-bold text-white mb-6 text-center'>
          Book Your <span className='text-[#E50914]'>{car.name}</span>
        </h2>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Input
              id='carName'
              name='carName'
              label='Car'
              value={formData.carName}
              readOnly
              className='bg-[#2E2E2E] text-gray-300'
            />

            <div>
              <label
                htmlFor='pickupDate'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Pickup Date
              </label>
              <input
                type='date'
                id='pickupDate'
                name='pickupDate'
                value={formData.pickupDate}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.pickupDate ? "border-red-500" : "border-[#2E2E2E]"
                } placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-[#E50914] focus:border-[#E50914] focus:z-10 sm:text-sm`}
              />
              {errors.pickupDate && (
                <p className='mt-1 text-sm text-red-500'>{errors.pickupDate}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='pickupTime'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Pickup Time
              </label>
              <input
                type='time'
                id='pickupTime'
                name='pickupTime'
                value={formData.pickupTime}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.pickupTime ? "border-red-500" : "border-[#2E2E2E]"
                } placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-[#E50914] focus:border-[#E50914] focus:z-10 sm:text-sm`}
              />
              {errors.pickupTime && (
                <p className='mt-1 text-sm text-red-500'>{errors.pickupTime}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='returnDate'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Return Date
              </label>
              <input
                type='date'
                id='returnDate'
                name='returnDate'
                value={formData.returnDate}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.returnDate ? "border-red-500" : "border-[#2E2E2E]"
                } placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-[#E50914] focus:border-[#E50914] focus:z-10 sm:text-sm`}
              />
              {errors.returnDate && (
                <p className='mt-1 text-sm text-red-500'>{errors.returnDate}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='returnTime'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Return Time
              </label>
              <input
                type='time'
                id='returnTime'
                name='returnTime'
                value={formData.returnTime}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.returnTime ? "border-red-500" : "border-[#2E2E2E]"
                } placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-[#E50914] focus:border-[#E50914] focus:z-10 sm:text-sm`}
              />
              {errors.returnTime && (
                <p className='mt-1 text-sm text-red-500'>{errors.returnTime}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='location'
                className='block text-sm font-medium text-gray-300 mb-1'>
                Location
              </label>
              <select
                id='location'
                name='location'
                value={formData.location}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-4 py-3 border ${
                  errors.location ? "border-red-500" : "border-[#2E2E2E]"
                } placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-[#E50914] focus:border-[#E50914] focus:z-10 sm:text-sm`}
                aria-label='Location'>
                <option value=''>Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p className='mt-1 text-sm text-red-500'>{errors.location}</p>
              )}
            </div>

            <Input
              id='userName'
              name='userName'
              label='Full Name'
              type='text'
              value={formData.userName}
              onChange={handleChange}
              error={errors.userName}
              placeholder='Enter your full name'
            />

            <Input
              id='contact'
              name='contact'
              label='Contact (Email or Phone)'
              type='text'
              value={formData.contact}
              onChange={handleChange}
              error={errors.contact}
              placeholder='Enter email or phone number'
            />

            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-300 mb-1'>
                Payment Method
              </label>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
                {paymentOptions.map((option) => (
                  <button
                    key={option}
                    type='button'
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, payment: option }))
                    }
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      formData.payment === option
                        ? "bg-[#E50914] text-white"
                        : "bg-[#2E2E2E] text-gray-300 hover:bg-[#2E2E2E]/80"
                    }`}>
                    {option}
                  </button>
                ))}
              </div>
              {errors.payment && (
                <p className='mt-1 text-sm text-red-500'>{errors.payment}</p>
              )}
            </div>
          </div>

          <div className='flex gap-4 pt-4'>
            <Button variant='outline' fullWidth onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant='primary'
              fullWidth
              type='submit'
              disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white inline'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default BookingModal;
