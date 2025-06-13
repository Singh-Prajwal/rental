// src/components/details/Amenities.tsx
import React from 'react';

// A simple utility to map amenity names to SVG icons
const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wifi': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.807 9.98-3.807 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>,
  'Kitchen': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
  'Washer': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 01-5.84 7.38m-5.84-7.38l5.84 2.56m-5.84-2.56a6 6 0 015.84-7.38m5.84 7.38v-4.82" /></svg>,
  'TV': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>,
  'Free parking on premises': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 003.375-3.375h1.5a1.125 1.125 0 011.125 1.125v-1.5a3.375 3.375 0 00-3.375-3.375H3.375" /></svg>,
  'Air conditioning': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5v15m0 0l-3-3m3 3l3-3M6 10.5h12" /></svg>,
};

interface AmenitiesProps {
  amenities: string[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  if (!amenities || amenities.length === 0) {
    return null; // Don't render anything if there are no amenities
  }

  // Show a limited number of amenities initially
  const visibleAmenities = amenities.slice(0, 6);

  return (
    <div className="py-6 border-b border-gray-200">
      <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
        {visibleAmenities.map(amenity => (
          <div key={amenity} className="flex items-center space-x-3">
            {amenityIcons[amenity] || <div className="h-6 w-6" />}
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
      {amenities.length > 6 && (
        <button className="mt-6 font-semibold text-gray-800 border border-gray-800 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors">
          Show all {amenities.length} amenities
        </button>
      )}
    </div>
  );
};

export default Amenities;