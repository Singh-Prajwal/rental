// src/pages/PropertyDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockAllStays } from '../services/mockData';
import ImageGallery from '../components/details/ImageGallery';
import BookingWidget from '../components/details/BookingWidget'; // Import
import Amenities from '../components/details/Amenities';         // Import
import Reviews from '../components/details/Reviews';             // Import

const PropertyDetailPage: React.FC = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const property = mockAllStays.find(p => p.id === propertyId);

  if (!property) {
    return <div className="container mx-auto py-12 text-center">Property not found.</div>;
  }
  
  const totalReviews = property.reviews?.length ?? 0;
  const averageRating = totalReviews > 0
    ? (property.reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1)
    : 'New';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Property Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
          {totalReviews > 0 ? (
            <span>★ {averageRating} ({totalReviews} reviews)</span>
          ) : (
            <span>★ New</span>
          )}
          <span>·</span>
          <span>{property.location ?? 'Location not specified'}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-8">
        <ImageGallery images={property.images} />
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-24">
        <div className="lg:col-span-2">
          {/* Host and Property Info */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Hosted by {property.host?.name ?? 'one of our hosts'}</h2>
                <p className="text-gray-500">
                  {property.maxGuests ?? 2} guests · {property.bedrooms ?? 1} bedroom · {property.beds ?? 1} bed · {property.baths ?? 1} bath
                </p>
              </div>
              <img src={property.host?.avatarUrl} alt={property.host?.name} className="h-14 w-14 rounded-full object-cover" />
            </div>
          </div>

          {/* Description */}
          {property.description && (
            <div className="py-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-2">About this place</h3>
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            </div>
          )}
          
          {/* Amenities */}
          <Amenities amenities={property.amenities} />
        </div>

        {/* Booking Widget (Right Column) */}
        <div className="lg:col-span-1 mt-8 lg:mt-0">
          <BookingWidget pricePerNight={property.pricePerNight ?? 100} maxGuests={property.maxGuests ?? 1}/>
        </div>
      </div>

       {/* Reviews */}
       <Reviews reviews={property.reviews} />
    </div>
  );
};

export default PropertyDetailPage;