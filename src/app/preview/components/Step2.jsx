"use client";

import React, { useEffect, useState } from "react";
import { useFormData } from "./FormContext";

const Step2 = () => {
  const [formData2, setFormData2] = useState({
    businessName: "",
    blockNumber: "",
    state: "",
    pincode: "",
    street: "",
    district: "",
    city: "",
    landmark: "",
  });
  const { formData, updateFormData } = useFormData();


  useEffect(()=>{
setFormData2(formData.buisnessInfo)
console.log(formData.buisnessInfo)

  },[])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData2(prev=>{
      let data={

        ...prev,
         [name]: value
      }
      updateFormData("buisnessInfo",data)
      return{...prev, [name]: value}
    
    });
    
    console.log(formData)

  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white ">
     

      {/* Grid Layout */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData2.businessName}
            onChange={function(e){handleInputChange(e)}}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData2.pincode}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Block Number / Building Name</label>
          <input
            type="text"
            name="blockNumber"
            value={formData2.blockNumber}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Street / Colony Name</label>
          <input
            type="text"
            name="street"
            value={formData2.street}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">State</label>
          <input
            type="text"
            name="state"
            value={formData2.state}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">District</label>
          <input
            type="text"
            name="district"
            value={formData2.district}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">City</label>
          <input
            type="text"
            name="city"
            value={formData2.city}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Landmark</label>
          <input
            type="text"
            name="landmark"
            value={formData2.landmark}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Step2;
