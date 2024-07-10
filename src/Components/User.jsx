import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {db} from '../firebase'
import { collection, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import Spinner from './Spinner'

export default function User() {
  const [users, setUsers] = useState([])
  const [loading, setloading] = useState(true)
 
  useEffect(() => {
    async function getUsers(){
      try {
        const docRef = collection(db, "users")
        const querySnap = await getDocs(query(docRef, orderBy("posts", "desc"), limit(10)));
        const topusers = []
       querySnap.forEach((doc) => {
         topusers.push({
          id: doc.id,
          data: doc.data(),
         })
       })
       setUsers(topusers)
       setloading(false)
      } catch (error) {
        console.log(error)
      }
     }
     getUsers()
  }, [])
  return (
    <>
     <section className='space-y-3 p-3 bg-blue-500 text-white'>
     <h1 className='text-xl font-semibold'>Forum rules</h1>
     <p className=''>Read Forum rules before posting!</p>
     <button className='bg-white text-black rounded-md p-2 text-center'><Link to="/rules">Read</Link></button>
     </section>
     <div className='bg-[#FFF8F3] pb-11'>
     <h1 className='text-xl font-semibold text-center my-2'>Top Fourm Posters</h1>
     <div className='flex justify-between p-2'>
      <p className='font-semibold'>Name</p>
      <p className='font-semibold'>Posts</p>
     </div>
     {users.map((user) => (
          <div key={user.id} className='flex justify-between p-2 my-1 bg-gray-200'>
            <p>{user.data.name}</p>
            <p>{user.data.posts}</p>
          </div>
        ))}
    </div>
    </>
  )
}
