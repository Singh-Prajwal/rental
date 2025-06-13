// src/components/FeaturedProperties.tsx
import React from 'react';
import PropertyCard from './PropertyCard';
import { mockFeaturedProperties } from '../services/mockData';
const FeaturedProperties: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockFeaturedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;