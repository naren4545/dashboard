import React, { useState,useEffect } from "react";
import cross from '../../assests/formkit_add.svg'
import add from '../../assests/formkit_add (1).svg'
import Image from "next/image";
import { useFormData } from "./FormContext";



const Step4 = () => {
  const [formData4, setformData4] = useState({
    businessCategory: "",
    businessSubCategory: "",
    tags: [],
    newTag: "",
  });


  const { formData, updateFormData } = useFormData();  // Handle input changes for category fields and new tag

  useEffect(() => {
    setformData4(formData.businessDetails);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData4((prevData) =>{ 
        let data={
      ...prevData,
      [name]: value,
    }
    console.log(data)
    const {newTag, ...finalData}=data
console.log("hiii",finalData)
updateFormData("businessDetails",finalData)
return data

});
  };

  // Add new tag to the list
  const handleAddTag = () => {
    if (formData4.newTag && formData4.newTag.trim() && !formData4.tags.includes(formData4.newTag)) {
      setformData4((prevData) =>{
         let data={
        ...prevData,
        tags: [...prevData.tags, formData4.newTag.trim()],
        newTag: "", // Clear new tag input after adding
      }
      const {newTag, ...finalData}=data
      updateFormData("businessDetails",finalData)
      return data

    });
    }
  };

  // Remove a tag from the list
  const handleRemoveTag = (tagToRemove) => {
    setformData4((prevData) =>{
        
        
        let data={
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }

    updateFormData("businessDetails",data)
    
    return data

});
  };

  return (
    <div className=" bg-white max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add Business Information</h1>
      
      {/* Business Category and Sub-Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Business Category */}
        <div>
          <label className="block text-base font-medium text-[#B6B6B6]">Business Category</label>
          <input
            type="text"
            name="businessCategory"
            value={formData4.businessCategory}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Business Sub-Category */}
        <div>
          <label className="block text-base font-medium text-[#B6B6B6]">Business Sub-Category</label>
          <input
            type="text"
            name="businessSubCategory"
            value={formData4.businessSubCategory}
            onChange={handleInputChange}
            className="mt-1 block h-[53px] w-full px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Add Tags Input */}
      <div className="mt-6 max-w-[627px] ">
        <label className="block text-base font-medium text-[#B6B6B6]">Add Tags</label>
        <div className="flex items-center mt-1 relative">
          <input
            type="text"
            name="newTag"
            value={formData4.newTag}
            onChange={handleInputChange}
            className="flex-1 block h-[53px] px-3 py-2 bg-[#F1F8FA] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTag}
            className="absolute right-1"
          >
           <Image alt="" src={add}/>
          </button>
        </div>
      </div>

      {/* Display Tags */}
      <div className="mt-4 max-w-[627px]  p-2 border rounded-md min-h-[150px] bg-white">
        {formData4.tags.length === 0 ? (
          <span className="text-gray-500">No tags added yet.</span>
        ) : (
          <div className="flex flex-wrap gap-5 ">
            {formData4.tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center bg-[#13A8DA30] px-4 py-2 rounded-md text-blue-700"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <Image src={cross}/>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    
    </div>
  );
};

export default Step4;
