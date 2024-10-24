"use client"
import React, { useState } from 'react';
import arrow from '../../assests/accordianAroow.svg'
import Image from 'next/image';
import AccountSettings from './AccountSettings'
// Components for each settings tab
import PrivacySettings from './PrivacySettings'
import NotificationPreference from './NotificationPreference'
import LanguageRegion from './LanguageRegion';


const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="  mb-2">
      <div
        className="flex justify-between items-center p-4 cursor-pointer shadow-xl rounded-xl bg-white"
        onClick={onClick}
      >
        <h2 className="text-gray-700 font-semibold">{title}</h2>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        >
         <Image src={arrow}/> {/* Dropdown arrow */}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-auto' : 'max-h-0'
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const Accordion = () => {

    const settingsData={

        profileVisiblty:false,
        Notification_Preference:{
          General_Updates:true,
          Account_Activity:true,
          Reminders:true,
          Customer_Feedback:true,
          Page_Views:true,
        }
      }

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle accordion
  };

  return (
    <div className="py-3 block lg:hidden">
      <AccordionItem
        title="Account Settings"
        isOpen={openIndex === 0}
        onClick={() => handleAccordionToggle(0)}
      >
        {/* Render your Account Settings component here */}
        <AccountSettings/>
      </AccordionItem>

      <AccordionItem
        title="Privacy Settings"
        isOpen={openIndex === 1}
        onClick={() => handleAccordionToggle(1)}
      >
        {/* Render your Privacy Settings component here */}
        <PrivacySettings profileVisiblty={settingsData.profileVisiblty} />
      </AccordionItem>

      <AccordionItem
        title="Notification Preferences"
        isOpen={openIndex === 2}
        onClick={() => handleAccordionToggle(2)}
      >
        {/* Render your Notification Preferences component here */}
        <NotificationPreference Preference={settingsData.Notification_Preference}/>;
      </AccordionItem>

      <AccordionItem
        title="Language & Region"
        isOpen={openIndex === 3}
        onClick={() => handleAccordionToggle(3)}
      >
        {/* Render your Language & Region component here */}
        <LanguageRegion />
      </AccordionItem>

      <AccordionItem
        title="Security"
        isOpen={openIndex === 4}
        onClick={() => handleAccordionToggle(4)}
      >
        {/* Render your Security component here */}
        <div>Security Content</div>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
