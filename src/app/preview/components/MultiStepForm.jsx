"use client";



import React, { useState } from "react";
import { FormProvider, useFormData } from "./FormContext";

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import Step10 from './Step10'
// const Step1 = () => {
//   const { formData, updateFormData } = useFormData();

//   return (
//     <div>
//       <label>Business Name:</label>
//       <input
//         type="text"
//         value={formData.businessDetails || ''}
//         onChange={(e) => updateFormData('businessDetails', e.target.value)}
//         className="border p-2 mb-4 w-full"
//       />
//     </div>
//   );
// };



// Define more steps similarly...


// Other steps can be similarly defined...

// const Step10 = () => {
//   const { formData, updateFormData } = useFormData();
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={formData.termsAccepted}
//           onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
//         />
//         Accept Terms and Conditions
//       </label>
//     </div>
//   );
// };
const stepName=["",
  "Business Address Details",
"Add Contact Details",
"Add Business Details",
"Add Business Timings",
"Add Pictures",
"Connect Your Social Media Accounts",
"Upload Your Business Certificates",
"Add Payment Method",
"Terms and Conditions"

]



const checkEmptyFields = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined || value === "") {
      return {validation:false,message:`${key} does not have a value.`};
    }
  }
  return {validation:true,message:``};
};
const MultiStepForm = () => {
  
  const [step, setStep] = useState(1);
  const { formData, updateFormData } = useFormData();


  const steps = [
    <Step1 key={1} />,
    <Step2 key={2} />,
    <Step3 key={3} />,
    <Step4 key={4} />,
    <Step5 key={5} />,
    <Step6 key={6} />,
    <Step7 key={7}/>,
    <Step8 key={8}/>,
    <Step9 key={9}/>,
    // Other steps can be added here...
    <Step10 key={10} />,
  ];

  const nextStep = () => {
if(step===1 && !formData.buisnessLocation){
  alert("Please fill in your business location.");
return

}
if(step===2 ){
const {validation,message}=checkEmptyFields(formData.buisnessInfo);
if(!validation){
  alert(message);
  return
}


}
if(step===3 ){
  console.log(formData.contactDetails)
  const {validation,message}=checkEmptyFields(formData.contactDetails);
  if(!validation){
    alert(message);
    return
  }
}

if(step===4 ){
  console.log(formData.businessDetails)
  const {validation,message}=checkEmptyFields(formData.businessDetails);
  if(!validation){
    alert(message);
    return
  }
}


if(step===7 && !formData.socialLinks.length){
  alert("please enter socail links")
  return


}
if(step===8){

if(formData.gstFile.length===0) {

  alert("please upload GST file")
  return
}
if(formData.udyamFile.length===0) {

  alert("please upload udyam File file")
  return
}

}

if(step===9 && !formData.upiId){

  alert("please enter UPI id")
  return
}

if(step===10 && !formData.terms_condition){

  alert("please agree terms and conditions")
  return
}

    if (step < steps.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
 
      <div className=" mx-auto p-6 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-semibold mb-4">{stepName[step-1]}</h1>

        {/* Progress Bar */}
        <div className="relative flex justify-between mb-8">
          {Array.from({ length: steps.length }, (_, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 flex text-[9px]  items-center justify-center rounded-full border-2 ${
                    step > index
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-gray-300"
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
                  className={`flex-1 h-1 mt-2  ${
                    step > index + 1 ? "bg-orange-500" : "bg-gray-300"
                  }`}
                  style={{transform:"scaleX(1.2);"}}
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
            className={`px-2 py-2 border-[#F6830E] text-xl font-semibold border h-[53px] w-[107px]  md:w-[205px] lg:w-[205px] text-[#F6830E] rounded-md ${
              step === 1 ? "invisible" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-[#F6830E] text-xl  text-white font-semibold rounded-md"
          >
            {step === steps.length ? "Submit" : "Save & Next"}
          </button>
        </div>
      </div>
      
     
  );
};

export default MultiStepForm;
