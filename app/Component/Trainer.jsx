'use client'
import React from 'react';
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
import expert from '../../public/images/expert.png'
import TrainerCard from './TrainerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import david from '../../public/images/DavidBranddn.png'
import da from '../../public/images/Da.png'

const Trainer = () => {
    const CardData = [
        { id: 1, name: 'Malaka', image: david },
        { id: 2, name: 'Mollika', image: da },
        { id: 3, name: 'Monisa', image: david },
        { id: 4, name: 'Manaliya', image: da },
        { id: 5, name: 'Malaka', image: david },
        { id: 6, name: 'Malaka', image: da },
    ]
    return (
        <div className={` w-full h-[700px] relative py-20 lg:py-0 `}>
            <Image src={expert} width={500} height={500} className='absolute w-full h-full' />
            <div className='container lg:flex  w-full h-full items-center gap-10  px-3 md:px-5 2xl:px-0'>
                <div className='lg:w-1/2 w-full relative '>
                    <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>trainers</span></h4>
                    <h1 className='xl:text-[48px] md:text-4xl text-base md:leading-snug capitalize font-bold mt-3' >meet our expert fitness trainers.</h1>
                    <p className='md:text-base my-5 text-[10px]'>Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the. </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Swiper

                        pagination={{
                            clickable: true,
                            border: '2px solid red'
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },
                            641: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            }
                        }}
                    >
                        {
                            CardData.map(({ id, name, image }) => (
                                <SwiperSlide>
                                    <TrainerCard key={id} name={name} image={image} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Trainer;