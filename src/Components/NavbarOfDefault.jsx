import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='font-sans'>
            <div className='flex flex-row justify-between items-center  bg-black'>
                <div className='flex flex-row items-center'>
                    <h1  className='text-green-500 text-2xl font-bold mx-2 my-1 py-2' >StockGauge</h1>
                    <img src={logo} alt=""  className='h-10' />
                </div>
                <div className='flex flex-row items-center'>
                    <ul className='flex flex-row mx-2 my-1 py-2'>
                        <li > <button className='mx-1 my-1 py-2 text-green-500 '>Home</button></li>
                        <li className='mx-1 my-1 py-2 text-green-500'>About</li>
                    </ul>
                </div>
                <div className='flex flex-row items-center'>
                <button className='mx-1 my-1 bg-black text-green-500 font-medium px-3 py-1 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 border cursor-pointer'>SignUp</button>
                <button className='mx-1 my-1 bg-green-500 text-black font-medium px-3 py-1 rounded-lg shadow-md border-2  hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 cursor-pointer'>Login</button>
                </div>
            
            </div>
        </nav>
  )
}

export default Navbar