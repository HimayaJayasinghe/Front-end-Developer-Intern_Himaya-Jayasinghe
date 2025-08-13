import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/Hero.png')",
      }}
    >
      {/* Mobile view (375px) */}
      <div className="block md:hidden w-full h-full flex flex-col">
        {/* Workspace image container - takes up most of the height */}
        <div className="flex-grow bg-cover bg-center" 
          style={{ backgroundImage: "url('/Hero.png')" }}>
        </div>
        
        {/* Bottom gradient banner */}
        <div 
          className="w-full text-white py-4 px-4"
          style={{ background: "linear-gradient(to right, #4DCA79, #1CBDDD)" }}
        >
          <h1 className="text-2xl font-bold leading-tight mb-3">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <button className="bg-[#F28D35] hover:bg-[#e55a2a] text-white font-medium py-2 px-4 uppercase text-sm">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
      
      {/* Tablet view */}
      <div className="hidden md:block lg:hidden w-full h-full relative">
        <div 
          className="absolute bottom-0 left-0 right-0 text-white py-6 px-4"
          style={{ background: "linear-gradient(to right, #4DCA79, #1CBDDD)" }}
        >
          <h1 className="text-3xl font-bold leading-tight mb-2">
            WE CRUSH YOUR COMPETITORS, GOALS, AND SALES RECORDS - WITHOUT THE B.S.
          </h1>
          <button className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white font-medium py-2 px-6 mt-2 uppercase text-sm">
            Get free consultation
          </button>
        </div>
      </div>
      
      {/* Desktop view */}
      <div
        className="hidden lg:block xl:w-[630px] lg:w-[550px] h-[280px] absolute bottom-[32px] left-[30px] text-white text-[35px] font-bold capitalize px-6 pt-2 border-none rounded-lg"
        style={{ background: "linear-gradient(to right, #4DCA79, #1CBDDD)" }}
      >
        We crush your competitors, goals, and sales records - without the B.S.
        <div className="w-[190px] h-[45px] bg-[#F28D35] text-[14px] flex justify-center items-center my-6">
          Get free consultation
        </div>
      </div>
    </div>
  );
};

export default Hero;
