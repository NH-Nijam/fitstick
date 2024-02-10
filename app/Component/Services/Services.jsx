'use client'
import React from 'react';
import dot from '../../../public/images/3dot.png'
import Image from 'next/image';

import plus from '../../../public/images/plus.png'
import ServiceCard from './ServiceCard';


const Services = () => {
    return (
        <div className={`w-full lg:py-32 py-10 bg-[url('/images/marge.png')] bg-no-repeat relative`}>
            <div className='container px-3 md:px-5 2xl:px-0'>
                <div className='md:w-4/6 mx-auto flex flex-col md:items-center'>
                <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>services</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-1' >Services We're Offering</h1>
                </div>
                <div className='mt-12  grid lg:grid-cols-3 md:grid-cols-2 gap-8 '>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>              
                <p className=' underline text-center mt-10 text-base font-bold w-fit mx-auto hover:text-[#f0434d] duration-500'>View All Service</p>              
            </div>
            <Image src={plus} width={500} height={500} alt='plus icon not show' className='  absolute lg:flex hidden w-[250px] h-[250px] [500px] right-0 z-[5] top-[95%]'/>          
        </div>
    );
};

export default Services;