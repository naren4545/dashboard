import React from "react";
import Image1 from "../../assests/Business3.png";
import Image2 from "../../assests/Business4.png";
import Image3 from"../../assests/Business5.png";
import Image4 from "../../assests/Business6.png";
interface GallerySection {
  images: string[],
}
export default function GallerySection({images}:GallerySection) {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px]  mx-auto ">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center">
          <div>
            <img className="lg:mt-16 md:mt-0" src={images[1]} />
          </div>
          <div>
            <img  src={images[0]} />
          </div>
          <div>
            <img className="lg:mt-16 md:mt-0" src={images[2]} />
          </div>
          <div>
            <img  src={images[3]} />
          </div>
        </div>
       
      </div>
    </section>
  );
}
