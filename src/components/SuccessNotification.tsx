import React, { useEffect } from "react";

interface SuccessNotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  message,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 pointer-events-none'>
      <div className='bg-gradient-to-br from-[#2E2E2E]/90 to-black backdrop-blur-lg border border-[#E50914] rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 ease-out scale-100 opacity-100'>
        <div className='text-center'>
          <div className='mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-4'>
            <svg
              className='h-10 w-10 text-green-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
          <h3 className='text-2xl font-bold text-white mb-2'>Success!</h3>
          <p className='text-gray-300'>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessNotification;
