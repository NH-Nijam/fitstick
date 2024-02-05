import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dot.png'
import shadow from '../../public/images/3.png'
import shape1 from '../../public/images/4.png'
import shape2 from '../../public/images/5.png'
import aboutImg from '../../public/images/1.png'

const About = () => {
    return (
        <div className='w-full    relative'>
            <Image src={aboutImg} width={500} height={500} className='absolute left-0 h-full w-[50%] ' />
            <div className='container h-full relative z-0 px-3 md:px-5 2xl:px-0 xl:py-[150px] lg:py-[70px] md:py-16 py-12 flex justify-end bg-black/70 md:bg-black/0'>
                <div className='md:w-1/2  relative  '>
                    <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>about us</span></h4>
                    <h1 className='xl:text-[48px] md:text-4xl text-base md:leading-snug capitalize font-bold mt-3' >we are pushing the limit of your core strength</h1>
                    <p className='md:text-base my-5 text-[10px]'>Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of this ground brtechnology. Apple has always been at technological innovation, and the Vision Pro features </p>
                    <Image src={shadow} width={500} height={500} className='absolute 2xl:flex top-[33%] w-[30%] spaning hidden -right-[10%] ' />
                    <button className='text-start md:mt-8 mt-4 md:ms-0  bg-[#ff4e25] md:px-10 px-3 py-1 md:py-4 md:text-lg text-xs font-semibold w-fit'>Get Started Now</button>
                    <Image src={shape1} width={500} height={500} alt='' className='absolute flex -top-24 -left-20 w-[150px] h-[150px]  ' />
                </div>
            </div>
            <Image src={shape2} width={500} height={500} alt='' className='absolute top-0 right-0 xl:w-[254px] xl:h-[254px] md:w-[150px] md:h-[150px] w-[80px] h-[80px]' />

        </div>
    );
};

export default About;