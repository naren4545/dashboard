import React, { useState } from "react";
import arrow from '../../assests/bulletAroow.svg';
import Image from "next/image";
import { useFormData } from "./FormContext";

const Step10 = () => {
  const [checked, setChecked] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { formData, updateFormData } = useFormData();  // Handle input changes for category fields and new tag

  const handleCheckboxChange = () => {
    setChecked(pre=>{
        
        updateFormData("terms_condition",!pre)
       return !pre
    
    });
  };

  const handleReadMoreToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=" mx-auto p-6 bg-white ">
      <h1 className="text-xl font-bold mb-4 flex items-center">
        <Image src={arrow} className="mr-2 inline" alt="arrow" />
        Welcome to Pintude!
      </h1>
      <p className="text-sm font-medium mb-4">
        Thank you for using our platform. By accessing and using Pintude, you agree to comply with the following terms and conditions.
      </p>

      <div className="space-y-4 text-sm">
        <div>
          <h2 className="font-semibold">1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of Pintude. By registering for an account, you accept these terms in full. 
            If you disagree with any part, please discontinue using our services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">2. User Responsibilities</h2>
          <ul className="list-disc ml-5">
            <li>You agree to provide accurate and up-to-date information during registration.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>Any activities carried out under your account will be your responsibility.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">3. Payment Terms</h2>
          <ul className="list-disc ml-5">
            <li>Only UPI payments are accepted on our platform.</li>
            <li>The annual subscription fee is non-refundable once the payment is processed.</li>
            <li>Make sure your UPI ID is accurate to avoid payment errors.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">5. Privacy Policy</h2>
          <p>
            Our Privacy Policy, available <span className="border-b border-black cursor-pointer">here</span>, explains how we collect and use your information. Please review it for a better understanding.
          </p>
          <span className="text-orange-500 cursor-pointer" onClick={handleReadMoreToggle}>
            {showMore ? "Show Less" : "Read More..."}
          </span>

          {showMore && (
            <div className="mt-2">
              <p className="text-gray-600">
                The privacy policy covers how we collect your data, how it is used, and the steps we take to protect your personal information.
                We do not share your personal details with any third-party services without your explicit consent.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="agree"
          className="hidden"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agree" className="flex items-center cursor-pointer text-orange-500 text-sm">
          <span className={`w-5 h-5 border border-orange-500 rounded-sm flex items-center justify-center mr-2 ${checked ? 'bg-orange-500' : ''}`}>
            {checked && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </span>
          I agree
        </label>
      </div>
      
      {/* {checked && (
        <p className="text-sm text-orange-500 mt-2">You have agreed to the terms.</p>
      )} */}
    </div>
  );
};

export default Step10;
