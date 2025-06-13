// src/context/BookingContext.tsx
import React, { createContext, useState, useContext, } from 'react';

// 1. Define the shape of our context data
interface BookingState {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guests: number;
  setCheckInDate: (date: Date | null) => void;
  setCheckOutDate: (date: Date | null) => void;
  setGuests: (num: number) => void;
}

// 2. Create the context with a default value
const BookingContext = createContext<BookingState | undefined>(undefined);

// 3. Create the Provider component
interface BookingProviderProps {
  children: React.ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const value = {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

// 4. Create a custom hook for easy access to the context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};