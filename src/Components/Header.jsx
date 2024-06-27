import React from 'react'
import logotwo from '../assets/logot.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className='p-2 flex items-center font-semibold poppins-regular justify-between shadow-lg bg-white'>
        <img 
        width={130}
        src={logotwo} 
        alt="logo" 
        />
        <ul className='flex space-x-3 text-xl mr-3'>
        <li><Link to='/'>Forms</Link></li>
        <li><Link to='/about'>Our Motive</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>
    </>
  )
}
