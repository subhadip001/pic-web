// src/components/Slide.js
import React from 'react';

function Slide({ imageUrl, isActive }) {
  return (
    <div
      className={`slide absolute w-full h-full transform transition-transform duration-500 ease-in-out ${
        isActive ? 'scale-100' : 'scale-0'
      }`}
    >
      <img src={imageUrl} alt="Slide" className="w-full h-full object-cover" />
    </div>
  );
}

export default Slide;
