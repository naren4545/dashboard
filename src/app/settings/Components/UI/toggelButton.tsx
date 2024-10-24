"use client"

import React, { useState } from 'react';
interface activeProps {
    active: boolean;
  }
const ToggleButton: React.FC<activeProps> = ({active}) => {
  const [isActive, setIsActive] = useState(active);
console.log(isActive)


  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative w-[54px] h-[24px] bg-[#13A8DA] rounded-full cursor-pointer transition-colors ${
          isActive ? 'bg-[#13A8DA]' : 'bg-gray-500'
        }`}
        onClick={toggleHandler}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform ${
            isActive ? 'transform translate-x-8' : 'transform translate-x-0'
          }`}
        >
          {isActive && (
            <div className="absolute top-1.5 left-1.5 text-green-500 text-lg">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5946 1.36893L3.41049 7.67484C3.34735 7.73019 3.26405 7.75893 3.17887 7.75474C3.09369 7.75054 3.0136 7.71377 2.9562 7.65249L0.0992344 4.59835C0.0453623 4.53653 0.0182951 4.45693 0.0237349 4.37632C0.0291747 4.29572 0.0666968 4.2204 0.128396 4.16625C0.190096 4.11209 0.271156 4.08332 0.354498 4.08599C0.437841 4.08867 0.516959 4.12258 0.575184 4.18059L3.21587 7.00296L10.162 0.906452C10.2256 0.854444 10.3077 0.828464 10.3909 0.833985C10.4741 0.839507 10.552 0.8761 10.608 0.936054C10.6641 0.996008 10.6941 1.07464 10.6916 1.15539C10.6891 1.23614 10.6543 1.3127 10.5946 1.36893Z" fill="#13A8DA"/>
</svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
