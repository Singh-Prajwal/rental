// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import 'react-datepicker/dist/react-datepicker.css'; 
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>

      <BookingProvider>
        
      <App />
       </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)