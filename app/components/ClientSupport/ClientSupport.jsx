import React from 'react';
import Image from 'next/image';
import SupportImg from '../../../public/support.jpg'
import { CheckIcon } from '@heroicons/react/24/solid';

const ClientSupport = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
        <div className='order-2 lg:order-1'>
          <Image src={SupportImg} alt='SupportImg' />
        </div>
        <div className='order-1 lg:order-2'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-[#02073e] font-bold leading-[2rem] md:leading-[3rem] '>
            Client support is our main priority with their hundred percent
          </h1>
          <p className=' mt-[1.5rem] mb-[1.5rem] text-black opacity-90'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam omnis obcaecati quis quaerat soluta nam rem, consectetur voluptatum placeat iusto cumque non consequatur cupiditate aliquid! Dicta unde adipisci voluptates eum?
          </p>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-base text-[#02073e] font-[500]'>Live Online Support</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-base text-[#02073e] font-[500]'>Email & Phone Support</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-base text-[#02073e] font-[500]'>Call Scheduling</p>
          </div>
          <div className='flex items-center mb-[1rem] space-x-3'>
            <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600'/>
            <p className='text-base text-[#02073e] font-[500]'>Contact Form</p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ClientSupport;