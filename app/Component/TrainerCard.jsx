'use client'
import Image from 'next/image';
import React from 'react';
import shape from '../../public/images/22.png'
import twit from '../../public/images/twitter.png'
import fb from '../../public/images/facebook.png'
import ld from '../../public/images/linkedin.png'
import insta from '../../public/images/insta.png'


const TrainerCard = ({ name, image }) => {
    return (
        <div className=' w-full xl:w-[300px] h-[350px] relative mb-20 mx-auto '>
            <Image src={image} width={500} height={500} className='w-full h-full absolute ' />
            <div className='absolute bg-gray-[#010101]/70 flex items-center gap-5 w-[90%] bottom-[10%] right-0'
                style={{
                    backgroundImage:
                        'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(217, 217, 217, 0.1) 100%)',
                }}>
                <div className='w-[4px] h-[50px] bg-orange-600'></div>
                <h1>{name}</h1>
            </div>
            <div className='relative w-full h-full opacity-0 hover:opacity-100 flex justify-end  right-[10px]  duration-500'>
                <div className='relative w-[50px]'>
                    <Image src={shape} width={500} height={500} className='w-[50px] relative flex justify-center items-center' />
                    <div className='absolute flex flex-col gap-5  top-[5%] right-[30%]'>    
                        <Image src={twit} width={500} height={500} className='w-[20px]' />
                        <Image src={fb} width={500} height={500} className='w-[20px]' />
                        <Image src={ld} width={500} height={500} className='w-[20px]' />
                        <Image src={insta} width={500} height={500} className='w-[20px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerCard;