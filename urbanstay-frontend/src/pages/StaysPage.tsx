// src/pages/StaysPage.tsx
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { mockAllStays } from '../services/mockData';
import Pagination from '../components/common/Pagination';
import SearchFilterBar from '../components/search/SearchFilterBar'; // Import
import FilterChips from '../components/search/FilterChips';     // Import

const StaysPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="py-8">
        <SearchFilterBar />
      </div>

      {/* Filter Chips */}
      <div className="pb-8 border-b border-gray-200">
        <FilterChips />
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pt-12">
        {mockAllStays.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="mt-16 flex justify-center">
        <Pagination />
      </div> */}
    </div>
  );
};

export default StaysPage;