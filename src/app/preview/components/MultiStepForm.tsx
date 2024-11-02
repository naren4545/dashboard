// MultiStepForm.tsx
"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { useFormData } from "./FormContext";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import { useRouter } from "next/navigation";



const sendFormData = async (data:any) => {
  try {
    const payload = {
      name: data.details.name,
      description: data.description,
      blockNumber: data.details.address.blockNumber,
      streetName: data.details.address.streetName,
      landmark: data.details.address.landmark,
      city: data.details.address.city,
      district: data.details.address.district,
      state: data.details.address.state,
      pincode: data.details.address.pincode,
      contactName: data.contactDetails.name,
      contactNumber: data.contactDetails.phone,
      whatsappNumber: data.contactDetails.whatsapp,
      email: data.contactDetails.email,
      businessCategory: data.category.businessCategory,
      businessSubCategory: data.category.businessSubCategory,
      tags: data.tags,
      timings: data.timings,
      pictures: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"], // Adjust if file URL structure differs
      isPaid: data.isPaid || false,
      verified: data.verified || false,
      broadcasts: data.broadcasts || [],
      followers: data.followers || [],
      billId: data.billId || null,
      businessLocation: {
        location: data.buisnessLocation.location,
        placeName: data.buisnessLocation.placeName,
      },
      terms_condition: data.terms_condition,
      upiId: data.upiId,
      udyamFile: "http://example.com/image1.jpg", // Ensure this is a URL if needed
      additionalDocs: ["http://example.com/image1.jpg","http://example.com/image1.jpg"],
      gstFile: "data.gstFile", // Ensure this is a URL if needed
      socialLinks: data.socialLinks || [],
      feedbacks: data.feedbacks || []
    };

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzE5NGQ3ZTI5MjFjYWUzZmU5ZWQ3ZTMiLCJpYXQiOjE3MzA1MjAyNjIsImV4cCI6MTczMTEyNTA2Mn0.rDXfgGjzGEZRCnbZV3awPuJLXEDdyJ8wMSmRsxHp-JI"; // Replace with the actual token
console.log(payload)
    const response = await fetch("https://api.pintude.com/api/business/createBusiness", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send form data");
    }

    const result = await response.json();
    console.log("Server Response:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};


const stepNames = [
  "",
  "Business Address Details",
  "Add Contact Details",
  "Add Business Details",
  "Add Business Timings",
  "Add Pictures",
  "Connect Your Social Media Accounts",
  "Upload Your Business Certificates",
  "Add Payment Method",
  "Terms and Conditions",
];

interface ValidationResult {
  validation: boolean;
  message: string;
}

const checkEmptyFields = (obj: Record<string, any>): ValidationResult => {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined || value === "") {
      return { validation: false, message: `${key} does not have a value.` };
    }
  }
  return { validation: true, message: "" };
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const { formData,handelAddBuisness,updateFormData ,handelInitialValue,handelshowMultiStepForm} = useFormData();
  const router = useRouter();
  const steps: ReactNode[] = [
    <Step1 key={1} />,
    <Step2 key={2} />,
    <Step3 key={3} />,
    <Step4 key={4} />,
    <Step5 key={5} />,
    <Step6 key={6} />,
    <Step7 key={7} />,
    <Step8 key={8} />,
    <Step9 key={9} />,
    <Step10 key={10} />,
  ];

  const nextStep = async() => {


   
   

    // if (step === 1 && !formData.buisnessLocation) {
    //   alert("Please fill in your business location.");
    //   return;
    // }
    // if (step === 2) {
    //   const { validation, message } = checkEmptyFields(formData.buisnessInfo);
    //   if (!validation) {
    //     alert(message);
    //     return;
    //   }
    // }
    // if (step === 3) {
    //   const { validation, message } = checkEmptyFields(formData.contactDetails);
    //   if (!validation) {
    //     alert(message);
    //     return;
    //   }
    // }
    // if (step === 4) {
    //   const { validation, message } = checkEmptyFields(formData.businessDetails);
    //   if (!validation) {
    //     alert(message);
    //     return;
    //   }
    // }
    // if (step === 7 && formData.socialLinks.length === 0) {
    //   alert("Please enter social links");
    //   return;
    // }
    // if (step === 8) {
    //   if (!formData.gstFile) {
    //     alert("Please upload GST file");
    //     return;
    //   }
    //   if (!formData.udyamFile) {
    //     alert("Please upload Udyam file");
    //     return;
    //   }
    // }
    // if (step === 9 && !formData.upiId) {
    //   alert("Please enter UPI ID");
    //   return;
    // }
    // if (step === 10 && !formData.terms_condition) {
    //   alert("Please agree to terms and conditions");
    //   return;
    // }

if(step===10 && formData.terms_condition){

console.log("test:1")
await sendFormData(formData)
// const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];

//     // Add the new form data to the array
//     let data=formData
//     data.id=existingData.length+1
//     existingData.push(data);

//     // Save the updated array back to local storage
//     localStorage.setItem('formDataArray', JSON.stringify(existingData));
  handelAddBuisness(formData)
  setStep(1)
  handelInitialValue();
  handelshowMultiStepForm(false)
  await router.push(`/preview?refresh=${new Date().getTime()}`);
  return
}

    if (step < steps.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="mx-auto w-full p-6 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-semibold mb-4">{stepNames[step - 1]}</h1>

      {/* Progress Bar */}
      <div className="relative flex justify-between mb-8">
        {Array.from({ length: steps.length }, (_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 flex text-[9px] items-center justify-center rounded-full border-2 ${
                  step > index ? "bg-orange-500 text-white border-orange-500" : "border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-[9px] md:text-xs lg:text-xs mt-1 ${
                  step > index ? "text-orange-500" : "text-gray-500"
                }`}
              >
                Step {index + 1}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mt-2 ${step > index + 1 ? "bg-orange-500" : "bg-gray-300"}`}
                style={{ transform: "scaleX(1.2);" }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Render the current step */}
      <div className="mb-6">{steps[step - 1]}</div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className={`px-2 py-2 border-[#F6830E] text-xl font-semibold border h-[53px] w-[107px] md:w-[205px] lg:w-[205px] text-[#F6830E] rounded-md ${
            step === 1 ? "invisible" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-[#F6830E] text-xl text-white font-semibold rounded-md"
        >
          {step === steps.length ? "Submit" : "Save & Next"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
