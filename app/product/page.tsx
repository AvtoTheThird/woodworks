"use client";
import React from "react";
import Navbar from "../components/Navbar";
import ImageSelector from "../components/ImageSelector";
import Footer from "../components/Footer";
const productDetails = ({
  searchParams,
}: {
  searchParams: {
    id: string;
    productName: string;
    material: string;
    price: string;
    description: string;
    availability: number;
    photos: { [image: string]: string };
  };
}) => {
  // console.log(searchParams.photos);

  return (
    <main className="flex  flex-col items-center justify-between ">
      <title>მაღაზია</title>

      <Navbar />
      <div className="z-10 lg:w-4/6  w-5/6 flex-row justify-left font-mono text-sm lg:flex  bg-gray-100 rounded-md">
        <ImageSelector photos={searchParams.photos} />
        <div className="lg:p-8 font-contractica-regular max-w-lg ">
          <h2 className="text-gray-800 font-bold text-2xl mb-2 pb-5">
            {searchParams.productName}
          </h2>
          <h2 className="text-gray-800 text-xl mb-2 pb-5">
            მასალა: {searchParams.material}
          </h2>
          <h2 className="text-gray-800 text-lg mb-2 pb-5">
            ფასი: {searchParams.price}₾
          </h2>
          <p className="text-gray-700 text-base pb-5  break-words">
            აღწერა: {searchParams.description}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default productDetails;
