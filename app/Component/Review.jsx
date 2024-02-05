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
const Review = () => {
    const [activeIndex, setActiveIndex] = useState(0);
   
    console.log(activeIndex)
    const imgs = [
        { id: 1, name: 'Sandra Garica', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
        { id: 2, name: 'Sandra ', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david2 },
        { id: 3, name: 'Sandra Garica', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
        { id: 4, name: 'Sandra ', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years', img: david2 },
        { id: 5, name: 'Sandra Garica', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
        { id: 6, name: 'Sandra ', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david2 },
        { id: 7, name: 'Sandra Garica', description:'I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism.', img: david },
    ]
    return (
        <div className='w-full py-28'>
            <div className='container'>
                <div className='lg:w-[772px] mx-auto w-full  flex flex-col text-center items-center'>
                <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>Reviews</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-3' >What our saying about us</h1>
                    <div className='w-full h-full flex justify-center my-10'>
                        <Swiper  onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
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
                                            <Image src={img} className={`rounded-full w-[100px] h-[100px] `}/>
                                            <h1 className={`${activeIndex === i ? 'block w-fll' : 'hidden'} absolute  my-7 top-[30%] text-2xl w-full `}>{name}</h1>
                                            <p className={`${activeIndex === i ? 'block w-fll' : 'hidden'} absolute  -left-[96%] w-[750px] top-[60%] text-base text-gray-300`}>I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years </p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;