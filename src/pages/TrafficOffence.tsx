
import React from 'react';
import { motion } from "framer-motion";
import OffenceChecker from '../components/OffenceChecker';

const TrafficOffence = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Tanzania Traffic Offence Checker
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Check your vehicle registration, driving license, or reference number for pending offences.
          </p>
        </div>

        <OffenceChecker />

        {/* Simplified Disclaimer */}
        <div className="mt-8">
          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Independent service - not affiliated with Tanzania Police Force or government agencies.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrafficOffence;
