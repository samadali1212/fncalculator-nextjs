import { slugify } from "./utils";
import { GeneralKnowledgeCategory, generalKnowledgeCategories, getCategoryBySlug } from "./generalKnowledgeCategoriesData";

// Define the structure for general knowledge items
export interface GeneralKnowledgeItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  facts: Array<{ title: string; value: string }>;
  tags: string[];
  rating?: number;
  price?: { value: number; currency: string };
  createdAt: string;
  updatedAt: string;
}

// Re-export the category interface and helper functions for backward compatibility
// Re-export the category interface using 'export type'
export type { GeneralKnowledgeCategory };

// Re-export the helper functions and data (values) using regular 'export'
export { generalKnowledgeCategories, getCategoryBySlug };

// Data for best sugar brands South African
const sugarBrandsData: GeneralKnowledgeItem[] = [
 {
    id: "illovo-sugar-africa",
    title: "Illovo Sugar Africa",
    slug: "illovo-sugar-africa",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "One of the best and largest sugar producers in South Africa, offering a wide variety of sugars, syrups, and sweeteners since 1891.",
    fullDescription: "This brand is one of the best in South Africa, offering a variety of products like white sugar, brown sugar, and more. Illovo Sugar Africa has been producing high-quality sugar since 1891 and is now one of the largest producers of sugar in Africa. Their products, known for being affordable and great-tasting using high-quality ingredients, are available in more than 20 countries on the continent.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Since 1891" },
      { title: "Product Types", value: "White sugar, brown sugar, syrups, sweeteners" },
      { title: "Availability", value: "South Africa, More than 20 countries" },
      { title: "Reputation", value: "High-quality, Affordable, Great taste" }
    ],
    tags: ["sugar", "south africa", "sweetener", "white sugar", "brown sugar", "syrups", "illovo", "major producer", "africa"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "tongaat-hulett",
    title: "Tongaat Hulett",
    slug: "tongaat-hulett",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A major South African sugar producer with a history dating back to 1892, known for high-quality sugar and sustainability efforts.",
    fullDescription: "Tongaat Hulett is one of the best sugar brands in South Africa, with a long history dating back to early 1892. As one of the biggest producers in the country, its products are sold nationwide. Tongaat Hulett is renowned for its high-quality sugar, ideal for baking or cooking. The company has operated for over a hundred years, building a strong reputation for quality products and notable sustainability initiatives, making it a respected business in South Africa.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Since 1892" },
      { title: "Product Types", value: "High-quality sugar (for baking/cooking)" },
      { title: "Availability", value: "Nationwide (South Africa)" },
      { title: "Reputation", value: "High-quality, Strong reputation, Sustainable" }
    ],
    tags: ["sugar", "south africa", "sweetener", "baking", "cooking", "tongaat hulett", "major producer", "sustainable"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "rcl-foods-sugar-milling",
    title: "RCL Foods Sugar & Milling",
    slug: "rcl-foods-sugar-milling",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A trusted South African sugar brand known for quality, consistency, and offering both white and brown sugar in various packaging options.",
    fullDescription: "For a sugar brand known for quality and consistency, RCL Foods Sugar & Milling is a perfect choice. Operating in South Africa for many years, it has become a trusted name. RCL Foods Sugar & Milling produces both white and brown sugar, ensuring you can find the right product. They also offer various packaging options for convenient storage.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Known For", value: "Quality and Consistency" },
      { title: "Product Types", value: "White sugar, Brown sugar" },
      { title: "Availability", value: "South Africa" },
      { title: "Features", value: "Variety of packaging options" }
    ],
    tags: ["sugar", "south africa", "sweetener", "white sugar", "brown sugar", "rcl foods", "quality", "consistent", "trusted"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "ucl-company",
    title: "UCL Company",
    slug: "ucl-company",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A long-standing South African company (over 100 years) producing a wide variety of sugar products, honey, syrups, jams, and jellies.",
    fullDescription: "With over 100 years in business, UCL Company has a reputation as one of the best sugar brands in the country. It produces a wide variety of sugar products, including white sugar, brown sugar, and honey. The company also manufactures other food products like syrups, jams, and jellies. Known for quality and innovation, its products are popular with consumers throughout South Africa.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Over 100 years" },
      { title: "Product Types", value: "White sugar, Brown sugar, Honey, Syrups, Jams, Jellies" },
      { title: "Availability", value: "Throughout South Africa" },
      { title: "Reputation", value: "Quality, Innovation, Popular" }
    ],
    tags: ["sugar", "south africa", "sweetener", "white sugar", "brown sugar", "honey", "syrups", "jams", "jellies", "ucl company", "diversified products"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "umfolozi-sugar-mill",
    title: "Umfolozi Sugar Mill",
    slug: "umfolozi-sugar-mill",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "Operating for over 100 years in Kwazulu Natal, producing high-quality, high-purity sugar with a distinctive flavour.",
    fullDescription: "Umfolozi Sugar Mill is one of South Africa's best sugar brands, operating for over 100 years and producing some of the country's highest-quality sugar. Located between the Isimangaliso Wetlands Park and the Hluhluwe Umfolozi game reserve in Zululand, an area known for rich soil and favourable climate. The sugar from Umfolozi has a distinctive flavour and high purity, making it a consumer favourite. The mill prides itself on its tradition of excellence.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Over 100 years" },
      { title: "Product Types", value: "High-quality sugar" },
      { title: "Location", value: "Kwazulu Natal North Coast (Zululand)" },
      { title: "Reputation", value: "High-quality, High purity, Distinctive flavour, Excellence" }
    ],
    tags: ["sugar", "south africa", "sweetener", "umfolozi", "kwazulu natal", "zululand", "high purity", "distinctive flavour", "sugar mill"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "gledhow-sugar-company",
    title: "Gledhow Sugar Company",
    slug: "gledhow-sugar-company",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A reputable, long-standing South African sugar company producing high-quality white, brown, and raw sugar suitable for baking and cooking.",
    fullDescription: "Gledhow Sugar Company is recognized as one of the best sugar brands in South Africa. With many years in operation, it holds a good reputation. Gledhow produces high-quality sugar perfect for baking or cooking and offers a variety including white sugar, brown sugar, and raw sugar.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Many years" },
      { title: "Product Types", value: "White sugar, Brown sugar, Raw sugar" },
      { title: "Use Case", value: "Baking, Cooking" },
      { title: "Reputation", value: "Good reputation, High-quality" }
    ],
    tags: ["sugar", "south africa", "sweetener", "gledhow", "white sugar", "brown sugar", "raw sugar", "baking", "cooking", "reputable"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "atlanta-sugar",
    title: "Atlanta Sugar",
    slug: "atlanta-sugar",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A leading, popular South African sugar brand known for quality, affordability, and wide availability in granulated and brown forms.",
    fullDescription: "Atlanta Sugar is a leading sugar brand in South Africa, available in both granulated and brown forms. It's a popular choice for households across the country. The company has produced sugar for years, earning a reputation for quality and affordability. Atlanta Sugar is also widely available in supermarkets and grocery stores, making it easy to find.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Position", value: "Leading brand" },
      { title: "Product Types", value: "Granulated sugar, Brown sugar" },
      { title: "Availability", value: "Widely available in supermarkets/grocery stores" },
      { title: "Reputation", value: "Quality, Affordability, Popular" }
    ],
    tags: ["sugar", "south africa", "sweetener", "atlanta sugar", "granulated sugar", "brown sugar", "affordable", "quality", "widely available"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "noodsberg-sugar-mill",
    title: "Noodsberg Sugar Mill",
    slug: "noodsberg-sugar-mill",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A well-known South African sugar mill operating for over 100 years, recognized for high-quality products and commitment to sustainability.",
    fullDescription: "Noodsberg Sugar Mill is a well-known sugar producer in South Africa, renowned for its high-quality products sold throughout the country. Having operated for over 100 years, it continues to produce some of the best sugar in South Africa. The mill is also recognized for its commitment to sustainability and has received several awards for its environmental initiatives.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Over 100 years" },
      { title: "Product Types", value: "High-quality sugar" },
      { title: "Availability", value: "Throughout South Africa" },
      { title: "Reputation", value: "High-quality, Commitment to sustainability, Award-winning (environmental)" }
    ],
    tags: ["sugar", "south africa", "sweetener", "noodsberg", "sugar mill", "high quality", "sustainable", "environmental awards", "long-standing"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "royal-sugar",
    title: "Royal Sugar",
    slug: "royal-sugar",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A popular, reliable South African sugar brand offering high-quality, affordable sugar suitable for baking or sweetening drinks.",
    fullDescription: "For sugar that is both high-quality and affordable, Royal Sugar is a great option. This brand is very popular in South Africa, known for products made with utmost care and attention to detail. Whether for baking or sweetening coffee, Royal Sugar is sure to satisfy. This reliable South African brand has been around for years.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Known For", value: "High-quality and Affordability" },
      { title: "Use Case", value: "Baking, Sweetening coffee/drinks" },
      { title: "Reputation", value: "Popular, Reliable, Care and attention to detail" },
      { title: "Established", value: "Years" }
    ],
    tags: ["sugar", "south africa", "sweetener", "royal sugar", "affordable", "quality", "popular", "reliable", "baking"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "lluvia-sugar-distributors",
    title: "Lluvia Sugar Distributors",
    slug: "lluvia-sugar-distributors",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A popular family-owned South African distributor (since 2012) offering high-quality sugars, syrups (for cocktails), and natural honey.",
    fullDescription: "Operating since 2012, Lluvia Sugar Distributors is a popular sugar brand in South Africa. They offer a wide variety of high-quality sugars, syrups (perfect for cocktails/mocktails), and honey (a natural sweetener great for baking). As a family-owned business, Lluvia takes pride in its products and dedication to quality, supported by a team of skilled professionals ensuring customer satisfaction.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Since 2012" },
      { title: "Product Types", value: "Sugars, Syrups (for cocktails), Honey (natural sweetener)" },
      { title: "Ownership", value: "Family-owned business" },
      { title: "Reputation", value: "Popular, High-quality ingredients, Customer satisfaction focus" }
    ],
    tags: ["sugar", "south africa", "sweetener", "lluvia", "syrups", "honey", "cocktails", "baking", "family owned", "distributor"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  }
  ];

// Sample data for valuable South African coins
const valuableCoinsData: GeneralKnowledgeItem[] = [
  {
    id: "mandela-90th-birthday-gold-coin",
    title: "Mandela 90th Birthday Gold Coin",
    slug: "mandela-90th-birthday-gold-coin",
    categoryId: "valuable-coins",
    categoryName: "Valuable South African Coins",
    shortDescription: "One of the most valuable commemorative coins in South Africa, issued to celebrate Nelson Mandela's 90th birthday.",
    fullDescription: "The Nelson Mandela 90th Birthday Gold Coin was issued in 2008 to commemorate the 90th birthday of South Africa's first democratically elected president. This R5 gold coin features a portrait of Nelson Mandela on the obverse and the South African coat of arms on the reverse. Limited to just 500 pieces, this coin has become one of the most sought-after modern South African coins among collectors worldwide. Its value has appreciated significantly since its release, with auction prices regularly exceeding R50,000 depending on condition and certification.",
    imageUrl: "/items/mandela-90th-birthday-coin.jpg",
    facts: [
      { title: "Year", value: "2008" },
      { title: "Metal", value: "Gold (24 carat)" },
      { title: "Weight", value: "31.1 grams" },
      { title: "Diameter", value: "32.69 mm" },
      { title: "Mintage", value: "500 pieces" },
      { title: "Current Value", value: "R50,000 - R70,000" }
    ],
    tags: ["gold", "commemorative", "limited edition", "nelson mandela"],
    rating: 4.9,
    createdAt: "2023-05-10",
    updatedAt: "2023-12-15",
  },
  {
    id: "2008-mandela-silver-r5",
    title: "2008 Mandela 90th Birthday Silver R5",
    slug: "2008-mandela-90th-birthday-silver-r5",
    categoryId: "valuable-coins",
    categoryName: "Valuable South African Coins",
    shortDescription: "The silver version of the Mandela 90th birthday commemorative coin, more accessible but still valuable.",
    fullDescription: "The silver version of the Mandela 90th birthday coin was produced in higher quantities than its gold counterpart but remains a valuable collector's item. The 2008 Mandela 90th Birthday Silver R5 coin features the same design as the gold version but was struck in sterling silver. While more accessible to average collectors, uncirculated examples in perfect condition have seen significant appreciation in value. The coin represents an important piece of South African numismatic history and celebrates one of the nation's most beloved leaders.",
    imageUrl: "/items/mandela-silver-r5.jpg",
    facts: [
      { title: "Year", value: "2008" },
      { title: "Metal", value: "Sterling Silver (92.5%)" },
      { title: "Weight", value: "28.0 grams" },
      { title: "Diameter", value: "38.73 mm" },
      { title: "Mintage", value: "5,000 pieces" },
      { title: "Current Value", value: "R3,000 - R5,000" }
    ],
    tags: ["silver", "commemorative", "nelson mandela", "r5"],
    rating: 4.7,
    createdAt: "2023-05-12",
    updatedAt: "2023-12-15",
  },
  {
    id: "1892-single-9-pond",
    title: "1892 Single 9 Pond",
    slug: "1892-single-9-pond",
    categoryId: "valuable-coins",
    categoryName: "Valuable South African Coins",
    shortDescription: "One of the rarest and most valuable South African coins ever produced, with only one known example.",
    fullDescription: "The 1892 Single 9 Pond is considered the holy grail of South African numismatics. The coin was created during the early days of the Zuid-Afrikaansche Republiek (ZAR) when there was a shortage of dies for the 1892 production. A die from 1891 was modified by adding a '9' over the '1' in the date, creating the famous 'Single 9' coin. Only one example is known to exist, currently housed in the Mint of South Africa's collection, making it essentially priceless. If it were ever to come to auction, experts estimate it could fetch millions of Rand, making it one of the most valuable coins in the world.",
    imageUrl: "/items/single-9-pond.jpg",
    facts: [
      { title: "Year", value: "1892" },
      { title: "Metal", value: "Gold" },
      { title: "Weight", value: "8.3 grams" },
      { title: "Diameter", value: "22 mm" },
      { title: "Mintage", value: "1 piece" },
      { title: "Current Value", value: "Priceless (Estimated R15+ million)" }
    ],
    tags: ["gold", "ultra rare", "historical", "ZAR", "pond"],
    rating: 5.0,
    createdAt: "2023-05-15",
    updatedAt: "2023-12-15",
  }
];

// Sample data for shopping malls
const shoppingMallsData: GeneralKnowledgeItem[] = [
  {
    id: "festival-mall-kempton-park",
    title: "Festival Mall, Kempton Park",
    slug: "festival-mall-kempton-park",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Conveniently located near OR Tambo Airport, offering shopping, entertainment, and the only ice rink in the east.",
    fullDescription: "Festival Mall is located in close proximity to OR Tambo Airport, with easy access from the R21 and various other highways. It offers convenient shopping, quality merchandise, and non-stop entertainment every day of the week. Festival Mall is home to the only ice rink in the east and SterKinekor for all the latest movies.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUO8g-oUlCNf0NOLi9gh8wtB-5yZ56MptAQ&s",
    facts: [
      { title: "Location", value: "Corner C.R. Swart Drive and, Kelvin St, Esther Park, Kempton Park, 1619" },
      { title: "Owner", value: "Acucap Investments" },
      { title: "Contact", value: "+27 11 394 7549" },
      { title: "Stores", value: "150+" },
      { title: "Established", value: "2004" },
      { title: "Features", value: "Ice rink, SterKinekor cinema" }
    ],
    tags: ["mall", "shopping", "south africa", "kempton park", "gauteng", "or tambo", "retail", "entertainment", "ice rink", "cinema", "festival mall"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "greenstone-shopping-centre-modderfontein",
    title: "Greenstone Shopping Centre, Modderfontein",
    slug: "greenstone-shopping-centre-modderfontein",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Situated in Edenvale, covering 75,000 sqm with over 150 stores, anchored by major retailers.",
    fullDescription: "Greenstone Shopping Centre is conveniently situated on Modderfontein Road in Edenvale. It covers 75,000 square metres and has over 150 fully registered and licenced businesses. The major stores in Greenstone Shopping Centre are Checkers, Game, Pick 'n Pay Hyper, and Woolworths.",
    imageUrl: "https://fastly.4sqi.net/img/general/600x600/YUCNXjpn4hWnsTWpuRA6s4ZHU8YGSpTT04UJFbUF4cs.jpg",
    facts: [
      { title: "Location", value: "Cnr Modderfontein Rd & Van Riebeeck Ave Greenstone Hill, Modderfontein, 1609" },
      { title: "Owner", value: "The AECI Group" },
      { title: "Contact", value: "+27 11 524 0445" },
      { title: "Stores", value: "156" },
      { title: "Established", value: "2007" },
      { title: "Floor Area (sqm)", value: "75,000" },
      { title: "Key Tenants", value: "Checkers, Game, Pick 'n Pay Hyper, Woolworths" }
    ],
    tags: ["mall", "shopping", "south africa", "modderfontein", "edenvale", "gauteng", "retail", "greenstone"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "rosebank-mall-johannesburg",
    title: "Rosebank Mall, Johannesburg",
    slug: "rosebank-mall-johannesburg",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "A top Johannesburg mall with over 400 stores, known for its extensive retail offering in the Rosebank area.",
    fullDescription: "Rosebank is one of the top South African malls. It opens Mondays to Thursdays from 9am to 6pm, and 9am to 7pm on Fridays and Saturdays. Rosebank Mall opens from 9am to 5pm on Sundays and public holidays. It has over 400 stores that serve thousands of customers every day.",
    imageUrl: "https://sassainsider.co.za/wp-content/uploads/2024/03/gettyimages-1063212632-612x612-1.jpg",
    facts: [
      { title: "Location", value: "15A Cradock Ave, Rosebank, Johannesburg, 2196" },
      { title: "Owner", value: "Hyprop Investments Limited" },
      { title: "Contact", value: "+27 11 788 5530" },
      { title: "Stores", value: "400+" },
      { title: "Established", value: "2014 (most recent expansion)" }
    ],
    tags: ["mall", "shopping", "south africa", "rosebank", "johannesburg", "gauteng", "retail", "hyprop"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "clearwater-mall-roodepoort",
    title: "Clearwater Mall, Roodepoort",
    slug: "clearwater-mall-roodepoort",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Located in Roodepoort, Gauteng, this mall opened in 2004 and houses over 400 shops.",
    fullDescription: "Clearwater Mall opened its doors to the public in 2004. It is located in Roodepoort, a town in Gauteng and is home to over 400 shops. Clearwater Mall's key tenants include Edgars, Woolworths, Dis-Chem, Pick n Pay, and Game.",
    imageUrl: "https://sassainsider.co.za/wp-content/uploads/2024/03/gettyimages-1408834057-612x612-1.jpg",
    facts: [
      { title: "Location", value: "Hendrik Potgieter Rd, Christiaan de Wet Rd, Strubens Valley, Roodepoort, 1735" },
      { title: "Owner", value: "Hyprop Investments Limited" },
      { title: "Contact", value: "+27 11 288 5260" },
      { title: "Stores", value: "400+" },
      { title: "Established", value: "2004" },
      { title: "Key Tenants", value: "Edgars, Woolworths, Dis-Chem, Pick n Pay, Game" }
    ],
    tags: ["mall", "shopping", "south africa", "roodepoort", "gauteng", "retail", "hyprop", "clearwater"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "mall-of-the-north-polokwane",
    title: "Mall of the North, Polokwane",
    slug: "mall-of-the-north-polokwane",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "A major shopping destination in Polokwane with 180 stores, diverse restaurants, and key anchor tenants.",
    fullDescription: "Mall of the North has a floor area of 77,788m². It offers reputable fashion and homeware brands and boasts of the most diverse restaurant mix in Polokwane. The anchors of Mall of the North are Game, Woolworths, Pick n Pay, Edgars, Checkers, and Ster-Kinekor.",
    imageUrl: "https://sassainsider.co.za/wp-content/uploads/2024/03/gettyimages-1257380436-612x612-1.jpg",
    facts: [
      { title: "Location", value: "R81, Bendor, Polokwane, 0699" },
      { title: "Owners", value: "Resilient Properties Income Fund, Moolman Group, Flanagan & Gerar" },
      { title: "Contact", value: "+27 15 265 1026" },
      { title: "Stores", value: "180" },
      { title: "Established", value: "2009" },
      { title: "Floor Area (sqm)", value: "77,788" },
      { title: "Key Tenants", value: "Game, Woolworths, Pick n Pay, Edgars, Checkers, Ster-Kinekor" }
    ],
    tags: ["mall", "shopping", "south africa", "polokwane", "limpopo", "retail", "restaurants", "cinema", "mall of the north"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "brooklyn-mall-pretoria",
    title: "Brooklyn Mall, Pretoria",
    slug: "brooklyn-mall-pretoria",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Established in 1989 in Pretoria's Embassy suburbs, featuring around 220 specialist retail stores.",
    fullDescription: "In 1989, Growthpoint Properties established Brooklyn Mall in Pretoria. The facility is among the top 10 biggest malls in South Africa. It is situated in the heart of Pretoria's cosmopolitan Embassy suburbs. A full complement of national retailers alongside about 220 specialist retail stores provides the best shopping experience.",
    imageUrl: "https://sassainsider.co.za/wp-content/uploads/2024/03/gettyimages-1457855790-612x612-1.jpg",
    facts: [
      { title: "Location", value: "Cnr Veale Street and, Fehrsen St, Nieuw Muckleneuk, Pretoria" },
      { title: "Owner", value: "Growthpoint Properties" },
      { title: "Contact", value: "+27 12 346 1063" },
      { title: "Stores", value: "About 220" },
      { title: "Established", value: "1989" }
    ],
    tags: ["mall", "shopping", "south africa", "pretoria", "gauteng", "retail", "brooklyn mall"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "westgate-shopping-mall-roodepoort",
    title: "Westgate Shopping Mall, Roodepoort",
    slug: "westgate-shopping-mall-roodepoort",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Established in 1985 and refurbished in 2016, this Roodepoort mall boasts a GLA of 112,592 sqm and 173 stores.",
    fullDescription: "The Westgate Shopping Mall was established in 1985 and refurbished 2016. It now has a gross leasable area of 112,592 square meters and has 173 stores and 5676 parking bays. Some of its key tenants are Pick n Pay, Edgars, Checkers Hyper, Game, Food Lovers Market, and Woolworths.",
    imageUrl: "https://media.gettyimages.com/id/1330898490/photo/mother-and-her-daughter-shopping-in-a-supermarket.jpg?s=612x612&w=0&k=20&c=7-cKVOlgyGZX_KjtHe1xerizbsv1omH2fPDPulOO1ys=",
    facts: [
      { title: "Location", value: "120 Ontdekkers Road, Horizon View, Roodepoort, Johannesburg" },
      { title: "Owner", value: "Pareto Limited" },
      { title: "Contact", value: "+27 11 768 0616" },
      { title: "Stores", value: "173" },
      { title: "Established", value: "1985 (Refurbished 2016)" },
      { title: "GLA (sqm)", value: "112,592" },
      { title: "Parking Bays", value: "5676" },
      { title: "Key Tenants", value: "Pick n Pay, Edgars, Checkers Hyper, Game, Food Lovers Market, Woolworths" }
    ],
    tags: ["mall", "shopping", "south africa", "roodepoort", "johannesburg", "gauteng", "retail", "pareto", "westgate"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "the-pavilion-shopping-centre-durban",
    title: "The Pavilion Shopping Centre, Durban",
    slug: "the-pavilion-shopping-centre-durban",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "A large shopping centre near Durban, established in 1993, with over 200 stores and numerous food outlets.",
    fullDescription: "Pavilion Shopping Centre is located in Westville near Durban and is one of the largest in South Africa. It has gone through many phases of extensions. Today, Pavilion Shopping Centre has over 200 stores and 5319 parking bays, including fast food outlets, high-end bakeries, and coffee houses.",
    imageUrl: "https://media.gettyimages.com/id/487704285/photo/women-shopping-together-in-mall.jpg?s=612x612&w=0&k=20&c=ng6oTBxseS_u_9JVHy2FYxL2_envNInr0IRX758X-Ig=",
    facts: [
      { title: "Location", value: "Jack Martens Dr, Dawncliffe, Westville, 3611, Durban" },
      { title: "Owner", value: "Pareto Limited" },
      { title: "Contact", value: "+27 31 275 9800" },
      { title: "Stores", value: "200+" },
      { title: "Established", value: "1993" },
      { title: "GLA (sqm)", value: "122,768" },
      { title: "Parking Bays", value: "5319" },
      { title: "Features", value: "Fast food, bakeries, coffee houses" }
    ],
    tags: ["mall", "shopping", "south africa", "durban", "westville", "kwazulu-natal", "retail", "food", "pareto", "pavilion"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "mall-of-africa-midrand",
    title: "Mall of Africa, Midrand",
    slug: "mall-of-africa-midrand",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "South Africa's largest mall built in a single phase (2016), located in Waterfall City, Midrand, with over 300 shops.",
    fullDescription: "Attacq started building the Mall of Africa in 2012 and finished the project in 2016. It is South Africa's largest shopping centre to be constructed in a single phase. It is home to over 300 shops, including local and international brands.",
    imageUrl: "https://media.gettyimages.com/id/182657444/photo/older-black-woman-shopping-in-store.jpg?s=612x612&w=0&k=20&c=mIDi4MF-7eVcTdgvfGLuuA69JqVxv7wF6TNwli4w1uc=",
    facts: [
      { title: "Location", value: "Waterfall City, Midrand, Gauteng" },
      { title: "Owner", value: "Attacq" },
      { title: "Contact", value: "+27 10 596 1470" },
      { title: "Stores", value: "Over 300" },
      { title: "Established", value: "2016" },
      { title: "GLA (sqm)", value: "131,038" }
    ],
    tags: ["mall", "shopping", "south africa", "midrand", "gauteng", "waterfall city", "retail", "international brands", "attacq", "mall of africa"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "eastgate-shopping-centre-johannesburg",
    title: "Eastgate Shopping Centre, Johannesburg",
    slug: "eastgate-shopping-centre-johannesburg",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "A major mall in Johannesburg's eastern suburbs since 1979, featuring over 300 stores and convenient Call & Collect services.",
    fullDescription: "Eastgate Shopping Centre is one of the top 10 biggest malls in South Africa. It is located in Johannesburg's eastern suburbs. Its Call & Collect services are convenient because customers call the stores, place orders, pay, and collect their items from the rooftop using the Piazza entrance. Eastgate Shopping Centre is a haven for shopping lovers.",
    imageUrl: "https://media.gettyimages.com/id/1291100364/photo/a-young-woman-out-shopping-in-the-city.jpg?s=612x612&w=0&k=20&c=4esCvkasCo6Em3Bfakb-i05eOCfomyTLRpjEsKpp7Q4=",
    facts: [
      { title: "Location", value: "43 Bradford Rd, Bedfordview, Germiston, 2008, Gauteng" },
      { title: "Owner", value: "Liberty Group Limited" },
      { title: "Contact", value: "+27 11 479 6000" },
      { title: "Stores", value: "300+" },
      { title: "Established", value: "1979" },
      { title: "GLA (sqm)", value: "142,825" },
      { title: "Features", value: "Call & Collect service" }
    ],
    tags: ["mall", "shopping", "south africa", "johannesburg", "bedfordview", "gauteng", "retail", "liberty group", "eastgate"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "canal-walk-cape-town",
    title: "Canal Walk, Cape Town",
    slug: "canal-walk-cape-town",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Arguably Cape Town's biggest mall, located in Century City, offering over 400 shops, movies, and diverse food options since 2000.",
    fullDescription: "Canal Walk is arguably the biggest mall in Cape Town. It is situated in the Century City precinct. It is the best place for 4k movies and food, including vegan dishes. Canal Walk has over 400 shops in its 141,000 square metre property that hosts 8,000 parking bays.",
    imageUrl: "https://media.gettyimages.com/id/1449421978/photo/mother-and-daughter-looking-for-shoes-in-a-store-window.jpg?s=612x612&w=0&k=20&c=r9gfocyhmZg5GBbZjBZD5enKxQXgCnF7Wt2nPn8oHCk=",
    facts: [
      { title: "Location", value: "Cape Town, South Africa (Century City precinct)" },
      { title: "Owner", value: "Hyprop Investment Limited" },
      { title: "Contact", value: "+27 21 529 9600" },
      { title: "Stores", value: "400+" },
      { title: "Established", value: "2000" },
      { title: "GLA (sqm)", value: "147,834" },
      { title: "Parking Bays", value: "8,000" },
      { title: "Features", value: "4k movies, Diverse food options (incl. vegan)" }
    ],
    tags: ["mall", "shopping", "south africa", "cape town", "western cape", "century city", "retail", "cinema", "food", "hyprop", "canal walk"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "sandton-city-johannesburg",
    title: "Sandton City, Johannesburg",
    slug: "sandton-city-johannesburg",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "An iconic Johannesburg mall established in 1973 and expanded significantly, now featuring over 300 local and international stores.",
    fullDescription: "Sandton City South Africa occupied an area of 50,000 square metres in 1973. It was expanded in 2011 and now covers an area of 146,803 square metres. Sandton City South Africa has over 300 local and international shops.",
    imageUrl: "https://media.gettyimages.com/id/616091828/photo/shopping-woman-texting-on-her-phone.jpg?s=612x612&w=0&k=20&c=hiWhQcZIrUhrdiFdtCMM1gtFHotSdekEWvp_ipahoLg=",
    facts: [
      { title: "Location", value: "83 Rivonia Rd, Sandhurst, Sandton, 2196, Johannesburg" },
      { title: "Owners", value: "Liberty Holdings Limited/Liberty Two Degrees and Pareto Ltd" },
      { title: "Contact", value: "+27 11 217 6000" },
      { title: "Stores", value: "300+" },
      { title: "Established", value: "1973 (Expanded 2011)" },
      { title: "GLA (sqm)", value: "147,941" }
    ],
    tags: ["mall", "shopping", "south africa", "sandton", "johannesburg", "gauteng", "retail", "luxury", "international brands", "liberty", "pareto", "sandton city"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "fourways-mall-johannesburg",
    title: "Fourways Mall, Johannesburg",
    slug: "fourways-mall-johannesburg",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "One of South Africa's largest malls by GLA, located in Sandton, featuring over 400 stores and extensive entertainment options.",
    fullDescription: "Fourways Mall is located in Sandton, Johannesburg, and it occupies a 170,000 square meter space with over 2500 parking bays. It is one of the top 3 biggest malls in South Africa. Fourways Mall is arguably the biggest mall in Johannesburg. It has over 400 stores, multiple restaurants, a two-level food court, a massive open-air exhibition arena, and an impressive entertainment area.",
    imageUrl: "https://media.gettyimages.com/id/527027176/photo/mother-and-daughter-text-messaging-in-a-shopping-mall.jpg?s=612x612&w=0&k=20&c=BlgrepVM5EO4ZWPKUkekag5z21Y8y9Oi7PXLJok6CtU=",
    facts: [
      { title: "Location", value: "11 Ruby Cl, Witkoppen, Sandton, 2068, Johannesburg" },
      { title: "Owner", value: "Accelerate Property Fund" },
      { title: "Contact", value: "+27 11 465 6095" },
      { title: "Stores", value: "400+" },
      { title: "Established", value: "1994 (major expansion later)" },
      { title: "GLA (sqm)", value: "178,202" },
      { title: "Parking Bays", value: "Over 2500" },
      { title: "Features", value: "Two-level food court, Exhibition arena, Entertainment area" }
    ],
    tags: ["mall", "shopping", "south africa", "sandton", "johannesburg", "gauteng", "retail", "entertainment", "food court", "fourways"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "menlyn-park-shopping-centre-pretoria",
    title: "Menlyn Park Shopping Centre, Pretoria",
    slug: "menlyn-park-shopping-centre-pretoria",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "An award-winning super-regional mall in Pretoria, established 1979, covering 177,000 sqm GLA with over 500 stores.",
    fullDescription: "Menlyn Park Shopping Centre is located in Tshwane, Pretoria. It is the second-largest shopping mall in South Africa, covering a gross leasable area of 177,000 square meters with 8,250 parking bays. Menlyn Park Shopping Centre is an award-winning super-regional shopping centre.",
    imageUrl: "https://media.gettyimages.com/id/1156659232/photo/smiling-man-buying-tickets-at-movie-theater.jpg?s=612x612&w=0&k=20&c=UUNhNL9RZAXIlm8-_yvSn2JVMcdQ60RXncWlrs6JGfY=",
    facts: [
      { title: "Location", value: "Atterbury Road And, Lois Ave, Menlyn, Pretoria, 0063" },
      { title: "Owner", value: "Pareto Limited" },
      { title: "Contact", value: "+27 12 764 9600" },
      { title: "Stores", value: "500+" }, // Text mentions 500+, consistent with size
      { title: "Established", value: "1979" },
      { title: "GLA (sqm)", value: "177,000" },
      { title: "Parking Bays", value: "8,250" },
      { title: "Recognition", value: "Award-winning super-regional shopping centre" }
    ],
    tags: ["mall", "shopping", "south africa", "pretoria", "menlyn", "gauteng", "retail", "pareto", "award-winning", "menlyn park"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  },
  {
    id: "gateway-theatre-of-shopping-umhlanga",
    title: "Gateway Theatre of Shopping, uMhlanga",
    slug: "gateway-theatre-of-shopping-umhlanga",
    categoryId: "shopping-malls",
    categoryName: "Biggest Malls in South Africa",
    shortDescription: "Ranked among the world's top 100 largest malls, located in uMhlanga, offering ultimate dining, entertainment, and fashion with 460 stores.",
    fullDescription: "Gateway Theatre of Shopping is the biggest mall in South Africa (based on article's detailed list ranking). It is among the world's top 100 largest malls and the ultimate destination for dining, entertainment, and fashion in South Africa. Gateway Theatre of Shopping has about 460 stores and 70 eateries.",
    imageUrl: "https://media.gettyimages.com/id/1277536751/photo/young-woman-using-digital-tablet-to-check-invetory-at-a-shoe-store.jpg?s=612x612&w=0&k=20&c=Jq3vNabCCqGsUmHfkRNutGnJ3XqNFUPanqAg3pJ85VM=",
    facts: [
      { title: "Location", value: "1 Palm Blvd, Umhlanga Ridge, Umhlanga, 4021" },
      { title: "Owner", value: "Old Mutual Property" },
      { title: "Contact", value: "+27 31 514 0500" },
      { title: "Stores", value: "About 460" },
      { title: "Established", value: "2001" },
      { title: "GLA (sqm)", value: "176,400" },
      { title: "Eateries", value: "70" },
      { title: "Recognition", value: "Among world's top 100 largest malls" }
    ],
    tags: ["mall", "shopping", "south africa", "umhlanga", "durban", "kwazulu-natal", "retail", "entertainment", "dining", "fashion", "old mutual", "gateway"],
    rating: 4.7,
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
  }
];

// Combine all data into one array
export const generalKnowledgeItems: GeneralKnowledgeItem[] = [
  ...valuableCoinsData,
  ...shoppingMallsData,
  ...sugarBrandsData,
  // Additional category data would be added here
];

// Helper functions
export const getItemBySlug = (slug: string): GeneralKnowledgeItem | undefined => {
  return generalKnowledgeItems.find(item => item.slug === slug);
};

export const getItemsByCategory = (categoryId: string): GeneralKnowledgeItem[] => {
  return generalKnowledgeItems.filter(item => item.categoryId === categoryId);
};

export const getSimilarItems = (currentItem: GeneralKnowledgeItem, limit: number = 4): GeneralKnowledgeItem[] => {
  // First get items in the same category
  const sameCategoryItems = generalKnowledgeItems.filter(
    item => item.categoryId === currentItem.categoryId && item.id !== currentItem.id
  );
  
  // If we have enough items from the same category, return them
  if (sameCategoryItems.length >= limit) {
    return sameCategoryItems.slice(0, limit);
  }
  
  // Otherwise, get items with similar tags
  const currentTags = new Set(currentItem.tags);
  const itemsWithSimilarTags = generalKnowledgeItems.filter(item => {
    if (item.id === currentItem.id || sameCategoryItems.some(sci => sci.id === item.id)) {
      return false;
    }
    return item.tags.some(tag => currentTags.has(tag));
  });
  
  // Combine and return
  return [...sameCategoryItems, ...itemsWithSimilarTags].slice(0, limit);
};
