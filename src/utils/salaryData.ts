
type SalaryData = {
  [jobTitle: string]: {
    min: number;
    average: number;
    max: number;
    experience: "entry" | "mid" | "senior";
    education: string;
    location_factor: number;
  };
};

export const getSalaryData = (): SalaryData => {
  return {
  net_software_developer: {
    min: 32500,
    average: 55000,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  net_web_developer: {
    min: 25000,
    average: 38750,
    max: 96000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Information Technology",
    location_factor: 1.25
  },
  account_administrator: {
    min: 11375,
    average: 17500,
    max: 31500,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Business Administration or related",
    location_factor: 1.08
  },
  account_clerk: {
    min: 12000,
    average: 13500,
    max: 20000,
    experience: "entry",
    education: "High School Diploma with relevant certifications",
    location_factor: 1.02
  },
  account_executive: {
    min: 15000,
    average: 25000,
    max: 60000,
    experience: "mid",
    education: "Bachelor's Degree in Business, Marketing, or Sales",
    location_factor: 1.15
  },
  account_manager: {
    min: 20000,
    average: 30000,
    max: 330000,
    experience: "mid",
    education: "Bachelor's Degree in Business, Marketing, or related",
    location_factor: 1.15
  },
  account_representative: {
    min: 15000,
    average: 19000,
    max: 33375,
    experience: "entry",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.08
  },
  accountant: {
    min: 21818,
    average: 33890,
    max: 454286,
    experience: "mid",
    education: "Bachelor's Degree in Accounting",
    location_factor: 1.15
  },
  accounting_manager: {
    min: 25750,
    average: 40000,
    max: 532500,
    experience: "senior",
    education: "Bachelor's Degree in Accounting, CA(SA) preferred",
    location_factor: 1.3
  },
  accounts_manager: {
    min: 24000,
    average: 35000,
    max: 401700,
    experience: "senior",
    education: "Bachelor's Degree in Accounting, CA(SA) preferred",
    location_factor: 1.3
  },
  accounts_payable: {
    min: 16000,
    average: 22500,
    max: 182817,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Accounting",
    location_factor: 1.02
  },
  accounts_receivable: {
    min: 17500,
    average: 25000,
    max: 270000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Accounting",
    location_factor: 1.02
  },
  actuarial: {
    min: 48000,
    average: 109722,
    max: 800000,
    experience: "entry",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  actuarial_analyst: {
    min: 45695,
    average: 91176,
    max: 750000,
    experience: "entry",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  actuarial_consultant: {
    min: 87500,
    average: 650000,
    max: 850000,
    experience: "mid",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  actuarial_manager: {
    min: 81000,
    average: 108333,
    max: 900000,
    experience: "senior",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.35
  },
  actuary: {
    min: 66667,
    average: 125001,
    max: 900000,
    experience: "senior",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.35
  },
  admin_assistant: {
    min: 10545,
    average: 13000,
    max: 20358,
    experience: "entry",
    education: "High School Diploma with secretarial or administrative qualifications",
    location_factor: 1.05
  },
  administrative_assistant: {
    min: 11000,
    average: 14000,
    max: 27094,
    experience: "mid",
    education: "High School Diploma with secretarial or administrative qualifications",
    location_factor: 1.05
  },
  administrator: {
    min: 13905,
    average: 18000,
    max: 191539,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  adviser: {
    min: 12501,
    average: 20000,
    max: 116500,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  advisor: {
    min: 15000,
    average: 22500,
    max: 300000,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  agent: {
    min: 12500,
    average: 17500,
    max: 100000,
    experience: "entry",
    education: "High School Diploma with relevant industry certifications",
    location_factor: 1.05
  },
  analyst: {
    min: 28810,
    average: 55000,
    max: 625374,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field (e.g., Business, Finance, Data Science)",
    location_factor: 1.15
  },
  android_developer: {
    min: 44028,
    average: 70667,
    max: 750000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  application_developer: {
    min: 30000,
    average: 53318,
    max: 530000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  application_engineer: {
    min: 19000,
    average: 47530,
    max: 665000,
    experience: "mid",
    education: "Bachelor's Degree in Engineering (e.g., Software, Computer)",
    location_factor: 1.25
  },
  apprentice: {
    min: 7456,
    average: 9500,
    max: 29150,
    experience: "entry",
    education: "High School Diploma or enrollment in a vocational training program",
    location_factor: 1.01
  },
  architect: {
    min: 25000,
    average: 69627,
    max: 650000,
    experience: "mid",
    education: "Bachelor's Degree in Architecture",
    location_factor: 1.15
  },
  art_director: {
    min: 19500,
    average: 30000,
    max: 50000,
    experience: "mid",
    education: "Bachelor's Degree in Fine Arts, Graphic Design, or related",
    location_factor: 1.15
  },
  artisan: {
    min: 18000,
    average: 28459,
    max: 290098,
    experience: "mid",
    education: "Vocational training or equivalent experience",
    location_factor: 1.02
  },
  artist: {
    min: 12500,
    average: 17500,
    max: 35000,
    experience: "entry",
    education: "Bachelor's Degree in Fine Arts or equivalent portfolio",
    location_factor: 1.02
  },
  assembler: {
    min: 10942,
    average: 15000,
    max: 36120,
    experience: "entry",
    education: "High School Diploma with technical skills",
    location_factor: 1.01
  },
  assistant: {
    min: 13500,
    average: 19000,
    max: 249914,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  assistant_engineer: {
    min: 25000,
    average: 41667,
    max: 250000,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.08
  },
  assistant_manager: {
    min: 15000,
    average: 22500,
    max: 157794,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in a relevant field",
    location_factor: 1.08
  },
  associate_director: {
    min: 15987,
    average: 70000,
    max: 670500,
    experience: "senior",
    education: "Bachelor's or Master's Degree in a relevant field",
    location_factor: 1.15
  },
  associate_professor: {
    min: 567548,
    average: 802254,
    max: 978044,
    experience: "senior",
    education: "PhD in a relevant field",
    location_factor: 1.15
  },
  assurance_manager: {
    min: 21500,
    average: 40000,
    max: 540000,
    experience: "mid",
    education: "Bachelor's Degree in Accounting or Auditing, relevant certifications",
    location_factor: 1.15
  },
  attendant: {
    min: 11750,
    average: 14850,
    max: 30000,
    experience: "entry",
    education: "Varies depending on the specific role",
    location_factor: 1.01
  },
  attorney: {
    min: 17500,
    average: 24225,
    max: 51257,
    experience: "mid",
    education: "Bachelor of Laws (LLB) degree, admitted as an Attorney",
    location_factor: 1.15
  },
  au_pair: {
    min: 10516,
    average: 12500,
    max: 33000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  audio_visual: {
    min: 11250,
    average: 22500,
    max: 293745,
    experience: "entry",
    education: "Diploma or certification in Audio Visual Technology",
    location_factor: 1.02
  },
  audit_manager: {
    min: 30000,
    average: 45000,
    max: 647500,
    experience: "mid",
    education: "Bachelor's Degree in Accounting or Auditing, relevant certifications",
    location_factor: 1.15
  },
  auditor: {
    min: 20000,
    average: 35000,
    max: 532152,
    experience: "entry",
    education: "Bachelor's Degree in Accounting or Internal Auditing",
    location_factor: 1.08
  },
  author: {
    min: 5005,
    average: 252503,
    max: 500000,
    experience: "entry",
    education: "Varies, strong writing skills and portfolio",
    location_factor: 1.02
  },
  auto_technician: {
    min: 14750,
    average: 21500,
    max: 48278,
    experience: "mid",
    education: "Vocational training or certification",
    location_factor: 1.05
  },
  auto_tester: {
    min: 43750,
    average: 47500,
    max: 47500,
    experience: "entry",
    education: "Vocational training or certification",
    location_factor: 1.02
  },
  automation_engineer: {
    min: 33438,
    average: 54439,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Engineering (e.g., Electrical, Mechanical, Computer)",
    location_factor: 1.25
  },
  automotive_engineer: {
    min: 29875,
    average: 40000,
    max: 364500,
    experience: "mid",
    education: "Bachelor's Degree in Automotive Engineering or Mechanical Engineering",
    location_factor: 1.35
  },
  back_end: {
    min: 31989,
    average: 55000,
    max: 660000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  baker: {
    min: 11000,
    average: 13750,
    max: 40000,
    experience: "entry",
    education: "High School Diploma or relevant vocational training",
    location_factor: 1.25
  },
  bakery_manager: {
    min: 15000,
    average: 20000,
    max: 39017,
    experience: "mid",
    education: "High School Diploma with management experience",
    location_factor: 1.02
  },
  bank_analyst: {
    min: 45001,
    average: 72917,
    max: 725000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.05
  },
  bank_teller: {
    min: 12500,
    average: 14850,
    max: 16450,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.15
  },
  bar_manager: {
    min: 13500,
    average: 16500,
    max: 20000,
    experience: "mid",
    education: "High School Diploma with experience in hospitality",
    location_factor: 1.01
  },
  barista: {
    min: 7063,
    average: 20350,
    max: 66076,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.05
  },
  bartender: {
    min: 7000,
    average: 9000,
    max: 66764,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  beauty_therapist: {
    min: 8000,
    average: 11000,
    max: 17500,
    experience: "entry",
    education: "Certification or diploma in Beauty Therapy",
    location_factor: 1.01
  },
  boiler: {
    min: 20000,
    average: 35000,
    max: 214908,
    experience: "entry",
    education: "Certification or trade qualification",
    location_factor: 1.03
  },
  boilermaker: {
    min: 15766,
    average: 22250,
    max: 42114,
    experience: "entry",
    education: "Trade qualification",
    location_factor: 1.02
  },
  bookkeeper: {
    min: 14865,
    average: 17501,
    max: 30000,
    experience: "entry",
    education: "Diploma or certificate in Bookkeeping",
    location_factor: 1.03
  },
  bookkeeper_clerk: {
    min: 12500,
    average: 15950,
    max: 22800,
    experience: "entry",
    education: "High School Diploma with basic accounting knowledge",
    location_factor: 1.05
  },
  branch_manager: {
    min: 19900,
    average: 30000,
    max: 75000,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.02
  },
  brand_ambassador: {
    min: 12170,
    average: 17500,
    max: 46000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.15
  },
  brand_manager: {
    min: 23000,
    average: 35000,
    max: 227497,
    experience: "mid",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.03
  },
  bridge_engineer: {
    min: 75000,
    average: 91667,
    max: 774000,
    experience: "mid",
    education: "Bachelor's Degree in Civil Engineering",
    location_factor: 1.2
  },
  broker: {
    min: 16000,
    average: 25000,
    max: 201390,
    experience: "mid",
    education: "Certifications and licenses",
    location_factor: 1.15
  },
  building_engineer: {
    min: 39500,
    average: 62500,
    max: 590000,
    experience: "mid",
    education: "Bachelor's Degree in Engineering or related",
    location_factor: 1.2
  },
  building_inspector: {
    min: 23591,
    average: 47500,
    max: 316791,
    experience: "mid",
    education: "Certifications and experience in construction",
    location_factor: 1.1
  },
  bus_driver: {
    min: 9297,
    average: 16500,
    max: 190759,
    experience: "entry",
    education: "Valid driver's license with relevant endorsements",
    location_factor: 1.08
  },
  business_analyst: {
    min: 32500,
    average: 51250,
    max: 600450,
    experience: "mid",
    education: "Bachelor's Degree in Business, IT, or related",
    location_factor: 1.01
  },
  business_consultant: {
    min: 16031,
    average: 24000,
    max: 60000,
    experience: "mid",
    education: "Bachelor's Degree in Business or related, often Master's",
    location_factor: 1.2
  },
  business_developer: {
    min: 20000,
    average: 32500,
    max: 466867,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.25
  },
  business_development_executive: {
    min: 20600,
    average: 29000,
    max: 70000,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.2
  },
  business_development_manager: {
    min: 25000,
    average: 40000,
    max: 450000,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.2
  },
  business_executive: {
    min: 20000,
    average: 28153,
    max: 100000,
    experience: "senior",
    education: "Bachelor's Degree in Business or related, often Master's",
    location_factor: 1.25
  },
  business_intelligence: {
    min: 40000,
    average: 61241,
    max: 700000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science, Data Science, or related",
    location_factor: 1.3
  },
  business_intelligence_analyst: {
    min: 35001,
    average: 59444,
    max: 690426,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science, Data Science, or related",
    location_factor: 1.25
  },
  business_manager: {
    min: 25000,
    average: 45000,
    max: 574688,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.15
  },
  business_representative: {
    min: 15500,
    average: 25000,
    max: 128167,
    experience: "entry",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.2
  },
  business_systems_analyst: {
    min: 35000,
    average: 60000,
    max: 675000,
    experience: "mid",
    education: "Bachelor's Degree in IT, Business, or related",
    location_factor: 1.1
  },
  butcher: {
    min: 15000,
    average: 17500,
    max: 26500,
    experience: "entry",
    education: "Vocational training or experience",
    location_factor: 1.2
  },
  buyer: {
    min: 16500,
    average: 24979,
    max: 60000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Purchasing or related",
    location_factor: 1.02
  },
  call_center_agent: {
    min: 8281,
    average: 13500,
    max: 41000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.08
  },
  care_manager: {
    min: 24000,
    average: 40000,
    max: 212001,
    experience: "mid",
    education: "Relevant qualification in healthcare or social work",
    location_factor: 1.01
  },
  caregiver: {
    min: 12000,
    average: 13000,
    max: 30875,
    experience: "entry",
    education: "High School Diploma or basic caregiving certification",
    location_factor: 1.08
  },
  carpenter: {
    min: 11500,
    average: 15000,
    max: 40000,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.01
  },
  case_manager: {
    min: 26500,
    average: 33500,
    max: 377097,
    experience: "mid",
    education: "Bachelor's Degree in social work, healthcare, or related",
    location_factor: 1.03
  },
  cashier: {
    min: 7501,
    average: 12900,
    max: 47711,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.1
  },
  category_manager: {
    min: 37875,
    average: 52500,
    max: 583000,
    experience: "mid",
    education: "Bachelor's Degree in Business, Marketing, or related",
    location_factor: 1.01
  },
  charter: {
    min: 22000,
    average: 24375,
    max: 28000,
    experience: "mid",
    education: "Relevant maritime certifications and licenses",
    location_factor: 1.2
  },
  chef: {
    min: 13000,
    average: 18000,
    max: 34997,
    experience: "mid",
    education: "Relevant culinary qualifications or experience",
    location_factor: 1.1
  },
  chef_de_partie: {
    min: 10000,
    average: 11700,
    max: 19001,
    experience: "entry",
    education: "Relevant culinary qualifications or experience",
    location_factor: 1.08
  },
  chemical_engineer: {
    min: 20000,
    average: 35000,
    max: 465000,
    experience: "mid",
    education: "Bachelor's Degree in Chemical Engineering",
    location_factor: 1.05
  },
  chemist: {
    min: 20417,
    average: 43500,
    max: 360000,
    experience: "entry",
    education: "Bachelor's Degree in Chemistry",
    location_factor: 1.2
  },
  chief_engineer: {
    min: 25000,
    average: 61347,
    max: 341060,
    experience: "senior",
    education: "Bachelor's Degree in Engineering, extensive experience",
    location_factor: 1.1
  },
  chief_financial_officer: {
    min: 20129,
    average: 85834,
    max: 191250,
    experience: "senior",
    education: "Bachelor's Degree in Finance or Accounting, CA(SA), MBA",
    location_factor: 1.3
  },
  chief_safety_officer: {
    min: 30100,
    average: 81250,
    max: 385615,
    experience: "senior",
    education: "Relevant qualifications in safety management",
    location_factor: 1.35
  },
  civil_engineer: {
    min: 18500,
    average: 50000,
    max: 500000,
    experience: "mid",
    education: "Bachelor's Degree in Civil Engineering",
    location_factor: 1.25
  },
  cleaner: {
    min: 7861,
    average: 16450,
    max: 102534,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.15
  },
  clerk: {
    min: 12500,
    average: 15000,
    max: 36706,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  clinical_coordinator: {
    min: 24231,
    average: 38500,
    max: 444276,
    experience: "mid",
    education: "Relevant qualification in healthcare",
    location_factor: 1.01
  },
  clinical_nurse: {
    min: 25000,
    average: 34880,
    max: 393380,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing, registration with SANC",
    location_factor: 1.1
  },
  clinical_pharmacist: {
    min: 45000,
    average: 70000,
    max: 545000,
    experience: "mid",
    education: "Bachelor's Degree in Pharmacy, registration with SAPC",
    location_factor: 1.15
  },
  clinical_specialist: {
    min: 20000,
    average: 33333,
    max: 160212,
    experience: "senior",
    education: "Relevant advanced qualification in a clinical field",
    location_factor: 1.2
  },
  co: {
    min: 15000,
    average: 21031,
    max: 66318,
    experience: "senior",
    education: "Varies significantly by role and industry",
    location_factor: 1.25
  },
  coach: {
    min: 12699,
    average: 29000,
    max: 88000,
    experience: "mid",
    education: "Relevant certifications or experience",
    location_factor: 1.3
  },
  collector: {
    min: 10375,
    average: 14000,
    max: 19925,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.08
  },
  commercial_manager: {
    min: 25000,
    average: 45001,
    max: 595583,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.01
  },
  commercial_underwriter: {
    min: 22500,
    average: 29000,
    max: 44750,
    experience: "entry",
    education: "Bachelor's Degree in Commerce, Finance, or related",
    location_factor: 1.2
  },
  communications_manager: {
    min: 34000,
    average: 47778,
    max: 348340,
    experience: "mid",
    education: "Bachelor's Degree in Communications, PR, or related",
    location_factor: 1.1
  },
  communications_specialist: {
    min: 25000,
    average: 42500,
    max: 71667,
    experience: "entry",
    education: "Bachelor's Degree in Communications, PR, or related",
    location_factor: 1.2
  },
  community_manager: {
    min: 15000,
    average: 22500,
    max: 84213,
    experience: "entry",
    education: "Bachelor's Degree in Marketing, Communications, or related",
    location_factor: 1.1
  },
  compliance_manager: {
    min: 27500,
    average: 60000,
    max: 675000,
    experience: "mid",
    education: "Bachelor's Degree in Law, Finance, or related",
    location_factor: 1.1
  },
  compliance_officer: {
    min: 22002,
    average: 33449,
    max: 443500,
    experience: "entry",
    education: "Bachelor's Degree in Law, Finance, or related",
    location_factor: 1.2
  },
  concierge: {
    min: 12000,
    average: 15500,
    max: 40000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.1
  },
  concrete_foreman: {
    min: 32250,
    average: 45000,
    max: 417908,
    experience: "mid",
    education: "Relevant experience in concrete work",
    location_factor: 1.01
  },
  construction_manager: {
    min: 22500,
    average: 45000,
    max: 363000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Construction Management",
    location_factor: 1.05
  },
  construction_worker: {
    min: 11055,
    average: 11350,
    max: 30425,
    experience: "entry",
    education: "Basic literacy, potential for trade qualifications",
    location_factor: 1.15
  },
  consul: {
    min: 11000,
    average: 19799,
    max: 28597,
    experience: "mid",
    education: "Bachelor's Degree in International Relations or related",
    location_factor: 1.02
  },
  consultant: {
    min: 15000,
    average: 23806,
    max: 200975,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field, often Master's",
    location_factor: 1.1
  },
  content_writer: {
    min: 17000,
    average: 21500,
    max: 39250,
    experience: "entry",
    education: "Bachelor's Degree in Journalism, Communications, or related",
    location_factor: 1.25
  },
  contract_manager: {
    min: 25000,
    average: 45000,
    max: 506000,
    experience: "mid",
    education: "Bachelor's Degree in Law, Business, or related",
    location_factor: 1.08
  },
  contracts_manager: {
    min: 24500,
    average: 45000,
    max: 500000,
    experience: "mid",
    education: "Bachelor's Degree in Law, Business, or related",
    location_factor: 1.2
  },
  control_operator: {
    min: 9500,
    average: 15000,
    max: 84225,
    experience: "entry",
    education: "Relevant technical training or certification",
    location_factor: 1.2
  },
  control_room_operator: {
    min: 9000,
    average: 14500,
    max: 95650,
    experience: "entry",
    education: "Relevant technical training or certification",
    location_factor: 1.05
  },
  controller: {
    min: 15000,
    average: 21500,
    max: 230361,
    experience: "senior",
    education: "Bachelor's Degree in Accounting or Finance, CA(SA)",
    location_factor: 1.05
  },
  coo: {
    min: 19517,
    average: 45000,
    max: 175000,
    experience: "senior",
    education: "Bachelor's Degree in Business or related, often Master's",
    location_factor: 1.3
  },
  coordinator: {
    min: 15502,
    average: 21892,
    max: 203876,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in a relevant field",
    location_factor: 1.35
  },
  copywriter: {
    min: 17500,
    average: 25125,
    max: 45000,
    experience: "entry",
    education: "Bachelor's Degree in Advertising, Marketing, or related",
    location_factor: 1.08
  },
  corporate_manager: {
    min: 22643,
    average: 53333,
    max: 650000,
    experience: "mid",
    education: "Bachelor's Degree in Business or related, often Master's",
    location_factor: 1.1
  },
  cost_accountant: {
    min: 30000,
    average: 45000,
    max: 535000,
    experience: "entry",
    education: "Bachelor's Degree in Accounting or Cost Accounting",
    location_factor: 1.25
  },
  counsel: {
    min: 20000,
    average: 77083,
    max: 700000,
    experience: "mid",
    education: "Bachelor of Laws (LLB) degree, admitted as an Advocate",
    location_factor: 1.1
  },
  counter: {
    min: 11000,
    average: 12625,
    max: 25000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.2
  },
  cpt: {
    min: 16000,
    average: 27500,
    max: 202000,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.01
  },
  creative_director: {
    min: 5833,
    average: 15250,
    max: 69500,
    experience: "senior",
    education: "Bachelor's Degree in Design or related, strong portfolio",
    location_factor: 1.1
  },
  credit_analyst: {
    min: 30000,
    average: 50833,
    max: 665250,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.3
  },
  credit_manager: {
    min: 35000,
    average: 60001,
    max: 675000,
    experience: "mid",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.1
  },
  credit_risk_analyst: {
    min: 35000,
    average: 50000,
    max: 675000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.2
  },
  critical_care_nurse: {
    min: 30000,
    average: 35000,
    max: 262613,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing, specialized training",
    location_factor: 1.15
  },
  customer_agent: {
    min: 10500,
    average: 13466,
    max: 25000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.2
  },
  customer_service_agent: {
    min: 10500,
    average: 13000,
    max: 41000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  customer_service_consultant: {
    min: 12500,
    average: 16000,
    max: 22000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  customer_service_manager: {
    min: 21500,
    average: 36667,
    max: 199590,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  customer_service_representative: {
    min: 12500,
    average: 16709,
    max: 30817,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.15
  },
  data_administrator: {
    min: 13500,
    average: 20000,
    max: 299381,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in IT or related",
    location_factor: 1.01
  },
  data_analyst: {
    min: 22500,
    average: 40000,
    max: 500000,
    experience: "entry",
    education: "Bachelor's Degree in Statistics, Data Science, or related",
    location_factor: 1.1
  },
  data_architect: {
    min: 51250,
    average: 88500,
    max: 872500,
    experience: "senior",
    education: "Bachelor's or Master's Degree in Computer Science or related",
    location_factor: 1.3
  },
  data_entry_clerk: {
    min: 10725,
    average: 12000,
    max: 15025,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  data_scientist: {
    min: 27752,
    average: 60001,
    max: 675000,
    experience: "mid",
    education: "Bachelor's or Master's Degree in Data Science, Statistics, or related",
    location_factor: 1.3
  },
  database: {
    min: 25000,
    average: 45001,
    max: 462500,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  database_administrator: {
    min: 25521,
    average: 45001,
    max: 540000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  dba: {
    min: 36000,
    average: 52500,
    max: 556000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  dealer: {
    min: 20500,
    average: 40000,
    max: 95417,
    experience: "mid",
    education: "Varies by industry, may require specific licenses",
    location_factor: 1.1
  },
  deli_manager: {
    min: 13500,
    average: 16500,
    max: 24300,
    experience: "mid",
    education: "High School Diploma with experience in food service",
    location_factor: 1.05
  },
  delivery_driver: {
    min: 8500,
    average: 11950,
    max: 20000,
    experience: "entry",
    education: "Valid driver's license",
    location_factor: 1.01
  },
  delivery_man: {
    min: 6750,
    average: 178375,
    max: 350000,
    experience: "entry",
    education: "Valid driver's license",
    location_factor: 1.01
  },
  delivery_manager: {
    min: 25000,
    average: 45000,
    max: 138750,
    experience: "mid",
    education: "High School Diploma with logistics experience",
    location_factor: 1.08
  },
  demand_planner: {
    min: 30000,
    average: 40000,
    max: 500000,
    experience: "entry",
    education: "Bachelor's Degree in Supply Chain Management or related",
    location_factor: 1.1
  },
  dentist: {
    min: 12625,
    average: 37500,
    max: 90674,
    experience: "mid",
    education: "Bachelor of Dental Surgery (BDS) degree, registration with HPCSA",
    location_factor: 1.2
  },
  department_manager: {
    min: 19000,
    average: 30000,
    max: 119000,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.15
  },
  deputy: {
    min: 35000,
    average: 70809,
    max: 733257,
    experience: "mid",
    education: "Varies significantly by role and industry",
    location_factor: 1.15
  },
  deputy_director: {
    min: 67630,
    average: 654817,
    max: 775000,
    experience: "senior",
    education: "Bachelor's or Master's Degree in a relevant field",
    location_factor: 1.25
  },
  design_engineer: {
    min: 27000,
    average: 42500,
    max: 356000,
    experience: "mid",
    education: "Bachelor's Degree in Engineering (e.g., Mechanical, Electrical)",
    location_factor: 1.2
  },
  designer: {
    min: 14600,
    average: 22500,
    max: 81771,
    experience: "entry",
    education: "Bachelor's Degree in a relevant design field",
    location_factor: 1.1
  },
  detailer: {
    min: 17501,
    average: 32500,
    max: 363250,
    experience: "entry",
    education: "High School Diploma or relevant vocational training",
    location_factor: 1.02
  },
  developer: {
    min: 32500,
    average: 52448,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  development_manager: {
    min: 28000,
    average: 50000,
    max: 627500,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  diesel_mechanic: {
    min: 19000,
    average: 25000,
    max: 38500,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  diesel_technician: {
    min: 17500,
    average: 20000,
    max: 30000,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  dietitian: {
    min: 27750,
    average: 30000,
    max: 40000,
    experience: "mid",
    education: "Bachelor's Degree in Dietetics, registration with HPCSA",
    location_factor: 1.15
  },
  digital_designer: {
    min: 17500,
    average: 25000,
    max: 48117,
    experience: "entry",
    education: "Bachelor's Degree in Graphic Design or related",
    location_factor: 1.1
  },
  digital_marketing: {
    min: 20000,
    average: 27500,
    max: 90208,
    experience: "entry",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.15
  },
  director: {
    min: 22028,
    average: 62011,
    max: 410099,
    experience: "senior",
    education: "Bachelor's or Master's Degree in a relevant field",
    location_factor: 1.3
  },
  dishwasher: {
    min: 323159,
    average: 338921,
    max: 365633,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  dispatcher: {
    min: 12500,
    average: 14250,
    max: 24475,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  distribution_manager: {
    min: 27500,
    average: 43000,
    max: 491000,
    experience: "mid",
    education: "Bachelor's Degree in Logistics or Supply Chain Management",
    location_factor: 1.2
  },
  doctor: {
    min: 15375,
    average: 35000,
    max: 119000,
    experience: "mid",
    education: "Bachelor of Medicine and Bachelor of Surgery (MBChB) degree, registration with HPCSA",
    location_factor: 1.25
  },
  draughtsman: {
    min: 17481,
    average: 22958,
    max: 45000,
    experience: "entry",
    education: "Diploma or relevant certification in Draughting",
    location_factor: 1.08
  },
  drive_worker: {
    min: 30500,
    average: 30500,
    max: 30500,
    experience: "entry",
    education: "Varies by industry",
    location_factor: 1.01
  },
  driver: {
    min: 10000,
    average: 15000,
    max: 65408,
    experience: "entry",
    education: "Valid driver's license",
    location_factor: 1.01
  },
  driver_manager: {
    min: 22750,
    average: 52500,
    max: 240000,
    experience: "mid",
    education: "High School Diploma with logistics experience",
    location_factor: 1.08
  },
  dump_operator: {
    min: 13650,
    average: 15400,
    max: 20595,
    experience: "entry",
    education: "Relevant certification to operate heavy machinery",
    location_factor: 1.02
  },
  eco: {
    min: 15000,
    average: 24500,
    max: 62500,
    experience: "mid",
    education: "Varies significantly by role and industry",
    location_factor: 1.15
  },
  economist: {
    min: 36502,
    average: 174000,
    max: 766348,
    experience: "mid",
    education: "Bachelor's or Master's Degree in Economics",
    location_factor: 1.2
  },
  editor: {
    min: 14000,
    average: 22500,
    max: 64867,
    experience: "mid",
    education: "Bachelor's Degree in Journalism, Communications, or related",
    location_factor: 1.1
  },
  educator: {
    min: 15500,
    average: 25000,
    max: 61375,
    experience: "entry",
    education: "Relevant teaching qualification",
    location_factor: 1.05
  },
  electrical_engineer: {
    min: 22377,
    average: 43979,
    max: 420000,
    experience: "mid",
    education: "Bachelor's Degree in Electrical Engineering",
    location_factor: 1.2
  },
  electrical_foreman: {
    min: 28875,
    average: 44000,
    max: 600000,
    experience: "mid",
    education: "Relevant trade qualification and experience",
    location_factor: 1.08
  },
  electrical_technician: {
    min: 17035,
    average: 25001,
    max: 329250,
    experience: "entry",
    education: "Diploma or relevant certification in Electrical Engineering",
    location_factor: 1.05
  },
  electrician: {
    min: 17975,
    average: 25000,
    max: 53886,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  electronic_technician: {
    min: 14000,
    average: 19000,
    max: 210000,
    experience: "entry",
    education: "Diploma or relevant certification in Electronics Engineering",
    location_factor: 1.05
  },
  engine_mechanic: {
    min: 15000,
    average: 15000,
    max: 29375,
    experience: "Entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  engineer: {
    min: 25357,
    average: 46639,
    max: 600000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant engineering field",
    location_factor: 1.15
  },
  engineer_assistant: {
    min: 25000,
    average: 41667,
    max: 250000,
    experience: "entry",
    education: "Diploma or relevant certification in an engineering field",
    location_factor: 1.05
  },
  processing_engineer: {
    min: 25000,
    average: 46046,
    max: 500000,
    experience: "mid",
    education: "Bachelor's Degree in Chemical or Process Engineering",
    location_factor: 1.2
  },
  engineering_manager: {
    min: 30000,
    average: 57300,
    max: 169361,
    experience: "senior",
    education: "Bachelor's Degree in Engineering, management experience",
    location_factor: 1.3
  },
  engineering_supervisor: {
    min: 32000,
    average: 50000,
    max: 123333,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Engineering, experience",
    location_factor: 1.15
  },
  engineering_technician: {
    min: 19000,
    average: 33333,
    max: 369348,
    experience: "entry",
    education: "Diploma or relevant certification in an engineering field",
    location_factor: 1.05
  },
  english_teacher: {
    min: 17000,
    average: 26500,
    max: 40000,
    experience: "entry",
    education: "Bachelor's Degree in Education with English as a major",
    location_factor: 1.03
  },
  english_tutor: {
    min: 7500,
    average: 11000,
    max: 20000,
    experience: "entry",
    education: "Bachelor's Degree in English or Education",
    location_factor: 1.02
  },
  equipment_operator: {
    min: 22875,
    average: 32500,
    max: 168527,
    experience: "entry",
    education: "Relevant certification to operate specific equipment",
    location_factor: 1.02
  },
  est: {
    min: 18500,
    average: 18500,
    max: 25715,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.1
  },
  estimator: {
    min: 17500,
    average: 25000,
    max: 74400,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Quantity Surveying or related",
    location_factor: 1.08
  },
  event_coordinator: {
    min: 14000,
    average: 18500,
    max: 35000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Event Management or related",
    location_factor: 1.05
  },
  executive_assistant: {
    min: 18000,
    average: 25001,
    max: 75385,
    experience: "mid",
    education: "Diploma or Bachelor's Degree, strong administrative skills",
    location_factor: 1.1
  },
  executive_chef: {
    min: 22375,
    average: 28500,
    max: 42800,
    experience: "senior",
    education: "Relevant culinary qualifications and extensive experience",
    location_factor: 1.2
  },
  executive_secretary: {
    min: 17000,
    average: 22000,
    max: 42102,
    experience: "mid",
    education: "Diploma or Bachelor's Degree, strong secretarial skills",
    location_factor: 1.08
  },
  facilitator: {
    min: 17500,
    average: 30000,
    max: 169701,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.08
  },
  facilities_manager: {
    min: 25000,
    average: 40844,
    max: 400000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Facilities Management",
    location_factor: 1.1
  },
  factor: {
    min: 14000,
    average: 400000,
    max: 405000,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.05
  },
  fashion_designer: {
    min: 12500,
    average: 15000,
    max: 22500,
    experience: "entry",
    education: "Bachelor's Degree in Fashion Design",
    location_factor: 1.1
  },
  field_agent: {
    min: 10000,
    average: 15000,
    max: 25000,
    experience: "entry",
    education: "High School Diploma, specific training may be required",
    location_factor: 1.03
  },
  field_engineer: {
    min: 15000,
    average: 25943,
    max: 61367,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.15
  },
  field_representative: {
    min: 14000,
    average: 20000,
    max: 50000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.03
  },
  field_service_technician: {
    min: 20000,
    average: 27500,
    max: 49250,
    experience: "entry",
    education: "Diploma or relevant certification",
    location_factor: 1.05
  },
  field_technician: {
    min: 14000,
    average: 20000,
    max: 40000,
    experience: "entry",
    education: "Diploma or relevant certification",
    location_factor: 1.05
  },
  finance_analyst: {
    min: 28500,
    average: 51250,
    max: 625000,
    experience: "Entry",
    education: "Bachelor's Degree in Finance, Economics, or Accounting",
    location_factor: 1.15
  },
  finance_assistant: {
    min: 14500,
    average: 21000,
    max: 300000,
    experience: "entry",
    education: "Diploma in Finance or Accounting",
    location_factor: 1.05
  },
  finance_manager: {
    min: 29616,
    average: 52556,
    max: 652901,
    experience: "mid",
    education: "Bachelor's Degree in Finance or Accounting, relevant experience",
    location_factor: 1.25
  },
  financial_accountant: {
    min: 27500,
    average: 39961,
    max: 482077,
    experience: "entry",
    education: "Bachelor's Degree in Accounting",
    location_factor: 1.1
  },
  financial_administrator: {
    min: 13500,
    average: 17188,
    max: 34992,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Finance or Administration",
    location_factor: 1.08
  },
  financial_advisor: {
    min: 12500,
    average: 20000,
    max: 89625,
    experience: "mid",
    education: "Relevant certifications and licenses",
    location_factor: 1.2
  },
  financial_analyst: {
    min: 25310,
    average: 50000,
    max: 650000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or Accounting",
    location_factor: 1.15
  },
  financial_consultant: {
    min: 15000,
    average: 21500,
    max: 50000,
    experience: "mid",
    education: "Bachelor's Degree in Finance, Economics, or Accounting",
    location_factor: 1.2
  },
  financial_controller: {
    min: 26007,
    average: 45000,
    max: 584954,
    experience: "senior",
    education: "Bachelor's Degree in Finance or Accounting, CA(SA)",
    location_factor: 1.3
  },
  financial_planner: {
    min: 17500,
    average: 25836,
    max: 423750,
    experience: "mid",
    education: "Relevant certifications and licenses",
    location_factor: 1.2
  },
  financial_services: {
    min: 22089,
    average: 45399,
    max: 550000,
    experience: "entry",
    education: "Varies significantly by role",
    location_factor: 1.1
  },
  fire_engineer: {
    min: 35000,
    average: 43750,
    max: 441500,
    experience: "mid",
    education: "Bachelor's Degree in Fire Engineering",
    location_factor: 1.15
  },
  firefighter: {
    min: 27126,
    average: 102534,
    max: 181308,
    experience: "entry",
    education: "Relevant training and certifications",
    location_factor: 1.03
  },
  fitter: {
    min: 18531,
    average: 25001,
    max: 101393,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  fleet_manager: {
    min: 20000,
    average: 26500,
    max: 88750,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Logistics or related",
    location_factor: 1.1
  },
  flight_attendant: {
    min: 13350,
    average: 15075,
    max: 17450,
    experience: "entry",
    education: "High School Diploma, specific training provided by airline",
    location_factor: 1.05
  },
  food_manager: {
    min: 19000,
    average: 29250,
    max: 103498,
    experience: "mid",
    education: "High School Diploma with experience in food service",
    location_factor: 1.08
  },
  foreman: {
    min: 20046,
    average: 30000,
    max: 204463,
    experience: "mid",
    education: "Relevant trade qualification and experience",
    location_factor: 1.05
  },
  fork_operator: {
    min: 5690,
    average: 6345,
    max: 7000,
    experience: "entry",
    education: "Certification to operate a forklift",
    location_factor: 1.01
  },
  forklift_driver: {
    min: 7000,
    average: 13200,
    max: 22110,
    experience: "entry",
    education: "Certification to operate a forklift",
    location_factor: 1.01
  },
  forklift_operator: {
    min: 12000,
    average: 14275,
    max: 17530,
    experience: "entry",
    education: "Certification to operate a forklift",
    location_factor: 1.01
  },
  front_end: {
    min: 25000,
    average: 45000,
    max: 540000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  front_end_developer: {
    min: 29166,
    average: 46458,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  front_end_web_developer: {
    min: 30000,
    average: 50000,
    max: 720000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  front_office_manager: {
    min: 13500,
    average: 16000,
    max: 26000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Hospitality Management",
    location_factor: 1.1
  },
  full_stack_developer: {
    min: 29886,
    average: 50000,
    max: 576000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.3
  },
  game_developer: {
    min: 33750,
    average: 62500,
    max: 481500,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Game Development",
    location_factor: 1.2
  },
  general_cleaner: {
    min: 9200,
    average: 15750,
    max: 56000,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  general_foreman: {
    min: 30000,
    average: 37500,
    max: 430000,
    experience: "mid",
    education: "Relevant trade qualification and extensive experience",
    location_factor: 1.08
  },
  general_machine_operator: {
    min: 6751,
    average: 9501,
    max: 12250,
    experience: "entry",
    education: "Relevant vocational training or experience",
    location_factor: 1.02
  },
  general_manager: {
    min: 21500,
    average: 37500,
    max: 125000,
    experience: "senior",
    education: "Bachelor's Degree in Business or related, extensive experience",
    location_factor: 1.3
  },
  geologist: {
    min: 19921,
    average: 45001,
    max: 162433,
    experience: "entry",
    education: "Bachelor's Degree in Geology",
    location_factor: 1.1
  },
  graphic_designer: {
    min: 12501,
    average: 17433,
    max: 32500,
    experience: "entry",
    education: "Bachelor's Degree in Graphic Design or related",
    location_factor: 1.1
  },
  group_manager: {
    min: 27250,
    average: 58819,
    max: 725000,
    experience: "senior",
    education: "Bachelor's Degree in Business or related, management experience",
    location_factor: 1.25
  },
  guard: {
    min: 7625,
    average: 13500,
    max: 32500,
    experience: "entry",
    education: "Basic literacy, security training may be required",
    location_factor: 1.01
  },
  hair_stylist: {
    min: 8000,
    average: 10000,
    max: 20000,
    experience: "entry",
    education: "Relevant certification in Hairdressing",
    location_factor: 1.03
  },
  hairstylist: {
    min: 14000,
    average: 15000,
    max: 29500,
    experience: "entry",
    education: "Relevant certification in Hairdressing",
    location_factor: 1.03
  },
  hand: {
    min: 12500,
    average: 17500,
    max: 40000,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  handyman: {
    min: 12500,
    average: 15283,
    max: 42725,
    experience: "entry",
    education: "Basic DIY skills or relevant vocational training",
    location_factor: 1.02
  },
  head_chef: {
    min: 17167,
    average: 20250,
    max: 33000,
    experience: "senior",
    education: "Relevant culinary qualifications and significant experience",
    location_factor: 1.2
  },
  health_manager: {
    min: 25250,
    average: 44750,
    max: 558960,
    experience: "mid",
    education: "Bachelor's Degree in Healthcare Management or related",
    location_factor: 1.15
  },
  health_officer: {
    min: 16000,
    average: 25000,
    max: 51333,
    experience: "entry",
    education: "Relevant qualification in public health or related",
    location_factor: 1.08
  },
  health_safety_manager: {
    min: 21250,
    average: 37750,
    max: 550000,
    experience: "mid",
    education: "Relevant qualifications in occupational health and safety",
    location_factor: 1.15
  },
  health_safety: {
    min: 16873,
    average: 26657,
    max: 91825,
    experience: "entry",
    education: "Relevant qualifications in health and safety",
    location_factor: 1.05
  },
  hospital_manager: {
    min: 30500,
    average: 52083,
    max: 613000,
    experience: "senior",
    education: "Bachelor's or Master's Degree in Healthcare Management",
    location_factor: 1.25
  },
  hospital_pharmacist: {
    min: 32500,
    average: 40375,
    max: 570000,
    experience: "mid",
    education: "Bachelor's Degree in Pharmacy, registration with SAPC",
    location_factor: 1.2
  },
  host: {
    min: 14000,
    average: 20000,
    max: 201502,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  hostess: {
    min: 9500,
    average: 13175,
    max: 19700,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  hotel_general_manager: {
    min: 14279,
    average: 28000,
    max: 55000,
    experience: "senior",
    education: "Bachelor's Degree in Hospitality Management, extensive experience",
    location_factor: 1.25
  },
  hotel_receptionist: {
    min: 8000,
    average: 11000,
    max: 14000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  house_manager: {
    min: 13000,
    average: 16500,
    max: 35000,
    experience: "entry",
    education: "High School Diploma or relevant experience",
    location_factor: 1.02
  },
  hr_administrator: {
    min: 13500,
    average: 16504,
    max: 27690,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Human Resources",
    location_factor: 1.05
  },
  hr_assistant: {
    min: 12500,
    average: 16000,
    max: 32500,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Human Resources",
    location_factor: 1.05
  },
  hr_consultant: {
    min: 17875,
    average: 25001,
    max: 240000,
    experience: "mid",
    education: "Bachelor's Degree in Human Resources",
    location_factor: 1.15
  },
  hr_generalist: {
    min: 21500,
    average: 30000,
    max: 52000,
    experience: "mid",
    education: "Bachelor's Degree in Human Resources",
    location_factor: 1.15
  },
  hr_manager: {
    min: 25526,
    average: 38045,
    max: 144762,
    experience: "mid",
    education: "Bachelor's Degree in Human Resources",
    location_factor: 1.2
  },
  hr_officer: {
    min: 17500,
    average: 25000,
    max: 45000,
    experience: "entry",
    education: "Bachelor's Degree in Human Resources",
    location_factor: 1.1
  },
  hr_specialist: {
    min: 25001,
    average: 40000,
    max: 382447,
    experience: "mid",
    education: "Bachelor's Degree in Human Resources, specialized skills",
    location_factor: 1.2
  },
  human_resources: {
    min: 18000,
    average: 30000,
    max: 244381,
    experience: "entry",
    education: "Bachelor's Degree in Human Resources",
    location_factor: 1.1
  },
  human_resources_manager: {
    min: 25000,
    average: 40000,
    max: 494000,
    experience: "mid",
    education: "Bachelor's Degree in Human Resources",
    location_factor: 1.2
  },
  hvac_engineer: {
    min: 35000,
    average: 50000,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Mechanical Engineering with HVAC focus",
    location_factor: 1.2
  },
  icu_nurse: {
    min: 26000,
    average: 32000,
    max: 240000,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing, specialized training",
    location_factor: 1.2
  },
  industrial_engineer: {
    min: 24000,
    average: 35109,
    max: 338667,
    experience: "mid",
    education: "Bachelor's Degree in Industrial Engineering",
    location_factor: 1.2
  },
  information_analyst: {
    min: 40000,
    average: 85001,
    max: 780000,
    experience: "entry",
    education: "Bachelor's Degree in Information Technology or related",
    location_factor: 1.1
  },
  information_developer: {
    min: 43750,
    average: 201953,
    max: 506000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  inspector: {
    min: 16667,
    average: 30000,
    max: 300462,
    experience: "entry",
    education: "Relevant qualifications or experience depending on the field",
    location_factor: 1.05
  },
  installation_tech: {
    min: 25000,
    average: 25000,
    max: 25000,
    experience: "entry",
    education: "Relevant technical training or certification",
    location_factor: 1.03
  },
  installation_technician: {
    min: 11500,
    average: 15000,
    max: 37500,
    experience: "entry",
    education: "Relevant technical training or certification",
    location_factor: 1.03
  },
  instructor: {
    min: 15168,
    average: 20000,
    max: 32400,
    experience: "entry",
    education: "Relevant qualifications and experience in the subject",
    location_factor: 1.05
  },
  instrument_technician: {
    min: 31125,
    average: 68750,
    max: 650000,
    experience: "entry",
    education: "Diploma or relevant certification in Instrumentation",
    location_factor: 1.05
  },
  instrumentation_technician: {
    min: 27500,
    average: 37500,
    max: 429250,
    experience: "entry",
    education: "Diploma or relevant certification in Instrumentation",
    location_factor: 1.05
  },
  insurance_agent: {
    min: 8000,
    average: 16000,
    max: 37500,
    experience: "entry",
    education: "Relevant certifications and licenses",
    location_factor: 1.1
  },
  insurance_broker: {
    min: 16800,
    average: 25000,
    max: 63526,
    experience: "mid",
    education: "Relevant certifications and licenses",
    location_factor: 1.15
  },
  insurance_underwriter: {
    min: 16750,
    average: 22500,
    max: 65570,
    experience: "entry",
    education: "Bachelor's Degree in Commerce, Finance, or related",
    location_factor: 1.1
  },
  intelligence: {
    min: 37500,
    average: 60001,
    max: 700000,
    experience: "entry",
    education: "Varies significantly by role and organization",
    location_factor: 1.15
  },
  intelligence_analyst: {
    min: 35000,
    average: 58333,
    max: 650000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.15
  },
  interface_designer: {
    min: 25000,
    average: 40000,
    max: 72083,
    experience: "entry",
    education: "Bachelor's Degree in Design or related",
    location_factor: 1.1
  },
  interior_designer: {
    min: 12500,
    average: 21500,
    max: 35150,
    experience: "entry",
    education: "Bachelor's Degree in Interior Design",
    location_factor: 1.1
  },
  intern: {
    min: 8231,
    average: 12500,
    max: 70054,
    experience: "entry",
    education: "Enrolled in a relevant degree or vocational program",
    location_factor: 1.01
  },
  internal_audit_manager: {
    min: 40000,
    average: 85001,
    max: 813750,
    experience: "mid",
    education: "Bachelor's Degree in Accounting or Auditing, relevant certifications",
    location_factor: 1.25
  },
  internal_auditor: {
    min: 25000,
    average: 44926,
    max: 531979,
    experience: "entry",
    education: "Bachelor's Degree in Accounting or Internal Auditing",
    location_factor: 1.1
  },
  interpreter: {
    min: 13750,
    average: 17250,
    max: 272098,
    experience: "entry",
    education: "Relevant language proficiency and/or certification",
    location_factor: 1.05
  },
  inventory_controller: {
    min: 16000,
    average: 25000,
    max: 184500,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Logistics or Supply Chain Management",
    location_factor: 1.08
  },
  inventory_manager: {
    min: 25001,
    average: 44083,
    max: 487000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Logistics or Supply Chain Management",
    location_factor: 1.15
  },
  investigator: {
    min: 19875,
    average: 49632,
    max: 637500,
    experience: "entry",
    education: "Relevant experience or qualifications depending on the field",
    location_factor: 1.08
  },
  investment_advisor: {
    min: 25000,
    average: 40000,
    max: 71500,
    experience: "mid",
    education: "Relevant certifications and licenses",
    location_factor: 1.2
  },
  investment_analyst: {
    min: 35001,
    average: 66667,
    max: 675000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.15
  },
  investment_manager: {
    min: 40000,
    average: 68750,
    max: 653500,
    experience: "mid",
    education: "Bachelor's or Master's Degree in Finance or related",
    location_factor: 1.25
  },
  ios_developer: {
    min: 45000,
    average: 75000,
    max: 775000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  it_analyst: {
    min: 25001,
    average: 40000,
    max: 549745,
    experience: "entry",
    education: "Bachelor's Degree in Information Technology or related",
    location_factor: 1.1
  },
  it_auditor: {
    min: 44896,
    average: 400000,
    max: 750000,
    experience: "entry",
    education: "Bachelor's Degree in Information Technology or Accounting",
    location_factor: 1.15
  },
  it_consultant: {
    min: 15000,
    average: 25000,
    max: 70000,
    experience: "mid",
    education: "Bachelor's Degree in Information Technology or related",
    location_factor: 1.2
  },
  it_manager: {
    min: 27500,
    average: 50000,
    max: 550000,
    experience: "mid",
    education: "Bachelor's Degree in Information Technology or related",
    location_factor: 1.25
  },
  it_project_manager: {
    min: 35000,
    average: 55000,
    max: 430000,
    experience: "mid",
    education: "Bachelor's Degree in Information Technology or related",
    location_factor: 1.25
  },
  it_specialist: {
    min: 24156,
    average: 47003,
    max: 670321,
    experience: "mid",
    education: "Bachelor's Degree in Information Technology or related",
    location_factor: 1.2
  },
  it_technician: {
    min: 12750,
    average: 16000,
    max: 27611,
    experience: "entry",
    education: "Diploma or relevant certification in Information Technology",
    location_factor: 1.05
  },
  java_developer: {
    min: 40000,
    average: 70000,
    max: 719571,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  job_analyst: {
    min: 39396,
    average: 50000,
    max: 687500,
    experience: "entry",
    education: "Bachelor's Degree in Human Resources or related",
    location_factor: 1.1
  },
  job_developer: {
    min: 35417,
    average: 50000,
    max: 463000,
    experience: "entry",
    education: "Bachelor's Degree in Human Resources or related",
    location_factor: 1.1
  },
  journalist: {
    min: 13500,
    average: 16750,
    max: 32000,
    experience: "entry",
    education: "Bachelor's Degree in Journalism or Communications",
    location_factor: 1.08
  },
  key_account_manager: {
    min: 24000,
    average: 32500,
    max: 185572,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.2
  },
  kitchen_manager: {
    min: 13000,
    average: 17500,
    max: 25000,
    experience: "mid",
    education: "High School Diploma with experience in food service",
    location_factor: 1.08
  },
  lab_manager: {
    min: 17025,
    average: 35000,
    max: 427250,
    experience: "mid",
    education: "Bachelor's Degree in a relevant scientific field",
    location_factor: 1.15
  },
  lab_tech: {
    min: 17025,
    average: 17025,
    max: 88404,
    experience: "entry",
    education: "Diploma or relevant certification in a scientific field",
    location_factor: 1.03
  },
  lab_technician: {
    min: 14688,
    average: 17800,
    max: 41733,
    experience: "entry",
    education: "Diploma or relevant certification in a scientific field",
    location_factor: 1.03
  },
  laboratory_technician: {
    min: 15095,
    average: 17500,
    max: 51667,
    experience: "entry",
    education: "Diploma or relevant certification in a scientific field",
    location_factor: 1.03
  },
  lawyer: {
    min: 13375,
    average: 30000,
    max: 159495,
    experience: "mid",
    education: "Bachelor of Laws (LLB) degree, admitted as an Attorney/Advocate",
    location_factor: 1.2
  },
  leader: {
    min: 16000,
    average: 27500,
    max: 200884,
    experience: "mid",
    education: "Varies significantly by role and industry",
    location_factor: 1.2
  },
  lecturer: {
    min: 20000,
    average: 45001,
    max: 614250,
    experience: "entry",
    education: "Master's Degree in the relevant field",
    location_factor: 1.1
  },
  legal_assistant: {
    min: 12500,
    average: 17500,
    max: 172970,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Law or Legal Studies",
    location_factor: 1.05
  },
  legal_counsel: {
    min: 25000,
    average: 79583,
    max: 700000,
    experience: "mid",
    education: "Bachelor of Laws (LLB) degree, admitted as an Attorney/Advocate",
    location_factor: 1.25
  },
  legal_secretary: {
    min: 13500,
    average: 17000,
    max: 35001,
    experience: "entry",
    education: "Diploma in Legal Secretarial Studies",
    location_factor: 1.03
  },
  librarian: {
    min: 21781,
    average: 51303,
    max: 483299,
    experience: "entry",
    education: "Bachelor's Degree in Library Science or Information Science",
    location_factor: 1.05
  },
  litigation_secretary: {
    min: 13000,
    average: 15750,
    max: 23350,
    experience: "entry",
    education: "Diploma in Legal Secretarial Studies",
    location_factor: 1.03
  },
  logistics_coordinator: {
    min: 16500,
    average: 22500,
    max: 39850,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Logistics or Supply Chain Management",
    location_factor: 1.08
  },
  logistics_manager: {
    min: 25000,
    average: 40000,
    max: 387176,
    experience: "mid",
    education: "Bachelor's Degree in Logistics or Supply Chain Management",
    location_factor: 1.2
  },
  logistics_specialist: {
    min: 27000,
    average: 40000,
    max: 400000,
    experience: "entry",
    education: "Bachelor's Degree in Logistics or Supply Chain Management",
    location_factor: 1.1
  },
  machine_operator: {
    min: 12000,
    average: 15388,
    max: 37275,
    experience: "entry",
    education: "Relevant vocational training or experience",
    location_factor: 1.02
  },
  machinist: {
    min: 16375,
    average: 22500,
    max: 45000,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  maintenance_engineer: {
    min: 37500,
    average: 57500,
    max: 650000,
    experience: "mid",
    education: "Bachelor's Degree in Mechanical or Electrical Engineering",
    location_factor: 1.15
  },
  maintenance_manager: {
    min: 18993,
    average: 37500,
    max: 332028,
    experience: "mid",
    education: "Bachelor's Degree in Engineering or Facilities Management",
    location_factor: 1.15
  },
  maintenance_mechanic: {
    min: 19000,
    average: 22500,
    max: 35000,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  maintenance_millwright: {
    min: 26000,
    average: 35000,
    max: 384000,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  maintenance_planner: {
    min: 26500,
    average: 42958,
    max: 471000,
    experience: "entry",
    education: "Diploma or experience in maintenance planning",
    location_factor: 1.05
  },
  maintenance_technician: {
    min: 17500,
    average: 25000,
    max: 49204,
    experience: "entry",
    education: "Diploma or relevant certification",
    location_factor: 1.05
  },
  manager: {
    min: 23162,
    average: 40000,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field, experience",
    location_factor: 1.2
  },
  manufacturing_millwright: {
    min: 27500,
    average: 35000,
    max: 40000,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  marine_engineer: {
    min: 15000,
    average: 35000,
    max: 316266,
    experience: "mid",
    education: "Bachelor's Degree in Marine Engineering",
    location_factor: 1.15
  },
  market_analyst: {
    min: 27917,
    average: 60001,
    max: 550000,
    experience: "entry",
    education: "Bachelor's Degree in Marketing, Economics, or Statistics",
    location_factor: 1.15
  },
  market_manager: {
    min: 17500,
    average: 43333,
    max: 90000,
    experience: "mid",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.2
  },
  marketer: {
    min: 15000,
    average: 20716,
    max: 44083,
    experience: "entry",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.1
  },
  marketing_analyst: {
    min: 25000,
    average: 45833,
    max: 423750,
    experience: "entry",
    education: "Bachelor's Degree in Marketing, Economics, or Statistics",
    location_factor: 1.15
  },
  marketing_assistant: {
    min: 12500,
    average: 16490,
    max: 27500,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Marketing or related",
    location_factor: 1.05
  },
  marketing_consultant: {
    min: 15000,
    average: 20000,
    max: 35001,
    experience: "mid",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.2
  },
  marketing_coordinator: {
    min: 15458,
    average: 20000,
    max: 35000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Marketing or related",
    location_factor: 1.08
  },
  marketing_manager: {
    min: 22760,
    average: 37838,
    max: 266400,
    experience: "mid",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.25
  },
  marketing_specialist: {
    min: 22500,
    average: 32500,
    max: 169771,
    experience: "entry",
    education: "Bachelor's Degree in Marketing or related",
    location_factor: 1.1
  },
  massage_therapist: {
    min: 11000,
    average: 20000,
    max: 26500,
    experience: "entry",
    education: "Relevant certification in Massage Therapy",
    location_factor: 1.03
  },
  mechanic: {
    min: 16175,
    average: 22033,
    max: 37500,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  mechanical_engineer: {
    min: 22500,
    average: 41457,
    max: 355000,
    experience: "mid",
    education: "Bachelor's Degree in Mechanical Engineering",
    location_factor: 1.2
  },
  mechanical_technician: {
    min: 15000,
    average: 22750,
    max: 47292,
    experience: "entry",
    education: "Diploma or relevant certification in Mechanical Engineering",
    location_factor: 1.05
  },
  media_manager: {
    min: 18500,
    average: 25000,
    max: 45000,
    experience: "mid",
    education: "Bachelor's Degree in Media Studies, Communications, or related",
    location_factor: 1.15
  },
  medical_consultant: {
    min: 15000,
    average: 21500,
    max: 35250,
    experience: "senior",
    education: "Relevant medical specialization and registration",
    location_factor: 1.3
  },
  medical_doctor: {
    min: 18500,
    average: 45000,
    max: 181563,
    experience: "mid",
    education: "Bachelor of Medicine and Bachelor of Surgery (MBChB) degree, registration with HPCSA",
    location_factor: 1.25
  },
  medical_manager: {
    min: 21750,
    average: 42500,
    max: 421000,
    experience: "mid",
    education: "Bachelor's Degree in Medicine or Healthcare Management",
    location_factor: 1.2
  },
  medical_officer: {
    min: 13374,
    average: 30000,
    max: 461928,
    experience: "entry",
    education: "Bachelor of Medicine and Bachelor of Surgery (MBChB) degree, registration with HPCSA",
    location_factor: 1.2
  },
  medical_technologist: {
    min: 22125,
    average: 30000,
    max: 307030,
    experience: "entry",
    education: "Bachelor's Degree in Medical Technology",
    location_factor: 1.1
  },
  merchandiser: {
    min: 12500,
    average: 16500,
    max: 35000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  midwife: {
    min: 25000,
    average: 33500,
    max: 335000,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing and Midwifery, registration with SANC",
    location_factor: 1.15
  },
  millwright: {
    min: 25000,
    average: 33533,
    max: 147069,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  mine_manager: {
    min: 27500,
    average: 104897,
    max: 195417,
    experience: "senior",
    education: "Bachelor's Degree in Mining Engineering, relevant certifications",
    location_factor: 1.3
  },
  miner: {
    min: 20000,
    average: 33000,
    max: 49375,
    experience: "entry",
    education: "Relevant vocational training or experience",
    location_factor: 1.02
  },
  mining_engineer: {
    min: 21061,
    average: 50000,
    max: 300000,
    experience: "mid",
    education: "Bachelor's Degree in Mining Engineering",
    location_factor: 1.2
  },
  mining_manager: {
    min: 30000,
    average: 62500,
    max: 168739,
    experience: "senior",
    education: "Bachelor's Degree in Mining Engineering, relevant certifications",
    location_factor: 1.3
  },
  monitor: {
    min: 14564,
    average: 31570,
    max: 88850,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.05
  },
  nanny: {
    min: 8750,
    average: 13100,
    max: 30000,
    experience: "entry",
    education: "High School Diploma, childcare qualifications preferred",
    location_factor: 1.01
  },
  network: {
    min: 20743,
    average: 40000,
    max: 377731,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  network_engineer: {
    min: 25000,
    average: 42500,
    max: 435750,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  night_auditor: {
    min: 10000,
    average: 15000,
    max: 60003,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  nurse: {
    min: 19739,
    average: 27500,
    max: 144721,
    experience: "entry",
    education: "Bachelor's Degree or Diploma in Nursing, registration with SANC",
    location_factor: 1.1
  },
  nurse_educator: {
    min: 36875,
    average: 45000,
    max: 474750,
    experience: "mid",
    education: "Bachelor's Degree in Nursing, specialized education",
    location_factor: 1.15
  },
  nurse_manager: {
    min: 31333,
    average: 40000,
    max: 250019,
    experience: "mid",
    education: "Bachelor's Degree in Nursing, management experience",
    location_factor: 1.2
  },
  nurse_midwife: {
    min: 8875,
    average: 25833,
    max: 306250,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing and Midwifery, registration with SANC",
    location_factor: 1.15
  },
  nursing_assistant: {
    min: 18481,
    average: 52290,
    max: 562800,
    experience: "entry",
    education: "Relevant basic nursing qualifications",
    location_factor: 1.01
  },
  occupational_therapist: {
    min: 24000,
    average: 28000,
    max: 293995,
    experience: "mid",
    education: "Bachelor's Degree in Occupational Therapy, registration with HPCSA",
    location_factor: 1.15
  },
  office_administrator: {
    min: 12000,
    average: 15000,
    max: 25000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Office Administration",
    location_factor: 1.05
  },
  office_assistant: {
    min: 12000,
    average: 15000,
    max: 26975,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  office_cleaner: {
    min: 12000,
    average: 14825,
    max: 29200,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  office_manager: {
    min: 16234,
    average: 22500,
    max: 61788,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Office Management",
    location_factor: 1.1
  },
  officer: {
    min: 18735,
    average: 30090,
    max: 396191,
    experience: "entry",
    education: "Varies significantly by role and organization",
    location_factor: 1.1
  },
  oncology_nurse: {
    min: 24066,
    average: 27083,
    max: 309952,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing, specialized training",
    location_factor: 1.2
  },
  operations_manager: {
    min: 27500,
    average: 46168,
    max: 571694,
    experience: "mid",
    education: "Bachelor's Degree in Business or related, experience",
    location_factor: 1.25
  },
  operations_supervisor: {
    min: 15375,
    average: 22000,
    max: 50000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in a relevant field, experience",
    location_factor: 1.15
  },
  operator: {
    min: 12000,
    average: 16372,
    max: 65477,
    experience: "entry",
    education: "Relevant training or certification for specific machinery",
    location_factor: 1.02
  },
  optometrist: {
    min: 19250,
    average: 27500,
    max: 37875,
    experience: "mid",
    education: "Bachelor of Optometry degree, registration with HPCSA",
    location_factor: 1.2
  },
  oracle_developer: {
    min: 69000,
    average: 201586,
    max: 800000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  packer: {
    min: 6500,
    average: 11000,
    max: 57000,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  painter: {
    min: 11000,
    average: 14500,
    max: 31750,
    experience: "entry",
    education: "Basic literacy or relevant vocational training",
    location_factor: 1.02
  },
  paralegal: {
    min: 15000,
    average: 20000,
    max: 33333,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Law or Legal Studies",
    location_factor: 1.05
  },
  paramedic: {
    min: 17167,
    average: 24250,
    max: 36950,
    experience: "entry",
    education: "Relevant emergency medical qualifications",
    location_factor: 1.05
  },
  partner: {
    min: 25000,
    average: 41967,
    max: 500000,
    experience: "senior",
    education: "Varies significantly by role and industry, often advanced degrees",
    location_factor: 1.3
  },
  pastry_chef: {
    min: 11000,
    average: 17000,
    max: 30000,
    experience: "mid",
    education: "Relevant culinary qualifications or experience",
    location_factor: 1.08
  },
  payroll: {
    min: 15000,
    average: 21616,
    max: 232163,
    experience: "entry",
    education: "Diploma or certificate in Payroll Administration",
    location_factor: 1.05
  },
  payroll_administrator: {
    min: 15000,
    average: 18938,
    max: 35000,
    experience: "entry",
    education: "Diploma or certificate in Payroll Administration",
    location_factor: 1.05
  },
  payroll_clerk: {
    min: 13000,
    average: 15000,
    max: 23813,
    experience: "entry",
    education: "High School Diploma with basic accounting knowledge",
    location_factor: 1.02
  },
  payroll_manager: {
    min: 30000,
    average: 42500,
    max: 550000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Payroll Administration",
    location_factor: 1.15
  },
  personal_assistant: {
    min: 13500,
    average: 17501,
    max: 35000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree, strong administrative skills",
    location_factor: 1.08
  },
  pharmaceutical_representative: {
    min: 20000,
    average: 27500,
    max: 49950,
    experience: "entry",
    education: "Bachelor's Degree in Pharmacy or a related scientific field",
    location_factor: 1.1
  },
  pharmacist: {
    min: 21000,
    average: 45000,
    max: 490000,
    experience: "mid",
    education: "Bachelor's Degree in Pharmacy, registration with SAPC",
    location_factor: 1.2
  },
  pharmacist_assistant: {
    min: 17625,
    average: 20000,
    max: 94015,
    experience: "entry",
    education: "Relevant certification as a Pharmacy Assistant",
    location_factor: 1.03
  },
  pharmacy_manager: {
    min: 44167,
    average: 55000,
    max: 636750,
    experience: "mid",
    education: "Bachelor's Degree in Pharmacy, registration with SAPC",
    location_factor: 1.2
  },
  photographer: {
    min: 12000,
    average: 14500,
    max: 30000,
    experience: "entry",
    education: "Portfolio showcasing skills",
    location_factor: 1.02
  },
  php_developer: {
    min: 30000,
    average: 45000,
    max: 420500,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  php_web_developer: {
    min: 31700,
    average: 50000,
    max: 420000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  physiotherapist: {
    min: 26053,
    average: 37500,
    max: 93500,
    experience: "mid",
    education: "Bachelor's Degree in Physiotherapy, registration with HPCSA",
    location_factor: 1.15
  },
  pic: {
    min: 27000,
    average: 27000,
    max: 27000,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.1
  },
  picker: {
    min: 6500,
    average: 11000,
    max: 50001,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  pilot: {
    min: 12000,
    average: 22500,
    max: 315300,
    experience: "mid",
    education: "Relevant aviation licenses and certifications",
    location_factor: 1.25
  },
  planner: {
    min: 20000,
    average: 30000,
    max: 244250,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.1
  },
  plant_engineer: {
    min: 31875,
    average: 75000,
    max: 732500,
    experience: "mid",
    education: "Bachelor's Degree in Engineering (e.g., Mechanical, Electrical)",
    location_factor: 1.2
  },
  plant_manager: {
    min: 27333,
    average: 52000,
    max: 700000,
    experience: "mid",
    education: "Bachelor's Degree in Engineering or Operations Management",
    location_factor: 1.25
  },
  plumber: {
    min: 12750,
    average: 15000,
    max: 31800,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  police_officer: {
    min: 25997,
    average: 245247,
    max: 316791,
    experience: "entry",
    education: "Relevant training and qualifications from the South African Police Service",
    location_factor: 1.05
  },
  port_engineer: {
    min: 32500,
    average: 39792,
    max: 635994,
    experience: "mid",
    education: "Bachelor's Degree in Marine Engineering or related",
    location_factor: 1.15
  },
  porter: {
    min: 10448,
    average: 15100,
    max: 102534,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  portfolio_manager: {
    min: 22500,
    average: 37500,
    max: 476125,
    experience: "mid",
    education: "Bachelor's Degree in Finance or related",
    location_factor: 1.25
  },
  pricing_actuary: {
    min: 79125,
    average: 125000,
    max: 867500,
    experience: "mid",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  pricing_analyst: {
    min: 50000,
    average: 387500,
    max: 772500,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.15
  },
  principal: {
    min: 19749,
    average: 52500,
    max: 376060,
    experience: "senior",
    education: "Relevant teaching qualifications and experience",
    location_factor: 1.2
  },
  principal_engineer: {
    min: 18000,
    average: 66667,
    max: 848504,
    experience: "senior",
    education: "Bachelor's Degree in Engineering, extensive experience",
    location_factor: 1.3
  },
  process_engineer: {
    min: 25000,
    average: 46046,
    max: 500000,
    experience: "mid",
    education: "Bachelor's Degree in Chemical or Process Engineering",
    location_factor: 1.2
  },
  process_technician: {
    min: 22500,
    average: 32500,
    max: 63219,
    experience: "entry",
    education: "Diploma or relevant certification in a technical field",
    location_factor: 1.05
  },
  procurement_manager: {
    min: 30105,
    average: 45840,
    max: 420000,
    experience: "mid",
    education: "Bachelor's Degree in Supply Chain Management or related",
    location_factor: 1.2
  },
  procurement_specialist: {
    min: 30000,
    average: 46503,
    max: 510000,
    experience: "entry",
    education: "Bachelor's Degree in Supply Chain Management or related",
    location_factor: 1.1
  },
  product_developer: {
    min: 27500,
    average: 42500,
    max: 550000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.15
  },
  product_engineer: {
    min: 33875,
    average: 49625,
    max: 525000,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.15
  },
  product_manager: {
    min: 23078,
    average: 45000,
    max: 526850,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.25
  },
  product_specialist: {
    min: 22500,
    average: 40300,
    max: 426188,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.1
  },
  production_assistant: {
    min: 14500,
    average: 20000,
    max: 43000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  production_leader: {
    min: 18001,
    average: 28750,
    max: 375000,
    experience: "entry",
    education: "Relevant experience in production",
    location_factor: 1.03
  },
  production_manager: {
    min: 25000,
    average: 37500,
    max: 284000,
    experience: "mid",
    education: "Bachelor's Degree in Engineering or Operations Management",
    location_factor: 1.2
  },
  production_planner: {
    min: 22125,
    average: 30000,
    max: 275000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Production Management or related",
    location_factor: 1.08
  },
  production_supervisor: {
    min: 18000,
    average: 24000,
    max: 45000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Production Management or related",
    location_factor: 1.1
  },
  professional_surveyor: {
    min: 40000,
    average: 65000,
    max: 550000,
    experience: "mid",
    education: "Bachelor's Degree in Surveying or Geomatics",
    location_factor: 1.15
  },
  professor: {
    min: 154269,
    average: 774379,
    max: 978044,
    experience: "senior",
    education: "PhD in the relevant field",
    location_factor: 1.25
  },
  program_analyst: {
    min: 41000,
    average: 41000,
    max: 41000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.1
  },
  program_manager: {
    min: 22500,
    average: 52000,
    max: 550000,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field, management experience",
    location_factor: 1.25
  },
  programmer: {
    min: 25000,
    average: 40000,
    max: 435000,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  programmer_analyst: {
    min: 59588,
    average: 100000,
    max: 780000,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  programmer_developer: {
    min: 30000,
    average: 45001,
    max: 587500,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  project_coordinator: {
    min: 17500,
    average: 24000,
    max: 179750,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Project Management or related",
    location_factor: 1.08
  },
  project_engineer: {
    min: 25000,
    average: 43938,
    max: 450000,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.15
  },
  project_manager: {
    min: 30000,
    average: 50000,
    max: 568786,
    experience: "mid",
    education: "Bachelor's Degree in Project Management or relevant field, experience",
    location_factor: 1.25
  },
  project_manager_senior: {
    min: 34000,
    average: 65210,
    max: 697362,
    experience: "senior",
    education: "Bachelor's Degree in Project Management or relevant field, extensive experience",
    location_factor: 1.3
  },
  provider: {
    min: 18000,
    average: 30000,
    max: 105833,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.1
  },
  psychologist: {
    min: 23719,
    average: 44504,
    max: 470250,
    experience: "mid",
    education: "Bachelor's Degree in Psychology, often Master's or registration with HPCSA",
    location_factor: 1.15
  },
  public_relations: {
    min: 17500,
    average: 25000,
    max: 61295,
    experience: "entry",
    education: "Bachelor's Degree in Public Relations, Communications, or related",
    location_factor: 1.1
  },
  quality_analyst: {
    min: 19000,
    average: 33333,
    max: 325000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.08
  },
  quality_assurance_qa: {
    min: 17501,
    average: 32500,
    max: 373872,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.08
  },
  quality_assurance_manager: {
    min: 21500,
    average: 35001,
    max: 465252,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field, management experience",
    location_factor: 1.2
  },
  quality_control: {
    min: 20000,
    average: 30000,
    max: 200000,
    experience: "entry",
    education: "High School Diploma with relevant training",
    location_factor: 1.02
  },
  quality_controller: {
    min: 15000,
    average: 20000,
    max: 39125,
    experience: "entry",
    education: "High School Diploma with relevant training",
    location_factor: 1.02
  },
  quality_engineer: {
    min: 23000,
    average: 40000,
    max: 171600,
    experience: "entry",
    education: "Bachelor's Degree in Engineering or a related field",
    location_factor: 1.15
  },
  quality_manager: {
    min: 22114,
    average: 35139,
    max: 375000,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field, management experience",
    location_factor: 1.2
  },
  quality_specialist: {
    min: 21720,
    average: 40000,
    max: 93000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.1
  },
  quantitative_analyst: {
    min: 64583,
    average: 525000,
    max: 850000,
    experience: "mid",
    education: "Bachelor's or Master's Degree in Finance, Mathematics, Statistics",
    location_factor: 1.3
  },
  quantity_surveyor: {
    min: 20000,
    average: 31700,
    max: 70194,
    experience: "mid",
    education: "Bachelor's Degree in Quantity Surveying",
    location_factor: 1.15
  },
  radiographer: {
    min: 30000,
    average: 38000,
    max: 74341,
    experience: "entry",
    education: "Bachelor's Degree or Diploma in Radiography, registration with HPCSA",
    location_factor: 1.1
  },
  real_estate_agent: {
    min: 16667,
    average: 32500,
    max: 360000,
    experience: "entry",
    education: "High School Diploma, registration with the Estate Agency Affairs Board",
    location_factor: 1.1
  },
  receptionist: {
    min: 10000,
    average: 12500,
    max: 19000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  recruiter: {
    min: 13500,
    average: 20000,
    max: 54625,
    experience: "entry",
    education: "Bachelor's Degree in Human Resources or related",
    location_factor: 1.1
  },
  recruitment_consultant: {
    min: 13500,
    average: 20000,
    max: 83284,
    experience: "entry",
    education: "Bachelor's Degree in Human Resources or related",
    location_factor: 1.1
  },
  refrigeration_technician: {
    min: 18167,
    average: 24000,
    max: 39563,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.03
  },
  regional_manager: {
    min: 23897,
    average: 40607,
    max: 277096,
    experience: "senior",
    education: "Bachelor's Degree in Business or related, extensive experience",
    location_factor: 1.25
  },
  registered_nurse: {
    min: 22000,
    average: 26830,
    max: 58261,
    experience: "entry",
    education: "Bachelor's Degree or Diploma in Nursing, registration with SANC",
    location_factor: 1.1
  },
  registered_nurse_midwife: {
    min: 25833,
    average: 35950,
    max: 333700,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing and Midwifery, registration with SANC",
    location_factor: 1.15
  },
  registrar: {
    min: 34250,
    average: 136208,
    max: 521460,
    experience: "mid",
    education: "Bachelor's Degree in a relevant field, administrative experience",
    location_factor: 1.1
  },
  relationship_manager: {
    min: 20000,
    average: 35000,
    max: 345000,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.2
  },
  reporter: {
    min: 16125,
    average: 30000,
    max: 47500,
    experience: "entry",
    education: "Bachelor's Degree in Journalism or Communications",
    location_factor: 1.08
  },
  reporting_analyst: {
    min: 35000,
    average: 58333,
    max: 650000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, IT, or related",
    location_factor: 1.15
  },
  representative: {
    min: 15000,
    average: 20000,
    max: 53519,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.05
  },
  research_analyst: {
    min: 25000,
    average: 66667,
    max: 566880,
    experience: "entry",
    education: "Bachelor's or Master's Degree in a relevant field",
    location_factor: 1.15
  },
  reservationist: {
    min: 12000,
    average: 14000,
    max: 18950,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  resident: {
    min: 25000,
    average: 50000,
    max: 535000,
    experience: "entry",
    education: "Bachelor of Medicine and Bachelor of Surgery (MBChB) degree, ongoing training",
    location_factor: 1.15
  },
  resident_assistant: {
    min: 18000,
    average: 26000,
    max: 250000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  resident_engineer: {
    min: 29792,
    average: 60000,
    max: 600000,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.15
  },
  restaurant_manager: {
    min: 13500,
    average: 17500,
    max: 27500,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Hospitality Management",
    location_factor: 1.1
  },
  retail_pharmacist: {
    min: 29000,
    average: 43750,
    max: 50000,
    experience: "mid",
    education: "Bachelor's Degree in Pharmacy, registration with SAPC",
    location_factor: 1.15
  },
  retail_sales: {
    min: 11000,
    average: 14000,
    max: 34625,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  rigger: {
    min: 16000,
    average: 25000,
    max: 58333,
    experience: "entry",
    education: "Relevant certification for rigging operations",
    location_factor: 1.03
  },
  risk_analyst: {
    min: 28000,
    average: 50000,
    max: 650000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.15
  },
  risk_manager: {
    min: 37500,
    average: 75000,
    max: 700000,
    experience: "mid",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.2
  },
  river: {
    min: 13500,
    average: 23750,
    max: 47750,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.05
  },
  rn: {
    min: 25000,
    average: 33417,
    max: 240000,
    experience: "entry",
    education: "Bachelor's Degree or Diploma in Nursing, registration with SANC",
    location_factor: 1.1
  },
  road_engineer: {
    min: 45417,
    average: 127833,
    max: 700000,
    experience: "mid",
    education: "Bachelor's Degree in Civil Engineering",
    location_factor: 1.15
  },
  safety_manager: {
    min: 25000,
    average: 41750,
    max: 360000,
    experience: "mid",
    education: "Relevant qualifications in occupational health and safety",
    location_factor: 1.2
  },
  safety_officer: {
    min: 17000,
    average: 25000,
    max: 49964,
    experience: "entry",
    education: "Relevant qualifications in occupational health and safety",
    location_factor: 1.1
  },
  sales: {
    min: 15000,
    average: 22500,
    max: 123839,
    experience: "entry",
    education: "Varies significantly by role",
    location_factor: 1.1
  },
  sales_agent: {
    min: 8031,
    average: 14000,
    max: 37500,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.05
  },
  sales_analyst: {
    min: 20000,
    average: 27500,
    max: 258000,
    experience: "entry",
    education: "Bachelor's Degree in Business, Marketing, or related",
    location_factor: 1.1
  },
  sales_assistant: {
    min: 10000,
    average: 13500,
    max: 25001,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  sales_associate: {
    min: 11000,
    average: 14000,
    max: 90000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  sales_consultant: {
    min: 13500,
    average: 18113,
    max: 49893,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.08
  },
  sales_engineer: {
    min: 25000,
    average: 37500,
    max: 373738,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.15
  },
  sales_executive: {
    min: 15000,
    average: 21287,
    max: 62629,
    experience: "entry",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.15
  },
  sales_manager: {
    min: 24949,
    average: 35375,
    max: 436217,
    experience: "mid",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.2
  },
  sales_rep: {
    min: 15000,
    average: 20000,
    max: 37562,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.05
  },
  sales_representative: {
    min: 15000,
    average: 20000,
    max: 48680,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.05
  },
  sales_specialist: {
    min: 18010,
    average: 32500,
    max: 100267,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.1
  },
  sales_trainee: {
    min: 11500,
    average: 22000,
    max: 400000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  sales_marketing: {
    min: 14321,
    average: 24842,
    max: 70000,
    experience: "entry",
    education: "Bachelor's Degree in Business or Marketing",
    location_factor: 1.1
  },
  school_principal: {
    min: 15000,
    average: 26200,
    max: 54750,
    experience: "senior",
    education: "Bachelor's Degree in Education, advanced qualifications and experience",
    location_factor: 1.2
  },
  scientist: {
    min: 27500,
    average: 60000,
    max: 675000,
    experience: "entry",
    education: "Bachelor's or Master's Degree in a relevant scientific field",
    location_factor: 1.15
  },
  scrub_nurse: {
    min: 25000,
    average: 31500,
    max: 234600,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing, specialized training",
    location_factor: 1.15
  },
  scrum_master: {
    min: 35000,
    average: 45000,
    max: 127900,
    experience: "mid",
    education: "Relevant certifications in Agile methodologies",
    location_factor: 1.2
  },
  secretary: {
    min: 14000,
    average: 19000,
    max: 53879,
    experience: "entry",
    education: "High School Diploma with secretarial skills",
    location_factor: 1.02
  },
  security_assistant: {
    min: 21600,
    average: 30000,
    max: 40000,
    experience: "entry",
    education: "Basic literacy, security training may be required",
    location_factor: 1.01
  },
  security_consultant: {
    min: 17500,
    average: 25000,
    max: 155000,
    experience: "mid",
    education: "Relevant certifications and experience in security",
    location_factor: 1.15
  },
  security_guard: {
    min: 6500,
    average: 13500,
    max: 26250,
    experience: "entry",
    education: "Basic literacy, security training required",
    location_factor: 1.01
  },
  security_officer: {
    min: 13500,
    average: 45000,
    max: 495265,
    experience: "entry",
    education: "Basic literacy, security training required",
    location_factor: 1.01
  },
  senior_consultant: {
    min: 20713,
    average: 33011,
    max: 295352,
    experience: "senior",
    education: "Bachelor's Degree in a relevant field, extensive experience",
    location_factor: 1.3
  },
  senior_engineer: {
    min: 25000,
    average: 52479,
    max: 544519,
    experience: "senior",
    education: "Bachelor's Degree in Engineering, extensive experience",
    location_factor: 1.3
  },
  senior_foreman: {
    min: 30000,
    average: 40000,
    max: 312803,
    experience: "senior",
    education: "Relevant trade qualification and extensive experience",
    location_factor: 1.15
  },
  senior_planner: {
    min: 27500,
    average: 50000,
    max: 546750,
    experience: "senior",
    education: "Bachelor's Degree in a relevant field, extensive experience",
    location_factor: 1.25
  },
  senior_project_manager: {
    min: 34000,
    average: 65210,
    max: 697362,
    experience: "senior",
    education: "Bachelor's Degree in Project Management or relevant field, extensive experience",
    location_factor: 1.35
  },
  senior_software_engineer: {
    min: 12328,
    average: 58344,
    max: 725000,
    experience: "senior",
    education: "Bachelor's Degree in Computer Science or related, extensive experience",
    location_factor: 1.35
  },
  server_waiter_waitress: {
    min: 27500,
    average: 42500,
    max: 552022,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  service_advisor: {
    min: 12500,
    average: 15000,
    max: 22000,
    experience: "entry",
    education: "High School Diploma with automotive knowledge",
    location_factor: 1.05
  },
  service_coordinator: {
    min: 14000,
    average: 17500,
    max: 30000,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  service_engineer: {
    min: 18604,
    average: 27964,
    max: 87687,
    experience: "entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.15
  },
  service_manager: {
    min: 22500,
    average: 35000,
    max: 100000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in a relevant field, experience",
    location_factor: 1.15
  },
  service_officer: {
    min: 13500,
    average: 16100,
    max: 174611,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.05
  },
  service_representative: {
    min: 13000,
    average: 17500,
    max: 48267,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  service_technician: {
    min: 17500,
    average: 25000,
    max: 51128,
    experience: "entry",
    education: "Diploma or relevant certification",
    location_factor: 1.03
  },
  setter: {
    min: 14225,
    average: 20000,
    max: 37500,
    experience: "entry",
    education: "Relevant vocational training or experience",
    location_factor: 1.02
  },
  shop_assistant: {
    min: 9000,
    average: 12500,
    max: 16500,
    experience: "entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  sister: {
    min: 22875,
    average: 26000,
    max: 35050,
    experience: "mid",
    education: "Bachelor's Degree or Diploma in Nursing, registration with SANC",
    location_factor: 1.15
  },
  site_manager: {
    min: 18500,
    average: 31302,
    max: 100645,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Construction Management or related",
    location_factor: 1.15
  },
  social_worker: {
    min: 14625,
    average: 20191,
    max: 320100,
    experience: "entry",
    education: "Bachelor's Degree in Social Work, registration with SACSSP",
    location_factor: 1.08
  },
  software_developer: {
    min: 27500,
    average: 45639,
    max: 500333,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  software_engineer: {
    min: 24956,
    average: 46686,
    max: 540000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  software_tester: {
    min: 25000,
    average: 32500,
    max: 201599,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.15
  },
  solutions_architect: {
    min: 25000,
    average: 69305,
    max: 711000,
    experience: "senior",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.3
  },
  sous_chef: {
    min: 14000,
    average: 17000,
    max: 26500,
    experience: "mid",
    education: "Relevant culinary qualifications and experience",
    location_factor: 1.15
  },
  sql_developer: {
    min: 35000,
    average: 50000,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  staff_nurse: {
    min: 15000,
    average: 18000,
    max: 29802,
    experience: "entry",
    education: "Bachelor's Degree or Diploma in Nursing, registration with SANC",
    location_factor: 1.1
  },
  stock_controller: {
    min: 12500,
    average: 15000,
    max: 25001,
    experience: "entry",
    education: "High School Diploma with retail management experience",
    location_factor: 1.02
  },
  store_manager: {
    min: 12501,
    average: 16500,
    max: 35000,
    experience: "mid",
    education: "Bachelor's or Master's Degree in a relevant field",
    location_factor: 1.1
  },
  strategist: {
    min: 20000,
    average: 35001,
    max: 80000,
    experience: "mid",
    education: "Bachelor's Degree in Civil or Structural Engineering",
    location_factor: 1.2
  },
  structural_engineer: {
    min: 30000,
    average: 52361,
    max: 500000,
    experience: "mid",
    education: "Bachelor's Degree in Civil or Structural Engineering",
    location_factor: 1.2
  },
  stylist: {
    min: 8250,
    average: 12000,
    max: 26200,
    experience: "mid",
    education: "Relevant certification or experience",
    location_factor: 1.2
  },
  superintendent: {
    min: 36763,
    average: 75000,
    max: 619502,
    experience: "entry",
    education: "Varies significantly by role and industry, often experience-based",
    location_factor: 1.03
  },
  supervisor: {
    min: 15000,
    average: 22500,
    max: 198985,
    experience: "mid",
    education: "High School Diploma with experience in the relevant field",
    location_factor: 1.15
  },
  supply_chain_analyst: {
    min: 27750,
    average: 54139,
    max: 561950,
    experience: "entry",
    education: "Bachelor's Degree in Supply Chain Management or related",
    location_factor: 1.05
  },
  supply_chain_manager: {
    min: 34028,
    average: 55408,
    max: 650000,
    experience: "entry",
    education: "Bachelor's Degree in Supply Chain Management or related",
    location_factor: 1.15
  },
  supply_manager: {
    min: 34532,
    average: 54167,
    max: 650000,
    experience: "mid",
    education: "Bachelor's Degree in Supply Chain Management or related",
    location_factor: 1.25
  },
  support_specialist: {
    min: 19964,
    average: 27000,
    max: 209639,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in IT or a relevant field",
    location_factor: 1.2
  },
  support_technician: {
    min: 13500,
    average: 17500,
    max: 35000,
    experience: "entry",
    education: "Diploma or relevant certification in IT or a relevant field",
    location_factor: 1.1
  },
  surgeon: {
    min: 16500,
    average: 22500,
    max: 596600,
    experience: "entry",
    education: "Bachelor of Medicine and Bachelor of Surgery (MBChB) degree, specialization and registration with HPCSA",
    location_factor: 1.05
  },
  surgical_nurse: {
    min: 12965,
    average: 30703,
    max: 285000,
    experience: "senior",
    education: "Bachelor's Degree or Diploma in Nursing, specialized training and registration with SANC",
    location_factor: 1.35
  },
  surveyor: {
    min: 20000,
    average: 32500,
    max: 79028,
    experience: "mid",
    education: "Bachelor's Degree in Surveying or Geomatics",
    location_factor: 1.2
  },
  system_administrator: {
    min: 19000,
    average: 30000,
    max: 191600,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.1
  },
  system_engineer: {
    min: 30000,
    average: 50000,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  systems_administrator: {
    min: 20000,
    average: 30200,
    max: 175161,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  systems_analyst: {
    min: 34000,
    average: 55188,
    max: 650000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  systems_developer: {
    min: 31250,
    average: 52500,
    max: 525000,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.15
  },
  systems_engineer: {
    min: 27292,
    average: 45000,
    max: 519655,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.2
  },
  tax_compliance_officer: {
    min: 25000,
    average: 29000,
    max: 300000,
    experience: "entry",
    education: "Bachelor's Degree in Accounting, Finance, or related",
    location_factor: 1.1
  },
  tax_manager: {
    min: 30000,
    average: 70833,
    max: 750000,
    experience: "entry",
    education: "Bachelor's Degree in Accounting, Finance, or related, relevant certifications",
    location_factor: 1.1
  },
  tax_specialist: {
    min: 30250,
    average: 91667,
    max: 795000,
    experience: "mid",
    education: "Bachelor's Degree in Accounting, Finance, or related, specialized knowledge",
    location_factor: 1.25
  },
  taxi_driver: {
    min: 11500,
    average: 18500,
    max: 30000,
    experience: "mid",
    education: "Valid driver's license with relevant permits",
    location_factor: 1.25
  },
  teacher: {
    min: 13500,
    average: 21000,
    max: 45000,
    experience: "entry",
    education: "Bachelor's Degree in Education",
    location_factor: 1.01
  },
  team_leader: {
    min: 16000,
    average: 25008,
    max: 201496,
    experience: "entry",
    education: "High School Diploma with experience in the relevant field",
    location_factor: 1.03
  },
  technical_analyst: {
    min: 30000,
    average: 60368,
    max: 550000,
    experience: "entry",
    education: "Bachelor's Degree in a technical field",
    location_factor: 1.05
  },
  technical_buyer: {
    min: 20000,
    average: 28750,
    max: 198800,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in a technical field",
    location_factor: 1.15
  },
  technical_consultant: {
    min: 16500,
    average: 25000,
    max: 100000,
    experience: "entry",
    education: "Bachelor's Degree in a technical field",
    location_factor: 1.1
  },
  technical_director: {
    min: 10985,
    average: 75000,
    max: 143531,
    experience: "mid",
    education: "Bachelor's Degree in a technical field, extensive experience",
    location_factor: 1.2
  },
  technical_engineer: {
    min: 18000,
    average: 29008,
    max: 100000,
    experience: "senior",
    education: "Bachelor's Degree in a relevant engineering field",
    location_factor: 1.3
  },
  technical_sales_representative: {
    min: 17500,
    average: 25000,
    max: 44250,
    experience: "entry",
    education: "Bachelor's Degree in Engineering or a related technical field",
    location_factor: 1.15
  },
  technical_specialist: {
    min: 22500,
    average: 42500,
    max: 600000,
    experience: "entry",
    education: "Bachelor's Degree in a technical field",
    location_factor: 1.15
  },
  technical_trainer: {
    min: 20000,
    average: 35000,
    max: 66021,
    experience: "entry",
    education: "Relevant qualifications and experience in the subject",
    location_factor: 1.15
  },
  technician: {
    min: 15000,
    average: 20407,
    max: 195732,
    experience: "entry",
    education: "Diploma or relevant certification in a technical field",
    location_factor: 1.08
  },
  tender: {
    min: 17500,
    average: 26500,
    max: 185203,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.03
  },
  test_analyst: {
    min: 27500,
    average: 40829,
    max: 500000,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.1
  },
  test_engineer: {
    min: 25000,
    average: 45000,
    max: 478500,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.15
  },
  tester: {
    min: 25000,
    average: 37485,
    max: 399317,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.15
  },
  therapist: {
    min: 10000,
    average: 15000,
    max: 42500,
    experience: "entry",
    education: "Relevant qualification and registration with a professional body",
    location_factor: 1.15
  },
  tier: {
    min: 18250,
    average: 32500,
    max: 65213,
    experience: "entry",
    education: "Varies significantly by role and industry",
    location_factor: 1.1
  },
  timberman: {
    min: 27370,
    average: 43750,
    max: 78542,
    experience: "entry",
    education: "Relevant experience in timber harvesting",
    location_factor: 1.05
  },
  tour_consultant: {
    min: 17500,
    average: 22500,
    max: 32000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Tourism Management",
    location_factor: 1.02
  },
  tour_guide: {
    min: 12375,
    average: 16000,
    max: 22050,
    experience: "entry",
    education: "Relevant certification and knowledge of the area",
    location_factor: 1.05
  },
  trader: {
    min: 28696,
    average: 42500,
    max: 375000,
    experience: "entry",
    education: "Bachelor's Degree in Finance, Economics, or related",
    location_factor: 1.03
  },
  traffic_engineer: {
    min: 56250,
    average: 85001,
    max: 860000,
    experience: "mid",
    education: "Bachelor's Degree in Civil Engineering with a focus on transportation",
    location_factor: 1.25
  },
  trainer: {
    min: 15000,
    average: 22929,
    max: 57500,
    experience: "mid",
    education: "Relevant qualifications and experience in the subject",
    location_factor: 1.15
  },
  training_consultant: {
    min: 20000,
    average: 25000,
    max: 45000,
    experience: "entry",
    education: "Bachelor's Degree in HR or a relevant field",
    location_factor: 1.08
  },
  training_coordinator: {
    min: 15000,
    average: 22500,
    max: 100000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in HR or a relevant field",
    location_factor: 1.15
  },
  training_facilitator: {
    min: 15000,
    average: 25000,
    max: 56250,
    experience: "entry",
    education: "Relevant qualifications and experience in the subject",
    location_factor: 1.05
  },
  training_manager: {
    min: 25000,
    average: 40400,
    max: 126250,
    experience: "entry",
    education: "Bachelor's Degree in HR or a relevant field, management experience",
    location_factor: 1.08
  },
  training_officer: {
    min: 20000,
    average: 27500,
    max: 270000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in HR or a relevant field",
    location_factor: 1.2
  },
  training_specialist: {
    min: 17500,
    average: 33333,
    max: 415250,
    experience: "entry",
    education: "Bachelor's Degree in HR or a relevant field",
    location_factor: 1.08
  },
  translator: {
    min: 15000,
    average: 45001,
    max: 201604,
    experience: "entry",
    education: "Relevant language proficiency and/or certification",
    location_factor: 1.1
  },
  transport_engineer: {
    min: 58333,
    average: 81250,
    max: 511250,
    experience: "entry",
    education: "Bachelor's Degree in Civil or Transportation Engineering",
    location_factor: 1.05
  },
  transportation_engineer: {
    min: 66667,
    average: 105125,
    max: 900000,
    experience: "mid",
    education: "Bachelor's Degree in Civil or Transportation Engineering",
    location_factor: 1.15
  },
  travel_agent: {
    min: 13750,
    average: 15000,
    max: 20100,
    experience: "mid",
    education: "Diploma or certification in Travel and Tourism",
    location_factor: 1.15
  },
  travel_consultant: {
    min: 13125,
    average: 20000,
    max: 35000,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Tourism Management",
    location_factor: 1.03
  },
  truck_driver: {
    min: 12000,
    average: 16000,
    max: 37850,
    experience: "entry",
    education: "Valid truck driver's license with relevant endorsements",
    location_factor: 1.05
  },
  truck_operator: {
    min: 12550,
    average: 15375,
    max: 18340,
    experience: "entry",
    education: "Valid truck driver's license with relevant endorsements",
    location_factor: 1.02
  },
  turner: {
    min: 17500,
    average: 25000,
    max: 153611,
    experience: "entry",
    education: "Relevant trade qualification",
    location_factor: 1.02
  },
  tutor: {
    min: 8500,
    average: 15000,
    max: 25000,
    experience: "entry",
    education: "Bachelor's Degree in the subject being tutored",
    location_factor: 1.03
  },
  ui_developer: {
    min: 40000,
    average: 60000,
    max: 688000,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or Design",
    location_factor: 1.02
  },
  underwriter: {
    min: 17500,
    average: 25001,
    max: 150001,
    experience: "entry",
    education: "Bachelor's Degree in Commerce, Finance, or related",
    location_factor: 1.2
  },
  unit_manager: {
    min: 34332,
    average: 43950,
    max: 450000,
    experience: "entry",
    education: "Bachelor's Degree in a relevant field, management experience",
    location_factor: 1.1
  },
  ux_and_ui: {
    min: 22500,
    average: 30000,
    max: 750000,
    experience: "mid",
    education: "Bachelor's Degree in Design or Computer Science",
    location_factor: 1.2
  },
  ux_designer: {
    min: 30000,
    average: 45000,
    max: 337083,
    experience: "entry",
    education: "Bachelor's Degree in Design or related",
    location_factor: 1.2
  },
  veterinarian: {
    min: 11000,
    average: 45000,
    max: 623280,
    experience: "entry",
    education: "Bachelor of Veterinary Science (BVSc) degree, registration with SAVC",
    location_factor: 1.15
  },
  waiter: {
    min: 10500,
    average: 16000,
    max: 190520,
    experience: "mid",
    education: "Basic literacy",
    location_factor: 1.15
  },
  waitress: {
    min: 10500,
    average: 15000,
    max: 457500,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  warehouse_assistant: {
    min: 11233,
    average: 14300,
    max: 22500,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  warehouse_man: {
    min: 16500,
    average: 16500,
    max: 17500,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.01
  },
  warehouse_manager: {
    min: 20000,
    average: 29741,
    max: 70755,
    experience: "entry",
    education: "High School Diploma with warehouse management experience",
    location_factor: 1.01
  },
  warehouse_supervisor: {
    min: 14000,
    average: 18000,
    max: 33452,
    experience: "mid",
    education: "High School Diploma with warehouse experience",
    location_factor: 1.1
  },
  warehouse_worker: {
    min: 7625,
    average: 13700,
    max: 50000,
    experience: "entry",
    education: "Basic literacy",
    location_factor: 1.05
  },
  water_engineer: {
    min: 23500,
    average: 52500,
    max: 450000,
    experience: "entry",
    education: "Bachelor's Degree in Civil or Environmental Engineering",
    location_factor: 1.01
  },
  web_designer: {
    min: 15000,
    average: 20000,
    max: 40000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Web Design or related",
    location_factor: 1.15
  },
  web_developer: {
    min: 25000,
    average: 37500,
    max: 211348,
    experience: "entry",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.1
  },
  web_engineer: {
    min: 35000,
    average: 87500,
    max: 770000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or related",
    location_factor: 1.25
  },
  web_graphic_designer: {
    min: 13500,
    average: 20000,
    max: 32000,
    experience: "mid",
    education: "Diploma or Bachelor's Degree in Graphic Design",
    location_factor: 1.25
  },
  welder: {
    min: 12500,
    average: 16000,
    max: 33600,
    experience: "entry",
    education: "trade qualification",
    location_factor: 1.1
  },
  winder: {
    min: 43000,
    average: 52368,
    max: 650000,
    experience: "entry",
    education: "vocational training or experience",
    location_factor: 1.03
  },
  writer: {
    min: 17500,
    average: 25000,
    max: 50095,
    experience: "entry",
    education: "Bachelor's Degree in English, Journalism, or related",
    location_factor: 1.02
  }
  };
};
