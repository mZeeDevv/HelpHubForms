import React from 'react'
import OAuth from '../Components/OAuth'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase"
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Signup() {
  const Navigate = useNavigate();
  const [formData, setFormaData] = useState({
    name: "",
    email: "",
    password: "",
    posts: 0,
  })
  const { name, email, password } = formData;
  function onChange(e) {

    setFormaData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name
      })
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy)
      Navigate("/")
    }
    catch (error) {
      toast.error("Something went wrong")
    }
  }


  return (
    <div className='max-w-4xl mx-auto my-2 bg-white rounded-md h-96'>
      <h1 className='text-center text-2xl'>Sign up</h1>
      <div>
        <form
          onSubmit={onSubmit}
          className='flex flex-col max-w-md mx-auto py-2 px-3'
        >
          <input
            className='text-gray-500 border border-gray-400 py-1 px-3 my-2'
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            id="name"
            placeholder='Name' />
          <input
            className='text-gray-500 border border-gray-400 py-1 px-3 my-2'
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            id="email"
            placeholder='Email Address...' />
          <input
            className='text-gray-500 border border-gray-400 py-1 px-3 my-2'
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            id="password"
            placeholder='Password' />
          <div className='text-xs flex justify-between lg:text-sm'>
            <p>Already have an account? <Link to='/Signin' className='text-blue-600 cursor-pointer'>Login In</Link></p>
            <Link className='text-red-600 cursor-pointer' to='/forgotpassword'>Forgot password?</Link>
          </div>
          <button 
              className="w-full bg-blue-500 text-sm py-2 text-white font-medium rounded uppercase
              hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg mt-3"
              type="submit"> Sign Up</button>
          <div className="flex items-center my-3 before:border-t before:flex-1
                before:border-gray-400 after:border-t after:border-gray-400 after:flex-1 ">
            <p className="text-center mx-4">OR</p>
          </div>
        </form>
        <div className='max-w-sm lg:max-w-md mx-auto'>
          <OAuth />
        </div>
      </div>
    </div>
  )
}
