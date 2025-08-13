import React from "react";

const StrategySection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-8 md:py-14 lg:py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl lg:max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-8 mb-10 md:mb-14 lg:mb-12">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/image2.png" alt="" className="max-w-full md:max-w-[95%] lg:max-w-[90%]" />
        </div>
        <div className="w-full md:w-1/2 space-y-3 md:space-y-4 mt-4 md:mt-0">
          <div className="text-[20px] md:text-[26px] lg:text-[24px] font-bold text-[#4F46E5] text-center md:text-left">
            Web & Mobile App Development
          </div>
          <div className="text-gray-700 text-[14px] md:text-[16px] lg:text-[15px] text-center md:text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#F28D35] hover:bg-[#e07d25] text-white font-medium py-2 px-4 md:px-6 rounded text-[12px] md:text-[14px] uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl lg:max-w-5xl flex flex-col md:flex-row-reverse justify-between items-center gap-6 md:gap-10 lg:gap-8">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/image1.png" alt="" className="max-w-full md:max-w-[95%] lg:max-w-[90%]" />
        </div>
        <div className="w-full md:w-1/2 space-y-3 md:space-y-4 mt-4 md:mt-0">
          <div className="text-[20px] md:text-[26px] lg:text-[24px] font-bold text-[#4F46E5] text-center md:text-left">
            Digital Strategy Consulting
          </div>
          <div className="text-gray-700 text-[14px] md:text-[16px] lg:text-[15px] text-center md:text-left">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix.
            We provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#F28D35] hover:bg-[#e07d25] text-white font-medium py-2 px-4 md:px-6 rounded text-[12px] md:text-[14px] uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
