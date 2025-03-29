import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import ClientSupport from './ClientSupport/ClientSupport'
import Price from './Price/Price'
import SupportTeam from './SupportTeam/SupportTeam'
import Customer from './Customer/Customer'


const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ClientSupport />
      <Price />
      <SupportTeam />
      <Customer />
    </div>
  );
};

export default Home;