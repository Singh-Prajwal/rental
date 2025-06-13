// src/components/layout/AdminLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is a placeholder for child routes
import AdminSidebar from '../../pages/admin/AdminSidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {/* Child pages will be rendered here */}
      </main>
    </div>
  );
};

export default AdminLayout;