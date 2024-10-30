import React from "react";

export default function WebsiteNotLive() {
  return (
    <div>
      <div class="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-6">
        <p>
          Your business is not yet live. Please make a payment to verify your
          business.
        </p>
        <button
          class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
          fdprocessedid="84jj1e"
        >
          Make Payment
        </button>
        <div class="mt-4">
          <p>Bill Status: Unpaid</p>
        </div>
      </div>
    </div>
  );
}
