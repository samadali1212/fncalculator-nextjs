import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
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
  const [isEventDay, setIsEventDay] = useState(false);
  const [confettiTriggered, setConfettiTriggered] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Use South Africa time instead of local time
      const now = getSouthAfricaTime();
      const [targetHours, targetMinutes] = targetTime.split(':').map(Number);
      const target = new Date(targetDate);
      target.setHours(targetHours || 0, targetMinutes || 0, 0, 0);

      // Check if we're on the same date as the event
      const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const targetDateOnly = new Date(target.getFullYear(), target.getMonth(), target.getDate());
      const isToday = nowDate.getTime() === targetDateOnly.getTime();

      const difference = target.getTime() - now.getTime();

      // If it's the day of the event
      if (isToday) {
        setIsEventDay(true);
        setIsComplete(false);
        
        // Trigger confetti only once when it becomes the event day
        if (!confettiTriggered) {
          triggerConfetti();
          setConfettiTriggered(true);
        }
        
        if (difference <= 0) {
          // Event time has passed today
          setIsComplete(true);
          onComplete?.();
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      } else {
        setIsEventDay(false);
        setConfettiTriggered(false); // Reset confetti trigger for next event day
        
        if (difference <= 0) {
          setIsComplete(true);
          onComplete?.();
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
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
  }, [targetDate, targetTime, onComplete, confettiTriggered]);

  return (
    <div className="w-full">
      {isComplete && !isEventDay ? (
        <div className="text-center p-3 bg-red-50 rounded-md border border-red-100">
          <span className="text-sm font-medium text-red-800">Event has already taken place</span>
        </div>
      ) : isEventDay && isComplete ? (
        <div className="text-center p-3 bg-green-50 rounded-md border border-green-100">
          <span className="text-sm font-medium text-green-800">🎉 It's the last day of the application! 🎉</span>
        </div>
      ) : isEventDay ? (
        <div className="space-y-2">
          <div className="text-center p-3 bg-blue-50 rounded-md border border-blue-100">
            <span className="text-sm font-medium text-blue-800">🎉 Today is the day! 🎉</span>
            <button
              onClick={triggerConfetti}
              className="ml-2 text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
            >
              More Confetti!
            </button>
          </div>
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
