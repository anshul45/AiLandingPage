"use client";
import React, { useState } from 'react';

const Hero2 = () => {
    return (
        <div className='text-center space-y-7 my-20'>
            <h1 className='font-semibold text-7xl'>BUILD YOUR OWN AI APPS</h1>
            <h3 className='text-6xl'>ON TOP OF PIXA APIS</h3>
            <p className='mx-auto w-[46%] text-sm'>
            Pixa's Playground is powered by Pixa's cutting-edge LLM API endpoints. Our powerful models simplify task automation, offering advanced capabilities in summarization, text generating, and Q&A handling.  </p>
            <div className='mx-auto flex justify-center gap-7'>
                <ButtonBorder />
            </div>
        </div>
    );
}


const ButtonBorder = () => {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);

    return (
        <div
            className={`border-[1px] w-fit text-lg px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3 duration-300 delay-150 ${mouseEnter ? 'shadow-md shadow-gray-400':''}`}
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <span className='text-base'>Check Pixa APIs</span>
        </div>
    );
}


export default Hero2;