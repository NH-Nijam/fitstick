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
            <div className='container lg:flex  w-full h-full items-center gap-10  px-3 md:px-5 xl:px-0'>
                <div className='lg:w-1/2 w-full relative px-3 md:px-5 lg:px-0'>
                    <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>About us</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px] uppercase font-bold mt-3' >we are pushing the limit of your core strength</h1>
                    <p className='md:text-base text-sm my-5'>Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of this ground brtechnology. Apple has always been at technological innovation, and the Vision Pro features </p>
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