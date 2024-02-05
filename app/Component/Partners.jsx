'use clinet'
import Image from 'next/image';
import React from 'react';
// icons start 
import shape from '../../public/images/4.png'
import shape1 from '../../public/images/partners.png'
import card1 from '../../public/images/card1.png'
import card2 from '../../public/images/card2.png'
import card3 from '../../public/images/card3.png'
import card4 from '../../public/images/card4.png'
import card5 from '../../public/images/card5.png'
// icons end 
import Marquee from "react-fast-marquee";
const Patnars = () => {
    return (
        <div className='w-full xl:h-[400px] py-4 bg-[#08101c] relative flex  flex-col justify-end '>
            <Image src={shape} width={500} height={500} alt='hello' className='absolute top-10 left-0  xl:flex hidden w-[203px]  h-[203px]' />
            <div className='xl:ps-[310px] relative -bottom-4'>
                <Image src={shape1} width={500} height={500} alt='hello' className='md:w-[383px] md:h-[90px] w-[200px] h-[30px]' />
                <div className='w-full lg:h-[179px] md:h-[80px] h-[60px] bg-[#ff4e25] md:px-10 px-3'>
                    <Marquee pauseOnHover={true} className='h-full flex  items-center'>
                        <div className='h-full flex gap-20'>
                            <Image src={card1} width={500} height={500} alt='hello' className='lg:w-[182px] lg:h-[50px] md:h-[30px] md:w-[100px] h-[20px] w-[80px] ' />
                            <Image src={card2} width={500} height={500} alt='hello' className='lg:w-[182px] lg:h-[50px] md:h-[30px] md:w-[100px] h-[20px] w-[80px] ' />
                            <Image src={card3} width={500} height={500} alt='hello' className='lg:w-[182px] lg:h-[50px] md:h-[30px] md:w-[100px] h-[20px] w-[80px] ' />
                            <Image src={card4} width={500} height={500} alt='hello' className='lg:w-[182px] lg:h-[50px] md:h-[30px] md:w-[100px] h-[20px] w-[80px] ' />
                            <Image src={card5} width={500} height={500} alt='hello' className='lg:w-[182px] lg:h-[50px] md:h-[30px] md:w-[100px] h-[20px] w-[80px] ' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Patnars;