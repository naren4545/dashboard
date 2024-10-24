"use client"

import React, { useState } from 'react';
import profilepic from '../../app/assests/ProfilePic.png'
import Hamburger from './Hamburger';
import search from '../assests/ic_sharp-search.svg'
import Image from 'next/image';
const Header = () => {
const[ backdrop,setBackdrop]=useState(false)


function handelBackDrop(e:any){
  console.log(e.target.classList)
if(e.target.classList.contains('ham') || e.target.classList.contains('ham-nav') ){
  setBackdrop(!backdrop)
}



}
  return (
    <>
<div className={+ backdrop ?"bg-[#00000050] min-h-screen absolute w-full h-full z-10 top-0 ":""}>

</div>

    <div className=" border-b border-[#CACACA] bg-white absolute top-0 w-full">
      {/* Search Bar */}

      <div className='lg:max-w-[70%]  ml-auto lg:flex justify-between gap-2 lg:flex-row flex-row-reverse lg:gap-[95px] items-center p-4'>
      <div className="lg:flex hidden items-center">
       
      <div className="relative">
      <input
        type="text"
        placeholder=""
        className="border border-gray-300 rounded-full p-3 h-[20px] w-96 text-lg outline-none"
      />
      <div className="absolute left-3 top-1 text-gray-400">
        <Image src={search} alt=""/>
      </div>

       
      </div>
</div>
      {/* Notification Icon */}
      
      
      {/* Profile Section */}
      <div className="flex items-center  space-x-2 w-full">

<div className='w-[20%]'><span onClick={function (e:any) {
  handelBackDrop(e);
}}>
  <Hamburger/>
  </span></div>


<div className='w-[80%] flex justify-end gap-1 items-center '>
      <div className="relative mx-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C17.805 14.305 17 12.688 17 11V7a5 5 0 10-10 0v4c0 1.688-.805 3.305-1.595 4.595L4 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6" />
        </svg>
        {/* Notification dot */}
        <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full ring-2 ring-white"></span>
      </div>


        <img 
          src={profilepic.src} 
          alt="Profile" 
          className="w-10 h-10 rounded-full"
        />
        <span className="text-gray-700 font-semibold">Welcome, Jane</span>
       
      </div>
    </div>
    </div>

    <div className='flex justify-center p-3 lg:hidden'>

    <div className="relative">
      <input
        type="text"
        placeholder=""
        className="border border-gray-300 rounded-full p-3 h-[20px] w-96 text-lg outline-none"
      />
      <div className="absolute left-3 top-1 text-gray-400">
        <Image src={search} alt=""/>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Header;
