import React from 'react';
import { NavLink } from 'react-router-dom';

// A helper for styling the links
const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
    isActive ? 'bg-orange-100 text-brand-primary font-semibold' : 'hover:bg-gray-100 text-gray-700'
  }`;

// Icons for each link
const TripsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const InboxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const WishlistsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const ProfileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

const UserSidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0">
      <div className="p-4 space-y-2">
        <NavLink to="/trips" end className={getLinkClass}>
          <TripsIcon /> <span>Trips</span>
        </NavLink>
        <NavLink to="/inbox" className={getLinkClass}>
          <InboxIcon /> <span>Inbox</span>
        </NavLink>
        <NavLink to="/wishlists" className={getLinkClass}>
          <WishlistsIcon /> <span>Wishlists</span>
        </NavLink>
        <NavLink to="/profile" className={getLinkClass}>
          <ProfileIcon /> <span>Profile</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default UserSidebar;