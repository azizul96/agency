import React from 'react';
import Image from 'next/image';
import CustomerImg from '../../../public/customer.png';

const Customer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <h1 className='mb-[1.5rem] font-bold text-2xl text-center md:text-3xl text-[#02073e]'>Customers who work with us</h1>
      <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-base text-center text-gray-950 opacity-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste doloribus corrupti adipisci ipsum molestiae velit maiores illum excepturi repellat perferendis beatae dicta natus earum odit soluta dolor voluptates autem.
      </p>
      <p className='text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600'> 
        Explore Details
      </p>
      <div className=' mt-[2rem] text-center w-[80%] mx-auto '>
        <Image src={CustomerImg} alt='image'/>
      </div>
    </div>
  );
};

export default Customer;