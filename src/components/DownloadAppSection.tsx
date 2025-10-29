"use client";

const DownloadAppSection = () => {
  return (
    <section className='min-h-screen flex items-center py-20 px-4 md:px-8 bg-black/50'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#2E2E2E]/80 to-black backdrop-blur-lg rounded-3xl p-12 border border-[#2E2E2E]'>
          <div className='lg:w-1/2 mb-10 lg:mb-0'>
            <h2 className='text-4xl font-bold mb-6 text-white'>
              Get Our{" "}
              <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
                Mobile App
              </span>
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-lg'>
              Download our app for instant bookings, exclusive offers, and a
              premium rental experience on the go.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='flex items-center justify-center bg-black/50 hover:bg-black border border-[#2E2E2E] py-4 px-8 rounded-2xl transition-all duration-300'>
                <div className='mr-4'>
                  <div className='relative w-10 h-10'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#FF3838] rounded-lg'></div>
                    <div className='absolute inset-1 bg-black rounded flex items-center justify-center'>
                      <div className='w-4 h-4 rounded-full bg-gradient-to-r from-[#E50914] to-[#FF3838]'></div>
                    </div>
                  </div>
                </div>
                <div className='text-left'>
                  <div className='text-xs text-gray-400'>Download on the</div>
                  <div className='text-xl font-bold text-white'>App Store</div>
                </div>
              </button>

              <button className='flex items-center justify-center bg-black/50 hover:bg-black border border-[#2E2E2E] py-4 px-8 rounded-2xl transition-all duration-300'>
                <div className='mr-4'>
                  <div className='relative w-10 h-10'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#FF3838] to-[#E50914] rounded-lg'></div>
                    <div className='absolute inset-1 bg-black rounded flex items-center justify-center'>
                      <div className='w-4 h-4 rounded-full bg-gradient-to-r from-[#FF3838] to-[#E50914]'></div>
                    </div>
                  </div>
                </div>
                <div className='text-left'>
                  <div className='text-xs text-gray-400'>GET IT ON</div>
                  <div className='text-xl font-bold text-white'>
                    Google Play
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className='lg:w-1/2 flex justify-center'>
            <div className='relative'>
              <div className='floating w-64 h-64 bg-gradient-to-br from-[#2E2E2E] to-black rounded-3xl shadow-2xl flex items-center justify-center animation-delay-1000 border border-[#2E2E2E]'>
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2E2E2E]/20 to-black/20 backdrop-blur-sm'></div>
                <div className='relative z-10'>
                  <div className='relative w-40 h-24'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#FF3838] rounded-xl transform rotate-3'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#FF3838] to-[#E50914] rounded-xl transform -rotate-3'></div>
                    <div className='absolute inset-2 bg-black rounded-lg flex items-center justify-center'>
                      <div className='w-8 h-8 rounded-full bg-gradient-to-r from-[#E50914] to-[#FF3838] flex items-center justify-center'>
                        <div className='w-4 h-4 rounded-full bg-white'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating car elements */}
              <div className='absolute -top-8 -right-8 w-20 h-20 rounded-full bg-[#E50914]/20 backdrop-blur-sm border border-[#E50914]/30 flex items-center justify-center floating'>
                <div className='w-10 h-6 rounded bg-gradient-to-r from-[#E50914] to-[#FF3838]'></div>
              </div>

              <div className='absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-[#FF3838]/20 backdrop-blur-sm border border-[#FF3838]/30 flex items-center justify-center floating animation-delay-2000'>
                <div className='w-8 h-4 rounded bg-gradient-to-r from-[#FF3838] to-[#E50914]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
