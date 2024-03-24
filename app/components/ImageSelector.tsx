"use client";
import React, { useState } from "react";

const ImageSelector = () => {
  const [img, setImg] = useState("");

  const images = [
    "https://m.media-amazon.com/images/I/81BZnztxcAL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/81oahklHLYL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/91jCXSyjk6L._AC_SX679_.jpg",
  ];

  const handleMouseOver = (index: number) => {
    console.log(index);
    setImg(images[index]);
  };

  return (
    <div>
      {" "}
      <img
        className="py-4 lg:max-w-[500px] lg:max-h-[500px] sm:max-w-5/6 "
        src={img ? img : images[0]}
        alt=""
      />
      <div className="flex  max-w-screen-md mx-auto">
        {images.map((image, index) => (
          <img
            onMouseOver={() => handleMouseOver(index)}
            className=" lg:w-32 w-16  p-1 lg:p-4"
            key={index}
            src={image}
            alt="product"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
