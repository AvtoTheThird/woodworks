"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 41.99270248413086,
  lng: 44.11552047729492,
};
function page() {
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
      <Navbar />

      <div className="text-gray-800 z-10 lg:w-4/6 w-5/6 items-center justify-evenly font-mono text-sm lg:flex h-full bg-gray-100 rounded-md ">
        <div className="py-6 flex flex-col justify-center items-center gap-10">
          <div className=" flex justify-left items-center w-[350px] h-24 bg-slate-200 rounded-md text-lg px-5 gap-3">
            <Image
              src="/phone.png" // path to your image in the public directory
              alt="Example Image"
              width={50} // specify the width of the image
              height={50} // specify the height of the image
            />
            <span className="font-contractica-bold"> +995 568 45 54 60</span>
          </div>
          <div className=" flex justify-left items-center w-[350px] h-24 bg-slate-200 rounded-md text-lg px-5 gap-3">
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
          <div className=" flex justify-left items-center w-[350px] h-24 bg-slate-200 rounded-md text-lg px-5 gap-3">
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
              mapContainerStyle={containerStyle}
              center={center}
              zoom={1}
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
