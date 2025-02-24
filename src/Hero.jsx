import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='font-bold text-[#00df9a] p-2 '>GROW WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 sm:py-3'>GROW WITH DATA</h1>
            <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-2xl font-bold '>Fast,Flexible,For</p>

            <ReactTyped  className='md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2'   strings={["BTB","BTC","SASS"]} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl text-gray-500 pt-3'> Monitor your Data analytics for better BTB,BTC,SASS platforms</p>
            <button className='bg-[#00df9a] w-[200px] rounded py-3 mx-auto mt-4 text-black cursor-pointer '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero