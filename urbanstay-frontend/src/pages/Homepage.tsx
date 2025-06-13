// src/pages/HomePage.tsx
import React from 'react';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import Hero from '../components/Hero';
const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero section will go here next */}
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />

      {/* "Why Choose Us" section will go here */}
    </>
  );
};

export default HomePage;