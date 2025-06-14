
import { motion } from "framer-motion";
import { ChevronDown, Info, Calculator, Heart, Scale, Apple, Users, AlertCircle, Target } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const BmiCollapsible = () => {
  return (
    <motion.div 
      className="mb-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding BMI in Tanzania</h2>
      
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-left">What is Body Mass Index (BMI)?</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">
              Body Mass Index (BMI) is a simple measurement that uses your height and weight to determine if you're in a healthy weight range. It's widely used by healthcare professionals in Tanzania and globally as a screening tool.
            </p>
            <p className="mb-3">
              BMI helps identify potential weight-related health risks. While it doesn't directly measure body fat, it provides a useful indicator for most adults aged 18-65 years.
            </p>
            <p>
              Understanding your BMI is particularly important in Tanzania where lifestyle diseases like diabetes and hypertension are becoming more common in urban areas.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Calculator className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">BMI Categories and Health Risks</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">BMI categories and their associated health risks:</p>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between p-2 bg-blue-50 rounded">
                <span><strong>Underweight:</strong> Below 18.5</span>
                <span className="text-blue-600">May indicate malnutrition</span>
              </div>
              <div className="flex justify-between p-2 bg-green-50 rounded">
                <span><strong>Normal weight:</strong> 18.5 - 24.9</span>
                <span className="text-green-600">Optimal health range</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-50 rounded">
                <span><strong>Overweight:</strong> 25.0 - 29.9</span>
                <span className="text-yellow-600">Increased disease risk</span>
              </div>
              <div className="flex justify-between p-2 bg-red-50 rounded">
                <span><strong>Obese:</strong> 30.0 and above</span>
                <span className="text-red-600">High disease risk</span>
              </div>
            </div>
            <p className="text-sm font-medium text-blue-600">
              In Tanzania, maintaining a healthy BMI helps prevent common health issues like diabetes, high blood pressure, and heart disease.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-red-600" />
            <span className="font-medium text-left">Health Implications for Tanzanians</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Common Health Risks by BMI Category:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Underweight:</strong> Increased risk of infections, osteoporosis, and fertility issues</li>
              <li><strong>Overweight:</strong> Higher risk of type 2 diabetes, high blood pressure, and sleep apnea</li>
              <li><strong>Obesity:</strong> Significantly increased risk of heart disease, stroke, certain cancers, and joint problems</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Specific Concerns in Tanzania:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>Rising diabetes rates in urban areas like Dar es Salaam and Arusha</li>
              <li>Hypertension becoming more common with lifestyle changes</li>
              <li>Increased fast food consumption affecting traditional healthy diets</li>
              <li>Reduced physical activity in city environments</li>
            </ul>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">
                <strong>Important:</strong> If your BMI indicates health risks, consult healthcare providers at hospitals like Muhimbili, Kilimanjaro Christian Medical Centre, or local health centers.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Apple className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">Healthy Weight Management with Tanzanian Foods</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Traditional Healthy Foods:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li><strong>Vegetables:</strong> Spinach (mchicha), okra (bamia), pumpkin leaves (majani ya malenge)</li>
              <li><strong>Fruits:</strong> Mangoes, bananas, oranges, watermelon, papaya</li>
              <li><strong>Proteins:</strong> Fish from Lake Victoria/Tanganyika, beans (maharagwe), groundnuts</li>
              <li><strong>Grains:</strong> Brown rice, whole grain ugali, millet (ulezi)</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Foods to Limit:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>Excessive white ugali and white rice</li>
              <li>Fried foods like kaanga and sambusa</li>
              <li>Sugary drinks and excessive chai with sugar</li>
              <li>Processed snacks and fast foods</li>
            </ul>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>Tip:</strong> Combine traditional foods with regular exercise like walking, dancing to Bongo Flava, or playing football to maintain a healthy weight.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-left">Setting Realistic Weight Goals</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Safe Weight Loss Guidelines:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Aim to lose 0.5-1 kg per week for sustainable results</li>
              <li>Reduce daily calories by 500-750 through diet and exercise</li>
              <li>Focus on long-term lifestyle changes, not quick fixes</li>
              <li>Track progress monthly rather than daily weighing</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Healthy Weight Gain (for underweight individuals):</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Add healthy calories with nuts, avocados, and healthy oils</li>
              <li>Eat frequent, smaller meals throughout the day</li>
              <li>Include protein-rich foods like fish, eggs, and legumes</li>
              <li>Consider strength training to build muscle mass</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Remember:</strong> Consult healthcare professionals before starting any weight management program, especially if you have existing health conditions.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <span className="font-medium text-left">BMI Limitations and When to Seek Help</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">BMI May Not Be Accurate For:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Athletes and very muscular individuals</li>
              <li>Pregnant and breastfeeding women</li>
              <li>Children and adolescents under 18</li>
              <li>Adults over 65 years</li>
              <li>People with certain medical conditions</li>
            </ul>
            
            <h4 className="font-semibold mb-2">When to Consult Healthcare Providers:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>BMI consistently outside normal range</li>
              <li>Sudden unexplained weight changes</li>
              <li>Symptoms like fatigue, breathing problems, or joint pain</li>
              <li>Family history of diabetes, heart disease, or obesity</li>
              <li>Difficulty losing or gaining weight despite efforts</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Healthcare Resources in Tanzania:</h4>
            <p className="text-sm mb-3">
              Visit local health centers, district hospitals, or major hospitals like Muhimbili National Hospital (Dar es Salaam), 
              Kilimanjaro Christian Medical Centre (Moshi), or Bugando Medical Centre (Mwanza) for professional health assessments.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> BMI is just one tool. A complete health assessment includes blood pressure, blood sugar, cholesterol levels, and overall fitness.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

export default BmiCollapsible;
