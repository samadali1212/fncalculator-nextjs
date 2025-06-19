
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
    description: "The University of the Witwatersrand, often simply referred to as Wits University, is a multi-campus public research university situated in the heart of Johannesburg, South Africa. It is a globally renowned institution known for its academic excellence, extensive research output, and a rich history of producing influential leaders across various sectors. Wits plays a pivotal role in the intellectual and social development of South Africa and the broader African continent, offering a diverse range of undergraduate and postgraduate programs across its five faculties. The university is particularly strong in the fields of science, engineering, health sciences, and humanities, consistently attracting top academic talent and contributing significantly to national and international knowledge. Its vibrant campus environment fosters critical thinking and a dynamic learning experience."
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
    description: "Eduvos is recognized as one of South Africa's largest private higher education providers, offering a comprehensive and diverse range of qualifications that span from Higher Certificates to full Degrees. With a strong and unwavering focus on providing career-oriented education, Eduvos is meticulously designed to prepare its students for the demanding realities of the modern workforce through hands-on, practical learning experiences and carefully curated, industry-aligned curricula. Its strategically located multiple campuses across the country ensure accessible and high-quality education in various critical fields, including Information Technology, Business, Education, and Humanities. Eduvos is deeply committed to empowering individuals with the essential skills and pertinent knowledge necessary to achieve success in their chosen professions and to contribute meaningfully and positively to society at large."
  },
  {
    id: "nwu",
    name: "NWU",
    fullName: "North-West University",
    location: "Potchefstroom, Mahikeng, Vanderbijlpark, North West",
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
    description: "North-West University (NWU) is a prominent public university in South Africa, boasting three distinct and vibrant campuses situated in Potchefstroom, Mahikeng, and Vanderbijlpark. The university is widely acclaimed for its exceptional excellence in research, its strong drive for innovation, and its high standards of teaching, offering a broad and extensive spectrum of academic programmes across its various faculties. NWU consistently attracts a diverse and talented student body from across the African continent and beyond. The institution is deeply committed to fostering a dynamic and intellectually stimulating learning environment that actively promotes critical thinking, rigorous academic inquiry, and robust community engagement. NWU takes immense pride in its impactful research initiatives, which directly address pressing societal challenges and contribute significantly to knowledge generation and sustainable development."
  },
  {
    id: "wsu",
    name: "WSU",
    fullName: "Walter Sisulu University",
    location: "Mthatha, East London, Butterworth, Komani, Eastern Cape",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Health Sciences": 25,
      "Engineering": 22,
      "Management": 20,
      "Education": 21
    },
    website: "https://www.wsu.ac.za",
    description: "Walter Sisulu University (WSU) stands as a comprehensive university strategically located within the Eastern Cape province of South Africa, with its various campuses thoughtfully spread across Mthatha, East London, Butterworth, and Komani. WSU plays an undeniably vital and instrumental role in regional development and socio-economic upliftment, diligently providing accessible higher education opportunities to a diverse and broad student population, with a particular focus on students from previously underserved and disadvantaged communities. The university is steadfastly focused on delivering practical, solution-oriented education that directly addresses the intricate socio-economic needs of both the region and the entire nation. WSU is deeply dedicated to producing highly skilled and capable graduates who are readily prepared to contribute meaningfully to the workforce and actively drive positive change within their respective communities, boasting strong and impactful programs in health sciences, education, and business."
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
    description: "Mangosuthu University of Technology (MUT) is a dynamic and forward-thinking university of technology strategically located in Umlazi, within the vibrant province of KwaZulu-Natal, South Africa. This institution specializes emphatically in providing career-focused education and diligently conducting applied research, all geared towards meeting the critical human resource needs of both the immediate region and the nation as a whole. MUT is profoundly committed to offering consistently high-quality, relevant, and impactful academic programs that are meticulously designed to equip students with both the essential practical skills and the foundational theoretical knowledge absolutely required for resounding success across a diverse range of industries. The university places a strong emphasis on fostering innovation, promoting active community engagement, and pursuing sustainable development initiatives, consistently striving to produce graduates who are not only technically proficient but also deeply socially responsible. MUT plays an undeniably crucial role in empowering individuals and significantly fostering economic growth within KwaZulu-Natal."
  },
  {
    id: "ufs",
    name: "UFS",
    fullName: "University of the Free State",
    location: "Bloemfontein, Qwaqwa, South Africa",
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
    description: "The University of the Free State (UFS) is a distinguished public university with its main campuses situated in Bloemfontein and satellite campuses in Qwaqwa and Ficksburg. UFS is widely recognized for its strong academic excellence, its vibrant and engaging campus life, and its profound commitment to both community engagement and fostering social justice. It offers a comprehensive and wide array of undergraduate and postgraduate programs across its diverse faculties, actively fostering an enriching environment of critical inquiry and robust intellectual development. The university consistently contributes to pioneering research and innovation, diligently addressing both local and pressing global challenges. UFS takes immense pride in its diverse and truly inclusive environment, dedicating itself to empowering students to evolve into ethical leaders and to contribute positively and meaningfully to society."
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
    description: "The University of Zululand (UNIZULU) is a comprehensive public university strategically located in Richards Bay, KwaZulu-Natal, South Africa. It serves as an absolutely crucial institution for higher education within the Zululand region and extends its impact far beyond, consistently committed to upholding academic excellence and driving community development initiatives. UNIZULU offers a diverse and broad spectrum of academic programs across its various faculties, diligently striving to produce graduates who are exceptionally well-equipped with both the necessary knowledge and the practical skills required to meet the evolving demands of the modern world. The university places a strong emphasis on conducting research that is highly relevant to regional and national development, thereby contributing significantly to socio-economic growth and environmental sustainability. UNIZULU proudly embraces its rich cultural heritage while simultaneously fostering a truly inclusive and supportive learning environment for all its students."
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
    description: "The University of Johannesburg (UJ) is a remarkably vibrant and comprehensive public university strategically located in the economic heartland of South Africa. UJ is widely celebrated for its dynamic, innovative, and unequivocally future-oriented approach to higher education, offering an extensive and diverse range of academic programs that are meticulously designed to respond to the continuously evolving needs of society and industry. The university stands as a leading institution in fostering transformation, actively striving to create a truly inclusive and equitable learning environment for all. UJ is profoundly committed to producing critically engaged, highly responsible, and exceptionally skilled graduates who possess the capacity to make a significant and lasting impact on both local and global challenges through its impactful research initiatives and proactive community engagement projects."
  },
  {
    id: "ufh",
    name: "UFH",
    fullName: "University of Fort Hare",
    location: "Alice, East London, Bhisho, Eastern Cape",
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
    description: "The University of Fort Hare (UFH) is a historically significant public university in South Africa, with its campuses strategically located in Alice, East London, and Bhisho, within the Eastern Cape. UFH played an absolutely pivotal role in the struggle against apartheid and steadfastly continues to stand as a beacon of intellectual freedom and social justice. The university is deeply dedicated to providing high-quality higher education, particularly extending opportunities to students from previously disadvantaged backgrounds, by fostering a highly supportive and enabling learning environment. UFH places strong emphasis on conducting research and engaging with communities to address the developmental challenges specific to the Eastern Cape province, thereby contributing meaningfully to national progress. UFH is firmly committed to producing graduates who are adept critical thinkers, ethical leaders, and powerful agents of positive change within society."
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
    description: "The University of Pretoria (UP), affectionately known as Tuks, is a multi-campus public research university gracefully situated in Pretoria, South Africa. It stands proudly as one of the country's foremost research-intensive universities, consistently earning its place among the top institutions on the African continent and globally for its unwavering academic excellence and groundbreaking innovation. UP graciously offers a diverse and comprehensive range of undergraduate and postgraduate programs meticulously structured across its nine faculties, successfully attracting a highly talented and wonderfully diverse student body. The university is profoundly committed to nurturing globally competitive graduates and diligently conducting impactful research that directly contributes to sustainable development, societal well-being, and robust economic growth both nationally and across international borders. Its commitment to pioneering research and producing future leaders is a hallmark of its distinguished reputation."
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
    description: "The University of Limpopo (UL) is a significant public university strategically located in Polokwane, within the Limpopo province of South Africa. This institution was thoughtfully formed through the merger of two important entities: the University of the North and the Medical University of Southern Africa (MEDUNSA) campuses, bringing together a rich legacy of academic contribution. UL is wholeheartedly dedicated to providing accessible and high-quality higher education, with a strong and deliberate focus on actively addressing the unique socio-economic challenges prevalent within the Limpopo Province and making substantial contributions to national development efforts. The university offers a broad and diverse range of academic programs, consistently emphasizing impactful research and active community engagement to foster robust critical thinking and practical skills among its students, thoroughly preparing them to emerge as impactful professionals and influential leaders across a multitude of fields."
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
    description: "The Cape Peninsula University of Technology (CPUT) holds the distinction of being the largest university of technology in the Western Cape region of South Africa. This dynamic institution specializes in providing comprehensive vocational and technical education, offering an impressive and wide array of career-focused qualifications, spanning from essential certificates and diplomas to esteemed degrees. CPUT is profoundly committed to the vital mission of producing highly skilled and readily employable graduates who are thoroughly prepared to meet the dynamic demands of the modern workforce and make significant contributions to economic development. The university places a strong emphasis on practical, hands-on learning, fostering innovation, and engaging in applied research, often through valuable collaborations with industry partners, thereby ensuring that its programs remain highly relevant and impactful in the real world. CPUT plays an absolutely crucial role in both skills development and poverty alleviation initiatives within the region, driving positive societal change."
  },
  {
    id: "um",
    name: "UMP",
    fullName: "University of Mpumalanga",
    location: "Mbombela, Siyabuswa, Mpumalanga",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Agriculture": 25,
      "Education": 24,
      "Social Sciences": 23,
      "ICT": 26
    },
    website: "https://www.ump.ac.za",
    description: "The University of Mpumalanga (UMP) is a relatively new but rapidly growing public university in South Africa, thoughtfully established in 2014, with its main campuses gracefully situated in Mbombela and Siyabuswa. UMP is passionately dedicated to providing high-quality higher education and actively fostering robust socio-economic development within the Mpumalanga province. The university meticulously focuses on offering academic programs that directly address critical regional needs, particularly excelling in crucial sectors such as agriculture, tourism, and education. UMP is deeply committed to upholding academic excellence, driving innovation, and engaging meaningfully with its communities, consistently striving to produce graduates who are astute critical thinkers, adept problem-solvers, and profoundly responsible citizens. It aims to become a leading institution contributing significantly to knowledge generation and the sustainable growth of both the province and the entire nation, embodying a forward-thinking approach to education."
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
    description: "The University of the Western Cape (UWC) is a distinguished public university gracefully located in Bellville, Cape Town, South Africa. UWC emerged from a profound history rooted in the struggle against apartheid and steadfastly continues to uphold its unwavering commitment to social justice, equity, and human rights. It stands proudly as a research-led university that consistently strives for academic excellence and groundbreaking innovation, offering a wide and comprehensive range of undergraduate and postgraduate programs meticulously designed across its diverse faculties. UWC fosters a truly diverse and inclusive intellectual environment, actively encouraging robust critical thinking and impactful community engagement. The university is deeply dedicated to producing graduates who are powerful agents of positive change and who contribute significantly and meaningfully to both national and global challenges, maintaining a strong and purposeful focus on the public good."
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
    description: "The University of Venda (UNIVEN) is a comprehensive public university strategically situated in Thohoyandou, within the Limpopo province of South Africa. It serves as an absolutely vital institution for higher education within the rural Vhembe District and extends its profound impact far beyond. UNIVEN is wholeheartedly committed to upholding academic excellence, driving impactful research, and fostering strong community engagement initiatives that directly address the intricate socio-economic challenges faced by its surrounding communities, thereby contributing significantly to national development efforts. The university offers a diverse and broad range of academic programs meticulously designed across its four faculties, consistently fostering a supportive and enriching learning environment. UNIVEN plays an undeniably crucial role in empowering students from previously disadvantaged backgrounds and actively contributing to the intellectual and cultural growth of the entire region, serving as a beacon of opportunity and progress."
  },
  {
    id: "ukzn",
    name: "UKZN",
    fullName: "University of KwaZulu-Natal",
    location: "Durban, Pietermaritzburg, KwaZulu-Natal",
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
    description: "The University of KwaZulu-Natal (UKZN) is a multi-campus public university gracefully located in the vibrant province of KwaZulu-Natal, South Africa, with its distinguished campuses thoughtfully situated in both Durban and Pietermaritzburg. Formed through the historic merger of the esteemed University of Natal and the University of Durban-Westville, UKZN stands as a leading institution widely renowned for its unwavering academic excellence, pioneering cutting-edge research, and profound commitment to social responsiveness. The university offers a comprehensive and extensive range of undergraduate and postgraduate programs, successfully attracting a diverse and talented student body from across the nation and globally. UKZN is deeply dedicated to producing innovative thinkers and influential leaders who possess the capacity to adeptly address complex global challenges and contribute meaningfully to the sustainable development of both the region and the broader African continent, embodying a spirit of intellectual leadership and community impact."
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
    description: "The Vaal University of Technology (VUT) is a prominent public university of technology strategically located in Vanderbijlpark, within the Gauteng province of South Africa. VUT meticulously focuses on providing career-oriented education and diligently conducting applied research that directly meets the evolving technological and intricate socio-economic needs of the entire country. The university offers a wide and comprehensive range of vocationally directed programs, placing a strong and deliberate emphasis on practical skills development and ensuring industry relevance. VUT is profoundly committed to fostering innovation, nurturing entrepreneurship, and promoting active community engagement, consistently striving to produce graduates who are not only highly skilled but also remarkably adaptable and readily prepared to contribute effectively to various sectors of the economy. It plays an undeniably vital role in addressing skills shortages and actively promoting robust regional development."
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
    description: "Stellenbosch University (SU) is a leading public research university gracefully located in the picturesque and culturally rich town of Stellenbosch, within the Western Cape of South Africa. Widely renowned for its unwavering academic excellence, its pioneering and groundbreaking research, and its breathtakingly beautiful campus, SU consistently ranks among the top universities on the African continent and globally for its outstanding contributions. The university offers a comprehensive and extensive range of undergraduate and postgraduate programs meticulously structured across its ten faculties, successfully attracting a diverse and remarkably talented student body. SU is profoundly committed to producing innovative thinkers, ethical leaders, and actively engaged citizens who make significant contributions to societal development and scientific advancement, maintaining strong international collaborations and fostering a vibrant research culture that pushes the boundaries of knowledge."
  },
  {
    id: "ru",
    name: "Rhodes",
    fullName: "Rhodes University",
    location: "Makhanda (Grahamstown), Eastern Cape",
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
    description: "Rhodes University (RU) is a distinguished public research university gracefully located in Makhanda (formerly known as Grahamstown), within the Eastern Cape province of South Africa. Recognized for its intimate and supportive campus environment coupled with a consistently high-quality academic experience, Rhodes maintains a strong and deliberate focus on advanced postgraduate studies and unwavering research excellence. The university offers a comprehensive and wide range of programs meticulously designed across its six faculties, actively fostering critical thinking, promoting profound intellectual independence, and instilling a deep commitment to social justice among its students. Rhodes boasts a proud and enduring history of academic freedom and a remarkable track record of producing influential leaders, emphasizing interdisciplinary approaches to adeptly address complex societal challenges and contributing significantly to both the national and international academic landscape."
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
    description: "The University of Cape Town (UCT) is widely recognized as South Africa's oldest university and consistently ranks among Africa's foremost leading research universities. Gracefully situated at the foot of the iconic Devil's Peak, offering breathtaking views of the city and the magnificent Table Mountain, UCT is globally renowned for its exceptional academic excellence, groundbreaking innovative research, and a truly vibrant and intellectually stimulating community. It offers a comprehensive and extensive range of undergraduate and postgraduate programs meticulously designed across its six faculties, successfully attracting a diverse and talented cohort of students and esteemed faculty members from across Africa and around the world. UCT is profoundly committed to actively addressing pressing societal challenges through impactful research and diligently fostering robust critical thinking, thereby producing graduates who are influential leaders and powerful agents of positive change across a multitude of fields."
  },
  {
    id: "cut",
    name: "CUT",
    fullName: "Central University of Technology",
    location: "Bloemfontein, Welkom, Free State",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering": 20,
      "Management Sciences": 19,
      "Health & Environmental Sciences": 21,
      "Humanities": 18
    },
    website: "https://www.cut.ac.za",
    description: "The Central University of Technology (CUT) is a distinguished public university of technology strategically located in the Free State province of South Africa, with its vital campuses situated in Bloemfontein and Welkom. CUT specializes emphatically in providing technologically-oriented higher education, placing a strong and deliberate focus on conducting applied research and delivering vocational training, all meticulously designed to meet the continuously evolving needs of industry and society at large. The university offers a wide and comprehensive range of career-focused programs that are expertly structured to equip students with both essential practical skills and foundational theoretical knowledge, absolutely crucial for resounding success across various professional fields. CUT is deeply dedicated to fostering innovation, nurturing entrepreneurship, and promoting active community engagement, thereby contributing significantly to robust regional development and sustainable economic growth within the Free State and beyond."
  },
  {
    id: "nmu",
    name: "NMU",
    fullName: "Nelson Mandela University",
    location: "Gqeberha (Port Elizabeth), Eastern Cape",
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
    description: "Nelson Mandela University (NMU) is a remarkably vibrant, comprehensive university gracefully located in Gqeberha (formerly known as Port Elizabeth), within the Eastern Cape province of South Africa. Named in profound honor of the iconic global statesman, NMU profoundly embodies his timeless values of social justice, environmental sustainability, and fundamental human rights. The university offers an impressive and diverse range of academic programs meticulously designed across its various faculties, placing a strong and deliberate focus on experiential learning, impactful research, and meaningful community engagement. NMU is deeply committed to the vital mission of producing well-rounded graduates who are astute critical thinkers, ethical leaders, and actively engaged participants in the collective endeavor of building a more just and sustainable world. It plays a significant and influential role in regional development and global knowledge production, particularly excelling in marine sciences and pioneering renewable energy research."
  },
  {
    id: "smu",
    name: "SMU",
    fullName: "Sefako Makgatho Health Sciences University",
    location: "Ga-Rankuwa, Pretoria, Gauteng",
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
    description: "Sefako Makgatho Health Sciences University (SMU) is a highly specialized public university exclusively dedicated to providing comprehensive health sciences education, rigorous training, and impactful research. Strategically located in Ga-Rankuwa, Pretoria, South Africa, SMU plays an absolutely crucial role in diligently addressing the country's pressing healthcare needs by consistently producing highly competent and deeply compassionate health professionals. The university offers a comprehensive and wide array of programs meticulously structured across various vital health disciplines, including but not limited to medicine, dentistry, pharmacy, and allied health sciences. SMU is profoundly committed to upholding unwavering academic excellence, conducting pioneering innovative research that significantly impacts public health, and fostering meaningful community engagement, consistently striving to improve health outcomes and promote overall wellness, with a particular focus on serving underserved communities across South Africa."
  },
  {
    id: "tut",
    name: "TUT",
    fullName: "Tshwane University of Technology",
    location: "Pretoria, Soshanguve, Ga-Rankuwa, Witbank, Polokwane, Mbombela, Gauteng & other provinces",
    apsScale: "standard",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Engineering & Built Environment": 24,
      "Information & Communication Technology": 22,
      "Humanities": 20,
      "Management Sciences": 21
    },
    website: "https://www.tut.ac.za",
    description: "The Tshwane University of Technology (TUT) stands as the largest contact university in South Africa, proudly operating as a comprehensive institution with numerous campuses primarily concentrated in Gauteng, but also extending its reach to other provinces. TUT specializes emphatically in providing vocationally oriented education, offering a broad and extensive spectrum of career-focused programs ranging from essential certificates to esteemed doctoral degrees. The university is deeply dedicated to the vital mission of producing highly skilled and truly innovative graduates who are thoroughly prepared to meet the dynamic demands of various industries and contribute significantly to economic development. TUT places a strong emphasis on practical, hands-on learning, engaging in applied research, and fostering robust industry partnerships, thereby meticulously ensuring that its curricula remain highly relevant and its graduates are exceptionally well-prepared for the workforce. It plays a pivotal and essential role in comprehensive skills development across the nation."
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
    description: "Sol Plaatje University (SPU) holds the distinction of being South Africa's newest university, thoughtfully established in 2014 and gracefully located in Kimberley, within the Northern Cape province. Named in profound honor of the revered South African intellectual, journalist, and political activist Sol Plaatje, the university is deeply committed to fostering unwavering academic excellence, driving groundbreaking innovation, and demonstrating robust social responsiveness. SPU meticulously focuses on providing high-quality higher education and vital research opportunities that are particularly relevant and specifically tailored to the unique context and pressing needs of the Northern Cape region. The university offers a diverse array of programs in crucial fields such as education, humanities, and natural sciences, consistently striving to empower its students to evolve into astute critical thinkers and actively engaged participants in the comprehensive development of their communities and the entire country, serving as a catalyst for progress and intellectual growth."
  },
  {
    id: "dut",
    name: "DUT",
    fullName: "Durban University of Technology",
    location: "Durban, Pietermaritzburg, KwaZulu-Natal",
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
    description: "The Durban University of Technology (DUT) stands as a leading public university of technology strategically located in KwaZulu-Natal, South Africa, with its vital campuses situated in both Durban and Pietermaritzburg. DUT is profoundly dedicated to providing consistently high-quality, career-focused education and impactful applied research, diligently addressing the evolving technological and intricate human resource needs of both the immediate region and the nation as a whole. The university offers a diverse and innovative range of programs that are expertly structured to equip students with both essential practical skills and foundational theoretical knowledge, absolutely crucial for resounding success across various industries. DUT is deeply committed to fostering a vibrant culture of innovation, nurturing entrepreneurship, and promoting active community engagement, consistently striving to produce graduates who are remarkably adaptable, highly employable, and contribute meaningfully to socio-economic development, thereby playing a pivotal role in shaping the future workforce."
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
