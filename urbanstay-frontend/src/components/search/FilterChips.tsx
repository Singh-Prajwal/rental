// src/components/search/FilterChips.tsx
import React, { useState } from 'react';

const filters = ['Amazing views', 'Amazing pools', 'Luxe', 'Castles', 'Lakefront', 'Cabins'];

const FilterChips: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Amazing views');

  return (
    <div className="flex space-x-3 overflow-x-auto py-2 -mx-4 px-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border
            ${
              activeFilter === filter
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;