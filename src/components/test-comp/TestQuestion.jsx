import React, { useState } from 'react';
import { Tooltip } from '@chakra-ui/react';

const TestQuestion = ({ question, options, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{`Question ${questionNumber} of ${totalQuestions}`}</h2>
      <p className="text-lg text-gray-700 mb-6">
        {question}{' '}
        <Tooltip 
          label="Need help? Hover here!" 
          aria-label="Help Tooltip" 
          isOpen={showTooltip}
          placement="right"
        >
          <span
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="text-blue-500 cursor-pointer"
          >
            (i)
          </span>
        </Tooltip>
      </p>
      <ul className="space-y-4">
        {options.map((option, index) => (
          <li key={index}>
            <label
              className={`flex items-center space-x-3 p-3 rounded-lg border transition duration-300 ease-in-out ${
                selectedOption === option
                  ? 'bg-blue-100 border-blue-500'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name={`question-${questionNumber}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestQuestion;
