import React from 'react';
import Herosection from './Component/Herosection';
import About from './Component/About';
import Patnars from './Component/Partners';
import Services from './Component/Services';
import Calculate from './Component/Calculate';


const HomePage = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <Patnars/>
        <Services/>
        <Calculate/>
    </div>
  );
};

export default HomePage;