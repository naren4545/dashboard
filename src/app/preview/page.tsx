
import MultiselectWrapper from './components/MultiselectWrapper'
import PreviewPage from './components/Preview'

import React, { ReactNode } from 'react';
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import Hamburger from "../Components/Hamburger";

interface LayoutProps {
  children: ReactNode;
}
export default function page({ children }: LayoutProps) {
  return (
    <div className='mb-5'>
       <>
      <Header />
      <div className="bg-[#F1F8FA] min-h-screen">
        <div className="flex h-full p-1 max-w-[1400px] mx-auto">
          <Sidebar />
          <div className="lg:mt-[73px] mt-[121px] p-4 w-full lg:h-[calc(100vh-73px)] lg:overflow-y-auto scrollbar-hide">
          <MultiselectWrapper/>
          </div>
        </div>
      </div>
    </>
     
      {/* <PreviewPage/> */}
    </div>
  )
}
