import React, { useState } from "react";

const AddBankDetailsModal = ({ isModalOpen, closeModal }) => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation logic here

    // Example logic for matching account numbers
    if (accountNumber !== confirmAccountNumber) {
      alert("Account numbers do not match!");
      return;
    }

    // You can handle form submission here, such as sending data to an API
    console.log({
      bankName,
      accountNumber,
      accountHolderName,
      ifscCode,
    });

    // After submission, you can close the modal
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white py-6 rounded-[20px] shadow-lg m-4 max-w-[606px] w-full relative">
            <div className="px-4">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Add Bank Details
              </h2>
              <p className="text-center text-xs mb-4">
                Once you enter your UPI ID, the bank account linked to your UPI
                will be automatically fetched and displayed for your reference.
              </p>
            </div>
            <hr className="border-[#B6B6B6]" />
            <div className="px-2">
              <form className="max-w-[398px] mx-auto pt-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm text-[#B6B6B6] font-medium mb-1">
                    Bank Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-[#B6B6B6]"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#B6B6B6] font-medium mb-1">
                    Account Number:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-[#B6B6B6]"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#B6B6B6] font-medium mb-1">
                    Confirm Account Number:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-[#B6B6B6]"
                    value={confirmAccountNumber}
                    onChange={(e) => setConfirmAccountNumber(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#B6B6B6] font-medium mb-1">
                    Account Holder Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-[#B6B6B6]"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#B6B6B6] font-medium mb-1">
                    IFSC Code:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-[#B6B6B6]"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={closeModal} // Close modal on cancel
                    className="mr-4 px-8 py-2 border-[#F79E1B] border text-[#F79E1B] rounded-[36px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2 bg-[#EC970D] text-white rounded-[37px]"
                  >
                    Save & Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBankDetailsModal;
