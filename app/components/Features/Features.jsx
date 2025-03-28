import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import FeatureCard from './FeatureCard';
import Icon1 from '../../../public/icon1.png'
import Icon2 from '../../../public/icon2.png'
import Icon3 from '../../../public/icon3.png'
import Icon4 from '../../../public/icon4.png'
import Icon5 from '../../../public/icon5.png'

const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <SectionHeading 
        subHeading="Ideal Solution For You" 
        heading='Explore Ultimate Features' 
      />
      <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
        <div >
          <FeatureCard title="Email Subscription" image={Icon1}/>
        </div>
        <div >
          <FeatureCard title="Email Subscription" image={Icon2}/>
        </div>
        <div >
          <FeatureCard title="Email Subscription" image={Icon3}/>
        </div>
        <div >
          <FeatureCard title="Email Subscription" image={Icon4}/>
        </div>
        <div >
          <FeatureCard title="Email Subscription" image={Icon5}/>
        </div>
        <div >
          <FeatureCard title="Email Subscription" image={Icon2}/>
        </div>
      </div>
    </div>
  );
};

export default Features;