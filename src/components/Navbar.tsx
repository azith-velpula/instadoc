import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">InstaDoc</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/appointments" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Appointments
            </Link>
            <Link to="/consultations" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Consultations
            </Link>
            <Link to="/prescriptions" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Prescriptions
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/appointments"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Appointments
            </Link>
            <Link
              to="/consultations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Consultations
            </Link>
            <Link
              to="/prescriptions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Prescriptions
            </Link>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;