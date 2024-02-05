'use client'
import React from 'react';
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import plus from '../../public/images/plus.png'

const Services = () => {
    return (
        <div className={`w-full lg:py-32 py-10 bg-[url('/images/marge.png')] bg-no-repeat relative`}>
            <div className='container '>
                <div className='md:w-4/6 mx-auto flex flex-col items-center text-center'>
                    <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>services</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-1' >Services We're Offering</h1>
                </div>
                <div className='mt-12  grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-3 md:px-5'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>              
                <p className='text-[#f0434d] underline text-center mt-10 text-base font-bold w-fit mx-auto hover:text-white duration-500'>View All Service</p>              
            </div>
            <Image src={plus} width={500} height={500} alt='plus icon not show' className='  absolute lg:flex hidden w-[250px] h-[250px] [500px] right-0 z-[5] top-[95%]'/>          
        </div>
    );
};

export default Services;