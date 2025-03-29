import React from 'react';

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start'>
        <div className='mx-0 md:mx-auto '>
          <h1 className=' text-base text-gray-900 font-semibold mb-[1.5rem] '>
            Company
          </h1>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>About</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Affiliate</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Career </p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Blog</p>
        </div>
        <div className='mx-0 md:mx-auto '>
          <h1 className=' text-base text-gray-900 font-semibold mb-[1.5rem] '>
            My Account
          </h1>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Press inquiries</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Social Media</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Directories </p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Image & B-roll</p>
        </div>
        <div className='mx-0 md:mx-auto '>
          <h1 className=' text-base text-gray-900 font-semibold mb-[1.5rem] '>
            Our Information
          </h1>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Return Polices</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Privacy Policy</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Terms & Conditions </p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Store Hours</p>
        </div>
        <div className='mx-0 md:mx-auto '>
          <h1 className=' text-base text-gray-900 font-semibold mb-[1.5rem] '>
            About Us
          </h1>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Support Center</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Customer Support</p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>About us </p>
          <p className='text-black opacity-80 mb-[1rem] text-sm cursor-pointer hover:text-yellow-600'>Popular Campaign</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-[1rem] text-sm opacity-75'>
        Copyright © 2025 by Digital Alpha Warriors
      </div>
    </div>
  );
};

export default Footer;