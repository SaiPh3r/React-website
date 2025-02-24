import React from 'react'
import Laptop from "/src/assets/laptop.jpg";


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop}></img>
            <div className='text-black'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, illum debitis minus vero sequi maxime facere dolorem quo, laborum reprehenderit tenetur quos omnis aperiam! Hic, distinctio vero! Deserunt, dolorum nisi.</p>
                <button className='bg-black w-[200px] rounded py-3 mx-auto mt-4 text-[#00df9a] flex justify-center cursor-pointer'>Get Started</button>
            </div>

        </div>
    </div>
  )
}

export default Analytics