import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white py-12 px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="mb-4">
              <img src="/Logo.png" alt="at digital" className="w-[150px]" />
            </div>
            <p className="text-[16px] pr-4">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:w-1/3">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-4 text-[21px]">Our Technologies</h3>
              <ul className="space-y-2 text-sm text-[14px]">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[21px]">Our Services</h3>
              <ul className="space-y-2 text-sm text-[14px]">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-sm">
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
    </footer>
  );
};

export default Footer;
