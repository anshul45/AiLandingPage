"use client";
import { MoveRight, Play } from 'lucide-react';
import React, { useState } from 'react';

const Hero = () => {
    return (
        <div className='text-center space-y-7 mt-20'>
            <h1 className='font-semibold text-7xl'>ALL YOUR AI MODELS</h1>
            <h3 className='text-6xl'>IN ONE PLACE</h3>
            <p className='mx-auto w-[35%] text-lg'>
                Your all-in-one AI companion. Generate images, videos, code, documents, debug your web apps—all with Pixa's interface.
            </p>
            <div className='mx-auto flex justify-center gap-7'>
                <ButtonBorder />
                <ButtonFilled/>
            </div>
        </div>
    );
}


const ButtonBorder = () => {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);

    return (
        <div
            className='border-[1px] w-fit text-lg px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3'
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <span className={` p-1 rounded-full border-2 border-black delay-150 duration-200 ${mouseEnter ?'border-white' : ''}`}>
                <Play size={15} />
            </span>
            <span className='text-base'>Watch Video</span>
        </div>
    );
}


const ButtonFilled = () => {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);

    return (
        <div
            className={`bg-[#FFF] text-black w-fit text-lg px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3 delay-100 duration-300 ${mouseEnter ? 'scale-x-105 ' : ''}`}
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <span className=''>Get started</span>
            <MoveRight />
        </div>
    );
}

export default Hero;