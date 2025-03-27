import Image from 'next/image';
import React from 'react';

const FeatureCard = ({title, image}) => {
  return (
    <div className='text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 '>
      <Image src={image} alt='icon' width={70} height={70} className='mx-auto'/>
      <h1 className='text-xl mt-[1.4rem] font-[500] text-[#02073e]'>
        {title}
      </h1>
      <p className='mt-[1rem] text-black opacity-90 text-sm'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid velit, alias est, animi minus labore error nobis corrupti perferendis at! 
      </p>
    </div>
  );
};

export default FeatureCard;