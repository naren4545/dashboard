"use client"

import React, { useState } from 'react';
import placeholderImg from '../../assests/placeholderImage.svg'
import camfrom from '../../assests/cam.png'
import location from '../../assests/system-uicons_location.svg'
import contact from '../../assests/phoenIcon.svg'
import email from '../../assests/emailIcon.svg'
import Image from 'next/image';
type ProfileData = {
  firstName: string;
  lastName: string;
  education: string;
  gender: string;
  dob: string;
  state: string;
  phone: string;
  email: string;
  location: string;
};

const ProfileComponent: React.FC = () => {
  // Dummy data
  const initialProfileData: ProfileData = {
    firstName: 'Jane',
    lastName: 'Cooper',
    education: 'M.Sc CS',
    gender: 'Female',
    dob: '01-01-1990',
    state: 'Maharashtra',
    phone: '+91 123 456 7890',
    email: 'cooperjane@gmail.com',
    location: 'Allentown, New Mexico',
  };

  // State to manage profile data
  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);

  // Handler for updating form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Profile Data:', profileData);
    // Here you can add the logic for sending updated data to the server.
  };

  return (
    <div style={{ boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.25)' }} className=" mx-auto p-6 bg-white  rounded-[20px] flex gap-3 lg:flex-row flex-col">
      {/* Left Section - User Info */}
      <div className="lg:w-1/3 w-full lg:border-r border-gray-200">
        <div className="text-center">
          <div className="relative inline-block">
            {/* Profile Image */}
            <Image
              src={placeholderImg} 
              alt="Profile" 
              className="rounded-full mx-auto w-[200px]" 
            />
            {/* Camera Icon */}
            <span className="absolute top-[21px] right-3 p-1 bg-gray-200 rounded-full cursor-pointer">
             <Image src={camfrom} alt=''/>
             </span>
           
          </div>

          {/* User Info */}
          <div className='mb-9 border-b border-[#D9D9D9] pb-2'>
          <h3 className="mt-4 text-2xl font-bold">{`${profileData.firstName} ${profileData.lastName}`}</h3>
          <p className="text-base flex justify-center items-center"> <Image src={location} alt="location" className='inline mr-1'/> {profileData.location}</p>
          </div>
          {/* Contact Info */}
          <div className="mt-4 space-y-2 text-left text-base font-medium max-w-[190px] mx-auto">
            <div className="flex items-center  justify-start gap-1">
              <Image src={email} alt='' className='w-[24px]'/>
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center justify-start gap-1 pt-4">
               <Image src={contact} alt='' className='w-[24px]'/>
              <span>{profileData.email}</span>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="mt-6 bg-gray-50 p-4 rounded-md">
          <h4 className="text-sm font-semibold">Profile Completed 80%</h4>
          <p className="text-xs text-gray-500 mt-2">
            Keep your profile up-to-date to ensure your information is accurate and accessible to your customers.
          </p>
          <div className="mt-4">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex relative rounded bg-gray-200">
                <div 
                  style={{ width: '80%' }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F6830E]"
                />

                <div className='w-2 h-3 rounded-full bg-white relative top-[-1px] left-[-3px]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Editable Form */}
      <div className="lg:w-2/3 w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className='lg:col-span-1 col-span-2'>
              <label className="block text-base font-medium text-[#B6B6B6]">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={profileData.firstName} 
                onChange={handleInputChange}
                className="mt-1 h-[53px] block w-full  px-3 py-2 bg-[#F1F8FA] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>

            <div className='lg:col-span-1 col-span-2'>
              <label className="block text-base font-medium text-[#B6B6B6]">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={profileData.lastName} 
                onChange={handleInputChange}
                className="mt-1 h-[53px] block w-full  px-3 py-2 bg-[#F1F8FA] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>

            <div className="col-span-2">
              <label className="block text-base font-medium text-[#B6B6B6]">Education</label>
              <input 
                type="text" 
                name="education"
                value={profileData.education} 
                onChange={handleInputChange}
                className="mt-1 h-[53px] block w-full  px-3 py-2 bg-[#F1F8FA] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>

            <div className="col-span-2">
              <label className="block text-base font-medium text-[#B6B6B6]">Gender</label>
              <select 
                name="gender"
                value={profileData.gender} 
                onChange={handleInputChange}
                className="mt-1 h-[53px] block w-full  px-3 py-2 bg-[#F1F8FA] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-base font-medium text-[#B6B6B6]">Date of Birth</label>
              <input 
                type="date" 
                name="dob"
                value={profileData.dob} 
                onChange={handleInputChange}
                className="mt-1 h-[53px] block w-full  bg-[#F1F8FA] px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>

            <div className="col-span-2">
              <label className="block text-base font-medium text-[#B6B6B6]">State of Residence</label>
              <input 
                type="text" 
                name="state"
                value={profileData.state} 
                onChange={handleInputChange}
                className="mt-1 block h-[53px] w-full  px-3 py-2 bg-[#F1F8FA]  rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="mt-6 w-full  h-[54] bg-[#13A8DA] text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Save and Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileComponent;
