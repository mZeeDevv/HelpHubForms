import React, { useEffect, useState} from 'react'
import { FaEye } from "react-icons/fa6";
import { BiSolidConversation } from "react-icons/bi";
import {Link} from 'react-router-dom'
import {db} from '../firebase'
import { doc, collection, getDoc, updateDoc } from 'firebase/firestore';

export default function Showcasethread({threads, id}) {
   
    const [views, setViews ] = useState(null)
    useEffect(() => {
     async function updateViews() {
        try {
        const docRef = doc(db, "threads", id);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) {
            setViews(docSnap.data())
        }
        } catch (error) {
            console.log(error)
        }
     }
     updateViews();
    }, [])

   async function onClick()
     {
     let totalviews = views.totalviews;
      totalviews++;
      console.log(totalviews)
      const docRef = doc(db, "threads", id);
      await updateDoc(docRef, {
        totalviews,
      })
     }
  return (
    <>    
    <Link
    to={`/thread/${threads.option}/${id}`}
    onClick={onClick}
    >
    <div className='flex justify-between'>
    <h1 className='font-semibold'>{threads.title}</h1>
     <h1 className='font-semibold  text-gray-500'><span className='text-black'>Creator : </span> {threads.creator}</h1>
     </div>
     <div className='flex space-x-5'>
     <p className='text-sm text-gray-500 flex items-center space-x-1'><FaEye/><span>{threads.totalviews}</span></p>
     <p className='text-sm text-gray-500 flex items-center space-x-1'><BiSolidConversation/><span>{threads.replies}</span></p>
     </div>
    </Link>
     </>
  )
}


