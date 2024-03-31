"use client";

import React, { useEffect, useState } from "react";
import burgerImg from "/public/burger.jpg";
import curryImg from "/public/curry.jpg";
import pizzaImg from "/public/pizza.jpg";
import Image from "next/image";
import dumplingsImg from "/public/dumplings.jpg";
import macncheeseImg from "/public/macncheese.jpg";
import schnitzelImg from "/public/schnitzel.jpg";
import tomatoImg from "/public/tomato-salad.jpg";

const ImageSlide = () => {
  const images = [
    { image: burgerImg, alt: "burger" },
    { image: curryImg, alt: "curry" },
    { image: pizzaImg, alt: "pizza" },
    { image: dumplingsImg, alt: "dumplings" },
    { image: macncheeseImg, alt: "mac n cheese" },
    { image: schnitzelImg, alt: "schnitzel" },
    { image: tomatoImg, alt: "tomato-salad" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      {images.map((image, index) => (
        <Image
          src={image.image}
          alt={image.alt}
          height={512}
          width={512}
          className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 scale-110 -translate-x-4 transition-all duration-500 ease-in-out ${
            index === currentImageIndex
              ? "z-10 opacity-100 scale-100 translate-x-0 rotate-0"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlide;
