
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  calculateAPS,
  getAPSRange,
  getStandardAPSPoints,
  getUniversityAPSPoints,
  homeLanguages,
  firstAdditionalLanguages,
  mathematicsTypes,
  electiveSubjects,
  APSCalculationType,
  APSCalculation
} from "../utils/apsCalculator";

const APSCalculator = () => {
  const [calculationType, setCalculationType] = useState<APSCalculationType>("standard");
  const [homeLanguage, setHomeLanguage] = useState("");
  const [homeLanguageMark, setHomeLanguageMark] = useState("");
  const [fal, setFal] = useState("");
  const [falMark, setFalMark] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [mathematicsMark, setMathematicsMark] = useState("");
  const [elective1, setElective1] = useState("");
  const [elective1Mark, setElective1Mark] = useState("");
  const [elective2, setElective2] = useState("");
  const [elective2Mark, setElective2Mark] = useState("");
  const [elective3, setElective3] = useState("");
  const [elective3Mark, setElective3Mark] = useState("");
  const [lifeOrientationMark, setLifeOrientationMark] = useState("");
  const [includeLO, setIncludeLO] = useState(true);
  
  // Calculate APS if all required fields are filled
  const allRequiredFieldsFilled = homeLanguage && homeLanguageMark && fal && falMark && 
    mathematics && mathematicsMark && elective1 && elective1Mark && 
    elective2 && elective2Mark && elective3 && elective3Mark &&
    (!includeLO || lifeOrientationMark);
  
  const apsResult: APSCalculation | null = allRequiredFieldsFilled ? calculateAPS(
    [
      { name: homeLanguage, mark: parseInt(homeLanguageMark) },
      { name: fal, mark: parseInt(falMark) },
      { name: mathematics, mark: parseInt(mathematicsMark) },
      { name: elective1, mark: parseInt(elective1Mark) },
      { name: elective2, mark: parseInt(elective2Mark) },
      { name: elective3, mark: parseInt(elective3Mark) }
    ],
    includeLO,
    parseInt(lifeOrientationMark) || 0,
    calculationType
  ) : null;

  const getMarkOptions = (type: APSCalculationType) => {
    if (type === "standard") {
      return [
        { value: "95", label: "90-100% (8 points)" },
        { value: "85", label: "80-89% (7 points)" },
        { value: "75", label: "70-79% (6 points)" },
        { value: "65", label: "60-69% (5 points)" },
        { value: "55", label: "50-59% (4 points)" },
        { value: "45", label: "40-49% (3 points)" },
        { value: "35", label: "30-39% (2 points)" },
        { value: "25", label: "0-29% (1 point)" }
      ];
    } else {
      return [
        { value: "85", label: "80-100% (7 points)" },
        { value: "75", label: "70-79% (6 points)" },
        { value: "65", label: "60-69% (5 points)" },
        { value: "55", label: "50-59% (4 points)" },
        { value: "45", label: "40-49% (3 points)" },
        { value: "35", label: "30-39% (2 points)" },
        { value: "25", label: "0-29% (1 point)" }
      ];
    }
  };

  const markOptions = getMarkOptions(calculationType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Calculator Type Selection */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">
          APS Calculation Type
        </Label>
        <div className="flex gap-2">
          <Button
            variant={calculationType === "standard" ? "default" : "outline"}
            onClick={() => setCalculationType("standard")}
            size="sm"
            className="flex-1 text-sm"
          >
            Standard (8-point scale)
          </Button>
          <Button
            variant={calculationType === "university" ? "default" : "outline"}
            onClick={() => setCalculationType("university")}
            size="sm"
            className="flex-1 text-sm"
          >
            Some Universities (7-point scale)
          </Button>
        </div>
      </div>

      {/* Home Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Home Language</Label>
          <Select value={homeLanguage} onValueChange={setHomeLanguage}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Home Language" />
            </SelectTrigger>
            <SelectContent>
              {homeLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mark</Label>
          <Select value={homeLanguageMark} onValueChange={setHomeLanguageMark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* First Additional Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">First Additional Language</Label>
          <Select value={fal} onValueChange={setFal}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select First Additional Language" />
            </SelectTrigger>
            <SelectContent>
              {firstAdditionalLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mark</Label>
          <Select value={falMark} onValueChange={setFalMark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mathematics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mathematics Type</Label>
          <Select value={mathematics} onValueChange={setMathematics}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mathematics Type" />
            </SelectTrigger>
            <SelectContent>
              {mathematicsTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mark</Label>
          <Select value={mathematicsMark} onValueChange={setMathematicsMark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Elective Subject 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Elective Subject 1</Label>
          <Select value={elective1} onValueChange={setElective1}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {electiveSubjects.map((subject) => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mark</Label>
          <Select value={elective1Mark} onValueChange={setElective1Mark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Elective Subject 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Elective Subject 2</Label>
          <Select value={elective2} onValueChange={setElective2}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {electiveSubjects.map((subject) => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mark</Label>
          <Select value={elective2Mark} onValueChange={setElective2Mark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Elective Subject 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Elective Subject 3</Label>
          <Select value={elective3} onValueChange={setElective3}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {electiveSubjects.map((subject) => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Mark</Label>
          <Select value={elective3Mark} onValueChange={setElective3Mark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Life Orientation */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">Life Orientation (Optional for some universities)</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm text-gray-600 py-2">Life Orientation</div>
            </div>
            <div className="space-y-2">
              <Select value={lifeOrientationMark} onValueChange={setLifeOrientationMark}>
                <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
                  <SelectValue placeholder="Select Mark" />
                </SelectTrigger>
                <SelectContent>
                  {markOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includeLO"
              checked={includeLO}
              onChange={(e) => setIncludeLO(e.target.checked)}
              className="rounded border-gray-300"
            />
            <Label htmlFor="includeLO" className="text-sm text-gray-600">
              Include Life Orientation in APS calculation
            </Label>
          </div>
        </div>
      </div>

      {apsResult && (
        <>
          {/* APS Calculation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-white rounded border border-gray-100 p-4">
              <div className="text-center p-4 bg-primary/10 rounded border-2 border-primary mb-4">
                <div className="text-sm text-gray-500 mb-1">Total APS Score</div>
                <div className="text-2xl font-bold text-primary">{apsResult.totalAPS}</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700 mb-2">Subject Breakdown:</div>
                {apsResult.subjects.map((subject, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">{subject.name}</span>
                    <span className="text-sm font-medium text-gray-800">
                      {getAPSRange(subject.mark, calculationType)} ({subject.points} points)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your total APS score is {apsResult.totalAPS} points using the {calculationType === "standard" ? "standard 8-point" : "university-specific 7-point"} scale. 
              This calculation includes {apsResult.subjects.length} subjects{apsResult.includesLifeOrientation ? ", including Life Orientation" : ""}. 
              Different universities have varying APS requirements, so check your preferred university's specific admission requirements.
            </p>
          </div>
        </>
      )}

      {/* Points Scale Table */}
      <div className="bg-white rounded border border-gray-100 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          APS Points Scale ({calculationType === "standard" ? "Standard" : "Some Universities"})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Percentage Range</th>
                <th className="text-left py-2 px-3 font-medium text-gray-700">Points Awarded</th>
              </tr>
            </thead>
            <tbody>
              {calculationType === "standard" ? (
                <>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">90-100%</td>
                    <td className="py-2 px-3">8 points</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">80-89%</td>
                    <td className="py-2 px-3">7 points</td>
                  </tr>
                </>
              ) : (
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3">80-100%</td>
                  <td className="py-2 px-3">7 points</td>
                </tr>
              )}
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">70-79%</td>
                <td className="py-2 px-3">6 points</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">60-69%</td>
                <td className="py-2 px-3">5 points</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">50-59%</td>
                <td className="py-2 px-3">4 points</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">40-49%</td>
                <td className="py-2 px-3">3 points</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3">30-39%</td>
                <td className="py-2 px-3">2 points</td>
              </tr>
              <tr>
                <td className="py-2 px-3">0-29%</td>
                <td className="py-2 px-3">1 point</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default APSCalculator;
