import React from 'react';

const AboutSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center my-12 bg-white p-8 rounded-lg shadow-lg">
      <img
        src='assets\feature-img\career-main.png'
        alt="About Career Counseling"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
      />
      <div className="md:ml-8 mt-6 md:mt-0">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Career Compass</h3>
        <p className="text-gray-600">
          Career Compass is a one-stop solution for career guidance and counseling. We help students navigate their career choices through expert advice, personalized assessments, and a vast collection of resources.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
