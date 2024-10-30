"use client"
import {useState} from 'react'

import { useParams } from 'next/navigation';
import  PreviewEntryPage from './components/PreviewEntryPage'
import Header from "../../Components/Header";
import Sidebar from "../../Components/SideBar";


export default function page() {
    

    const { businessId } = useParams();

    const [route, setRoute] = useState('/'); // Default route to preview

    // const screenshotUrl = `https://shot.screenshotapi.net/screenshot?token=FMZB5HC-FFQ4MGY-NFQGQGP-FJNRC1C&url=https%3A%2F%2Fpintude-biz.vercel.app%2F&width=1300&height=1000&output=image&file_type=png&wait_for_event=load`;

    return (



        <>
        <Header />
        <div className="bg-[#F1F8FA] min-h-screen">
          <div className="flex h-full p-1 max-w-[1400px] mx-auto">
            <Sidebar />
            <div className="lg:mt-[73px] mt-[121px] p-4 w-full lg:h-[calc(100vh-73px)] lg:overflow-y-auto scrollbar-hide">
            <PreviewEntryPage id={businessId}/>
            </div>
          </div>
        </div>
      </>
     
    );
}
