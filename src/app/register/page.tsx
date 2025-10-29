"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Card from "@/components/shared/Card";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        router.push("/login");
      }, 1500);
    }
  };

  return (
    <div className='min-h-screen bg-[#0E0E0E] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <Card glow>
          <div className='text-center'>
            <div className='mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-[#E50914] to-[#FF3838] flex items-center justify-center'>
              <svg
                className='h-12 w-12 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                />
              </svg>
            </div>
            <h2 className='mt-6 text-3xl font-extrabold text-white'>
              Create your account
            </h2>
            <p className='mt-2 text-sm text-gray-400'>
              Or{" "}
              <button
                onClick={() => router.push("/login")}
                className='font-medium text-[#E50914] hover:text-[#FF3838]'>
                sign in to your existing account
              </button>
            </p>
          </div>

          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md space-y-4'>
              <Input
                id='name'
                name='name'
                type='text'
                required
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your full name'
                label='Full Name'
                error={errors.name}
              />

              <Input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                label='Email address'
                error={errors.email}
              />

              <Input
                id='phone'
                name='phone'
                type='tel'
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                label='Phone Number'
                error={errors.phone}
              />

              <Input
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                value={formData.password}
                onChange={handleChange}
                placeholder='Create a password'
                label='Password'
                error={errors.password}
              />

              <Input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                autoComplete='new-password'
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Confirm your password'
                label='Confirm Password'
                error={errors.confirmPassword}
              />
            </div>

            <div>
              <Button
                type='submit'
                variant='primary'
                fullWidth
                disabled={isLoading}>
                {isLoading ? (
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
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-[#2E2E2E]'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-[#0E0E0E] text-gray-400'>
                  Or sign up with
                </span>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-3'>
              <div>
                <a
                  href='#'
                  className='w-full inline-flex justify-center py-2 px-4 border border-[#2E2E2E] rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-[#2E2E2E] transition-colors duration-300'>
                  <div className='w-5 h-5 text-[#E50914]'>
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'>
                      <path d='M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z' />
                    </svg>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='w-full inline-flex justify-center py-2 px-4 border border-[#2E2E2E] rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-[#2E2E2E] transition-colors duration-300'>
                  <div className='w-5 h-5 text-[#E50914]'>
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'>
                      <path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
