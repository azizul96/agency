import React from 'react';

const SectionHeading = ({heading, subHeading}) => {
  return (
    <div className='text-center p-2 '>
      <p className='text-[#0b6cad] md:text-base text-sm'>{subHeading}</p>
      <h1 className='mt-[0.5rem] font-bold text-xl md:text-3xl text-[#02073e]'>{heading}</h1>
    </div>
  );
};

export default SectionHeading;