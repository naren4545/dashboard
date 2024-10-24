import React from 'react';
import arrow from '../../assests/bulletAroow.svg';
import Image from 'next/image';
interface Payment {
  date: string;
  transactionId: string;
  amount: string;
  status: string;
}

interface PaymentHistoryProps {
  payments: Payment[];
}

const PaymentHistory: React.FC<PaymentHistoryProps> = ({ payments }) => {
  return (
    <div className="w-full">
      <div className='custom-bullet flex items-center pb-4'>
      <Image src={arrow} alt="" className='mr-2 inline'/>  <h2 className="text-sm  "> Payment History</h2>
      </div>
      <table className="min-w-full text-[10px] lg:text-sm   rounded-md border-separate border-spacing-y-2">
        <thead className='pb-4'>
          <tr className="border-[#F79E1B] text-[#ADADAD] py-3  border-b">
            <th className="text-left p-1  font-semibold">Date</th>
            <th className="text-left p-1  font-semibold">Transaction ID</th>
            <th className="text-left p-1  font-semibold">Amount</th>
            <th className="text-left p-1 font-semibold">Status</th>
            <th className="text-left p-1  font-semibold">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            
            <tr key={index} className="border-b shadow-lg bg-white mb-3 relative">
              <td className="p-1">{payment.date}</td>
              <td className="p-1">{payment.transactionId}</td>
              <td className="p-1">{payment.amount}</td>
              <td className={`p-1 text-${payment.status === 'Success' ? 'green' : 'red'}-500`}>{payment.status}</td>
              <td className="p-1">
                <button className="bg-orange-400 text-white px-2 py-1 rounded shadow hover:bg-orange-500 transition">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
