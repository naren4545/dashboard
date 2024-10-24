import React, { useState } from "react";
import rightArrow from '../../assests/rightAroow.svg'
import Image from "next/image";
const Step5 = () => {
  const [businessHours, setBusinessHours] = useState({
    monday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",  // Lunch start
      lunchEndTime: "02:00 PM",    // Lunch end
      status: "Open",
    },
    tuesday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",
      lunchEndTime: "02:00 PM",
      status: "Open",
    },
    wednesday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",
      lunchEndTime: "02:00 PM",
      status: "Open",
    },
    thursday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",
      lunchEndTime: "02:00 PM",
      status: "Open",
    },
    friday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",
      lunchEndTime: "02:00 PM",
      status: "Open",
    },
    saturday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",
      lunchEndTime: "02:00 PM",
      status: "Open",
    },
    sunday: {
      isOpen: true,
      openingTime: "09:30 AM",
      closingTime: "08:00 PM",
      lunchStartTime: "01:00 PM",
      lunchEndTime: "02:00 PM",
      status: "Open",
    },
  });
  
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const [selectedDay, setSelectedDay] = useState("monday");
  const [openingTime, setOpeningTime] = useState(businessHours.monday.openingTime);
  const [closingTime, setClosingTime] = useState(businessHours.monday.closingTime);
  const [lunchStartTime, setlunchStartTime] = useState(businessHours.monday.lunchStartTime);
  const [lunchEndTime, setlunchEndTime] = useState(businessHours.monday.lunchEndTime);

  const [showStatusOptions, setShowStatusOptions] = useState(false); // To toggle open/close/holiday options

  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const handleStatusChange = (day, status) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        status: status,
        isOpen: status === "Open",
      },
    }));
    setShowStatusOptions(false); // Hide the options once selected
  };

  const handleAddTime = () => {
    // Validate the time fields
    if (openingTime === "" || closingTime === "") {
      alert("Please enter both opening and closing times.");
      return;
    }

    // Update the business hours for the current selected day
    setBusinessHours((prev) => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        openingTime: convertTo12HourFormat(openingTime),
        closingTime: convertTo12HourFormat(closingTime),
      },
    }));

    // Switch to the next day if available
    const nextDayIndex = daysOfWeek.indexOf(selectedDay) + 1;
    if (nextDayIndex < daysOfWeek.length) {
      const nextDay = daysOfWeek[nextDayIndex];
      setSelectedDay(nextDay);
      setOpeningTime(businessHours[nextDay].openingTime);
      setClosingTime(businessHours[nextDay].closingTime);
    } else {
      alert("You have set times for all days!");
    }
  };




  const handleAddlunchTime = () => {
    // Validate the time fields
    if (lunchStartTime === "" || lunchEndTime === "") {
      alert("Please enter both opening and closing times.");
      return;
    }

    // Update the business hours for the current selected day
    setBusinessHours((prev) => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        lunchStartTime: convertTo12HourFormat(lunchStartTime),
        lunchEndTime: convertTo12HourFormat(lunchEndTime),
      },
    }));

    // Switch to the next day if available
    const nextDayIndex = daysOfWeek.indexOf(selectedDay) + 1;
    if (nextDayIndex < daysOfWeek.length) {
      const nextDay = daysOfWeek[nextDayIndex];
      setSelectedDay(nextDay);
      setOpeningTime(businessHours[nextDay].openingTime);
      setClosingTime(businessHours[nextDay].closingTime);
    } else {
      alert("You have set times for all days!");
    }
  };

  return (
    <div className=" bg-white  rounded-lg">
      <h2 className="text-xl font-normal mb-4">Set or update your business hours to let customers know when you're available. </h2>
      <div className="text-xl">
      {/* Hidden checkbox input */}
      <input
        type="checkbox"
        id="agree"
        className="hidden"
        checked={checked}
        onChange={handleCheckboxChange}
      />

      {/* Custom styled label */}
      <label
        htmlFor="agree"
        className="flex items-center cursor-pointer text-orange-500 text-xl"
      >
        {/* Custom checkbox styling */}
        <span
          className={`w-5 h-5  border border-orange-500 rounded-sm flex items-center justify-center mr-2 ${
            checked ? "bg-orange-500" : ""
          }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
        Select this option if your business is closed on all public holidays.
      </label>
    </div>
      {/* Days Tabs */}
      <div className="flex space-x-4 mb-6 w-full overflow-x-auto">
        {daysOfWeek.map((day, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDay(day);
              setOpeningTime(businessHours[day].openingTime);
              setClosingTime(businessHours[day].closingTime);
            }}
            className={`py-2 text-2xl  px-4 border-b-2 ${
              selectedDay === day ? "border-black text-black font-semibold" : "border-transparent text-[#B6B6B6] font-medium"
            }`}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>
<div className="flex gap-3 flex-col justify-center md:flex-row">
      {/* Business Hours Section */}
      <div className="mb-6 p-4 border-[#D9D9D9] border w-full rounded-[20px] max-w-[627px]">
        <div className="flex items-center justify-between mb-4">
          <div className={`text-lg ${businessHours[selectedDay].isOpen ? "text-green-500" : "text-red-500"}`}>
            {businessHours[selectedDay].status}
          </div>
          <div className="relative">
            {/* Arrow Button */}
            <button onClick={() => setShowStatusOptions((prev) => !prev)} className="text-2xl text-gray-600">
           <Image src={rightArrow}/>
            </button>
            {showStatusOptions && (
              <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg">
                <button
                  onClick={() => handleStatusChange(selectedDay, "Open")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  Open
                </button>
                <button
                  onClick={() => handleStatusChange(selectedDay, "Close")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  Close
                </button>
                <button
                  onClick={() => handleStatusChange(selectedDay, "Holiday")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  Holiday
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Opening and Closing Times */}
        {businessHours[selectedDay].status === "Open" && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Opening Time</label>
              <input
                type="time"
                value={convertTo24HourFormat(openingTime)}
                onChange={(e) => setOpeningTime(e.target.value)} // No need to update state immediately
                className="border rounded p-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Closing Time</label>
              <input
                type="time"
                value={convertTo24HourFormat(closingTime)}
                onChange={(e) => setClosingTime(e.target.value)} // No need to update state immediately
                className="border rounded p-2 w-full"
              />
            </div>
          </div>
        )}



<div className="flex items-center mt-4">
        <button onClick={handleAddTime} className="text-sm text-orange-500">
          Add Time +
        </button>
      </div>
      </div>
{businessHours[selectedDay].isOpen && (<div className="mb-6 p-4 border-[#D9D9D9] border rounded-[20px] max-w-[300px] w-full">
        <div className="flex items-center justify-between mb-4">
          <div className={`text-lg `}>
          Lunch Break
          </div>
          <div className="relative">
            {/* Arrow Button */}
            
          </div>
        </div>

        {/* Opening and Closing Times */}
        {businessHours[selectedDay].status === "Open" && (
          <div className="grid grid-cols-1 gap-4">
            <div>
            
              <input
                type="time"
                value={convertTo24HourFormat(lunchStartTime)}
                onChange={(e) => setlunchStartTime(e.target.value)} // No need to update state immediately
                className="border rounded p-2 w-full"
              />
            </div>
            <p className="block text-sm mb-1 italic">to</p>
            <div>
              
              <input
                type="time"
                value={convertTo24HourFormat(lunchEndTime)}
                onChange={(e) => setlunchEndTime(e.target.value)} // No need to update state immediately
                className="border rounded p-2 w-full"
              />
            </div>
          </div>
        )}



<div className="flex items-center mt-4">
        <button onClick={handleAddlunchTime} className="text-sm text-orange-500">
          Add Time +
        </button>
      </div>
      </div>)}
      
      </div>
      {/* Add Time Button */}
      
    </div>
  );
};

// Helper functions to handle 12-hour and 24-hour conversions
const convertTo24HourFormat = (time12h) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  // Ensure hours is treated as a string
  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  }

  // Convert back to string and pad with zeros if necessary
  return `${String(hours).padStart(2, "0")}:${minutes}`;
};

const convertTo12HourFormat = (time24h) => {
  let [hours, minutes] = time24h.split(":");
  const modifier = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert '00' to '12'

  return `${hours}:${minutes} ${modifier}`;
};

export default Step5;
