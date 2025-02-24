import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const[nav,setNav]= useState(true)

    const Handlenav= ()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4' >
        <h1 className='flex w-full text-3xl font-bold text-[#00df9a] '>REACT</h1>
        <ul className=' hidden md:flex '>
            <li className='p-4 '>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={Handlenav} className='md:hidden cursor-pointer'>
        {!nav? <IoMdClose size={30}/>:<IoIosMenu size={30} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-white bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>

        <h1 className='flex w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>


            <ul className='uppercase p-4'>
                <li className='p-4 border-b'>Home</li>
                <li className='p-4 border-b'>Company</li>
                <li className='p-4 border-b'>Resources</li>
                <li className='p-4 border-b'>About</li>
                <li className='p-4 '>Contact</li>
            </ul>
            
        </div>

    </div>
  )
}

export default Navbar