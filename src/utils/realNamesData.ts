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
  },
  {
    id: "africa-tsoai-1",
    stageName: "John Maputla",
    realName: "Africa Tsoai",
    profession: "Actor, Voice-over artist, Producer",
    birthDate: "Date not publicly available",
    birthPlace: "Hebron, South Africa",
    imageUrl: "https://i0.wp.com/www.allbusinessza.com/wp-content/uploads/2023/04/FB_IMG_1682420254516.jpg?resize=720%2C712&ssl=1",
    bio: "Africa Tsoai is a South African actor best known for portraying John Maputla in Skeem Saam. Born in Hebron, he holds qualifications in sound engineering and graphic design. He began his career as a voice-over artist before stepping into television roles. His deep voice and commanding screen presence earned him recognition beyond the show. Aside from acting, he's a businessman with interests in farming and media. Fans admire his portrayal of a stern yet caring father, a role that’s become iconic in South African households.",
    slug: "africa-tsoai"
  },
  {
    id: "patrick-seleka-jr-1",
    stageName: "Katlego \"Kat\" Pietersen",
    realName: "Patrick Seleka Jr",
    profession: "Actor, DJ, Chef",
    birthDate: "February 19, 1992",
    birthPlace: "Seshego, Limpopo, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxO0Dj10d4REi4PNzqi9AKaZ35OHpyGDtzA&s",
    bio: "Patrick Seleka Jr, who plays Katlego “Kat” Petersen, is a dynamic talent from Seshego, Limpopo. He studied at the School of Arts in Pretoria and originally pursued IT before switching to drama. Known for his energetic personality and culinary skills, he also works as a chef and DJ. His character in Skeem Saam is a loyal friend and aspiring businessman, resonating with viewers across the country. Off-screen, Patrick is vocal about mental health and personal growth, often sharing motivational content with his fans.",
    slug: "patrick-seleka-jr"
  },
  {
    id: "cornet-thabiso-mamabolo-1",
    stageName: "Thabo \"Tbose\" Maputla",
    realName: "Cornet Thabiso Mamabolo",
    profession: "Actor, Businessman, Philanthropist",
    birthDate: "Date not publicly available",
    birthPlace: "Limpopo, South Africa",
    imageUrl: "https://lh3.googleusercontent.com/u6mvBExv3w7GYXcT-mjeeNJtFw95BUy3XDeFmTssmsfjXXX3_wQBXiPzINtgYoKqs9wGAW4cq10LDZnLJTHMkX8",
    bio: "Cornet Mamabolo became a household name through his role as Thabo “Tbose” Maputla. Born in Limpopo, he studied Dramatic Arts at the University of Witwatersrand. Beyond acting, he’s a successful entrepreneur and philanthropist. He co-founded a stationery company focused on underprivileged communities and continues to inspire youth with his leadership and drive. On Skeem Saam, his portrayal of a conflicted but well-meaning young man has made him a fan favorite. Cornet balances screen life with his mission to create real-world impact through business and charity.",
    slug: "cornet-thabiso-mamabolo"
  },
  {
    id: "clement-maosa-1",
    stageName: "Zamokuhle \"Kwaito\" Seakamela",
    realName: "Clement Maosa",
    profession: "Actor, Radio DJ, Model, Musician",
    birthDate: "May 09, 1988",
    birthPlace: "Polokwane, South Africa",
    imageUrl: "https://pbs.twimg.com/media/EXQGpMyXsAAwOs0.png",
    bio: "Clement Maosa plays the intelligent Zamokuhle “Kwaito” Seakamela on Skeem Saam. Raised in Polokwane, he studied law at the University of Limpopo before following his passion for the arts. His rise to fame began after winning a major role on the show, and he’s since become an actor, radio DJ, and musician. Clement uses his platform to empower youth, often speaking about resilience and ambition. He’s admired for his talent, charisma, and commitment to uplifting others. His journey from law to television continues to inspire many.",
    slug: "clement-maosa"
  },
  {
    id: "harriet-manamela-1",
    stageName: "Meikie Maputla",
    realName: "Harriet Manamela",
    profession: "Actress",
    birthDate: "October 13, 1971",
    birthPlace: "Diepkloof, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwrVAMzNhe2DitEJpvojMektc3pQDWvReDw&s",
    bio: "Harriet Manamela is one of South Africa’s most respected actresses, widely recognized for her role as Meikie Maputla. Born in Diepkloof, she has been active in the entertainment industry since the late 1990s. Her powerful performance as a fierce mother and loyal wife has cemented her legacy in television. Harriet’s career spans both film and stage, and she has received awards for her dramatic talent. Her depth and authenticity bring complexity to every role, and she remains a beloved figure in South African entertainment.",
    slug: "harriet-manamela"
  },
  {
    id: "mogau-paulina-motlhatswi-1",
    stageName: "Mapitsi Magongwa",
    realName: "Mogau Paulina Motlhatswi",
    profession: "Actress, Writer, Speaker, Life Coach",
    birthDate: "Date not publicly available",
    birthPlace: "Mogoto, Limpopo, South Africa",
    imageUrl: "https://www.kaya959.co.za/wp-content/uploads/2025/04/Image-2025-04-12-at-10.51-770x574.jpeg",
    bio: "Mogau Motlhatswi is best known for her role as Mapitsi Magongwa, the vibrant and ambitious mother on Skeem Saam. Born in Mogoto, Limpopo, she pursued studies in audiovisual communication at the University of Johannesburg. Her passion for storytelling shines through in her performances. Off-screen, she’s a certified life coach, writer, and public speaker, regularly using her voice to empower women and youth. Mogau’s portrayal of Mapitsi balances determination and vulnerability, earning her admiration from fans who relate to her character’s life challenges and growth.",
    slug: "mogau-paulina-motlhatswi"
  },
  {
    id: "dieketseng-mnisi-1",
    stageName: "Ntombi \"MaNtuli\" Seakamela",
    realName: "Dieketseng Mnisi",
    profession: "Actress, Singer-songwriter",
    birthDate: "Date not publicly available",
    birthPlace: "Soweto, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZW6jkrzy_kL0mNkBxfCMMriHMSHImxvjwQ&s",
    bio: "Dieketseng Mnisi is a veteran actress who portrays Ntombi “MaNtuli” Seakamela, the resilient and no-nonsense matriarch in Skeem Saam. She hails from Soweto and has a background in theatre that spans decades. Her command of language and emotional range have made her one of the standout performers on the show. Dieketseng often brings social realism to her roles, helping viewers connect deeply with the challenges her characters face. Her long-standing contribution to the arts has solidified her status as a respected figure in South African drama.",
    slug: "dieketseng-mnisi"
  },
  {
    id: "joseph-tshepo-senatle-1",
    stageName: "Koloi Shivambu",
    realName: "Joseph Tshepo Senatle",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "Ottosdal, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3IB9OeTXpTQPhjjvMuXZDNPVCyIVT7qrQw&s",
    bio: "Joseph Tshepo Senatle portrays Koloi Shivambu, a character full of dreams and youthful determination. Born in Ottosdal, North West, he began acting in local theatre before making his television breakthrough with Skeem Saam. Known for his natural charm and strong emotional delivery, Joseph quickly became a fan favorite. His role on the show highlights the struggles and aspirations of rural youth in South Africa. Outside acting, he supports community projects focused on youth development, showing his dedication both on and off screen.",
    slug: "joseph-tshepo-senatle"
  },
  {
    id: "gift-mokhampanyane-1",
    stageName: "Fanie Maserumule",
    realName: "Gift Mokhampanyane",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBl04sGaRd2NvUXDRke2KW7nP4WaUWrgHu0w&s",
    bio: "Gift Mokhampanyane plays Fanie Maserumule, a tech-savvy and sharp-witted character on Skeem Saam. He studied at the National School of Arts, where he honed his skills in drama and performance. In addition to acting, Gift has experience in TV presenting and voice-over work. He’s recognized for bringing humor, intelligence, and edge to his roles. His character’s entrepreneurial flair and mischief made him unforgettable to viewers. Beyond entertainment, he often mentors aspiring actors, emphasizing education and self-expression as tools for personal and professional growth.",
    slug: "gift-mokhampanyane"
  },
  {
    id: "eric-macheru-1",
    stageName: "Leeto Maputla",
    realName: "Eric Macheru",
    profession: "Actor, Former Footballer",
    birthDate: "February 25, 1986",
    birthPlace: "Polokwane, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_fKmqdZYmYHXnMtnfoITV6gFS6xiIc3YZg&s",
    bio: "Eric Macheru is a former professional footballer turned actor who portrays Leeto Maputla in Skeem Saam. Born in Polokwane, he began his career on the soccer field with Ajax Cape Town before transitioning into acting. He studied film and television production, giving him a broad understanding of the industry. Leeto, his character, is a complex lawyer with moral conflicts and family drama. Eric’s journey from sports to screens is admired, showing his versatility and passion. His cool demeanor and layered acting have earned him national recognition.",
    slug: "eric-macheru"
  },
  {
    id: "lydia-mokgokoloshi-1",
    stageName: "Koko Mantsha",
    realName: "Lydia Mokgokoloshi",
    profession: "Actress",
    birthDate: "September 27, 1939",
    birthPlace: "Limpopo, South Africa",
    imageUrl: "https://media.citizen.co.za/wp-content/uploads/2020/07/Lydia-Mokgokoloshi.jpg",
    bio: "Lydia Mokgokoloshi is a legendary actress best known as Koko Mantsha, the wise and sometimes cheeky grandmother on Skeem Saam. Born in Limpopo, she began her career as a teacher before shifting into acting. Her iconic presence dates back to her earlier role on Bophelo ke Semphekgo, another beloved South African show. Over the years, she’s become a cultural icon, representing traditional wisdom and family values. Despite her age, Lydia remains a strong, respected figure on television, with performances that resonate deeply across generations of viewers.",
    slug: "lydia-mokgokoloshi"
  },
  {
    id: "pebetsi-nolo-matlaila-1",
    stageName: "Mokgadi Matloga",
    realName: "Pebetsi Nolo Matlaila",
    profession: "Actress, Radio Personality",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://cdn.24.co.za/files/Cms/General/d/11108/67db96b30fe0484cb67cd46209cc69a6.png",
    bio: "Pebetsi Nolo Matlaila plays Mokgadi Matloga, a career-driven journalist navigating the ups and downs of family life. Born in Limpopo, she studied radio and television production and has worked as a presenter. Her acting style blends confidence and vulnerability, adding depth to Mokgadi’s character. Outside of acting, Pebetsi is a strong advocate for women’s health and empowerment, often sharing her personal experiences. Her openness with fans and expressive performances have earned her a loyal following, both on-screen and across social platforms.",
    slug: "pebetsi-nolo-matlaila"
  },
  {
    id: "elizabeth-serunye-1",
    stageName: "Principal Thobakgale",
    realName: "Elizabeth Serunye",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Soweto, South Africa",
    imageUrl: "https://www.bona.co.za/wp-content/uploads/2024/09/Snapinsta.app_320517371_206788878482891_1447988575166019454_n_1080-1.jpg",
    bio: "Elizabeth Serunye brings authority and grace to the role of Principal Thobakgale on Skeem Saam. She was born in Limpopo and has extensive experience in music, theatre, and TV. Her character demands discipline while showing moments of empathy, a balance Elizabeth handles skillfully. She previously starred in various South African sitcoms and dramas before joining the cast. Beyond acting, she’s also a gospel singer with a powerful voice. Her commanding screen presence and years of dedication have made her a respected name in the industry.",
    slug: "elizabeth-serunye"
  },
  {
    id: "arthur-molepo-1",
    stageName: "Captain Malebana",
    realName: "Arthur Molepo",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0fsol_O5Rof7PK2AZ0MTOKNR222m0HDUJg&s",
    bio: "Arthur Molepo is a seasoned actor portraying Captain Malebana, the gruff but caring police officer in Skeem Saam. With a long-spanning career in both theatre and television, he’s known for roles in classic dramas like Generations and Backstage. He studied drama in Pretoria and has contributed to the growth of local storytelling through teaching and directing. His portrayal of law enforcement is grounded in realism, offering both authority and relatability. Arthur’s calm demeanor and depth of experience make him a dependable figure on-screen.",
    slug: "arthur-molepo"
  },
  {
    id: "amanda-manku-1",
    stageName: "Elizabeth Thobakgale",
    realName: "Amanda Manku",
    profession: "Actress, Presenter",
    birthDate: "Date not publicly available",
    birthPlace: "Limpopo, South Africa",
    imageUrl: "https://cdn.24.co.za/files/Cms/General/d/12266/45802eabf9ef48c8b3046b6888e98af3.jpg",
    bio: "Amanda Manku plays Elizabeth Thobakgale, a determined young doctor juggling career pressures and personal drama. She grew up in Limpopo and studied TV production in Johannesburg. Before acting, she worked as a presenter on youth shows, where her bubbly personality captured attention. In her role on Skeem Saam, she brings warmth and intensity, portraying a modern woman striving for balance. Amanda’s commitment to wellness and positivity resonates with fans. Her transition from TV presenter to actress showcases her adaptability and growth in South African entertainment.",
    slug: "amanda-manku"
  },
  {
    id: "lesego-marakalla-1",
    stageName: "Rachel Kunutu",
    realName: "Lesego Marakalla",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Mpumalanga, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLC30TOJvLSpzPSGRIMb7Px-6u-h9Aw-XsQ&s",
    bio: "Lesego Marakalla is widely known for her role as Rachel Kunutu, the fiery and unpredictable student-turned-social climber. Born in Mpumalanga, she studied drama at Monis Arts House and CityVarsity. Her breakthrough came through Skeem Saam, where she impressed audiences with her emotional range and on-screen confidence. Lesego is known for taking breaks from acting to focus on personal growth and education. Her character’s bold personality and ambition captivated fans, making her one of the most memorable faces on the show during her run.",
    slug: "lesego-marakalla"
  },
  {
    id: "shoki-mmola-1",
    stageName: "Celia Kunutu",
    realName: "Shoki Mmola",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Tzaneen, South Africa",
    imageUrl: "https://i0.wp.com/sundayworld.co.za/wp-content/uploads/2022/07/Shoki-Mmola-2.jpg?fit=738%2C752&ssl=1",
    bio: "Shoki Mmola portrayed Celia Kunutu, a complex mother dealing with grief, betrayal, and survival. Born in Tzaneen, Limpopo, she trained in performing arts at Tampere University in Finland. Her career includes roles in popular dramas like Muvhango and Rhythm City. In Skeem Saam, Shoki’s powerful acting brought emotional gravity to Celia’s storylines. She’s also a fashion designer and businesswoman, balancing artistry with entrepreneurship. Shoki’s performances consistently reflect her deep understanding of character psychology, earning her recognition for portraying layered, emotionally rich women.",
    slug: "shoki-mmola"
  },
  {
    id: "amanda-du-pont-1",
    stageName: "Nompumelelo Mthiyane",
    realName: "Amanda du-Pont",
    profession: "Actress, Model, Television Host",
    birthDate: "June 26, 1988",
    birthPlace: "Manzini, Eswatini",
    imageUrl: "https://www.osmtalent.com/wp-content/uploads/2017/08/IMG_0231-1-e1697529657205.jpeg",
    bio: "Amanda du-Pont is a Swazi-born South African actress who played Nompumelelo “Lelo” Mthiyane, a charming yet dangerous woman. She studied at the New York Film Academy and holds a Bachelor of Arts degree from AFDA. Amanda’s role on Skeem Saam showcased her ability to play seductive, cunning characters with ease. Beyond acting, she’s a model, entrepreneur, and fitness enthusiast. Her versatility extends into film and presenting. Known for her glamorous lifestyle and magnetic screen presence, Amanda continues to make waves in local and international entertainment.",
    slug: "amanda-du-pont"
  },
  {
    id: "cedric-fourie-1",
    stageName: "Lehasa Maphosa",
    realName: "Cedric Fourie",
    profession: "Actor, Engineer",
    birthDate: "March 17, 1990",
    birthPlace: "Orlando, Soweto, South Africa",
    imageUrl: "https://lh3.googleusercontent.com/JnWzVhqwxnbAjq--wzmQ05GJxTxT6EnEwSlsEYcQPrxBLIJDwzpZHDKoCXpiArHnRsRtdLawx3UtQV6BNeXJxHmOg_9kis4FLW8=s1500-pp",
    bio: "Cedric Fourie is the charismatic actor behind Lehasa Maphosa, a suave businessman whose moral compass constantly shifts. Born in Gauteng, he studied networking engineering before making a career pivot into acting. His breakout came through Skeem Saam, where his role required both charm and menace. Off-screen, Cedric is passionate about mentorship and technology, often speaking at youth events. His on-screen performances blend sophistication and intensity, drawing audiences into his character’s every move. Cedric remains a fan favorite due to his dynamic portrayal and strong screen presence.",
    slug: "cedric-fourie"
  },
  {
    id: "makgofe-moagi-1",
    stageName: "Charity Ramabu",
    realName: "Makgofe Moagi",
    profession: "Actress, Model",
    birthDate: "Date not publicly available",
    birthPlace: "Phalaborwa, South Africa",
    imageUrl: "https://lh3.googleusercontent.com/DesfScPsns4qc3grDePrEMJMxLLqi8ulqKfMpob_Bjp3whd4HGMROeZYnJ8ED070KrnsgRtfMfo7wa7wwsFPWg1jQBzo9CP3Tg=s1500-pp",
    bio: "Makgofe Moagi plays Charity Ramabu, a fierce and outspoken woman navigating life’s emotional rollercoasters. Originally from Phalaborwa, she began her career as a model and TV presenter before stepping into acting. Her role on Skeem Saam demanded emotional depth, which she delivered with authenticity. Off-screen, Makgofe is a mother and wellness advocate, often sharing empowering messages. She’s admired for her resilience, especially after opening up about personal struggles. Her balance of vulnerability and strength both on and off screen has inspired many fans.",
    slug: "makgofe-moagi"
  },
  {
    id: "motshabi-tyelele-1",
    stageName: "Mary Matloga",
    realName: "Motshabi Tyelele",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://news365.co.za/wp-content/uploads/2021/07/Motshabi-Tyelele.jpg",
    bio: "Motshabi Tyelele portrayed Mary Matloga, a protective and sometimes manipulative mother figure. With a strong background in theatre, film, and television, she’s one of South Africa’s most seasoned actresses. She gained recognition through earlier roles in Suburban Bliss and Justice for All. Motshabi’s portrayal in Skeem Saam highlighted themes of family pressure, secrets, and ambition. She has also been involved in teaching and mentorship within the creative industry. Her commitment to the craft continues to influence and elevate women in South African storytelling.",
    slug: "motshabi-tyelele"
  },
  {
    id: "buhle-maseko-1",
    stageName: "Nimrod \"Nimza\" Kunutu",
    realName: "Buhle Maseko",
    profession: "Actor",
    birthDate: "February 01, 1992",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTueY-QZ9HbgqSb8LuJiiPQIi-_nQQLf4Lzng&s",
    bio: "Buhle Maseko brought charm and relatability to the role of Nimrod “Nimza” Kunutu. Born in Tembisa, he studied TV and radio production at Boston Media House. Outside acting, he’s a radio DJ and entrepreneur. His Skeem Saam character was known for being tech-savvy and socially awkward, often delivering comedic relief while tackling serious issues. Buhle’s off-screen ventures include skincare products and fashion. His energy and creativity have helped him become a recognizable name among young South Africans, both in media and in business.",
    slug: "buhle-maseko"
  },
  {
    id: "masilo-magoro-1",
    stageName: "Charles Kunutu",
    realName: "Masilo Magoro",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "Tzaneen, Limpopo, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuXy4LT9pT1rXSkG0eLsFis3gPKakeXdUZg&s",
    bio: "Masilo Magoro plays Charles Kunutu, the traditional father who often struggles to connect with modern values. A veteran performer, he has appeared in several South African productions, including Ga Re Dumele and Soul City. His Skeem Saam character reflects the challenges older generations face in understanding youth. Masilo’s delivery combines humor with realism, offering life lessons with every scene. Known for his steady, grounded performances, he has earned respect for making everyday characters feel authentic and relatable. His longevity speaks to his deep talent.",
    slug: "masilo-magoro"
  },
  {
    id: "mlungisi-mathe-1",
    stageName: "Emkay Biyela",
    realName: "Mlungisi Mathe",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://cdn.24.co.za/files/Cms/General/d/5808/5d3845137f5844f2ad2d845b19c18cf7.jpg",
    bio: "Mlungisi Mathe portrayed Emkay Biyela, a slick university student with big dreams and a rebellious streak. Born in KwaZulu-Natal, he trained in drama and music, making him a versatile entertainer. His character on Skeem Saam brought a fresh urban vibe to the storyline, tackling themes of peer pressure, identity, and loyalty. Off-screen, Mlungisi is also a gospel artist with several singles released. His journey from theatre to television has been marked by creativity, passion, and faith. Fans appreciate his unique energy and versatility.",
    slug: "mlungisi-mathe"
  },
  {
    id: "clevy-sekgala-1",
    stageName: "Dennis Letsaolo",
    realName: "Clevy Sekgala",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://savannanews.com/wp-content/uploads/2020/10/5f1d92d2f3edac04da8f6293_uc.jpeg",
    bio: "Clevy Sekgala played Dennis Letsaolo, a minor yet memorable character in Skeem Saam. He entered the industry with a background in community theatre, gradually building a name in local productions. Though not a central figure, his presence added humor and a street-smart edge to the show. Clevy has also worked behind the scenes as a production assistant and coach, showcasing his all-around dedication to storytelling. His ability to make even brief appearances impactful is a testament to his professionalism and natural screen charisma.",
    slug: "clevy-sekgala"
  },
  {
    id: "bongani-madondo-1",
    stageName: "Sfiso Ntuli",
    realName: "Bongani Madondo",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://www.thesouthafrican.com/wp-content/uploads/2023/06/20230606_115403.jpg.optimal.jpg",
    bio: "Bongani Madondo played Sfiso Ntuli, a supporting character who added tension and grit to the storyline. Hailing from KwaZulu-Natal, Bongani’s early days were spent performing in school and community productions. He transitioned to television through guest roles before joining Skeem Saam. Known for portraying tough, no-nonsense figures, he brings intensity and realism to his performances. When not acting, he’s involved in mentoring youth in the arts. Though often in smaller roles, Bongani’s performances always stand out for their authenticity and emotional weight.",
    slug: "bongani-madondo"
  },
  {
    id: "anton-dekker-1",
    stageName: "Kobus Grobbler",
    realName: "Anton Dekker",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/738f15377c6cc8b32feda36d7face64b",
    bio: "Anton Dekker appeared as Kobus Grobbler, a character rooted in the business and legal scenes of Skeem Saam. With decades of experience in the South African film and theatre world, Anton is a seasoned performer known for roles in Isidingo, Binnelanders, and various international projects. His acting approach combines professionalism with nuanced delivery, earning him a reputation as a reliable supporting actor. Fluent in both English and Afrikaans, he’s worked across genres and formats. His involvement in Skeem Saam added gravitas and realism to the show’s dramatic arcs.",
    slug: "anton-dekker"
  },
  {
    id: "keamogetswe-leburu-1",
    stageName: "Bontle",
    realName: "Keamogetswe Leburu",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKywA9vScS_AWCBk9g83uDoX-WW_8ouNbtw&s",
    bio: "Keamogetswe Leburu portrays Bontle, a confident, fashionable young woman often caught in workplace drama. Originally from Kagiso, Gauteng, she trained as a dancer and cheerleader before moving into acting. Her bubbly energy translates well on screen, making Bontle relatable and entertaining. Off-camera, Kea is also a singer and fitness enthusiast, using her platform to promote healthy living and self-confidence. She often appears at events centered around youth empowerment. Her cheerful persona and stylish image have made her a standout character in the show’s younger cast.",
    slug: "keamogetswe-leburu"
  },
  {
    id: "joyce-ledwaba-1",
    stageName: "Joyce Maputla",
    realName: "Joyce Ledwaba",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://cdn.24.co.za/files/Cms/General/d/11756/170db875350f48abbc30689ce1e66051.jpg",
    bio: "Joyce Ledwaba plays Joyce Maputla, a relative of the Maputla family whose presence stirs family dynamics. She’s a skilled actress with experience across theatre, television, and film. Hailing from Limpopo, she’s been part of community development initiatives in her hometown, especially around arts education. On-screen, she brings emotional depth to her roles, often portraying maternal figures with subtlety and strength. Joyce’s work in Skeem Saam contributes to the generational richness of the show’s storytelling, highlighting themes of tradition, loyalty, and change within South African families.",
    slug: "joyce-ledwaba"
  },
  {
    id: "lerato-marabe-1",
    stageName: "Pretty Seakamela",
    realName: "Lerato Marabe",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Vosloorus, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5FkvB-DIIy6Kns_XRr4mpxvR13CKBOGrhQ&s",
    bio: "Lerato Marabe portrays Pretty Seakamela, a character who’s matured from a curious schoolgirl into a bold young woman. Born in Vosloorus, she began acting at age nine and later studied editing at AFDA. Her role explores identity, love, and ambition, often making her one of the most talked-about characters. Lerato balances her career with DJing and student life, showcasing her versatility. With years on Skeem Saam, her evolution mirrors her character’s, resonating deeply with young viewers. She’s become a role model for balancing fame with personal development.",
    slug: "lerato-marabe"
  },
  {
    id: "skhumbuzo-mbatha-1",
    stageName: "Meneer Manaka",
    realName: "Skhumbuzo Mbatha",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsEwZ7Qx5xJiBKUFhdkQ3_5hgtNNm82koBQ&s",
    bio: "Skhumbuzo Mbatha plays Maneer Manaka, a passionate educator devoted to shaping young minds. He was born in Bushbuckridge, Mpumalanga, and worked as a radio personality before pursuing acting full-time. Known for his calming presence and eloquent speech, his role reflects the critical influence teachers have in students’ lives. Off-screen, Skhumbuzo is also a motivational speaker, often addressing youth issues in schools and community gatherings. His role in Skeem Saam highlights the quiet heroism of educators, earning him admiration from both fans and real-life teachers.",
    slug: "skhumbuzo-mbatha"
  },
  {
    id: "putla-sehlapelo-1",
    stageName: "Alfred Magongwa",
    realName: "Putla Sehlapelo",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://www.bona.co.za/wp-content/uploads/2024/09/Fblbx-5XgAI58IQ-1.jpeg",
    bio: "Putla Sehlapelo plays Alfred Magongwa, a calculating teacher known for his ambition and scheming behavior. Born in Polokwane, he studied drama at the University of Pretoria. His theatre background has helped shape his meticulous acting style. Putla’s character stirs tension and intrigue, often challenging authority or manipulating school politics. Off-screen, he’s a family man and drama coach, mentoring young actors across Limpopo. His ability to portray both sincerity and slyness makes him a magnetic presence. Fans appreciate the layered personality he brings to the school setting.",
    slug: "putla-sehlapelo"
  },
  {
    id: "sebasa-mogale-1",
    stageName: "Dr. Hlongwane",
    realName: "Sebasa Mogale",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://lh3.googleusercontent.com/eGnK4ilK1YYLMOd4rNJX1JNXJ3cGRb_UuySPEd-TPdS9QzlHHn5yHMEqIBc8SK0SSe2NUz9k2SDcSWYWLsJ9jRkxZyzjHzjvHWKF8PVANoo8lJQS=s1500-pp",
    bio: "Sebasa Mogale plays Dr. Hlongwane, a composed and well-spoken medical professional in Skeem Saam. He’s also a businessman and radio presenter, best known for his long-time work on Thobela FM. Sebasa’s portrayal of the doctor brings a sense of order and reason amid chaos, with a touch of personal vulnerability. His voice and poise have earned him respect in both media and entertainment. Beyond acting, he’s active in education and health campaigns. Sebasa represents the intersection of intellect, media, and performance in South Africa’s creative space.",
    slug: "sebasa-mogale"
  },
  {
    id: "nozi-langa-1",
    stageName: "Glenda",
    realName: "Nozi Langa",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Polokwane, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqHPvgFDa2jWadtNYK9m0qQmLk5kCoY_5Uw&s",
    bio: "Nozi Langa portrayed Glenda, a university student known for her calm demeanor and deep emotional intelligence. Born in Limpopo, she studied dramatic arts at the University of Pretoria and has pursued a career in business and acting. Her character often dealt with issues of betrayal, mental health, and relationships, drawing empathy from audiences. Nozi’s elegance and maturity set her apart in the youth-centric storylines. She’s also active in entrepreneurial ventures, particularly in beauty and wellness. Her grounded presence both on-screen and in real life inspires young women.",
    slug: "nozi-langa"
  },
  {
    id: "tebogo-modisane-1",
    stageName: "Alfios",
    realName: "Tebogo Modisane",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://www.safrolebs.com/wp-content/uploads/2021/07/FB_IMG_16273827034129530.jpg",
    bio: "Tebogo Modisane played Alfios, a loyal but easily manipulated young worker in Skeem Saam. Raised in Mpumalanga, he studied acting in Johannesburg and developed his skills in local theatre before transitioning to television. His role brought heart and comic relief, often reflecting the struggles of underprivileged youth trying to find direction. Tebogo is involved in charity work, focusing on poverty alleviation and youth development. Though soft-spoken, his performances speak volumes, and his portrayal of Alfios left a lasting impression for its sincerity and authenticity.",
    slug: "tebogo-modisane"
  },
  {
    id: "lebogang-elephant-1",
    stageName: "Mr. Kgomo",
    realName: "Lebogang Elephant",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxtiOQqORZOgvDwYvxOSN4pEcFO3PohhI5Q&s",
    bio: "Lebogang Elephant plays Mr. Kgomo, a strict but fair school teacher whose no-nonsense approach challenges the students of Skeem Saam. Born in Gauteng, Lebogang’s career began in theatre before transitioning to television roles. His professional demeanor and disciplined performances are well-suited for the authoritative roles he often portrays. Apart from acting, Lebogang is involved in community development, focusing on education and youth empowerment. His deep understanding of human nature shines through in his portrayal of Mr. Kgomo, earning him respect both on and off-screen.",
    slug: "lebogang-elephant"
  },
  {
    id: "macks-papo-1",
    stageName: "Marothi Maphuthuma",
    realName: "Macks Papo",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1vKpWF.img?w=768&h=549&m=6&x=441&y=270&s=381&d=381",
    bio: "Macks Papo plays Marothi Maphuthuma, a morally complex businessman whose cunning and ambition create tension on Skeem Saam. Born in Soweto, Macks pursued his passion for acting at the University of the Witwatersrand and has appeared in numerous television and film productions. His ability to blend charm with deviousness makes him a standout character on the show. Outside of acting, Macks is involved in various entrepreneurial ventures and is a strong advocate for the arts. His roles often reflect his deep understanding of human psychology and societal dynamics.",
    slug: "macks-papo"
  },
  {
    id: "nokuzola-mlengana-1",
    stageName: "Sis’ Ouma",
    realName: "Nokuzola Mlengana",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Eastern Cape, South Africa",
    imageUrl: "https://cdn.24.co.za/files/Cms/General/d/11375/3b91e1c7a70b467f868a82fa55a907b4.jpg",
    bio: "Nokuzola Mlengana plays Sis’ Ouma, the sweet yet firm grandmother whose wisdom and traditional views impact those around her. Born in the Eastern Cape, Nokuzola has an extensive career in theatre, where she honed her craft before moving into television. Her portrayal of Sis’ Ouma in Skeem Saam brings warmth and authenticity, representing the older generation’s values. Outside of acting, Nokuzola is involved in cultural preservation and education, emphasizing the importance of passing down traditions. Her gentle yet impactful presence makes her a beloved character.",
    slug: "nokuzola-mlengana"
  },
  {
    id: "thabo-mkhabela-1",
    stageName: "Leshole Mabitsela",
    realName: "Thabo Mkhabela",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://cdn.24.co.za/files/Cms/General/d/6561/a65b01a114464b64acc2a252c09cada4.jpg",
    bio: "Thabo Mkhabela plays Leshole Mabitsela, a university student navigating love, pressure, and personal growth. Born in Pretoria, Thabo’s career began in musical theatre, eventually transitioning to television. His character in Skeem Saam explores themes of identity, peer pressure, and ambition. Off-screen, Thabo is passionate about youth development and often engages in mentorship programs for aspiring actors and creatives. His portrayal of Leshole combines vulnerability and strength, resonating with younger audiences facing their own struggles. Thabo’s dedication to his craft has made him a recognizable face in South African TV.",
    slug: "thabo-mkhabela"
  },
  {
    id: "thabang-lefoa-1",
    stageName: "Sphola",
    realName: "Thabang Lefoa",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eZLBHrC2bSVQSJxYBTXswqFk2d8mawAITQ&s",
    bio: "Thabang Lefoa portrays Sphola, a cheeky and street-smart character who plays a pivotal role in the lives of the other youth characters on Skeem Saam. Originally from Limpopo, Thabang has a background in performing arts, specifically focusing on acting and comedy. His role often adds a comedic touch to the drama, making him a fan favorite. Outside of acting, Thabang is an advocate for social change, particularly in addressing youth unemployment. His infectious personality and commitment to his craft make him an influential figure among South African youth.",
    slug: "thabang-lefoa"
  },
  {
    id: "vusi-leremi-1",
    stageName: "Clement Letsoalo",
    realName: "Vusi Leremi",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "Soweto, South Africa",
    imageUrl: "https://static.iono.fm/files/p372/logo_883437_20200629_150038_600.jpg",
    bio: "Vusi Leremi plays Clement Letsoalo, an eager and ambitious young man who often finds himself in the midst of conflict and moral dilemmas. Born in Johannesburg, Vusi developed an interest in acting at an early age, later studying at the National School of the Arts. His portrayal of Clement is marked by his youthful energy, honesty, and vulnerability. Vusi’s off-screen activities include volunteering in community projects that promote arts education and personal development. His honest portrayal of a young man navigating challenges has made him a relatable and admired figure on-screen.",
    slug: "vusi-leremi"
  },
  {
    id: "austin-rethabile-mothapo-1",
    stageName: "Noah Matloga",
    realName: "Austin Rethabile Mothapo",
    profession: "Actor",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPkjuqXKxdgka6xzeZYpgzRjfMourA48Prg&s",
    bio: "Austin Rethabile Mothapo portrays Noah Matloga, a grounded, compassionate character who adds emotional depth to Skeem Saam. Born in Limpopo, Austin’s interest in drama began in school plays, which led him to pursue acting professionally. His character often finds himself navigating family issues, providing a relatable and heartfelt portrayal for many viewers. Austin is also passionate about education and community upliftment, often working with initiatives that support underprivileged youth. His dedication to authenticity both on-screen and in his personal life has earned him respect as a rising star in South Africa’s entertainment industry.",
    slug: "austin-rethabile-mothapo"
  },
  {
    id: "komotso-manyaka-1",
    stageName: "Emma",
    realName: "Komotso Manyaka",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "South Africa",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEgvuVCjqrxZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1539202687672?e=2147483647&v=beta&t=AygSQMaJA7CqP37IlSWYG0iupMLXIlvL0sMiyHx32po",
    bio: "Komotso Manyaka plays Emma, a character who adds complexity to the relationships within the Skeem Saam universe. Born in Gauteng, Komotso trained in performing arts at the University of Cape Town before moving into acting. Her character’s storylines often tackle themes of love, loss, and self-discovery. In addition to her acting career, Komotso is a dedicated advocate for gender equality and women’s empowerment. She is actively involved in programs that provide education and mentorship to young women, using her platform to create positive change in her community.",
    slug: "komotso-manyaka"
  },
  {
    id: "innocent-sadiki-1",
    stageName: "Sthoko Seakamela",
    realName: "Innocent Sadiki",
    profession: "Actress, TV Personality, Model",
    birthDate: "January 30, 1988",
    birthPlace: "Pretoria, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCmEnCCG9EvcPrzE8r3PxSZRagtN8ldiRxA&s",
    bio: "Innocent Sadiki is widely recognized for her portrayal of Sthoko Seakamela, a character known for her fiery personality and determination. Born in Limpopo, Innocent pursued acting from a young age, attending acting schools to refine her craft. Her role in Skeem Saam often showcases the complexities of family dynamics, relationships, and personal growth. Outside of acting, Innocent is a well-known presenter, entrepreneur, and motivational speaker. She’s passionate about uplifting others, especially women, and uses her influence to encourage confidence and empowerment among young South Africans.",
    slug: "innocent-sadiki"
  },
  {
    id: "hellen-motsuki-1",
    stageName: "Melita",
    realName: "Hellen Motsuki",
    profession: "Actress",
    birthDate: "Date not publicly available",
    birthPlace: "Limpopo, South Africa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEAaM1wsUdjAURu82mKQmJwc9cfcNGN4XoA&s",
    bio: "Hellen Motsuki portrays Melita, a strong and independent character who brings unique flair to Skeem Saam. Born in the North West Province, Hellen began her career in theatre before transitioning to television. Her performances have been recognized for their emotional depth and ability to capture the essence of complex characters. Off-screen, Hellen is dedicated to advocating for mental health awareness, especially among the youth. Her role in Skeem Saam highlights themes of personal identity and resilience, offering viewers a relatable and inspiring figure to look up to.",
    slug: "hellen-motsuki"
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
