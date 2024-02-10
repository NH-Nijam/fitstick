import React from 'react';
import Herosection from './Component/Herosection/Herosection';
import About from './Component/About/About';
import Partners from './Component/Patners/Partners';
import Services from './Component/Services/Services';
import Calculate from './Component/Calculate/Calculate';
import Slide from './Component/Slide/Slide';
import Schedule from './Component/Shedule/Shedule';
import Trainer from './Component/Trainers/Trainer';
import Priceing from './Component/Priceing/Priceing';
import Blog from './Component/Blog/Blog';
import Review from './Component/Reviews/Review';



const HomePage = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <Partners/>
        <Services/>
        <Calculate/>
        <Slide/>
        {/* <Schedule/> */}
        <Trainer/>
        <Priceing/>
        <Slide/>
        {/* <Review/> */}
        <Blog/>
    </div>
  );
};

export default HomePage;