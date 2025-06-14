import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus, getSupportRequests, updateSupportRequestStatus, scheduleTechnician } from '../../services/api';
import ScheduleTechForm from './ScheduleTechForm';
interface Booking {
  _id: string;
  propertyName: string;
  guestName?: string;
  checkInDate: string;
  checkOutDate: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

interface SupportRequest {
  _id: string;
  propertyId: string;
  issue: string;
  status: 'Open' | 'In Progress' | 'Closed';
  createdAt: string;
}

// Reusable Stat Card component
const StatCard = ({ title, value }: { title: string, value: string | number }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
  </div>
);

// Reusable Status Badge component
const StatusBadge = ({ status }: { status: string }) => {
  const colorMap: Record<string, string> = {
    Confirmed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Cancelled: 'bg-red-100 text-red-800',
    Open: 'bg-red-100 text-red-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Closed: 'bg-gray-200 text-gray-800',
  };
  return (
    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorMap[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

const AdminDashboardPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [supportRequests, setSupportRequests] = useState<SupportRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isScheduling, setIsScheduling] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const data = await getBookings();
      setBookings(data);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleOpenScheduler = (ticketId: string) => {
    setSelectedTicketId(ticketId);
    setIsScheduling(true);
  };
 const handleScheduleSubmit = async (visitData: { technicianName: string; scheduledAt: Date; notes: string; }) => {
    if (!selectedTicketId) return;
    try {
      await scheduleTechnician(selectedTicketId, visitData);
      alert('Technician scheduled successfully and guest has been notified.');
      setIsScheduling(false);
      setSelectedTicketId(null);
      fetchSupportRequests(); // Refresh list to show updated status
    } catch (error) {
      alert('Failed to schedule technician.');
      console.error(error);
    }
  };
  const fetchSupportRequests = async () => {
    try {
      const data = await getSupportRequests();
      setSupportRequests(data);
    } catch (error) {
      console.error('Failed to fetch support requests:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchSupportRequests();
  }, []);

  const handleUpdateStatus = async (id: string, status: 'Confirmed' | 'Cancelled') => {
    try {
      await updateBookingStatus(id, status);
      fetchBookings();
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Could not update booking status.');
    }
  };

  const handleUpdateSupportStatus = async (id: string, status: string) => {
    try {
      await updateSupportRequestStatus(id, status);
      fetchSupportRequests();
    } catch (error) {
      console.error('Failed to update support request status:', error);
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your properties and bookings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value={bookings.length} />
        <StatCard title="Active Listings" value={15} />
        <StatCard title="Average Rating" value="4.8" />
      </div>

      {/* Bookings Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dates</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">Loading bookings...</td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">No bookings found.</td>
                </tr>
              ) : bookings.map(b => (
                <tr key={b._id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{b.propertyName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(b.checkInDate).toLocaleDateString()} – {new Date(b.checkOutDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4"><StatusBadge status={b.status} /></td>
                  <td className="px-6 py-4 text-sm space-x-3">
                    {b.status === 'Pending' && (
                      <button onClick={() => handleUpdateStatus(b._id, 'Confirmed')} className="text-green-600 hover:text-green-900 font-semibold">Confirm</button>
                    )}
                    {b.status !== 'Cancelled' && (
                      <button onClick={() => handleUpdateStatus(b._id, 'Cancelled')} className="text-red-600 hover:text-red-900 font-semibold">Cancel</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Support Requests Table */}
      {/* <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Support Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {supportRequests.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">No support requests.</td>
                </tr>
              ) : supportRequests.map(r => (
                <tr key={r._id}>
                  <td className="px-6 py-4 text-sm text-gray-900">{r.issue}</td>
                  <td className="px-6 py-4"><StatusBadge status={r.status} /></td>
                  <td className="px-6 py-4 space-x-2">
                    {r.status === 'Open' && (
                      <button onClick={() => handleUpdateSupportStatus(r._id, 'In Progress')} className="text-white hover:text-gray-400 font-semibold">Mark In Progress</button>
                    )}
                    {r.status === 'In Progress' && (
                      <button onClick={() => handleUpdateSupportStatus(r._id, 'Closed')} className="text-white hover:text-gray-400 font-semibold">Close</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Support Requests</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {supportRequests.map(r => (
                        <tr key={r._id}>
                            <td className="px-6 py-4 text-sm text-gray-800">{r.issue}</td>
                            <td className="px-6 py-4 text-sm font-semibold">{r.status}</td>
                            <td className="px-6 py-4 text-sm space-x-2">
                                {(r.status === 'Open' || r.status === 'In Progress') && (
                                    <button onClick={() => handleOpenScheduler(r._id)} className="text-blue-600 hover:text-blue-900 font-semibold">
                                        Schedule Tech
                                    </button>
                                )}
                                {r.status !== 'Closed' && (
                                    <button onClick={() => handleUpdateSupportStatus(r._id, 'Closed')} className="text-red-600 hover:text-red-900 font-semibold">
                                        Close Ticket
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
      
      {isScheduling && selectedTicketId && (
        <ScheduleTechForm 
          isSaving={false} /* you can wire this up for better UX */
          onClose={() => setIsScheduling(false)} 
          onSubmit={handleScheduleSubmit} 
        />
      )}
    </div>
  );}

export default AdminDashboardPage;

// // src/pages/admin/AdminDashboardPage.tsx
// import React, { useState, useEffect } from 'react';
// import { getBookings, updateBookingStatus } from '../../services/api';
// import { /*...,*/ getSupportRequests, updateSupportRequestStatus } from '../../services/api';
// // A type for the booking data we expect from the backend
// interface Booking {
//   _id: string;
//     propertyName: string;
    
//   guestName?: string;
//   checkInDate: string;
//   checkOutDate: string;
//   status: 'Confirmed' | 'Pending' | 'Cancelled';
// }
// interface SupportRequest {
//     _id: string;
//     propertyId: string; // You can use this to show property name
//     issue: string;
//     status: 'Open' | 'In Progress' | 'Closed';
//     createdAt: string;
// }
// // --- Reusable Components (Now with full code) ---

// // Reusable Stat Card component
// const StatCard = ({ title, value }: { title: string, value: string | number }) => (
//   <div className="bg-white p-6 rounded-lg shadow">
//     <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//     <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
//   </div>
// );

// // Reusable Status Badge component
// const StatusBadge = ({ status }: { status: Booking['status'] }) => {
//   const colorMap = {
//     Confirmed: 'bg-green-100 text-green-800',
//     Pending: 'bg-yellow-100 text-yellow-800',
//     Cancelled: 'bg-red-100 text-red-800', // Added style for Cancelled
//   };
//   return (
//     <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorMap[status] || 'bg-gray-100 text-gray-800'}`}>
//       {status}
//     </span>
//   );
// };

// // --- Main Dashboard Page Component ---

// const AdminDashboardPage: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//     const [supportRequests, setSupportRequests] = useState<SupportRequest[]>([]);
//   const fetchBookings = async () => {
//     try {
//       setIsLoading(true);
//       const data = await getBookings();
//       setBookings(data);
//     } catch (error) {
//       console.error("Failed to fetch bookings:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
// const fetchSupportRequests = async () => {
//         const data = await getSupportRequests();
//         setSupportRequests(data);
//     };

//     useEffect(() => {
//         fetchBookings();
//         fetchSupportRequests();
//     }, []);

//     const handleUpdateSupportStatus = async (id: string, status: string) => {
//         await updateSupportRequestStatus(id, status);
//         fetchSupportRequests(); // Refresh list
//     };
//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const handleUpdateStatus = async (id: string, status: 'Confirmed' | 'Cancelled') => {
//     try {
//       await updateBookingStatus(id, status);
//       fetchBookings(); // Re-fetch the data to show the update
//     } catch (error) {
//       console.error("Failed to update status:", error);
//       alert('Could not update booking status.');
//     }
//   };
// console.log("supportRequests",supportRequests)
//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         <p className="text-gray-600">Overview of your properties and bookings</p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatCard title="Total Bookings" value={bookings.length} />
//         <StatCard title="Active Listings" value={15} /> {/* This is still mock data */}
//         <StatCard title="Average Rating" value="4.8" /> {/* This is still mock data */}
//       </div>

//       {/* Bookings Table */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Bookings</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dates</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {isLoading ? (
//                 <tr><td colSpan={4} className="text-center py-4 text-gray-500">Loading bookings...</td></tr>
//               ) : bookings.length === 0 ? (
//                 <tr><td colSpan={4} className="text-center py-4 text-gray-500">No bookings found.</td></tr>
//               ) : bookings.map(b => (
//                 <tr key={b._id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{b.propertyName}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(b.checkInDate).toLocaleDateString()} to {new Date(b.checkOutDate).toLocaleDateString()}</td>
//                   <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={b.status} /></td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
//                     {b.status === 'Pending' && (
//                       <button onClick={() => handleUpdateStatus(b._id, 'Confirmed')} className="text-green-600 hover:text-green-900 font-semibold">Confirm</button>
//                     )}
//                     {b.status !== 'Cancelled' && (
//                       <button onClick={() => handleUpdateStatus(b._id, 'Cancelled')} className="text-red-600 hover:text-red-900 font-semibold">Cancel</button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* We will build the support request table later */}
//       <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl text-black font-semibold mb-4">Recent Support Requests</h2>
//           {/* ... Table structure similar to bookings table ... */}
//           <tbody>
//             {supportRequests.map(r => (
//                 <tr key={r._id}>
//                 {/* ... table cells for issue, date, status ... */}
//                 <td className='text-black'>

//                   {r.issue}

//                 </td>
//                     <td>
//                         {r.status === 'Open' && <button onClick={() => handleUpdateSupportStatus(r._id, 'In Progress')}>Mark In Progress</button>}
//                         {r.status === 'In Progress' && <button onClick={() => handleUpdateSupportStatus(r._id, 'Closed')}>Close Ticket</button>}
//                     </td>
//                 </tr>
//             ))}
//           </tbody>
//         </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;
// // // src/pages/admin/AdminDashboardPage.tsx
// // import React from 'react';

// // // Reusable Stat Card component
// // const StatCard = ({ title, value }: { title: string, value: string | number }) => (
// //   <div className="bg-white p-6 rounded-lg shadow">
// //     <h3 className="text-sm font-medium text-gray-500">{title}</h3>
// //     <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
// //   </div>
// // );

// // // Reusable Status Badge component
// // const StatusBadge = ({ status }: { status: 'Confirmed' | 'Pending' | 'Open' | 'In Progress' | 'Closed' }) => {
// //   const colorMap = {
// //     Confirmed: 'bg-green-100 text-green-800',
// //     Pending: 'bg-yellow-100 text-yellow-800',
// //     Open: 'bg-red-100 text-red-800',
// //     'In Progress': 'bg-blue-100 text-blue-800',
// //     Closed: 'bg-gray-200 text-gray-800'
// //   };
// //   return (
// //     <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorMap[status]}`}>
// //       {status}
// //     </span>
// //   );
// // };

// // // Mock data
// // const upcomingBookings = [
// //   { id: 1, property: 'Cozy Apartment in Downtown', guest: 'Liam Harper', checkIn: '2024-08-15', checkOut: '2024-08-22', status: 'Confirmed' as const },
// //   { id: 2, property: 'Luxury Villa with Ocean View', guest: 'Olivia Bennett', checkIn: '2024-09-01', checkOut: '2024-09-10', status: 'Pending' as const },
// //   { id: 3, property: 'Mountain Cabin Retreat', guest: 'Noah Clark', checkIn: '2024-10-05', checkOut: '2024-10-12', status: 'Confirmed' as const },
// // ];

// // const recentSupportRequests = [
// //   { id: 1, property: 'Cozy Apartment in Downtown', issue: 'Leaky faucet', status: 'Open' as const, date: '2024-07-20' },
// //   { id: 2, property: 'Luxury Villa with Ocean View', issue: 'Broken AC', status: 'In Progress' as const, date: '2024-07-15' },
// //   { id: 3, property: 'Mountain Cabin Retreat', issue: 'No hot water', status: 'Closed' as const, date: '2024-07-10' },
// // ];

// // const AdminDashboardPage: React.FC = () => {
// //   return (
// //     <div className="space-y-8">
// //       <div>
// //         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
// //         <p className="text-gray-600">Overview of your properties and bookings</p>
// //       </div>

// //       {/* Stats Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <StatCard title="Total Bookings" value={234} />
// //         <StatCard title="Active Listings" value={15} />
// //         <StatCard title="Average Rating" value="4.8" />
// //       </div>

// //       {/* Upcoming Bookings Table */}
// //       <div className="bg-white p-6 rounded-lg shadow">
// //         <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {upcomingBookings.map(b => (
// //                 <tr key={b.id}>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{b.property}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{b.guest}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{b.checkIn} to {b.checkOut}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={b.status} /></td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Recent Support Requests Table */}
// //       <div className="bg-white p-6 rounded-lg shadow">
// //         <h2 className="text-xl font-semibold mb-4">Recent Support Requests</h2>
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200">
// //              <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
// //               </tr>
// //             </thead>
// //              <tbody className="bg-white divide-y divide-gray-200">
// //               {recentSupportRequests.map(r => (
// //                 <tr key={r.id}>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{r.property}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{r.issue}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{r.date}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={r.status} /></td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboardPage;