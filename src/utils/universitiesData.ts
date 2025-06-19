
export interface University {
  id: string;
  name: string;
  fullName: string;
  location: string;
  apsScale: "standard" | "university";
  includesLifeOrientation: boolean;
  minApsRequirements: {
    [faculty: string]: number;
  };
  website: string;
  description: string;
}

export const southAfricanUniversities: University[] = [
   {
    id: "wits",
    name: "Wits",
    fullName: "University of the Witwatersrand",
    location: "Johannesburg, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 43,
      "Engineering": 39,
      "Commerce": 36,
      "Law": 38,
      "Humanities": 34,
      "Science": 36
    },
    website: "https://www.wits.ac.za",
    description: "The University of the Witwatersrand, or Wits University, is a public research university in Johannesburg, South Africa. It's known for academic excellence, extensive research, and producing influential leaders. Wits is crucial to South Africa's intellectual development, offering diverse programs. It excels in science, engineering, health sciences, and humanities, attracting top talent and contributing significantly to knowledge."
  },
  {
    id: "eduvos",
    name: "Eduvos",
    fullName: "Eduvos (Pty) Ltd",
    location: "Various Campuses, South Africa",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Business": 24,
      "IT": 22,
      "Humanities": 20,
      "Education": 25
    },
    website: "https://eduvos.com",
    description: "Eduvos is one of South Africa's largest private higher education providers, offering certificates to degrees. Focused on career-oriented education, Eduvos prepares students for the workforce with practical learning and industry-aligned curricula. Its campuses ensure accessible, high-quality education in IT, Business, Education, and Humanities. Eduvos empowers individuals for success and positive societal contributions."
  },
  {
    id: "nwu",
    name: "NWU",
    fullName: "North-West University",
    location: "Potchefstroom, North West",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Health Sciences": 30,
      "Engineering": 28,
      "Commerce": 26,
      "Law": 25,
      "Humanities": 24,
      "Science": 26
    },
    website: "https://www.nwu.ac.za",
    description: "North-West University (NWU) is a prominent public university in Potchefstroom, South Africa. It's acclaimed for research excellence, innovation, and high teaching standards across its faculties. NWU attracts diverse students and fosters critical thinking and community engagement. The university prides itself on impactful research addressing societal challenges and contributing to knowledge generation and sustainable development."
  },
  {
    id: "wsu",
    name: "WSU",
    fullName: "Walter Sisulu University",
    location: "Mthatha, Eastern Cape",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Health Sciences": 25,
      "Engineering": 22,
      "Management": 20,
      "Education": 21
    },
    website: "https://www.wsu.ac.za",
    description: "Walter Sisulu University (WSU) is a comprehensive university in Mthatha, Eastern Cape, South Africa. It's vital for regional development, providing accessible higher education. WSU focuses on practical, solution-oriented education for socio-economic needs. It produces skilled graduates ready to contribute to the workforce and drive positive change, with strong programs in health sciences, education, and business."
  },
  {
    id: "mut",
    name: "MUT",
    fullName: "Mangosuthu University of Technology",
    location: "Umlazi, KwaZulu-Natal",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering": 20,
      "Management": 18,
      "Natural Sciences": 19
    },
    website: "https://www.mut.ac.za",
    description: "Mangosuthu University of Technology (MUT) is a dynamic technology university in Umlazi, KwaZulu-Natal. It specializes in career-focused education and applied research to meet human resource needs. MUT provides high-quality academic programs equipping students with essential skills for success. The university emphasizes innovation, community engagement, and sustainable development, producing technically proficient and socially responsible graduates, fostering economic growth."
  },
  {
    id: "ufs",
    name: "UFS",
    fullName: "University of the Free State",
    location: "Bloemfontein, South Africa",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 38,
      "Law": 32,
      "Commerce": 30,
      "Humanities": 28,
      "Natural & Agricultural Sciences": 29
    },
    website: "https://www.ufs.ac.za",
    description: "The University of the Free State (UFS) is a distinguished public university in Bloemfontein, South Africa. Recognized for academic excellence and vibrant campus life, UFS is committed to community engagement and social justice. It offers a wide array of programs, fostering critical inquiry and intellectual development. The university contributes to research, addressing local and global challenges, and prides itself on a diverse, inclusive environment, empowering ethical leaders."
  },
  {
    id: "unizulu",
    name: "UNIZULU",
    fullName: "University of Zululand",
    location: "Richards Bay, KwaZulu-Natal",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Education": 22,
      "Arts": 20,
      "Commerce": 21,
      "Science & Agriculture": 23
    },
    website: "https://www.unizulu.ac.za",
    description: "The University of Zululand (UNIZULU) is a comprehensive public university in Richards Bay, KwaZulu-Natal. Crucial for regional higher education, it upholds academic excellence and community development. UNIZULU offers diverse programs, producing graduates equipped with knowledge and skills for the modern world. It emphasizes research relevant to regional and national development, embracing its heritage while fostering an inclusive learning environment for all students."
  },
  {
    id: "uj",
    name: "UJ",
    fullName: "University of Johannesburg",
    location: "Johannesburg, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Engineering": 30,
      "Health Sciences": 32,
      "Commerce": 28,
      "Law": 29,
      "Education": 26,
      "Humanities": 27,
      "Science": 29
    },
    website: "https://www.uj.ac.za",
    description: "The University of Johannesburg (UJ) is a vibrant public university in South Africa's economic heartland. Celebrated for its dynamic and future-oriented approach, UJ offers extensive programs responding to societal and industry needs. It leads in transformation, creating an inclusive learning environment. UJ produces engaged, responsible, and skilled graduates who impact local and global challenges through impactful research and community engagement projects."
  },
  {
    id: "ufh",
    name: "UFH",
    fullName: "University of Fort Hare",
    location: "Alice, Eastern Cape",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Agriculture": 20,
      "Education": 22,
      "Law": 23,
      "Science": 21,
      "Social Sciences": 20
    },
    website: "https://www.ufh.ac.za",
    description: "The University of Fort Hare (UFH) is a historically significant public university in Alice, Eastern Cape, South Africa. It played a pivotal role in the anti-apartheid struggle, continuing as a beacon of intellectual freedom and social justice. UFH provides high-quality higher education, especially for disadvantaged backgrounds, fostering a supportive learning environment. It emphasizes research and community engagement to address developmental challenges, producing critical thinkers and ethical leaders."
  },
  {
    id: "up",
    name: "UP",
    fullName: "University of Pretoria",
    location: "Pretoria, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 42,
      "Engineering": 35,
      "Law": 34,
      "Commerce": 32,
      "Humanities": 28,
      "Natural & Agricultural Sciences": 30
    },
    website: "https://www.up.ac.za",
    description: "The University of Pretoria (UP), or Tuks, is a public research university in Pretoria, South Africa. It's a top research-intensive university in Africa and globally for academic excellence. UP offers diverse undergraduate and postgraduate programs, attracting talented students. It nurtures globally competitive graduates and conducts impactful research for sustainable development, societal well-being, and economic growth. Its commitment to pioneering research is a hallmark."
  },
  {
    id: "ul",
    name: "UL",
    fullName: "University of Limpopo",
    location: "Polokwane, Limpopo",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Health Sciences": 27,
      "Management & Law": 24,
      "Humanities": 22,
      "Science & Agriculture": 25
    },
    website: "https://www.ul.ac.za",
    description: "The University of Limpopo (UL) is a significant public university in Polokwane, Limpopo, South Africa. Formed from a merger, UL provides accessible, high-quality higher education, addressing socio-economic challenges in the province. It offers diverse academic programs, emphasizing impactful research and community engagement to foster critical thinking and practical skills, preparing students as professionals and leaders across fields."
  },
  {
    id: "cput",
    name: "CPUT",
    fullName: "Cape Peninsula University of Technology",
    location: "Cape Town, Western Cape",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering": 22,
      "Business & Management": 20,
      "Applied Sciences": 21,
      "Education": 20
    },
    website: "https://www.cput.ac.za",
    description: "The Cape Peninsula University of Technology (CPUT) is the largest university of technology in the Western Cape. It specializes in vocational and technical education, offering career-focused qualifications. CPUT produces highly skilled, employable graduates prepared for dynamic workforce demands. It emphasizes practical learning, innovation, and applied research, ensuring relevant programs and industry collaborations. CPUT is crucial for skills development and poverty alleviation."
  },
  {
    id: "um",
    name: "UMP",
    fullName: "University of Mpumalanga",
    location: "Mbombela, Mpumalanga",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Agriculture": 25,
      "Education": 24,
      "Social Sciences": 23,
      "ICT": 26
    },
    website: "https://www.ump.ac.za",
    description: "The University of Mpumalanga (UMP) is a rapidly growing public university, established in 2014 in Mbombela. UMP provides high-quality higher education and fosters socio-economic development in Mpumalanga. It focuses on programs addressing critical regional needs, excelling in agriculture, tourism, and education. UMP is committed to academic excellence, innovation, and community engagement, producing critical thinkers and responsible citizens, contributing to the province's growth."
  },
  {
    id: "uwc",
    name: "UWC",
    fullName: "University of the Western Cape",
    location: "Cape Town, Western Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Dentistry": 39,
      "Law": 34,
      "Arts": 28,
      "Education": 29,
      "Natural Sciences": 30,
      "Economic & Management Sciences": 31
    },
    website: "https://www.uwc.ac.za",
    description: "The University of the Western Cape (UWC) is a distinguished public university in Cape Town, South Africa. Rooted in the anti-apartheid struggle, UWC upholds social justice and human rights. It's a research-led university striving for academic excellence and innovation, offering comprehensive programs. UWC fosters a diverse, inclusive intellectual environment, encouraging critical thinking and community engagement, producing graduates who are agents of positive change."
  },
  {
    id: "univen",
    name: "UNIVEN",
    fullName: "University of Venda",
    location: "Thohoyandou, Limpopo",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Agriculture": 20,
      "Education": 21,
      "Environmental Sciences": 22,
      "Law": 23,
      "Human & Social Sciences": 19
    },
    website: "https://www.univen.ac.za",
    description: "The University of Venda (UNIVEN) is a comprehensive public university in Thohoyandou, Limpopo, South Africa. It's vital for higher education in the Vhembe District, committed to academic excellence, research, and community engagement addressing socio-economic challenges. UNIVEN offers diverse academic programs, fostering a supportive learning environment. It plays a crucial role in empowering disadvantaged students and contributing to the intellectual and cultural growth of the region."
  },
  {
    id: "ukzn",
    name: "UKZN",
    fullName: "University of KwaZulu-Natal",
    location: "Durban, KwaZulu-Natal",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 40,
      "Engineering": 35,
      "Law": 32,
      "Commerce": 30,
      "Education": 28,
      "Humanities": 27,
      "Science": 30
    },
    website: "https://www.ukzn.ac.za",
    description: "The University of KwaZulu-Natal (UKZN) is a multi-campus public university in Durban, South Africa. Formed from a merger, UKZN is renowned for academic excellence, cutting-edge research, and social responsiveness. It offers comprehensive programs, attracting diverse students globally. UKZN produces innovative thinkers and leaders who address complex global challenges and contribute meaningfully to the sustainable development of the region and African continent."
  },
  {
    id: "vut",
    name: "VUT",
    fullName: "Vaal University of Technology",
    location: "Vanderbijlpark, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering": 20,
      "Management Sciences": 18,
      "Applied & Computer Sciences": 19,
      "Human Sciences": 17
    },
    website: "https://www.vut.ac.za",
    description: "The Vaal University of Technology (VUT) is a prominent public university of technology in Vanderbijlpark, Gauteng. VUT focuses on career-oriented education and applied research, meeting technological and socio-economic needs. It offers vocationally directed programs, emphasizing practical skills and industry relevance. VUT fosters innovation, entrepreneurship, and community engagement, producing adaptable graduates ready to contribute to the economy. It plays a vital role in addressing skills shortages and promoting regional development."
  },
  {
    id: "sun",
    name: "SU",
    fullName: "Stellenbosch University",
    location: "Stellenbosch, Western Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 40,
      "Engineering": 38,
      "Law": 35,
      "Commerce": 32,
      "Arts & Social Sciences": 30,
      "Science": 32
    },
    website: "https://www.sun.ac.za",
    description: "Stellenbosch University (SU) is a leading public research university in Stellenbosch, Western Cape, South Africa. Renowned for academic excellence, pioneering research, and beautiful campus, SU ranks among top universities globally. It offers comprehensive undergraduate and postgraduate programs, attracting talented students. SU produces innovative thinkers, ethical leaders, and engaged citizens contributing to societal development and scientific advancement, maintaining strong international collaborations and a vibrant research culture."
  },
  {
    id: "ru",
    name: "Rhodes",
    fullName: "Rhodes University",
    location: "Makhanda, Eastern Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Law": 38,
      "Pharmacy": 36,
      "Science": 34,
      "Humanities": 32,
      "Commerce": 33
    },
    website: "https://www.ru.ac.za",
    description: "Rhodes University (RU) is a distinguished public research university in Makhanda, Eastern Cape, South Africa. Recognized for its intimate campus and high-quality academic experience, Rhodes focuses on advanced postgraduate studies and research excellence. It offers comprehensive programs fostering critical thinking and intellectual independence. Rhodes has a history of academic freedom and producing influential leaders, emphasizing interdisciplinary approaches to address societal challenges and contribute to the national and international academic landscape."
  },
  {
    id: "uct",
    name: "UCT",
    fullName: "University of Cape Town",
    location: "Cape Town, Western Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 42,
      "Engineering": 35,
      "Commerce": 30,
      "Law": 35,
      "Humanities": 25,
      "Science": 30
    },
    website: "https://www.uct.ac.za",
    description: "The University of Cape Town (UCT) is South Africa's oldest and a leading research university in Africa. Situated at Devil's Peak, UCT is globally renowned for academic excellence, innovative research, and a vibrant community. It offers extensive undergraduate and postgraduate programs, attracting diverse students and faculty. UCT addresses societal challenges through research, fostering critical thinking, and producing influential leaders and agents of change."
  },
  {
    id: "cut",
    name: "CUT",
    fullName: "Central University of Technology",
    location: "Bloemfontein, Free State",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering": 20,
      "Management Sciences": 19,
      "Health & Environmental Sciences": 21,
      "Humanities": 18
    },
    website: "https://www.cut.ac.za",
    description: "The Central University of Technology (CUT) is a distinguished public university of technology in Bloemfontein, Free State, South Africa. CUT specializes in technologically-oriented higher education, focusing on applied research and vocational training to meet industry needs. It offers career-focused programs equipping students with practical skills and theoretical knowledge. CUT is dedicated to fostering innovation, entrepreneurship, and community engagement, contributing to regional development and economic growth in the Free State."
  },
  {
    id: "nmu",
    name: "NMU",
    fullName: "Nelson Mandela University",
    location: "Gqeberha, Eastern Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Engineering": 32,
      "Health Sciences": 30,
      "Business & Economic Sciences": 28,
      "Law": 29,
      "Education": 27,
      "Arts": 26,
      "Science": 28
    },
    website: "https://www.mandela.ac.za",
    description: "Nelson Mandela University (NMU) is a comprehensive university in Gqeberha, Eastern Cape, South Africa. Named after the global statesman, NMU embodies values of social justice and sustainability. It offers diverse academic programs emphasizing experiential learning, research, and community engagement. NMU produces well-rounded graduates who are critical thinkers and ethical leaders, contributing to a just and sustainable world. It plays a significant role in regional development and global knowledge production."
  },
  {
    id: "smu",
    name: "SMU",
    fullName: "Sefako Makgatho Health Sciences University",
    location: "Ga-Rankuwa, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 35,
      "Pharmacy": 32,
      "Dentistry": 33,
      "Public Health": 28,
      "Health Care Sciences": 29
    },
    website: "https://www.smu.ac.za",
    description: "Sefako Makgatho Health Sciences University (SMU) is a public university dedicated to health sciences education and research in Ga-Rankuwa, Pretoria. SMU addresses healthcare needs by producing competent health professionals. It offers programs across health disciplines, including medicine, dentistry, and pharmacy. SMU is committed to academic excellence, impactful public health research, and community engagement, striving to improve health outcomes and promote wellness, particularly for underserved communities in South Africa."
  },
  {
    id: "tut",
    name: "TUT",
    fullName: "Tshwane University of Technology",
    location: "Pretoria, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering & Built Environment": 24,
      "Information & Communication Technology": 22,
      "Humanities": 20,
      "Management Sciences": 21
    },
    website: "https://www.tut.ac.za",
    description: "The Tshwane University of Technology (TUT) is South Africa's largest contact university, with campuses primarily in Gauteng. TUT provides vocationally oriented education, offering a broad spectrum of career-focused programs. The university produces skilled and innovative graduates prepared for various industries. TUT emphasizes practical learning, applied research, and industry partnerships, ensuring relevant curricula and well-prepared graduates. It plays a pivotal role in comprehensive skills development across the nation."
  },
  {
    id: "spu",
    name: "SPU",
    fullName: "Sol Plaatje University",
    location: "Kimberley, Northern Cape",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Education": 20,
      "Humanities": 18,
      "Natural & Applied Sciences": 19,
      "Economic & Management Sciences": 19
    },
    website: "https://www.spu.ac.za",
    description: "Sol Plaatje University (SPU) is South Africa's newest university, established in 2014 in Kimberley. Named after Sol Plaatje, it fosters academic excellence and innovation. SPU provides high-quality higher education and research relevant to the Northern Cape. It offers programs in education, humanities, and natural sciences, empowering students as critical thinkers and active participants in community development. SPU serves as a catalyst for intellectual growth."
  },
  {
    id: "dut",
    name: "DUT",
    fullName: "Durban University of Technology",
    location: "Durban, KwaZulu-Natal",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering": 23,
      "Arts & Design": 21,
      "Applied Sciences": 22,
      "Management Sciences": 20,
      "Health Sciences": 24
    },
    website: "https://www.dut.ac.za",
    description: "The Durban University of Technology (DUT) is a leading public university of technology in Durban, KwaZulu-Natal. DUT provides high-quality, career-focused education and applied research, addressing technological and human resource needs. It offers diverse programs equipping students with practical skills. DUT fosters innovation, entrepreneurship, and community engagement, producing adaptable, employable graduates who contribute to socio-economic development, playing a pivotal role in shaping the future workforce."
  }
];

export const getUniversityById = (id: string): University | undefined => {
  return southAfricanUniversities.find(uni => uni.id === id);
};

export const getUniversityByName = (name: string): University | undefined => {
  return southAfricanUniversities.find(uni => 
    uni.name.toLowerCase() === name.toLowerCase() ||
    uni.fullName.toLowerCase() === name.toLowerCase()
  );
};
