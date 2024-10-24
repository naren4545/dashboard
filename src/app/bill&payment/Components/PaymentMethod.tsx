import React from 'react';
import pen from '../../assests/pen.svg'
import add from '../../assests/add.svg'
import Image from 'next/image';

interface PaymentMethodProps {
  paymentMethod: {
    upiId: string;
  };
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ paymentMethod }) => {
  return (
    <div className="bg-white py-4  shadow-xl rounded-xl max-w-md mx-auto">
    <h2 className="text-lg text-center font-semibold mb-2">Payment Method</h2>
    <hr className="border-[#D9D9D9]" />
    
    <div className="px-4 pt-4">
      {/* UPI ID section */}
      <div className="mb-4">
        <p className="text-sm font-semibold">
          UPI ID: <span className="font-normal">yourname@bank</span>
        </p>
        <button className="text-orange-500 flex items-center text-sm mt-2">
          Change UPI ID
          <Image src={pen} alt='' className='ml-2'/>
        </button>
      </div>
  
      {/* Linked Bank Account section */}
      <div className="mb-4">
        <p className="text-sm font-semibold">
          Linked Bank Account <span className="font-normal text-sm">(Optional)</span>
        </p>
        <button className="text-orange-500 flex items-center text-sm mt-2">
          Add Bank Details
          <Image src={add} alt='' className='ml-2'/>
        </button>
      </div>
  
      {/* Note */}
      <div className="text-sm text-gray-500 mt-4">
        <p className="font-semibold">
          Note: <span className="font-normal">We only support UPI payments. No card details or other payment methods are required.</span>
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default PaymentMethod;
