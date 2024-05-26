"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};
const containerStyleSmall = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 41.99270248413086,
  lng: 44.11552047729492,
};
function page() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Check if window object exists (ensures code runs only in client-side)
    if (typeof window !== "undefined") {
      // Accessing window object is safe here
      setViewportWidth(window.innerWidth);

      // Add event listener for window resize
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCIN5ridep7sgocPR-hn1P0iDdpmY2iYcI",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <title>კონტაქტი</title>
      <meta name="description" content="ხონჩას საკონტაქტო ინფორმაცია" />
      <meta
        name="keywords"
        content="ხონჩას საკონტაქტო ინფორმაცია, ხელნაკეთი, ხის ხელნაკეთი, ხის ხელნაკეთი ნივთები, საჩუქარი, სასაჩუქრე, ხონჩა, xoncha, handmade, ხონჩა საჩუქარი, ხონჩა სასაჩუქრე, ჩარხი, საჩარხი დაზგა, გამოჩარხული ნივთები"
      />
      <meta name="author" content="Your Name" />
      <Navbar />

      <div className="text-gray-800 z-10 lg:w-4/6 w-5/6 items-center h-auto justify-evenly font-mono text-sm lg:flex lg:h-full bg-gray-100 rounded-md ">
        <div className="py-6 flex flex-col justify-center items-center gap-10">
          <div className=" flex lg:flex-row flex-col justify-left items-center lg:w-[350px] w-[300px] h-24 bg-slate-200 rounded-md text-lg px-5 gap-3">
            <Image
              src="/phone.png" // path to your image in the public directory
              alt="Example Image"
              width={50} // specify the width of the image
              height={50} // specify the height of the image
            />
            <span className="font-contractica-bold"> +995 568 45 54 60</span>
          </div>
          <div className=" flex lg:flex-row flex-col justify-left items-center lg:w-[350px] w-[300px] h-24 bg-slate-200 rounded-md text-lg px-5 gap-3">
            <Image
              src="/gmail.png" // path to your image in the public directory
              alt="Example Image"
              width={50} // specify the width of the image
              height={50} // specify the height of the image
            />
            <span className="font-contractica-bold">
              xoncha.business@gmail.com
            </span>
          </div>
          <div className=" flex lg:flex-row flex-col justify-left items-center lg:w-[350px] w-[300px] h-24 bg-slate-200 rounded-md text-lg px-5 gap-3">
            <Image
              src="/location.png" // path to your image in the public directory
              alt="Example Image"
              width={50} // specify the width of the image
              height={50} // specify the height of the image
            />
            <span className="font-contractica-bold">
              gori, gogebashvili street
            </span>
          </div>
        </div>
        <div className=" p-6">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={
                viewportWidth > 768 ? containerStyle : containerStyleSmall
              }
              center={center}
              zoom={0}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default page;
// AIzaSyCIN5ridep7sgocPR-hn1P0iDdpmY2iYcI
