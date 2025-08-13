import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white py-10 md:py-11 lg:py-10 px-8 md:px-10 lg:px-8">
      {/* Mobile and Desktop Layout */}
      <div className="container mx-auto max-w-7xl lg:max-w-6xl md:hidden lg:block">
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-11 lg:mb-10">
          <div className="md:w-2/5 lg:w-1/3 mb-8 md:mb-0">
            <div className="mb-4">
              <img src="/Logo.png" alt="at digital" className="w-[135px] md:w-[145px] lg:w-[135px]" />
            </div>
            <p className="text-[15px] md:text-[16px] lg:text-[15px] pr-0 md:pr-6 lg:pr-4">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:w-1/2 lg:w-1/3">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-bold mb-3 md:mb-4 lg:mb-3 text-[19px] md:text-[20px] lg:text-[19px]">Our Technologies</h3>
              <ul className="space-y-2 text-[13px] md:text-[14px] lg:text-[13px]">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 md:mb-4 lg:mb-3 text-[19px] md:text-[20px] lg:text-[19px]">Our Services</h3>
              <ul className="space-y-2 text-[13px] md:text-[14px] lg:text-[13px]">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-sm">
          <div className="flex justify-center space-x-4 text-[13px] md:text-[14px] lg:text-[13px]">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      
      {/* Tablet Layout (768px) */}
      <div className="hidden md:block lg:hidden container mx-auto">
        <div className="flex flex-col">
          {/* Logo and description - aligned to left */}
          <div className="mb-8 text-left">
            <div className="mb-4 flex justify-start">
              <img src="/Logo.png" alt="at digital" className="w-[145px]" />
            </div>
            <p className="text-[16px] mr-auto w-lg">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          
          {/* Technologies and Services - aligned to left */}
          <div className="flex justify-start gap-16 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-[20px] text-left">Our Technologies</h3>
              <ul className="space-y-2 text-[14px] text-left">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[20px] text-left">Our Services</h3>
              <ul className="space-y-2 text-[14px] text-left">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
          
          {/* Footer links - keeping centered as requested */}
          <div className="border-t border-white/20 pt-4 text-center">
            <div className="flex justify-center space-x-4 text-[14px]">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
