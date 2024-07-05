import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdArrowUpward } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { FcHome } from 'react-icons/fc'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Spinner from '../Components/Spinner';



export default function() {

    const pram = useParams();
    const [thread, setThread] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function getThread() {
            const docRef = doc(db, "threads", pram.threadId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setThread(docSnap.data())
                setLoading(false)
            }
            
        }
        getThread();
    }, [pram.threadId])

    if(loading) {
       return <Spinner/>
    }
    const time = thread.time.toDate().toLocaleString();
    

    return (
        <div className='flex md:space-x-5 md:mx-3 flex-col md:flex-row mx-1'>
            {/* div1 */}
            <div className='md:w-[70%] my-2 bg-[#FFF8F3] p-3'>
            <h1 className='text-xl font-semibold'>{thread.title}</h1>
            <button className='bg-gray-300 px-2 py-1 rounded-sm hover:bg-gray-400  transition duration-500'><Link to='/' className='flex justify-center text-center items-center'><FcHome className='text-xl' /> Forums</Link></button>
             <div className=' flex space-x-2 my-2'>
                <div className='md:w-[20%] bg-gray-200 items-center flex flex-col justify-center'>
                    <p className='font-semibold'>{thread.creator}</p>
                    <p className='flex  items-center text-gray-500 text-sm'> <MdArrowUpward/> Level 1</p>
                    <p className='flex  items-center text-gray-500 text-sm'> <CiClock1/> {time} </p>
                </div>
                <div className='w-[70%]'>
                    {thread.body}
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
    )
}
