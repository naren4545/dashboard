"use client";

import React, { useEffect, useState } from "react";
import { useFormData } from "./FormContext"; // Ensure this path is correct
import MultiStepForm from "./MultiStepForm"; // Ensure this path points to the MultiStepForm component
import add from '../../assests/gg_add.svg'; // Corrected assets path
import Image from "next/image";
import Link from "next/link";

const PreviewPage = () => {
  // Access formData and showMultiStepForm from FormContext
  const { showMultiStepForm, handelshowMultiStepForm } = useFormData();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(()=>{

  handelshowMultiStepForm(false)
console.log("hide")
},[])
  useEffect(() => {

    
    const fetchEntries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/entries'); // Adjust the URL if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch entries');
        }
        const data = await response.json();
        setEntries(data.data); // Assuming the response structure has a `data` field
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, [showMultiStepForm]);
// useEffect(()=>{

//   const storedData = JSON.parse(localStorage.getItem('formDataArray'));

//   setEntries(storedData)
//   console.log(storedData)
//   setLoading(false);

// },[reloadData,showMultiStepForm])
  
  // Function to handle image display
  const getImageSource = (picture) => {
    if (picture?.file instanceof File) {
      return URL.createObjectURL(picture.file); // If it’s a File, use createObjectURL
    } else if (typeof picture?.file === "string") {
      return picture.file; // If it’s a URL or Base64 string, return it as-is
    }
    return null;
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-1 min-h-screen bg-gray-100">
      <h1 className='text-4xl font-semibold pb-6 pl-4'>{!showMultiStepForm ? "Preview" : "Add Business"}</h1>

      {showMultiStepForm ? (
        <MultiStepForm onClose={() => handelshowMultiStepForm(false)} />
      ) : (
        <>
          <div className="text-right">
            <button
              onClick={() => handelshowMultiStepForm(true)}
              className={`mb-4 ml-auto flex items-center text-[#F6830E] rounded ${entries.length ? "" : "animate-bounce"}`}
            >
              <span>Add Business</span>
              <Image className="inline ml-2" src={add} alt="Add Business" />
            </button>
          </div>

          {entries && entries.length > 0 ? (
            <div className="grid lg:grid-cols-3">
              {entries.map((entry, index) => {
                const { businessInfo, pictures, businessDetails } = entry; // Adjusting to match the fetched data structure
                const imageSrc = pictures && pictures.length > 0 ? getImageSource(pictures[0]) : null;

                return (
                  <Link key={index} href={`/preview/${entry._id}`}>
                    <div
                      className="relative group max-w-96 m-4 p-6 rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                      onClick={() => console.log(`Selected business: ${businessInfo?.businessName}`)}
                    >
                      {/* Business Name */}
                      <div className="font-bold text-xl mb-2 text-gray-800">
                        {businessInfo?.businessName || "Business Name"}
                      </div>

                      {/* Business Category */}
                      <p className="text-gray-700 text-base">
                        Category: {businessDetails?.businessCategory || "Business Category"}
                      </p>

                      {/* Business Subcategory */}
                      <p className="text-gray-700 text-base">
                        Subcategory: {businessDetails?.businessSubCategory || "Subcategory"}
                      </p>

                      {/* Business Tags */}
                      <p className="text-gray-700 text-base">
                        Tags: {businessDetails?.tags.join(", ") || "No Tags"}
                      </p>

                      {/* Image */}
                      <div className="my-4">
                        {imageSrc ? (
                          <img
                            src={imageSrc}
                            alt={pictures[0]?.name || "Business Image"}
                            className="w-full h-auto rounded-lg transition-opacity duration-300 group-hover:opacity-90"
                          />
                        ) : (
                          <p className="text-gray-500 italic">No image available</p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center mt-10 animate-fade-in">
              <p className="text-lg text-gray-500 mb-2">No businesses added yet</p>
              <button
                onClick={() => handelshowMultiStepForm(true)}
                className="mt-2 px-6 py-2 bg-[#F6830E] text-white font-semibold rounded-lg shadow transition-colors"
              >
                Get Started by Adding a Business
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PreviewPage;
