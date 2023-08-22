// src/components/Carousel.js
import React, { useState, useEffect } from "react";
import Slide from "./Slide";

function FlippingSlider({ images, style, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let newStyle = style ? style : {};

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      // Cleanup on unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={newStyle} className="carousel bg-gray-200 relative">
      {images.map((image, index) => (
        <Slide key={index} imageUrl={image} isActive={index === currentIndex} />
      ))}
    </div>
  );
}

export default FlippingSlider;
