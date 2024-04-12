import React from 'react'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Internal1A from '../components/Internal1A';


const Onboarding1A = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow bg-custom-gray">
        <Internal1A />
      </div>
      <Footer />
    </div>
  );
};

export default Onboarding1A