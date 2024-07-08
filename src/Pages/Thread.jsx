import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdArrowUpward } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { FcHome } from 'react-icons/fc'
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Spinner from '../Components/Spinner';
import Profile from '../assets/Profile.png'
import Reply from '../Components/Reply'
import User from '../Components/User'
import { toast } from 'react-toastify';
export default function () {

    const pram = useParams();
    const [thread, setThread] = useState(null);
    const [userInfo, setUserInfo] = useState(null) // SET IT WITH REPLIES SYSTEM
    const [loading, setLoading] = useState(true);
    const [replies, setreplies] = useState(null)

    useEffect(() => {
        async function getThread() {
            const docRef = doc(db, "threads", pram.threadId);
            const replyDocRef = collection(docRef, "replies")
            const q = query(replyDocRef, orderBy("time", "asc"))
            const replydoc = await getDocs(q);
            const docSnap = await getDoc(docRef);
            const repliesArray = [];
            replydoc.forEach(doc => {
                repliesArray.push(doc.data());
            });
            if (docSnap.exists()) {
                setThread(docSnap.data())
            }
            setreplies(repliesArray)
        }
        getThread();
    }, [pram.threadId])

    useEffect(() => {
        async function getUserInfo() {
            try {
                const userInfos = await Promise.all(
                    replies.map(async (reply) => {
                        const docRef = doc(db, "users", reply.creator);
                        const snap = await getDoc(docRef);
                        return snap.data(); // Adjust this based on how you want to store user info
                    })
                );
                setUserInfo(userInfos);
                setLoading(false)
            } catch (error) {
                // console.log(error);
                toast.error(error)
            }
        }
        getUserInfo();
    }, [replies]);
    if (loading) {
        return <Spinner />
    }
    const time = thread.time.toDate().toLocaleString();
    return (
        <div className='flex md:space-x-5 md:mx-3 flex-col md:flex-row mx-1'>
            {/* div1 */}
            <div className='md:w-[70%] my-2 bg-[#FFF8F3] p-3'>
                <h1 className='text-xl font-semibold'>{thread.title}</h1>
                <button className='bg-gray-300 px-2 py-1 rounded-sm hover:bg-gray-400  transition duration-500'><Link to='/' className='flex justify-center text-center items-center'><FcHome className='text-xl' /> Forums</Link></button>
                <div className=' flex space-x-2 my-2'>
                    <div className='md:w-[20%] bg-gray-200 items-center flex flex-col md:justify-center'>
                        <img src={Profile} alt="user" width={40} />
                        <p className='font-semibold text-xs'>{thread.creator}</p>
                        <p className='flex  items-center text-gray-500 text-xs '> <MdArrowUpward /> Level 1</p>
                        <p className='flex  items-center text-gray-500 text-xs'> <CiClock1 /> {time} </p>
                    </div>
                    <div className='w-[70%]'>
                        {thread.body}
                    </div>
                </div>
                {replies.map((reply, index) => (
                    <div className='flex space-x-2 my-4' key={index}>
                        <div className='md:w-[20%] bg-gray-200 items-center flex flex-col md:justify-center'>
                            <img src={Profile} alt="user" width={40} className='py-1' />
                            {userInfo && userInfo[index] && (
                                <div>
                                    <p className='font-semibold text-xs'>{userInfo[index].name}</p>
                                    <p className='flex items-center text-gray-500 text-xs py-1'><MdArrowUpward /> Total Posts : {userInfo[index].posts}</p>
                                </div>
                            )}
                            <p className='flex items-center text-gray-500 text-xs'> <CiClock1 /> {reply.time.toDate().toLocaleString()} </p>
                        </div>
                        <div className='w-[70%]'>
                            {reply.body}
                        </div>
                    </div>
                ))}
                <div>
                    <Reply
                        id={pram.threadId}
                        totalreplies={thread.replies}
                    />
                </div>
            </div>
            {/* div2 */}
            <div className=' md:w-[30%] md:my-2 bg-transparent flex flex-col'>
                <User />
            </div>
        </div>
    )
}
