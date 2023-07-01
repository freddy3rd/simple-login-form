import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FaUserCircle,FaEnvelope,FaEye,FaEyeSlash } from "react-icons/fa";

function Register({register}) {
    const [isActive,setIsActive] = useState()

    useEffect(()=>{
      setIsActive(register)
    },[])
    const reveal ={
        visible:{
          opacity: 1
        },
        hidden:{
          opacity: 0,
          display:"none",
        }
      }
  return (
   <motion.div 
   variants={reveal}
   animate={isActive ? "visible" : "hidden "}
   className='md:absolute relative z-40 p-10 h-screen font-bold ff-pontano'>
    <div className='h-full w-full flex flex-col gap-20 justify-center mt-5'>
    <h1 className='text-5xl ff-stint relative text-slate-100'>
    <span className='text-xl text-gray-200 ff-pontano absolute -top-8 left-2'>Start For Free!</span>
    Create New Account
    <span className='text-sm text-gray-200 flex gap-2 ff-pontano absolute -bottom-5 md:right-0 tracking-widest'>Already a Member? <a href="" className='link link-primary'>Log In</a></span>
    </h1>
    <form className='floating-label flex gap-2 max-w-[450px] flex-wrap'>
        <div className='relative  grow'>
            <FaUserCircle className='absolute md:right-[5%] right-[3%] translate-y-[-50%] top-[55%] z-20 text-black text-2xl'/>
            <input type="text" className="mt-1 px-3 py-4 bg-slate-500 shadow1-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:text-slate-200 block w-full rounded-2xl sm:text-sm focus:ring-2" placeholder="First Name"/>
        </div>
        <div className='relative  grow'>
            <FaUserCircle className='absolute md:right-[5%] right-[3%] translate-y-[-50%] top-[55%] z-20 text-black text-2xl'/>
            <input type="text" className="mt-1 px-3 py-4 bg-slate-500 shadow1-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:text-slate-200 block w-full rounded-2xl sm:text-sm focus:ring-2" placeholder="Last Name"/>
        </div>
        <div className='relative w-full'>
            <FaEnvelope className='absolute right-[3%] translate-y-[-50%] top-[55%] z-20 text-black text-2xl'/>
            <input type="email" className="mt-1 px-3 py-4 bg-slate-500 shadow1-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:text-slate-200 block w-full rounded-2xl sm:text-sm focus:ring-2" placeholder="Email"/>
        </div>
        <div className='relative w-full'>
            <FaEye className='absolute right-[3%] translate-y-[-50%] top-[55%] z-20 text-black text-2xl'/>
            <input type="password" className="mt-1 px-3 py-4 bg-slate-500 shadow1-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:text-slate-200 block w-full rounded-2xl sm:text-sm focus:ring-2" placeholder="Password" autoComplete ="true"/>
        </div>
        <button 
        onClick={(e)=>{
            e.preventDefault()
        }}
        className=' hover:drop-shadow-xl px-8 py-4 rounded-full bg-slate-500 text-white mt-5 grow '>Change Method</button>
        <button
         onClick={(e)=>{
            e.preventDefault()
        }} 
        className='bg-sky-500 hover:drop-shadow-xl px-8 py-4 rounded-full  text-white mt-5 grow '>Create Account</button>

    </form>
    </div>

   </motion.div>
  )
}

export default Register