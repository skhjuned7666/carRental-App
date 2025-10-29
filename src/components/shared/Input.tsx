import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label
            htmlFor={props.id}
            className='block text-sm font-medium text-gray-300 mb-1'>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`appearance-none relative block w-full px-4 py-3 border ${
            error ? "border-red-500" : "border-[#2E2E2E]"
          } placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-[#E50914] focus:border-[#E50914] focus:z-10 sm:text-sm ${className}`}
          {...props}
        />
        {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
