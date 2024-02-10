'use client'
import React from 'react';
// // swiperjs star
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// swiper send
import SlideCard from './SlideCard';
import vector from '../../../public/images/Vector.png'
const Slide = () => {
    const slidersName = [
        {
            id: 1,
            name: 'bench press'
        },
        {
            id: 2,
            name: 'cardio'
        },
        {
            id: 3,
            name: 'dead lift'
        },
        {
            id: 4,
            name: 'pilates'
        },
        {
            id: 5,
            name: 'dead lift '
        },
        {
            id: 6,
            name: 'bench press'
        },
        {
            id: 7,
            name: 'bench press'
        },
        {
            id: 8,
            name: 'cardio'
        },
        {
            id: 9,
            name: 'dead lift'
        },
        {
            id: 10,
            name: 'pilates'
        },
        {
            id: 11,
            name: 'dead lift '
        },
        {
            id: 12,
            name: 'bench press'
        },

    ]
    return (
        <div className='w-full lg:h-[115px] md:h-[80px] h-[60px]  bg-[#ff4e25] lg:py-3 py-1 md:py-2 relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay]}
                className=" flex items-center w-full  h-full  border-y-4 border-black"
            >
                {
                    slidersName.map(({ name, id }) => (
                        <SwiperSlide className='flex justify-center'>
                            <SlideCard name={name} icons={vector} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Slide;