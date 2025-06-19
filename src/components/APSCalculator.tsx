
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
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
  homeLanguages,
  firstAdditionalLanguages,
  mathematicsTypes,
  electiveSubjects,
  APSCalculationType,
  APSCalculation
} from "../utils/apsCalculator";

const APSCalculator = () => {
  const [calculationType, setCalculationType] = useState<APSCalculationType>("university");
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
  const [includeLO, setIncludeLO] = useState(false);
  
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
      {/* Calculator Type Selection - Fixed labels */}
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant={calculationType === "university" ? "default" : "outline"}
            onClick={() => setCalculationType("university")}
            className="h-auto p-4 text-left justify-start"
          >
            <div>
              <div className="font-medium">Standard Scale</div>
              <div className="text-sm opacity-70">7-point scale (Most universities)</div>
            </div>
          </Button>
          <Button
            variant={calculationType === "standard" ? "default" : "outline"}
            onClick={() => setCalculationType("standard")}
            className="h-auto p-4 text-left justify-start"
          >
            <div>
              <div className="font-medium">University Scale</div>
              <div className="text-sm opacity-70">8-point scale (Some universities)</div>
            </div>
          </Button>
        </div>
      </div>

      {/* Subject Inputs */}
      <div className="space-y-4">
        {/* Home Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select value={homeLanguage} onValueChange={setHomeLanguage}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Home Language (Required)" />
            </SelectTrigger>
            <SelectContent>
              {homeLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={homeLanguageMark} onValueChange={setHomeLanguageMark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark Range" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* First Additional Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select value={fal} onValueChange={setFal}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select First Additional Language (Required)" />
            </SelectTrigger>
            <SelectContent>
              {firstAdditionalLanguages.map((lang) => (
                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={falMark} onValueChange={setFalMark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark Range" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Mathematics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select value={mathematics} onValueChange={setMathematics}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mathematics Type (Required)" />
            </SelectTrigger>
            <SelectContent>
              {mathematicsTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={mathematicsMark} onValueChange={setMathematicsMark}>
            <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
              <SelectValue placeholder="Select Mark Range" />
            </SelectTrigger>
            <SelectContent>
              {markOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Elective Subjects */}
        {[
          { value: elective1, setValue: setElective1, mark: elective1Mark, setMark: setElective1Mark, number: 1 },
          { value: elective2, setValue: setElective2, mark: elective2Mark, setMark: setElective2Mark, number: 2 },
          { value: elective3, setValue: setElective3, mark: elective3Mark, setMark: setElective3Mark, number: 3 }
        ].map((elective, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={elective.value} onValueChange={elective.setValue}>
              <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
                <SelectValue placeholder={`Select Elective Subject ${elective.number} (Required)`} />
              </SelectTrigger>
              <SelectContent>
                {electiveSubjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={elective.mark} onValueChange={elective.setMark}>
              <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
                <SelectValue placeholder="Select Mark Range" />
              </SelectTrigger>
              <SelectContent>
                {markOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        {/* Life Orientation */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includeLO"
              checked={includeLO}
              onChange={(e) => setIncludeLO(e.target.checked)}
              className="h-4 w-4"
            />
            <label htmlFor="includeLO" className="text-sm font-medium text-gray-700">
              Include Life Orientation
            </label>
          </div>
          <p className="text-xs text-gray-500">
            Some universities include Life Orientation in APS calculation, others don't.
          </p>
          
          {includeLO && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-10 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md flex items-center text-sm text-gray-700">
                Life Orientation
              </div>
              <Select value={lifeOrientationMark} onValueChange={setLifeOrientationMark}>
                <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
                  <SelectValue placeholder="Select Mark Range" />
                </SelectTrigger>
                <SelectContent>
                  {markOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>

      {apsResult && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Total APS - Featured at the top */}
          <div className="text-center mb-8 p-4 bg-white rounded-lg shadow-sm border-2 border-primary">
            <div className="text-sm text-gray-600 mb-2">Your Total APS Score</div>
            <div className="text-4xl font-bold text-primary mb-2">{apsResult.totalAPS}</div>
            <div className="flex justify-center gap-4 text-xs text-gray-600">
              <span>Scale: {calculationType === "university" ? "7-point" : "8-point"}</span>
              <span>•</span>
              <span>Subjects: {apsResult.subjects.length}</span>
              {apsResult.includesLifeOrientation && (
                <>
                  <span>•</span>
                  <span>Includes Life Orientation</span>
                </>
              )}
            </div>
          </div>

          {/* Subject Breakdown */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 text-center">Subject Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {apsResult.subjects.map((subject, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="text-xs font-medium text-gray-700 mb-1 truncate" title={subject.name}>
                    {subject.name.length > 12 ? `${subject.name.substring(0, 12)}...` : subject.name}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{subject.points}</div>
                  <div className="text-xs text-gray-500">{getAPSRange(subject.mark, calculationType)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary paragraph - Updated text */}
          <div className="mt-6 p-4 bg-white/70 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 leading-relaxed text-center">
              Your total APS score is <span className="font-semibold text-primary">{apsResult.totalAPS} points</span> using the {calculationType === "university" ? "standard 7-point" : "university-specific 8-point"} scale. 
              This calculation includes {apsResult.subjects.length} subjects{apsResult.includesLifeOrientation ? ", including Life Orientation" : ""}. 
              Different universities have varying APS requirements, so check your preferred university's specific admission requirements.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default APSCalculator;
