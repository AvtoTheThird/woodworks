import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

function page() {
  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <Navbar />

      <div className="text-gray-800 z-10 lg:w-4/6 w-5/6 items-start justify-evenly font-mono text-sm lg:flex h-full bg-gray-100 rounded-md ">
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
        <div>MAp</div>
      </div>
      <Footer />
    </main>
  );
}

export default page;
// AIzaSyCIN5ridep7sgocPR-hn1P0iDdpmY2iYcI
