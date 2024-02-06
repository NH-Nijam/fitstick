'use client'
import React from 'react';
import { Switch } from 'antd';
import PriceCard from './PriceCard';
import star from '../../public/images/5.png'
import ayto from '../../public/images/aito.png'
import Image from 'next/image';

const Priceing = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className='my-28 relative '>
            <div className='container px-3 md:px-5 2xl:px-0'>
                <h1 className='xl:text-[48px] lg:text-[30px]  font-bold text-center' >The Right plan on pricing</h1>
                <h2 className='text-lg flex justify-center gap-5 mt-4'><span className='text-[#ff4e25]'>Monthly</span><span><Switch defaultChecked onChange={onChange} /></span><span>Yearly</span></h2>
                <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    <PriceCard price='0.00' name='Basic fitness' />
                    <PriceCard price='20' name='Premium fitness' />
                    <PriceCard price='40' name='Premium plus' />
                </div>
            </div>
                <Image src={star} width={500} height={500} className='absolute w-[184px] h-[184px] z-10 -top-[10%] 2xl:left-10  md:flex hidden' />
                <Image src={ayto} width={500} height={500} className='absolute w-[133px] h-[133px] z-10  2xl:right-10 right-0 -top-[10%] md:flex hidden  ' />
        </div>
    );
};

export default Priceing;