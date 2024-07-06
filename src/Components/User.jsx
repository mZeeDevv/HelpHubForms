import React from 'react'
import {Link} from 'react-router-dom'
export default function User() {
  return (
    <>
     <section className='space-y-3 p-3 bg-blue-500 text-white'>
     <h1 className='text-xl font-semibold'>Forum rules</h1>
     <p className=''>Read Forum rules before posting!</p>
     <button className='bg-white text-black rounded-md p-2 text-center'><Link to="/rules">Read</Link></button>
     </section>
    </>
  )
}
