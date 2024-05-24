"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [images, setImages] = React.useState<string[]>([]);

  const fetchImageUrls = async () => {
    const imageUrls = [];
    const listRef = ref(storage, "landing-images/"); // Replace 'images/' with your folder path

    try {
      const res = await listAll(listRef);
      const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
      const urls = await Promise.all(promises);
      imageUrls.push(...urls);

      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  useEffect(() => {
    fetchImageUrls();
  }, []);
  return (
    <div className="w-full overflow-hidden py-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Image" className="w-full h-auto px-2" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
