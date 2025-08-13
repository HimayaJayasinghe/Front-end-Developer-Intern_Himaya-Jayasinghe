import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div
        className="w-[630px] h-[306px] absolute bottom-[32px] left-[40px] text-white text-[43px] font-bold capitalize px-6 pt-2 border-none rounded-lg"
        style={{ background: "linear-gradient(to right, #4DCA79, #1CBDDD)" }}
      >
        We crush your competitors, goals, and sales records - without the B.S.
        <div className="w-[214px] h-[50px] bg-[#F28D35] text-[15px] flex justify-center items-center my-8">
          Get free consultation
        </div>
      </div>
    </div>
  );
};

export default Hero;
