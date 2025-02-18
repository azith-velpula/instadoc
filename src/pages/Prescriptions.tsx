import React from 'react';
import { FileText, Download, Printer, Share2 } from 'lucide-react';

const Prescriptions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Prescriptions</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Request New Prescription
            </button>
        </div>

        {/* Active Prescriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Active Prescriptions</h2>
          <div className="space-y-6">
            {[
              {
                medication: "Amoxicillin",
                dosage: "500mg",
                frequency: "3 times daily",
                duration: "7 days",
                doctor: "Dr. Sarah Johnson",
                date: "March 18, 2024"
              },
              {
                medication: "Lisinopril",
                dosage: "10mg",
                frequency: "Once daily",
                duration: "30 days",
                doctor: "Dr. Michael Chen",
                date: "March 15, 2024"
              }
            ].map((prescription, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{prescription.medication}</h3>
                    <p className="text-gray-600">
                      {prescription.dosage} - {prescription.frequency}
                    </p>
                    <p className="text-gray-600">Duration: {prescription.duration}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Prescribed by {prescription.doctor} on {prescription.date}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition duration-300">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition duration-300">
                      <Printer className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition duration-300">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Instructions</h4>
                  <p className="text-gray-700">Take with food. Complete the full course as prescribed.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Prescriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Past Prescriptions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medication
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prescribed By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    medication: "Azithromycin",
                    doctor: "Dr. Emily Williams",
                    date: "February 15, 2024",
                    status: "Completed"
                  },
                  {
                    medication: "Ibuprofen",
                    doctor: "Dr. James Wilson",
                    date: "January 30, 2024",
                    status: "Completed"
                  }
                ].map((prescription, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {prescription.medication}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {prescription.doctor}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {prescription.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {prescription.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;