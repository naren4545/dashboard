import React from 'react';
import PaymentHistory from './PaymentHistory';
import SubscriptionInfo from './SubscriptionInfo';
import BillingSettings from './BillingSettings';
import PaymentMethod from './PaymentMethod';
import Slip from './Slip';

const Billing = () => {
  // All data centralized here
  const payments = [
    { date: '01/01/2024', transactionId: '08790909', amount: '₹500', status: 'Success' },
    { date: '01/02/2024', transactionId: '08790910', amount: '₹500', status: 'Success' },
  ];

  const subscriptionInfo = {
    planName: '₹500 per Year Business Plan',
    status: 'Active',
    renewalDate: '01/01/2025',
  };

  const billingSettings = {
    name: 'Jane Cooper',
    address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    contactNumber: '(406) 555-0120',
    email: 'cooperjane@gmail.com',
  };

  const paymentMethod = {
    upiId: 'yourname@bank',
  };

  return (
    <div className="flex flex-col md:flex-row p-2 ">
      <div className="w-full md:w-2/3  p-3 rounded-md">
        <h1 className="text-2xl font-bold mb-6">Billing & Payments</h1>
        <p>Keep track of your payment history, and manage your billing details.</p>
        <PaymentHistory payments={payments} />
        <div className='pt-6'><Slip/></div>
      </div>
      <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6">
        <SubscriptionInfo subscriptionInfo={subscriptionInfo} />
        <BillingSettings billingSettings={billingSettings} />
        <PaymentMethod paymentMethod={paymentMethod} />
      </div>
    </div>
  );
};

export default Billing;
