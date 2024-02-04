'use client'
import React from 'react';
import Image from 'next/image';
const SlideCard = ({icons, name}) => {
    return (
        <div className='flex items-center justify-center md:justify-start h-full lg:gap-8 gap-5'>
            <h2 className='uppercase text-black text-[32px] font-bold'>{name}</h2>
            <Image src={icons} width={500} height={500} alt='vector' className='vector' />
        </div>
    );
};

export default SlideCard;