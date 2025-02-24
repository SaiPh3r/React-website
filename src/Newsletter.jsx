import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16  px-2' >
        <div className='mx-w-[1240px] max-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2' >
                <h1 className='md:4xl sm:3xl text-2xl font-bold py-2'>Want Tips And Trick To Optimize Your Flow?</h1>
                <p>Sign UP to our newsletter & stay updated</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-row'>
                    <input  type='email' placeholder='Enter Your Email' className= 'p-3 flex rounded-md w-[60%] text-white box-border border-2 border-white '></input>
                    <button className='bg-[#00df9a] w-[150px] rounded py-3 px-3 mx-auto text-black cursor-pointer flex justify-center '>Notify Me  </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Newsletter