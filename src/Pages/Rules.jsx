import React from 'react'
import { FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';


export default function Rules() {
    
  return (
<>
 <div className='w-full bg-[#FFF8F3] my-3 px-3 space-y-3 py-3'>
  <h1 className='font-semibold text-xl'>Forum rules</h1>
  <button className='bg-gray-300 px-2 py-1 rounded-sm hover:bg-gray-400  transition duration-500'><Link to='/' className='flex justify-center text-center items-center'><FcHome className='text-xl'/> Forums</Link></button>
  <h2 className='font-semibold text-lg'>Posts that warrant deletion</h2>
  <ol className='space-y-2'> 
    <li> &#8226; Any post which contains inappropriate material, including pornography or copyright infringement</li>
    <li> &#8226; Any post which contains anything purposefully offensive</li>
    <li>&#8226; Any post created for the purpose of spamming </li>
    <li>&#8226; Any nonsensical or illegible post</li>
    </ol>
  <h2 className='font-semibold text-lg'>Posts that warrant deletion</h2>
<ol className='space-y-2'>
<li> &#8226; Any thread created for the express purpose of insulting or spamming</li>
<li> &#8226; Any thread which is centered around offensive or inappropriate material</li>
</ol>
<h2 className='font-semibold text-lg'>Threads that warrant closure</h2>
<ol className='space-y-2'>
<li> &#8226; Any thread which has degenerated into personal insults</li>
<li> &#8226; Any thread which has turned off-topic</li>
<li> &#8226; Any thread which does not engender discussion or which is nonsensical in nature</li>
<li> &#8226; Duplicate threads</li>
</ol>

<h2 className='font-semibold text-lg'>Users who warrant blocking</h2>
<ol className='space-y-2'>
<li> &#8226; Any user who is consistently responsible for locked/deleted threads or deleted posts</li>
<li> &#8226; Any user who consistently attacks other users.</li>
<li> &#8226; Any user who posts any pornographic or offensive material
</li>

</ol>
 </div>
</>
  )
}
