'use client'
import React from 'react'
import {IoCall, } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook ,FaTwitter,FaGithubSquare,FaInstagram ,FaLinkedin  } from "react-icons/fa";


const page = () => {
  return (
    // <body className='antialiased'  >  
      <div className=' flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0  sm:space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white sm:p-12 overflow-hidden'>
           <div className='flex flex-col justify-between'>
               <div>
                 <h1 className='text-4xl font-bold tracking-wide'>Contact Us</h1>
                 <p className='pt-2 text-cyan-100 text-sm'>"Your feedback matters to us. Whether you have questions, suggestions, or just want to say hello,
                 </p>
               </div>
                <div className='flex flex-col space-y-4'>
                  <div className='inline-flex items-center space-x-3 mt-4'>
                      <IoCall name='call' className='text-2xl mt-3 text-teal-300' />
                      <span className='mt-4'>+(91) 639686****</span>
                  </div>
                  <div className='inline-flex items-center space-x-3 mt-4'>
                      <CiMail name='mail' className='text-2xl mt-3 text-teal-300' />
                      <span className='mt-4'>Ram***@gmail.com</span>
                  </div>
                  <div className='inline-flex items-center space-x-3 mt-4'>
                      <FaLocationDot name='location' className='text-2xl mt-3 text-teal-300' />
                      <span className='mt-4'>Noida sector-62 ,street Dl-01</span>
                  </div>

               </div>
                  <div className='flex  space-x-4 mt-10 ml-9 mb-10'> 
                    <a href="#">
                     <FaFacebook  className='text-2xl ' />
                      </a>
                      <a href="#">
                     <FaTwitter   className='text-2xl hover:text-blue-800' />
                      </a>
                      <a href="#">
                     <FaGithubSquare  className='text-2xl hover:text-gray-300' />
                      </a>
                      <a href="#">
                     <FaInstagram  className='text-2xl  hover:text-pink-500' />
                      </a>
                      <a href="#">
                     <FaLinkedin   className='text-2xl hover:text-blue-800' />
                      </a>
                  </div>
           </div>
        <div className='relative'>
          <div className='absolute z-0  w-40 h-40 bg-teal-500 rounded-full -right-20 -top-20 '></div>
          <div className='absolute z-0  w-40 h-40 bg-teal-500 rounded-full -left-20 -bottom-16 '></div>
           <div className=' relative z-10  bg-white  text-black rounded-xl shadow-lg p-8 md:w-[30rem]'>
           <form action="" className='flex flex-col space-y-4'>
             <div className='space-y-5 font-bold  '>
                <div>
                 <label className=''>Your name</label>
                  <input
                  type='text'
                  placeholder='your name'
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                  />
                </div>
               
                <div>
                  <label className='text-sm'> Email Address</label>
                  <input
                  type='text'
                  placeholder='Email address'
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                  />
               
                </div>
    http://localhost:3000/work
                <div>
                <label className=''>Message</label>
                  <textarea
                  
                  placeholder='Message'
                  className='ring-1 h-32 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                  />
                </div>
                
             </div>
             <button className='inline-block self-end bg-cyan-700 rounded-lg px-6 py-2 text-white'>send message</button>

               </form>
             </div>
          </div>
        </div>

      </div>

    // </body>
    
  )
}

export default page
