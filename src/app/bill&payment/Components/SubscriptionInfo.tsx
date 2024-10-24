import React from 'react';

interface SubscriptionInfoProps {
  subscriptionInfo: {
    planName: string;
    status: string;
    renewalDate: string;
  };
}

const SubscriptionInfo: React.FC<SubscriptionInfoProps> = ({ subscriptionInfo }) => {
  return (
    <div className="bg-white py-4 max-w-96 shadow-xl rounded-xl mb-4">
     <h2 className="text-base text-center font-semibold mb-2  px-2">Current Subscription</h2>
     <hr className='border-[#D9D9D9]'></hr>
     <div className='px-4 pt-2'>
      <div className='max-w-52   mx-auto'>
      
      <p className='flex  '><span className='w-full text-base font-medium'>Plan Name:</span><span> {subscriptionInfo.planName}</span></p>
      <p className=' '><span className=' text-base font-medium'>Status:</span>  {subscriptionInfo.status}</p>
      <p className=' '><span className=' text-base font-medium'>Renewal Date:</span> {subscriptionInfo.renewalDate}</p>
      </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
