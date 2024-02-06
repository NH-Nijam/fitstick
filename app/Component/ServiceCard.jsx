'use client'
import Image from 'next/image';
import React from 'react';
import serviceCardImg from '../../public/images/Rectangle.png'
import dot from '../../public/images/3dotred.png'
const ServiceCard = () => {
    return (
        <div className='w-full border group hover:border-[#ff4e25] duration-500 relative'>
            <Image src={serviceCardImg} width={500} height={500} alt='this is a service image' className='w-full h-full 
            absolute' />
            <div className='w-full h-full absolute bg-black/80'></div>
            <div className='mt-12 mb-5 relative md:px-8 px-4'>
                <h4 className='text-lg  font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>power lifting</span></h4>
                <p className='mt-5 mb-8 text-base text-gray-400'>I have been hiring people in this space for a number of years and I have </p>
                <div className='flex items-center gap-3 group w-fit'>
                    <div className='w-[14px] h-[14px] group-hover:w-[30px] group-hover:h-[2px] duration-500  rounded-full bg-[#ff4e25]'></div>
                    <h3 className='text-lg font-bold group-hover:text-[#ff4e25] duration-500'>Read More</h3> 
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;