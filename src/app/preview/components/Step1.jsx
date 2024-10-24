"use client";

import React, { useState, useEffect } from "react";
import { useFormData } from "./FormContext";

const Step1 = () => {



  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [placeName, setPlaceName] = useState("");
  const [error, setError] = useState("");
  const { formData, updateFormData } = useFormData();

  // Function to get location
useEffect(()=>{
    formData.buisnessLocation.placeName && setPlaceName(formData.buisnessLocation.placeName)
    formData.buisnessLocation.location &&setLocation(location)

},[])



  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        () => {
          setError("Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  // Function to get place name using reverse geocoding
  const getPlaceName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      if (data && data.display_name) {
        setPlaceName(data.display_name);
      } else {
        setError("Unable to find the place name for your location.");
      }
    } catch (error) {
      setError("Error fetching the location name.");
    }
  };

  // Use Effect to call the reverse geocoding API once location is available
  useEffect(() => {
    if (location.latitude && location.longitude) {
      getPlaceName(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Step 1: Confirm Your Business Location</h2>

      <button
        onClick={getLocation}
        className="px-6 mb-4 py-2 bg-orange-500 text-white font-semibold rounded-md"
        >
        Get My Location
      </button>

      {location.latitude && location.longitude && (
        <p className="">
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}

      {placeName && (
        <div className="mt-4">
          <p className="mb-2">Is this your business location?</p>
          <p className="font-bold text-lg">{placeName}</p>
          <button
            onClick={() =>{ 
                
                alert(`Location confirmed: ${placeName}`)
                updateFormData("buisnessLocation",{placeName:placeName, location:location})
                console.log(formData)
            
            }}
            className="px-6 my-4 py-2 bg-orange-500 text-white font-semibold rounded-md"
          >
            Yes, this is my business location
          </button>
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Step1;
