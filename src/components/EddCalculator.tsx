
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface EddCalculatorProps {
  calculationMethod: "lmp" | "conception";
  onMethodChange: (value: string) => void;
}

const EddCalculator = ({ calculationMethod, onMethodChange }: EddCalculatorProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [result, setResult] = useState<{
    edd: string;
    weeksPregnant: number;
    daysPregnant: number;
    trimester: string;
    daysRemaining: number;
  } | null>(null);

  const calculateEDD = () => {
    if (!selectedDate) return;

    const inputDate = new Date(selectedDate);
    const today = new Date();
    let eddDate: Date;
    
    if (calculationMethod === "lmp") {
      // Add 280 days (40 weeks) to LMP
      eddDate = new Date(inputDate.getTime() + (280 * 24 * 60 * 60 * 1000));
    } else {
      // Add 266 days (38 weeks) to conception date
      eddDate = new Date(inputDate.getTime() + (266 * 24 * 60 * 60 * 1000));
    }

    // Calculate current pregnancy progress
    const pregnancyStart = calculationMethod === "lmp" ? inputDate : new Date(inputDate.getTime() - (14 * 24 * 60 * 60 * 1000));
    const daysSinceStart = Math.floor((today.getTime() - pregnancyStart.getTime()) / (24 * 60 * 60 * 1000));
    const weeksPregnant = Math.floor(daysSinceStart / 7);
    const daysPregnant = daysSinceStart % 7;

    // Determine trimester
    let trimester: string;
    if (weeksPregnant < 12) {
      trimester = "First Trimester";
    } else if (weeksPregnant < 27) {
      trimester = "Second Trimester";
    } else {
      trimester = "Third Trimester";
    }

    // Calculate days remaining
    const daysRemaining = Math.ceil((eddDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

    setResult({
      edd: eddDate.toLocaleDateString('en-GB'),
      weeksPregnant: Math.max(0, weeksPregnant),
      daysPregnant: Math.max(0, daysPregnant),
      trimester,
      daysRemaining: Math.max(0, daysRemaining)
    });
  };

  const handleMethodChangeInternal = (value: string) => {
    if (value === "lmp" || value === "conception") {
      setSelectedDate("");
      setResult(null);
      onMethodChange(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Method Selection */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <Button
            variant={calculationMethod === "lmp" ? "default" : "outline"}
            onClick={() => handleMethodChangeInternal("lmp")}
            size="sm"
            className="flex-1 text-sm"
          >
            Last Menstrual Period
          </Button>
          <Button
            variant={calculationMethod === "conception" ? "default" : "outline"}
            onClick={() => handleMethodChangeInternal("conception")}
            size="sm"
            className="flex-1 text-sm"
          >
            Conception Date
          </Button>
        </div>
      </div>

      {/* Date Input */}
      <div className="space-y-2">
        <Label htmlFor="date" className="text-sm font-medium text-gray-700">
          {calculationMethod === "lmp" ? "First day of last menstrual period" : "Conception date"}
        </Label>
        <Input
          id="date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="h-10 border-gray-300 focus:border-primary"
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      {/* Calculate Button */}
      <Button 
        onClick={calculateEDD}
        className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-2"
        disabled={!selectedDate}
      >
        Calculate EDD
      </Button>

      {result && (
        <>
          {/* EDD Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">Expected Due Date</div>
                <div className="font-semibold text-sm text-primary">{result.edd}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Current Progress</div>
                <div className="font-semibold text-sm text-gray-800">{result.weeksPregnant}w {result.daysPregnant}d</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Days Remaining</div>
                <div className="font-semibold text-sm text-gray-800">{result.daysRemaining}</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Current Stage: </span>
                <span className="font-medium text-gray-800">{result.trimester}</span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              You are currently {result.weeksPregnant} weeks and {result.daysPregnant} days pregnant, in your {result.trimester.toLowerCase()}. 
              Your expected due date is {result.edd}, which is approximately {result.daysRemaining} days from today.
              {result.daysRemaining > 0 
                ? " Remember that babies can arrive 2 weeks before or after the due date."
                : " Your baby could arrive any day now!"
              }
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default EddCalculator;
