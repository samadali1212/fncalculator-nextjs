
import { motion } from "framer-motion";
import { ChevronDown, Info, Calendar, Heart, Baby, Apple, Users, AlertCircle, Target } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const EddCollapsible = () => {
  return (
    <motion.div 
      className="mb-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pregnancy Guide for Tanzania</h2>
      
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-left">Understanding Your Expected Due Date (EDD)</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">
              Expected Due Date (EDD) is an estimate of when your baby will be born, calculated as 280 days (40 weeks) from your last menstrual period. This calculation is used worldwide, including in Tanzanian hospitals and clinics.
            </p>
            <p className="mb-3">
              Only about 5% of babies are born exactly on their due date. Most babies arrive between 37-42 weeks of pregnancy, which is considered full-term and safe for delivery.
            </p>
            <p>
              In Tanzania, understanding your EDD helps you plan for delivery at health facilities like Muhimbili National Hospital, regional hospitals, or health centers with skilled birth attendants.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">Pregnancy Trimesters and Milestones</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Pregnancy Timeline:</h4>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between p-2 bg-blue-50 rounded">
                <span><strong>First Trimester:</strong> Weeks 1-12</span>
                <span className="text-blue-600">Early development</span>
              </div>
              <div className="flex justify-between p-2 bg-green-50 rounded">
                <span><strong>Second Trimester:</strong> Weeks 13-26</span>
                <span className="text-green-600">Most comfortable period</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-50 rounded">
                <span><strong>Third Trimester:</strong> Weeks 27-40</span>
                <span className="text-yellow-600">Prepare for delivery</span>
              </div>
            </div>
            <p className="text-sm font-medium text-blue-600">
              Regular antenatal visits at your local health center help monitor your baby's growth and ensure a healthy pregnancy.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-red-600" />
            <span className="font-medium text-left">Antenatal Care in Tanzania</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Recommended Antenatal Visits:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li><strong>First visit:</strong> As soon as pregnancy is confirmed (before 12 weeks)</li>
              <li><strong>Second visit:</strong> 20-24 weeks (anatomy scan period)</li>
              <li><strong>Third visit:</strong> 28-32 weeks</li>
              <li><strong>Fourth visit:</strong> 36 weeks onwards (weekly until delivery)</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Essential Tests and Interventions:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>HIV testing and prevention of mother-to-child transmission</li>
              <li>Malaria prevention (IPTp) - especially important in Tanzania</li>
              <li>Iron and folic acid supplementation</li>
              <li>Tetanus vaccination</li>
              <li>Blood pressure and weight monitoring</li>
            </ul>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">
                <strong>Free Services:</strong> Antenatal care is free at government health facilities in Tanzania. Take advantage of these services for a healthy pregnancy.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Apple className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">Nutrition During Pregnancy with Local Foods</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Essential Nutrients and Tanzanian Sources:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li><strong>Iron:</strong> Spinach (mchicha), liver, beans (maharagwe), groundnuts</li>
              <li><strong>Folic Acid:</strong> Dark green vegetables, oranges, avocados</li>
              <li><strong>Calcium:</strong> Milk, small fish with bones (dagaa), sesame seeds</li>
              <li><strong>Protein:</strong> Fish, chicken, eggs, beans, groundnuts</li>
              <li><strong>Vitamins:</strong> Mangoes, oranges, carrots, sweet potatoes</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Foods to Avoid:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>Raw or undercooked fish and meat</li>
              <li>Unpasteurized dairy products</li>
              <li>Excessive caffeine (limit tea and coffee)</li>
              <li>Alcohol completely</li>
              <li>Unwashed fruits and vegetables</li>
            </ul>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>Local Tip:</strong> Traditional foods like ugali with fish and vegetables provide excellent nutrition. Ensure variety and proper cooking for food safety.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Baby className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-left">Preparing for Delivery in Tanzania</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Birth Preparedness:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Choose a health facility with skilled birth attendants</li>
              <li>Prepare transportation to the facility</li>
              <li>Save money for any emergency expenses</li>
              <li>Pack a delivery bag by 36 weeks</li>
              <li>Identify a birth companion</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Delivery Bag Essentials:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Clean clothes for mother and baby</li>
              <li>Sanitary pads</li>
              <li>Baby blankets and clothes</li>
              <li>Antenatal card and identification</li>
              <li>Phone and charger for communication</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Warning Signs - Seek Immediate Help:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm text-red-600">
              <li>Heavy bleeding</li>
              <li>Severe headaches with vision changes</li>
              <li>Regular contractions before 37 weeks</li>
              <li>Baby not moving for several hours</li>
              <li>Water breaking before 37 weeks</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Emergency Numbers:</strong> Keep contact numbers for your health facility, ambulance services (like those in major cities), and family members readily available.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <span className="font-medium text-left">Common Pregnancy Concerns and When to Seek Help</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Normal Pregnancy Symptoms:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Morning sickness (especially first trimester)</li>
              <li>Fatigue and need for more rest</li>
              <li>Breast tenderness and changes</li>
              <li>Frequent urination</li>
              <li>Mild swelling of feet and hands</li>
            </ul>
            
            <h4 className="font-semibold mb-2">When to Contact Healthcare Provider:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>Persistent vomiting preventing eating or drinking</li>
              <li>Fever above 38°C (100.4°F)</li>
              <li>Severe abdominal pain</li>
              <li>Blurred vision or severe headaches</li>
              <li>Unusual vaginal discharge or itching</li>
              <li>Concerns about baby's movements</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Healthcare Access in Tanzania:</h4>
            <p className="text-sm mb-3">
              Use the nearest health center for routine care and referral hospitals (district, regional, or national) for complications. 
              Major hospitals include Muhimbili (Dar es Salaam), KCMC (Moshi), Bugando (Mwanza), and BMC (Arusha).
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                <strong>Community Support:</strong> Join mother support groups in your community. Traditional birth attendants can provide cultural support but skilled delivery at health facilities is safest.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

export default EddCollapsible;
