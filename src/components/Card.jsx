// src/Card.jsx
import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="mb-4 w-32 h-32 object-cover rounded-full"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
