"use client";
import React from "react";

import Navbar from "../components/Navbar";
import ImageSelector from "../components/ImageSelector";
const productDetails = ({
  searchParams,
}: {
  searchParams: { saxeli: string; id: string };
}) => {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar />
      <div className="z-10 lg:w-4/6  w-5/6 flex-row justify-left font-mono text-sm lg:flex  bg-gray-100 rounded-md">
        <ImageSelector />
        <div className="lg:p-8 font-contractica-regular max-w-lg ">
          <h2 className="text-gray-800 font-bold text-2xl mb-2 pb-5">
            ხის თეფშების ნაკრები
          </h2>
          <h2 className="text-gray-800 text-xl mb-2 pb-5">მასალა: კაკალი</h2>
          <h2 className="text-gray-800 text-lg mb-2 pb-5">ფასი: 50 ლარი</h2>
          <p className="text-gray-700 text-base pb-5  break-words">
            აღწერა: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
          </p>
        </div>
      </div>
    </main>
  );
};

export default productDetails;
