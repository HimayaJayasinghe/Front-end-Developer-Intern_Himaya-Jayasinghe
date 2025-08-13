import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full bg-[#4F46E5] flex justify-between px-[80px] text-white text-[14px] py-[26px]'>
      <div className='w-1/4'>
        <img src="/Logo.png" alt="" className='w-[200px] h-[auto]' />
      </div>
      <div className='flex justify-between w-1/4 mt-2'>
        <div>Services</div>
        <div>About Us</div>
        <div>Contact</div>
        <div>Careers</div>
      </div>
    </div>
  )
}

export default NavBar
