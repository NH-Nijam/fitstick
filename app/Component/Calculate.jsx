'use client'
import Image from 'next/image';
import React from 'react';
import dot from '../../public/images/3dotred.png'
import shape2 from '../../public/images/5.png'
const Calculate = () => {
    return (
        <div className={`w-full xl:h-[785px] lg:h-full  relative  bg-[url('/images/bg.png')]`}>
            <div className={`bg-[url('/images/calculate.png')] w-full h-full bg-no-repeat relative `}>
                <div className={`bg-[url('/images/Calimg.png')] h-full bg-no-repeat  bg-contain  py-10 relative bg-right `}>
                    <div className='container h-full flex justify-start items-center px-3 md:px-5 relative '>
                        <div className='md:w-1/2 w-full lg:w-3/6 '>

                            <h1 className='xl:text-[48px] lg:text-[30px] uppercase font-bold mt-3 w-fit mb-2' >calculate your 
                                BMI now!</h1>
                            <h4 className='text-base text-gray-200 flex gap-2 mb-10 md:mb-0 '><Image className=' w-4 h-3 mt-2' src={dot} width={500} height={500} alt='dot' /><span>Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of thi Welcome to this</span></h4>
                           <div className='my-10 grid md:grid-cols-2 gap-6'>
                                <div className='flex flex-col'>
                                    <label htmlFor="cm" className='text-[#ff4e25] text-base uppercase '>height / cm</label>
                                    <input type="text" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="kg" className='text-[#ff4e25] text-base uppercase '>weight / kg</label>
                                    <input type="text" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="kg" className='text-[#ff4e25] text-base uppercase '>ACE</label>
                                    <input type="text" className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="kg" className='text-[#ff4e25] text-base uppercase '>GENDER</label>
                                    <select name="" id=""  className='px-5 py-2 bg-[#383838] rounded outline-none focus:border focus:border-[#ff4e25]'>
                                        <option value="male">MALE</option>
                                        <option value="female">FEMALE</option>
                                    </select>
                                </div>
                           </div>
                            <button className='text-start mt-4  bg-[#ff4e25] md:px-10 md:py-4 px-4 py-1 text-lg font-semibold w-fit uppercase'>calculate bmi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculate;