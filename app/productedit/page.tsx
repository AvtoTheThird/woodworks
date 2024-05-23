"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ImageSelector from "../components/ImageSelector";
import { database } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { update } from "firebase/database";
import firebase from "firebase/compat/app";
const page = ({
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
  interface Product {
    id: string;
    productName: string;
    material: string;
    price: string;
    description: string;
    availability: number;
    photos: { [image: string]: string };
  }

  const [data, setData] = useState<Product>({
    id: "",
    productName: "",
    material: "",
    price: "",
    description: "",
    availability: 0,
    photos: {},
  });

  useEffect(() => {
    const parsedData: Product = {
      ...searchParams,
    };
    setData(parsedData);
  }, []);

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    await updateFunction(`products/${data.id}`, data);
  };
  const updateFunction = async (path: any, data: any) => {
    try {
      const documentRef = doc(db, path);
      await setDoc(documentRef, data);
      alert("წარმატებით ჩასწროდა");
    } catch (err) {
      console.log(err);
      alert("რაღაცა ნიტოა");
    }
  };
  return (
    <main className="flex  flex-col items-center justify-between ">
      <title>მაღაზია</title>

      <Navbar />
      <form
        onSubmit={handelSubmit}
        className="z-10 lg:w-4/6  w-5/6 flex-row justify-left font-mono text-sm lg:flex  bg-gray-100 rounded-md"
      >
        <ImageSelector photos={searchParams.photos} />
        <div className="lg:p-8 font-contractica-regular max-w-lg ">
          <h2 className="text-gray-800 font-bold text-2xl mb-2 pb-5">
            <input
              type="text"
              defaultValue={searchParams.productName}
              onChange={(e) =>
                setData({ ...data, productName: e.target.value })
              }
            />
          </h2>
          <h2 className="text-gray-800 text-xl mb-2 pb-5">
            მასალა:{" "}
            <input
              type="text"
              defaultValue={searchParams.material}
              onChange={(e) => setData({ ...data, material: e.target.value })}
            />
          </h2>
          <h2 className="text-gray-800 text-lg mb-2 pb-5">
            ფასი:{" "}
            <input
              type="text"
              defaultValue={searchParams.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
          </h2>
          <p className="text-gray-700 text-base pb-5  break-words">
            აღწერა:{" "}
            <input
              type="text"
              defaultValue={searchParams.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
