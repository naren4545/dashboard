// FormContext.js (Ensure this is correctly set up)

"use client"
import { createContext, useContext, useState } from 'react';

// Create a Form context
const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    buisnessLocation: '',
    buisnessInfo:{
      businessName: "",
      blockNumber: "",
      state: "",
      pincode: "",
      street: "",
      district: "",
      city: "",
      landmark: "",
    },

    contactDetails:{
      name: "",
      phone: "",
      whatsapp: "",
      email: "",
      sameAsPhone: false, // For checkbox state
    },
    businessDetails:{
      businessCategory: "",
      businessSubCategory: "",
      tags: [],
     

    },
    businessTimings:"",
    pictures:[],

      gstFile:null,
      udyamFile:null,
      additionalDocs:[],
upiId:"",
terms_condition:"",
socialLinks:[]
    
    // example field
    // add other fields like contactDetails, businessTiming, etc.
  });

  const updateFormData = (step, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: value,
    }));
  };
console.log(formData)
  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
