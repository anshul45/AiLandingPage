import { Moon, MoveRight, Sun } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Navbar = () => {

  const links = ["API", "Blog", "Solutions", "Feature", "Pricing"]

  return (
    <div className=' w-[75%] text-[#E5E7EB] bg-[#17181B] shadow-md shadow-gray-600 px-6 h-16 mx-auto flex items-center justify-between rounded-md'>
      <a href='#'>
        <Image className='inline mr-2' alt='opengig' src="https://d2iyl9s54la9ej.cloudfront.net/opengig.png" width={25} height={25} />
        <span className='text-lg'>OpenGig</span>
      </a>
      <div className='flex gap-7'>
        {links?.map(link =>
          <Navlink title={link} key={link} />
        )}
      </div>
      <div className='flex gap-5 items-center'>
        {/* <Navlink title={<Sun strokeWidth={1} />}/> */}
        <Navlink title={<Moon strokeWidth={1} />} />
        <div className='flex gap-4 bg-[#FFF] p-2.5 rounded-md text-[#000] cursor-pointer duration-300 delay-100 hover:translate-x-2'>
          <span>Try playground</span>
          <MoveRight />
        </div>
      </div>
    </div>
  )
}


const Navlink = ({ title }: { title: string | React.ReactNode }) => {
  return (
      <span className=" cursor-pointer text-base px-3 py-1.5 rounded-md  hover:bg-gray-400  delay-100 ease-in duration-300  ">{title}</span>

  )
}

export default Navbar