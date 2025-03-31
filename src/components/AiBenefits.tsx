"use client"
import React, { useState } from 'react'
import ApiImage from "../../public/assets/images/home/api.png"
import ToolImage from "../../public/assets/images/home/ai-models.png"
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const AiBenefits = () => {
    const cardData = [{ image: ApiImage, title: "Unified interface", content: "Our's is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform. No more juggling between different AI systems—easily manage and interact with multiple chatbots from a single interface." },
    { image: ApiImage, title: "Api Access", content: "Pixa's LLM API offers advanced summarization, text generation, and question-answering. Easily integrate with support for JSON, HTML, Markdown, and plain text, enhancing your applications with powerful language tools." },
    { image: ToolImage, title: "Pre-built Tools", content: "Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation, simplifying advanced feature integration into your apps." },

    ]
    return (
        <div className='text-center space-y-7'>
            <h1 className='text-5xl'>Experience all the benefits of AI</h1>
            <div className='w-[80%] flex gap-8  mx-auto'>
                {cardData.map(data =>
                    <Card isVerticle={false} key={data.title} image={data.image} content={data.content} title={data.title} />
                )}
            </div>
            <div className='w-[80%] mx-auto'>
                <Card isVerticle={true} image={ToolImage} title='Multiple Ai models' content="Pixa supports various AI models, including ChatGPT, Gemini, Claude, Mistral and more, providing a range of advanced capabilities for various language and creative tasks." />
            </div>
        </div>
    )
}


const Card = ({ image, title, content, isVerticle }: { image: any, title: string, content: string, isVerticle: boolean }) => {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);
    return (
        <div className={`px-8 py-2 bg-[#252422]  rounded-2xl text-left  delay-100 duration-500 ${mouseEnter ? "scale-105" : ""} ${isVerticle ? "flex pl-28  pt-9 gap-20" : ""}`}
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >

            <Image alt='api' className='mx-auto' src={image} width={200} height={200} />
            <div className={`${isVerticle ? "pt-3 flex flex-col justify-between" : " space-y-5"}`}>
                <div className={`${isVerticle ? "" : "space-y-5"}`}>
                    <h1 className='text-2xl'>{title}</h1>
                    <p className='text-sm'>{content}</p>
                </div>
                <div className='flex gap-2'>
                    <span>Learn more</span>
                    <span className={`delay-150 duration-300 ${mouseEnter ? "translate-x-3" : ""}`}>
                        <ArrowRight />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AiBenefits