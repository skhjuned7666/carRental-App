import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4'
      onClick={onClose}>
      <div
        className={`relative bg-gradient-to-br from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-3xl p-8 border border-[#2E2E2E] w-full max-w-md ${className}`}
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-white'
          aria-label='Close modal'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>

        {title && (
          <div className='text-center mb-6'>
            <h2 className='text-2xl font-bold text-white'>{title}</h2>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
