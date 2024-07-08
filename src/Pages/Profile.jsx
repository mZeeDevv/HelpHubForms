 import React from 'react'
 import { getAuth, updateProfile } from "firebase/auth"
import {  useState, } from "react"
import {  useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { db } from "../firebase";
import { updateDoc,  doc } from "firebase/firestore";

 export default function Profile() {
const Navigate = useNavigate();
 const [loading, setloading] = useState(true)
 const [changeDetail, setChangeDetails] = useState(false)

  const auth = getAuth()
  const [formData, setFormaData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const {name, email} = formData
  function onChange(e){
    setFormaData((prevState) => ({
      ...prevState,
    [e.target.id]: e.target.value,
    }))
  }
  function logOut() {
    auth.signOut()
    Navigate("/")
  }

  async function onSubmit()
  {
   try {
    if(auth.currentUser.displayName !== name)
    {
      await updateProfile(auth.currentUser, {
        displayName : name,
      });
      //updating name in firestore  
      const docRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(docRef, {
        name,
      })
    }
    toast.success('Profile details updated')
   } catch (error) {
    console.log(error)
    toast.error("Could not update profile details")
   }
  }

   return (
    <div className='max-w-4xl mx-auto my-2 bg-[#FFF8F3] rounded-md h-96'>
    <h1 className='text-center text-2xl'>Profile</h1>
    <form
     className='flex flex-col max-w-lg mx-auto py-2 px-3'
    >
        <input type="text" id="name" value={name} 
        disabled={!changeDetail}
        onChange={onChange}
        className={`max-w-3xl px-4 py-2 text-xl text-gray-400 bg-white border
         border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200 font-bold"}`}>
         </input>
         <input type="email" id="name" value={email} disabled
        className="w-full px-4 py-2 text-xl text-gray-400 mt-5 bg-white border
         border-gray-300 rounded transition ease-in-out">
         </input>

         <div className="flex justify-between whitespace-nowrap mt-4">
         <p className="flex items-center">Do you want to change your name?
          <span
          onClick={() => 
            {
              changeDetail && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          className="mx-1 text-red-600 hover:text-red-800 transition ease-in-out duration-200
          cursor-pointer">
            {changeDetail ? "Apply change" : "Edit"}
            </span>
         </p>
         <p onClick={logOut}
         className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
         >Sign Out</p>
         </div>
      </form>
    </div>
   )
 }
 