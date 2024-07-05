import React from 'react'
import { Link } from 'react-router-dom'
import OAuth from '../Components/OAuth'
export default function Forgotpass() {
  return (
    <div className='max-w-4xl mx-auto my-2 bg-[#FFF8F3] rounded-md h-96'>
    <h1 className='text-center text-2xl '>Sign In</h1>
   <div>
   <form
    className='flex flex-col max-w-md mx-auto py-2 px-3'
   >
    <input 
    className='text-gray-500 border border-gray-400 py-1 px-3 my-2'
    type="email" 
    name="email" 
    id="email" 
    placeholder='Email Address...'/>
     <div className='text-xs flex justify-between lg:text-sm'>
      <p>Don't have an account? <Link to='/Signup' className='text-blue-600 cursor-pointer'>Register</Link></p>
      <Link className='text-red-600 cursor-pointer' to='/forgotpassword'>Forgot password?</Link>
     </div>
     <div className="flex items-center my-3 before:border-t before:flex-1
                before:border-gray-400 after:border-t after:border-gray-400 after:flex-1 ">
                  <p className="text-center mx-4">OR</p>
                </div>
   </form>
<div className='max-w-sm lg:max-w-md mx-auto'>
<OAuth/>
  
  </div>
     </div>
    </div>
  )
}
