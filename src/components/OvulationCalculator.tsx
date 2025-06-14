
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";

const OvulationCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [result, setResult] = useState<{
    ovulationDate: string;
    fertileWindowStart: string;
    fertileWindowEnd: string;
    nextPeriodDate: string;
    daysUntilOvulation: number;
    currentPhase: string;
  } | null>(null);

  const calculateOvulation = () => {
    if (!lastPeriodDate || !cycleLength) return;

    const lastPeriod = new Date(lastPeriodDate);
    const cycleDays = parseInt(cycleLength);
    const today = new Date();

    // Calculate ovulation date (typically 14 days before next period)
    const ovulationDay = cycleDays - 14;
    const ovulationDate = new Date(lastPeriod.getTime() + (ovulationDay * 24 * 60 * 60 * 1000));

    // Calculate fertile window (5 days before ovulation + ovulation day + 1 day after)
    const fertileWindowStart = new Date(ovulationDate.getTime() - (5 * 24 * 60 * 60 * 1000));
    const fertileWindowEnd = new Date(ovulationDate.getTime() + (1 * 24 * 60 * 60 * 1000));

    // Calculate next period date
    const nextPeriodDate = new Date(lastPeriod.getTime() + (cycleDays * 24 * 60 * 60 * 1000));

    // Calculate days until ovulation
    const daysUntilOvulation = Math.ceil((ovulationDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

    // Determine current cycle phase
    const daysSinceLastPeriod = Math.floor((today.getTime() - lastPeriod.getTime()) / (24 * 60 * 60 * 1000));
    let currentPhase: string;
    
    if (daysSinceLastPeriod < 0) {
      currentPhase = "Future cycle";
    } else if (daysSinceLastPeriod <= 5) {
      currentPhase = "Menstrual Phase";
    } else if (daysSinceLastPeriod < ovulationDay - 1) {
      currentPhase = "Follicular Phase";
    } else if (daysSinceLastPeriod >= ovulationDay - 1 && daysSinceLastPeriod <= ovulationDay + 1) {
      currentPhase = "Ovulation Phase";
    } else if (daysSinceLastPeriod < cycleDays) {
      currentPhase = "Luteal Phase";
    } else {
      currentPhase = "Next cycle due";
    }

    setResult({
      ovulationDate: ovulationDate.toLocaleDateString('en-GB'),
      fertileWindowStart: fertileWindowStart.toLocaleDateString('en-GB'),
      fertileWindowEnd: fertileWindowEnd.toLocaleDateString('en-GB'),
      nextPeriodDate: nextPeriodDate.toLocaleDateString('en-GB'),
      daysUntilOvulation: Math.max(0, daysUntilOvulation),
      currentPhase
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lastPeriod" className="text-sm font-medium text-gray-700">
            First day of last period
          </Label>
          <Input
            id="lastPeriod"
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="h-10 border-gray-300 focus:border-primary"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cycleLength" className="text-sm font-medium text-gray-700">
            Cycle length (days)
          </Label>
          <Input
            id="cycleLength"
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            className="h-10 border-gray-300 focus:border-primary"
            min="21"
            max="35"
            placeholder="28"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <Button 
        onClick={calculateOvulation}
        className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-2"
        disabled={!lastPeriodDate || !cycleLength}
      >
        <Calendar className="h-4 w-4 mr-2" />
        Calculate Ovulation
      </Button>

      {result && (
        <>
          {/* Ovulation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">Ovulation Date</div>
                <div className="font-semibold text-sm text-primary">{result.ovulationDate}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Days Until Ovulation</div>
                <div className="font-semibold text-sm text-gray-800">{result.daysUntilOvulation}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                <div className="text-xs text-green-600 mb-1">Fertile Window Start</div>
                <div className="font-semibold text-sm text-green-700">{result.fertileWindowStart}</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                <div className="text-xs text-green-600 mb-1">Fertile Window End</div>
                <div className="font-semibold text-sm text-green-700">{result.fertileWindowEnd}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-center p-3 bg-blue-50 rounded border border-blue-200">
                <div className="text-xs text-blue-600 mb-1">Next Period Expected</div>
                <div className="font-semibold text-sm text-blue-700">{result.nextPeriodDate}</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                <div className="text-xs text-purple-600 mb-1">Current Phase</div>
                <div className="font-semibold text-sm text-purple-700">{result.currentPhase}</div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Based on your cycle, your most fertile days are from {result.fertileWindowStart} to {result.fertileWindowEnd}. 
              You are currently in the {result.currentPhase.toLowerCase()}. 
              {result.daysUntilOvulation > 0 
                ? ` Ovulation is expected in ${result.daysUntilOvulation} days.`
                : " You may be ovulating now or have recently ovulated."
              } Your next period is expected around {result.nextPeriodDate}.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default OvulationCalculator;
