"use client";

const PricingPlans = () => {
  // Pricing plans data
  const pricingPlans = [
    {
      id: 1,
      name: "Sport",
      price: "$99",
      period: "per day",
      features: [
        "Sports Cars",
        "Basic Insurance",
        "Standard Support",
        "Up to 200km/day",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Premium",
      price: "$199",
      period: "per day",
      features: [
        "Luxury Sedans",
        "Premium Insurance",
        "24/7 Support",
        "Unlimited km",
        "Free Upgrade",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Supercar",
      price: "$399",
      period: "per day",
      features: [
        "Supercars Only",
        "Full Insurance",
        "VIP Support",
        "Unlimited km",
        "Chauffeur Option",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id='pricing'
      className='min-h-screen flex items-center py-20 px-4 md:px-8 bg-[#0E0E0E]'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 text-white'>
          Rental{" "}
          <span className='bg-gradient-to-r from-[#E50914] to-[#FF3838] text-transparent bg-clip-text'>
            Plans
          </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`glow-effect rounded-3xl p-8 border transition-all duration-300 relative ${
                plan.popular
                  ? "bg-gradient-to-br from-[#2E2E2E] to-black border-[#E50914] scale-105 z-10"
                  : "bg-gradient-to-br from-[#2E2E2E]/80 to-black border-[#2E2E2E]"
              }`}>
              {plan.popular && (
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#E50914] to-[#FF3838] text-white text-sm font-bold px-6 py-2 rounded-full'>
                  MOST POPULAR
                </div>
              )}

              <h3 className='text-2xl font-bold text-center mb-6 text-white'>
                {plan.name}
              </h3>

              <div className='text-center mb-8'>
                <span className='text-5xl font-bold text-white'>
                  {plan.price}
                </span>
                <span className='text-gray-400'>/{plan.period}</span>
              </div>

              <ul className='mb-10 space-y-4'>
                {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='w-5 h-5 text-green-400 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'></path>
                    </svg>
                    <span className='text-gray-300'>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#E50914] to-[#FF3838] hover:from-[#FF3838] hover:to-[#E50914] text-white"
                    : "bg-transparent border-2 border-[#E50914] hover:bg-[#E50914]/20 text-white"
                }`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
