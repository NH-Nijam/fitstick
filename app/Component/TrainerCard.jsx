'use client'
import Image from 'next/image';
import React from 'react';

const TrainerCard = ({name, image}) => {
    return (
        <div className='border w-full h-[350px] relative mb-20'>
            <Image src={image} width={500} height={500} className='w-full h-full absolute'/>
            <div children;>
                <div className='w-[20px] h-[20px] border'></div>
            </div>
        </div>
    );
};

export default TrainerCard;