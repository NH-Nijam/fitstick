'use client'
import React from 'react';
import twit from '../../public/images/twitter.png'
import fb from '../../public/images/facebook.png'
import ld from '../../public/images/linkedin.png'
import insta from '../../public/images/insta.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='w-full pt-20  bg-[#01060f]'>
            <div className='container px-3 md:px-5 2xl:px-0'>
                <div className='lg:w-[821px] mx-auto  '>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" id="" className='bg-transparent outline-none border-b border-gray-400 text-[10px] focus:text-xl' />
                    </div>
                    <div className='mt-6 w-full flex items-center gap-4'>
                        <div className='w-[300px] border-b-2 md:flex hidden border-gray-800'></div>
                        <button className=' px-8 py-3 bg-[#ff4754ff] mx-auto md:mx-0'>Subscribe</button>
                    </div>
                </div>
                <div className='my-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10 items-center'>
                    {/* fitstick start  */}
                    <div className='flex flex-col gap-10 '>
                        <div className='flex items-center gap-3 text-xl uppercase font-normal'>
                            <div className='w-[14px] h-[14px] rounded-full bg-[#ff4754ff]'></div>
                            <h3 className='text-[#F90000] font-bold'>Fitstick</h3>
                        </div>
                        <p>if you have any question, feel free to contact us <span className='text-[#F90000]'>+088 123 128 5485</span></p>
                        <p className='text-base capitalize font-bold flex flex-col'><span className=' '>say in touch</span> <span className='text-[#D1CCCC]'>contactinfo@gmail.com</span></p>
                    </div>
                    {/* Quick links start  */}
                    <div className='flex flex-col gap-10 '>
                        <div className='flex items-center gap-3 text-xl uppercase font-normal'>
                            <div className='w-[14px] h-[14px] rounded-full bg-[#ff4754ff]'></div>
                            <h3 className=' font-bold'>Quick links</h3>
                        </div>
                        <p className='capitalize text-base font-bold hover:text-[#FF4E25]'>contact us</p>
                        <p className='capitalize text-base font-bold hover:text-[#FF4E25]'>tram & conditions</p>
                        <p className='capitalize text-base font-bold hover:text-[#FF4E25]'>privacy & policy</p>
                    </div>
                    {/* useful link start  */}
                    <div className='flex flex-col gap-10'>
                        <div className='flex items-center gap-3 text-xl uppercase font-normal'>
                            <div className='w-[14px] h-[14px] rounded-full bg-[#ff4754ff]'></div>
                            <h3 className=' font-bold'>useful link</h3>
                        </div>
                        <p className='capitalize text-base font-bold hover:text-[#FF4E25]'>About us</p>
                        <p className='capitalize text-base font-bold hover:text-[#FF4E25]'>blog</p>
                        <p className='capitalize text-base font-bold hover:text-[#FF4E25]'>FAQ’S</p>
                    </div>
                    {/* follow us start  */}
                    <div className='flex flex-col gap-10'>
                        <div className='flex items-center gap-3 text-xl uppercase font-normal'>
                            <div className='w-[14px] h-[14px] rounded-full bg-[#ff4754ff]'></div>
                            <h3 className=' font-bold'>follow us</h3>
                        </div>
                        <p className='capitalize text-base font-bold '>A gym, also known as a fitness center or health club, is a facility dedicated to physical fitness and exercise gyms.</p>
                        <div className='flex gap-10'>
                            <Image className='w-5 h-5' src={twit} width={500} height={500} />
                            <Image className='w-5 h-5' src={fb} width={500} height={500} />
                            <Image className='w-5 h-5' src={ld} width={500} height={500} />
                            <Image className='w-5 h-5' src={insta} width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 border-t border-gray-800 text-center'>
                <h5 className='capitalize font-bold text-base'>copyright 2023. all right reserved. <span>Fitstick</span> </h5>
            </div>
        </div>
    );
};

export default Footer;