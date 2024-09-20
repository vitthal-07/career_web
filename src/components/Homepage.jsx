import React from 'react';
import Navbar from './Navbar';
import HeroSection from './home-comp/HeroSection';
import FeaturesSection from './home-comp/FeaturesSection';
import AboutSection from './home-comp/AboutSection';
import ResourcesSection from './home-comp/ResourcesSection';
import ContactSection from './home-comp/ContactSection';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-6">
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Career Compass
          </div>
          <Navbar />
        </div>
      </header>

      <main className="flex-1 pt-20 p-4 bg-gray-50">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ResourcesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Homepage;
