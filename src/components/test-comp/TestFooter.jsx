import React from 'react';

const TestFooter = ({ currentStep, totalSteps, onPrevious, onNext, onSubmit }) => {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onPrevious}
        className={`px-4 py-2 rounded-lg bg-gray-300 text-gray-700 transition duration-300 ${
          currentStep === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-400'
        }`}
        disabled={currentStep === 1}
      >
        Previous
      </button>

      {currentStep < totalSteps ? (
        <button
          onClick={onNext}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          Next
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-300"
        >
          Submit Test
        </button>
      )}
    </div>
  );
};

export default TestFooter;
