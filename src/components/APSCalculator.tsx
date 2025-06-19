
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
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="space-y-6">
      {/* Calculator Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            APS Calculation Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant={calculationType === "standard" ? "default" : "outline"}
              onClick={() => setCalculationType("standard")}
              className="h-auto p-4 text-left justify-start"
            >
              <div>
                <div className="font-medium">Standard Scale</div>
                <div className="text-sm opacity-70">8-point scale (Most universities)</div>
              </div>
            </Button>
            <Button
              variant={calculationType === "university" ? "default" : "outline"}
              onClick={() => setCalculationType("university")}
              className="h-auto p-4 text-left justify-start"
            >
              <div>
                <div className="font-medium">University Scale</div>
                <div className="text-sm opacity-70">7-point scale (Some universities)</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Subject Inputs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Subject Marks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Home Language */}
          <div className="space-y-4">
            <Label className="text-base font-medium text-gray-900">Home Language (Required)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-gray-600">Subject</Label>
                <Select value={homeLanguage} onValueChange={setHomeLanguage}>
                  <SelectTrigger>
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
                <Label className="text-sm text-gray-600">Mark Range</Label>
                <Select value={homeLanguageMark} onValueChange={setHomeLanguageMark}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mark Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {markOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* First Additional Language */}
          <div className="space-y-4">
            <Label className="text-base font-medium text-gray-900">First Additional Language (Required)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-gray-600">Subject</Label>
                <Select value={fal} onValueChange={setFal}>
                  <SelectTrigger>
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
                <Label className="text-sm text-gray-600">Mark Range</Label>
                <Select value={falMark} onValueChange={setFalMark}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mark Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {markOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Mathematics */}
          <div className="space-y-4">
            <Label className="text-base font-medium text-gray-900">Mathematics (Required)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-gray-600">Type</Label>
                <Select value={mathematics} onValueChange={setMathematics}>
                  <SelectTrigger>
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
                <Label className="text-sm text-gray-600">Mark Range</Label>
                <Select value={mathematicsMark} onValueChange={setMathematicsMark}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mark Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {markOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Elective Subjects */}
          {[
            { value: elective1, setValue: setElective1, mark: elective1Mark, setMark: setElective1Mark, number: 1 },
            { value: elective2, setValue: setElective2, mark: elective2Mark, setMark: setElective2Mark, number: 2 },
            { value: elective3, setValue: setElective3, mark: elective3Mark, setMark: setElective3Mark, number: 3 }
          ].map((elective, index) => (
            <div key={index} className="space-y-4">
              <Label className="text-base font-medium text-gray-900">
                Elective Subject {elective.number} (Required)
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-gray-600">Subject</Label>
                  <Select value={elective.value} onValueChange={elective.setValue}>
                    <SelectTrigger>
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
                  <Label className="text-sm text-gray-600">Mark Range</Label>
                  <Select value={elective.mark} onValueChange={elective.setMark}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Mark Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {markOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ))}

          {/* Life Orientation */}
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="includeLO"
                checked={includeLO}
                onCheckedChange={(checked) => setIncludeLO(checked as boolean)}
              />
              <Label htmlFor="includeLO" className="text-base font-medium text-gray-900">
                Include Life Orientation in calculation
              </Label>
            </div>
            <p className="text-sm text-gray-600">
              Some universities include Life Orientation in APS calculation, others don't. Check your university's requirements.
            </p>
            
            {includeLO && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-gray-600">Subject</Label>
                  <div className="h-10 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md flex items-center text-sm text-gray-700">
                    Life Orientation
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-gray-600">Mark Range</Label>
                  <Select value={lifeOrientationMark} onValueChange={setLifeOrientationMark}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Mark Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {markOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {apsResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-green-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Your APS Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Total Score */}
              <div className="text-center p-6 bg-white rounded-lg border-2 border-green-300">
                <div className="text-sm text-gray-500 mb-2">Total APS Score</div>
                <div className="text-4xl font-bold text-green-600">{apsResult.totalAPS}</div>
                <div className="text-sm text-gray-600 mt-2">
                  Using {calculationType === "standard" ? "Standard 8-point" : "University 7-point"} scale
                </div>
              </div>
              
              {/* Subject Breakdown */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Subject Breakdown</h4>
                <div className="space-y-2">
                  {apsResult.subjects.map((subject, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium text-gray-700">{subject.name}</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{subject.points} points</div>
                        <div className="text-xs text-gray-500">{getAPSRange(subject.mark, calculationType)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your total APS score is <span className="font-medium text-green-600">{apsResult.totalAPS} points</span> using the {calculationType === "standard" ? "standard 8-point" : "university-specific 7-point"} scale. 
                  This calculation includes {apsResult.subjects.length} subjects{apsResult.includesLifeOrientation ? ", including Life Orientation" : ""}. 
                  Different universities have varying APS requirements, so check your preferred university's specific admission requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Points Scale Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            APS Points Scale Reference ({calculationType === "standard" ? "Standard" : "Some Universities"})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Percentage Range</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Points Awarded</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {calculationType === "standard" ? (
                  <>
                    <tr><td className="py-2 px-4">90-100%</td><td className="py-2 px-4">8 points</td></tr>
                    <tr><td className="py-2 px-4">80-89%</td><td className="py-2 px-4">7 points</td></tr>
                  </>
                ) : (
                  <tr><td className="py-2 px-4">80-100%</td><td className="py-2 px-4">7 points</td></tr>
                )}
                <tr><td className="py-2 px-4">70-79%</td><td className="py-2 px-4">6 points</td></tr>
                <tr><td className="py-2 px-4">60-69%</td><td className="py-2 px-4">5 points</td></tr>
                <tr><td className="py-2 px-4">50-59%</td><td className="py-2 px-4">4 points</td></tr>
                <tr><td className="py-2 px-4">40-49%</td><td className="py-2 px-4">3 points</td></tr>
                <tr><td className="py-2 px-4">30-39%</td><td className="py-2 px-4">2 points</td></tr>
                <tr><td className="py-2 px-4">0-29%</td><td className="py-2 px-4">1 point</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default APSCalculator;
