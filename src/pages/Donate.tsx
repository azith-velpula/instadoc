import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing donation:', {
      amount: amount || customAmount,
      name,
      email,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Make a Donation</h1>
              <p className="mt-2 text-gray-600">Your support helps communities recover and rebuild</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Donation Amount
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {['25', '50', '100', '250', '500', '1000'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`py-3 px-4 border rounded-lg text-sm font-medium ${
                        amount === value
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-red-500'
                      }`}
                      onClick={() => {
                        setAmount(value);
                        setCustomAmount('');
                      }}
                    >
                      ${value}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
              </div>

              {/* Payment Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Process Donation
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Your donation is secure and encrypted. We never store your payment details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;