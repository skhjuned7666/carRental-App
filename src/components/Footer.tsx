"use client";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id='contact'
      className='py-12 px-4 md:px-8 border-t border-[#2E2E2E] bg-[#0E0E0E]'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-2xl font-bold mb-6 text-white'>
              Inferno<span className='text-[#E50914]'>Drive</span>
            </h3>
            <p className='text-gray-400 mb-6'>
              Premium car rentals with a touch of luxury. Experience speed and
              sophistication like never before.
            </p>
            <div className='flex space-x-4'>
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href='#'
                    className='w-10 h-10 rounded-full bg-[#2E2E2E] border border-[#2E2E2E] flex items-center justify-center hover:bg-[#E50914]/20 transition-colors duration-300'
                    aria-label={social}>
                    <div className='relative w-6 h-6'>
                      <div className='absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#FF3838] rounded-full'></div>
                      <div className='absolute inset-1 bg-black rounded-full'></div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-6 text-white'>Quick Links</h4>
            <ul className='space-y-3'>
              {[
                { name: "Home", id: "home" },
                { name: "Cars", id: "cars" },
                { name: "Pricing", id: "pricing" },
                { name: "About Us", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className='text-gray-400 hover:text-[#E50914] transition-colors duration-300'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-6 text-white'>Services</h4>
            <ul className='space-y-3'>
              {[
                "Luxury Car Rental",
                "Long Term Lease",
                "Airport Transfer",
                "Roadside Assistance",
                "Insurance",
              ].map((service) => (
                <li key={service}>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-[#E50914] transition-colors duration-300'>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-6 text-white'>Contact Info</h4>
            <ul className='space-y-4 text-gray-400'>
              <li className='flex items-start'>
                <svg
                  className='w-5 h-5 text-[#E50914] mr-3 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                </svg>
                <span>123 Speed Avenue, Luxury District</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-[#E50914] mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-[#E50914] mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                </svg>
                <span>info@infernodrive.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-[#2E2E2E] mt-12 pt-8 text-center text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()} InfernoDrive. All rights reserved.
            Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
