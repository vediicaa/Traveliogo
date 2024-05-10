import React from 'react';

const CircleRow = ({ images }) => {
  return (
    <div className="flex">
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-full bg-blue-300 w-12 h-12 m-2 flex items-center justify-center"
        >
          <img
            src={image}
            alt={`Image ${index}`}
            className="w-10/12 h-10/12 object-contain rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default CircleRow;
