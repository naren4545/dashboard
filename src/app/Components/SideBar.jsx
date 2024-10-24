
"use client"


import { useContext,useEffect, createContext, useState } from "react"
import dashbord from '../../app/assests/ion_home.svg'
import Profile from '../../app/assests/Group.svg'
import preview from '../assests/material-symbols_folder-eye-outline-rounded.svg'
import bill_payment from '../assests/Vector.svg'
import Benefits from '../assests/Vector (1).svg'
import Documents from '../assests/Group 264.svg'
import settings from '../assests/Vector (2).svg'
import support from '../assests/Group (1).svg'
import logout from '../assests/uiw_logout.svg'
import arrow from '../../app/assests/Group 279.svg'
import profilepic from '../../app/assests/ProfilePic.png'
import Image from "next/image";
import logo from '../assests/Group 4.svg'
import logosm from '../assests/WhatsApp_Image_2024-09-06_at_12.33.16_f59210ee-removebg-preview 1.svg'
import { usePathname } from "next/navigation"
import Link from "next/link"
const SidebarContext = createContext()

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  

  const [scrollMargin, setScrollMargin] = useState(0);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Get the scrolled pixel value (limit max margin for performance)
      setScrollMargin(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);


  return (
<SidebarContext.Provider value={{ expanded }}>
    <aside
      // style={{
      //   marginTop: `${scrollMargin}px`,
      //   transition: 'margin-top 0.1s ease-in-out', // Add smooth transition
      // }}
       className={"h-screen  relative bg-custom-gradient "+ expanded?" h-screen  hidden lg:block relative ":"h-screen  relative  w-fit hidden lg:block"}>
      <nav className="h-full flex flex-col  bg-custom-gradient rounded-[20px] shadow-sm">
        <div className="p-4  flex justify-center items-center pb-8">
          {expanded ?<Image src={logo}
            
            className={`overflow-hidden transition-all ${
              expanded ? "" : "w-0"
            }`}
            alt=""
          />:<Image src={logosm}
            
          className={`overflow-hidden transition-all `}
          alt=""
        />}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1.5 rounded-lg  absolute ${ expanded? "top-[78px]":"top-[48px]" } right-[-21px] `}
          >
            {expanded ? <Image src={arrow}/> : <Image src={arrow}/>}
          </button>
        </div>

        
          <ul className="flex-1 pl-3">
            
          <SidebarItem icon={dashbord} text="Dashboard" />
          <SidebarItem icon={Profile} text="Profile" />
          <SidebarItem icon={preview} text="Preview" />
          <SidebarItem icon={bill_payment} text="Bill & Payment"  />
          <SidebarItem icon={Benefits} text="Benefits" />
          
          <SidebarItem icon={settings} text="Settings" />
          <SidebarItem icon={support} text="Support" />
          </ul>
       

        <div className=" flex p-3 ">
            <div className="bg-[#FFFFFF14] max-w-[250px] mx-auto  p-2 rounded-[10px]">
          <div className="flex gap-2 justify-center">
          <img
            src={profilepic.src}
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 hidden"}
          `}
          >
            <div className="leading-4 text-white">
              <h4 className="font-semibold">Jane Cooper</h4>
              <span className="text-xs ">demo@gmail.com</span>
            </div>
          
          </div>
          </div>

          <hr className="border-[#D9D9D9] my-4"/>
          <div className="mx-auto">
          <SidebarItem icon={logout}  text="Logout"/>
          </div>
          </div>
        </div>
      </nav>
    </aside>
    </SidebarContext.Provider>
  )
}

export function SidebarItem({ icon, text, alert }) {
  const { expanded } = useContext(SidebarContext)
  let active;
let path="/"+text.toLowerCase().split(" ").join("")
const pathname=usePathname()

active=pathname===path?true:false;
  return (
    <li className="list-none " >

<Link href={path} className={`
        relative flex items-center py-2 px-4 my-1
        font-medium rounded-tl-[20px] rounded-bl-[20px] cursor-pointer
        transition-colors pr-3 group
        ${
          active
            ? "bg-[#FFFFFF14] text-white"
            : "hover:bg-[#FFFFFF14] text-white"
        }
    `}>

      <Image src={icon} className="w-[32px]"/>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0 hidden"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-black text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
      </Link>
    </li>
  )
}