import { addDoc, collection, doc, serverTimestamp, setDoc, } from 'firebase/firestore';
import React, { useState } from 'react'
import { FcHome } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
export default function Createthread() {
 const auth = getAuth()
 const Navi = useNavigate();
  const [formData, setFormData] = useState({
    creator: auth.currentUser.displayName,
    title: "",
    body: "",
    option: "Quality Education",
    time: serverTimestamp(),
    totalviews: 1,
    replies: 0,
  })
const {title, body, time, option} = formData;
  function onChange(e) {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
  }
  
  async function onSubmit(e) {
    e.preventDefault();
    try {
       const docRef = await addDoc(collection(db, "threads"), formData);
       Navi(`/thread/${formData.option}/${docRef.id}`)
    } catch (error) {
        console.log(error);
    }
  }

    return (
        <div className='flex md:space-x-5 md:mx-3 flex-col-reverse md:flex-row mx-1'>
            {/* div1 */}
            <div className='md:w-[70%] my-2 bg-[#FFF8F3] p-3 space-y-3'>
                <h1 className='text-xl font-semibold'>Create new thread</h1>
                <button className='bg-gray-300 px-2 py-1 rounded-sm hover:bg-gray-400  transition duration-500'><Link to='/' className='flex justify-center text-center items-center'><FcHome className='text-xl' /> Forums</Link></button>
                <form onSubmit={onSubmit}>
                <section>
                    <h2 className='text-gray-700 font-semibold'>Thread title</h2>
                    <input type="text" name="text" id="title" className='w-full py-1 px-2 bg-white border' onChange={onChange} value={title} />
                    <div>
                        <h2 className='text-gray-700 font-semibold'>Post</h2>
                        <textarea className='w-full py-1 px-2 bg-white border' rows="5" id='body' onChange={onChange} value={body}></textarea>
                    </div>
                </section>
               <div className='flex flex-col'>
               <label htmlFor="option" className='text-gray-700 font-semibold'>Select thread section</label>
                <select name="select" id="option" className='py-2' onChange={onChange} value={option}>
                    <option>Quality Education</option>
                    <option>Affordable and Clean Energy</option>
                    <option>Peace, Justice, and Strong Institutions</option>
                    <option>Good Health and Well-being</option>
                </select>
               </div>
                <button className='bg-blue-700 text-white rounded-md px-3 py-2 text-center hover:bg-blue-600 transition duration-300 my-3'>Post</button>
                </form>
            </div>










            {/* div2 */}
            <div className=' md:w-[30%] my-2 bg-transparent flex flex-col '>
                <section className='space-y-3 p-3 bg-blue-500 text-white'>
                    <h1 className='text-xl font-semibold'>Forum rules</h1>
                    <p className=''>Read Forum rules before posting!</p>
                    <button className='bg-white text-black rounded-md p-2 text-center '><Link to="/rules">Read</Link></button>
                </section>
            </div>


        </div>
    )
}
