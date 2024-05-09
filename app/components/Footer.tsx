"use client";
import React from "react";
import xoncha from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

console.log("xoncha", xoncha);

function Footer() {
  return (
    <div className="flex justify-between  h-64 w-[99%] border rounded-lg bg-gray-200 px-16 py-8 text-gray-800 ">
      <div className="flex flex-col justify-between items-start font-contractica-medium ">
        <Image
          src="/logo.svg" // path to your image in the public directory
          alt="Example Image"
          width={100} // specify the width of the image
          height={100} // specify the height of the image
        />
        <span> © copyright 2024 all rights reserved</span>
      </div>
      <div className="flex flex-col justify-between items-start px-80 font-contractica-medium ">
        <Link href="/" className="text-xl font-bold">
          სახლი
        </Link>

        <Link href="/store">მაღაზია</Link>

        <Link href="/about">ჩვენს შესახებ</Link>
        <div className="flex gap-3">
          <Image
            src="/fb.svg" // path to your image in the public directory
            alt="Example Image"
            width={30} // specify the width of the image
            height={30} // specify the height of the image
          />
          <Image
            src="/ig.svg" // path to your image in the public directory
            alt="Example Image"
            width={30} // specify the width of the image
            height={30} // specify the height of the image
          />
          <Image
            src="/wp.svg" // path to your image in the public directory
            alt="Example Image"
            width={30} // specify the width of the image
            height={30} // specify the height of the image
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
