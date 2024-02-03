import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dot.png'
import star from '../../public/images/bgstart.png'

const Herosection = () => {
    return (
        <div className={`w-full lg:h-screen bg-[url('/images/bg.png')] bg-cover bg-no-repeat z-0 overflow-hidden `} >
            <div className={` w-full h-full  bg-[url('/images/hero.png')] bg-no-repeat bg-contain bg-right relative `}>
                <div className='container h-full relative z-0'>
                    <div className=' w-7/12 h-full flex flex-col justify-center '>
                        <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>best gym of the city for fitness</span></h4>
                        <h1 className='lg:text-[68px] uppercase font-bold mt-3'  >train with best gym <span className='text-[#ff4e25]'>experience</span><br /> in fitness.</h1>
                        <button className='text-start mt-4  bg-[#ff4e25] px-10 py-4 text-lg font-semibold w-fit'>Get Started Now</button>
                    </div>
                </div>
            </div>
            <div className=' relative bottom-60 flex items-center justify-between'>
                <div className='lg:w-1/2 w-full bg-[#ff4e25] h-[138px] flex  lg:justify-end justify-between px-10 lg:pr-20 ' >
                    <div className='flex justify-between  w-full lg:w-8/12 lg:ps-10 ps-0 ' >
                        <div className='flex flex-col justify-center items-center '>
                            <h4 className='text-lg font-bold flex gap-2 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold text-[32px]'>1200+</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-bold flex gap-2 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold text-[32px]'>1200+</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h4 className='text-lg font-bold flex gap-2 items-center'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Expert trainer</span></h4>
                            <h2 className='font-bold text-[32px]'>1200+</h2>
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