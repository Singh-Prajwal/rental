// src/pages/TripDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookingById } from '../services/api';
import { mockAllStays } from '../services/mockData';
import type { Property, Review } from '../types/Property'; // Assuming you have this type
import UserSidebar from '../components/common/UserSidebar';
import GuidebookTabs from '../components/trips/GuidebookTabs'; // Ensure this is imported
import { format } from 'date-fns';

// --- Re-usable Icons and Components ---
// (It's best to have these here or imported from a shared file)
const InfoBlock = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start space-x-4">
        <div className="text-gray-500 mt-1">{icon}</div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="text-gray-700">{children}</div>
        </div>
    </div>
);
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const GuestsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const KeyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-2h2v-2h2v-2h2v-2h2l1.257-1.257A6 6 0 0115 7z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


// Define a type for the full booking object from the API
interface BookingDetails {
    _id: string;
    propertyId: string;
    propertyName: string;
    checkInDate: string;
    checkOutDate: string;
    guests: number;
    status: string;
    accessCode?: string;
}

const TripDetailPage: React.FC = () => {
    const { bookingId } = useParams<{ bookingId: string }>();
    const [booking, setBooking] = useState<BookingDetails | null>(null);
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!bookingId) {
            setLoading(false);
            return;
        }

        const fetchTripData = async () => {
            try {
                // Step 1: Fetch the booking details from the API
                const bookingData = await getBookingById(bookingId);
                setBooking(bookingData);

                // Step 2: Use the propertyId from the booking to find the property in our mock data
                const associatedProperty = mockAllStays.find(p => p.id === bookingData.propertyId);
                if (associatedProperty) {
                    setProperty(associatedProperty);
                } else {
                    console.error(`Property with ID ${bookingData.propertyId} not found in mock data.`);
                }
            } catch (err) {
                console.error("Failed to fetch trip data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTripData();
    }, [bookingId]);

    if (loading) {
        return <div className="text-center py-20 text-gray-500">Loading your trip details...</div>;
    }

    if (!booking || !property) {
        return <div className="text-center py-20 text-red-500">Sorry, we could not find your trip details.</div>;
    }

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto flex py-12">
                <UserSidebar />
                <main className="flex-grow pl-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Your trip to {property.location}</h1>
                    <p className="text-gray-600 mb-8">Booking ID: {booking._id}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <h2 className="text-2xl font-semibold border-b pb-4">Your reservation</h2>
                            <InfoBlock icon={<CalendarIcon />} title="Check-in">
                                <p>{format(new Date(booking.checkInDate), 'EEEE, MMMM dd, yyyy')}</p>
                                <p className="text-sm  text-gray-500">From 4:00 PM</p>
                            </InfoBlock>
                            <InfoBlock icon={<CalendarIcon />} title="Check-out">
                                <p>{format(new Date(booking.checkOutDate), 'EEEE, MMMM dd, yyyy')}</p>
                                <p className="text-sm text-gray-500">By 11:00 AM</p>
                            </InfoBlock>
                            <InfoBlock icon={<GuestsIcon />} title="Guests">
                                <p>{booking.guests} guest{booking.guests > 1 ? 's' : ''}</p>
                            </InfoBlock>
                            
                            {booking.status === 'Confirmed' && booking.accessCode && (
                                <InfoBlock icon={<KeyIcon />} title="Your Access Code">
                                    <p className="text-2xl font-bold tracking-widest bg-gray-100 px-4 py-2 rounded-lg inline-block">{booking.accessCode}</p>
                                    <p className="text-sm text-gray-500 mt-2">Use this code for the smart lock.</p>
                                </InfoBlock>
                            )}

                            <div className="pt-8 border-t">
                                <h2 className="text-2xl font-semibold mb-4">Where you're staying</h2>
                                <InfoBlock icon={<LocationIcon />} title={property.title}>
                                    <p className="font-normal">{property.location}</p>
                                    <p className="text-sm text-gray-500 mt-2">Address will be provided 24 hours before check-in.</p>
                                </InfoBlock>
                            </div>
                        </div>

                        <div>
                            <img src={property.images?.[1]} alt={property.title} className="rounded-xl object-cover w-full h-auto shadow-lg" />
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <h2 className="text-2xl font-semibold">Your Digital Guidebook</h2>
                        <GuidebookTabs property={property} bookingId={booking._id} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TripDetailPage;
// // src/pages/TripDetailPage.tsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useBooking } from '../context/BookingContext';
// import { mockAllStays } from '../services/mockData';
// import UserSidebar from '../components/common/UserSidebar';
// import { format } from 'date-fns';
// import GuidebookTabs from '../components/trips/GuidebookTabs';

// // Helper component for info blocks
// const InfoBlock = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
//   <div className="flex items-start space-x-4">
//     <div className="text-gray-500 mt-1">{icon}</div>
//     <div>
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <div className="text-gray-700">{children}</div>
//     </div>
//   </div>
// );
// // Icons
// const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
// const GuestsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
// const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


// const TripDetailPage: React.FC = () => {
//   const { bookingId } = useParams();
//   const { checkInDate, checkOutDate, guests } = useBooking();
//   // For this demo, let's assume the booking is for property '102'
//   const property = mockAllStays.find(p => p.id === '102');

//   if (!property) return <div>Loading trip details...</div>;

//   return (
//     <div className="bg-gray-50">
//           <div className="container mx-auto flex py-12">
              
//         <UserSidebar />
//         <main className="flex-grow pl-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Your trip to {property.location}</h1>
//           <p className="text-gray-600 mb-8">Booking ID: {bookingId}</p>

//           {/* Main Info Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Column: Reservation & Location */}
//             <div className="space-y-8">
//               <h2 className="text-2xl font-semibold border-b pb-4">Your reservation</h2>
//               <InfoBlock icon={<CalendarIcon />} title="Check-in">
//                 <p>{checkInDate ? format(checkInDate, 'EEEE, MMMM dd, yyyy') : 'N/A'}</p>
//                 <p className="text-sm text-gray-500">From 4:00 PM</p>
//               </InfoBlock>
//               <InfoBlock icon={<CalendarIcon />} title="Check-out">
//                 <p>{checkOutDate ? format(checkOutDate, 'EEEE, MMMM dd, yyyy') : 'N/A'}</p>
//                 <p className="text-sm text-gray-500">By 11:00 AM</p>
//               </InfoBlock>
//                <InfoBlock icon={<GuestsIcon />} title="Guests">
//                 <p>{guests} guest{guests > 1 ? 's' : ''}</p>
//               </InfoBlock>
              
//               <div className="pt-8 border-t">
//                 <h2 className="text-2xl font-semibold mb-4">Where you're staying</h2>
//                  <InfoBlock icon={<LocationIcon />} title={property.title}>
//                    <p className="font-normal">{property.location}</p>
//                    <p className="text-sm text-gray-500 mt-2">Address will be provided 24 hours before check-in.</p>
//                  </InfoBlock>
//               </div>
//             </div>

//             {/* Right Column: Property Image */}
//             <div>
//               <img src={property.images[1]} alt={property.title} className="rounded-xl object-cover w-full h-auto shadow-lg" />
//             </div>
//           </div>

//           {/* Guidebook Tabs Placeholder */}
//           <div className="mt-12 pt-8 border-t">
//   <h2 className="text-2xl font-semibold">Your Digital Guidebook</h2>
//   <GuidebookTabs property={property} />
// </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default TripDetailPage;