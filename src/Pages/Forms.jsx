import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidConversation } from "react-icons/bi";


export default function Forms() {
  return (
    <>
     
     <div className='flex md:space-x-5 md:mx-3 flex-col md:flex-row mx-1'>
      {/* div1 */}
     <div className='md:w-[70%] my-2 bg-transparent'>
       <div className='px-1 py-2 md:space-y-2 bg-[#FFF8F3] '>
       <h1 className='text-xl font-semibold'>All forums</h1>
       <p>Looking for Help? <Link to='/newthread' className='text-blue-700'>Create a thread</Link> </p>
       </div>
       <div className='bg-[#FFF8F3] my-3'>
        <h1 className='flex items-center font-semibold text-xl px-2 text-gray-500'><BiSolidConversation/> Quality Education</h1>
        <div className='bg-gray-200'>
        
        </div>
       </div>
      </div>
      
{/* div2 */}
     <div className=' md:w-[30%] md:my-2 bg-[#FFF8F3] flex flex-col'>
     <section className='space-y-3 p-3 bg-blue-500 text-white'>
     <h1 className='text-xl font-semibold'>Forum rules</h1>
     <p className=''>Read Forum rules before posting!</p>
     <button className='bg-white text-black rounded-md p-2 text-center'><Link to="/rules">Read</Link></button>
     </section>
     </div>


     </div>
    </>
  )
}
