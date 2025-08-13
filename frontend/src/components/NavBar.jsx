import React, { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className='w-full bg-[#4F46E5] flex justify-between px-[20px] md:px-[60px] xl:px-[80px] lg:px-[40px] text-white text-[14px] py-[15px] md:py-[26px]'>
      <div className='w-1/2 md:w-1/3 lg:w-1/3'>
        <img src="/Logo.png" alt="at digital" className='w-[120px] md:w-[180px] xl:w-[200px] lg:w-[180px] h-[auto]' />
      </div>
      
      {/* Mobile hamburger menu */}
      <div className='block md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>
      
      {/* Desktop menu */}
      <div className='hidden md:flex justify-between w-1/2 md:w-1/2 xl:w-1/4 lg:w-1/3 mt-2'>
        <div>Services</div>
        <div>About Us</div>
        <div>Contact</div>
        <div>Careers</div>
      </div>
      
      {/* Mobile menu modal with animation */}
      <div 
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className='p-4 flex justify-end mb-4'>
          <button 
            onClick={() => setMenuOpen(false)} 
            className="text-black text-2xl transition-transform hover:rotate-90 duration-300"
          >
            ✕
          </button>
        </div>
        <div className='flex flex-col px-4 py-2'>
          {['HOME', 'SERVICES', 'ABOUT US', 'CONTACT US', 'CAREERS'].map((item, index) => (
            <div 
              key={index}
              className='py-3 text-black font-medium transform transition-all duration-300 ease-in-out'
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: menuOpen ? '1' : '0',
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
