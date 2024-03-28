"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface photos {
  [image: string]: string;
}
const ImageSelector = (props: { photos: { [key: string]: string } }) => {
  const [img, setImg] = useState("");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const imageValues = Object.values(props.photos);
    setImages(imageValues);
  }, []);

  // console.log(images);

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
