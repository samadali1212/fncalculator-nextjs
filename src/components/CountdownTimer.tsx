import { useEffect, useState } from 'react';
import { getSouthAfricaTime } from '../utils/timeUtils';

interface CountdownTimerProps {
  targetDate: string;
  targetTime?: string;
  onComplete?: () => void;
}

const CountdownTimer = ({ targetDate, targetTime = "00:00", onComplete }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Use South Africa time instead of local time
      const now = getSouthAfricaTime();
      const [targetHours, targetMinutes] = targetTime.split(':').map(Number);
      const target = new Date(targetDate);
      target.setHours(targetHours || 0, targetMinutes || 0, 0, 0);

      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setIsComplete(true);
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeRemaining(calculateTimeRemaining());

    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, targetTime, onComplete]);

  return (
    <div className="w-full">
      {isComplete ? (
        <div className="text-center p-3 bg-red-50 rounded-md border border-red-100">
          <span className="text-sm font-medium text-red-800">Event has already taken place</span>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md border border-gray-200">
            <span className="text-lg font-semibold text-gray-900">{timeRemaining.days}</span>
            <span className="text-xs text-gray-600 mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md border border-gray-200">
            <span className="text-lg font-semibold text-gray-900">{timeRemaining.hours}</span>
            <span className="text-xs text-gray-600 mt-1">Hours</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md border border-gray-200">
            <span className="text-lg font-semibold text-gray-900">{timeRemaining.minutes}</span>
            <span className="text-xs text-gray-600 mt-1">Minutes</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md border border-gray-200">
            <span className="text-lg font-semibold text-gray-900">{timeRemaining.seconds}</span>
            <span className="text-xs text-gray-600 mt-1">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
