
import React from 'react';
import OffenceChecker from '../components/OffenceChecker';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tanzania Traffic Offence Checker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check your vehicle registration, driving license, or reference number for any pending offences
            with the Tanzania Transport Management System.
          </p>
        </div>
        <OffenceChecker />
      </div>
    </div>
  );
};

export default TrafficOffence;
