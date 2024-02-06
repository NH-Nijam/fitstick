'use client'
import React, { useState } from 'react';
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import david from '../../public/images/DavidBranddn.png'
import david2 from '../../public/images/Da.png'
import shape from '../../public/images/4.png'
import plus from '../../public/images/plus.png'
import ayto from '../../public/images/aito.png'
import ellipse from '../../public/images/Ellipse 399.png'



const Review = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    console.log(activeIndex)
    const imgs = [
        { id: 1, name: 'Sandra Garica', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
        { id: 2, name: 'Sandra ', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david2 },
        { id: 3, name: 'Sandra Garica', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
        { id: 4, name: 'Sandra ', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years', img: david2 },
        { id: 5, name: 'Sandra Garica', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
        { id: 6, name: 'Sandra ', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david2 },
        { id: 7, name: 'Sandra Garica', description: 'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
    ]
    return (
        <div className='w-full py-28 relative '>
            <div className='container relative px-3 md:px-5 2xl:px-0'>
                <div className='lg:w-[772px] mx-auto w-full  flex flex-col md:text-center md:items-center relative'>
                    <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>Reviews</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-3' >What our saying about us</h1>
                    <div className='w-full h-full flex justify-center my-10'>
                        <Swiper onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={3}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className=" w-full  mx-auto"
                        >
                            {
                                imgs.map(({ name, img }, i) => (
                                    <SwiperSlide >
                                        <div className='w-[100px] rounded-full pb-[180px]'>
                                            <Image src={img} className={`rounded-full w-[100px] h-[100px] `} />
                                            <h1 className={`${activeIndex === i ? 'block w-fll' : 'hidden'} absolute  my-7 top-[30%] text-2xl w-full `}>{name}</h1>
                                            <p className={`${activeIndex === i ? 'block w-fll' : 'hidden'} absolute  -left-[96%] w-[750px] top-[60%] text-base text-gray-300`}>I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years </p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <Image src={ellipse} width={500} height={500} className='absolute w-full -top-20' />
                </div>
            </div>

            <Image src={shape} width={500} height={500} className='absolute 2xl:w-[266px] 2xl:h-[249px] lg:flex hidden lg:w-[180px] lg:h-[180px] top-24 left-0 ' />
            <Image src={ayto} width={500} height={500} className='absolute 2xl:w-[133px] 2xl:h-[132px] lg:w-[100px] lg:h-[100px]   left-48 lg:flex hidden ' />
            <Image src={plus} width={500} height={500} className='absolute 2xl:w-[214px] 2xl:h-[150px] lg:flex hidden lg:w-[150px] lg:h-[214px]  2xl:right-24 right-0 top-[40%]' />
        </div>
    );
};

export default Review;