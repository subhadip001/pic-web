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
    <div className="relative w-64 h-96">
      <div className="absolute w-full h-full transform-style-preserve-3d">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? 'rotateX(0)' : 'rotateX(180deg)'
            }`}
            style={{
              transform: `rotateX(${(index - currentIndex) * 360 / imageUrls.length}deg) translateZ(150px)`,
            }}
          >
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};  
export default RotatingCard;