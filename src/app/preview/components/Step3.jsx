import React, { useState, useEffect } from "react";
import { useFormData } from "./FormContext";
const Step3 = () => {
  const [formData3, setFormData3] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    sameAsPhone: false, // For checkbox state
  });
  const { formData, updateFormData } = useFormData();

  useEffect(() => {
    setFormData3(formData.contactDetails);
  }, []);
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, formData, checked);

    if (type === "checkbox") {
      setFormData3((prevData) => {
        let data = {
          ...prevData,
          [name]: checked,
          whatsapp: checked ? prevData.phone : "", // If checked, copy phone number
        };

        updateFormData("contactDetails",data)
        return data

      });
    } else {
      setFormData3((prevData) =>{ 
        
    let data={
        ...prevData,
        [name]: value,
      }
    
      updateFormData("contactDetails", data);
    return data
    
    });
      
      console.log(formData);
    }
  };

  return (
    <div className="max-w-[627px] mx-auto">
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Name Field */}
        <div>
          <label className="block text-base font-medium text-[#B6B6B6]">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData3.name}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-base font-medium text-[#B6B6B6]">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData3.phone}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* WhatsApp Number Field */}
        <div className="">
          <label className="block text-base font-medium text-[#B6B6B6]">
            WhatsApp Number
          </label>
          <input
            type="text"
            name="whatsapp"
            value={formData3.whatsapp}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex items-center mt-2">
            <input
              id="sameAsPhone"
              type="checkbox"
              name="sameAsPhone"
              checked={formData3.sameAsPhone}
              onChange={handleInputChange}
              className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="sameAsPhone" className="ml-2 text-sm text-gray-500">
              Same as Phone Number
            </label>
          </div>
        </div>

        {/* Email Field */}
        <div className="">
          <label className="block text-base font-medium text-[#B6B6B6]">
            Email ID
          </label>
          <input
            type="email"
            name="email"
            value={formData3.email}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
