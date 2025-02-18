import React, { useState } from 'react';
import { Calendar, Clock, Search } from 'lucide-react';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Dermatology",
    "Orthopedics",
    "Gynecology",
    "Ophthalmology",
    "Dentistry"
  ];

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book an Appointment</h1>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Doctor or Specialty
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select time slot</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-300 text-center"
            >
              <h3 className="font-semibold text-gray-900">{specialty}</h3>
              <p className="text-sm text-gray-500 mt-1">Available Doctors: 8</p>
            </button>
          ))}
        </div>

        {/* Available Doctors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((doctor) => (
            <div key={doctor} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <img
                    src={`https://images.unsplash.com/photo-${1590000000000 + doctor}?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80`}
                    alt="Doctor"
                    className="w-24 h-24 rounded-lg object-cover mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Dr. John Smith</h3>
                    <p className="text-blue-600 mb-2">Cardiologist</p>
                    <p className="text-gray-600 mb-4">15 years experience</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Next Available: Today</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;