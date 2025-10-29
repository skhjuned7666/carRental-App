"use client";

import { useState, useEffect } from "react";
import Modal from "@/components/shared/Modal";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Card from "@/components/shared/Card";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoginOpen(false);
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors: Record<string, string> = {};

    if (!registerForm.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!registerForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!registerForm.password) {
      newErrors.password = "Password is required";
    } else if (registerForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!registerForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsRegisterOpen(false);
      }, 1500);
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <>
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/5 backdrop-blur-md py-2" : "bg-black/90 py-4"
        }`}>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div
              className='text-2xl font-bold text-white cursor-pointer'
              onClick={() => scrollToSection("home")}>
              Inferno<span className='text-[#E50914]'>Drive</span>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex space-x-8'>
              {[
                { name: "Home", id: "home" },
                { name: "Cars", id: "cars" },
                { name: "Pricing", id: "pricing" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-medium transition-colors duration-300 ${
                    item.id === "home"
                      ? "text-white"
                      : "text-white hover:text-[#E50914]"
                  }`}>
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className='hidden md:flex space-x-4'>
              <button
                onClick={() => setIsLoginOpen(true)}
                className='text-white hover:text-[#E50914] font-medium transition-colors duration-300'>
                Login
              </button>
              <Button onClick={() => setIsRegisterOpen(true)} variant='primary'>
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-white focus:outline-none'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle mobile menu'>
              {isMenuOpen ? (
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
              ) : (
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
                    d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden mt-4 py-4 border-t border-[#2E2E2E]'>
              <div className='flex flex-col space-y-4'>
                {[
                  { name: "Home", id: "home" },
                  { name: "Cars", id: "cars" },
                  { name: "Pricing", id: "pricing" },
                  { name: "About", id: "about" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`font-medium transition-colors duration-300 py-2 ${
                      item.id === "home"
                        ? "text-white"
                        : "text-white hover:text-[#E50914]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
                <div className='pt-4 border-t border-[#2E2E2E]'>
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className='block w-full text-center text-white hover:text-[#E50914] font-medium py-2 transition-colors duration-300'>
                    Login
                  </button>
                  <Button
                    onClick={() => {
                      setIsRegisterOpen(true);
                      setIsMenuOpen(false);
                    }}
                    variant='primary'
                    className='mt-2 w-full'>
                    Register
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        title='Sign in to your account'>
        <div className='text-center mb-6'>
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
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          </div>
          <p className='mt-2 text-sm text-gray-400'>
            Or{" "}
            <button
              onClick={() => {
                setIsLoginOpen(false);
                setIsRegisterOpen(true);
              }}
              className='font-medium text-[#E50914] hover:text-[#FF3838] transition-colors duration-200'>
              create a new account
            </button>
          </p>
        </div>

        <form className='space-y-6' onSubmit={handleLoginSubmit}>
          <div className='space-y-4'>
            <Input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              value={loginForm.email}
              onChange={handleLoginChange}
              placeholder='Enter your email'
              label='Email address'
            />
            <div>
              <div className='flex items-center justify-between mb-1'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-300'>
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-[#E50914] hover:text-[#FF3838] transition-colors duration-200'>
                    Forgot your password?
                  </a>
                </div>
              </div>
              <Input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder='Enter your password'
              />
            </div>
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
                  Signing in...
                </>
              ) : (
                "Sign in"
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
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 grid grid-cols-2 gap-3'>
            <div>
              <a
                href='#'
                className='w-full inline-flex justify-center py-2 px-4 border border-[#2E2E2E] rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-[#2E2E2E] transition-colors duration-200'>
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
                className='w-full inline-flex justify-center py-2 px-4 border border-[#2E2E2E] rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-[#2E2E2E] transition-colors duration-200'>
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
      </Modal>

      {/* Register Modal */}
      <Modal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        title='Create your account'>
        <div className='text-center mb-6'>
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
          <p className='mt-2 text-sm text-gray-400'>
            Or{" "}
            <button
              onClick={() => {
                setIsRegisterOpen(false);
                setIsLoginOpen(true);
              }}
              className='font-medium text-[#E50914] hover:text-[#FF3838] transition-colors duration-200'>
              sign in to your existing account
            </button>
          </p>
        </div>

        <form className='space-y-6' onSubmit={handleRegisterSubmit}>
          <div className='space-y-4'>
            <Input
              id='name'
              name='name'
              type='text'
              required
              value={registerForm.name}
              onChange={handleRegisterChange}
              placeholder='Enter your full name'
              label='Full Name'
              error={errors.name}
            />

            <Input
              id='register-email'
              name='email'
              type='email'
              autoComplete='email'
              required
              value={registerForm.email}
              onChange={handleRegisterChange}
              placeholder='Enter your email'
              label='Email address'
              error={errors.email}
            />

            <Input
              id='phone'
              name='phone'
              type='tel'
              required
              value={registerForm.phone}
              onChange={handleRegisterChange}
              placeholder='Enter your phone number'
              label='Phone Number'
              error={errors.phone}
            />

            <Input
              id='register-password'
              name='password'
              type='password'
              autoComplete='new-password'
              required
              value={registerForm.password}
              onChange={handleRegisterChange}
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
              value={registerForm.confirmPassword}
              onChange={handleRegisterChange}
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
                className='w-full inline-flex justify-center py-2 px-4 border border-[#2E2E2E] rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-[#2E2E2E] transition-colors duration-200'>
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
                className='w-full inline-flex justify-center py-2 px-4 border border-[#2E2E2E] rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-[#2E2E2E] transition-colors duration-200'>
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
      </Modal>
    </>
  );
};

export { Header };
