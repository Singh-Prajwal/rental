// src/components/PropertyCard.tsx
import React from 'react';
import type { Property } from '../types/Property';
import { Link } from 'react-router-dom'; // Import Link

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/stays/${property.id}`} className="group cursor-pointer">
      <img src={ property.images[0]} alt={property.title} className="w-full h-64 object-cover rounded-xl" />
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:underline">{property.title}</h3>
        <p className="text-sm text-gray-600">{property.type} · {property.beds} beds</p>
      </div>
    </Link>
  );
};

export default PropertyCard;