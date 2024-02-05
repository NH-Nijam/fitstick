'use client'
import React from 'react';

const Footer = () => {
    return (
        <div className='w-full pt-10 pb-5 bg-black'>
            <div className='container'>
                <div className='lg:w-[821px] mx-auto  '>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email"  id="" className='bg-transparent outline-none border-b border-gray-400 text-[10px] focus:text-xl'  />
                    </div>
                    <div className='mt-6 w-full flex items-center gap-4'>
                        <div className='w-[300px] border-b-2 border-gray-800'></div>
                        <button className=' px-8 py-3 bg-[#ff4754ff]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;