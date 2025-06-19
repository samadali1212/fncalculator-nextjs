
import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  calculateAPS,
  homeLanguages,
  firstAdditionalLanguages,
  mathematicsTypes,
  electiveSubjects,
  APSCalculationType
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
  
  const apsResult = allRequiredFieldsFilled ? calculateAPS(
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

  const handleIncludeLOChange = (checked: boolean | "indeterminate") => {
    setIncludeLO(checked === true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Calculator Type Selection */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">APS Calculation Type</Label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCalculationType("standard")}
            className={`flex-1 text-sm py-2 px-4 rounded border transition-colors ${
              calculationType === "standard"
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Standard (8-point)
          </button>
          <button
            type="button"
            onClick={() => setCalculationType("university")}
            className={`flex-1 text-sm py-2 px-4 rounded border transition-colors ${
              calculationType === "university"
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            University (7-point)
          </button>
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

      {/* Elective Subjects */}
      {[1, 2, 3].map((num) => {
        const subjectValue = num === 1 ? elective1 : num === 2 ? elective2 : elective3;
        const markValue = num === 1 ? elective1Mark : num === 2 ? elective2Mark : elective3Mark;
        const setSubject = num === 1 ? setElective1 : num === 2 ? setElective2 : setElective3;
        const setMark = num === 1 ? setElective1Mark : num === 2 ? setElective2Mark : setElective3Mark;

        return (
          <div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Elective Subject {num}</Label>
              <Select value={subjectValue} onValueChange={setSubject}>
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
              <Select value={markValue} onValueChange={setMark}>
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
        );
      })}

      {/* Life Orientation */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="includeLO"
            checked={includeLO}
            onCheckedChange={handleIncludeLOChange}
          />
          <Label htmlFor="includeLO" className="text-sm font-medium text-gray-700">
            Include Life Orientation (optional for some universities)
          </Label>
        </div>
        
        {includeLO && (
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Life Orientation Mark</Label>
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
        )}
      </div>

      {apsResult && (
        <>
          {/* Clean Results Layout - matching UIF Calculator style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Calculation Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Total Subjects</div>
                <div className="font-semibold text-sm text-gray-800">{apsResult.subjects.length}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Calculation Type</div>
                <div className="font-semibold text-sm text-blue-600">{calculationType === "standard" ? "8-point" : "7-point"}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Includes Life Orientation</div>
                <div className="font-semibold text-sm text-green-600">{apsResult.includesLifeOrientation ? "Yes" : "No"}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Best Six Subjects</div>
                <div className="font-semibold text-sm text-gray-800">Calculated</div>
              </div>
            </div>

            {/* Total APS Score */}
            <div className="text-center p-4 bg-white rounded border-2 border-primary">
              <div className="text-sm text-gray-600 mb-1">Total APS Score</div>
              <div className="text-2xl font-bold text-primary">{apsResult.totalAPS}</div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your APS score is {apsResult.totalAPS} points using the {calculationType} calculation method. 
              This score is based on your best six matric subjects{apsResult.includesLifeOrientation ? ' including Life Orientation' : ''}. 
              Different universities may have different minimum APS requirements for their programs.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default APSCalculator;
