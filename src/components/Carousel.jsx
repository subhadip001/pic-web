import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let newStyle = style?style:{};
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="carousel overflow-hidden"  style={newStyle}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel Image ${index + 1}`}
          className={`carousel-image object-cover ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
