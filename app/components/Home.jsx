import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import ClientSupport from './ClientSuport/ClientSupport';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ClientSupport />
    </div>
  );
};

export default Home;