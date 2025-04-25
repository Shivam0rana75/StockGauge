import React from 'react';
import Video from './Video';
import video from '../assets/bgVideo.mp4'
import video2 from '../assets/bg2.mp4'

const BodyOfDefault = () => {
  return (
    <div className='bg-black space-y-35'>
      <div className='font-sans flex flex-col justify-center items-center-safe bg-black h-screen'>
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <p className="py-12 font-bold text-green-500 text-center">
              Join us on our journey towards Prosperity
            </p>
        
          </div>

          <Video source={video} />

      </div>

      <div className='font-sans flex flex-col  justify-center items-center-safe bg-black h-screen'>
        <p className="py-2 font-bold text-green-500 text-center my-6">
          View Lifetime Values of Stocks and get investing tips from our Ai Chatbot
        </p>

        <Video source={video2} />

      </div>

      <div className='flex flex-row justify-center py-10'>
      <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 font-bold rounded-xl shadow-md transition-all duration-200 ease-in-out">
          {'Get Started >'}
        </button>
      </div>
      

        
    </div>
   
  )
}

export default BodyOfDefault