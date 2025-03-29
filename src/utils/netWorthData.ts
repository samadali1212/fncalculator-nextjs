export interface NetWorthPerson {
  id: string;
  name: string;
  netWorth: number;
  currency: string;
  occupation: string;
  age: number;
  country: string;
  industry: string;
  company?: string;
  description: string;
  source: string;
  lastUpdated: string;
  imageUrl: string;
  slug: string;
  categories: string[];
}

export const netWorthPeople: NetWorthPerson[] = [
  {
    id: "1",
    name: "Patrice Motsepe",
    netWorth: 3200000000,
    currency: "USD",
    occupation: "Mining Magnate",
    age: 61,
    country: "South Africa",
    industry: "Mining",
    company: "African Rainbow Minerals",
    description: "A trailblazer in the South African mining sector, Patrice Motsepe has carved out a remarkable success story through his company, African Rainbow Minerals (ARM). Demonstrating exceptional entrepreneurial drive, Motsepe transformed a modest mining services business into a diversified mining giant with interests in platinum, gold, ferrous metals, and coal. His journey is particularly noteworthy as he was one of the first black South Africans to enter the mining industry at a senior level following the end of apartheid. Beyond his business achievements, Motsepe is also recognized for his philanthropic commitments through the Motsepe Foundation, which supports education, healthcare, and poverty alleviation initiatives. Furthermore, his passion for sports is evident in his ownership of the Mamelodi Sundowns Football Club, one of the most successful teams in South Africa.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://media.gettyimages.com/id/994504746/photo/johannesburg-south-africa-patrice-motsepe-of-the-motsepe-foundation-speaks-during-the-press.jpg?s=612x612&w=0&k=20&c=Y8KvOlDCUxXV-4LwCz3fNhHZtCs__8_C9Rf7ssBO6xY=",
    slug: "patrice-motsepe",
    categories: ["football-club-owners", "mining-magnates", "philanthropists"]
  },
  {
    id: "2",
    name: "Johann Rupert",
    netWorth: 10700000000,
    currency: "USD",
    occupation: "Businessman",
    age: 73,
    country: "South Africa",
    industry: "Luxury Goods",
    company: "Richemont",
    description: "A titan of South African industry, Johann Rupert has expertly steered the fortunes of luxury goods conglomerate Richemont, a company renowned for its prestigious brands in jewelry, watches, fashion, and writing instruments. Born into a family with a strong entrepreneurial legacy, Rupert inherited and expanded upon his father Anton Rupert's business empire. Beyond Richemont, his influence extends through Remgro, an investment holding company with diverse interests spanning banking, healthcare, and consumer products. Known for his astute business acumen and often outspoken views on economic and social issues in South Africa, Rupert maintains a relatively private profile despite his significant public standing. His leadership has been instrumental in positioning Richemont as a global leader in the high-end market, navigating the complexities of international commerce and evolving consumer preferences.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Rupert-Johann-2004.jpg",
    slug: "johann-rupert",
    categories: ["luxury-goods", "business-magnates"]
  },
  {
    id: "3",
    name: "Nicky Oppenheimer",
    netWorth: 8700000000,
    currency: "USD",
    occupation: "Diamond Heir",
    age: 78,
    country: "South Africa",
    industry: "Mining",
    company: "De Beers",
    description: "The name Oppenheimer resonates deeply within the history of South African mining, particularly in the realm of diamonds. Nicky Oppenheimer represents the third generation of this influential family to lead the De Beers diamond mining company. For decades, the Oppenheimer family held a dominant position in the global diamond trade, shaping the industry and contributing significantly to South Africa's economic landscape. While the family's direct control over De Beers has since transitioned, Nicky Oppenheimer remains a figure of considerable wealth and influence. His legacy is intertwined with the intricate history of diamond mining in the region, a story marked by both immense prosperity and complex social implications. Today, he focuses on conservation efforts and philanthropic endeavors, channeling his resources towards preserving Africa's natural heritage and supporting various social causes.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://media.gettyimages.com/id/81157695/photo/gaborone-botswana-nicky-oppenheimer-age-63-the-chairman-of-de-beers-sits-in-a-de-beers-office.jpg?s=612x612&w=0&k=20&c=7JVCg_OsD8SQNXvo7F3t5xZ7G5Yc82Y3wiK6kjRjxfw=",
    slug: "nicky-oppenheimer",
    categories: ["mining-magnates", "diamond-industry"]
  },
  {
    id: "4",
    name: "Koos Bekker",
    netWorth: 2300000000,
    currency: "USD",
    occupation: "Media Executive",
    age: 71,
    country: "South Africa",
    industry: "Media & Technology",
    company: "Naspers",
    description: "Having served as the chief executive officer of Naspers for nearly two decades, Koos Bekker is widely credited with transforming the South African publishing house into a global internet and media powerhouse. His visionary leadership saw Naspers make an early and incredibly lucrative investment in the Chinese technology company Tencent, a move that has generated enormous returns and significantly elevated Naspers' international standing. Bekker's strategic foresight and understanding of the burgeoning digital landscape were instrumental in this transformation. Though he stepped down as CEO in 2014, his impact on Naspers and the broader technology investment world remains profound. His tenure is remembered for bold decisions and a keen eye for identifying high-growth potential in emerging markets, particularly in the rapidly evolving internet sector.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://media.gettyimages.com/id/472544152/photo/koos-bekker-billionaire-and-chairman-of-naspers-ltd-reacts-during-an-interview-at-his-office.jpg?s=612x612&w=0&k=20&c=9cuD31U6fHI1XqU6GUHs6q2XLhJYcEdRD3g3cwBKX3I=",
    slug: "koos-bekker",
    categories: ["media-executives", "tech-investors"]
  },
  {
    id: "5",
    name: "Michiel Le Roux",
    netWorth: 1100000000,
    currency: "USD",
    occupation: "Banker",
    age: 73,
    country: "South Africa",
    industry: "Banking",
    company: "Capitec Bank",
    description: "The astute businessman behind Capitec Bank, Michiel Le Roux, has significantly disrupted the South African banking industry. Recognizing a gap in the market for a more accessible and affordable banking model, Le Roux played a pivotal role in establishing Capitec as a major player. The bank's innovative approach, focusing on simplicity, transparency, and lower fees, resonated with a large segment of the population, leading to rapid growth and challenging the dominance of more established institutions. Le Roux's entrepreneurial spirit and understanding of consumer needs were crucial to Capitec's success. While he may maintain a lower public profile compared to some other business leaders, his impact on the financial lives of millions of South Africans through Capitec Bank is undeniable and has earned him a place among the country's wealthiest individuals.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5a80fc894bbe6f2652f543fb/0x0.jpg?format=jpg&crop=455,455,x87,y0,safe&height=416&width=416&fit=bounds",
    slug: "michiel-le-roux",
    categories: ["bankers", "financial-innovators"]
  },
  {
    id: "6",
    name: "Douw Steyn",
    netWorth: 1000000000,
    currency: "USD",
    occupation: "Insurance Entrepreneur",
    age: 70,
    country: "South Africa",
    industry: "Insurance",
    company: "BGL Group",
    description: "A prominent figure in the South African property development sector, Douw Steyn has left an indelible mark on the landscape with his ambitious and large-scale projects. He is best known for the creation of Steyn City, a sprawling and luxurious mixed-use development north of Johannesburg, which exemplifies his vision for creating self-contained, high-quality urban environments. Steyn's career has been characterized by a bold approach to development, often involving significant investment and innovative design concepts. His ventures have not only generated substantial wealth but have also contributed to shaping the urban sprawl and lifestyle offerings in the Gauteng province. Through his various property endeavors, Steyn has demonstrated a keen understanding of market trends and a commitment to creating distinctive and sought-after residential and commercial spaces.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://www.goodthingsguy.com/wp-content/uploads/2025/02/douw-steyn.jpg",
    slug: "douw-steyn",
    categories: ["insurance-executives", "property-developers"]
  },
  {
    id: "7",
    name: "Stephen Saad",
    netWorth: 900000000,
    currency: "USD",
    occupation: "Pharmaceutical Executive",
    age: 59,
    country: "South Africa",
    industry: "Pharmaceuticals",
    company: "Aspen Pharmacare",
    description: "As the co-founder and current Chief Executive Officer of Aspen Pharmacare, Stephen Saad has built a pharmaceutical giant with a global reach. Starting from relatively humble beginnings, Saad and his partners transformed Aspen into the largest pharmaceutical manufacturer in Africa, with a growing presence in international markets. His leadership has been instrumental in navigating the complexities of the pharmaceutical industry, including research and development, manufacturing, and distribution across diverse regulatory environments. Saad's entrepreneurial journey is a testament to his strategic vision and his ability to capitalize on opportunities within the healthcare sector. Aspen's success under his guidance has not only contributed to his personal wealth but has also played a significant role in providing access to essential medicines for millions of people in South Africa and beyond.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://lh3.googleusercontent.com/dPQ9LQuUnK6m65uLminDsUclszwNcLjorH7B7LqVFg_ztCHK6QPjW5tn-olOpgFPq32iBK8BERSG2wAFU-XiDxrd-PMyEfTB60ls4Nuzf-SuuA",
    slug: "stephen-saad",
    categories: ["pharmaceutical-executives", "healthcare-entrepreneurs"]
  },
  {
    id: "8",
    name: "Cyril Ramaphosa",
    netWorth: 450000000,
    currency: "USD",
    occupation: "Politician & Businessman",
    age: 71,
    country: "South Africa",
    industry: "Politics & Business",
    company: "Shanduka Group",
    description: "Currently serving as the President of the Republic of South Africa, Cyril Ramaphosa has had a long and distinguished career spanning business, politics, and trade unionism. Before entering the highest office, Ramaphosa was a prominent businessman with significant investments in various sectors, including mining, telecommunications, and beverages. His early career saw him as a key figure in the anti-apartheid movement and the formation of the powerful National Union of Mineworkers. Following the transition to democracy, he played a crucial role in the drafting of South Africa's constitution. Ramaphosa's journey reflects a unique blend of political activism, business acumen, and public service, making him a complex and influential figure in South African society. His current focus is on addressing the country's economic challenges and fostering social cohesion.",
    source: "Bloomberg",
    lastUpdated: "2025-03-28",
    imageUrl: "https://lh3.googleusercontent.com/CuxBt-N3r9YNz9dlrNK8AMZLq5_WdkyjH1-esXje3fwBWMLnA9wxfiuVYYqj5u0KV5PJkX_4CpipTkr2jlnaOgrGvp7GtMCnsGDc3SlRQj8X9Ic=s750",
    slug: "cyril-ramaphosa",
    categories: ["politicians", "business-leaders"]
  },
  {
    id: "9",
    name: "Jannie Mouton",
    netWorth: 800000000,
    currency: "USD",
    occupation: "Investor",
    age: 77,
    country: "South Africa",
    industry: "Finance",
    company: "PSG Group",
    description: "Often hailed as the 'Boere Buffett,' Jannie Mouton is a highly respected figure in the South African investment community. He founded the PSG Group, an investment holding company with interests in financial services, banking, education, and agriculture. Mouton's investment philosophy, characterized by a long-term perspective and a focus on value investing, has proven remarkably successful over the years. His astute stock-picking abilities and his knack for identifying promising businesses have earned him a legendary status among investors in South Africa. Mouton's down-to-earth approach and his willingness to share his insights have made him a popular and influential voice in the financial markets. His legacy is one of shrewd investment decisions and the creation of a diversified and enduring investment group that continues to generate value.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/8ab9cfd81c126830ba99bde49a2fdc07/0x0.jpg?format=jpg&crop=531,532,x105,y16,safe&height=416&width=416&fit=bounds",
    slug: "jannie-mouton",
    categories: ["investment-gurus", "financial-advisors"]
  },
  {
    id: "10",
    name: "Adrian Gore",
    netWorth: 700000000,
    currency: "USD",
    occupation: "Insurance Executive",
    age: 59,
    country: "South Africa",
    industry: "Insurance & Healthcare",
    company: "Discovery Limited",
    description: "The visionary founder and Chief Executive Officer of Discovery Limited, Adrian Gore has revolutionized the South African healthcare and financial services industries with his innovative business models. Discovery's integrated approach, centered around incentivizing healthy behavior through its Vitality program, has gained international recognition and has been adopted in various forms across the globe. Gore's entrepreneurial spirit and his commitment to using data and behavioral economics to improve people's health and financial well-being have been the driving forces behind Discovery's success. His leadership has not only built a highly profitable company but has also had a significant positive impact on the health and wellness of its millions of members. Gore's forward-thinking approach and his ability to disrupt traditional industries have established him as a prominent and influential business leader in South Africa.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Adrian_Gore.jpg",
    slug: "adrian-gore",
    categories: ["insurance-executives", "healthcare-innovators"]
  },
    {
    id: "11",
    name: "DJ Black Coffee",
    netWorth: 60000000,
    currency: "USD",
    occupation: "DJ, Record Producer, & Songwriter",
    age: 49,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Soulistic Music",
    description: "Globally recognized as a pioneer of Afro-house music, Nkosinathi Innocent Maphumulo, famously known as Black Coffee, has etched his name as a dominant force in the international DJ scene. His sophisticated blend of deep house infused with African rhythms has captivated audiences worldwide, earning him numerous accolades, including a Grammy Award. Beyond his electrifying performances at prestigious venues and festivals across the globe, Black Coffee has also proven himself as a shrewd businessman, investing in multiple properties both in South Africa and the United States. His journey from humble beginnings to international stardom serves as an inspiration to aspiring artists, demonstrating that talent, hard work, and a unique artistic vision can transcend geographical boundaries and cultural differences. His influence extends beyond music, positioning him as a cultural ambassador for South Africa on the global stage.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://i0.wp.com/mgosi.co.za/wp-content/uploads/2022/06/Black-coffee.jpeg?fit=1440%2C1440&ssl=1",
    slug: "black-coffee",
	categories: ["djs"]
  },
  {
    id: "12",
    name: "DJ Zinhle",
    netWorth: 3000000,
    currency: "USD",
    occupation: "DJ, Businesswoman, & Producer",
    age: 42,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Kalawa Jazmee",
    description: "Ntombezinhle Jiyane, popularly known as DJ Zinhle, has solidified her position as one of the most successful and influential female DJs in Africa. Since launching her career in 2004, she has not only dominated the music scene with her infectious house beats but has also proven to be a formidable businesswoman. DJ Zinhle has successfully ventured into various entrepreneurial endeavors, including her fashion accessory brand 'Timeless,' a furniture manufacturing and design company called 'DJZinhle Dancing Pencils' (co-owned with her brother), and a beverage company, 'Boulevard Rose,' specializing in wines and champagnes. Her ability to seamlessly transition between the music industry and the business world showcases her versatility and astute business acumen. Residing in an impressive Johannesburg mansion, DJ Zinhle's success story serves as an inspiration for aspiring female entrepreneurs and DJs across the continent.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://lh3.googleusercontent.com/tGIdzVbOsBiZVcuLxpWFEiPv9yCYBMaOySIqjFOZSkgIO5zciYOziL6xhD-_PE5YRbAE_lSXTXUi3jVTfJa29uE1MijcM2HYrSUb0taLwXV3Ug=s750",
    slug: "dj-zinhle",
	categories: ["djs"]
  },
  {
    id: "13",
    name: "DJ Kabza De Small",
    netWorth: 2000000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 32,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Piano Hub, Bestbyfar",
    description: "Kabelo Petrus Motha, widely celebrated as Kabza De Small, has emerged as a central figure in the amapiano music genre, earning him the moniker 'King of Amapiano.' His innovative and prolific production has significantly shaped the sound of this popular South African genre, collaborating with numerous artists and releasing a consistent stream of hit tracks. Often working in tandem with DJ Maphorisa under the moniker 'Scorpion Kings,' Kabza De Small's influence on the South African music landscape is undeniable. His intricate understanding of rhythm and melody, combined with his ability to create infectious grooves, has garnered him a massive following and critical acclaim. Despite his relatively young age, Kabza De Small's contribution to amapiano has cemented his status as a musical innovator and a key driver of the genre's widespread popularity.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://static.ra.co/images/profiles/square/kabzadesmall.jpg?dateUpdated=1611781076000",
    slug: "kabza-de-small",
	categories: ["djs"]
  },
  {
    id: "14",
    name: "DJ Maphorisa",
    netWorth: 6000000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 37,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "BlaqBoy Music",
    description: "Themba Sekowe, professionally known as DJ Maphorisa, is a highly versatile and influential figure in the South African music industry. As a DJ, record producer, singer, and songwriter, his musical palette spans across various genres, including house music, amapiano, and afropop. His extensive production credits include collaborations with a diverse range of notable artists, both locally and internationally, such as Wizkid, Drake, Black Coffee, and many others. Before establishing his own successful record label, BlaqBoy Music, DJ Maphorisa was signed to Kalawa Jazmee Records, a testament to his early talent and potential. His collaborative spirit and his ability to seamlessly blend different musical styles have made him a sought-after producer and DJ, consistently pushing the boundaries of South African popular music.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://event-images.tixel.com/cdn-cgi/image/w=700,q=70/media/images/d8d66164781ab27f5a7ca5f2bee5cb16_1695870971_3019_square_l.jpg",
    slug: "dj-maphorisa",
	categories: ["djs"]
  },
  {
    id: "15",
    name: "DJ Tira",
    netWorth: 3100000,
    currency: "USD",
    occupation: "DJ & Businessman",
    age: 49,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Afrotainment",
    description: "Makhosini Nathi Maphumulo, affectionately known as DJ Tira, is a veteran of the South African music scene and a prominent figure in the Afro-pop and hip-hop genres. As the founder of the influential record label Afrotainment in 1998, DJ Tira has played a pivotal role in launching and nurturing the careers of numerous South African artists. His energetic performances and his knack for producing catchy and commercially successful tracks have made him a household name across the country. DJ Tira also hosts the annual Afrotainment Music Festival, a major event on the South African music calendar, further solidifying his status as a key influencer in the industry. His longevity and consistent contribution to the South African music landscape underscore his enduring appeal and his understanding of the local music market.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://iharare.com/wp-content/uploads/2021/10/dj-tira.jpg",
    slug: "dj-tira",
	categories: ["djs"]
  },
  {
    id: "16",
    name: "DJ Uncle Waffles",
    netWorth: 150000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 24,
    country: "Eswatini/RSA",
    industry: "Music & Entertainment",
    company: "Kreativekornerr, Uncle Waffles Music",
    description: "Lungelihle Zwane, popularly known as Uncle Waffles, has taken the amapiano scene by storm with her electrifying DJ sets and distinctive dance moves. Her meteoric rise to fame was fueled by viral videos showcasing her energetic performances, captivating audiences both in South Africa and internationally. Uncle Waffles' unique style and her ability to connect with the crowd have quickly made her a sought-after DJ for major events and festivals. Her international recognition, including performances in other African countries and beyond, highlights her growing global appeal and her potential to further elevate the amapiano genre on the world stage. Despite being a relatively new entrant to the mainstream, Uncle Waffles' impact has been significant, demonstrating the power of social media in propelling emerging artists to stardom.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://yt3.googleusercontent.com/UBN47LCrpZcPuY2RzHsOt2Da_5sK8lVUziKF1afCBcNs0l9zYWRDdxR_SkHsK9kE3CzDDvfI6SU=s900-c-k-c0x00ffffff-no-rj",
    slug: "uncle-waffles",
	categories: ["djs"]
  },
  {
    id: "17",
    name: "DJ Oskido",
    netWorth: 2500000,
    currency: "USD",
    occupation: "Artist, DJ & Record Producer",
    age: 57,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Kalawa Jazmee Records",
    description: "Oscar Bonginkosi Mdlongwa, widely known as Oskido, is a true pioneer of South African house music and a highly respected veteran in the industry. With a career spanning several decades, Oskido has been instrumental in shaping the sound of South African dance music and has mentored countless aspiring DJs and producers. As a co-founder of the legendary Kalawa Jazmee Records, he played a crucial role in popularizing kwaito music in the 1990s, laying the foundation for many of the genres that followed. Oskido's enduring influence and his dedication to nurturing new talent have solidified his status as a living legend in the South African music scene. His deep understanding of music and his ability to adapt to evolving trends have allowed him to remain relevant and influential throughout his long and illustrious career.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://lh3.googleusercontent.com/ddKBS1jdFwJax5OTbNCsxXzi9tb1k_yg6ie-r_cwhw3piwzcFO4AX4xVLf1RIIfHvxsXd8YZk-4YcV64EWlyv4PMAqNWxaMAoA=s1500-pp",
    slug: "oskido",
	categories: ["djs"]
  },
  {
    id: "18",
    name: "DJ Shimza",
    netWorth: 5000000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 40,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "The Hang Awt 1632",
    description: "Ashley Raphala, professionally known as DJ Shimza, has carved out a significant niche in the South African house music scene with his sophisticated and soulful sound. Known for his meticulously crafted DJ sets and his ability to create a captivating atmosphere on the dance floor, DJ Shimza has become a regular feature at major music festivals and events both locally and internationally. He is also the founder of 'Shimza's One Man Show,' an annual event that has grown into a significant platform for showcasing South African musical talent. DJ Shimza's dedication to his craft and his commitment to delivering high-quality musical experiences have earned him a loyal following and critical acclaim, establishing him as a prominent figure in the contemporary South African dance music landscape.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://yt3.googleusercontent.com/IfhYU9Ydx6ekK7wzCFyjAC5Z_h_MYG6zB4_KVJZlsTuMbJAdeeQh2jZtBtj9fNuDA_ZbawmCFQ=s900-c-k-c0x00ffffff-no-rj",
    slug: "dj-shimza",
	categories: ["djs"]
  },
  {
    id: "19",
    name: "Lerato Kganyago",
    netWorth: 2000000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 42,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Tammy Tailor Franchise Store",
    description: "While primarily known as a prominent media personality, television presenter, and model, Lerato Kganyago has also established herself as a capable and sought-after DJ. Her foray into the DJing world has added another dimension to her already successful career, showcasing her versatility and her passion for music. Lerato Kganyago's engaging stage presence and her ability to curate sets that resonate with diverse audiences have made her a popular choice for corporate events, fashion shows, and other high-profile gatherings. Her established brand and her wide-reaching influence across various entertainment platforms have undoubtedly contributed to her success as a DJ, further solidifying her status as a multifaceted and influential figure in the South African entertainment industry.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://yt3.googleusercontent.com/IWV5YOVHydvK9IgH8kvBlZ0DJr4HlY9rbtb0HdY1D4zsyU-I31fcANLc2ZcXnC7aThVwYv-m2nA=s900-c-k-c0x00ffffff-no-rj",
    slug: "lerato-kganyago",
	categories: ["djs"]
  },
  {
    id: "20",
    name: "DJ Fresh",
    netWorth: 2000000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 52,
    country: "South Africa",
    industry: "Media Personality",
    company: "Big Dawg Productions",
    description: "Daniel Stein, known professionally as DJ Fresh, is an award-winning British DJ and record producer who has also made a significant impact on the South African music scene. While originally from the UK, DJ Fresh has collaborated with numerous South African artists and has become a familiar face at local music festivals and events. His dynamic and energetic sets, often blending drum and bass with other electronic music genres, have earned him a strong following in South Africa. Notably, he formed a successful duo with DJ Euphonik under the name F.Eu, releasing several albums and headlining major events. DJ Fresh's ability to connect with the South African audience and his willingness to collaborate with local talent have cemented his place as a respected figure in the country's electronic music landscape.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://yt3.googleusercontent.com/ze433g2j5iMfFxe3rcjt8NwnrTXDucDP7gnrE0xtSBbhPhk_YMI6-RwNT5L9fLNkMmq9YT3l=s900-c-k-c0x00ffffff-no-rj",
    slug: "dj-fresh",
	categories: ["djs"]
  },
  {
    id: "21",
    name: "DJ Euphonik",
    netWorth: 1900000,
    currency: "USD",
    occupation: "DJ & Record Producer",
    age: 41,
    country: "South Africa",
    industry: "Music &  Property Investor",
    company: "ROCKA X Euphonik Headphones",
    description: "Themba Mbongeni Nkosi, widely recognized as DJ Euphonik, is a prominent figure in the South African house music scene and a well-known radio personality on stations like 5FM and 947. His consistent delivery of popular house music tracks and his energetic DJ sets have garnered him a large and dedicated fanbase. DJ Euphonik gained significant recognition early in his career with the hit track 'Cool and Deadly,' a collaboration that topped the 5FM charts. He also formed a successful partnership with DJ Fresh, creating the duo F.Eu, which produced several popular albums and headlined major events. Beyond his music career, DJ Euphonik has also ventured into business, demonstrating his entrepreneurial spirit and his desire to diversify his income streams.",
    source: "Forbes",
    lastUpdated: "2025-03-28",
    imageUrl: "https://i1.sndcdn.com/avatars-000188518071-egygye-t1080x1080.jpg",
    slug: "dj-euphonik",
	categories: ["djs"]
  },
  {
    id: "13",
    name: "DJ Tbo Touch",
    netWorth: 30000000,
    currency: "USD",
    occupation: "DJ, Radio Host",
    age: 43,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Touch HD",
    description: "Tbo Touch, born Thabo Molefe, has built a legacy in South Africa's media industry. He first gained fame as a charismatic radio host, later transitioning into television and business. His influence expanded with Touch HD, a pioneering digital radio station. Beyond music, his investments span technology and branding, cementing his status as a top entrepreneur. His ability to merge entertainment with business innovation has placed him among the richest DJs in the country.",
    source: "Research",
    lastUpdated: "2025-03-29",
    imageUrl: "https://afternoonexpress.co.za/website/admin/UserFiles/Image/Guests/Presenters/2016/October%202016/TBO%20Touch_edited.jpg",
    slug: "dj-tbo-touch",
    categories: ["djs", "media"]
  },
  {
    id: "14",
    name: "DJ Heavy K",
    netWorth: 3000000,
    currency: "USD",
    occupation: "DJ, Producer",
    age: 33,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DrumBoss Musik",
    description: "Mkhululi Siqula, widely known as Heavy K, is a celebrated house music producer and DJ. His career took off after producing hits that blended deep African rhythms with modern electronic sounds. His signature drum patterns and soulful melodies have made him a household name. With numerous chart-topping singles and collaborations with industry heavyweights, he has solidified his financial and artistic success. His passion for music continues to fuel his ever-growing influence in South Africa's entertainment landscape.",
    source: "Research",
    lastUpdated: "2025-03-30",
    imageUrl: "https://pbs.twimg.com/profile_images/1763285663133155328/-mzBxip0_400x400.jpg",
    slug: "dj-heavy-k",
    categories: ["djs", "music"]
  },
  {
    id: "15",
    name: "Thando Thabethe",
    netWorth: 2000000,
    currency: "USD",
    occupation: "DJ, Actress, Radio Host",
    age: 34,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "Thando Thabethe is a multitalented media personality, actress, and DJ. From hosting major radio shows to making waves in the acting industry, she has consistently expanded her influence. Her skills behind the decks have further established her presence in the entertainment world. She has secured lucrative brand partnerships and business ventures, adding to her financial success. Her ability to dominate multiple industries while maintaining an authentic connection with fans has made her one of South Africa's most influential and wealthiest DJs.",
    source: "Research",
    lastUpdated: "2025-03-31",
    imageUrl: "https://image-prod.iol.co.za/square/450/5-Reasons-We-Love-Our-Wellness-Issue-Cover-Star-Thando-Thabethe?source=https://iol-prod.appspot.com/image/315ba1ce7b38be048fb60e587c2f92a9da7df6c2/2000&operation=CROP&offset=0x0&resize=2000x2000",
    slug: "thando-thabethe",
    categories: ["djs", "media"]
  },
  {
    id: "16",
    name: "DJ Sbu",
    netWorth: 1600000,
    currency: "USD",
    occupation: "DJ, Entrepreneur",
    age: 47,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "Massiv Metro",
    description: "DJ Sbu, real name Sbusiso Leope, is more than just a DJ he's a businessman, author, and media mogul. He first made his mark in radio and music, but his entrepreneurial drive led to ventures like MoFaya energy drinks. He has continuously expanded his empire, creating opportunities for young artists and investing in various businesses. His relentless work ethic and diverse income streams have made him one of the wealthiest DJs in the country, proving that success comes from both talent and strategic business moves.",
    source: "Research",
    lastUpdated: "2025-04-01",
    imageUrl: "https://lh3.googleusercontent.com/Q_Fhqe8CSfh6iNNyK_nSdW02TE_JAMqWCnDZl-yXSRGpeErvKmft4YZNNfYlAt1B6sbPJ_3QuEX9PtJDYA4c4XRdNPMVkxkGgps=s1000",
    slug: "dj-sbu",
    categories: ["djs", "business"]
  },
  {
    id: "17",
    name: "DJ Lamiez",
    netWorth: 1000000,
    currency: "USD",
    occupation: "DJ, TV Host",
    age: 33,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "Lamiez Holworthy has become one of the most recognizable female DJs in South Africa. Her rise to fame was fueled by her deep passion for house music and her energetic live performances. She built a strong brand through television, radio, and DJing, attracting numerous endorsements and business opportunities. Her authenticity and dedication to her craft have set her apart, allowing her to command major gigs across the country. Her growing influence and financial success continue to inspire aspiring female DJs in the industry.",
    source: "Research",
    lastUpdated: "2025-04-02",
    imageUrl: "https://i0.wp.com/sundayworld.co.za/wp-content/uploads/2022/04/lamiez-1.jpg?fit=677%2C592&ssl=1",
    slug: "dj-lamiez",
    categories: ["djs", "media"]
  },
  {
    id: "18",
    name: "Felo Le Tee",
    netWorth: 380000,
    currency: "USD",
    occupation: "DJ, Producer",
    age: 28,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "Felo Le Tee has emerged as a leading force in Amapiano, a genre that has taken South Africa by storm. His ability to produce chart-topping hits and electrify dance floors has made him a sought-after name in the industry. His success has brought financial rewards, with major collaborations and performances at high-profile events. His unique sound and creativity keep him at the forefront of the music scene, ensuring his position as one of the most successful DJs in the country.",
    source: "Research",
    lastUpdated: "2025-04-03",
    imageUrl: "https://cdn-images.dzcdn.net/images/artist/1a54f9bc98dfc73ea023602a4c49c7c4/1900x1900-000000-80-0-0.jpg",
    slug: "felo-le-tee",
    categories: ["djs", "music"]
  },
  {
    id: "19",
    name: "DJ Melzi",
    netWorth: 377000,
    currency: "USD",
    occupation: "DJ, Producer",
    age: 23,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "DJ Melzi, born Tumelo Mphai, is a rising star in the South African DJing world. Despite his young age, he has already made a name for himself through hit singles and an impressive production style. His fresh approach to house and Amapiano music has attracted a massive fan base. With a keen eye for business, he has capitalized on his success, securing deals and endorsements that have boosted his financial standing. His rapid rise and ability to stay relevant show that his influence is only set to grow.",
    source: "Research",
    lastUpdated: "2025-04-04",
    imageUrl: "https://yt3.googleusercontent.com/NqzHHeP-D7jahdrs_B4Wx1qzXiTria01ZASPtz0n6pjEx5bDF1sZL7_yQRqLohXn8_NrxebP=s900-c-k-c0x00ffffff-no-rj",
    slug: "dj-melzi",
    categories: ["djs", "music"]
  },
  {
    id: "20",
    name: "DJ Nate Raubenheimer",
    netWorth: 350000,
    currency: "USD",
    occupation: "DJ, Producer",
    age: "30s",
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "Nate Raubenheimer, better known as Protoculture, is a globally recognized DJ and music producer from South Africa. Specializing in trance and progressive house, he has performed at international festivals and collaborated with some of the biggest names in the industry. His deep understanding of sound design and production has made him a respected figure in electronic music. His career longevity, combined with smart financial decisions, has placed him among the country's wealthiest DJs.",
    source: "Research",
    lastUpdated: "2025-04-05",
    imageUrl: "https://img.imageboss.me/rinse-fm/cover:smart/1200x1200/format:webp/Webite-Episode-_No-Text-Overlayed_-Square_2022-10-10-123705_pald.png",
    slug: "dj-protoculture",
    categories: ["djs", "music"]
  },
  {
    id: "21",
    name: "DJ Kent",
    netWorth: 320000,
    currency: "USD",
    occupation: "DJ, Producer",
    age: 42,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "DJ Kent has mastered the art of blending soulful house with commercial appeal. His signature smooth mixes and timeless production style have made him a household name in South Africa. Over the years, he has released numerous hit songs and built a brand that extends beyond just music. His business acumen and ability to adapt to industry trends have allowed him to maintain both his relevance and financial success, making him one of the richest DJs in the country.",
    source: "Research",
    lastUpdated: "2025-04-06",
    imageUrl: "https://yt3.googleusercontent.com/pEZiS4oUxAk3F-jxh7_m5F34U8M2wJ0fKawV_2lCrOVOqNjxT0JjDcYXUG_fpO1Eaf7tja5wkbY=s900-c-k-c0x00ffffff-no-rj",
    slug: "dj-kent",
    categories: ["djs", "music"]
  },
  {
    id: "22",
    name: "DJ Jaivane",
    netWorth: 260000,
    currency: "USD",
    occupation: "DJ, Producer",
    age: 33,
    country: "South Africa",
    industry: "Music & Entertainment",
    company: "DJ",
    description: "DJ Jaivane has played a pivotal role in the rise of private school Amapiano, a subgenre that has gained massive popularity. His deep, soulful mixes have set him apart, earning him a dedicated fan base. His label, Simnandi Records, has helped launch the careers of several young artists. Through strategic branding, exclusive performances, and smart investments, he has secured his place among South Africa's wealthiest DJs while continuing to push boundaries in the music industry.",
    source: "Research",
    lastUpdated: "2025-04-07",
    imageUrl: "https://cdn-images.dzcdn.net/images/cover/494bfb6cf17a6723d473ec9a1aebbca8/0x1900-000000-80-0-0.jpg",
    slug: "dj-jaivane",
    categories: ["djs", "music"]
  },
	
  {
    id: "1",
    name: "Mamelodi Sundowns",
    netWorth: 382000000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 54,
    country: "South Africa",
    industry: "Sports",
    company: "Mamelodi Sundowns FC",
    description: "Mamelodi Sundowns reigns supreme as the wealthiest football club in South Africa. Their financial might, bolstered by an estimated net worth of R382 million, comes primarily from the backing of billionaire mining magnate Patrice Motsepe. This financial power is a key driver behind their sustained dominance in recent years, enabling the club to attract top talent and build a winning dynasty. Beyond trophies, Sundowns are known for their flamboyant style of play and the vibrant atmosphere created by their passionate fanbase filling Loftus Versfeld Stadium.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/Mamelodi%20Sundowns.png",
    slug: "mamelodi-sundowns",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "2",
    name: "Orlando Pirates",
    netWorth: 325900000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 87,
    country: "South Africa",
    industry: "Sports",
    company: "Orlando Pirates FC",
    description: "Orlando Pirates are a club steeped in history and synonymous with the Soweto township where they are based. Founded in 1937, the Buccaneers have built a legacy of success on the pitch and a fiercely loyal following throughout the nation. With an estimated net worth of R325. 9 million, Pirates command immense commercial power. This comes from their unwavering fan base, savvy sponsorship deals, and a rich history that makes them one of Africa’s most recognizable football brands.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/Orlando%20Pirates.png",
    slug: "orlando-pirates",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "3",
    name: "Kaizer Chiefs",
    netWorth: 262000000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 54,
    country: "South Africa",
    industry: "Sports",
    company: "Kaizer Chiefs FC",
    description: "Founded by South African football legend Kaizer Motaung, the Kaizer Chiefs are more than just a football club; they are a symbol of pride and resilience. Their nickname, “AmaKhosi” (The Chiefs), reflects their status as one of the country’s most beloved sporting institutions. While trophies have been harder to come by in recent seasons, the Chiefs retain immense financial clout with an estimated net worth of R262 million. This is driven by their unparalleled fanbase, devoted sponsorships, and the enduring appeal of their iconic black and gold kit.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/Kaizer%20Chiefs.png",
    slug: "kaizer-chiefs",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "4",
    name: "AmaZulu",
    netWorth: 173000000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 92,
    country: "South Africa",
    industry: "Sports",
    company: "AmaZulu FC",
    description: "AmaZulu, with a net worth of R173 million, holds a unique position as one of South Africa’s oldest and most culturally significant football clubs. Founded in 1932, “Usuthu” carries deep historical roots entwined with Zulu heritage. Under Sandile Zungu’s leadership, AmaZulu has seen a financial and competitive resurgence. Their strong performances in the PSL solidify their position as a top contender and a testament to their enduring legacy and recent investments in success.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/AmaZulu%20FC.png",
    slug: "amazulu",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "5",
    name: "SuperSport United",
    netWorth: 170000000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 30,
    country: "South Africa",
    industry: "Sports",
    company: "SuperSport United FC",
    description: "Holding a net worth of R170 million, SuperSport United stands out as a fascinating example of sports and media convergence. Owned by the SuperSport television network, “Matsatsantsa” enjoys unique branding opportunities and enhanced fan engagement thanks to its media ties. Based in Pretoria, they represent a potent mix of financial stability and on-field prowess. SuperSport United’s model demonstrates how strategic partnerships and media exposure can fuel a football club’s financial success.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/SuperSport%20United.png",
    slug: "supersport-united",
    categories: ["football-clubs", "psl"]
  },
    {
    id: "6",
    name: "Cape Town City",
    netWorth: 159000000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 8,
    country: "South Africa",
    industry: "Sports",
    company: "Cape Town City FC",
    description: "Cape Town City, with a net worth of R159 million, represents a blend of tradition revitalized. While technically founded in 2016, its roots stretch back much further. “The Citizens” boast a passionate fanbase in Cape Town and ownership committed to community engagement and developing young talent. Their focus on building a strong foundation through youth development and smart financial management suggests a bright future for this club, making them a force to be reckoned with for years to come.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/Cape%20Town%20City%20FC.png",
    slug: "cape-town-city",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "7",
    name: "Tshakhuma Tsha Madzivhandila (TTM FC)",
    netWorth: 107360000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 5,
    country: "South Africa",
    industry: "Sports",
    company: "TTM FC",
    description: "With a net worth of R107.36 million, TTM FC is a relative newcomer that’s made a splash. Founded in 2020, this Limpopo-based club rose rapidly by acquiring Bidvest Wits’ Premier League status. This bold move signals ambition and substantial financial backing. While their on-field consistency is still developing, TTM FC’s rapid acquisition of wealth makes them a fascinating club to keep an eye on in the ever-evolving South African football scene.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Tshakhuma_Tsha_Madzivhandila_F.C._logo.png",
    slug: "ttm-fc",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "8",
    name: "Cape Town Spurs",
    netWorth: 76140000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 54,
    country: "South Africa",
    industry: "Sports",
    company: "Cape Town Spurs FC",
    description: "Formerly known as Ajax Cape Town, the Cape Town Spurs boast a net worth of R76.14 million. This club’s rich history stretches back to 1970 and includes a legacy of developing exceptional young players. Though formerly affiliated with Dutch giants AFC Ajax, their 2020 rebranding as the “Urban Warriors” reflects a commitment to their own identity. Their value showcases a continued presence in South African football and their long-term dedication to nurturing rising stars.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CT_SPURS_LOGO-01.jpg/1200px-CT_SPURS_LOGO-01.jpg",
    slug: "cape-town-spurs",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "9",
    name: "Bloemfontein Celtic",
    netWorth: 73990000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 55,
    country: "South Africa",
    industry: "Sports",
    company: "Bloemfontein Celtic FC",
    description: "Celtic holds a net worth of R73.99 million and is beloved for its distinct identity as “Phunya Sele Sele.” Founded in 1969, the club enjoys a loyal fanbase despite its recent absence from the PSL. Celtic’s resilience despite challenges points to a strong foundation built on tradition. Their financial strength is a testament to their enduring legacy and continued importance in the upper echelons of South African football.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Bloemfontein_Celtic_FC_logo.svg/1200px-Bloemfontein_Celtic_FC_logo.svg.png",
    slug: "bloemfontein-celtic",
    categories: ["football-clubs", "psl"]
  },
  {
    id: "10",
    name: "Chippa United",
    netWorth: 63830000,
    currency: "ZAR",
    occupation: "Football Club",
    age: 15,
    country: "South Africa",
    industry: "Sports",
    company: "Chippa United FC",
    description: "Rounding out the list with a net worth of R63.83 million is Chippa United, the “Chilli Boys.” This relatively young club founded in 2010 has steadily worked its way to the top tier. Their journey from Cape Town to Gqeberha symbolizes their determination. Chippa United’s consistent presence in the PSL shows promise, making them a team to watch as they aim for even greater heights in the years to come.",
    source: "Statista",
    lastUpdated: "2025-03-29",
    imageUrl: "https://www.psl.co.za/newpsl/images/clublogos/Chippa%20United.png",
    slug: "chippa-united",
    categories: ["football-clubs", "psl"]
  }
];

/**
 * Find a person by their slug
 * @param slug The slug of the person to find
 * @returns The person object or undefined if not found
 */
export function findPersonBySlug(slug: string): NetWorthPerson | undefined {
  return netWorthPeople.find(person => person.slug === slug);
}

/**
 * Format currency amounts with appropriate symbol
 * @param amount The amount to format
 * @param currency The currency code
 * @returns Formatted currency string
 */
export function formatNetWorth(amount: number, currency: string = "USD"): string {
  // Default to USD if no currency specified
  const currencyCode = currency || "USD";
  
  // Special case for ZAR (South African Rand)
  if (currencyCode === "ZAR") {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(amount);
  }
  
  // Format with the appropriate currency symbol
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(amount);
}

/**
 * Get a list of similar people based on industry and net worth range
 * @param currentPerson The current person being viewed
 * @param limit Maximum number of people to return
 * @returns Array of similar people
 */
export function getSimilarPeople(currentPerson: NetWorthPerson, limit: number = 5): NetWorthPerson[] {
  if (!currentPerson) return [];
  
  return netWorthPeople
    .filter(person => 
      person.id !== currentPerson.id && 
      (person.industry === currentPerson.industry || 
       Math.abs(person.netWorth - currentPerson.netWorth) < currentPerson.netWorth * 0.5)
    )
    .sort((a, b) => Math.abs(a.netWorth - currentPerson.netWorth) - Math.abs(b.netWorth - currentPerson.netWorth))
    .slice(0, limit);
}

/**
 * Get category metadata including title, description, and slug
 */
export interface CategoryMetadata {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

export const categoryDefinitions: Record<string, CategoryMetadata> = {
  "football-club-owners": {
    id: "cat1",
    title: "10 Richest Football Club Owners in South Africa",
    description: "South Africa's wealthiest football club owners who have invested their fortunes in the beautiful game.",
    slug: "richest-football-club-owners",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/10467/production/_117536666_gettyimages-994489106.jpg"
  },
  "djs": {
    id: "cat2",
    title: "10 Richest DJs in South Africa",
    description: "South Africa's top earning disc jockeys who have made their fortunes in the music industry.",
    slug: "richest-south-african-djs",
    imageUrl: "https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/article/image/black-coffee-1-sonar-bcn-2018.jpg.webp"
  },
  "rappers": {
    id: "cat3",
    title: "10 Richest Rappers in South Africa",
    description: "The highest-earning hip-hop artists and rappers who have built their wealth through music and business ventures.",
    slug: "richest-south-african-rappers",
    imageUrl: "https://i.ytimg.com/vi/Mso5Ex7BbpY/maxresdefault.jpg"
  },
  "football-clubs": {
    id: "cat4",
    title: "10 Richest Football Clubs in South Africa",
    description: "South Africa’s wealthiest soccer teams dominate the local football with strong financial backing, lucrative sponsorships, and top-tier talent. These teams boast high market values, successful histories, and large fan bases.",
    slug: "richest-football-clubs-in-south-africa",
    imageUrl: "https://sassainsider.co.za/wp-content/uploads/2024/03/gettyimages-1236234629-612x612-1.jpg"
  },
};

/**
 * Get all available categories with their metadata
 * @returns Array of category metadata
 */
export function getAllCategories(): CategoryMetadata[] {
  return Object.values(categoryDefinitions);
}

/**
 * Find a category by its slug
 * @param slug The slug of the category to find
 * @returns The category metadata or undefined if not found
 */
export function findCategoryBySlug(slug: string): CategoryMetadata | undefined {
  return Object.values(categoryDefinitions).find(cat => cat.slug === slug);
}

/**
 * Get all people in a specific category
 * @param categoryId The category ID to filter by
 * @param limit Optional limit on number of results
 * @returns Array of people in the category
 */
export function getPeopleByCategory(categoryId: string, limit?: number): NetWorthPerson[] {
  const people = netWorthPeople.filter(person => 
    person.categories.includes(categoryId)
  ).sort((a, b) => b.netWorth - a.netWorth);
  
  return limit ? people.slice(0, limit) : people;
}

/**
 * Find a category ID by its slug
 * @param slug The slug of the category
 * @returns The category ID or undefined if not found
 */
export function getCategoryIdBySlug(slug: string): string | undefined {
  const entry = Object.entries(categoryDefinitions).find(([_, metadata]) => metadata.slug === slug);
  return entry ? entry[0] : undefined;
}
