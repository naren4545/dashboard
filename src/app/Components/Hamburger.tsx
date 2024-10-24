"use client";
import Link from "next/link";
import { useState } from "react";
import dashbord from "../../app/assests/ion_home.svg";
import Profile from "../../app/assests/Group.svg";
import preview from "../assests/material-symbols_folder-eye-outline-rounded.svg";
import bill_payment from "../assests/Vector.svg";
import Benefits from "../assests/Vector (1).svg";
import Documents from "../assests/Group 264.svg";
import settings from "../assests/Vector (2).svg";
import support from "../assests/Group (1).svg";
import logout from "../assests/uiw_logout.svg";
import profilepic from "../../app/assests/ProfilePic.png";
import logo from "../assests/Group 4.svg";
import arrow from "../../app/assests/Group 279.svg";
import ham from "../../app/assests/Vector (6).svg";
import hamwhite from "../../app/assests/heroicons-outline_menu-alt-1.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";

// SidebarItem component with proper TypeScript props
interface SidebarItemProps {
  icon: string; // Assuming these are image imports
  text: string;
  onClick: () => void;
}

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex lg:hidden">
      <div
        className={`lg:hidden p-4 fixed z-30 ${
          !isOpen ? "left-0" : "left-[200px] top-[119px]"
        } transform -translate-y-1/2`}
      >
        <button
          onClick={toggleSidebar}
          className="text-black hover:text-white focus:outline-none focus:text-white"
        >
          {isOpen ? (
            ""
          ) : (
            <Image src={ham} alt="" className="w-6 h-6 ham text-black " />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-[-16px]" : " translate-x-[-290px]"
        } lg:translate-x-0 p-4 bg-custom-gradient z-20 p-2 hamburger transition-transform transform fixed w-64 h-full rounded-[20px] top-0 shadow-lg`}
      >
        <div className="">
          <div className="flex justify-between">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <span /> : <Image src={ham} alt="" className="w-6 h-6 text-black absolute top-[-4px]" />}
            </button>
          </div>

          <div className="flex">
            <Image src={logo} className={`overflow-hidden transition-all `} alt="" />

            <button onClick={toggleSidebar} className="text-black hover:text-white focus:outline-none focus:text-white">
              <Image src={hamwhite} alt="" className="w-6 h-6 ham text-black " />
            </button>
          </div>

          <nav className="pt-7">
            <SidebarItem icon={dashbord} text="Dashboard" onClick={toggleSidebar} />
            <SidebarItem icon={Profile} text="Profile" onClick={toggleSidebar} />
            <SidebarItem icon={preview} text="Preview" onClick={toggleSidebar} />
            <SidebarItem icon={bill_payment} text="Bill & Payment" onClick={toggleSidebar} />
            <SidebarItem icon={Benefits} text="Benefits" onClick={toggleSidebar} />
            <SidebarItem icon={settings} text="Settings" onClick={toggleSidebar} />
            <SidebarItem icon={support} text="Support" onClick={toggleSidebar} />
          </nav>

          <div className="pt-5" />

          <div className="bg-[#FFFFFF14] max-w-[250px] mx-auto p-2 rounded-[10px]">
            <div className="flex gap-2 justify-center">
              <img src={profilepic.src} alt="" className="w-10 h-10 rounded-md" />
              <div className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3`}>
                <div className="leading-4 text-white">
                  <h4 className="font-semibold">Jane Cooper</h4>
                  <span className="text-xs">demo@gmail.com</span>
                </div>
                <hr className="border-[#D9D9D9] my-4" />
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <SidebarItem onClick={toggleSidebar} icon={logout} text="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

// SidebarItem Component (using TypeScript for props)
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, onClick }) => {
  const path = `/${text.toLowerCase()}`;
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <li className="list-none ham-nav">
      <Link
        onClick={onClick}
        href={path}
        className={`relative flex items-center py-2 px-4 my-1 font-medium rounded-tl-[20px] gap-2 rounded-bl-[20px] cursor-pointer transition-colors pr-3 group ham-nav ${
          active ? "bg-[#FFFFFF14] text-white" : "hover:bg-[#FFFFFF14] text-white"
        }`}
      >
        <Image src={icon} alt="" className="w-[32px] ham-nav" />
        <span className="overflow-hidden transition-all ham-nav w-52 ml-">{text}</span>
      </Link>
    </li>
  );
};

export default Hamburger;
