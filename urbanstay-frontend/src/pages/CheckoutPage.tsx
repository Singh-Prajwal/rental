// src/pages/CheckoutPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockAllStays } from '../services/mockData';
import PriceDetails from '../components/checkout/PriceDetails';
import PaymentForm from '../components/checkout/PaymentForm';
import TripDetails from '../components/checkout/TripDetails';

const CheckoutPage: React.FC = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const property = mockAllStays.find(p => p.id === propertyId);

  if (!property) {
    return <div className="container mx-auto py-12 text-center">Property not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          {/* ... Back to property link ... */}
        </div>

        <h1 className="text-3xl font-bold mb-8 text-gray-900">Confirm and pay</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Booking Details & Payment */}
          <div className="lg:col-span-3 space-y-8">
            <TripDetails />
            <PaymentForm />
          </div>

          {/* Right Column: Price Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 p-6 bg-white rounded-lg shadow">
              <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                <img src={property.images?.[0]} alt={property.title} className="w-28 h-24 object-cover rounded-lg" />
                <div>
                  <p className="text-sm text-gray-600">{property.type}</p>
                  <p className="font-semibold">{property.title}</p>
                  <div className="flex items-center text-sm mt-1">
                    {property.reviews[0].rating}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <PriceDetails pricePerNight={property.pricePerNight ?? 100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;