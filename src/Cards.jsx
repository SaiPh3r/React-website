import React from 'react'
import single from "/src/assets/single.png";



const Cards = () => {
  return (
    <div  className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[90%] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl shadow-gray-800 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
          <img src={single} alt="Single"  className='w-20 mx-auto mt-[-3rem] '/>
          <h2 className='text-black font-bold text-center py-8 text-2xl'>Single User</h2>
          <p className='text-black font-bold text-4xl  text-center'>$10</p>
          <div className='text-center font-medium'>
            <p className='text-black pt-4 border-b mx-8  border-b-gray-400'>500 GB Storage</p>
            <p className='text-black py-2 border-b mx-8 border-b-gray-400'>1 Granted User</p>
          </div>
          <button className='text-black pt-3 bg-[#00df9a] w-[70%] rounded py-3 mx-auto mt-4 cursor-pointer'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl shadow-gray-800 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
          <img src={single} alt="Single"  className='w-20 mx-auto mt-[-3rem] '/>
          <h2 className='text-black font-bold text-center py-8 text-2xl'>Double User</h2>
          <p className='text-black font-bold text-4xl  text-center'>$15</p>
          <div className='text-center font-medium'>
            <p className='text-black pt-4 border-b mx-8  border-b-gray-400'>900 GB Storage</p>
            <p className='text-black py-2 border-b mx-8 border-b-gray-400'>2 Granted User</p>
          </div>
          <button className='text-black pt-3 bg-[#00df9a] w-[70%] rounded py-3 mx-auto mt-4 cursor-pointer'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl shadow-gray-800 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
          <img src={single} alt="Single"  className='w-20 mx-auto mt-[-3rem] '/>
          <h2 className='text-black font-bold text-center py-8 text-2xl'>Family Pack</h2>
          <p className='text-black font-bold text-4xl  text-center'>$30</p>
          <div className='text-center font-medium'>
            <p className='text-black pt-4 border-b mx-8  border-b-gray-400'>1500 GB Storage</p>
            <p className='text-black py-2 border-b mx-8 border-b-gray-400'>4 Granted User</p>
          </div>
          <button className='text-black pt-3 bg-[#00df9a] w-[70%] rounded py-3  mx-auto mt-4 cursor-pointer'>Start Trial</button>
        </div>

      </div>
    </div>
  )
}

export default Cards