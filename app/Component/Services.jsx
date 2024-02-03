'use client'
import React from 'react';
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
import ServiceCard from './ServiceCard';
const Services = () => {
    return (
        <div className={`w-full py-32 bg-[url('/images/marge.png')]`}>
            <div className='container '>
                <div className='w-4/6 mx-auto flex flex-col items-center text-center'>
                    <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>services</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px] uppercase font-bold mt-1' >Services We're Offering</h1>
                </div>
                <div className='mt-12  grid lg:grid-cols-3 md:grid-cols-2'>
                    <ServiceCard />
                </div>
            </div>
        </div>
    );
};

export default Services;