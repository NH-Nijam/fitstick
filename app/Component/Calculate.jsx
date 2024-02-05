'use client'
import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dotred.png'
import calim from '../../public/images/Calimg.png'
import calshape from '../../public/images/calshape.png'
import star from '../../public/images/5.png'
const Calculate = () => {
    return (
        <div className={`w-full relative  bg-[url('/images/bg.png')] lg:my-40  `}>
            <div className={`bg-[url('/images/calculate.png')] bg-no-repeat bg-cover relative`}>
                <Image src={calim} width={500} height={500} className='absolute right-0 h-full w-[50%] ' />
                <Image src={calshape} width={500} height={500} className='absolute w-[149px] right-0 h-[149px] z-10 ' />
                <div className='container h-full relative z-0 px-3 md:px-5 2xl:px-0 xl:py-[150px] lg:py-[70px] md:py-16 py-12  bg-black/70 md:bg-black/0'>
                    <div className='md:w-1/2 w-full lg:w-3/6 z-10'>
                        <h1 className='xl:text-[48px] md:text-4xl text-base md:leading-snug capitalize font-bold mt-3' >Calculate Your <br />
                            BMI Now!</h1>
                        <h4 className='md:text-base my-5 text-[10px] flex  '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px]' src={dot} width={500} height={500} alt='dot' /><span>Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of thi Welcome to this</span></h4>
                        <div className='my-10 grid md:grid-cols-2 gap-6'>
                            <div className='flex flex-col'>
                                <label htmlFor="cm" className='text-[#ff4e25] text-base uppercase '>height / cm</label>
                                <input type="text" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="kg" className='text-[#ff4e25] text-base uppercase '>weight / kg</label>
                                <input type="text" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="kg" className='text-[#ff4e25] text-base uppercase '>ACE</label>
                                <input type="text" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]' />
                            </div>
                            <div className='flex flex-col z-[4]'>
                                <label htmlFor="kg" className='text-[#ff4e25] text-base uppercase '>GENDER</label>
                                <select name="" id="" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]'>
                                    <option value="male">MALE</option>
                                    <option value="female">FEMALE</option>
                                </select>
                            </div>
                        </div>
                        <button className='text-start md:mt-8 mt-4 md:ms-0  bg-[#ff4e25] md:px-10 px-3 py-1 md:py-4 md:text-lg text-xs font-semibold w-fit uppercase'>calculate bmi</button>
                        <Image src={star} width={500} height={500} className='absolute left-[40%] top-[62%] lg:flex hidden  w-[196px] h-[196px] ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculate;