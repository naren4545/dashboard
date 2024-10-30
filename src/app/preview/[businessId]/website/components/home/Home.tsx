import { GetServerSideProps } from "next";
import Header from "./Header";
import SectionOne from "./sectionOne";
import MapUI from "./MapUI";
import GallerySection from "./GalerySec";
import BuisnessCard from "./BuisnessCard";
import ResponsiveSlider from "./ResponsiveSlider";
import Footer from "./Footer";
import promoImg from "../../assests/bizImg.png";
import Image1 from "../../assests/Business3.png";
import Image2 from "../../assests/Business4.png";
import Image3 from "../../assests/Business5.png";
import Image4 from "../../assests/Business6.png";
import Bcard from "../../assests/bizCard.png";
import map from "../../assests/map.png";

export default function HomePG({ data1 }: { data1: any }) {
  console.log("hello", data1);
  // Replace with your actual data object
  const data = {
    headerContent: {
      headerBizContent: "India>Goa>bardez>mapusa>biz_category>biz_name",
      onClick: "+91 123 456 7890",
    },

    heroSectionData: {
      promoImg: promoImg.src,
      businessName: "Business Name",
      Biz_Categor: "Biz_Category",
      Biz_Subcategory: "Biz_Subcategory",
      businessInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: [
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
        "tag6",
        "tag7",
        "tag8",
        "tag9",
        "tag10",
      ],
    },
    ContactDetails: {
      weekdays: "Monday - Friday",
      timing: "9:00 am - 7:00 pm",
      isOpen: false,
      contact: {
        phone: "+91 123 456 7890",
        email: "demo@gmail.com",
        website: "www.website.com",
      },
    },
    MapUIsrc: map.src,
    GallerySectionImges: [Image1.src, Image2.src, Image3.src, Image4.src],
    BuisnessCard: {
      digitalBuisnessCard: Bcard.src,
      onclick: "url",
    },
    brodcast1: {
      heading:
        "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
      time: "Sep 27, 2024 09:42 AM IST",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation",
      imgURL: "",
    },

    brodcast2: {
      heading:
        "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
      time: "Sep 27, 2024 09:42 AM IST",
      imgURL: "",
    },
    broadcast3: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: promoImg.src,
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: promoImg.src,
      },

      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content: "",
        image: promoImg.src,
      },
      {
        title: "Third Slide Example Title",
        date: "Sep 29, 2024 09:42 AM IST",
        content:
          "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: promoImg.src,
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: "",
      },

      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content: "",
        image: "",
      },
      {
        title: "Third Slide Example Title",
        date: "Sep 29, 2024 09:42 AM IST",
        content:
          "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "",
      },
      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content: "",
        image: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: "",
      },

      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content: "",
        image: "",
      },
      {
        title: "Third Slide Example Title",
        date: "Sep 29, 2024 09:42 AM IST",
        content:
          "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: "",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image: "",
      },

      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content: "",
        image: "",
      },
      {
        title: "Third Slide Example Title",
        date: "Sep 29, 2024 09:42 AM IST",
        content:
          "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "",
      },
      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content: "",
        image: "",
      },
    ],
    broad: [],
  };

  const heroSectionData = {
    promoImg: promoImg.src,
    businessName: data1.businessInfo.businessName,
    Biz_Categor: data1.businessDetails.businessCategory,
    Biz_Subcategory:data1.businessDetails.businessSubCategory,
    businessInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: data1.businessDetails.tags,
  };



const ContactDetails= {
  weekdays: "Monday - Friday",
  timing: "9:00 am - 7:00 pm",
  isOpen: false,
  contact: {
    phone: data1.contactDetails.phone,
    email: data1.contactDetails.email,
    website: "www.website.com",
  },
  address:data1.businessLocation.placeName
}

  return (
    <div>
      <Header
        headerContent={data.headerContent.headerBizContent}
        onClick={data1.contactDetails.phone}
      />
      <SectionOne
        heroSection={heroSectionData}
        contactDetail={ContactDetails}
      />
      <MapUI latitude={15.5910149} longitude={73.8183011 }/>
      <GallerySection images={data.GallerySectionImges} />
      <BuisnessCard
        digitalBuisnessCard={data.BuisnessCard.digitalBuisnessCard}
        onClick={data.BuisnessCard.onclick}
      />
      <ResponsiveSlider
        broadcasts={data1.broadcast}
        bizName={ data1.businessInfo.businessName}
      />
      <Footer biz_name={data.heroSectionData.businessName} />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Extract `id` and verify it exists
//   const id = context.params?.id;
//   if (!id) {
//     return { notFound: true };
//   }
// console.log("hiiiiiiiiiiiiiiiii")
//   // Format URL with extracted `id`
//   const url = `http://localhost:5000/api/entries/${id}`;
//   console.log(`Fetching data from: ${url}`);

//   try {
//     const res = await fetch(url);
//     const data1 = await res.json();

//     return {
//       props: { data1 }, // Pass data as props to the component
//     };
//   } catch (error) {
//     console.error("Data fetching error:", error);
//     return { notFound: true };
//   }
// };
