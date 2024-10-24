import React from 'react'

export default function Slip() {
  return (
    <div className="bg-white py-4  shadow-xl rounded-xl mx-auto">
  <h2 className="text-xs font-medium mb-4 px-4">Payment Receipt</h2>
  <hr className="border-gray-200 mb-4" />

  <div className="flex justify-between mb-4 px-4">
    <div>
      <p className="text-sm font-semibold mb-3">From:</p>
      <p className="text-xs"><strong className='font-medium'>Client’s name</strong> - Jane Cooper</p>
      <p className="text-xs"><strong className='font-medium'>Client’s Address</strong> - Lorem ipsum dolor sit amet</p>
      <p className="text-xs"><strong className='font-medium'>Client’s contact</strong> - (406) 555-0120</p>
    </div>
    <div>
      <p className="text-sm font-semibold">To:</p>
      <p className="text-xs"><strong>Recipient name</strong> -</p>
      <p className="text-xs"><strong>Contact</strong> - +91 123 456 7890</p>
      <p className="text-xs"><strong>Email</strong> - example@gmail.com</p>
    </div>
  </div>

  <div className="mb-4 px-4 pt-6">
    <p className="text-base font-semibold">Total Amount Paid:  <span className="text-base font-normal">₹500</span></p>
   
  </div>

  <div className="mb-4 px-4">
    <p className="text-base font-semibold">Transaction ID:  <span className="text-base font-normal">[Transaction ID]</span></p>
    
  </div>

  <div className="mb-4 px-4">
    <p className="text-base font-semibold">Payment Date: <span className="text-base font-normal">00/00/0000</span></p>
    
  </div>

  <div className="mb-4 px-4">
    <p className="text-sm font-semibold">Status:  <span className="text-base font-normal">Success</span></p>
   
  </div>
<div className='px-4'>
  <button className="bg-[#F79E1B] text-white px-4 text-xs py-1 rounded-md hover:bg-orange-600 transition ">
    Download
  </button>
  </div>
</div>

  )
}
