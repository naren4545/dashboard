import React from 'react'
import Sidebar from './SideBar'
import Header from './Header'
import Hamburger from './Hamburger';
export default function Wraper() {
  return (
    <>
    
    <Header />
        <div className="bg-[#F1F8FA] min-h-screen">
          <div className="flex h-full p-1 max-w-[1400px] mx-auto">
            <Sidebar />
            <div className="lg:mt-[73px] mt-[121px] p-4 w-full lg:h-[calc(100vh-73px)] lg:overflow-y-auto scrollbar-hide">
            <div className='mt-[73px] p-6'><h2>welcome to pintude</h2>
   
    
   </div> 
            </div>
          </div>
        </div>
     

   
    </>
  )
}
