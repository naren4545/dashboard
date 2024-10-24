import React from 'react'
import SettingsCardWithToggel from './UI/SettingsCardWithToggel';
import ToggleButton from './UI/toggelButton';

interface NotificationPreferenceProps {
    Preference: any; // Keeping 'Preference' as 'any'
  }
  
  export default function NotificationPreference({ Preference }: NotificationPreferenceProps) {
  return (
    <>
    <div className='p-2'>
      <SettingsCardWithToggel heading='General Updates' toggelActive={Preference.General_Updates} text='Receive notifications about new features, updates, and announcements.'/>
  

    </div>
    <div className='p-2'>
      <SettingsCardWithToggel heading='Account Activity' toggelActive={Preference.Account_Activity} text='Alerts for logins from new devices, password changes, or security-related events.'/>
  

    </div>
    <div className='p-2'>
      <SettingsCardWithToggel heading='Reminders' toggelActive={Preference.Reminders} text='Notification for upcoming events, meetings, or deadlines.'/>
  

    </div>
    <div className='p-2'>
    <div className="py-4 bg-white shadow-xl rounded-[20px] ">
      <div className="flex justify-between items-center pb-3">
        <div>
          <h2 className="text-xl font-semibold pl-4">Reminders</h2>
          </div>
          
        </div>
        <hr className='border-b '></hr>
        {/* Use ToggleBar component */}
        <ul  className='pl-4 pt-3'>
            <li className='pb-5'>
        <div className="flex justify-between items-center pb-3">
        <div>
          <h2 className="text-base font-semibold ">Customer Feedback</h2>
          </div>
          <div className='pr-4'> <ToggleButton active={Preference.Customer_Feedback} /></div>
          
        </div>
        <p>Receive notifications when a customer leaves a review or provides feedback on your business.</p>
        </li>


        <li>
        <div className="flex justify-between items-center pb-3">
        <div>
          <h2 className="text-base font-semibold ">Page Views</h2>
          </div>
          <div className='pr-4'> <ToggleButton active={Preference.Page_Views} /></div>
          
        </div>
        <p>Get alerts when a customer views your business page, to track engagement and interest.</p>
        </li>
        </ul>
      </div>

    </div>
    </>
  )
}
