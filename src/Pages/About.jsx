import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaLinkedin, FaInstagramSquare, FaGithub} from "react-icons/fa";

export default function About() {
  return (
   <>
       <div className='mx-auto my-2 bg-[#FFF8F3]  p-3'>
      <h1 className='font-semibold text-center text-xl'>Our Motive</h1>
      <p className='text-gray-700'> We are deeply committed to advancing the <a href='https://sdgs.un.org/goals' className='text-black underline'>United Nations' Sustainable Development Goals (SDGs)</a> to create a better and more sustainable future for all. Our focus areas include:</p>
      <h1 className='font-semibold my-1 text-lg'>Health and Well-being</h1>
      <p className='text-gray-700'>We strive to ensure healthy lives and promote well-being for all at all ages. Our efforts are geared towards improving healthcare access, raising awareness about preventive measures, and supporting initiatives that tackle both physical and mental health challenges. By fostering healthier communities, we aim to build a foundation for a more prosperous and resilient society.
        You can <Link to='/newthread' className='text-blue-700'>create a thread </Link> about your problem and our experts will answer you.
      </p>
      <h1 className='font-semibold my-1 text-lg'>Peace, Justice, and Strong Institutions</h1>
      <p className='text-gray-700'>We are dedicated to promoting peaceful and inclusive societies for sustainable development. Our initiatives support the development of accountable and transparent institutions, ensuring justice for all and reducing violence and conflict. We believe that peace and justice are the cornerstones of a stable and thriving world. Check out our threads on this topic 
        <Link className='text-blue-700' to="/threads/peace"> here</Link>
</p>
<h1 className='font-semibold my-1 text-lg'>Affordable and Clean Energy</h1>
      <p className='text-gray-700'>We advocate for the expansion of access to affordable, reliable, sustainable, and modern energy for all. Our projects focus on accelerating the transition to renewable energy sources, improving energy efficiency, and supporting innovations that make clean energy more accessible. We are committed to reducing the environmental impact of energy consumption and promoting sustainable development. 
        <Link className='text-blue-700' to="/threads/energy"> Affordable and Clean Energy threads </Link>
</p>
<h1 className='font-semibold my-1 text-lg'>Quality Education</h1>
      <p className='text-gray-700'>Education is a powerful tool for change. We work towards ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all. Our programs support the enhancement of educational systems, the empowerment of educators, and the provision of resources and opportunities for learners of all ages. We believe that education is key to unlocking human potential and driving social and economic progress. 
        <Link className='text-blue-700' to="/threads/education"> Quality Education threads </Link>
</p>
<h1 className='font-semibold text-center text-xl'>Our Commitment
</h1>
 <p className='text-gray-700'>
 We are dedicated to collaborating with communities, governments, and other stakeholders to make tangible progress in these areas. By addressing these critical issues, we aim to contribute to a world where everyone has the opportunity to thrive, where peace and justice prevail, where energy is sustainable and accessible, and where education unlocks the full potential of every individual. Together, we can build a brighter, more sustainable future for all.
 </p>
 <Link className='flex justify-center text-center' to="/newthread"><p className='bg-blue-700 rounded-sm text-white font-semibold px-3 py-2'>Create a thread and Let us help you</p></Link>
</div>
<div className='bg-[#FFF8F3] flex justify-center py-6 flex-col items-center space-y-3 mt-3'>
        <p className='flex items-center space-x-1'><span>Created by </span><a href="https://mzee.dev/" className='underline'> Hamza Khattak </a> <span>with </span> <FaHeart className='text-red-600'/></p>
           <div className='flex space-x-4 text-3xl'>
           <a href="https://www.linkedin.com/in/mzeedev/">
        <FaLinkedin/>
           </a>
           <a href="https://www.instagram.com/mzeedev/">
        <FaInstagramSquare/>
           </a>
           <a href="https://github.com/mZeeDevv">
        <FaGithub />
           </a>
           </div>
    </div>
   </>
  )
}
