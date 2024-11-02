"use client";

import React, { useEffect, useState } from "react";
import { useFormData } from "./FormContext";

const Step2 = () => {
  const [formData2, setFormData2] = useState({
    name: "",
    address: {
      blockNumber: "",
      streetName: "",
      landmark: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
  });

  const { formData, updateFormData } = useFormData();

  useEffect(() => {
    setFormData2(formData.details);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData2((prev) => {
      const updatedData = {
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      };
      updateFormData("details", updatedData);
      return updatedData;
    });
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setFormData2((prev) => ({ ...prev, name: value }));
    updateFormData("details", { ...formData2, name: value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Business Name</label>
          <input
            type="text"
            name="name"
            value={formData2.name}
            onChange={handleNameChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData2.address.pincode}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Block Number / Building Name</label>
          <input
            type="text"
            name="blockNumber"
            value={formData2.address.blockNumber}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Street / Colony Name</label>
          <input
            type="text"
            name="streetName"
            value={formData2.address.streetName}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">Landmark</label>
          <input
            type="text"
            name="landmark"
            value={formData2.address.landmark}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">City</label>
          <input
            type="text"
            name="city"
            value={formData2.address.city}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">District</label>
          <input
            type="text"
            name="district"
            value={formData2.address.district}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium text-[#B6B6B6]">State</label>
          <input
            type="text"
            name="state"
            value={formData2.address.state}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Step2;
