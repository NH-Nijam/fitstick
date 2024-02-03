import Image from 'next/image';
import React from 'react';
const Herosection = () => {
    return (
        <div className={`w-full h-screen bg-[url('/images/bg.png')] lg:bg-cover bg-contain bg-no-repeat z-0`} >
            <div>
                <div>

                </div>
                <div>
                    <Image src='/images/hero.png' width={500} height={500} alt='hero'/>
                </div>
            </div>
        </div>
    );
};

export default Herosection;