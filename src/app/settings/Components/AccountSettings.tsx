"use client"
import React, { useState } from 'react';
import eye from '../../assests/basil_eye-closed-outline.svg';
import eyeOpen from '../../assests/basil_eye-outline.svg';
import Image from 'next/image';
const AccountSettings = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };
  
    const handleConfirmPasswordToggle = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

  return (
    <div className="">
      {/* Change Password Section */}
      <div className="bg-white shadow-md rounded-lg p-8  mb-5">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Form Section (Takes 2/3 of the space) */}
          <form className="md:col-span-2 space-y-6">
            {/* Current Password */}
            <div className="relative max-w-[444px]">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="currentPassword">
                Enter Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className=" w-full bg-[#F1F8FA] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder=""
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="newPassword">Enter New Password</label>
              <div className="relative max-w-[444px]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=""
                className=" w-full bg-[#F1F8FA] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <Image alt="show" src={eyeOpen} /> : <Image alt="hide" src={eye} />}
              </span>
            </div>
            </div>

            {/* Confirm Password */}
            <div className="relative max-w-[444px]">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">Confirm New Password</label>
              <div className="relative max-w-[444px]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=""
                className=" w-full bg-[#F1F8FA] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer"
                onClick={handleConfirmPasswordToggle}
              >
                {showConfirmPassword? <Image alt="show" src={eyeOpen} /> : <Image alt="hide" src={eye} />}
              </span>
            </div>
            </div>

            {/* Change Password Button */}
            <div className='max-w-[444px]'>
              <button
                type="submit"
                className="w-full border border-[#F6830E] text-[#F6830E] font-semibold py-3 rounded-lg hover:bg-[#F6830E] hover:text-white transition duration-200"
              >
                Change Password
              </button>
            </div>
          </form>

          {/* Password Rules Section (Takes 1/3 of the space) */}
          <div className="bg-gray-100 text-[8px] leading-[12px] font-normal h-auto p-4 rounded-lg text-sm flex items-center justify-center max-w-[206px] max-h-[206px]">
            <div>
            <h3 className="font-semibold mb-2 text-xs ">Rules for Password</h3>
            <p className='text-[8px] leading-[12px'>To create a new password, you have
            to meet all of the following requirements: </p>
            <ul className="list-disc ml-3 text-[8px] leading-[12px">
              <li className='mb-3'>Minimum 8 characters</li>
              <li className='mb-3'>At least one special character</li>
              <li className='mb-3'>At least one number</li>
              <li className='mb-3'>Can't be the same as previous</li>
            </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Deactivate Account Section */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Deactivate Account</h2>
        <p className="text-gray-600 mb-6">
          Permanently delete your account and remove all associated data from our platform.
        </p>
        <button
          type="button"
          className="w-[197px] border border-[#F6830E] text-[#F6830E] font-semibold py-3 rounded-lg hover:bg-[#F6830E] hover:text-white transition duration-200"
          >
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
