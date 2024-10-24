import React from 'react';

interface BillingSettingsProps {
  billingSettings: {
    name: string;
    address: string;
    contactNumber: string;
    email: string;
  };
}

const BillingSettings: React.FC<BillingSettingsProps> = ({ billingSettings }) => {
  return (
    <div className="bg-white py-4 max-w-96 shadow-xl rounded-xl mb-4">
  <h2 className="text-base font-semibold mb-2 text-center">Billing Setting</h2>
  <hr className='border-[#D9D9D9]'></hr>
  <div className='px-4'>
  <div className="text-xs  max-w-[271px] mx-auto">
    <p className="mb-3 pt-4">
      <span className="font-semibold">Name:</span> {billingSettings.name}
    </p>
    <p className="mb-3 flex">
      <span className="font-semibold w-[68%]">Billing Address:</span> {billingSettings.address}
    </p>
    <p className="mb-3">
      <span className="font-semibold">Contact Number:</span> {billingSettings.contactNumber}
    </p>
    <p className="mb-3">
      <span className="font-semibold">Email ID:</span> {billingSettings.email}
    </p>
  </div>
  </div>
</div>

  
  );
};

export default BillingSettings;
