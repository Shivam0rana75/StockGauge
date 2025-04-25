import React from 'react'

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
                    <label htmlFor="" className='font-sans'>Username </label>
                    <input type="text" className='bg-black' />
                </div>
                
            </div>
        </form>
    </div>
  )
}

export default LoginPage