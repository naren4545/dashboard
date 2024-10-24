import React, { useEffect, useState } from "react";
import upload from '../../assests/upload.svg';
import correct from '../../assests/lets-icons_check-round-fill.svg';
import wrong from '../../assests/wrong.svg';
import invalid from '../../assests/invvalidi.svg';
import Image from "next/image";
import { useFormData } from "./FormContext";
const Step6 = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const maxFileSize = 50 * 1024 * 1024; // 50MB in bytes
  const supportedFileTypes = ["image/jpeg", "image/png", "image/svg+xml"];
  const maxFiles = 5; // Maximum file limit
  const { formData, updateFormData } = useFormData();  // Handle input changes for category fields and new tag
useEffect(()=>{

setUploadedFiles(formData.pictures)
},[])
  // Handle file upload
  const handleFileUpload = (files) => {
    const newFiles = Array.from(files);
console.log(newFiles)
    if (uploadedFiles.length + newFiles.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} images. Please remove some files to add more.`);
      return;
    }

    const validFiles = newFiles.map((file) => {
      const isValidSize = file.size <= maxFileSize;
      const isValidType = supportedFileTypes.includes(file.type);
      return {
        file,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2), // Convert size to MB
        isValid: isValidSize && isValidType,
        errorMessage: !isValidSize ? "File size exceeds the limit" : !isValidType ? "Unsupported file type" : "",
      };
    });

    setUploadedFiles((prev) =>{
        
        updateFormData("pictures",[...prev, ...validFiles])
        return [...prev, ...validFiles]});
    console.log(uploadedFiles)
  };

  // Handle drag and drop events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    handleFileUpload(droppedFiles);
  };

  // Handle file input change (for browse button)
  const handleFileInputChange = (e) => {
    handleFileUpload(e.target.files);
  };

  // Remove file
  const removeFile = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div className=" bg-white p-6 rounded-lg">
      <h1 className="text-xl font-semibold mb-1">Upload Pictures</h1>
      <p className="text-base text-[#B6B6B6] mb-4">You can only upload up to five images.</p>

      <div className="flex  flex-col md:flex-row justify-between"> {/* Flexbox container for side-by-side layout */}
        
        {/* Upload Area */}
        <div
          className={`border-dashed border-4 rounded-xl max-w-[271px] p-6 text-center flex-1 transition-all duration-150 ${
            isDragging ? "border-orange-500 bg-orange-50" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            accept=".jpg,.jpeg,.png,.svg"
            onChange={handleFileInputChange}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <Image src={upload} />
              <p className="text-gray-700">Drag files to upload</p>
              <p className="text-sm text-gray-500">
                or <span className="text-orange-500 underline">Browse Files</span>
              </p>
            </div>
          </label>
          <p className="text-sm text-gray-400 mt-2">Max file size: 50MB</p>
          <p className="text-sm text-gray-400">Supported file types: JPG, PNG, SVG</p>
        </div>

        {/* Uploaded Files List */}
        <div className="  overflow-y-auto  lg:max-h-64">
          {uploadedFiles.map((fileData, index) => (
            <div
              key={index}
              className={`flex lg:max-w-[400px]  lg:min-w-[400px] items-center justify-between p-3 rounded-2xl border ${
                fileData.isValid ? "border-[#D9D9D9]" : "border-red-300"
              }`}
            >
             

              <div className="flex w-full items-center pr-5 relative gap-2">
                {fileData.isValid ? (
                  <Image src={correct}/>
                ) : (
                  <div className="flex items-center text-red-500">
                    <Image src={invalid}/>
                    <p className="ml-2 text-sm">{fileData.errorMessage}</p>
                  </div>
                )}
                {/* Remove button */}

                <div className="flex flex-col">
                <p className="text-sm font-semibold">{fileData.name}</p>
                <p className="text-xs text-gray-500">{fileData.size} MB</p>
              </div>

                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-500 absolute right-0 hover:text-red-500 transition duration-150"
                >
                  <Image src={wrong}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step6;
