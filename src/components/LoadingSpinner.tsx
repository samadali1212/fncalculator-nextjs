import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Main Spinner Container */}
      <div className="relative mb-6">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-blue-600"></div>
        
        {/* Inner Pulsing Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
        
        {/* Orbital Dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-gray-200 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 animate-pulse">
          Checking TMS Database
        </h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Searching for traffic violations and pending fines...
        </p>
        <p className="text-gray-500 text-xs">
          This usually takes 3-5 seconds
        </p>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-1 mt-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
