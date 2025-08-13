import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div
        className="w-[630px] xl:w-[630px] lg:w-[550px] h-[306px] xl:h-[306px] lg:h-[280px] absolute bottom-[32px] left-[40px] lg:left-[30px] text-white text-[43px] xl:text-[43px] lg:text-[35px] font-bold capitalize px-6 pt-2 border-none rounded-lg"
        style={{ background: "linear-gradient(to right, #4DCA79, #1CBDDD)" }}
      >
        We crush your competitors, goals, and sales records - without the B.S.
        <div className="w-[214px] xl:w-[214px] lg:w-[190px] h-[50px] xl:h-[50px] lg:h-[45px] bg-[#F28D35] text-[15px] lg:text-[14px] flex justify-center items-center my-8 lg:my-6">
          Get free consultation
        </div>
      </div>
    </div>
  );
};

export default Hero;
