import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dot.png'
import star from '../../public/images/bgstart.png'
import hero from '../../public/images/hero.png'

const Herosection = () => {
    return (
        <div className={`w-full  bg-[url('/images/herobg.png')] bg-cover bg-no-repeat relative z-[1] overflow-hidden  `} >
            <Image src={hero} width={500} height={500} className='absolute right-0 h-full w-[50%] ' />
            <div className='container h-full relative z-0 px-3 md:px-5 2xl:px-0 xl:py-[150px] lg:py-[70px] md:py-16 py-12'>
                <div className=' w-7/12 h-full flex flex-col  '>
                    <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px]' src={dot} width={500} height={500} alt='dot' /><span>best gym of the city for fitness</span></h4>
                    <h1 className='xl:text-[68px] lg:text-[45px] lg:leading-snug  md:text-4xl text-base uppercase font-bold mt-3  md:ms-0'  >train with best <br /> gym <span className='text-[#ff4e25]'>experience</span><br /> in fitness.</h1>
                    <button className='text-start md:mt-8 mt-4 md:ms-0  bg-[#ff4e25] md:px-10 px-3 py-1 md:py-4 md:text-lg text-xs font-semibold w-fit'>Get Started Now</button>
                </div>
            </div>
            <div className=' relative 2xl:bottom-20 lg:bottom-10 xl:bottom-20 md:bottom-9  flex items-center justify-between'>
                <div className='2xl:w-1/2 w-full bg-[#ff4e25] xl:h-[138px] lg:h-[100px] md:h-[80px]  h-[60px] flex  2xl:justify-end lg:justify-center justify-between  2xl:pr-20 px-2   ' >
                    <div className='flex justify-between  w-full xl:w-8/12   ' >
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h4 className='lg:text-lg md:text-base text-[10px] font-bold flex md:gap-2 gap-1 items-center'><Image className=' md:w-4 md:h-3 w-2 h-2' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold lg:text-[32px] md:text-base text-xs'>1200+</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h4 className='lg:text-lg md:text-base text-[10px] font-bold flex md:gap-2 gap-1 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold lg:text-[32px] md:text-base text-xs'>1200+</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h4 className='lg:text-lg md:text-base text-[10px] font-bold flex md:gap-2 gap-1 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold lg:text-[32px] md:text-base text-xs'>1200+</h2>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:flex md:justify-end hidden'>
                    <Image src={star} width={500} height={500} alt='start' className='lg:w-[168px] lg:h-[168px] md:w-[100px] md:h-[100px] ' />
                </div>
            </div>
        </div>
    );
};

export default Herosection;