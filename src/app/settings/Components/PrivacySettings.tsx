import React from 'react';
import ToggleBar from './UI/toggelButton'; // Assume you have a separate ToggleBar component
import SettingsCardWithToggel from './UI/SettingsCardWithToggel';

interface PrivacySettingsProps {
  profileVisibility: boolean;
}

const PrivacySettings: React.FC<PrivacySettingsProps> = ({ profileVisibility }) => {
  return (
   <SettingsCardWithToggel heading='Profile Visibility' toggelActive={profileVisibility} text="Adjust who can view your profile to manage your visibility and control your privacy. Customize 
your settings to maintain privacy while ensuring the right audience can access your details."/>
    
  );
};

export default PrivacySettings;
