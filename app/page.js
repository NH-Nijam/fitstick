import React from 'react';
import Herosection from './Component/Herosection';
import About from './Component/About';
import Patnars from './Component/Partners';
import Services from './Component/Services';


const HomePage = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <Patnars/>
        <Services/>
    </div>
  );
};

export default HomePage;