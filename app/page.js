import React from 'react';
import Herosection from './Component/Herosection';
import About from './Component/About';
import Patnars from './Component/Partners';
import Services from './Component/Services';
import Calculate from './Component/Calculate';
import Slide from './Component/Slide';
import Schedule from './Component/Shedule';
import Trainer from './Component/Trainer';
import Priceing from './Component/Priceing';



const HomePage = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <Patnars/>
        <Services/>
        <Calculate/>
        <Slide/>
        {/* <Schedule/> */}
        <Trainer/>
        <Priceing/>
    </div>
  );
};

export default HomePage;