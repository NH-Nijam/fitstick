import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dot.png'
import star from '../../public/images/bgstart.png'

const Herosection = () => {
    return (
        <div className={`w-full lg:h-screen  bg-[url('/images/herobg.png')] bg-cover bg-no-repeat relative z-0 overflow-hidden `} >
            <div className={` w-full h-full bg-[url('/images/hero.png')] bg-no-repeat bg-contain py-10 bg-right relative `}>
                <div className='container h-full relative z-0 md:px-5 xl:px-0 px-3'>
                    <div className=' w-7/12 h-full flex flex-col justify-center '>
                        <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 md:items-center '><Image className='mt-2 md:mt-0 w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>best gym of the city for fitness</span></h4>
                        <h1 className='lg:text-[68px] uppercase font-bold mt-3 ms-6 md:ms-0'  >train with best gym <span className='text-[#ff4e25]'>experience</span><br /> in fitness.</h1>
                        <button className='text-start md:mt-4 my-2 ms-6 md:ms-0  bg-[#ff4e25] md:px-10 px-3 py-1 md:py-4 md:text-lg text-xs font-semibold w-fit'>Get Started Now</button>
                    </div>
                </div>
            </div>
            <div className=' relative xl:bottom-40 lg:bottom-[135px] flex items-center justify-between'>
                <div className='2xl:w-1/2 w-full bg-[#ff4e25] xl:h-[138px] lg:h-[100px] md:h-[80px] h-[60px] flex  2xl:justify-end lg:justify-center justify-between  2xl:pr-20 pr-0 md:px-5 px-3  ' >
                    <div className='flex justify-between  w-full xl:w-8/12   ' >
                        <div className='flex flex-col justify-center items-center '>
                            <h4 className='lg:text-lg md:text-base text-[10px] font-bold flex md:gap-2 gap-1 items-center'><Image className=' md:w-4 md:h-3 w-2 h-2' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold lg:text-[32px] md:text-base text-xs'>1200+</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h4 className='lg:text-lg md:text-base text-[10px] font-bold flex md:gap-2 gap-1 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold lg:text-[32px] md:text-base text-xs'>1200+</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h4 className='lg:text-lg md:text-base text-[10px] font-bold flex md:gap-2 gap-1 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold lg:text-[32px] md:text-base text-xs'>1200+</h2>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:flex lg:justify-end hidden'>
                    <Image src={star} width={500} height={500} alt='start' className='w-[168px] h-[168px]' />
                </div>
            </div>
        </div>
    );
};

export default Herosection;