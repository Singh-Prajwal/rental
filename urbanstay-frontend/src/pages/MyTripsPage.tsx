import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMyBookings } from '../services/api';
import UserSidebar from '../components/common/UserSidebar';

interface IBooking {
  _id: string;
  propertyId: string;
  propertyName: string;
  checkInDate: string | Date;
  checkOutDate: string | Date;
  guests: number;
  totalPrice: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  accessCode?: string;
}

const MyTripsPage: React.FC = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyBookings()
      .then((data) => setBookings(data))
      .catch((err) => console.error('Failed to load bookings:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto flex py-12">
        <UserSidebar />
        <main className="flex-grow pl-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Trips</h1>
          {loading ? (
            <p>Loading your trips...</p>
          ) : bookings.length > 0 ? (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <Link
                  key={booking._id}
                  to={`/trips/${booking._id}`}
                  className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h2 className="font-bold text-xl">{booking.propertyName}</h2>
                  <p>
                    Dates:{' '}
                    {new Date(booking.checkInDate).toLocaleDateString()} -{' '}
                    {new Date(booking.checkOutDate).toLocaleDateString()}
                  </p>
                  <p>
                    Status:{' '}
                    <span className="font-semibold">{booking.status}</span>
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p>You have no trips planned. Time to book one!</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default MyTripsPage;
