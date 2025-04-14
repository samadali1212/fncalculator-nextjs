
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
