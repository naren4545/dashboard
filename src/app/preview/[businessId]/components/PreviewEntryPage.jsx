"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Adjust import path for images if necessary
import WebsitePreview from './WebsitePreview'
import Websitelive from './WebsiteLive'
import WebsiteNotLive from './WebsiteNotLive'
import AddBroadcast from './AddBroadcast'
const PreviewEntryPage = ({id}) => {
 // Get the ID from the URL
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Wait until the ID is available

    const fetchEntry = async () => {
      try {
       
        const response = await fetch(`http://localhost:5000/api/entries/${id}`); // Adjust the endpoint as necessary
        if (!response.ok) {
          throw new Error('Failed to fetch entry');
        }
        const data = await response.json();
        setEntry(data); // Adjust based on the actual structure of the fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id]);


// useEffect(()=>{
//   if (!id) return;
//   const storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
// console.log(storedData,id)
//           // Find the entry with the given ID
//           const entry = storedData.find((item) => item.id === id);
//           console.log(entry)
//           setEntry(entry)
//           setLoading(false);
// },[id])

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  if (!entry) {
    return <div className="p-4">No data found.</div>;
  }
  const currentUrl = window.location.href + "/website";
  const encodedUrl = encodeURIComponent(currentUrl); // Encodes the URL
  let webImage = `https://shot.screenshotapi.net/screenshot?token=FMZB5HC-FFQ4MGY-NFQGQGP-FJNRC1C&url=${encodedUrl}&width=1300&height=800&output=image&file_type=png&wait_for_event=load`;
   
  console.log(entry)
  
  return (
    <div className="p-4">
{entry.payment?<Websitelive/>:<WebsiteNotLive/>}
      <WebsitePreview bizName={entry.businessInfo?.businessName} entry={entry} payment={entry.payment}/>
      <h1 className="text-3xl font-semibold mb-4">{entry.businessInfo?.businessName}</h1>

      <div className="mb-4">
       
      </div>

      <div className="mb-4">
        <h2 className="text-base font-bold">Contact Details</h2>
        <p>Name: {entry.contactDetails?.name}</p>
        <p>Phone: {entry.contactDetails?.phone}</p>
        <p>Email: {entry.contactDetails?.email}</p>
        <p>WhatsApp: {entry.contactDetails?.whatsapp}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-base font-bold">Location</h2>
        <p>{entry.businessLocation?.placeName}</p>
        <p>Latitude: {entry.businessLocation?.location.latitude}</p>
        <p>Longitude: {entry.businessLocation?.location.longitude}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-base font-bold">Images</h2>
        {entry.pictures && entry.pictures.length > 0 ? (
          entry.pictures.map((picture, index) => (
            <Image key={index} src={picture} alt={`Business Image ${index + 1}`} width={500} height={300} />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-base font-bold">Additional Information</h2>
        <p>Business Timings: </p>
        <p>UPI ID: {entry.upiId || "Not specified"}</p>
      </div>


      <div>
        <AddBroadcast id={entry._id}/>
      </div>
    </div>
  );
};

export default PreviewEntryPage;
