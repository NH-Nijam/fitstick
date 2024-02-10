import React from 'react';
import dot from '../../../public/images/3dot.png'
import Image from 'next/image';
const BlogCard = ({card}) => {
    const {tag,name,img}=card;
    return (
        <div className='w-full group relative hover:border border-[#FF4E25] text-white duration-500'>
            <div className='w-full h-[250px] '>
                <Image src={img} width={500} height={500} alt='this is a blog image' className='w-full h-full 
            ' />
            </div>
            <div className='border-b border-r border-s border-gray-600 group-hover:border-none p-5 flex flex-col gap-10'>
                <div className='flex items-center gap-5'>
                    <div className='w-[50px] h-[2px] bg-[#FF4E25]'></div>
                    <h4 className='text-base text-[#FF4E25]'>{tag}</h4>
                </div>
                <h1 className='text-[28px] font-bold capitalize group-hover:text-[#ff4e25] duration-500 line-clamp-2'>{name}</h1>
                <div className='flex items-center gap-3 group w-fit'>
                    <div className='w-[14px] h-[14px] group-hover:w-[30px] group-hover:h-[2px] duration-500  rounded-full bg-[#ff4e25]'></div>
                    <h3 className='text-lg font-bold text-gray-600 group-hover:text-white duration-500'>Read More</h3>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;