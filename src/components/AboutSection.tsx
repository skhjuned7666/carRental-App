// "use client";

// import Card from "@/components/shared/Card";

// const AboutSection = () => {
//   return (
//     <section id='about' className='min-h-screen py-20 px-4 md:px-8'>
//       {/* Hero Section */}
//       <div className='relative min-h-screen flex items-center py-32 px-4 md:px-8 overflow-hidden pt-24 bg-[#0E0E0E]'>
//         <div className='absolute inset-0 z-0'>
//           <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob'></div>
//           <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF3838] rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
//         </div>

//         <div className='container mx-auto relative z-10'>
//           <div className='max-w-4xl mx-auto text-center'>
//             <h1 className='text-5xl md:text-7xl font-bold mb-8 leading-tight text-white'>
//               About{" "}
//               <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
//                 InfernoDrive
//               </span>
//             </h1>
//             <p className='text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto'>
//               We're revolutionizing the luxury car rental experience with our
//               premium fleet and unparalleled service. Our mission is to provide
//               the ultimate driving experience for those who demand excellence.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Company Mission Section */}
//       <div className='py-20 px-4 md:px-8 bg-black/50'>
//         <div className='container mx-auto'>
//           <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
//             <div>
//               <h2 className='text-4xl font-bold mb-8 text-white'>
//                 Our <span className='text-[#E50914]'>Mission</span>
//               </h2>
//               <p className='text-xl text-gray-300 mb-6'>
//                 At InfernoDrive, we believe that luxury and performance should
//                 be accessible to everyone who appreciates the finer things in
//                 life. Our mission is to provide an exceptional car rental
//                 experience that exceeds expectations at every turn.
//               </p>
//               <p className='text-xl text-gray-300 mb-6'>
//                 We curate the finest selection of luxury and sports vehicles,
//                 ensuring each car in our fleet represents the pinnacle of
//                 automotive engineering and design.
//               </p>
//               <p className='text-xl text-gray-300'>
//                 Our commitment to excellence extends beyond our vehicles to our
//                 customer service, offering personalized attention and support to
//                 make every rental experience memorable.
//               </p>
//             </div>
//             <div className='relative'>
//               <div className='relative w-full h-96 rounded-2xl overflow-hidden'>
//                 {/* Mission Image */}
//                 <img
//                   src='/cars/vission-mission/mission1.jpg'
//                   alt='Our Mission'
//                   className='w-full h-full object-cover'
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.src = "/cars/vission-mission/vission.jpg";
//                   }}
//                 />
//                 <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent'></div>
//               </div>
//             </div>
//           </div>

//           <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20'>
//             <div className='relative order-2 lg:order-1'>
//               <div className='relative w-full h-96 rounded-2xl overflow-hidden'>
//                 {/* Vision Image */}
//                 <img
//                   src='/cars/vission-mission/vission.jpg'
//                   alt='Our Vision'
//                   className='w-full h-full object-cover'
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.src = "/cars/vission-mission/mission1.jpg";
//                   }}
//                 />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
//               </div>
//             </div>
//             <div className='order-1 lg:order-2'>
//               <h2 className='text-4xl font-bold mb-8 text-white'>
//                 Our <span className='text-[#E50914]'>Vision</span>
//               </h2>
//               <p className='text-xl text-gray-300 mb-6'>
//                 We envision a future where luxury automotive experiences are
//                 seamlessly integrated with cutting-edge technology and
//                 sustainable practices.
//               </p>
//               <p className='text-xl text-gray-300 mb-6'>
//                 Our goal is to become the premier destination for discerning
//                 drivers who seek not just transportation, but a transformative
//                 experience behind the wheel.
//               </p>
//               <p className='text-xl text-gray-300'>
//                 Through innovation and an unwavering commitment to quality, we
//                 aim to redefine what it means to rent a luxury vehicle.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Team Section */}
//       <div className='py-20 px-4 md:px-8 bg-[#0E0E0E]'>
//         <div className='container mx-auto'>
//           <h2 className='text-4xl font-bold text-center mb-16 text-white'>
//             Our <span className='text-[#E50914]'>Team</span>
//           </h2>

//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
//             {[
//               {
//                 name: "Alex Morgan",
//                 role: "CEO & Founder",
//                 bio: "Former Formula 1 engineer with a passion for luxury automotive experiences.",
//               },
//               {
//                 name: "Sarah Johnson",
//                 role: "Fleet Manager",
//                 bio: "Automotive expert with over 15 years of experience in luxury vehicle management.",
//               },
//               {
//                 name: "Michael Chen",
//                 role: "Customer Experience Director",
//                 bio: "Dedicated to ensuring every customer receives exceptional personalized service.",
//               },
//               {
//                 name: "Emma Rodriguez",
//                 role: "Technology Officer",
//                 bio: "Innovator focused on integrating cutting-edge tech into our rental experience.",
//               },
//             ].map((member, index) => (
//               <Card key={index} glow>
//                 <div className='relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6'>
//                   <div className='absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#FF3838]'></div>
//                   <div className='absolute inset-1 bg-black rounded-full flex items-center justify-center'>
//                     <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#E50914] to-[#FF3838]'></div>
//                   </div>
//                 </div>
//                 <h3 className='text-2xl font-bold text-center mb-2 text-white'>
//                   {member.name}
//                 </h3>
//                 <p className='text-[#FF3838] text-center mb-4'>{member.role}</p>
//                 <p className='text-gray-300 text-center'>{member.bio}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className='py-20 px-4 md:px-8 bg-black/50'>
//         <div className='container mx-auto'>
//           <h2 className='text-4xl font-bold text-center mb-16 text-white'>
//             Why Choose <span className='text-[#E50914]'>InfernoDrive</span>
//           </h2>

//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
//             {[
//               {
//                 title: "Premium Fleet",
//                 description:
//                   "Curated selection of luxury and sports cars from top manufacturers",
//                 icon: (
//                   <svg
//                     className='w-12 h-12 text-[#E50914]'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'
//                     xmlns='http://www.w3.org/2000/svg'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M5 13l4 4L19 7'></path>
//                   </svg>
//                 ),
//               },
//               {
//                 title: "Expert Service",
//                 description:
//                   "Personalized attention from automotive specialists",
//                 icon: (
//                   <svg
//                     className='w-12 h-12 text-[#E50914]'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'
//                     xmlns='http://www.w3.org/2000/svg'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
//                   </svg>
//                 ),
//               },
//               {
//                 title: "24/7 Support",
//                 description: "Round-the-clock assistance for all your needs",
//                 icon: (
//                   <svg
//                     className='w-12 h-12 text-[#E50914]'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'
//                     xmlns='http://www.w3.org/2000/svg'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'></path>
//                   </svg>
//                 ),
//               },
//               {
//                 title: "Flexible Terms",
//                 description: "Adaptable rental options to suit your schedule",
//                 icon: (
//                   <svg
//                     className='w-12 h-12 text-[#E50914]'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'
//                     xmlns='http://www.w3.org/2000/svg'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='2'
//                       d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
//                   </svg>
//                 ),
//               },
//             ].map((feature, index) => (
//               <Card key={index} glow>
//                 <div className='flex justify-center mb-6'>{feature.icon}</div>
//                 <h3 className='text-2xl font-bold mb-4 text-white'>
//                   {feature.title}
//                 </h3>
//                 <p className='text-gray-300'>{feature.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
