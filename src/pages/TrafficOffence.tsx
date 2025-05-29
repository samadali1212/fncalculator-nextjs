
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
      <main className="container mx-auto px-4 md:px-6 pb-16 max-w-4xl">
        <div className="bg-white p-6 rounded-sm shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Tanzania Traffic Offence Checker
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check your vehicle registration, driving license, or reference number for any pending offences
              with the Tanzania Transport Management System.
            </p>
          </div>
          <OffenceChecker />
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default TrafficOffence;
