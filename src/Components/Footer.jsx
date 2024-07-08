import React, {useEffect, useState} from 'react'
import { FaHeart, FaLinkedin, FaInstagramSquare, FaGithub} from "react-icons/fa";

export default function Footer() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []); 

      if(loading) {
        return <p></p>
      }
  return (
    <>
    <div className='bg-[#FFF8F3] flex justify-center py-6 flex-col items-center space-y-3'>
        <p className='flex items-center space-x-1'><span>Created by </span><a href="https://mzee.dev/" className='underline'> Hamza Khattak </a> <span>with </span> <FaHeart className='text-red-600'/></p>
           <div className='flex space-x-4 text-3xl'>
           <a href="https://www.linkedin.com/in/mzeedev/">
        <FaLinkedin/>
           </a>
           <a href="https://www.instagram.com/mzeedev/">
        <FaInstagramSquare/>
           </a>
           <a href="https://github.com/mZeeDevv">
        <FaGithub />
           </a>
           </div>
    </div>
    </>
  )
}
