"use-client";
import React from "react";
import Link from "next/link";

const GoToStoreButton = () => {
  return (
    <Link
      href="/store"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      მაღაზია
    </Link>
  );
};

export default GoToStoreButton;
