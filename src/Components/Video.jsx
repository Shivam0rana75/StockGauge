import React from 'react'

const Video = ({source}) => {
    return (
      <div className="bg-black h-screen flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[80vw] object-cover"
      >
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    
       
      );
}

export default Video