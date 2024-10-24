"use client";

import React, { useEffect, useState } from "react";

const PreviewPage = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch form data from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  if (!formData) {
    return <p>Loading data...</p>;
  }

  const { businessInfo, pictures, businessDetails } = formData;

  // Log the pictures array to see its structure
  console.log("Pictures array:", pictures);
console.log(formData)
  // Function to handle image display
  const getImageSource = (picture) => {
    if (picture?.file instanceof File) {
      console.log("Image is a File object:", picture.file); // Debugging line
      return URL.createObjectURL(picture.file); // If it’s a File, use createObjectURL
    } else if (typeof picture?.file === "string") {
      console.log("Image is a string (URL or Base64):", picture.file); // Debugging line
      return picture.file; // If it’s a URL or Base64 string, return it as-is
    }
    return null;
  };

  const imageSrc = pictures  ? getImageSource(pictures[0]) : "hii";
console.log(imageSrc)
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        {/* Business Name */}
        <div className="font-bold text-xl mb-2">
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
            <img src={imageSrc} alt={pictures[0].name} className="w-full h-auto" />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
