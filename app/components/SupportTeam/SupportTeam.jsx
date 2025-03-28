import React from 'react';
import Icon1 from '../../../public/icon1.png'
import Icon2 from '../../../public/icon2.png'
import SupportTeamImg from '../../../public/supportTeam.jpg'
import Image from 'next/image';

const SupportTeam = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center'>
        <div >
          <h1 className='text-xl md:text-3xl lg:text-4xl text-[#02073e] mb-[1rem]  font-bold leading-[2rem] md:leading-[3rem] '>Do you need help? Our support team ready to help you</h1>
          <p className='text-gray-900 opacity-90 text-base mt-[1rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt labore velit vitae harum, tempora ipsum vel molestiae libero aperiam exercitationem in. Reprehenderit pariatur saepe reiciendis, neque cum repellat sit!
          </p>
          <div className='flex items-center space-x-6 mt-[2rem]'>
            <Image src={Icon1} alt='icon' width={60} height={60}/> 
            <div>
              <h1 className='text-lg text-gray-900 font-[500] mb-[0.5rem] '>
                Email Client Support
              </h1>
              <p className='md:w-[70%] w-[90%] text-sm text-black opacity-85 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto eaque, nam porro, vitae officiis natus optio suscipit et sit dignissimos rerum</p>
            </div>
          </div>
          <div className='flex items-center space-x-6 mt-[2rem]'>
            <Image src={Icon2} alt='icon' width={60} height={60}/> 
            <div>
              <h1 className='text-lg text-gray-900 font-[500] mb-[0.5rem] '>
                Live Online Support
              </h1>
              <p className='md:w-[70%] w-[90%] text-sm text-black opacity-85 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto eaque, nam porro, vitae officiis natus optio suscipit et sit dignissimos rerum</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={SupportTeamImg} alt='image' />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;