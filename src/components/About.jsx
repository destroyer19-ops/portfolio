import React from 'react'
import aboutPic  from '../assets/03.png'
import { ABOUT_TEXT } from '../constants'
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='mt-20 text-center text-7xl font-black  text-neutral-800'>MY</h1>
            <h1 className=" text-center font-black text-5xl">
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent'>ABOUT ME</span>
            </h1>
            <h1 className=' text-center text-7xl font-black text-neutral-800'>STATS</h1>
            <div className='flex flex-wrap'>
                <div className=" w-full py-2 lg:w-1/2 lg:p-8 ">
                    <div className="flex items-center justify-center">
                        <img src={aboutPic} alt="about" />
                    </div>
                </div>
                <div className=" w-full lg:p-8 lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6 text-justify'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About