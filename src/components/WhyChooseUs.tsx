"use client";

const WhyChooseUs = () => {
  const features = [
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      icon: (
        <svg
          className='w-12 h-12 text-[#E50914]'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'></path>
        </svg>
      ),
    },
    {
      title: "Luxury Fleet",
      description: "Premium vehicles from top manufacturers",
      icon: (
        <svg
          className='w-12 h-12 text-[#E50914]'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
        </svg>
      ),
    },
    {
      title: "Premium Experience",
      description: "Luxury vehicles for every taste and budget",
      icon: (
        <svg
          className='w-12 h-12 text-[#E50914]'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
        </svg>
      ),
    },
    {
      title: "Instant Confirmation",
      description: "Immediate booking confirmation and digital contracts",
      icon: (
        <svg
          className='w-12 h-12 text-[#E50914]'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id='about'
      className='min-h-screen flex items-center py-20 px-4 md:px-8 bg-[#0E0E0E]'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 text-white'>
          Why Choose{" "}
          <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
            InfernoDrive
          </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='glow-effect bg-gradient-to-br from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-2xl p-8 border border-[#2E2E2E] text-center transition-all duration-300'>
              <div className='flex justify-center mb-6'>{feature.icon}</div>
              <h3 className='text-2xl font-bold mb-4 text-white'>
                {feature.title}
              </h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
