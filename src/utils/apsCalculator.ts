
export type APSCalculationType = "standard" | "university";

export interface APSSubject {
  name: string;
  mark: number;
  points: number;
}

export interface APSCalculation {
  totalAPS: number;
  subjects: APSSubject[];
  includesLifeOrientation: boolean;
  calculationType: APSCalculationType;
}

// Standard APS calculation (8-point scale)
export const getStandardAPSPoints = (mark: number): number => {
  if (mark >= 90) return 8;
  if (mark >= 80) return 7;
  if (mark >= 70) return 6;
  if (mark >= 60) return 5;
  if (mark >= 50) return 4;
  if (mark >= 40) return 3;
  if (mark >= 30) return 2;
  return 1;
};

// University-specific APS calculation (7-point scale)
export const getUniversityAPSPoints = (mark: number): number => {
  if (mark >= 80) return 7;
  if (mark >= 70) return 6;
  if (mark >= 60) return 5;
  if (mark >= 50) return 4;
  if (mark >= 40) return 3;
  if (mark >= 30) return 2;
  return 1;
};

export const getAPSRange = (mark: number, calculationType: APSCalculationType): string => {
  if (calculationType === "standard") {
    if (mark >= 90) return "90-100%";
    if (mark >= 80) return "80-89%";
    if (mark >= 70) return "70-79%";
    if (mark >= 60) return "60-69%";
    if (mark >= 50) return "50-59%";
    if (mark >= 40) return "40-49%";
    if (mark >= 30) return "30-39%";
    return "0-29%";
  } else {
    if (mark >= 80) return "80-100%";
    if (mark >= 70) return "70-79%";
    if (mark >= 60) return "60-69%";
    if (mark >= 50) return "50-59%";
    if (mark >= 40) return "40-49%";
    if (mark >= 30) return "30-39%";
    return "0-29%";
  }
};

export const calculateAPS = (
  subjects: { name: string; mark: number }[],
  includeLifeOrientation: boolean = false,
  lifeOrientationMark: number = 0,
  calculationType: APSCalculationType = "standard"
): APSCalculation => {
  const getPoints = calculationType === "standard" ? getStandardAPSPoints : getUniversityAPSPoints;
  
  let totalAPS = 0;
  const apsSubjects: APSSubject[] = [];

  // Calculate points for main subjects
  subjects.forEach(subject => {
    const points = getPoints(subject.mark);
    totalAPS += points;
    apsSubjects.push({
      name: subject.name,
      mark: subject.mark,
      points
    });
  });

  // Add Life Orientation if included
  if (includeLifeOrientation && lifeOrientationMark > 0) {
    const loPoints = getPoints(lifeOrientationMark);
    totalAPS += loPoints;
    apsSubjects.push({
      name: "Life Orientation",
      mark: lifeOrientationMark,
      points: loPoints
    });
  }

  return {
    totalAPS,
    subjects: apsSubjects,
    includesLifeOrientation,
    calculationType
  };
};

export const homeLanguages = [
  "Afrikaans HL",
  "English HL",
  "Ndebele HL",
  "Sepedi HL",
  "Sesotho HL",
  "Setswana HL",
  "Siswati HL",
  "Tshivenda HL",
  "Xhosa HL",
  "Xitsonga HL",
  "Zulu HL"
];

export const firstAdditionalLanguages = [
  "Afrikaans FAL",
  "English FAL",
  "Ndebele FAL",
  "Sepedi FAL",
  "Sesotho FAL",
  "Setswana FAL",
  "Siswati FAL",
  "Tshivenda FAL",
  "Xhosa FAL",
  "Xitsonga FAL",
  "Zulu FAL"
];

export const mathematicsTypes = [
  "Mathematics",
  "Mathematical Literacy",
  "Technical Mathematics"
];

export const electiveSubjects = [
  "Accounting",
  "Agricultural Management",
  "Agricultural Sciences",
  "Agricultural Technology",
  "Business Studies",
  "Civil Technology",
  "Computer Applications Technology",
  "Consumer Studies",
  "Dance Studies",
  "Design",
  "Dramatic Arts",
  "Economics",
  "Electrical Technology",
  "Engineering",
  "Geography",
  "Graphic and Design",
  "History",
  "Hospitality Studies",
  "Information Technology",
  "Life Science",
  "Marine Science",
  "Mechanical Technology",
  "Music",
  "Physical Science",
  "Religion Studies",
  "Technical Science",
  "Tourism",
  "Visual Arts"
];
