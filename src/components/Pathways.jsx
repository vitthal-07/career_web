import React from 'react';
import { Link } from 'react-router-dom'; // For routing purposes
import Navbar from './Navbar';

// Relevant images for each career pathway
const pathways = [
  {
    id: 1,
    title: 'Software Engineering',
    description: 'Build and maintain complex software applications.',
    image: '/assets/pathway-img/software-engineering.jpg',
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Analyze, interpret, and use data for informed decision-making.',
    image: '/assets/pathway-img/data-science.jpg',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Design and implement strategies for online product promotion.',
    image: '/assets/pathway-img/digital-marketing.jpg',
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Craft engaging visual content for print and digital media.',
    image: '/assets/pathway-img/graphic-design.jpg',
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Protect systems and networks from cyber attacks and threats.',
    image: '/assets/pathway-img/cyber-security.jpg',
  },
  {
    id: 6,
    title: 'Artificial Intelligence',
    description: 'Develop intelligent systems to solve complex problems.',
    image: '/assets/pathway-img/ai.jpg',
  },
  {
    id: 7,
    title: 'Machine Learning',
    description: 'Tech Machines how to solve problems.',
    image: '/assets/pathway-img/ml.jpg',
  },
  {
    id: 8,
    title: 'Ethical Hacking',
    description: 'Hack Ethically into systms to find vernablity .',
    image: '/assets/pathway-img/ethical-hacking.jpg',
  },
];

const Pathways = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="pt-16 p-4">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
          Explore Career Pathways
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Choose a pathway to learn more about the opportunities it provides, and how it aligns with your strengths and goals.
        </p>

        {/* Grid layout updated for 4 cards in a row and 3 in a column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
          {pathways.map((pathway) => (
            <div
              key={pathway.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img
                src={pathway.image}
                alt={pathway.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {pathway.title}
              </h2>
              <p className="text-gray-600 mb-4">{pathway.description}</p>

              {/* Enhanced button styling */}
              <Link
                to={`/pathways/${pathway.id}`}
                className="inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Add a call to action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to start your journey? Select a pathway and begin your career transformation today.
          </p>
          <Link
            to="/get-started"
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md hover:from-teal-500 hover:to-green-500 transition-all duration-300 ease-in-out"
          >
            Get Started by Giving Test
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Pathways;
