'use client'
import React from 'react';
import BlogCard from './BlogCard';
import card1 from '../../public/images/gm1.png'
import card2 from '../../public/images/gm2.png'
import card3 from '../../public/images/gm3.png'
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
import ellipas from '../../public/images/Ellipse 399 (1).png'
import ellipas1 from '../../public/images/Ellipse 400.png'
import plus from '../../public/images/plus.png'
import ayto from '../../public/images/aito.png'


const Blog = () => {
    const array = [
        { id: 1, tag: 'Fitness', name: 'fitness helps you think and fell better', img: card1 },
        { id: 2, tag: 'ACROBATICS', name: '10 tips how to prepare me fast and easy ', img: card2 },
        { id: 3, tag: 'Fitness', name: 'today is the best day to in training', img: card3 },

    ]
    return (
        <div className='w-full py-28 relative'>
            <div className='container px-3 md:px-5 2xl:px-0'>
                <div className='md:w-4/6 mx-auto flex flex-col md:items-center md:text-center'>
                <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>blog</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-1' >Latest Blog Posts</h1>
                </div>
                <div className='mt-12  grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-3 md:px-5'>
                    {
                        array.map(card => <BlogCard key={card.id} card={card} />)
                    }
                </div>
            </div>
            <Image src={ellipas} width={500} height={500} className='absolute w-[258px] h-[273px] top-0' />
            <Image src={ellipas1} width={500} height={500} className='absolute w-[196px] h-[199px] right-0 bottom-0' />
            <Image src={plus} width={500} height={500} className='absolute w-[169px] h-[169px] lg:flex hidden left bottom-0' />
            <Image src={ayto} width={500} height={500} className='absolute w-[133px] h-[140px] right-0 top-0 lg:flex hidden' />
        </div>
    );
};

export default Blog;