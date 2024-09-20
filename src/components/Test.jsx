import React, { useState } from 'react';
import TestHeader from './test-comp/TestHeader';
import TestQuestion from './test-comp/TestQuestion';
import TestProgressBar from './test-comp/TestProgressBar';
import TestFooter from './test-comp/TestFooter';

const Test = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const questions = [
    {
      question: "Which activity excites you the most?",
      options: ["Coding", "Public Speaking", "Designing", "Writing"],
    },
    {
      question: "What is your ideal work environment?",
      options: ["Quiet and structured", "Fast-paced and dynamic", "Creative and relaxed", "Collaborative and supportive"],
    },
    {
      question: "Which skill do you want to improve?",
      options: ["Problem-solving", "Leadership", "Creativity", "Communication"],
    },
    {
      question: "How do you approach challenges?",
      options: ["Strategically", "With creativity", "By seeking help", "Head-on"],
    },
    {
      question: "Which motivates you the most?",
      options: ["Achievement", "Recognition", "Creativity", "Helping others"],
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    alert("Test Submitted!");
    // Handle submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <TestHeader />
      <TestProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <TestQuestion
        question={questions[currentStep - 1].question}
        options={questions[currentStep - 1].options}
        questionNumber={currentStep}
        totalQuestions={totalSteps}
      />
      <TestFooter
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default Test;
