'use client'
import Image from 'next/image';
import React from 'react';
import picon from '../../public/images/picon.png'
const PriceCard = ({name, price}) => {
    return (
        <div className='group  border border-gray-600 duration-500 hover:border-[#ff4e25] p-10'>
            <h3 className='text-[32px] font-bold'>{name}</h3>
            <h1 className='my-5'><span className='text-[48px] font-bold text-[#ff4e25]'>${price} /</span><span className='text-base text-gray-400 font-bold'>Free</span></h1>
            <div className='flex flex-col gap-3'>
                <p className='flex items-center gap-3 text-base'><Image src={picon} width={500} height={500} className='w-5 h-5' /><span>All Timited Link</span></p>
                <p className='flex items-center gap-3 text-base'><Image src={picon} width={500} height={500} className='w-5 h-5' /><span>Own Analytics Platform</span></p>
                <p className='flex items-center gap-3 text-base'><Image src={picon} width={500} height={500} className='w-5 h-5' /><span>Chat Support</span></p>
            </div>
            <div className='mt-16 flex justify-center '>
                <button className='w-fit px-8 py-3 border-2 border-[#3f1c28] text-lg mx-auto group-hover:border-none duration-500 group-hover:bg-[#FF4E25]'>Get Membership</button>
            </div>

        </div>
    );
};

export default PriceCard;