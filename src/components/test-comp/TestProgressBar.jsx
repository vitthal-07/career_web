import React from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const TestProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index < currentStep ? (
            <FaCheckCircle className="text-blue-600 text-2xl" />
          ) : (
            <FaCircle className="text-gray-300 text-2xl" />
          )}
          {index < totalSteps - 1 && (
            <div
              className={`h-1 w-12 rounded-full transition-all duration-300 ${
                index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TestProgressBar;
