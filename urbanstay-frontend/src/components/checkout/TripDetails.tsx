// src/components/checkout/TripDetails.tsx
import React from 'react';
import { useBooking } from '../../context/BookingContext'; // Import the hook
import { format } from 'date-fns'; // A utility to format dates nicely
const DetailRow = ({ label, value, action }: { label: string; value: string; action?: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0">
    <div>
      <p className="font-semibold">{label}</p>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
    {action && <button className="font-semibold text-white underline hover:text-brand-primary transition-colors">{action}</button>}
  </div>
);

const TripDetails: React.FC = () => {
  // Read the shared state
  const { checkInDate, checkOutDate, guests } = useBooking();

  // Format the dates for display
  const formattedDates = checkInDate && checkOutDate
    ? `${format(checkInDate, 'MMM dd')} - ${format(checkOutDate, 'dd, yyyy')}`
    : 'Not selected';

  const guestText = `${guests} guest${guests > 1 ? 's' : ''}`;

  return (
    <div className="bg-white text-black rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-bold  mb-4">Your trip</h2>
        <DetailRow label="Dates"  value={formattedDates} action="Edit" />
        <DetailRow label="Guests" value={guestText} action="Edit" />
      </div>
    </div>
  );
};

export default TripDetails;