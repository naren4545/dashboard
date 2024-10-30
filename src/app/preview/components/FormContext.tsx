// FormContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for each part of the form data
interface BusinessInfo {
  businessName: string;
  blockNumber: string;
  state: string;
  pincode: string;
  street: string;
  district: string;
  city: string;
  landmark: string;
}

interface ContactDetails {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  sameAsPhone: boolean;
}

interface BusinessDetails {
  businessCategory: string;
  businessSubCategory: string;
  tags: string[];
}

interface FormData {
  id:number
  buisnessLocation: string;
  buisnessInfo: BusinessInfo;
  contactDetails: ContactDetails;
  businessDetails: BusinessDetails;
  businessTimings: string;
  pictures: string[];
  gstFile: File | null;
  udyamFile: File | null;
  additionalDocs: File[];
  upiId: string;
  terms_condition: string;
  socialLinks: string[];
}

// Define the context type
interface FormContextType {
  formData: FormData;
  updateFormData: (step: keyof FormData, value: any) => void;
  handelAddBuisness:(biz:any)=>void;
  handelInitialValue:()=>void
  businesses:any[];
  handelshowMultiStepForm:(value:boolean)=>void;
  showMultiStepForm:boolean
  
}

// Create a Form context with a default value
const FormContext = createContext<FormContextType | undefined>(undefined);

// Hook to use FormContext
export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
};

// Define FormProvider Props
interface FormProviderProps {
  children: ReactNode;
}

// Provider component for the form context
export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    id:1,
    buisnessLocation: "",
    buisnessInfo: {
      businessName: "",
      blockNumber: "",
      state: "",
      pincode: "",
      street: "",
      district: "",
      city: "",
      landmark: "",
    },
    contactDetails: {
      name: "",
      phone: "",
      whatsapp: "",
      email: "",
      sameAsPhone: false,
    },
    businessDetails: {
      businessCategory: "",
      businessSubCategory: "",
      tags: [],
    },
    businessTimings: "",
    pictures: [],
    gstFile: null,
    udyamFile: null,
    additionalDocs: [],
    upiId: "",
    terms_condition: "",
    socialLinks: [],
  });




  const [businesses, setBuisness] = useState<any[]>([]);

  const [showMultiStepForm, setShowMultiStepForm] = useState(false);



function handelshowMultiStepForm(value:boolean){

  setShowMultiStepForm(value)

}

  function handelInitialValue(){

setFormData({
  id:1,
  buisnessLocation: "",
  buisnessInfo: {
    businessName: "",
    blockNumber: "",
    state: "",
    pincode: "",
    street: "",
    district: "",
    city: "",
    landmark: "",
  },
  contactDetails: {
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    sameAsPhone: false,
  },
  businessDetails: {
    businessCategory: "",
    businessSubCategory: "",
    tags: [],
  },
  businessTimings: "",
  pictures: [],
  gstFile: null,
  udyamFile: null,
  additionalDocs: [],
  upiId: "",
  terms_condition: "",
  socialLinks: [],
})


  }

  // Function to update form data based on step key and value
  const updateFormData = (step: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [step]: value,
    }));
  };

  const handelAddBuisness=(biz:any)=>{
setBuisness((prev)=>{

let id=businesses.length+1
biz.id=id
console.log([...prev,biz])
return [...prev,biz]

})

  }
  console.log(businesses,formData);

  return (
    <FormContext.Provider value={{ formData, updateFormData,handelAddBuisness,handelInitialValue,businesses,handelshowMultiStepForm,showMultiStepForm }}>
      {children}
    </FormContext.Provider>
  );
};
