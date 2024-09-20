import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Personalized Career Tests"
          image='/assets/feature-img/career-test.png'
          description="Discover your strengths and interests with our personalized career assessments."
        />
        <FeatureCard
          title="Expert Mentorship"
          image='/assets/feature-img/mentorship.png'
          description="Get guidance from industry experts to make informed career decisions."
        />
        <FeatureCard
          title="Career Resources"
          image='/assets/feature-img/career-resource.png'
          description="Access a wealth of resources to support your career journey."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
