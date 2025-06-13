import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
