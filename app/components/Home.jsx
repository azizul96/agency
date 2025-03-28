import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import ClientSupport from './ClientSupport/ClientSupport'
import Price from './Price/Price'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ClientSupport />
      <Price />
    </div>
  );
};

export default Home;