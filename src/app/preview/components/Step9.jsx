import React, { useEffect, useState } from "react";
import add from '../../assests/gg_add.svg';
import Image from "next/image";
import AddBankDetailsModal from './AddBankDetailsModal'
import { useFormData } from "./FormContext";

const Step9 = () => {
  const [upiID, setUpiID] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [showBankDetails, setShowBankDetails] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const { formData, updateFormData } = useFormData();  // Handle input changes for category fields and new tag


  useEffect(()=>{

    setUpiID(formData.upiId)
  },[])
  // Simulate UPI ID Verification
  const verifyUPI = () => {
    if (upiID === '') {
      setError('Please enter your UPI ID.');
    } else if (!upiID.includes('@')) {
      setError('Invalid UPI ID format. Please use format: yourname@bank.');
    } else {
      // Simulating an API call
      setError('');
      setIsVerified(true); // Assuming verification success
      setShowBankDetails(true);
      updateFormData("upiId",upiID) // Show option to add bank details after verification
    }
  };

  const handleUPIChange = (e) => {
    setUpiID(e.target.value);
   
    setError('');  // Clear error when user types
  };

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div className="step9-component mb-6 px-2 py-4 max-w-[530px] border border-[#D9D9D9] rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Enter your UPI ID *</h3>
        <div className="upi-input-section">
          <input
            type="text"
            value={upiID}
            onChange={handleUPIChange}
            placeholder="e.g. yourname@bank"
            className="p-2 w-72 mb-2 border border-gray-300 rounded-md placeholder:text-xs placeholder:text-[#B6B6B6]"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!isVerified ? (
            <div className="mt-5">
              <button
                onClick={verifyUPI}
                style={{
                  padding: "5px 20px",
                  backgroundColor: "#F6830E",
                  color: "#fff",
                  border: "none",
                  borderRadius: "7px",
                  cursor: "pointer",
                }}
              >
                Verify & ADD
              </button>
            </div>
          ) : (
            <p style={{ color: 'green' }}>UPI ID Verified!</p>
          )}
        </div>
      </div>

      {/* Linked Bank Account Section */}
      {showBankDetails && (
        <div className="step9-component px-2 py-4 max-w-[530px] border border-[#D9D9D9] rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Linked Bank Account (Optional)</h3>
          <button
            onClick={openModal}  // Open modal on button click
            className="text-[#EC970D] flex items-center"
          >
            Add Bank Details <span className="ml-1"><Image src={add} alt="add icon" /></span>
          </button>
        </div>
      )}
<p className="text-xs mt-5"><span className="font-medium">Note:</span>We only support UPI payments. No card details or other payment methods are required.</p>
      {/* Modal for Adding Bank Details */}
      {<AddBankDetailsModal isModalOpen={isModalOpen} closeModal={closeModal}/>
      }
    </>
  );
};

export default Step9;
