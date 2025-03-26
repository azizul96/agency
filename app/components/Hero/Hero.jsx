import React from 'react';
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import HeroIMG from '../../../public/hero.svg'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
        <div className='col-span-2 '>
          <h1 className='text-2xl md:text-3xl lg:text-5xl mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'> Exploring Innovative Paths To Cultivate Your Business</h1>

          <p className='text-sm md:text-base mb-[2rem] text-black opacity-90 font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium ex itaque blanditiis at nostrum est, dolor exercitationem nobis quasi laborum veniam et perferendis dicta optio aliquid odio ab quas!</p>

          <div className='flex items-center space-x-4 md:space-x-6 '>
          <ButtonBlue text="Get Started"/>
          <ButtonRed text="Explore Features"/>
          </div>
        </div>

        <div className='col-span-3 hidden sm:block'>
          <Image src={HeroIMG} alt='Hero Image'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;