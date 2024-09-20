import React from 'react';
import FeatureCard from './FeatureCard';

const ResourcesSection = () => {
  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Our Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Articles"
          image="assets\feature-img\articles.png"
          description="Read in-depth articles and career guides written by professionals."
        />
        <FeatureCard
          title="Videos"
          image="assets\feature-img\videos.png"
          description="Watch expert-led video tutorials and insights on career building."
        />
        <FeatureCard
          title="Tools"
          image="assets\feature-img\tools.png"
          description="Use our curated tools to analyze and track your career progress."
        />
      </div>
    </section>
  );
};

export default ResourcesSection;

