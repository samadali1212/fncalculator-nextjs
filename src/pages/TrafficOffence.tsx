
import React from 'react';
import { motion } from "framer-motion";
import OffenceChecker from '../components/OffenceChecker';

const TrafficOffence = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Tanzania Traffic Offence Checker
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check your vehicle registration, driving license, or reference number for any pending offences
            with the Tanzania Transport Management System.
          </p>
        </div>

        <OffenceChecker />

        {/* Disclaimer Section */}
        <div className="mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 mb-1">Important Disclaimer</h3>
                <p className="text-sm text-yellow-700">
                  This website is not affiliated with the Tanzania Police Force or any government agency. 
                  We are an independent service that helps users check for pending traffic offences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-8 bg-white mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default TrafficOffence;
