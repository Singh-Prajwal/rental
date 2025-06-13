// src/components/WhyChooseUs.tsx
import React from 'react';

// You can create a separate file for these SVGs if you prefer
const FullyFurnishedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75zM9 15h6.375a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75z" />
  </svg>
);

const PrimeLocationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const FlexibleStaysIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

const features = [
  {
    icon: <FullyFurnishedIcon />,
    title: 'Fully Furnished',
    description: 'Move-in ready apartments with stylish furnishings and modern amenities.',
  },
  {
    icon: <PrimeLocationsIcon />,
    title: 'Prime Locations',
    description: 'Choose from a variety of locations in the city’s most desirable neighborhoods.',
  },
  {
    icon: <FlexibleStaysIcon />,
    title: 'Flexible Stays',
    description: 'Enjoy flexible lease terms, from short-term to long-term stays.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose UrbanStay?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Your Home Away From Home
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 border border-gray-200/80 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-orange-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;