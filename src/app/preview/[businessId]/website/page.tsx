import Image from "next/image";

import HomePG from "./components/home/Home";
export default async function Home({ params }: { params: { businessId: string } }) {

  const { businessId } = params;
  console.log("Fetched Data for ID:", businessId);
  const res = await fetch(`http://localhost:5000/api/entries/${businessId}`, { cache: "no-store" });
  const data1 = await res.json();
 
  return (
    <HomePG data1={data1}/>
  );
}
