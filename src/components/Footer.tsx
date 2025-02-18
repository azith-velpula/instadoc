import React from 'react';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">InstaDoc</span>
            </div>
            <p className="mt-4 text-gray-300">
              Your trusted healthcare partner, providing 24/7 access to quality medical care.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Find a Doctor</li>
              <li>Book Appointment</li>
              <li>Medical Records</li>
              <li>Emergency Care</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@instadoc.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>1-800-INSTADOC</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Healthcare Ave, Medical District</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <p className="text-gray-300 mb-4">
              24/7 Emergency Helpline
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
              Call 911
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InstaDoc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;