import React from 'react';
import { Video, MessageCircle, Calendar } from 'lucide-react';

const Consultations = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Online Consultations</h1>
          <p className="text-xl text-gray-600">Connect with healthcare professionals from anywhere</p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Consultation</h3>
            <p className="text-gray-600 mb-4">Face-to-face consultation with your doctor through video call</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Start Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Chat Consultation</h3>
            <p className="text-gray-600 mb-4">Text-based consultation for non-emergency medical advice</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scheduled Consultation</h3>
            <p className="text-gray-600 mb-4">Book a consultation for a future date and time</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Schedule
            </button>
          </div>
        </div>

        {/* Upcoming Consultations */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Consultations</h2>
          <div className="space-y-6">
            {[
              {
                doctor: "Dr. Sarah Johnson",
                specialty: "Cardiologist",
                date: "Today",
                time: "2:30 PM",
                type: "Video"
              },
              {
                doctor: "Dr. Michael Chen",
                specialty: "Neurologist",
                date: "Tomorrow",
                time: "10:00 AM",
                type: "Chat"
              }
            ].map((consultation, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{consultation.doctor}</h3>
                  <p className="text-gray-600">{consultation.specialty}</p>
                  <p className="text-sm text-gray-500">
                    {consultation.date} at {consultation.time}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {consultation.type}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Consultations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Past Consultations</h2>
          <div className="space-y-6">
            {[
              {
                doctor: "Dr. Emily Williams",
                specialty: "Pediatrician",
                date: "March 15, 2024",
                time: "3:00 PM",
                type: "Video"
              },
              {
                doctor: "Dr. James Wilson",
                specialty: "Dermatologist",
                date: "March 10, 2024",
                time: "11:30 AM",
                type: "Chat"
              }
            ].map((consultation, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{consultation.doctor}</h3>
                  <p className="text-gray-600">{consultation.specialty}</p>
                  <p className="text-sm text-gray-500">
                    {consultation.date} at {consultation.time}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {consultation.type}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 transition duration-300">
                    View Summary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultations;