import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Define the UserInfo type here or import it
interface UserInfo {
  _id: string;
  name: string;
  email: string;
  token: string;
  role: 'guest' | 'admin' | 'manager';
}

const Header: React.FC = () => {
  const navLinkClass = "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const { userInfo, logout } = useAuth();
  
  const typedUserInfo = userInfo as UserInfo | null;

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-bold text-xl text-gray-800">UrbanStay</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/stays" className={navLinkClass}>Stays</NavLink>
            
            {/* Admin Dashboard Link (already implemented) */}
            {typedUserInfo && (typedUserInfo.role === 'admin' || typedUserInfo.role === 'manager') && (
              <NavLink to="/admin/dashboard" className={navLinkClass}>
                Admin Dashboard
              </NavLink>
            )}
          </div>

          {/* User Info & Actions */}
          <div className="flex items-center space-x-4">
            {typedUserInfo ? (
              <>
                {/* --- NEW "MY TRIPS" LINK --- */}
                <NavLink to="/trips" className={navLinkClass}>
                  My Trips
                </NavLink>

                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 hidden sm:block">
                      {typedUserInfo.name.split(' ')[0]}
                    </span>
                    <button 
                      onClick={logout} 
                      className="text-sm text-gray-300 hover:text-white underline"
                    >
                      Logout
                    </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-primary_hover transition-colors">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// // src/components/layout/Header.tsx
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// interface UserInfo {
//   _id: string;
//   name: string;
//   email: string;
//   token: string;
//   role: 'guest' | 'admin' | 'manager';
// }
// const Header: React.FC = () => {
//   // We use NavLink to style the active link later
//   const navLinkClass = "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors";
//   const { userInfo, logout } = useAuth();
//    const typedUserInfo = userInfo as UserInfo | null;
//   return (
//     <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//             </svg>
//             <span className="font-bold text-xl text-gray-800">UrbanStay</span>
//           </Link>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <NavLink to="/find-a-home" className={navLinkClass}>Find a home</NavLink>
//             <NavLink to="/stays" className={navLinkClass}>Stays</NavLink>
//             <NavLink to="/experiences" className={navLinkClass}>Experiences</NavLink>
//             <NavLink to="/online" className={navLinkClass}>Online</NavLink>
//             {typedUserInfo && (typedUserInfo.role === 'admin' || typedUserInfo.role === 'manager') && (
//               <NavLink to="/admin/dashboard" className={navLinkClass}>
//                 Admin Dashboard
//               </NavLink>
//             )}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center space-x-4">
           
//              <div className="flex items-center space-x-4">
//             {userInfo ? (
//                 <>
//                     <span className="font-semibold text-black ">Welcome, {userInfo.name.split(' ')[0]}</span>
//                     <button onClick={logout} className="underline">Logout</button>
//                 </>
//             ) : (
//                 <Link to="/login" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
//                     Login
//                 </Link>
//             )}
//         </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;