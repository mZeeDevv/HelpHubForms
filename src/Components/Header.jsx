import React from 'react'
import logotwo from '../assets/logot.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className=' lg:p-2 flex items-center poppins-regular justify-between md:shadow-lg bg-[#FFF8F3] shadow-sm'>
        <img 
        width={80}
        src={logotwo} 
        alt="logo" 
        />
        <ul className='flex space-x-3 mr-3 lg:flex text-[#151515] font-semibold'>
        <li><Link to='/'>Forums</Link></li>
        <li><Link to='/about'>Our Motive</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>
    </>
  )
}
