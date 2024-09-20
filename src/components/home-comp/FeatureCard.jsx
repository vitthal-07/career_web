import React from 'react';

const FeatureCard = ({ title, image, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img src={image} alt={title} className="mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
