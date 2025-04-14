export interface CelebrityRealName {
  id: string;
  stageName: string;
  realName: string;
  profession: string;
  birthDate?: string;
  birthPlace?: string;
  imageUrl?: string;
  bio: string;
  slug: string;
  funFacts: string[];
}

const celebrityRealNames: CelebrityRealName[] = [
  {
    id: "aka-1",
    stageName: "AKA",
    realName: "Kiernan Jarryd Forbes",
    profession: "Rapper",
    birthDate: "January 28, 1988",
    birthPlace: "Cape Town, South Africa",
    imageUrl: "/celebrity-images/aka.jpg",
    bio: "AKA was a South African rapper, songwriter, and entrepreneur. He gained significant recognition in the South African music industry with hit songs like 'Victory Lap', 'All Eyes on Me', and 'Fela in Versace'.",
    slug: "aka",
    funFacts: [
      "He was part of the hip hop group Entity before going solo",
      "Won numerous South African Music Awards",
      "Collaborated with international artists like Burna Boy and Anatii"
    ]
  },
  {
    id: "cassper-nyovest-1",
    stageName: "Cassper Nyovest",
    realName: "Refiloe Maele Phoolo",
    profession: "Rapper",
    birthDate: "December 16, 1990",
    birthPlace: "Mahikeng, South Africa",
    imageUrl: "/celebrity-images/cassper-nyovest.jpg",
    bio: "Cassper Nyovest is a South African rapper, songwriter, entrepreneur and record producer. His successful albums include 'Tsholofelo', 'Refiloe', and 'Thuto'. He is known for filling up large venues for his concerts.",
    slug: "cassper-nyovest",
    funFacts: [
      "He dropped out of school at 16 to pursue music",
      "Founded his own record label called Family Tree",
      "Known for 'Fill Up' concerts at major venues across South Africa"
    ]
  },
  {
    id: "nasty-c-1",
    stageName: "Nasty C",
    realName: "Nsikayesizwe David Junior Ngcobo",
    profession: "Rapper",
    birthDate: "February 11, 1997",
    birthPlace: "Durban, South Africa",
    imageUrl: "/celebrity-images/nasty-c.jpg",
    bio: "Nasty C is a South African rapper, songwriter and record producer. He gained significant recognition with his mixtape 'Price City' and hit single 'Juice Back'. He has since released successful albums like 'Bad Hair', 'Strings and Bling', and 'Zulu Man with Some Power'.",
    slug: "nasty-c",
    funFacts: [
      "Started rapping at the age of nine",
      "Signed to Def Jam Recordings in 2020",
      "Won Best Hip Hop Album at the South African Music Awards"
    ]
  },
  {
    id: "black-coffee-1",
    stageName: "Black Coffee",
    realName: "Nkosinathi Innocent Maphumulo",
    profession: "DJ & Producer",
    birthDate: "March 11, 1976",
    birthPlace: "Umlazi, South Africa",
    imageUrl: "/celebrity-images/black-coffee.jpg",
    bio: "Black Coffee is a South African DJ, record producer, and songwriter. He has become one of the most prominent electronic music producers in the world and has worked with major international artists.",
    slug: "black-coffee",
    funFacts: [
      "Won a Grammy Award for Best Dance/Electronic Album in 2022",
      "Lost the use of his left arm in a car accident as a teenager",
      "Has performed at major music festivals worldwide including Coachella"
    ]
  },
  {
    id: "sho-madjozi-1",
    stageName: "Sho Madjozi",
    realName: "Maya Christinah Xichavo Wegerif",
    profession: "Rapper & Singer",
    birthDate: "May 9, 1992",
    birthPlace: "Shirley Village, Limpopo, South Africa",
    imageUrl: "/celebrity-images/sho-madjozi.jpg",
    bio: "Sho Madjozi is a South African rapper, singer, songwriter, actress, and poet. She is known for her Tsonga culture representation and colorful fashion sense. Her breakthrough came with the single 'John Cena' which gained international recognition.",
    slug: "sho-madjozi",
    funFacts: [
      "Won Best New International Act at the BET Awards",
      "Raps in multiple languages including English, Swahili, and Tsonga",
      "Has a degree in African Studies and Creative Writing from Mount Holyoke College"
    ]
  },
  {
    id: "pearl-thusi-1",
    stageName: "Pearl Thusi",
    realName: "Sithembile Xola Pearl Thusi",
    profession: "Actress & TV Host",
    birthDate: "May 13, 1988",
    birthPlace: "KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/pearl-thusi.jpg",
    bio: "Pearl Thusi is a South African actress, model, television host, and radio personality. She has starred in international productions like 'Quantico' and Netflix's 'Queen Sono'.",
    slug: "pearl-thusi",
    funFacts: [
      "Was the host of 'Lip Sync Battle Africa'",
      "Starred in Netflix's first African original series 'Queen Sono'",
      "Has her own hair care product line called 'Black Pearl'"
    ]
  },
  {
    id: "trevor-noah-1",
    stageName: "Trevor Noah",
    realName: "Trevor Noah",
    profession: "Comedian & TV Host",
    birthDate: "February 20, 1984",
    birthPlace: "Johannesburg, South Africa",
    imageUrl: "/celebrity-images/trevor-noah.jpg",
    bio: "Trevor Noah is a South African comedian, television host, political commentator, and actor. He is best known for hosting The Daily Show on Comedy Central from 2015 to 2022.",
    slug: "trevor-noah",
    funFacts: [
      "His autobiography 'Born a Crime' became a #1 New York Times Bestseller",
      "Has won multiple Emmy Awards for his work on The Daily Show",
      "Speaks eight languages including English, Xhosa, Zulu, and German"
    ]
  },
  {
    id: "dj-zinhle-1",
    stageName: "DJ Zinhle",
    realName: "Ntombezinhle Jiyane",
    profession: "DJ & Entrepreneur",
    birthDate: "December 30, 1983",
    birthPlace: "Dannhauser, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/dj-zinhle.jpg",
    bio: "DJ Zinhle is a South African DJ, producer, media personality, and businesswoman. She is regarded as one of South Africa's top female DJs and has won several awards for her work.",
    slug: "dj-zinhle",
    funFacts: [
      "Was the first female DJ to win South African Entertainment Award",
      "Owns a watch brand called 'Era by DJ Zinhle'",
      "Has her own reality TV show called 'DJ Zinhle: Unexpected'"
    ]
  },
  {
    id: "bonang-matheba-1",
    stageName: "Bonang Matheba",
    realName: "Bonang Dorothy Matheba",
    profession: "Media Personality & Businesswoman",
    birthDate: "June 25, 1987",
    birthPlace: "Mahikeng, North West, South Africa",
    imageUrl: "/celebrity-images/bonang-matheba.jpg",
    bio: "Bonang Matheba is a South African television presenter, radio personality, businesswoman, producer, model, and philanthropist. She is known for her flamboyant presenting skills and her signature voice.",
    slug: "bonang-matheba",
    funFacts: [
      "Has her own sparkling wine brand called 'House of BNG'",
      "Released an award-winning memoir titled 'Bonang: From A to B'",
      "Was the first South African to get their own E! News Special"
    ]
  },
  {
    id: "boity-thulo-1",
    stageName: "Boity",
    realName: "Boitumelo Thulo",
    profession: "Rapper & Actress",
    birthDate: "April 28, 1990",
    birthPlace: "Potchefstroom, North West, South Africa",
    imageUrl: "/celebrity-images/boity-thulo.jpg",
    bio: "Boity Thulo is a South African television personality, rapper, actress, businesswoman and model. She made her acting debut on the drama series '4Play: Sex Tips for Girls' and later ventured into music with her debut single 'Wuz Dat' featuring Nasty C.",
    slug: "boity-thulo",
    funFacts: [
      "Has her own perfume called 'Boity Pink Sapphire'",
      "Founded a hair care brand named 'Boity Haircare'",
      "Has a reality show called 'Boity: Own Your Throne'"
    ]
  },
  {
    id: "makhadzi-1",
    stageName: "Makhadzi",
    realName: "Ndivhudzannyi Ralivhona",
    profession: "Singer",
    birthDate: "June 30, 1996",
    birthPlace: "Limpopo, South Africa",
    imageUrl: "/celebrity-images/makhadzi.jpg",
    bio: "Makhadzi is a South African singer known for her energetic performances and contribution to Venda music. She gained mainstream recognition with her hit song 'Matorokisi' and has been a force in the music industry since then.",
    slug: "makhadzi",
    funFacts: [
      "Started performing at the age of 12 at local beer events",
      "Speaks and sings in multiple languages including Venda, Tsonga, and Zulu",
      "Has collaborated with Master KG on several songs"
    ]
  },
  {
    id: "lady-du-1",
    stageName: "Lady Du",
    realName: "Duduzile Ngwenya",
    profession: "Singer & DJ",
    birthDate: "April 12, 1991",
    birthPlace: "Soweto, Gauteng, South Africa",
    imageUrl: "/celebrity-images/lady-du.jpg",
    bio: "Lady Du is a South African DJ, vocalist, and songwriter who became widely recognized through her contributions to the amapiano genre. She's known for hits like 'Wawa La' and 'Umsebenzi Wethu'.",
    slug: "lady-du",
    funFacts: [
      "Started DJing at the age of 10",
      "Her father is DJ Choc, a well-known figure in South African music",
      "Worked as a makeup artist and beauty therapist before focusing on music full-time"
    ]
  },
  {
    id: "kabza-de-small-1",
    stageName: "Kabza De Small",
    realName: "Kabelo Motha",
    profession: "DJ & Producer",
    birthDate: "November 27, 1992",
    birthPlace: "Mpumalanga, South Africa",
    imageUrl: "/celebrity-images/kabza-de-small.jpg",
    bio: "Kabza De Small is a South African DJ and record producer widely regarded as the king of amapiano music. He has been instrumental in popularizing the genre both locally and internationally.",
    slug: "kabza-de-small",
    funFacts: [
      "Released over 10 albums in a span of just three years",
      "Collaborated with DJ Maphorisa to form the duo 'Scorpion Kings'",
      "His album 'I Am The King of Amapiano' topped charts across Africa"
    ]
  },
  {
    id: "maphorisa-1",
    stageName: "DJ Maphorisa",
    realName: "Themba Sonnyboy Sekowe",
    profession: "DJ & Producer",
    birthDate: "November 15, 1987",
    birthPlace: "Soshanguve, Gauteng, South Africa",
    imageUrl: "/celebrity-images/dj-maphorisa.jpg",
    bio: "DJ Maphorisa is a South African DJ, record producer, and vocalist who has contributed significantly to various genres including house, amapiano, and gqom. He gained international recognition through his collaboration with Drake on 'One Dance'.",
    slug: "dj-maphorisa",
    funFacts: [
      "Was part of the production for Drake's hit song 'One Dance'",
      "Previously a member of the group Uhuru",
      "Has worked with international artists like Wizkid, Beyoncé, and Black Coffee"
    ]
  },
  {
    id: "moonchild-sanelly-1",
    stageName: "Moonchild Sanelly",
    realName: "Sanelisiwe Twisha",
    profession: "Musician",
    birthDate: "November 20, 1987",
    birthPlace: "Port Elizabeth, South Africa",
    imageUrl: "/celebrity-images/moonchild-sanelly.jpg",
    bio: "Moonchild Sanelly is a South African musician known for her distinctive blue hair, provocative lyrics, and unique sound which she describes as 'future ghetto funk'. She has collaborated with international acts like Gorillaz and Beyoncé.",
    slug: "moonchild-sanelly",
    funFacts: [
      "Featured on Beyoncé's 'The Lion King: The Gift' album",
      "Known for her distinctive blue-colored hair",
      "Has her own genre called 'Future Ghetto Funk'"
    ]
  },
  {
    id: "master-kg-1",
    stageName: "Master KG",
    realName: "Kgaogelo Moagi",
    profession: "DJ & Producer",
    birthDate: "January 31, 1996",
    birthPlace: "Limpopo, South Africa",
    imageUrl: "/celebrity-images/master-kg.jpg",
    bio: "Master KG is a South African musician and record producer best known for his hit single 'Jerusalema' featuring vocalist Nomcebo Zikode, which became a global phenomenon and inspired the #JerusalemaChallenge during the COVID-19 pandemic.",
    slug: "master-kg",
    funFacts: [
      "His song 'Jerusalema' sparked a global dance challenge during the pandemic",
      "Won an MTV Europe Music Award for Best African Act",
      "Started producing music at the age of 13 using a computer his uncle bought him"
    ]
  },
  {
    id: "shekhinah-1",
    stageName: "Shekhinah",
    realName: "Shekhinah Thandi Donnell",
    profession: "Singer & Songwriter",
    birthDate: "October 2, 1994",
    birthPlace: "Durban, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/shekhinah.jpg",
    bio: "Shekhinah is a South African R&B singer and songwriter who gained public attention as a contestant on season 7 and 8 of South African Idol. Her debut album 'Rose Gold' was critically acclaimed and established her as a major voice in South African music.",
    slug: "shekhinah",
    funFacts: [
      "Was a contestant on South African Idol in 2011 and 2012",
      "Her debut album 'Rose Gold' went platinum in South Africa",
      "Graduated with a degree in Live Performance from AFDA"
    ]
  },
  {
    id: "somizi-mhlongo-1",
    stageName: "Somizi",
    realName: "Somizi Buyani Mhlongo",
    profession: "TV Personality & Choreographer",
    birthDate: "December 23, 1972",
    birthPlace: "Soweto, Gauteng, South Africa",
    imageUrl: "/celebrity-images/somizi-mhlongo.jpg",
    bio: "Somizi Mhlongo is a South African choreographer, actor, and media personality. He is a judge on Idols South Africa and has been in the entertainment industry since childhood, starring in the 1987 film 'Sarafina!'",
    slug: "somizi-mhlongo",
    funFacts: [
      "Son of South African acting legend Mary Twala",
      "Appeared in the musical film 'Sarafina!' as a teenager",
      "Has a cookbook titled 'Dinner at Somizi's: I Am Not A Chef'"
    ]
  },
  {
    id: "nomzamo-mbatha-1",
    stageName: "Nomzamo Mbatha",
    realName: "Nomzamo Nxumalo",
    profession: "Actress",
    birthDate: "July 13, 1990",
    birthPlace: "KwaMashu, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/nomzamo-mbatha.jpg",
    bio: "Nomzamo Mbatha is a South African actress, businesswoman, and human rights activist. She gained international recognition with her role in the 2021 Hollywood film 'Coming 2 America' and has been a UNHCR Goodwill Ambassador since 2019.",
    slug: "nomzamo-mbatha",
    funFacts: [
      "Graduated with a degree in Accounting from the University of Cape Town",
      "UN Refugee Agency Goodwill Ambassador",
      "Starred in 'Coming 2 America' alongside Eddie Murphy"
    ]
  },
  {
    id: "thuso-mbedu-1",
    stageName: "Thuso Mbedu",
    realName: "Thuso Nokwanda Mbedu",
    profession: "Actress",
    birthDate: "July 8, 1991",
    birthPlace: "Pietermaritzburg, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/thuso-mbedu.jpg",
    bio: "Thuso Mbedu is a South African actress who gained international acclaim for her lead role in Barry Jenkins' historical fiction limited series 'The Underground Railroad'. She has received numerous awards for her acting skills.",
    slug: "thuso-mbedu",
    funFacts: [
      "First South African actress to lead an American series",
      "Was nominated for an International Emmy Award twice",
      "Named one of TIME's 100 Most Influential People in 2021"
    ]
  },
  {
    id: "linda-mtoba-1",
    stageName: "Linda Mtoba",
    realName: "Linda Zodwa Mtoba",
    profession: "Actress",
    birthDate: "November 11, 1991",
    birthPlace: "Durban, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/linda-mtoba.jpg",
    bio: "Linda Mtoba is a South African actress best known for her roles in the TV series 'Isibaya' and 'The River'. She started her career as a teacher before transitioning to acting.",
    slug: "linda-mtoba",
    funFacts: [
      "Worked as a teacher before becoming an actress",
      "Founded the Linda Mtoba Foundation which focuses on education",
      "Won a South African Film and Television Award (SAFTA) for her role in 'The River'"
    ]
  },
  {
    id: "focalistic-1",
    stageName: "Focalistic",
    realName: "Lethabo Sebetso",
    profession: "Rapper",
    birthDate: "May 26, 1996",
    birthPlace: "Pretoria, Gauteng, South Africa",
    imageUrl: "/celebrity-images/focalistic.jpg",
    bio: "Focalistic is a South African rapper and Amapiano artist who gained recognition through hits like 'Ke Star' and its remix featuring Nigerian artist Davido. He refers to his music style as 'Pina Tsa Ko Kasi' (music from the township).",
    slug: "focalistic",
    funFacts: [
      "Started as a soccer player before pursuing music",
      "Has a degree in Political Science from the University of Pretoria",
      "His catchphrase 'Ase Trap Tse Ke Pina Tse' means 'It's not trap music, it's culture music'"
    ]
  },
  {
    id: "sjava-1",
    stageName: "Sjava",
    realName: "Jabulani Hadebe",
    profession: "Musician",
    birthDate: "December 2, 1984",
    birthPlace: "KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/sjava.jpg",
    bio: "Sjava is a South African musician, rapper, and actor known for his unique blend of hip-hop, Afro-soul, and traditional Zulu music. He gained international attention after appearing on the 'Black Panther' soundtrack.",
    slug: "sjava",
    funFacts: [
      "Featured on the 'Black Panther' soundtrack with the song 'Seasons'",
      "Won Best New International Act at the BET Awards in 2018",
      "Started his career as an actor before focusing on music"
    ]
  },
  {
    id: "khuli-chana-1",
    stageName: "Khuli Chana",
    realName: "Khulane Morule",
    profession: "Rapper",
    birthDate: "August 27, 1982",
    birthPlace: "Mafikeng, North West, South Africa",
    imageUrl: "/celebrity-images/khuli-chana.jpg",
    bio: "Khuli Chana is a South African rapper known for pioneering the Motswako hip-hop style, which incorporates the Setswana language. He has received numerous awards for his contributions to South African hip-hop.",
    slug: "khuli-chana",
    funFacts: [
      "Known as the 'Motswakoriginator' for pioneering the Motswako hip-hop style",
      "Was accidentally shot by police in a case of mistaken identity in 2013",
      "Founded the Africa's First Digital Motswako Festival"
    ]
  },
  {
    id: "khanyi-mbau-1",
    stageName: "Khanyi Mbau",
    realName: "Khanyisile Dorothy Mbau",
    profession: "Actress & Media Personality",
    birthDate: "October 15, 1985",
    birthPlace: "Soweto, Gauteng, South Africa",
    imageUrl: "/celebrity-images/khanyi-mbau.jpg",
    bio: "Khanyi Mbau is a South African actress, television host, and social media personality. She rose to fame as the second Doobsie in the soap opera 'Muvhango' and has since become one of South Africa's most recognizable media personalities.",
    slug: "khanyi-mbau",
    funFacts: [
      "Often referred to as the 'Queen of Bling' in South African media",
      "Published an autobiography titled 'I am Khanyi - B!tch Please, I'm Khanyi Mbau'",
      "Starred in the Netflix series 'Young, Famous & African'"
    ]
  },
  {
    id: "moshe-ndiki-1",
    stageName: "Moshe Ndiki",
    realName: "Moshe Ndiki Mlengana",
    profession: "Actor & TV Presenter",
    birthDate: "March 9, 1990",
    birthPlace: "East London, Eastern Cape, South Africa",
    imageUrl: "/celebrity-images/moshe-ndiki.jpg",
    bio: "Moshe Ndiki is a South African actor, television presenter, and comedian who rose to fame through social media videos. He is known for his roles in TV shows like 'The Queen' and 'Gomora'.",
    slug: "moshe-ndiki",
    funFacts: [
      "Started his career by posting comedic videos on social media",
      "Has his own cooking show called 'Moshe Cooks'",
      "Released a song called 'BambaTha' featuring DJ Tira"
    ]
  },
  {
    id: "mampintsha-1",
    stageName: "Mampintsha",
    realName: "Mandla Maphumulo",
    profession: "Musician",
    birthDate: "July 18, 1982",
    birthPlace: "Umlazi, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/mampintsha.jpg",
    bio: "Mampintsha was a South African musician, record producer, and former member of the kwaito group Big Nuz. He later ventured into a solo career and was known for hits like 'Wololo' with Babes Wodumo.",
    slug: "mampintsha",
    funFacts: [
      "Was a member of the award-winning kwaito group Big Nuz",
      "Founded the record label West Ink Records",
      "Collaborated extensively with his wife, Babes Wodumo"
    ]
  },
  {
    id: "babes-wodumo-1",
    stageName: "Babes Wodumo",
    realName: "Bongekile Simelane",
    profession: "Gqom Artist",
    birthDate: "July 26, 1994",
    birthPlace: "Lamontville, KwaZulu-Natal, South Africa",
    imageUrl: "/celebrity-images/babes-wodumo.jpg",
    bio: "Babes Wodumo is a South African gqom artist and dancer who rose to fame with her hit single 'Wololo'. She has been dubbed the 'Queen of Gqom' for her contribution to popularizing the genre.",
    slug: "babes-wodumo",
    funFacts: [
      "Her breakthrough hit 'Wololo' became one of South Africa's biggest songs in 2016",
      "Nominated for BET Award for Best International Act: Africa",
      "Has appeared in the Black Panther-inspired music video for 'King's Dead'"
    ]
  },
  {
    id: "lasizwe-1",
    stageName: "Lasizwe",
    realName: "Thulasizwe Siphiwe Dambuza",
    profession: "YouTuber & TV Personality",
    birthDate: "July 19, 1998",
    birthPlace: "Soweto, Gauteng, South Africa",
    imageUrl: "/celebrity-images/lasizwe.jpg",
    bio: "Lasizwe is a South African social media personality, comedian, and television presenter. He rose to fame through his YouTube channel where he creates comedic skits and parodies of South African life.",
    slug: "lasizwe",
    funFacts: [
      "Became one of South Africa's first YouTube stars to transition to mainstream television",
      "Half-brother to media personality Khanyi Mbau",
      "Created the #R10GoesALongWay campaign to help students with registration fees"
    ]
  },
  {
    id: "dj-sbu-1",
    stageName: "DJ Sbu",
    realName: "Sibusiso Leope",
    profession: "DJ & Entrepreneur",
    birthDate: "May 28, 1979",
    birthPlace: "Tembisa, Gauteng, South Africa",
    imageUrl: "/celebrity-images/dj-sbu.jpg",
    bio: "DJ Sbu is a South African DJ, entrepreneur, and motivational speaker. He is the co-founder of TS Records and the energy drink brand MoFaya. He has hosted radio shows on Metro FM and his own Massiv Metro.",
    slug: "dj-sbu",
    funFacts: [
      "Founded the first black-owned energy drink in South Africa called MoFaya",
      "Published several motivational books including 'The Art of Hustling'",
      "Started the Sbu Leope Education Foundation to help underprivileged students"
    ]
  }
];

export const getAllRealNames = (): CelebrityRealName[] => {
  return celebrityRealNames;
};

export const findCelebrityBySlug = (slug: string): CelebrityRealName | undefined => {
  return celebrityRealNames.find(celebrity => celebrity.slug === slug);
};

export const getRelatedCelebrities = (profession: string, excludeSlug: string, limit: number = 4): CelebrityRealName[] => {
  return celebrityRealNames
    .filter(celebrity => celebrity.profession === profession && celebrity.slug !== excludeSlug)
    .slice(0, limit);
};

export const searchCelebrities = (query: string): CelebrityRealName[] => {
  const searchTerms = query.toLowerCase().split(' ');
  
  return celebrityRealNames.filter(celebrity => {
    const stageName = celebrity.stageName.toLowerCase();
    const realName = celebrity.realName.toLowerCase();
    const profession = celebrity.profession.toLowerCase();
    
    return searchTerms.some(term => 
      stageName.includes(term) || 
      realName.includes(term) || 
      profession.includes(term)
    );
  });
};
