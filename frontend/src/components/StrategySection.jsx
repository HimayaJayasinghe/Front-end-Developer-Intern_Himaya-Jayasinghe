import React from "react";

const StrategySection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 lg:py-12 px-8 bg-white">
      <div className="container mx-auto max-w-6xl lg:max-w-5xl flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-8 mb-16 lg:mb-12">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/image2.png" alt="" className="max-w-full lg:max-w-[90%]" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <div className="text-[27px] lg:text-[24px] font-bold text-[#4F46E5]">
            Web & Mobile App Development
          </div>
          <div className="text-gray-700 text-base text-[16px] lg:text-[15px]">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </div>
          <div>
            <button className="bg-[#F28D35] hover:bg-[#e07d25] text-white font-medium py-2 px-6 rounded text-[14px] uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl lg:max-w-5xl flex flex-col md:flex-row-reverse justify-between items-center gap-12 lg:gap-8">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/image1.png" alt="" className="max-w-full lg:max-w-[90%]" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <div className="text-[27px] lg:text-[24px] font-bold text-[#4F46E5]">
            Digital Strategy Consulting
          </div>
          <div className="text-gray-700 text-base text-[16px] lg:text-[15px]">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix.
            We provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </div>
          <div>
            <button className="bg-[#F28D35] hover:bg-[#e07d25] text-white font-medium py-2 px-6 rounded text-[14px] uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
