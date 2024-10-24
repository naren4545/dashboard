"use client"

import { useState } from 'react';
import AccountSettings from './AccountSettings'
// Components for each settings tab
import PrivacySettings from './PrivacySettings'
import NotificationPreference from './NotificationPreference'
import LanguageRegion from './LanguageRegion';






const SecuritySettings = () => (
  <div>
    <h2 className="text-xl font-semibold">Security Settings</h2>
    <p>Manage your security preferences here.</p>
    {/* Add your form or content here */}
  </div>
);

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('account');


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


  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'privacy':
        return <PrivacySettings profileVisiblty={settingsData.profileVisiblty} />;
      case 'notifications':
        return <NotificationPreference Preference={settingsData.Notification_Preference}/>;
      case 'language':
        return <LanguageRegion />;
      case 'security':
        return <SecuritySettings />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 lg:block hidden">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Tabs */}
      <div className="flex  mb-6">
        <button
          className={`${
            activeTab === 'account' ? 'text-[#F6830E] border-b-2  border-[#F6830E]' : ' border-[#D9D9D9] border-b-2'
          } pb-2 px-3`}
          onClick={() => setActiveTab('account')}
        >
          Account Settings
        </button>
        <button
          className={`${
            activeTab === 'privacy' ? 'text-[#F6830E] border-b-2 border-[#F6830E]' : ' border-[#D9D9D9] border-b-2 '
          } pb-2 px-3`}
          onClick={() => setActiveTab('privacy')}
        >
          Privacy Settings
        </button>
        <button
          className={`${
            activeTab === 'notifications' ? 'text-[#F6830E] border-b-2 border-[#F6830E]' : ' border-[#D9D9D9] border-b-2'
          } pb-2 px-3`}
          onClick={() => setActiveTab('notifications')}
        >
          Notification Preference
        </button>
        <button
          className={`${
            activeTab === 'language' ? 'text-[#F6830E] border-b-2 border-[#F6830E]' : ' border-[#D9D9D9] border-b-2'
          } pb-2 px-3`}
          onClick={() => setActiveTab('language')}
        >
          Language & Region
        </button>
        <button
          className={`${
            activeTab === 'security' ? 'text-[#F6830E] border-b-2 border-[#F6830E]' : ' border-[#D9D9D9] border-b-2'
          } pb-2 px-3`}
          onClick={() => setActiveTab('security')}
        >
          Security
        </button>
      </div>

      {/* Tab Content */}
      <div className="">{renderTabContent()}</div>
    </div>
  );
};

export default SettingsComponent;
