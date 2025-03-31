"use client"
import React, { ReactNode, useState } from 'react'
import * as motion from "motion/react-client"
import Image from 'next/image'
import { ChevronUp, CodeXml, FileText, Images, MessageCircleCode, MoveRight, MoveUp } from 'lucide-react'

const Overview = () => {
    return (
        <motion.div
            initial={{ backgroundPosition: "200% 50%" }}
            animate={{ backgroundPosition: "0% 50%" }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
            }}
            className="h-screen w-[70%] mx-auto my-14 rounded-xl  border-2 border-transparent"
            style={{
                backgroundImage:
                    "linear-gradient(90deg, purple, blue)",
                backgroundSize: "200% 200%",
            }}
        >
            <div className="relative bg-black rounded-xl h-full flex">
                <Sidebar />
                <Content />
            </div>
        </motion.div>
    )
}


const Content = () => {
    return (
        <div className='flex-[0.75] text-center p-5 flex flex-col justify-between'>
            <div className='space-y-5 relative'>
            <h1 className='text-3xl'>Try prompts</h1>
            <p>What's Opengig?</p>
            <Image className='absolute right-[42%]' alt='opengig' src="https://d2iyl9s54la9ej.cloudfront.net/opengig.png" width={100} height={100} />
            </div>


            <div className='h-10 rounded-md bg-[#252422] flex items-center w-full'>
            <div className='flex space-x-4 items-center flex-[0.25] pl-2'>
            <div className='flex gap-1'>
            <MessageCircleCode />
            <span>GPT 4o</span>
            </div>
            <ChevronUp  />
            </div>
            <div className='flex-[0.75] w-full h-full flex'>
                <input className='w-full h-full' placeholder='How to develop a saas app?'/>
                <button className='bg-purple-500 m-1 px-1 py-1 rounded-md'>
                <MoveUp />
                </button>
            </div>
            </div>
        </div>
    )
}


const Sidebar = () => {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);

    const links = [{ logo: <Images size={18} />, content: "Image generator" }
        , { logo: <FileText size={18} />, content: "Pdf generator" }
        , { logo: <CodeXml size={18} />, content: "Code generator" }
    ]
    return (
        <div className='flex-[0.25] bg-[#252422] rounded-l-lg p-2 flex flex-col justify-between' >
            <div>
                <Image className='' alt='opengig' src="https://d2iyl9s54la9ej.cloudfront.net/opengig.png" width={25} height={25} />
                <div className='mt-5 space-y-2'>
                    {links.map(link =>
                        <SidebarLinks key={link.content} logo={link.logo} content={link.content} />
                    )}
                </div>
                <div className='flex gap-2 w-full px-2 py-1 items-center  hover:bg-gray-600 cursor-pointer'
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}>
                    <span>Show all</span>
                    <span className={`delay-100 duration-200 ${mouseEnter ? "translate-x-2" : ""}`}>
                        <MoveRight />
                    </span>
                </div>
            </div>
            <div className='border-[2px]  mx-auto w-[70%] text-center py-1.5 rounded-lg cursor-pointer delay-150 duration-300 hover:bg-white hover:text-black hover:border-white'>Hello</div>
        </div>
    )
}

const SidebarLinks = ({ logo, content }: { logo: ReactNode, content: string }) => {
    return (
        <div className='flex w-full px-1 py-1 items-center gap-1 hover:bg-gray-600 cursor-pointer'>
            {logo}
            <span>{content}</span>
        </div>
    )
}

export default Overview