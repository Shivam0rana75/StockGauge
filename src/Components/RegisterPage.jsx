import React from 'react'
import { Link } from 'react-router-dom'  
const RegisterPage = () => {
  return (
    <div className='text-green-500 flex flex-col justify-center items-center h-screen font-sans'>
        <form action="">
            
            <div className='h-[60vh] flex flex-col my-4 items-center bg-[#E50914] w-[40vw] rounded-[10px] font-sans text-white'>
                <p className='font-bold'>Register your  account</p>
                <div  className='my-5'>
                    <label htmlFor="" className='font-sans font-bold' >Username </label>
                    <input type="email" className='bg-gray-500 text-black font-bold w-[30vw]' required    />
                </div>
                
                <div  className='my-5'>
                    <label htmlFor="" className='font-sans font-bold'>Password </label>
                    <input type="password" className='bg-gray-500 text-black  w-[30vw]' required    />
                </div>
                <button type='submit' className='bg-black px-2 py-1 rounded-[5px] font-bold cursor-pointer hover:bg-gray-800' >Submit</button>
                <p>Already Registered ?    <Link to='/login' className='text-black font-bold'>Login</Link> </p>
            
            </div>
            
        </form>
    </div>
  )
}

export default RegisterPage