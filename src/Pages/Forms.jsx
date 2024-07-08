import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { RiArrowDownSLine } from "react-icons/ri";
import { BiSolidConversation } from "react-icons/bi";
import { collection, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import Showcasethread from './Showcasethread';
import User from '../Components/User';
import Spinner from '../Components/Spinner'

export default function Forms() {
  const [educationThread, setEducationThread] = useState([]);
  const [engeryThread, setEnergyThread] = useState([]);
  const [peacethread, setPeaceThread] = useState([]);
  const [healththread, setHealthThread] = useState([])
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
  
    }
    getThreads()
  }, [])


  useEffect(() => {
    async function getThreads() {
      try {
        const docRef = collection(db, "threads");
        const q = query(docRef, where("option", "==", "Affordable and Clean Energy"),
          orderBy("time", "desc"), limit(5));
        const querySnap = await getDocs(q);
        const threads = [];
        querySnap.forEach((doc) => {
          return threads.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setEnergyThread(threads)
      } catch (error) {
        console.log(error)
      }
     
    }
    getThreads()
  }, [])

  
  useEffect(() => {
    async function getThreads() {
      try {
        const docRef = collection(db, "threads");
        const q = query(docRef, where("option", "==", "Peace, Justice, and Strong Institutions"),
          orderBy("time", "desc"), limit(5));
        const querySnap = await getDocs(q);
        const threads = [];
        querySnap.forEach((doc) => {
          return threads.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setPeaceThread(threads)
      } catch (error) {
        console.log(error)
      }
    }
    getThreads()
  }, [])

  useEffect(() => {
    async function getThreads() {
      try {
        const docRef = collection(db, "threads");
        const q = query(docRef, where("option", "==", "Good Health and Well-being"),
          orderBy("time", "desc"), limit(5));
        const querySnap = await getDocs(q);
        const threads = [];
        querySnap.forEach((doc) => {
          return threads.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setHealthThread(threads)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getThreads()
  }, [])
  if (loading) {
    return <Spinner />
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
            <h1 className='flex items-center font-semibold text-xl px-2 text-gray-500 p-3'><BiSolidConversation /> Quality Education</h1>
            <div className='bg-gray-200 p-2 text-xs md:text-md'>
             {/* Education section  */}
              {educationThread && educationThread.length > 0 ? (
                educationThread.map((thread) => (
                  <Showcasethread
                    key={thread.id}
                    id={thread.id}
                    threads={thread.data}
                  />
                ))
              ) : (
                <p className='text-center py-2'>No Threads, <Link to='/newthread' className='text-blue-700'>Create one?</Link></p>
              )}
            </div>
            <p className='text-xs py-2 text-center justify-center flex'><Link to='/threads/education' className='text-center flex items-center'><span>More threads</span><RiArrowDownSLine className='text-red-600 font-bold text-lg'/></Link></p>
          </div>
           {/* Energy section  */}
          <div className='bg-[#FFF8F3] my-3'>
            <h1 className='flex items-center font-semibold text-xl px-2 text-gray-500 p-3'><BiSolidConversation /> Affordable and Clean Energy</h1>
            <div className='bg-gray-200 p-2 text-xs md:text-md'>
             {engeryThread && engeryThread.length > 0 ? (
               engeryThread.map((thread) => (
                <Showcasethread
                  key={thread.id}
                  id={thread.id}
                  threads={thread.data}
                />
              ))
             ): (
              <p className='text-center py-2'>No Threads, <Link to='/newthread' className='text-blue-700'>Create one?</Link></p>
             )}
            </div>
            <p className='text-xs py-2 text-center justify-center flex'><Link to='/threads/energy' className='text-center flex items-center'><span>More threads</span><RiArrowDownSLine className='text-red-600 font-bold text-lg'/></Link></p>

          </div>

          {/* Peace thread  */}
          <div className='bg-[#FFF8F3] my-3'>
            <h1 className='flex items-center font-semibold text-xl px-2 text-gray-500 p-3'><BiSolidConversation /> Peace, Justice, and Strong Institutions</h1>
            <div className='bg-gray-200 p-2 text-xs md:text-md'>
             {peacethread && peacethread.length > 0 ? (
               peacethread.map((thread) => (
                <Showcasethread
                  key={thread.id}
                  id={thread.id}
                  threads={thread.data}
                />
              ))
             ): (
              <p className='text-center py-2'>No Threads, <Link to='/newthread' className='text-blue-700'>Create one?</Link></p>
             )}
            </div>
            <p className='text-xs py-2 text-center justify-center flex'><Link to='/threads/peace' className='text-center flex items-center'><span>More threads</span><RiArrowDownSLine className='text-red-600 font-bold text-lg'/></Link></p>

          </div>

          {/* Good health  */}
          <div className='bg-[#FFF8F3] my-3'>
            <h1 className='flex items-center font-semibold text-xl px-2 text-gray-500 p-3'><BiSolidConversation />Good Health and Well-being</h1>
            <div className='bg-gray-200 p-2 text-xs md:text-md'>
             {healththread && healththread.length > 0 ? (
               healththread.map((thread) => (
                <Showcasethread
                  key={thread.id}
                  id={thread.id}
                  threads={thread.data}
                />
              ))
             ): (
              <p className='text-center py-2'>No Threads, <Link to='/newthread' className='text-blue-700'>Create one?</Link></p>
             )}
            </div>
            <p className='text-xs py-2 text-center justify-center flex'><Link to='/threads/health' className='text-center flex items-center'><span>More threads</span><RiArrowDownSLine className='text-red-600 font-bold text-lg'/></Link></p>
          </div>
        </div>
        <div className=' md:w-[30%] md:my-2 bg-tranparent flex flex-col'>
          <User />
        </div>
      </div>
    </>
  )
}
