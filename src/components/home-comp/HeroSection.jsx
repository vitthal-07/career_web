import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
        Discover Your Ideal Career Path
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Take our personalized assessment to uncover your strengths, interests, and potential career paths.
      </p>

      <button
        className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={() => navigate('/tests')}
      >
        Start Your Assessment Now
      </button>
    </section>
  );
};

export default HeroSection;