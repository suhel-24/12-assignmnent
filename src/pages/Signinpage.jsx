import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Signin from '../components/Signin';

const Signinpage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <Signin />
      </div>
      <div className='mt-3'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Signinpage;
