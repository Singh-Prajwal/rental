// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Footer Links */}
          <div className="flex space-x-6">
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
          </div>
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            @2024 UrbanStay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;