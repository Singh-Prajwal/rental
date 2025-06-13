// src/components/trips/LocalGuide.tsx
import React from 'react';
import type { Property } from '../../types/Property';

const LocalGuide: React.FC<{ property: Property }> = ({ property }) => {
  // This data would be specific to the property's location
  const recommendations = {
    restaurants: [
      { name: 'La Torta Gorda', note: 'Best tortas in the Mission.' },
      { name: 'Tartine Manufactory', note: 'Incredible pastries and bread.' }
    ],
    coffee: [
      { name: 'Four Barrel Coffee', note: 'A local favorite for serious coffee lovers.' }
    ],
    activities: [
      { name: 'Dolores Park', note: 'Perfect for people-watching on a sunny day.' },
      { name: 'Clarion Alley Murals', note: 'A vibrant alley full of street art.' }
    ]
  };

  return (
    <div className="space-y-8">
      <div>
        <h4 className="font-bold text-lg mb-3">Favorite Restaurants</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {recommendations.restaurants.map(r => <li key={r.name}><strong>{r.name}:</strong> {r.note}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-3">Coffee Shops</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
           {recommendations.coffee.map(c => <li key={c.name}><strong>{c.name}:</strong> {c.note}</li>)}
        </ul>
      </div>
       <div>
        <h4 className="font-bold text-lg mb-3">Things to Do</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {recommendations.activities.map(a => <li key={a.name}><strong>{a.name}:</strong> {a.note}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default LocalGuide;