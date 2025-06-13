// src/components/auth/AdminRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// We need to update AuthContext to store the role
interface UserInfo {
  _id: string;
  name: string;
  email: string;
  token: string;
  role: 'guest' | 'admin' | 'manager'; // Make sure role is part of the user info
}

const AdminRoute: React.FC = () => {
  const { userInfo } = useAuth();
  const typedUserInfo = userInfo as UserInfo | null; // Cast to our new type
  if(!typedUserInfo) return <Navigate to="/login"/>
  // Redirect to login if not logged in, or to homepage if not an admin
  if (typedUserInfo) 
  return (typedUserInfo.role === 'admin' || typedUserInfo.role === 'manager') 
    ? <Outlet /> 
    : <Navigate to="/" replace />;
};

export default AdminRoute;