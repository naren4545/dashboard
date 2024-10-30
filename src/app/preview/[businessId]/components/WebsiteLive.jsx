import React from "react";

export default function WebsiteLive() {

    const currentUrl = window.location.href + "/website";
   
  return (
    <div>
      <div class="bg-green-100 text-green-800 p-4 rounded-md mb-6">
        🎉 Congrats, your business is live!
        <div class="mt-4">
          <p>Your live page is available at:</p>
          <a
            href={currentUrl}
            class="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
