import React from 'react'
import { Link } from 'react-router-dom'  

const LoginPage = () => {
  return (
    <div className='text-green-500 flex flex-col justify-center items-center h-screen font-sans'>
        <form action="">
            <div className='flex flex-col justify-center items-center py-3 bg-[#E50914] rounded-[10px] font-sans text-white'>
                <h1 className='font-bold '>Welcome Back !</h1>
            </div>
            <div className='h-[60vh] flex flex-col my-4 items-center bg-[#E50914] w-[40vw] rounded-[10px] font-sans text-white'>
                <p className='font-bold'>Login to your account</p>
                <div  className='my-5'>
                    <label htmlFor="" className='font-sans font-bold' >Username </label>
                    <input type="email" className='bg-gray-500 text-black font-bold w-[30vw]' required    />
                </div>
                <div  className='my-5'>
                    <label htmlFor="" className='font-sans font-bold'>Password </label>
                    <input type="password" className='bg-gray-500 text-black  w-[30vw]' required    />
                </div>
                <button type='submit' className='bg-black px-2 py-1 rounded-[5px] font-bold cursor-pointer hover:bg-gray-800' >Submit</button>
                <p>New on our Platform?   <Link to='/register' className='text-black font-bold'>Register</Link> </p>
            
            </div>
            
        </form>
    </div>
  )
}

export default LoginPage