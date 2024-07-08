import React, { useEffect, useState } from 'react'
import { db } from "../firebase"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { addDoc, collection, doc, serverTimestamp, updateDoc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Reply({totalreplies}) {
    const navi = useNavigate()
    const pram = useParams()
    const auth = getAuth();
    const [login, setLogin] = useState(false)
    const [loading, setLoading] = useState(true)
    const [totalposts, setPosts] = useState(null)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogin(true)
            }
        })
    },)
    const [formData, setFormData] = useState({
        body: "",
        creator: '',
        time: serverTimestamp()
    })
    useEffect(() => {
        if (auth.currentUser) {
            setFormData(prevFormData => ({
                ...prevFormData,
                creator: auth.currentUser.uid
            }));
        }
        async function getUsersPosts() {
            try {
                const userPosts =  doc(db, "users", auth.currentUser.uid)
                let posts = await getDoc(userPosts);
                setPosts(posts.data())
                setLoading(false)
            } catch (error) {
                toast.error(error)
            }
        }
        getUsersPosts()
    }, [auth.currentUser]);

    const { body } = formData;
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const threadDocRef = doc(db, "threads", pram.threadId)
            const repliesCollectionRef = collection(threadDocRef, "replies");
            const newReplyDocRef = await addDoc(repliesCollectionRef, formData);
            let replies = totalreplies; //to update thread total replies for showwcasethread
            replies++;
            await updateDoc(threadDocRef, {
                replies,
              })
              let posts = totalposts.posts
              posts++
              const userPosts =  doc(db, "users", auth.currentUser.uid) 
              await updateDoc(userPosts, { //to update posts in userprofile with new post
                  posts
              })
            toast.success("You reply has been added")
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    if (loading) {
        return <Spinner />
    }
    if (!login) {
        return <p className='text-center bg-gray-600 text-white'>Want to add a post? <Link to="/signin">Login</Link></p>
    }
    return (
        <>
            <h1 className='semi-bold'>New post</h1>
            <form onSubmit={onSubmit}>
                <textarea className='w-full py-1 px-2 bg-white border border-gray-400' rows="5" id='body' required onChange={onChange} value={body}></textarea>
                <button className='bg-blue-700 text-white rounded-md px-3 py-2 text-center hover:bg-blue-600 transition duration-300 my-2'>Post</button>
            </form>
        </>
    )
}
