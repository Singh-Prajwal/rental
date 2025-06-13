// src/components/common/Pagination.tsx
import React from 'react';

const Pagination: React.FC = () => {
  // These will be props later: const { currentPage, totalPages, onPageChange } = props;
  const currentPage = 1;
  const totalPages = 5;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center space-x-4">
      <button className="p-2 rounded-full hover:bg-gray-100 disabled:text-gray-300" disabled={currentPage === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`h-10 w-10 rounded-full text-sm font-medium ${
            currentPage === number
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {number}
        </button>
      ))}
      
      <button className="p-2 rounded-full hover:bg-gray-100 disabled:text-gray-300" disabled={currentPage >= totalPages}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;