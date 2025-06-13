// src/components/search/SearchFilterBar.tsx
import React from 'react';

// A small helper component for each input section
const SearchInput = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex-1 flex items-center space-x-2 cursor-pointer p-3 hover:bg-gray-200 rounded-full transition-colors">
    {icon}
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-gray-800">{label}</span>
      <span className="text-xs text-gray-500">Add details</span>
    </div>
  </div>
);

// Icons for the inputs
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const GuestsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);


const SearchFilterBar: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center bg-gray-100 rounded-full shadow-md p-1">
        <SearchInput icon={<SearchIcon />} label="Where to?" />
        <div className="h-8 border-r border-gray-300 mx-1"></div>
        <SearchInput icon={<CalendarIcon />} label="Check in" />
        <div className="h-8 border-r border-gray-300 mx-1"></div>
        <SearchInput icon={<CalendarIcon />} label="Check out" />
        <div className="h-8 border-r border-gray-300 mx-1"></div>
        <SearchInput icon={<GuestsIcon />} label="Guests" />
        <div className="pr-1">
          <button className="bg-brand-primary text-white p-3 rounded-full hover:bg-brand-primary_hover transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;