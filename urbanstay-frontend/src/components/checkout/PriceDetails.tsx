// src/components/checkout/PriceDetails.tsx
import React from 'react';

interface PriceDetailsProps {
  pricePerNight: number;
}

const PriceDetails: React.FC<PriceDetailsProps> = ({ pricePerNight }) => {
  const nights = 4;
  const cleaningFee = 50;
  const serviceFee = 20;
  const taxes = 10;

  const subtotal = pricePerNight * nights;
  const total = subtotal + cleaningFee + serviceFee + taxes;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black">Price details</h2>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>${pricePerNight} x {nights} nights</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Cleaning fee</span>
          <span>${cleaningFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Occupancy taxes</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceDetails;