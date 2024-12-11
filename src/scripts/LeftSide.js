import React from 'react';
import '../styles/LeftSide.css'; // Link to the CSS file for styling

const LeftSide = () => {
  // Arrays containing image file names (with .png extension)
  const leftImages = [
    'a1.png',
    'a2.png',
    'a3.png',
    'a4.png',
  ];

  const rightImages = [
    'a5.png',
    'a6.png',
    'a7.png',
    'a8.png',
  ];

  return (
    <div className="image-roam-container">
      {/* Left Column with images moving from top to bottom */}
      <div className="image-column left-column">
        {[...leftImages, ...leftImages, ...leftImages].map((image, index) => ( // Duplicate 3 times for infinite motion
          <img
            key={index}
            className="image-item"
            src={`/assets/${image}`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>

      {/* Right Column with images moving from bottom to top */}
      <div className="image-column right-column">
        {[...rightImages, ...rightImages, ...rightImages].map((image, index) => ( // Duplicate 3 times for infinite motion
          <img
            key={index}
            className="image-item"
            src={`/assets/${image}`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;