import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dot.png'
import shadow from '../../public/images/3.png'
import shape1 from '../../public/images/4.png'
import shape2 from '../../public/images/5.png'


const About = () => {
    return (
        <div className='w-full xl:h-[785px] lg:h-full bg-black relative'>
            <div className={`bg-[url('/images/1.png')] h-full bg-no-repeat bg-cover md:bg-contain   py-10`}>
                <div className='container h-full flex justify-end items-center px-3 md:px-5 relative '>
                    <div className='md:w-1/2 w-full lg:w-3/6 '>     
                        <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>About us</span></h4>
                        <h1 className='xl:text-[48px] lg:text-[30px] uppercase font-bold mt-3' >we are pushing the limit of your core strength</h1>
                        <p className='md:text-base text-sm my-5'>Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of this ground brtechnology. Apple has always been at technological innovation, and the Vision Pro features </p>
                        <Image src={shadow} width={500} height={500} className='absolute 2xl:flex top-[33%] w-[30%]  hidden -right-[10%] '/>
                        <button className='text-start mt-4  bg-[#ff4e25] md:px-10 md:py-4 px-4 py-1 text-lg font-semibold w-fit'>Get Started Now</button>
                        <Image src={shape1} width={500} height={500} alt='' className='absolute lg:flex top-8 w-[150px] h-[150px] hidden'/>    
                    </div>                  
                </div>
                <Image src={shape2} width={500} height={500} alt='' className='absolute top-0 right-0  xl:w-[254px] xl:h-[254px] md:w-[150px] md:h-[150px] md:flex hidden' />
            </div>
        </div>
    );
};

export default About;