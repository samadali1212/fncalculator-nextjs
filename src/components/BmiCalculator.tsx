import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface BmiCalculatorProps {
  unit: "metric" | "imperial";
  onUnitChange: (value: string) => void;
}

const BmiCalculator = ({ unit, onUnitChange }: BmiCalculatorProps) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    description: string;
  } | null>(null);

  // Format number with thousand separators (keeping consistency with other calculators)
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    return numericValue;
  };

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      return;
    }

    let bmi: number;
    
    if (unit === "metric") {
      // BMI = weight (kg) / (height (m))^2
      const heightInMeters = heightNum / 100; // convert cm to meters
      bmi = weightNum / (heightInMeters * heightInMeters);
    } else {
      // BMI = (weight (lbs) / (height (inches))^2) * 703
      bmi = (weightNum / (heightNum * heightNum)) * 703;
    }

    let category: string;
    let description: string;

    if (bmi < 18.5) {
      category = "Underweight";
      description = "Below normal weight range";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
      description = "Healthy weight range";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      description = "Above normal weight range";
    } else {
      category = "Obese";
      description = "Significantly above normal weight range";
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      description
    });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setHeight(value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setWeight(value);
  };

  const handleUnitChangeInternal = (value: string) => {
    if (value === "metric" || value === "imperial") {
      setHeight("");
      setWeight("");
      setResult(null);
      onUnitChange(value);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "text-blue-600";
      case "Normal weight":
        return "text-green-600";
      case "Overweight":
        return "text-yellow-600";
      case "Obese":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Unit Selection */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <Button
            variant={unit === "metric" ? "default" : "outline"}
            onClick={() => handleUnitChangeInternal("metric")}
            size="sm"
            className="flex-1 text-sm"
          >
            Metric
          </Button>
          <Button
            variant={unit === "imperial" ? "default" : "outline"}
            onClick={() => handleUnitChangeInternal("imperial")}
            size="sm"
            className="flex-1 text-sm"
          >
            Imperial
          </Button>
        </div>
      </div>

      {/* Height Input */}
      <div className="space-y-2">
        <Label htmlFor="height" className="text-sm font-medium text-gray-700">
          Height ({unit === "metric" ? "cm" : "inches"})
        </Label>
        <Input
          id="height"
          type="text"
          placeholder={unit === "metric" ? "170" : "68"}
          value={height}
          onChange={handleHeightChange}
          className="h-10 border-gray-300 focus:border-primary"
        />
      </div>

      {/* Weight Input */}
      <div className="space-y-2">
        <Label htmlFor="weight" className="text-sm font-medium text-gray-700">
          Weight ({unit === "metric" ? "kg" : "lbs"})
        </Label>
        <Input
          id="weight"
          type="text"
          placeholder={unit === "metric" ? "70" : "154"}
          value={weight}
          onChange={handleWeightChange}
          className="h-10 border-gray-300 focus:border-primary"
        />
      </div>

      {/* Calculate Button */}
      <Button 
        onClick={calculateBMI}
        className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-2"
        disabled={!height || !weight}
      >
        Calculate BMI
      </Button>

      {result && (
        <>
          {/* BMI Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">BMI Score</div>
                <div className="font-semibold text-sm text-gray-800">{result.bmi}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">Category</div>
                <div className={`font-semibold text-sm ${getCategoryColor(result.category)}`}>{result.category}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Status</div>
                <div className="font-semibold text-sm text-gray-800">{result.description}</div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your BMI of {result.bmi} indicates that you are in the {result.category.toLowerCase()} category. 
              {result.category === "Normal weight" 
                ? " Keep up the good work maintaining a healthy lifestyle!"
                : " Consider consulting with a healthcare professional for personalized advice."
              }
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default BmiCalculator;
