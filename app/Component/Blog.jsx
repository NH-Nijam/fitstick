'use client'
import React from 'react';
import BlogCard from './BlogCard';
import card1 from '../../public/images/gm1.png'
import card2 from '../../public/images/gm2.png'
import card3 from '../../public/images/gm3.png'
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
const Blog = () => {
    const array = [
        { id: 1, tag: 'Fitness', name: 'fitness helps you think and fell better', img: card1 },
        { id: 2, tag: 'ACROBATICS', name: '10 tips how to prepare me fast and easy ', img: card2 },
        { id: 3, tag: 'Fitness', name: 'today is the best day to in training', img: card3 },

    ]
    return (
        <div className='w-full py-28'>
            <div className='container'>
                <div className='md:w-4/6 mx-auto flex flex-col items-center text-center'>
                    <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>Blog</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-1' >Latest Blog Posts</h1>
                </div>
                <div className='mt-12  grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-3 md:px-5'>
                    {
                        array.map(card => <BlogCard key={card.id} card={card} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;