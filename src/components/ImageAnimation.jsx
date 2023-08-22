import React, { useState, useEffect } from 'react';

const RotatingCard = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full transform-style-preserve-3d">
        <div
          className="absolute w-full h-full transform transition-transform duration-1000 ease-in-out"
          style={{
            transform: `
              rotateX(${360 - (currentIndex * (360 / imageUrls.length))}deg) 
              translateZ(150px)
            `,
          }}
        >
          <img
            src={imageUrls[currentIndex]}
            alt={`Image ${currentIndex}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;
