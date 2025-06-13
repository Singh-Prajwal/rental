// src/components/admin/AdminSidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

// Icons
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const BookingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const PropertiesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const SupportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
    isActive ? 'bg-orange-100 text-brand-primary' : 'hover:bg-gray-200 text-gray-700'
  }`;

const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-white shadow-md">
      <div className="p-4 flex items-center space-x-3 border-b border-gray-200">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=128&h=128&fit=crop" alt="Emily Carter" className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold">Emily Carter</p>
          <p className="text-xs text-gray-500">Property Manager</p>
        </div>
      </div>
      <nav className="p-4 space-y-2">
        <NavLink to="/admin/dashboard" className={getLinkClass}><DashboardIcon /><span>Dashboard</span></NavLink>
        {/* <NavLink to="/admin/bookings" className={getLinkClass}><BookingsIcon /><span>Bookings</span></NavLink> */}
        <NavLink to="/admin/properties" className={getLinkClass}><PropertiesIcon /><span>Properties</span></NavLink>
        {/* <NavLink to="/admin/support" className={getLinkClass}><SupportIcon /><span>Support</span></NavLink> */}
        {/* <NavLink to="/admin/settings" className={getLinkClass}><SettingsIcon /><span>Settings</span></NavLink> */}
      </nav>
    </aside>
  );
};

export default AdminSidebar;