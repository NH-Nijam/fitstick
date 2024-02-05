'use client'
import React from 'react';
import { Switch } from 'antd';
import PriceCard from './PriceCard';

const Priceing = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className='my-28 '>
            <div className='container px-3 md:px-5 xl:px-0'>
                <h1 className='xl:text-[48px] lg:text-[30px] uppercase font-bold text-center' >The Right plan on pricing</h1>
                <h2 className='text-lg flex justify-center gap-5 mt-4'><span className='text-[#ff4e25]'>Monthly</span><span><Switch defaultChecked onChange={onChange} /></span><span>Yearly</span></h2>
                <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    <PriceCard price='0.00' name='Basic fitness'/>
                    <PriceCard price='20' name='Premium fitness'/>
                    <PriceCard price='40' name='Premium plus'/>
                </div>
            </div>
        </div>
    );
};

export default Priceing;