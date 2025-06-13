import React from 'react';
import { Link } from 'react-router-dom'
const Hero: React.FC = () => {
  const heroImageUrl = "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="relative h-[450px] md:h-[500px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find your perfect stay
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl">
          Explore a curated collection of furnished apartments in prime locations, designed for comfort and convenience.
        </p>

        {/* Search Bar */}
        {/* <form className="mt-8 w-full max-w-xl">
          <div className="flex items-center bg-white rounded-full shadow-lg p-2">
            <div className="pl-3 pr-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-brand-primary text-white font-bold py-3 px-6 rounded-full hover:bg-brand-primary_hover transition-colors"
            >
              Search
            </button>
          </div>
        </form> */}
              <Link to="/stays" className="mt-8 w-full max-w-xl">
      <div className="flex items-center bg-white rounded-full shadow-lg p-2">
        <div className="pl-3 pr-2 text-gray-400">
            {/* ... svg ... */}
        </div>
        <input
          type="text"
          placeholder="Where to?"
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 cursor-pointer"
          readOnly // Make it non-editable, it's just a button now
        />
        <button
          type="button" // Change to button to prevent form submission
          className="bg-brand-primary text-white font-bold py-3 px-6 rounded-full hover:bg-brand-primary_hover transition-colors"
        >
          Search
        </button>
      </div>
    </Link>
      </div>
    </div>
  );
};

export default Hero;