'use client'
import Image from 'next/image';
import React from 'react';
import serviceCardImg from '../../public/images/Rectangle.png'
import dot from '../../public/images/3dot.png'
const ServiceCard = () => {
    return (
        <div className='w-full border relative'>
            <Image src={serviceCardImg} width={500} height={500} alt='' className='w-full h-full absolute' />
            <div className='mt-12 mb-5 relative'>
                <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>power lifting</span></h4>
                <p>I have been hiring people in this space for a number of years and I have </p>
                <div>
                    <div className='w-[14px] h-[14px] rounded-full'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;