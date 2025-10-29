import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  width?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  width = "max-w-md",
}: ModalProps) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 opacity-0 transition-opacity duration-300 ease-out'
      onClick={onClose}
      style={{ animation: isOpen ? "fadeIn 0.3s forwards" : "" }}>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div
        className={`relative bg-gradient-to-br from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-3xl border border-[#2E2E2E] w-full ${width} shadow-2xl flex flex-col max-h-[90vh] ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "scaleIn 0.3s forwards" }}>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10'
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
          <div className='text-center mb-6 pt-8'>
            <h2 className='text-2xl font-bold text-white'>{title}</h2>
          </div>
        )}

        <div className='overflow-y-auto px-8 pb-8'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
