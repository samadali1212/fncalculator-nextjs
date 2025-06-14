
import { motion } from "framer-motion";
import { ChevronDown, Info, Calendar, Heart, Baby, Apple, Users, AlertCircle, Target } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const OvulationCollapsible = () => {
  return (
    <motion.div 
      className="mb-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fertility and Ovulation Guide for Tanzania</h2>
      
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-left">Understanding Ovulation and Your Cycle</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">
              Ovulation is when your ovary releases a mature egg, which can be fertilized by sperm for 12-24 hours. 
              This usually happens about 14 days before your next period, regardless of your cycle length.
            </p>
            <p className="mb-3">
              Your fertile window includes the 5 days before ovulation plus the day of ovulation itself, because sperm can survive in your body for up to 5 days.
            </p>
            <p>
              Understanding your cycle helps with family planning, whether you're trying to conceive or avoid pregnancy. 
              This knowledge empowers Tanzanian women to make informed reproductive health decisions.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">Signs of Ovulation and Fertility</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Physical Signs of Ovulation:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Changes in cervical mucus (becomes clear, stretchy, like egg white)</li>
              <li>Slight increase in basal body temperature</li>
              <li>Mild pelvic or abdominal pain on one side</li>
              <li>Breast tenderness</li>
              <li>Increased sex drive</li>
              <li>Light spotting in some women</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Tracking Methods:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li><strong>Calendar Method:</strong> Track your periods for several months</li>
              <li><strong>Basal Body Temperature:</strong> Take temperature daily upon waking</li>
              <li><strong>Cervical Mucus:</strong> Monitor daily changes in vaginal discharge</li>
              <li><strong>Ovulation Predictor Kits:</strong> Available at pharmacies in major Tanzanian cities</li>
            </ul>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>Natural Family Planning:</strong> These methods can be used for both achieving and avoiding pregnancy when practiced correctly.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-red-600" />
            <span className="font-medium text-left">Optimizing Fertility and Conception</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Best Times for Conception:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Have intercourse every 1-2 days during your fertile window</li>
              <li>Most fertile days are 2-3 days before ovulation</li>
              <li>Continue through 1 day after ovulation</li>
              <li>Don't wait for ovulation day itself - earlier is often better</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Factors That Support Fertility:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Maintain healthy weight and regular exercise</li>
              <li>Eat nutritious foods rich in folic acid, iron, and vitamins</li>
              <li>Avoid smoking and excessive alcohol</li>
              <li>Manage stress through relaxation and adequate sleep</li>
              <li>Take folic acid supplements (400mcg daily)</li>
            </ul>
            
            <h4 className="font-semibold mb-2">When to Seek Help:</h4>
            <p className="text-sm mb-3">
              Consult a healthcare provider if you've been trying to conceive for:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>12 months if you're under 35 years old</li>
              <li>6 months if you're 35 years or older</li>
              <li>Immediately if you have irregular periods or known health conditions</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Healthcare Access:</strong> Fertility services are available at Muhimbili National Hospital, regional hospitals, and private clinics in major Tanzanian cities.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Apple className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">Nutrition for Reproductive Health</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Fertility-Boosting Foods Available in Tanzania:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li><strong>Folate Sources:</strong> Dark leafy greens (mchicha), beans, oranges, avocados</li>
              <li><strong>Iron-Rich Foods:</strong> Lean meat, fish, beans (maharagwe), groundnuts</li>
              <li><strong>Healthy Fats:</strong> Avocados, nuts, seeds, fish from Lake Victoria</li>
              <li><strong>Antioxidants:</strong> Colorful fruits and vegetables, tomatoes, carrots</li>
              <li><strong>Whole Grains:</strong> Brown rice, whole wheat, traditional grains</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Foods to Limit:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Processed foods and excessive sugar</li>
              <li>Too much caffeine (limit tea and coffee)</li>
              <li>Alcohol - avoid when trying to conceive</li>
              <li>High-mercury fish</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Traditional Tanzanian Foods for Health:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>Ugali with vegetables and lean protein</li>
              <li>Fresh tropical fruits like mangoes, papayas</li>
              <li>Local fish prepared with minimal processing</li>
              <li>Traditional vegetables and herbs</li>
            </ul>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>Supplement Tip:</strong> Folic acid supplements are available at pharmacies and health centers. Start taking them when planning to conceive.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <span className="font-medium text-left">Common Cycle Issues and When to Seek Help</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Normal Cycle Variations:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Cycle length: 21-35 days is normal</li>
              <li>Period duration: 3-7 days</li>
              <li>Some month-to-month variation is normal</li>
              <li>Cycles may be irregular when starting menstruation or approaching menopause</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Signs to Consult a Healthcare Provider:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Periods consistently shorter than 21 days or longer than 35 days</li>
              <li>Missing periods (not due to pregnancy)</li>
              <li>Extremely heavy or prolonged bleeding</li>
              <li>Severe menstrual pain that interferes with daily activities</li>
              <li>Bleeding between periods</li>
              <li>Sudden changes in your usual cycle pattern</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Common Conditions Affecting Fertility:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li><strong>PCOS:</strong> Irregular periods, excess hair growth, weight gain</li>
              <li><strong>Endometriosis:</strong> Painful periods, pelvic pain</li>
              <li><strong>Thyroid disorders:</strong> Can affect cycle regularity</li>
              <li><strong>Stress and weight changes:</strong> Can temporarily disrupt cycles</li>
            </ul>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <p className="text-sm text-orange-800">
                <strong>Healthcare Access:</strong> Reproductive health services are available at government health centers and hospitals throughout Tanzania. Don't hesitate to seek help for cycle concerns.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-left">Family Planning and Reproductive Rights in Tanzania</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <h4 className="font-semibold mb-2">Family Planning Services:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Free contraceptive services at government health facilities</li>
              <li>Various contraceptive methods available (pills, injections, IUDs, implants)</li>
              <li>Family planning counseling and education</li>
              <li>Preconception counseling for those planning pregnancy</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Natural Family Planning Methods:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>Calendar/rhythm method</li>
              <li>Basal body temperature tracking</li>
              <li>Cervical mucus monitoring</li>
              <li>Lactational amenorrhea (for breastfeeding mothers)</li>
            </ul>
            
            <h4 className="font-semibold mb-2">Your Reproductive Rights:</h4>
            <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
              <li>Right to choose if and when to have children</li>
              <li>Access to family planning information and services</li>
              <li>Right to make informed decisions about your reproductive health</li>
              <li>Access to quality maternal and reproductive healthcare</li>
            </ul>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="text-sm text-purple-800">
                <strong>Community Support:</strong> Many communities have women's groups and health education programs. Marie Stopes and other organizations provide additional family planning services throughout Tanzania.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

export default OvulationCollapsible;
