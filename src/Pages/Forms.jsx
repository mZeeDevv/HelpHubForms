import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {db} from '../firebase'
import { BiSolidConversation } from "react-icons/bi";
import { collection, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import Showcasethread from './Showcasethread';
import User from '../Components/User';
import Spinner from '../Components/Spinner'

export default function Forms() {
 const [educationThread, setEducationThread] = useState([]);
 const [loading, setLoading] = useState(true);
 
 useEffect(() => {
   async function getThreads() {
   try {
    const docRef = collection(db, "threads");
    const q = query(docRef, where("option", "==", "Quality Education"), 
  orderBy("time", "desc"), limit(5));
  const querySnap = await getDocs(q);
  const threads = [];
  querySnap.forEach((doc) => {
    return threads.push({
      id: doc.id,
      data: doc.data(),
    })
  })
   setEducationThread(threads)
   } catch (error) {
    console.log(error)
   }
   setLoading(false)
  }
  getThreads()
 }, [])
if(loading) {
  return <Spinner/>
}
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
        <div className='bg-gray-200 p-2'>

 {educationThread.map((thread) => (
   <Showcasethread 
    key={thread.id}
    id={thread.id}
    threads={thread.data}
   />

 ))}

        </div>
       </div>
      </div>
      
{/* div2 */}
     <div className=' md:w-[30%] md:my-2 bg-[#FFF8F3] flex flex-col'>
    <User/>
     </div>


     </div>
    </>
  )
}
