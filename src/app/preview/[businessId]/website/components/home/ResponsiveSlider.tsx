"use client";
import { useState, useRef } from "react";
import Slider from "react-slick";// Import react-slick
import CardCustom3 from "../ui/CardCustom3";

import Image from "next/image";
import CardCustom2 from "../ui/Cardcustom2";
import CardCustom from "../ui/CardCustom";
import chunkArray from "../../util/arrayBrodcast";

interface Broadcast {
  title: string;
  date: string;
  content: string;
  image: string;
}

interface CustomSliderProps {
  broadcasts: Broadcast[];
  bizName:string // Accept an array of Broadcasts
}

const CustomSlider: React.FC<CustomSliderProps> = ({ broadcasts,bizName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0); // Track which pagination group we are on
  const paginationGroupSize = 3; // Show 3 buttons at a time

  const b = chunkArray(broadcasts, 3); // Chunk broadcasts into groups of 3

  const sliderRef = useRef<any>(null);

  const sliderSettings = {
    dots: false, // Enable pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Pagination logic
  const goToPrevPagination = () => {
    if (paginationIndex > 0) {
      setPaginationIndex(paginationIndex - 1);
    }
  };

  const goToNextPagination = () => {
    if (paginationIndex < Math.ceil(b.length / paginationGroupSize) - 1) {
      setPaginationIndex(paginationIndex + 1);
    }
  };

  return (
    <div className="relative p-4 mx-auto">

<div className="mb-7">
  
   <h2 className="font-m text-[40px] leading-[50px] font-bold text-center">Latest broadcast from {bizName}</h2>
  <p className="text-center">Engage with your customers by scheduling special announcements or promotions.</p>
   </div>
      
     {broadcasts && broadcasts.length? (<div className="overflow-hidden rounded-lg relative">
        <Slider {...sliderSettings} ref={sliderRef}>
          {b.map((brodcast, index) => (
            <div key={index} className="flex items-center">
              <div>
                {brodcast.map((broadcast, idx) => {
                  let brodcastType = 1;
                  if (broadcast.image && !broadcast.content) {
                    brodcastType = 2;
                  }
                  if (!broadcast.image) {
                    brodcastType = 3;
                  }
                  return (
                    <div
                      key={idx}
                      className="transition-transform duration-300 ease-in-out"
                    >
                      {brodcastType === 3 && (
                        <CardCustom3
                          title={broadcast.title}
                          date={broadcast.date}
                          content={broadcast.content}
                        />
                      )}
                      {brodcastType === 2 && <CardCustom2 brodcast={broadcast} />}
                      {brodcastType === 1 && <CardCustom brodcast={broadcast} />}
                    </div>
                  );
                })}
              </div>

            
            

             
            </div>
          ))}
        </Slider>

        <div className="text-center mt-5 pb-3">
                <button onClick={goToPrevPagination}>
                <svg width="6" className="mr-3" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02542 6.14367L5.87543 1.15945C5.91536 1.11928 5.94693 1.07159 5.96831 1.01914C5.98969 0.966697 6.00046 0.91053 5.99999 0.853894C5.99952 0.797258 5.98782 0.741278 5.96557 0.689193C5.94332 0.637108 5.91096 0.589952 5.87037 0.550455C5.82978 0.510957 5.78176 0.479901 5.72908 0.459086C5.67641 0.43827 5.62013 0.428107 5.5635 0.429185C5.50687 0.430263 5.45102 0.442561 5.39918 0.465367C5.34734 0.488172 5.30053 0.521033 5.26147 0.562047L0.12133 5.84497C0.04353 5.92493 0 6.0321 0 6.14367C0 6.25524 0.04353 6.3624 0.12133 6.44237L5.26147 11.7253C5.30053 11.7663 5.34734 11.7992 5.39918 11.822C5.45102 11.8448 5.50687 11.8571 5.5635 11.8582C5.62013 11.8592 5.67641 11.8491 5.72908 11.8283C5.78176 11.8074 5.82978 11.7764 5.87037 11.7369C5.91096 11.6974 5.94332 11.6502 5.96557 11.5981C5.98782 11.5461 5.99952 11.4901 5.99999 11.4334C6.00046 11.3768 5.98969 11.3206 5.96831 11.2682C5.94693 11.2157 5.91536 11.1681 5.87543 11.1279L1.02542 6.14367Z" fill="black"/>
</svg>

                </button>

              
                {b
                  .slice(
                    paginationIndex * paginationGroupSize,
                    paginationIndex * paginationGroupSize + paginationGroupSize
                  )
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        goToSlide(
                          paginationIndex * paginationGroupSize + index
                        )
                      }
                      className={`mx-1 w-8 h-8 rounded-[6px] ${
                        currentIndex === paginationIndex * paginationGroupSize + index
                          ? "bg-[#E78B01] text-white"
                          : "shadow-[1px_1px_6px_0px_rgba(0,0,0,0.25)]"
                      }`}
                    >
                      {paginationIndex * paginationGroupSize + index + 1}
                    </button>
                  ))}

                <button onClick={goToNextPagination}>
          
<svg className="ml-3" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.97458 5.71455L0.124569 10.6988C0.0846386 10.7389 0.0530701 10.7866 0.0316901 10.8391C0.0103106 10.8915 -0.000455856 10.9477 1.43051e-05 11.0043C0.000484943 11.061 0.0121827 11.1169 0.034431 11.169C0.0566792 11.2211 0.0890355 11.2683 0.129628 11.3078C0.170221 11.3473 0.218244 11.3783 0.270917 11.3991C0.323591 11.4199 0.379871 11.4301 0.436499 11.429C0.493126 11.428 0.548978 11.4157 0.600821 11.3928C0.652665 11.37 0.69947 11.3372 0.73853 11.2962L5.87867 6.01325C5.95647 5.93328 6 5.82612 6 5.71455C6 5.60298 5.95647 5.49581 5.87867 5.41585L0.73853 0.132925C0.69947 0.0919104 0.652665 0.0590506 0.600821 0.0362453C0.548978 0.0134392 0.493126 0.00114155 0.436499 6.38962e-05C0.379871 -0.00101471 0.323591 0.0091486 0.270917 0.0299635C0.218244 0.0507793 0.170221 0.0818348 0.129628 0.121332C0.0890355 0.16083 0.0566792 0.207986 0.034431 0.260072C0.0121827 0.312157 0.000484943 0.368136 1.43051e-05 0.424772C-0.000455856 0.481408 0.0103106 0.537576 0.0316901 0.590023C0.0530701 0.64247 0.0846386 0.690158 0.124569 0.730324L4.97458 5.71455Z" fill="black"/>
</svg>
                </button>


                
              </div>
      </div>):(<div className="p-4 shadow-lg max-w-72 mx-auto">
        
         <p className="text-center">No broadcast yet </p>
         <p className="text-center">Coming soon...  <svg
              width="24"
              className="ml-2 inline"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6ZM12 0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0481 1.5165 19.371 2.40042 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C5.364 24 0 18.6 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM12.6 6V12.3L18 15.504L17.1 16.98L10.8 13.2V6H12.6Z"
                fill="#E78B01"
              />
            </svg></p>
         
         </div>)}
    </div>
  );
};

export default CustomSlider;
