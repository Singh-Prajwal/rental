// src/components/details/BookingWidget.tsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useBooking } from '../../context/BookingContext'; // Import our custom hook

interface BookingWidgetProps {
  pricePerNight: number;
  maxGuests: number;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ pricePerNight, maxGuests }) => {
  const { propertyId } = useParams();
  
  // Use the shared state from our context
  const { 
    checkInDate, 
    setCheckInDate, 
    checkOutDate, 
    setCheckOutDate, 
    guests, 
    setGuests 
  } = useBooking();

  // The rest of the logic remains the same!
  const nights = checkInDate && checkOutDate 
    ? Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;
  
  const subtotal = pricePerNight * nights;
  const cleaningFee = 50;
  const serviceFee = 20;
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <div className="sticky top-24 p-6 border text-black border-gray-200 rounded-xl shadow-lg bg-white">
      {/* ... The JSX is almost identical, it just uses the context state and setters now ... */}
      <h3 className="text-2xl font-bold">${pricePerNight} <span className="font-normal text-base">night</span></h3>
      <div className="mt-4 border border-gray-300 rounded-lg">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-gray-300">
            <label htmlFor="check-in" className="block text-xs font-bold uppercase">Check-in</label>
            <DatePicker
              id="check-in"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              placeholderText="Add date"
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <div className="p-3">
            <label htmlFor="check-out" className="block text-xs font-bold uppercase">Check-out</label>
            <DatePicker
              id="check-out"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              placeholderText="Add date"
              className="w-full text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="p-3 border-t border-gray-300">
          <label htmlFor="guests" className="block text-xs font-bold uppercase">Guests</label>
          <select 
            id="guests" 
            value={guests} 
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm focus:outline-none bg-transparent"
          >
            {Array.from({ length: maxGuests }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>
      <Link to={nights > 0 ? `/book/${propertyId}/confirm` : '#'}>
        <button 
          className="w-full mt-6 bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-primary_hover transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={nights <= 0}
        >
          Reserve
        </button>
      </Link>
      <p className="text-center text-sm text-gray-500 mt-3">You won't be charged yet</p>
      {nights > 0 && (
        <>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-600 underline">${pricePerNight} x {nights} nights</span><span>${subtotal}</span></div>
            <div className="flex justify-between"><span className="text-gray-600 underline">Cleaning fee</span><span>${cleaningFee}</span></div>
            <div className="flex justify-between"><span className="text-gray-600 underline">UrbanStay service fee</span><span>${serviceFee}</span></div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-bold"><span>Total</span><span>${total}</span></div>
        </>
      )}
    </div>
  );
};

export default BookingWidget;