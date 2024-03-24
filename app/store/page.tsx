import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
const store = () => {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar />
      <div className="z-10  lg:w-4/6 w-5/6 items-center justify-between font-mono text-sm lg:flex flex-wrap bg-gray-100 rounded-md">
        <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
    </main>
  );
};

export default store;
