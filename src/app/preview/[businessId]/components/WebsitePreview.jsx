import React, { useEffect, useState } from "react";
import Image from "next/image"; // Make sure to import this if using Next.js
import Link from "next/link";
// import { useRouter } from "next/router";
const WebsitePreview = ({
  webImage = "https://shot.screenshotapi.net/screenshot?token=FMZB5HC-FFQ4MGY-NFQGQGP-FJNRC1C&url=https%3A%2F%2Fpintude-biz.vercel.app%2F&width=1400&height=800&output=image&file_type=png&wait_for_event=load",
  bizName,
  entry
  
}) => {
  // const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the full current URL with the pathname
      const fullRoute = window.location.href;
      setCurrentRoute(fullRoute);
    }
  }, []);
  console.log(bizName);
  return (
    <div
      className="bg-white border rounded-lg shadow-lg p-4 mb-7 w-full 
     mx-auto"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className=" rounded-l-lg lg:w-1/2 w-full flex items-center justify-center p-4">
          {/* Replace with your image path or URL */}
          <img
            src={webImage} // Replace with your image path
            alt="website preview"
            className="w-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-1 p-4 overflow-hidden">
          <h3 className="text-gray-600">{bizName}</h3>
          <p className="text-blue-600 font-semibold"></p>
          <div className="flex flex-col   mt-2">
            <span className="text-gray-400">Domains</span>
           {!entry.payment?"": <Link href={currentRoute+"/website"} className="text-blue-600">{currentRoute+"/website"}</Link>}
          </div>

          <div className="mt-4">
            <p className="text-gray-400">Status</p>
            <div className="flex items-center space-x-2">
              <span className={`${!entry.payment?"bg-red-500":" bg-green-500"} h-3 w-3 rounded-full`}></span>
              <span>{!entry.payment?"payment pending":"Ready"}</span>
              
            </div>
          </div>

          <div className="mt-4">
          <h2 className="text-base font-bold">Business Details</h2>
        <p>Category: {entry.businessDetails?.businessCategory}</p>
        <p>Subcategory: {entry.businessDetails?.businessSubCategory}</p>
        <p>Tags: {entry.businessDetails?.tags.join(", ") || "No Tags"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
