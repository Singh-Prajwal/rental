// src/components/checkout/PaymentForm.tsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { createBooking } from '../../services/api';
import { mockAllStays } from '../../services/mockData'; // To get property details

const PaymentForm: React.FC = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  // ... (other state hooks like cardNumber, etc. can remain if you want to keep the form interactive)
  
  const navigate = useNavigate();
  const { propertyId } = useParams<{ propertyId: string }>();
  const { checkInDate, checkOutDate, guests } = useBooking();

  const handleConfirmAndPay = async () => {
    if (!propertyId || !checkInDate || !checkOutDate) {
      alert("Booking information is incomplete.");
      return;
    }

    const property = mockAllStays.find(p => p.id === propertyId);
    if (!property) {
      alert("Property details not found.");
      return;
    }

    // In a real app, this calculation would be more robust
    const nights = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = (property.pricePerNight ?? 0) * nights + 50 + 20 + 10; // Includes fees

    const bookingData = {
      propertyId: property.id,
      propertyName: property.title,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
    };

    try {
      const newBooking = await createBooking(bookingData);
      console.log('Booking successful:', newBooking);
      // This is a key step: We redirect to the trip page using the REAL ID
      // from the database, which is the foundation for generating secure access later.
      navigate(`/trips/${newBooking._id}`);
    } catch (error) {
      console.error('Failed to create booking:', error);
      alert('There was an error creating your booking. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        {/* ... (The rest of your form JSX for payment method, etc.) ... */}
        
        <div className="mt-6">
          <label htmlFor="terms" className="flex items-center text-sm text-gray-600">
            <input type="checkbox" id="terms" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
            <span className="ml-2">I agree to the <a href="#" className="underline font-semibold hover:text-brand-primary">Terms and Conditions</a></span>
          </label>
        </div>
        
        <button 
          onClick={handleConfirmAndPay}
          className="w-full mt-6 bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-primary_hover transition-colors disabled:bg-gray-400"
          disabled={!agreedToTerms}
        >
          Confirm and pay
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;