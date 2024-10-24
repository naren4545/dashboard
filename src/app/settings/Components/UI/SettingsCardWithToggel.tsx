import React from 'react';
import ToggleBar from './toggelButton'; // Assume you have a separate ToggleBar component

interface SettingscardsProps {
  toggelActive: boolean;
  heading:string;
  text:string
}

const SettingsCardWithToggel: React.FC<SettingscardsProps> = ({ toggelActive,heading,text }) => {
  return (
    <div className="py-4 bg-white shadow-xl rounded-[20px] ">
      <div className="flex justify-between items-center pb-3">
        <div>
          <h2 className="text-xl font-semibold pl-4">{heading}</h2>
          </div>
          <div className='pr-4'> <ToggleBar active={toggelActive} /></div>
          
        </div>
        <hr className='border-b '></hr>
        {/* Use ToggleBar component */}
        <p className="text-sm text-gray-600 mt-1 px-4 py-3">
           {text}
          </p>
      </div>
    
  );
};

export default SettingsCardWithToggel;
