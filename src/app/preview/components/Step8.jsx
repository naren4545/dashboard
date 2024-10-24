import React, { useState, useRef, useEffect } from "react";
import upload from '../../assests/uploadDoc.svg';
import Image from "next/image";
import { useFormData } from "./FormContext";
const Step8 = () => {
  const [gstFile, setGstFile] = useState(null);
  const [udyamFile, setUdyamFile] = useState(null);
  const [additionalDocs, setAdditionalDocs] = useState([]);
  const { formData, updateFormData } = useFormData();  // Handle input changes for category fields and new tag


  useEffect(()=>{

    setGstFile(formData.gstFile)
    setUdyamFile(formData.udyamFile)
    setAdditionalDocs(formData.additionalDocs)
    
     },[])
  const gstInputRef = useRef(null);  // For GST File
  const udyamInputRef = useRef(null); // For Udyam File
  const additionalInputRef = useRef(null); // For Additional Docs
 
  const style={
    border: "1px solid #D9D9D9",
    padding: "15px",
    borderRadius:'5px',
    textAlign: "center",
    marginBottom: "10px",
    cursor: "pointer",
    maxWidth:"598px"
  }
  const handleFileUpload = (e, setFile,fileName) => {
    const file = e.target.files[0];


    if (file && fileName!="additionalDocs") {
      setFile(file);
     updateFormData(fileName,file)

    }else{

      setFile(pre=>{

       updateFormData(fileName,[...pre, file]);
       return [...pre, file]
      })
    }
  };

  const handleDrop = (e, setFile,fileName) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && fileName!="additionalDocs") {
      setFile(file);
     updateFormData(fileName,file)

    }else{
console.log("hii")
      setFile(pre=>{

       updateFormData(fileName,[...pre, file]);
       return [...pre, file]
      })
    }
  };

  const preventDefault = (e) => e.preventDefault();

  const triggerFileInput = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.click();  // Triggers the hidden input when div is clicked
    }
  };

  return (
    <div className="upload-component">
      {/* GST Certificate */}
      <h3 className="text-xl font-semibold  mb-4">Upload GST Certificate *</h3>
      <div
        className="upload-box"
        onDrop={(e) => handleDrop(e, setGstFile,"gstFile")}
        onDragOver={preventDefault}
        onClick={() => triggerFileInput(gstInputRef)}  // Triggers input on click
        style={style}
      >
        {gstFile ? (
          <p>{gstFile.name}</p>
        ) : (
          <p><Image src={upload} className="inline mr-2"/>Drag & Drop file from here or <strong>Choose File</strong></p>
        )}
        <input
          type="file"
          ref={gstInputRef}
          onChange={(e) => handleFileUpload(e, setGstFile,"gstFile")}
          style={{ display: "none" }}  // Hidden input
        />
      </div>

      {/* Udyam Certificate */}
      <h3 className="text-xl font-semibold mb-4">Upload Udyam Certificate *</h3>
      <div
        className="upload-box"
        onDrop={(e) => handleDrop(e, setUdyamFile,"udyamFile")}
        onDragOver={preventDefault}
        onClick={() => triggerFileInput(udyamInputRef)}  // Triggers input on click
        style={style}
      >
        {udyamFile ? (
          <p>{udyamFile.name}</p>
        ) : (
          <p><Image src={upload} className="inline mr-2"/>Drag & Drop file from here or <strong>Choose File</strong></p>
        )}
        <input
          type="file"
          ref={udyamInputRef}
          onChange={(e) => handleFileUpload(e, setUdyamFile,"udyamFile")}
          style={{ display: "none" }}  // Hidden input
        />
      </div>

      {/* Additional Documents */}
      <h3 className="text-xl font-semibold mb-4">Additional Documents</h3>
      <div
        className="upload-box"
        onDrop={(e) => handleDrop(e, setAdditionalDocs,"additionalDocs")}
        onDragOver={preventDefault}
        onClick={() => triggerFileInput(additionalInputRef)}  // Triggers input on click
        style={style}
      >
        {additionalDocs.length ? (
          <ul>
            {additionalDocs.map((doc, index) => (
              <li key={index}>{doc.name}</li>
            ))}
          </ul>
        ) : (
          <p><Image src={upload} className="inline mr-2"/>Drag & Drop file from here or <strong>Choose File</strong></p>
        )}
        <input
          type="file"
          ref={additionalInputRef}
          onChange={(e) => handleFileUpload(e, setAdditionalDocs,"additionalDocs")}
          style={{ display: "none" }}  // Hidden input
        />
      </div>
      
      <p>Note: Supported file types: JPG, PNG, SVG (Max file size: 50MB)</p>
    </div>
  );
};

export default Step8;
