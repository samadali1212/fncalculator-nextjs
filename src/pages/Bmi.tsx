
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import AdSense from "@/components/AdSense";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    description: string;
  } | null>(null);

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

  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit);
    setHeight("");
    setWeight("");
    setResult(null);
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
    <>
      <Helmet>
        <title>BMI Calculator - Body Mass Index Calculator | Deni La Gari</title>
        <meta name="description" content="Free BMI calculator to check your Body Mass Index. Calculate BMI using metric or imperial units and understand your weight category." />
        <meta name="keywords" content="BMI calculator, body mass index, weight calculator, health calculator, fitness calculator" />
        <link rel="canonical" href="https://denilagari.com/bmi" />
      </Helmet>

      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                BMI Calculator
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Calculate your Body Mass Index (BMI) to understand your weight category and maintain a healthy lifestyle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Calculate Your BMI
                    </CardTitle>
                    <CardDescription>
                      Enter your height and weight to calculate your BMI
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Unit Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Units</Label>
                      <div className="flex gap-2">
                        <Button
                          variant={unit === "metric" ? "default" : "outline"}
                          onClick={() => handleUnitChange("metric")}
                          size="sm"
                          className="flex-1 text-sm"
                        >
                          Metric
                        </Button>
                        <Button
                          variant={unit === "imperial" ? "default" : "outline"}
                          onClick={() => handleUnitChange("imperial")}
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
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white shadow-lg h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Your BMI Result
                    </CardTitle>
                    <CardDescription>
                      Your body mass index and weight category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {result ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-3xl font-bold text-gray-900 mb-2">
                            {result.bmi}
                          </div>
                          <div className="text-sm text-gray-500">BMI Score</div>
                        </div>
                        
                        <div className="text-center">
                          <div className={`text-xl font-semibold mb-2 ${getCategoryColor(result.category)}`}>
                            {result.category}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.description}
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 mt-4 p-3 bg-blue-50 rounded-lg">
                          <strong>BMI Categories:</strong><br />
                          • Underweight: Below 18.5<br />
                          • Normal weight: 18.5-24.9<br />
                          • Overweight: 25-29.9<br />
                          • Obese: 30 and above
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <p>Enter your height and weight to calculate your BMI</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* AdSense */}
            <div className="mt-12">
              <AdSense 
                slot="1234567890"
                format="auto"
                responsive={true}
              />
            </div>

            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    About BMI Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-gray-600 mb-4">
                    Body Mass Index (BMI) is a measure of body fat based on height and weight. It's a screening tool 
                    to identify whether an adult is underweight, normal weight, overweight, or obese.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How BMI is Calculated</h3>
                  <ul className="text-gray-600 mb-4 list-disc pl-5">
                    <li><strong>Metric:</strong> BMI = weight (kg) ÷ [height (m)]²</li>
                    <li><strong>Imperial:</strong> BMI = [weight (lbs) ÷ height (inches)²] × 703</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Limitations</h3>
                  <p className="text-gray-600">
                    BMI is a useful screening tool but has limitations. It doesn't distinguish between muscle and fat, 
                    and may not be accurate for athletes, elderly, or pregnant women. Always consult healthcare 
                    professionals for personalized advice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Bmi;
