"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="https://www.woodenearth.com/cdn/shop/articles/handmade-wooden-plates_1024x1024.png?v=1676902772"
            alt="Image 1"
            className="w-full h-auto px-2"
          />
        </div>
        <div>
          <img
            src="https://www.woodenearth.com/cdn/shop/articles/handmade-wooden-plates_1024x1024.png?v=1676902772"
            alt="Image 2"
            className="w-full h-auto px-2"
          />
        </div>
        <div>
          <img
            src="https://www.woodenearth.com/cdn/shop/articles/handmade-wooden-plates_1024x1024.png?v=1676902772"
            alt="Image 3"
            className="w-full h-auto px-2"
          />
        </div>
        <div>
          <img
            src="https://www.woodenearth.com/cdn/shop/articles/handmade-wooden-plates_1024x1024.png?v=1676902772"
            alt="Image 4"
            className="w-full h-auto px-2"
          />
        </div>
        <div>
          <img
            src="https://www.woodenearth.com/cdn/shop/articles/handmade-wooden-plates_1024x1024.png?v=1676902772"
            alt="Image 5"
            className="w-full h-auto px-2"
          />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
