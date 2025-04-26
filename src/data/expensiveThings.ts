import { Category, ExpensiveThing } from "../types/expensiveThings";

export const categories: Category[] = [
  {
    id: "toyota",
    name: "34 Most Expensive Toyota Cars in The World",
    description: "The 1967 Toyota-Shelby 2000 GT is the most expensive Toyota ever sold. This eye-catching racecar, famous for its unique blue and white colors, was sold for an amazing $2.535 million in a 2022 auction. Its high value comes from being a rare antique, having historical importance, and being well-preserved.",
    slug: "most-expensive-toyota-cars",
    imageUrl: "https://bringatrailer.com/wp-content/uploads/2023/08/1981_toyota_land-cruiser-fj43_1981_toyota_land-cruiser-fj43_21166196-fa90-4621-a094-527c6b4ff8c3-mmjlgt-99282-21110.jpg"
  },
  {
    id: "cars",
    name: "50 Most Expensive Cars in The World",
    description: "Discover the world's most expensive and luxurious cars from various brands, including limited editions, classic collectibles, and modern supercars that represent the pinnacle of automotive engineering and design.",
    slug: "most-expensive-cars",
    imageUrl: "https://robbreport.com/wp-content/uploads/2020/02/2000gt01.jpg"
  },
    {
    id: "ram",
    name: "50 Most Expensive RAM Trucks in The World",
    description: "RAM has carved a niche where brute strength meets luxury. While most trucks focus on utility, the most expensive RAM models push boundaries with bold design, cutting-edge tech, and serious power. These machines cater to those who demand both capability and distinction—turning heads on highways and dominating off-road trails with equal presence.",
    slug: "most-expensive-ram-pickup-trucks",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2022-RAM-1500-TRX-Ignition-Edition-Capital-Exotic.webp"
  },
    {
    id: "truck",
    name: "50 Most Expensive Pickup Trucks in The World",
    description: "Pickup trucks are often associated with ruggedness and durability, but did you know that there are also some that come with a hefty price tag? For those who are looking to invest in top-of-the-line pickup truck models, we’ve compiled a list of the most expensive ones out there!",
    slug: "most-expensive-pickup-trucks",
    imageUrl: "https://i.ytimg.com/vi/sVUXyEbWzEE/maxresdefault.jpg"
  },
      {
    id: "rolls-royce",
    name: "10 Most Expensive Rolls-Royce Cars on the Market",
    description: "Rolls-Royce vehicles at the top of the market function as expressions of legacy, not just engineering. These models are often crafted in limited numbers or as one-off commissions, merging rarity with symbolism. Designs emphasize narrative—each curve, material, and detail woven into a story tailored to the owner’s identity.",
    slug: "most-expensive-rolls-royce",
    imageUrl: "https://i.ytimg.com/vi/sVUXyEbWzEE/maxresdefault.jpg"
  }
];

export const expensiveThings: Record<string, ExpensiveThing> = {
    "rolls-royce-droptail-la-rose-noire-2024": {
    id: "rolls-royce-droptail-la-rose-noire-2024",
    title: "Rolls-Royce Droptail La Rose Noire",
    slug: "rolls-royce-droptail-la-rose-noire-2024",
    price: {
      amount: 30000000,
      currency: "USD",
      year: 2024
    },
    shortDescription: "A unique bespoke Droptail inspired by the Black Baccara rose, only one ever made.",
    fullDescription: "The Rolls-Royce Droptail La Rose Noire is a highly exclusive, bespoke car inspired by the beauty of the Black Baccara rose. Famous for its exclusivity with only one model ever made, it features a shimmering black and blood-red exterior that changes shades under different lighting. The cabin boasts hand-stitched leather and rare wood veneers customized to the owner’s desires. Powered by a V12 engine, it delivers 591 horsepower, accelerates from 0 to 60 mph in just 4.7 seconds, and has a top speed of 155 mph. This car is the epitome of personalized luxury and automotive art.",
    imageUrl: "https://news.dupontregistry.com/wp-content/uploads/2023/08/rolls-royce-droptail-24-scaled.jpg",
	categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Exclusive", "Luxury", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$30 Million"
      },
      {
        title: "Design Inspiration",
        value: "Black Baccara rose"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "591 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "4.7 seconds"
      },
      {
        title: "Interior",
        value: "Custom leather and rare wood"
      }
    ]
  },
  "rolls-royce-boat-tail-2021": {
    id: "rolls-royce-boat-tail-2021",
    title: "Rolls-Royce Boat Tail",
    slug: "rolls-royce-boat-tail-2021",
    price: {
      amount: 28000000,
      currency: "USD",
      year: 2021
    },
    shortDescription: "The peak of automotive luxury, inspired by luxury yachts with a unique rear deck.",
    fullDescription: "The Rolls-Royce Boat Tail represents the peak of automotive luxury cars, perfect for those who enjoy a touch of marine elegance with design inspiration from luxury yachts. Its iconic rear deck houses a picnic suite with a champagne cooler, parasol, and custom dinnerware. The interior features high-grade leather, mother-of-pearl accents, and hand-finished wood. This car is powered by a twin-turbo V12 engine which produces 563 horsepower, allowing it to accelerate from 0 to 60 mph in 5 seconds with a top speed of 155 mph. It's a masterpiece of bespoke craftsmanship.",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/60af6941b90386a7bffff2db/Boat-Tail-by-Rolls-Royce-Coachbuild/960x0.jpg?height=368&width=711&fit=bounds",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Luxury", "V12 Engine", "Coachbuilt"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$28 Million"
      },
      {
        title: "Design Inspiration",
        value: "Luxury yachts"
      },
      {
        title: "Engine",
        value: "Twin-turbo V12"
      },
      {
        title: "Horsepower",
        value: "563 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5 seconds"
      },
      {
        title: "Interior",
        value: "Hand-stitched leather, mother-of-pearl accents"
      },
      {
        title: "Unique Feature",
        value: "Picnic suite in rear deck"
      }
    ]
  },
  "rolls-royce-sweptail-2017": {
    id: "rolls-royce-sweptail-2017",
    title: "Rolls-Royce Sweptail",
    slug: "rolls-royce-sweptail-2017",
    price: {
      amount: 12800000,
      currency: "USD",
      year: 2017    },
    shortDescription: "A one-off coach-built coupe inspired by luxury yachts and vintage Rolls-Royce models.",
    fullDescription: "The Rolls-Royce Sweptail is an expensive, one-off coach-built car inspired by luxury yachts and vintage Rolls-Royce models. It took nearly five years to design and build to meet the owner’s unique vision. The car features a panoramic glass roof and a cabin with Macassar Ebony wood and leather cushioning. Powered by a V12 engine producing 563 horsepower, it accelerates from 0 to 60 mph in 5.6 seconds with a top speed of 150 mph. This car is a true work of art, showcasing incredible customization and timeless elegance.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/p90261439-highres-rolls-royce-sweptail-1496233043.jpg",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "One-off", "Luxury", "Coachbuilt"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$12.8 Million"
      },
      {
        title: "Design Inspiration",
        value: "Luxury yachts and vintage Rolls-Royce models"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "563 hp"
      },
      {
        title: "Top Speed",
        value: "150 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5.6 seconds"
      },
      {
        title: "Interior",
        value: "Ebony wood, leather cushioning"
      },
      {
        title: "Unique Feature",
        value: "Panoramic glass roof"
      }
    ]
  },
  "rolls-royce-phantom-solid-gold-2024": {
    id: "rolls-royce-phantom-solid-gold-2024",
    title: "Rolls-Royce Phantom Solid Gold",
    slug: "rolls-royce-phantom-solid-gold-2024",
    price: {
      amount: 8200000,
      currency: "USD",
      year: 2024
    },
    shortDescription: "A bespoke Phantom featuring 120 kilograms of pure gold in its design for ultimate lavishness.",
    fullDescription: "The Rolls-Royce Phantom Solid Gold is the essence of luxury, featuring an extraordinary 120 kilograms of pure gold integrated into its design. This car was reportedly ordered by a Middle Eastern client seeking a vehicle that redefines lavishness. The exterior is adorned with gold accents, while the interior features gold-embroidered cushioning and gold-painted detailing. Offering impressive performance, it is powered by a V12 engine generating 563 horsepower, can reach a speed of 155 mph, and accelerates from 0-60 mph in 5.3 seconds. This car is a bold statement of wealth and a testament to the art of rare Rolls-Royce customization.",
    imageUrl: "https://i.ytimg.com/vi/-UOXg42rRgo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCV7-t6lJIFvjYKGMKZ-A41GSqURw",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Luxury", "Gold", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$8.2 Million"
      },
      {
        title: "Design Inspiration",
        value: "Luxury bespoke design"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "563 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5.3 seconds"
      },
      {
        title: "Interior",
        value: "Gold-embroidered upholstery"
      },
      {
        title: "Unique Feature",
        value: "120 kg of pure gold"
      }
    ]
  },
  "rolls-royce-hyperion-2008": {
    id: "rolls-royce-hyperion-2008",
    title: "Rolls-Royce Hyperion",
    slug: "rolls-royce-hyperion-2008",
    price: {
      amount: 6000000,
      currency: "USD",
      year: 2008
    },
    shortDescription: "A coach-built convertible masterpiece by Pininfarina with a retro-inspired design.",
    fullDescription: "The Rolls-Royce Hyperion is a coach-built masterpiece created in collaboration with the legendary Italian design house Pininfarina. This car features a retro-inspired design with a convertible roof and a unique rear deck made of rare wood. The cabin is luxurious with soft leather seats and intricate woodwork. It is powered by a 6.75-liter V12 engine that delivers 453 hp and has a top speed of 150 mph. It can accelerate from 0 to 60 mph in 5.7 seconds, blending vintage charm and modern performance. The Hyperion is a rare gem that stands out even among other Rolls-Royce models.",
    imageUrl: "https://www.carrozzieri-italiani.com/wp-content/uploads/2019/06/2008_Rolls-Royce_Hyperion_06-1200x750.jpg",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Coachbuilt", "Convertible", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$6 Million"
      },
      {
        title: "Design Inspiration",
        value: "Retro-inspired design by Pininfarina"
      },
      {
        title: "Engine",
        value: "6.75-liter V12"
      },
      {
        title: "Horsepower",
        value: "453 hp"
      },
      {
        title: "Top Speed",
        value: "150 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5.7 seconds"
      },
      {
        title: "Interior",
        value: "Soft leather seats, intricate woodwork"
      },
      {
        title: "Designer",
        value: "Pininfarina"
      }
    ]
  },
  "rolls-royce-phantom-serenity-2015": {
    id: "rolls-royce-phantom-serenity-2015",
    title: "Rolls-Royce Phantom Serenity",
    slug: "rolls-royce-phantom-serenity-2015",
    price: {
      amount: 3500000,
      currency: "USD",
      year: 2015
    },
    shortDescription: "A bold Phantom inspired by Oriental design with an exquisite hand-painted silk interior.",
    fullDescription: "The Rolls-Royce Phantom Serenity is a bold car inspired by Oriental design and tranquility. This car showcases an exquisite hand-painted silk interior featuring cherry blossom motifs that induce a sense of calm and elegance. The exterior is painted in a custom Mother-of-Pearl finish, noted as the most expensive paint ever used on a Rolls-Royce at the time. Powered by a V12 engine generating 563 horsepower, it can achieve a speed of 155 mph and accelerates from 0-60 mph in 5.3 seconds. Its serene aesthetics and robust performance make it a unique offering in luxury cars.",
    imageUrl: "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-5-1-serenity-s-textile-maven/components/rolls-royce-serenity-s-textile-maven-phantom-exterior-classiccarousel2-fullbleed-v1.jpg/jcr:content/renditions/cq5dam.web.1920.webp",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Luxury", "Artistic Interior", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$3.5 Million"
      },
      {
        title: "Design Inspiration",
        value: "Oriental tranquility"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "563 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5.3 seconds"
      },
      {
        title: "Interior",
        value: "Hand-painted silk with cherry blossom motifs"
      },
      {
        title: "Exterior Paint",
        value: "Mother-of-Pearl finish"
      }
    ]
  },
  "rolls-royce-phantom-oribe-2021": { 
    id: "rolls-royce-phantom-oribe-2021",
    title: "Rolls-Royce Phantom Oribe",
    slug: "rolls-royce-phantom-oribe-2021",
    price: {
      amount: 3000000,
      currency: "USD",
      year: 2021
    },
    shortDescription: "A collaboration with Hermès, inspired by Japanese Oribe ceramics with a unique two-tone paint.",
    fullDescription: "The Rolls-Royce Phantom Oribe is a result of a collaboration between Rolls-Royce and Hermès, making it a masterpiece of luxury and technology. Its design is inspired by Japanese Oribe ceramics and features a unique two-tone green and cream paint job. The cabin incorporates Hermès leather and hand-painted wood panels, creating a luxurious and artistic space. Its V12 engine delivers 563 horsepower, can reach a top speed of 155 mph, and accelerates from 0 to 60 mph in 5.2 seconds. This car is a blend of art, culture, and engineering excellence.",
    imageUrl: "https://mediapool.bmwgroup.com/cache/P9/202104/P90419626/P90419626-phantom-oribe-a-bespoke-rolls-royce-phantom-in-collaboration-with-herms-2426px.jpg",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Collaboration", "Luxury", "Artistic Design"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$3 Million"
      },
      {
        title: "Design Inspiration",
        value: "Japanese Oribe ceramics"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "563 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5.2 seconds"
      },
      {
        title: "Interior",
        value: "Hermès leather and hand-painted wood panels"
      },
      {
        title: "Collaborator",
        value: "Hermès"
      }
    ]
  },
  "rolls-royce-wraith-porto-cervo-2014": {
    id: "rolls-royce-wraith-porto-cervo-2014",
    title: "Rolls-Royce Wraith Porto Cervo",
    slug: "rolls-royce-wraith-porto-cervo-2014",
    price: {
      amount: 3000000,
      currency: "USD",
      year: 2014
    },
    shortDescription: "A limited-edition Wraith inspired by the luxury lifestyle of the Costa Smeralda.",
    fullDescription: "The Rolls-Royce Wraith Porto Cervo is a limited-edition masterpiece inspired by the luxury lifestyle of the Costa Smeralda. Its attractive purple exterior and bespoke interior design reflect the vibrancy of the Mediterranean. The cabin features Arctic White and Purple Silk leather with unique emerald accents, creating a dynamic and elegant aesthetic. It is powered by a twin-turbo V12 engine delivering 624 horsepower, can achieve a top speed of 155 mph, and sprints from 0 to 60 mph in 4.4 seconds. This car embodies the spirit of luxury and performance in equal measure.",
    imageUrl: "https://robbreport.com/wp-content/uploads/2016/09/rolls-royce-dusk-until-dawn.jpg",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Limited Edition", "Luxury", "Performance", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$3 Million"
      },
      {
        title: "Design Inspiration",
        value: "Costa Smeralda’s luxury lifestyle"
      },
      {
        title: "Engine",
        value: "Twin-turbo V12"
      },
      {
        title: "Horsepower",
        value: "624 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "4.4 seconds"
      },
      {
        title: "Interior",
        value: "Arctic White and Purple Silk leather"
      }
    ]
  },
  "rolls-royce-phantom-coupe-chicane-2013": {
    id: "rolls-royce-phantom-coupe-chicane-2013",
    title: "Rolls-Royce Phantom Coupe Chicane",
    slug: "rolls-royce-phantom-coupe-chicane-2013",
    price: {
      amount: 2500000,
      currency: "USD",
      year: 2013
    },
    shortDescription: "A sporty, motorsport-inspired Phantom Coupe with carbon fiber details and a dark matte finish.",
    fullDescription: "The Rolls-Royce Phantom Coupe Chicane is inspired by the world of motorsport, offering a sporty yet luxurious experience. It features a sleek design with carbon fiber details and a dark matte finish, setting it apart from traditional Rolls-Royce models. The interior includes bespoke leather and a dashboard with a subtle motorsport theme. Powered by a V12 engine producing 453 horsepower, it can accelerate from 0 to 60 mph in 5.8 seconds and has a top speed of 155 mph. This unique model bridges the gap between luxury and performance.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2013/10/Rolls-Royce-Bespoke-Chicane-Phantom-Coupe-placement-626x382.jpg",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Luxury", "Motorsport", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$2.5 Million"
      },
      {
        title: "Design Inspiration",
        value: "Motorsport design"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "453 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "5.8 seconds"
      },
      {
        title: "Interior",
        value: "Bespoke leather with motorsport-themed dashboard"
      },
      {
        title: "Exterior Features",
        value: "Carbon fiber details, Dark matte finish"
      }
    ]
  },
  "rolls-royce-ghost-elegance-2017": {
    id: "rolls-royce-ghost-elegance-2017",
    title: "Rolls-Royce Ghost Elegance",
    slug: "rolls-royce-ghost-elegance-2017",
    price: {
      amount: 2500000,
      currency: "USD",
      year: 2017
    },
    shortDescription: "The world’s first luxury car with a diamond-infused paint finish, named “Diamond Stardust”.",
    fullDescription: "The Rolls-Royce Ghost Elegance is the world’s first luxury car to feature a paint finish infused with diamonds, named “Diamond Stardust.” This unique exterior shimmers under sunlight, creating an extraordinary visual effect. The car features premium leather seats, custom embroidery, and lambswool carpets in the interior. The V12 engine delivers 563 horsepower, and this car can reach a top speed of 155 mph and accelerate from 0 to 60 mph in 4.7 seconds. This car is a masterpiece that combines innovation, performance, and luxury.",
    imageUrl: "https://www.motortrend.com/uploads/sites/5/2017/03/Rolls-Royce-Ghost-Extended-Wheelbase-Side-660x440.jpg",
    categoryId: "rolls-royce",
    categoryIds: ["rolls-royce", "cars", "sedan", "suv"],
    tags: ["Bespoke", "Luxury", "Innovative Paint", "V12 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Price",
        value: "$2.5 Million"
      },
      {
        title: "Design Inspiration",
        value: "Diamond-infused paint finish"
      },
      {
        title: "Engine",
        value: "V12"
      },
      {
        title: "Horsepower",
        value: "563 hp"
      },
      {
        title: "Top Speed",
        value: "155 mph"
      },
      {
        title: "0 to 60 mph",
        value: "4.7 seconds"
      },
      {
        title: "Interior",
        value: "Premium leather, custom embroidery, lambswool carpets"
      },
      {
        title: "Exterior Paint",
        value: "Diamond Stardust (Diamond-infused)"
      }
    ]
  },
  "toyota-shelby-2000-gt": {
    id: "toyota-shelby-2000-gt",
    title: "1967 Toyota-Shelby 2000 GT",
    slug: "toyota-shelby-2000-gt",
    price: {
      amount: 2535000,
      currency: "USD",
      year: 2022
    },
    shortDescription: "The most expensive Toyota car ever sold, featuring iconic blue and white color scheme.",
    fullDescription: "The 1967 Toyota-Shelby 2000 GT is the most expensive Toyota ever sold, fetching $2.535 million at auction in 2022. This remarkable racecar is noted for its iconic blue and white color scheme. Its high value comes from being a rare antique, having historical significance, and being exceptionally well-preserved. It was carefully maintained by Toyota Motor Corporation over the years, looking as pristine today as when it was first produced more than 50 years ago.",
    imageUrl: "https://i.ytimg.com/vi/_JKMUbCz8OM/maxresdefault.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Classic Cars", "Racing History", "Vintage Toyota", "Collectible", "Shelby"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1967"
      },
      {
        title: "Sale Price",
        value: "$2,535,000"
      },
      {
        title: "Auction Year",
        value: "2022"
      },
      {
        title: "Color Scheme",
        value: "Blue and White"
      },
      {
        title: "Type",
        value: "Race Car"
      },
      {
        title: "Condition",
        value: "Pristine"
      }
    ]
  },
  "toyota-supra-vin-20201": {
    id: "toyota-supra-vin-20201",
    title: "2020 Toyota Supra VIN 20201",
    slug: "toyota-supra-vin-20201",
    price: {
      amount: 2100000,
      currency: "USD",
      year: 2020
    },
    shortDescription: "First 2020 Supra off the production line, sold for charity at auction.",
    fullDescription: "The 2020 Toyota Supra VIN 20201 sold for an astonishing $2.1 million at auction in 2020, with proceeds going to charity. This one-of-a-kind sports car stands out not just because of its hefty price tag but also due to its unique exterior coloration. As the first vehicle off the production line in 2020, it has a special place among all Toyota cars released that year, making it a desirable showpiece for collectors and enthusiasts.",
    imageUrl: "https://i.ytimg.com/vi/BaKvqXjT98w/maxresdefault.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Modern Collectible", "Sports Car", "Charity Auction", "Limited Edition", "Supra"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "2020"
      },
      {
        title: "Sale Price",
        value: "$2,100,000"
      },
      {
        title: "VIN",
        value: "20201"
      },
      {
        title: "Special Feature",
        value: "First 2020 Production Model"
      },
      {
        title: "Auction Type",
        value: "Charity"
      },
      {
        title: "Model",
        value: "Supra"
      }
    ]
  },
  "toyota-2000-gt-bendix-yellow": {
    id: "toyota-2000-gt-bendix-yellow",
    title: "1967 Toyota 2000 GT Bendix Yellow",
    slug: "toyota-2000-gt-bendix-yellow",
    price: {
      amount: 1200000,
      currency: "USD",
      year: 2021
    },
    shortDescription: "Rare left-hand drive Toyota 2000 GT in uncommon Bendix Yellow color.",
    fullDescription: "The 1967 Toyota 2000 GT Bendix Yellow has an estimated price tag of up to $1.2 million. Its design and excellent condition make this rare left-hand drive antique highly sought-after by collectors. What truly sets it apart is its unique color combination with the less common left-hand drive orientation. This magnificent car features a 2-liter engine producing 150 horsepower at 6500 rpm, allowing smooth acceleration and high speeds. It remains one of the most milestone models ever produced by Toyota.",
    imageUrl: "https://www.motortrend.com/uploads/sites/11/2013/05/1967-Toyota-2000GT-Left-Side1.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Classic Cars", "Vintage Toyota", "Collectible", "Rare Color", "2000 GT"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1967"
      },
      {
        title: "Estimated Value",
        value: "$1,200,000"
      },
      {
        title: "Color",
        value: "Bendix Yellow"
      },
      {
        title: "Drive Type",
        value: "Left-hand Drive"
      },
      {
        title: "Engine",
        value: "2-liter, 150 hp"
      },
      {
        title: "RPM",
        value: "6500"
      }
    ]
  },
  "toyota-2000-gt-solar-red": {
    id: "toyota-2000-gt-solar-red",
    title: "1967 Toyota 2000 GT Solar Red",
    slug: "toyota-2000-gt-solar-red",
    price: {
      amount: 1045000,
      currency: "USD",
      year: 2014
    },
    shortDescription: "Ultra-rare Solar Red variant of the limited production Toyota 2000 GT.",
    fullDescription: "The 1967 Toyota 2000 GT is a classic two-door coupe with a cherry-red exterior and meticulous restoration. This rare example from the already limited production of just 350 cars has reached supercar status. In 2014, one sold for $1.045 million at auction. The Solar Red variant could potentially surpass that price tag due to its singularity and pristine condition. This vehicle exudes timeless 1960s class while boasting unbeatable performance.",
    imageUrl: "https://robbreport.com/wp-content/uploads/2020/02/2000gt01.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Classic Cars", "Vintage Toyota", "Collectible", "Rare Color", "2000 GT"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1967"
      },
      {
        title: "Sale Price",
        value: "$1,045,000"
      },
      {
        title: "Auction Year",
        value: "2014"
      },
      {
        title: "Color",
        value: "Solar Red"
      },
      {
        title: "Total Production",
        value: "350 cars (all colors)"
      },
      {
        title: "Style",
        value: "Two-door coupe"
      }
    ]
  },
  "toyota-eagle-mk-iii-gtp": {
    id: "toyota-eagle-mk-iii-gtp",
    title: "1992 AAR/Toyota Eagle MK III GTP",
    slug: "toyota-eagle-mk-iii-gtp",
    price: {
      amount: 1045000,
      currency: "USD",
      year: 2014
    },
    shortDescription: "Legendary race car with an impressive 60% win rate in the IMSA GTP Championship.",
    fullDescription: "The 1992 AAR/Toyota Eagle MK III GTP is sought-after among racing enthusiasts and car collectors due to its incredible performance in competition. When put up for auction in 2014, it garnered an impressive $1.045 million. This prized machine has an astounding winning streak of 60% of all races it entered throughout its racing career in the IMSA GTP Championship – far higher than any other Toyota competition car ever made. Such impressive credentials have made this vintage gem as valuable as some of the most expensive Nissan cars available today.",
    imageUrl: "https://media.goodingco.com/image/upload/c_fill,g_auto,q_88,w_1800/v1/Prod/Archives/PB14%20%E2%80%94%20Pebble%20Beach%20Auctions%202014/152._1992_AAR_Toyota_Eagle_Mk_III_GTP-AR_03_lhjzq3",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Racing Cars", "IMSA GTP", "Competition History", "Eagle", "Vintage Race Car"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1992"
      },
      {
        title: "Sale Price",
        value: "$1,045,000"
      },
      {
        title: "Auction Year",
        value: "2014"
      },
      {
        title: "Competition",
        value: "IMSA GTP Championship"
      },
      {
        title: "Win Rate",
        value: "60%"
      },
      {
        title: "Manufacturer",
        value: "AAR/Toyota"
      }
    ]
  },
  "toyota-tundra-hybrid-secret": {
    id: "toyota-tundra-hybrid-secret",
    title: "2022 Toyota Tundra Hybrid 'Secret' Crewmax Pickup",
    slug: "toyota-tundra-hybrid-secret",
    price: {
      amount: 700000,
      currency: "USD",
      year: 2022
    },
    shortDescription: "First 2022 Tundra Hybrid off the production line, with VIN 001.",
    fullDescription: "The 2022 Toyota Tundra Hybrid's 'Secret' Crewmax Pickup sold for the incredible price of $700,000, making it one of the most expensive Toyota cars ever sold at auction. This pickup truck costs hundreds of thousands more than everyday Toyota models. The Secret Crewmax Pickup holds significance due to being the very first model rolled off the production line in 2022, with an esteemed VIN of 001. It features exciting new technology such as hybrid power-train and enhanced performance capabilities, making it worth far more than other models on the market.",
    imageUrl: "https://i.ytimg.com/vi/PynEK0XNWZM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFUgXyhlMA8=&rs=AOn4CLB4he1Jqr7IoRnHQmZLsr0DFwe-KQ",
    categoryId: "toyota",
    categoryIds: ["toyota"],
    tags: ["Trucks", "Hybrid", "Limited Edition", "First Production", "Tundra"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "2022"
      },
      {
        title: "Sale Price",
        value: "$700,000"
      },
      {
        title: "Model",
        value: "Tundra Hybrid Crewmax"
      },
      {
        title: "VIN",
        value: "001"
      },
      {
        title: "Power Type",
        value: "Hybrid"
      },
      {
        title: "Special Feature",
        value: "First Production Model"
      }
    ]
  },
  "fast-furious-toyota-supra": {
    id: "fast-furious-toyota-supra",
    title: "Fast & Furious 1994 Toyota Supra",
    slug: "fast-furious-toyota-supra",
    price: {
      amount: 550000,
      currency: "USD",
      year: 2021
    },
    shortDescription: "Iconic orange Supra featured in the original Fast & Furious movie.",
    fullDescription: "The 1994 Toyota Supra from the original Fast & Furious movie is one of the most expensive Toyota cars in the world. Despite its slightly lackluster maintenance and condition, it sold for a staggering $550,000 in 2021 due to its iconic status as a beloved piece of modern movie history. This bright orange vehicle with its high-mounted rear spoiler has been recognized by fans worldwide for its association with famous actors and the successful film series. While not the flashiest supercar in the franchise, this particular model certainly commands premium prices – confirming its undeniable screen appeal.",
    imageUrl: "https://i.ytimg.com/vi/wMZpZn7tDMU/maxresdefault.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Movie Cars", "Fast & Furious", "Pop Culture", "Collectible", "Supra"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1994"
      },
      {
        title: "Sale Price",
        value: "$550,000"
      },
      {
        title: "Auction Year",
        value: "2021"
      },
      {
        title: "Color",
        value: "Bright Orange"
      },
      {
        title: "Movie",
        value: "Fast & Furious (2001)"
      },
      {
        title: "Special Feature",
        value: "High-mounted rear spoiler"
      }
    ]
  },
  "toyota-tom-86c": {
    id: "toyota-tom-86c",
    title: "1986 Toyota TOM 86C",
    slug: "toyota-tom-86c",
    price: {
      amount: 396150,
      currency: "USD",
      year: 2022
    },
    shortDescription: "Le Mans racing car with top-ten finish history and museum preservation.",
    fullDescription: "The 1986 Toyota TOM 86C fetched an astounding $396,150 at auction in 2022. This remarkable vehicle achieved a top ten finish at the ultra-competitive 24 Hours of Le Mans race, and its condition remains superb even today. The TOM's 86C was kept in exceptional care before the auction – it was displayed in a museum and originally designed for racing events like Le Mans. An absolute marvel in both form and function, this stunning car is capable of outclassing other models within its class if returned to active duty.",
    imageUrl: "https://images.classic.com/vehicles/96c60a821d161752637e9b393494f999bd87b226.jpg?w=1200&h=676&fit=crop",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Racing Cars", "Le Mans", "Competition History", "Museum Piece", "Race Car"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1986"
      },
      {
        title: "Sale Price",
        value: "$396,150"
      },
      {
        title: "Auction Year",
        value: "2022"
      },
      {
        title: "Race History",
        value: "24 Hours of Le Mans"
      },
      {
        title: "Finish",
        value: "Top Ten"
      },
      {
        title: "Preservation",
        value: "Museum Display"
      }
    ]
  },
  "toyota-celica-imsa-gto": {
    id: "toyota-celica-imsa-gto",
    title: "1986 Toyota Celica IMSA GTO",
    slug: "toyota-celica-imsa-gto",
    price: {
      amount: 242000,
      currency: "USD",
      year: 2014
    },
    shortDescription: "Rare racing Celica owned and driven by Chris Cord, the 1987 IMSA Champion.",
    fullDescription: "The 1986 Toyota Celica IMSA GTO sold for a whopping $242,000 in 2014. This impressive automobile has quite a history – it is one of only three cars built between 1986 and 1988 and was owned and driven by Chris Cord, the 1987 IMSA Camel GT Driver's Championship winner. The car participated in a variety of competitions since its inception, which adds even more value to this rare collector's item. With such prestigious racing history, it's no wonder why this racecar can far exceed its original price tags over time.",
    imageUrl: "https://s3.us-east-2.amazonaws.com/prod.mm.com/img/carforsale/IMSAGTOCelicaLead1.jpeg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars"],
    tags: ["Racing Cars", "IMSA", "Competition History", "Celica", "Vintage Race Car"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1986"
      },
      {
        title: "Sale Price",
        value: "$242,000"
      },
      {
        title: "Auction Year",
        value: "2014"
      },
      {
        title: "Famous Owner",
        value: "Chris Cord"
      },
      {
        title: "Total Production",
        value: "3 cars (1986-1988)"
      },
      {
        title: "Championship",
        value: "1987 IMSA Camel GT"
      }
    ]
  },
  "toyota-fj43-land-cruiser": {
    id: "toyota-fj43-land-cruiser",
    title: "1981 Toyota FJ43 Land Cruiser Hardtop",
    slug: "toyota-fj43-land-cruiser",
    price: {
      amount: 179200,
      currency: "USD",
      year: 2021
    },
    shortDescription: "Restored vintage Land Cruiser with modern features and original charm.",
    fullDescription: "The 1981 Toyota FJ43 Land Cruiser Hardtop sold at auction in 2021 for an impressive $179,200. This ruggedly attractive SUV is a perfect blend of vintage style and modern technology, making it a coveted collectible among automobile enthusiasts. The vehicle has been restored to its original condition yet enhanced with contemporary features like its digital dashboard – demonstrating superior craftsmanship by its restorer. Its beefy off-road capabilities also make this luxurious Land Cruiser truly one-of-a-kind and highly sought after by avid adventurers.",
    imageUrl: "https://i.ytimg.com/vi/coXe6qM_vOw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjzMjJ1VJ3Wtv3L9VeBKJ4jeRP5A",
    categoryId: "toyota",
    categoryIds: ["toyota"],
    tags: ["SUVs", "Off-road", "Restored Classic", "Land Cruiser", "Collectible"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    facts: [
      {
        title: "Year",
        value: "1981"
      },
      {
        title: "Sale Price",
        value: "$179,200"
      },
      {
        title: "Auction Year",
        value: "2021"
      },
      {
        title: "Model",
        value: "FJ43 Land Cruiser Hardtop"
      },
      {
        title: "Modern Features",
        value: "Digital Dashboard"
      },
      {
        title: "Capability",
        value: "Off-road"
      }
    ]
  },
  "toyota-tundra-i-force-max-2025": {
    id: "toyota-tundra-i-force-max-2025",
    title: "2025 Toyota Tundra i-FORCE MAX",
    slug: "toyota-tundra-i-force-max-2025",
    price: {
      amount: 58005,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A powerful hybrid pickup truck with impressive torque and towing capabilities.",
    fullDescription: "The 2025 Toyota Tundra i-FORCE MAX features a potent hybrid powertrain combining a twin-turbo V6 engine with an electric motor, generating 437 horsepower and a substantial 583 lb-ft of torque. Paired with a 10-speed automatic transmission, this truck is designed for both strong acceleration and heavy-duty tasks. It offers a maximum towing capacity exceeding 11,000 pounds when properly equipped. Available with features like an electronic transfer case for part-time four-wheel drive, the Tundra i-FORCE MAX is a capable and efficient option in the full-size truck segment.",
    imageUrl: "https://i.ytimg.com/vi/_q3OKe_dvOA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASjMVgViM_Fvo9Asrqtk6TRAu_Lg",     categoryId: "toyota",
    categoryIds: ["toyota", "cars", "truck", "hybrid"],
    tags: ["Truck", "Hybrid", "Full-size", "Towing", "4x4", "Pickup", "Heavy Duty"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Tundra i-FORCE MAX"
      },
      {
        title: "Base Price",
        value: "$58,005"
      },
      {
        title: "Engine",
        value: "i-FORCE MAX Twin-Turbo V6 Hybrid"
      },
      {
        title: "Horsepower",
        value: "437 hp"
      },
      {
        title: "Torque",
        value: "583 lb-ft"
      },
      {
        title: "Transmission",
        value: "10-Speed Automatic"
      },
      {
        title: "Max Towing Capacity",
        value: "Up to 11170 lbs (example based on similar 2024 model)"
      },
      {
        title: "EPA Combined MPG",
        value: "Up to 22 MPG"
      },
      {
        title: "Drive Type",
        value: "Available 4WD"
      },
      {
        title: "Vehicle Type",
        value: "Pickup Truck"
      },
      {
        title: "Payload Capacity",
        value: "Up to 1605 lbs"
      },
       {
        title: "Powertrain Type",
        value: "Hybrid Electric"
      },
       {
        title: "Body Style",
        value: "CrewMax (Common Configuration)"
      }
    ]
  },
  "toyota-tundra-i-force-max-2024": {
    id: "toyota-tundra-i-force-max-2024",
    title: "2024 Toyota Tundra i-FORCE MAX",
    slug: "toyota-tundra-i-force-max-2024",
    price: {
      amount: 57625,
      currency: "USD",
      year: 2024
    },
    shortDescription: "The 2024 hybrid Tundra offers a blend of V6 power, electric torque, and impressive towing capability.",
    fullDescription: "The 2024 Toyota Tundra i-FORCE MAX is equipped with a hybrid powertrain featuring a twin-turbo V6 engine and an electric motor, delivering a combined 437 horsepower and 583 lb-ft of torque. This is paired with a 10-speed automatic transmission. It is known for its strong towing capacity, reaching up to 11,450 pounds when properly configured. Available features include a TRD Off-Road package with specialized suspension and electronic locking rear differential, enhancing its capability on various terrains. The CrewMax cab offers generous rear legroom.",
    imageUrl: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/04/toyota-tundra-i-force-max.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "truck", "hybrid"],
    tags: ["Truck", "Hybrid", "Full-size", "Towing", "4x4", "Pickup", "Off-road Package"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Tundra i-FORCE MAX"
      },
      {
        title: "Base Price",
        value: "$57,625"
      },
      {
        title: "Engine",
        value: "i-FORCE MAX Twin-Turbo V6 Hybrid"
      },
      {
        title: "Horsepower",
        value: "437 hp"
      },
      {
        title: "Torque",
        value: "583 lb-ft"
      },
      {
        title: "Transmission",
        value: "10-Speed Automatic"
      },
      {
        title: "Max Towing Capacity",
        value: "Up to 11450 lbs"
      },
      {
        title: "EPA Combined MPG",
        value: "Up to 22 MPG"
      },
      {
        title: "Drive Type",
        value: "Available 4WD"
      },
      {
        title: "Vehicle Type",
        value: "Pickup Truck"
      },
      {
        title: "Payload Capacity",
        value: "Up to 1680 lbs"
      },
       {
        title: "Cab Options",
        value: "Double Cab, CrewMax"
      },
       {
        title: "Available Package",
        value: "TRD Off-Road Package"
      }
    ]
  },
  "toyota-gr-supra-2026": {
    id: "toyota-gr-supra-2026",
    title: "2026 Toyota GR Supra",
    slug: "toyota-gr-supra-2026",
    price: {
      amount: 56900,
      currency: "USD",
      year: 2026
    },
    shortDescription: "A thrilling two-seat sports car known for its powerful engine and engaging driving dynamics.",
    fullDescription: "The 2026 Toyota GR Supra is a rear-wheel-drive sports car powered by a turbocharged inline-six engine producing 382 horsepower and 368 lb-ft of torque. It is available with both a six-speed manual transmission and an eight-speed automatic. Praised for its agile handling and quick acceleration (0-60 mph in under 4 seconds with the automatic), the GR Supra offers an exciting driving experience. The interior is driver-focused with an 8.8-inch infotainment display. A new MkV Final Edition is introduced for 2026, featuring unique cosmetic and performance tweaks. It's a performance-oriented coupe built for enthusiasts.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr-supra-mkv-final-edition-106-67ed5d3eedce8.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "sports-car", "coupe", "performance"],
    tags: ["Sports Car", "Coupe", "Performance", "RWD", "Turbocharged"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2026"
      },
      {
        title: "Model",
        value: "GR Supra"
      },
      {
        title: "Base Price",
        value: "$56,900"
      },
      {
        title: "Engine",
        value: "3.0L Turbocharged Inline-6"
      },
      {
        title: "Horsepower",
        value: "382 hp"
      },
      {
        title: "Torque",
        value: "368 lb-ft"
      },
      {
        title: "Transmission",
        value: "6-Speed Manual or 8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Rear-Wheel Drive"
      },
      {
        title: "Seating Capacity",
        value: "2"
      },
      {
        title: "0-60 mph (Automatic)",
        value: "3.7 - 3.9 seconds (approx.)"
      },
      {
        title: "Vehicle Type",
        value: "Sports Car / Coupe"
      },
      {
        title: "Notable Editions",
        value: "MkV Final Edition"
      },
       {
        title: "Infotainment Screen Size",
        value: "8.8-inch"
      },
       {
        title: "Curb Weight (Manual)",
        value: "3343 lbs (approx.)"
      }
    ]
  },
  "toyota-land-cruiser-2025": {
    id: "toyota-land-cruiser-2025",
    title: "2025 Toyota Land Cruiser",
    slug: "toyota-land-cruiser-2025",
    price: {
      amount: 56700,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A legendary off-road SUV reborn with a hybrid powertrain and advanced trail capabilities.",
    fullDescription: "The 2025 Toyota Land Cruiser returns with a focus on its off-road heritage, powered by an i-FORCE MAX 2.4-liter 4-cylinder hybrid turbocharged engine producing 326 horsepower and 465 lb-ft of torque. It features a full-time four-wheel-drive system with center and rear locking differentials for exceptional capability on challenging terrain. The Land Cruiser offers seating for up to five passengers and a practical interior with an 8-inch or available 12.3-inch touchscreen. Towing capacity is rated at up to 6,000 pounds. Available features like Multi-Terrain Select and a Multi-Terrain Monitor further enhance its off-road prowess.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-toyota-land-cruiser-133-6616f43f7f474.jpg?crop=0.577xw:0.432xh;0.0789xw,0.361xh&resize=1200:*",    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "off-road", "hybrid"],
    tags: ["SUV", "Off-road", "4x4", "Hybrid", "Trail Rated", "Mid-size SUV"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Land Cruiser"
      },
      {
        title: "Base Price",
        value: "$56,700"
      },
      {
        title: "Engine",
        value: "i-FORCE MAX 2.4L Turbo 4-Cylinder Hybrid"
      },
      {
        title: "Horsepower",
        value: "326 hp"
      },
      {
        title: "Torque",
        value: "465 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Full-Time 4WD"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "Max Towing Capacity",
        value: "6000 lbs"
      },
      {
        title: "EPA Combined MPG",
        value: "23 MPG"
      },
      {
        title: "Off-road Features",
        value: "Center and Rear Locking Differentials, Multi-Terrain Select"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
       {
        title: "Ground Clearance",
        value: "8.3 inches"
      },
       {
        title: "Approach Angle",
        value: "31.0 degrees"
      },
       {
        title: "Departure Angle",
        value: "17.0 degrees"
      }
    ]
  },
    "toyota-gr-supra-2025": {
    id: "toyota-gr-supra-2025",
    title: "2025 Toyota GR Supra",
    slug: "toyota-gr-supra-2025",
    price: {
      amount: 56250,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A two-seat sports coupe offering potent turbocharged performance and agile handling.",
    fullDescription: "The 2025 Toyota GR Supra continues its legacy as a focused sports car. It is powered by a turbocharged 3.0-liter inline-six engine that delivers 382 horsepower and 368 lb-ft of torque. Buyers can choose between a 6-speed manual or 8-speed automatic transmission, both sending power to the rear wheels. Known for its sharp handling and quick acceleration (0-60 mph in under 4 seconds with the automatic), the GR Supra is built for driving enthusiasts. Standard features include an 8.8-inch touchscreen and Toyota Safety Sense 2.5. The 2.0L model has been discontinued for 2025, streamlining the lineup to the more powerful 3.0 and 3.0 Premium grades.",
    imageUrl: "https://media.ed.edmunds-media.com/toyota/gr-supra/2025/oem/2025_toyota_gr-supra_coupe_30-premium_fq_oem_1_1600.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "sports-car", "coupe", "performance"],
    tags: ["Sports Car", "Coupe", "Performance", "RWD", "Turbocharged", "Manual Transmission"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "GR Supra"
      },
      {
        title: "Base Price",
        value: "$56,250"
      },
      {
        title: "Engine",
        value: "3.0L Turbocharged Inline-6"
      },
      {
        title: "Horsepower",
        value: "382 hp"
      },
      {
        title: "Torque",
        value: "368 lb-ft"
      },
      {
        title: "Transmission",
        value: "6-Speed Manual or 8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Rear-Wheel Drive"
      },
      {
        title: "Seating Capacity",
        value: "2"
      },
      {
        title: "0-60 mph (Automatic)",
        value: "Approx. 3.9 seconds"
      },
      {
        title: "Vehicle Type",
        value: "Sports Car / Coupe"
      },
      {
        title: "Infotainment Screen Size",
        value: "8.8-inch"
      },
      {
        title: "Base Trims",
        value: "3.0, 3.0 Premium"
      }
    ]
  },
  "toyota-land-cruiser-2024": {
    id: "toyota-land-cruiser-2024",
    title: "2024 Toyota Land Cruiser",
    slug: "toyota-land-cruiser-2024",
    price: {
      amount: 55950,
      currency: "USD",
      year: 2024
    },
    shortDescription: "The returning Land Cruiser for 2024 focuses on off-road capability with a new hybrid powertrain.",
    fullDescription: "The 2024 Toyota Land Cruiser marks the return of this iconic off-road SUV, featuring a standard i-FORCE MAX 2.4-liter turbocharged hybrid powertrain that produces 326 horsepower and 465 lb-ft of torque. Equipped with full-time four-wheel drive, a 2-speed transfer case, and locking center and rear differentials, it is engineered for challenging trails. The interior offers seating for five and is available with an 8-inch or 12.3-inch touchscreen display. With a towing capacity of up to 6,000 pounds and features like Multi-Terrain Select, the 2024 Land Cruiser is a capable and rugged adventure vehicle.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-toyota-land-cruiser-154-6695616707200.jpg?crop=0.772xw:0.579xh;0.133xw,0.325xh&resize=1200:*",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "off-road", "hybrid"],
    tags: ["SUV", "Off-road", "4x4", "Hybrid", "Legendary", "Adventure Vehicle"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Land Cruiser"
      },
      {
        title: "Base Price",
        value: "$55,950"
      },
      {
        title: "Engine",
        value: "i-FORCE MAX 2.4L Turbo 4-Cylinder Hybrid"
      },
      {
        title: "Horsepower",
        value: "326 hp"
      },
      {
        title: "Torque",
        value: "465 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Full-Time 4WD"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "Max Towing Capacity",
        value: "6000 lbs"
      },
      {
        title: "EPA Combined MPG",
        value: "23 MPG"
      },
      {
        title: "Off-road Features",
        value: "Center and Rear Locking Differentials, Multi-Terrain Select"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      }
    ]
  },
  "toyota-4runner-i-force-max-2025": {
    id: "toyota-4runner-i-force-max-2025",
    title: "2025 Toyota 4Runner i-FORCE MAX",
    slug: "toyota-4runner-i-force-max-2025",
    price: {
      amount: 51990,
      currency: "USD",
      year: 2025
    },
    shortDescription: "The redesigned 2025 4Runner offers increased power and capability with its new hybrid powertrain.",
    fullDescription: "The 2025 Toyota 4Runner introduces a significant redesign, featuring the available i-FORCE MAX hybrid powertrain. This system pairs a 2.4-liter turbocharged inline-4 engine with an electric motor, producing 326 horsepower and 465 lb-ft of torque. It utilizes an 8-speed automatic transmission and is available with part-time 4WD and advanced off-road technologies like a Stabilizer Disconnect Mechanism (SDM) on select trims. The 4Runner retains its body-on-frame construction and features a power rear window. It offers seating for up to seven passengers with the available third row and has a maximum towing capacity of 6,000 pounds. The new generation brings enhanced power and modern features while maintaining its rugged identity.",
    imageUrl: "https://www.motortrend.com/files/6615744bce855900082f2a37/038-2025-toyota-4runner-trd-pro-front-three-qaurters.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "off-road", "hybrid"],
    tags: ["SUV", "Off-road", "4x4", "Hybrid", "Rugged", "Redesigned"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "4Runner i-FORCE MAX"
      },
      {
        title: "Base Price",
        value: "$51,990"
      },
      {
        title: "Powertrain",
        value: "i-FORCE MAX 2.4L Turbo 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "326 hp"
      },
      {
        title: "Combined Torque",
        value: "465 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Available Part-Time 4WD"
      },
      {
        title: "Seating Capacity",
        value: "5 or 7 (Available 3rd Row)"
      },
      {
        title: "Max Towing Capacity",
        value: "6000 lbs"
      },
      {
        title: "Chassis",
        value: "Body-on-Frame (TNGA-F platform)"
      },
      {
        title: "Notable Feature",
        value: "Power Rear Window"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      }
    ]
  },
  "toyota-mirai-2025": {
    id: "toyota-mirai-2025",
    title: "2025 Toyota Mirai",
    slug: "toyota-mirai-2025",
    price: {
      amount: 51795,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A hydrogen fuel cell electric vehicle offering zero-emission driving and a long range.",
    fullDescription: "The 2025 Toyota Mirai is a hydrogen fuel cell electric vehicle (FCEV) that produces electricity from a reaction between hydrogen and oxygen, emitting only water vapor. Its electric motor delivers 182 horsepower and 221 lb-ft of torque to the rear wheels. The Mirai offers a long EPA-estimated range, making it a compelling zero-emission option where hydrogen fueling infrastructure is available. It features a comfortable interior with a 12.3-inch touchscreen and a suite of standard safety features under Toyota Safety Sense 3.0. The 2025 model is primarily available in the well-equipped XLE trim.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-mirai-102-67584beb43245.jpg?crop=0.499xw:0.441xh;0.107xw,0.392xh&resize=980:*", 
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "fcev", "sedan", "electric"],
    tags: ["Fuel Cell", "Hydrogen", "Zero Emission", "EV", "Sedan"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Mirai"
      },
      {
        title: "Base Price",
        value: "$51,795"
      },
      {
        title: "Powertrain Type",
        value: "Hydrogen Fuel Cell Electric Vehicle (FCEV)"
      },
      {
        title: "Horsepower",
        value: "182 hp"
      },
      {
        title: "Torque",
        value: "221 lb-ft"
      },
      {
        title: "Drive Type",
        value: "Rear-Wheel Drive"
      },
      {
        title: "Emissions",
        value: "Water Vapor"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "EPA Estimated Range",
        value: "Up to 402 miles (XLE Trim)"
      },
      {
        title: "Vehicle Type",
        value: "Sedan"
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch"
      },
       {
        title: "Standard Safety Suite",
        value: "Toyota Safety Sense 3.0"
      }
    ]
  },
  "toyota-mirai-2024": {
    id: "toyota-mirai-2024",
    title: "2024 Toyota Mirai",
    slug: "toyota-mirai-2024",
    price: {
      amount: 50190,
      currency: "USD",
      year: 2024
    },
    shortDescription: "The 2024 Mirai is a stylish hydrogen FCEV with a comfortable ride and notable range.",
    fullDescription: "The 2024 Toyota Mirai is a hydrogen fuel cell electric vehicle (FCEV) powered by an electric motor producing 182 horsepower and 221 lb-ft of torque. It operates on hydrogen, emitting only water. With an EPA-estimated range of up to 402 miles for the XLE trim, it provides a long driving range for a zero-emission vehicle. The interior is well-appointed with a 12.3-inch touchscreen infotainment system and a standard suite of safety features (Toyota Safety Sense). Available in XLE and Limited trims, the Mirai offers a smooth and quiet driving experience, representing a step towards a hydrogen-based future.",
    imageUrl: "https://media.ed.edmunds-media.com/toyota/mirai/2024/oem/2024_toyota_mirai_sedan_limited_fq_oem_1_1600.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "fcev", "sedan", "electric"],
    tags: ["Fuel Cell", "Hydrogen", "Zero Emission", "EV", "Sedan"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Mirai"
      },
      {
        title: "Base Price",
        value: "$50,190"
      },
      {
        title: "Powertrain Type",
        value: "Hydrogen Fuel Cell Electric Vehicle (FCEV)"
      },
      {
        title: "Horsepower",
        value: "182 hp"
      },
      {
        title: "Torque",
        value: "221 lb-ft"
      },
      {
        title: "Drive Type",
        value: "Rear-Wheel Drive"
      },
      {
        title: "Byproduct",
        value: "Water"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "EPA Estimated Range (XLE)",
        value: "Up to 402 miles"
      },
      {
        title: "Vehicle Type",
        value: "Sedan"
      },
       {
        title: "Infotainment Screen",
        value: "12.3-inch Touchscreen"
      },
       {
        title: "Available Trims",
        value: "XLE, Limited"
      }
    ]
  },
    "toyota-highlander-hybrid-2025": {
    id: "toyota-highlander-hybrid-2025",
    title: "2025 Toyota Highlander Hybrid",
    slug: "toyota-highlander-hybrid-2025",
    price: {
      amount: 46320,
      currency: "USD",
      year: 2025
    },
    shortDescription: "An efficient three-row hybrid SUV offering a comfortable ride and ample features.",
    fullDescription: "The 2025 Toyota Highlander Hybrid is a practical and fuel-efficient three-row SUV. It features a hybrid powertrain combining a 2.5-liter four-cylinder engine with electric motors to produce a combined 243 horsepower. Paired with a continuously variable automatic transmission (CVT) and standard all-wheel drive, it achieves an impressive EPA-estimated 35 MPG combined. The interior offers seating for up to eight passengers (depending on configuration) with a focus on comfort and practicality. Available features include a 12.3-inch infotainment display and a suite of safety features. While the third row is noted as being tighter than some rivals, the Highlander Hybrid excels as a comfortable and economical family vehicle.",
    imageUrl: "https://media.ed.edmunds-media.com/toyota/highlander-hybrid/2025/oem/2025_toyota_highlander-hybrid_4dr-suv_limited-25th-edition_fq_oem_1_1600.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "hybrid", "family-vehicle"],
    tags: ["SUV", "Hybrid", "Three-row", "Family Car", "Fuel Efficient", "AWD", "Mid-size SUV"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Highlander Hybrid"
      },
      {
        title: "Base Price",
        value: "$46,320"
      },
      {
        title: "Powertrain",
        value: "2.5L 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "243 hp"
      },
      {
        title: "Transmission",
        value: "CVT Automatic"
      },
      {
        title: "Drive Type",
        value: "All-Wheel Drive"
      },
      {
        title: "Seating Capacity",
        value: "Up to 8"
      },
      {
        title: "EPA Combined MPG",
        value: "35 MPG"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
      {
        title: "Max Towing Capacity",
        value: "3500 lbs"
      },
      {
        title: "Cargo Capacity (behind 3rd row)",
        value: "16.0 cu.ft."
      },
       {
        title: "Assembly Location",
        value: "United States"
      },
       {
        title: "Passenger Volume",
        value: "155.5 cu.ft."
      }
    ]
  },
  "toyota-tacoma-i-force-max-2025": {
    id: "toyota-tacoma-i-force-max-2025",
    title: "2025 Toyota Tacoma i-FORCE MAX",
    slug: "toyota-tacoma-i-force-max-2025",
    price: {
      amount: 46320,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A powerful hybrid mid-size pickup truck ready for both work and off-road adventures.",
    fullDescription: "The 2025 Toyota Tacoma i-FORCE MAX is a key part of the redesigned Tacoma lineup, featuring a potent hybrid powertrain. This system combines a 2.4-liter turbocharged inline-4 engine with an electric motor, producing a combined 326 horsepower and a significant 465 lb-ft of torque. It is paired with an 8-speed automatic transmission. This hybrid variant is designed to offer both impressive power and enhanced fuel efficiency compared to non-hybrid models, while maintaining the Tacoma's renowned capability. Available with various cab and bed configurations and advanced off-road features on TRD trims, the i-FORCE MAX is a versatile and capable mid-size truck.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-toyota-tacoma-double-cab-4x4-manual-101-6705491f799df.jpg?crop=0.905xw:0.764xh;0.0865xw,0.147xh&resize=2048:*",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "truck", "hybrid", "off-road"],
    tags: ["Truck", "Pickup Truck", "Hybrid", "Mid-size Truck"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Tacoma i-FORCE MAX"
      },
      {
        title: "Base Price",
        value: "$46,320"
      },
      {
        title: "Powertrain",
        value: "i-FORCE MAX 2.4L Turbo 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "326 hp"
      },
      {
        title: "Combined Torque",
        value: "465 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Available 4WD"
      },
      {
        title: "Max Towing Capacity",
        value: "Up to 6000 lbs"
      },
      {
        title: "Payload Capacity",
        value: "Up to 1620 lbs"
      },
      {
        title: "Vehicle Type",
        value: "Pickup Truck"
      },
      {
        title: "Cab Options",
        value: "Double Cab, XtraCab"
      },
      {
        title: "Generation",
        value: "Fourth Generation"
      },
       {
        title: "Battery Type",
        value: "Nickel-Metal Hydride (Ni-MH)"
      }
    ]
  },
  "toyota-tacoma-i-force-max-2024": {
    id: "toyota-tacoma-i-force-max-2024",
    title: "2024 Toyota Tacoma i-FORCE MAX",
    slug: "toyota-tacoma-i-force-max-2024",
    price: {
      amount: 46300,
      currency: "USD",
      year: 2024
    },
    shortDescription: "Part of the all-new 2024 Tacoma lineup, featuring the powerful i-FORCE MAX hybrid system.",
    fullDescription: "The 2024 Toyota Tacoma was fully redesigned, and the i-FORCE MAX variant represents the most powerful option in the lineup. It utilizes a 2.4-liter turbocharged inline-4 engine paired with an electric motor, generating a combined 326 horsepower and 465 lb-ft of torque, sent through an 8-speed automatic transmission. This hybrid model is available with features that enhance its off-road capability, building on the Tacoma's strong reputation. With a maximum towing capacity of up to 6,000 pounds, the 2024 i-FORCE MAX Tacoma is a capable and modern mid-size truck designed for a variety of uses.",
    imageUrl: "https://di-uploads-pod7.dealerinspire.com/toyotachulavista/uploads/2024/07/2024-Toyota-Tacoma-Hill.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "truck", "hybrid", "off-road"],
    tags: ["Truck", "Pickup Truck", "Hybrid", "Mid-size Truck"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Tacoma i-FORCE MAX"
      },
      {
        title: "Base Price",
        value: "$46,300"
      },
      {
        title: "Powertrain",
        value: "i-FORCE MAX 2.4L Turbo 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "326 hp"
      },
      {
        title: "Combined Torque",
        value: "465 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Available 4WD"
      },
      {
        title: "Max Towing Capacity",
        value: "Up to 6000 lbs"
      },
      {
        title: "Payload Capacity",
        value: "Up to 1705 lbs"
      },
      {
        title: "Vehicle Type",
        value: "Pickup Truck"
      },
      {
        title: "Redesign Year",
        value: "2024"
      },
      {
        title: "Key Feature",
        value: "Available TRD Off-Road Features"
      },
      {
        title: "Frame",
        value: "TNGA-F Body-on-Frame"
      }
    ]
  },
  "toyota-grand-highlander-hybrid-2024": {
    id: "toyota-grand-highlander-hybrid-2024",
    title: "2024 Toyota Grand Highlander Hybrid",
    slug: "toyota-grand-highlander-hybrid-2024",
    price: {
      amount: 45020,
      currency: "USD",
      year: 2024
    },
    shortDescription: "A spacious and fuel-efficient three-row hybrid SUV designed for larger families.",
    fullDescription: "The 2024 Toyota Grand Highlander Hybrid is a larger, more family-focused version of the Highlander, offering more passenger and cargo space, especially in the third row. The standard hybrid powertrain combines a 2.5-liter four-cylinder engine with electric motors for a total of 245 horsepower, achieving an EPA-estimated 34 MPG combined with AWD. A more powerful Hybrid MAX option is also available. The Grand Highlander Hybrid provides comfortable seating for up to eight and features a practical interior with ample storage and a standard 12.3-inch infotainment display. It's a strong contender for those needing a fuel-efficient and roomy three-row SUV.",
    imageUrl: "https://media.ed.edmunds-media.com/toyota/grand-highlander-hybrid/2024/oem/2024_toyota_grand-highlander-hybrid_4dr-suv_max-limited_fq_oem_1_1280.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "hybrid", "family-vehicle"],
    tags: ["SUV", "Hybrid", "Three-row", "Family Car", "Spacious"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Grand Highlander Hybrid"
      },
      {
        title: "Base Price",
        value: "$45,020"
      },
      {
        title: "Standard Hybrid Powertrain",
        value: "2.5L 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "245 hp"
      },
      {
        title: "Transmission",
        value: "CVT Automatic"
      },
      {
        title: "Drive Type",
        value: "Available AWD"
      },
      {
        title: "Seating Capacity",
        value: "Up to 8"
      },
      {
        title: "EPA Combined MPG (AWD)",
        value: "34 MPG"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
      {
        title: "Max Towing Capacity",
        value: "3500 lbs"
      },
      {
        title: "Cargo Capacity (behind 3rd row)",
        value: "20.6 cu.ft."
      },
       {
        title: "Infotainment Screen Size",
        value: "12.3-inch (Standard)"
      }
    ]
  },
  "toyota-rav4-plug-in-hybrid-2025": {
    id: "toyota-rav4-plug-in-hybrid-2025",
    title: "2025 Toyota RAV4 Plug-in Hybrid",
    slug: "toyota-rav4-plug-in-hybrid-2025",
    price: {
      amount: 44265,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A powerful and fuel-efficient plug-in hybrid compact SUV with notable electric range.",
    fullDescription: "The 2025 Toyota RAV4 Plug-in Hybrid, formerly known as the RAV4 Prime, is a highly efficient and capable compact SUV. It features a plug-in hybrid powertrain combining a 2.5-liter four-cylinder engine with electric motors to produce a total system output of 302 horsepower, making it the most powerful RAV4. It offers an impressive EPA-estimated all-electric range, allowing for electric-only commuting. With standard electronic all-wheel drive, a comfortable interior, and a suite of safety features, the RAV4 Plug-in Hybrid provides a blend of performance, fuel economy, and practicality. Charging is relatively quick with a 6.6kW charger.",
    imageUrl: "https://media.ed.edmunds-media.com/toyota/rav4-plug-in-hybrid/2025/oem/2025_toyota_rav4-plug-in-hybrid_4dr-suv_xse_fq_oem_1_1600.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "hybrid", "phev", "electric"],
    tags: ["SUV", "Plug-in Hybrid", "PHEV", "Hybrid", "Compact SUV", "AWD"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "RAV4 Plug-in Hybrid"
      },
      {
        title: "Base Price",
        value: "$44,265"
      },
      {
        title: "Powertrain Type",
        value: "Plug-in Hybrid (PHEV)"
      },
      {
        title: "Combined Horsepower",
        value: "302 hp"
      },
      {
        title: "Engine",
        value: "2.5L 4-Cylinder"
      },
      {
        title: "Drive Type",
        value: "Electronic All-Wheel Drive (eAWD)"
      },
      {
        title: "EPA Estimated Electric Range",
        value: "Approx. 42 miles"
      },
      {
        title: "Vehicle Type",
        value: "Compact SUV"
      },
      {
        title: "Transmission",
        value: "CVT Automatic"
      },
      {
        title: "Battery Capacity",
        value: "Approx. 18.1 kWh"
      },
      {
        title: "Charger Size",
        value: "6.6 kW (Standard)"
      },
      {
        title: "Previous Name",
        value: "RAV4 Prime"
      },
       {
        title: "0-60 mph",
        value: "Approx. 5.7 seconds"
      },
       {
        title: "Total Range",
        value: "Approx. 600 miles"
      }
    ]
  },
    "toyota-grand-highlander-hybrid-2025": {
    id: "toyota-grand-highlander-hybrid-2025",
    title: "2025 Toyota Grand Highlander Hybrid",
    slug: "toyota-grand-highlander-hybrid-2025",
    price: {
      amount: 44210,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A large and fuel-efficient three-row hybrid SUV with a focus on passenger and cargo space.",
    fullDescription: "The 2025 Toyota Grand Highlander Hybrid is designed to provide generous space for families, offering three rows of seating that can comfortably accommodate adults, and substantial cargo volume. It is powered by a hybrid system featuring a 2.5-liter four-cylinder engine, delivering a combined 245 horsepower. With a continuously variable transmission and available all-wheel drive, it offers a balance of performance and impressive fuel economy. The interior is equipped with modern features, including a large infotainment touchscreen, contributing to a comfortable and connected ride for all occupants.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-grand-highlander-hybrid-1-672922388edba.jpg?crop=0.764xw:0.647xh;0.236xw,0.336xh&resize=2048:*",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "hybrid", "family-vehicle"],
    tags: ["SUV", "Hybrid", "Three-row", "Family Car"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Grand Highlander Hybrid"
      },
      {
        title: "Base Price",
        value: "$44,210"
      },
      {
        title: "Standard Hybrid Powertrain",
        value: "2.5L 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "245 hp"
      },
      {
        title: "Transmission",
        value: "CVT Automatic"
      },
      {
        title: "Drive Type",
        value: "Available AWD"
      },
      {
        title: "Seating Capacity",
        value: "Up to 8"
      },
      {
        title: "EPA Estimated Combined MPG (AWD)",
        value: "34 MPG (Based on 2024, likely similar for 2025)"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
      {
        title: "Cargo Capacity (behind 3rd row)",
        value: "20.6 cu.ft."
      },
      {
        title: "Third Row Legroom",
        value: "33.5 inches"
      },
      {
        title: "Assembly Location",
        value: "United States"
      }
    ]
  },
  "toyota-crown-signia-2025": {
    id: "toyota-crown-signia-2025",
    title: "2025 Toyota Crown Signia",
    slug: "toyota-crown-signia-2025",
    price: {
      amount: 43790,
      currency: "USD",
      year: 2025
    },
    shortDescription: "An all-new stylish and versatile hybrid SUV with a focus on premium comfort and ample cargo space.",
    fullDescription: "The 2025 Toyota Crown Signia is a new addition to the Crown lineup, presented as a hybrid SUV with distinctive wagon-like styling. It is powered by a 2.5-liter four-cylinder hybrid system producing 240 net combined horsepower, paired with a CVT and standard electronic on-demand all-wheel drive. The interior is designed for comfort and versatility, offering seating for five and a generous cargo area with the second-row seats folded flat. It features a premium cabin with modern technology, including a 12.3-inch infotainment system. The Crown Signia aims to blend sophisticated design with the practicality of an SUV.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-crown-signia-102-661fe11678096.jpg?crop=0.696xw:0.588xh;0.211xw,0.280xh&resize=1200:*",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "hybrid", "wagon"],
    tags: ["SUV", "Hybrid", "Crossover", "Premium", "AWD", "Stylish"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Crown Signia"
      },
      {
        title: "Base Price",
        value: "$43,790"
      },
      {
        title: "Powertrain",
        value: "2.5L 4-Cylinder Hybrid System"
      },
      {
        title: "Combined Horsepower",
        value: "240 hp"
      },
      {
        title: "Transmission",
        value: "CVT Automatic"
      },
      {
        title: "Drive Type",
        value: "Standard Electronic AWD"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "EPA Estimated Combined MPG",
        value: "38 MPG"
      },
      {
        title: "Vehicle Type",
        value: "SUV / Wagon"
      },
      {
        title: "Max Cargo Capacity (seats folded)",
        value: "68.8 cu.ft."
      },
      {
        title: "Max Towing Capacity",
        value: "2700 lbs"
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch"
      }
    ]
  },
  "toyota-grand-highlander-2024": {
    id: "toyota-grand-highlander-2024",
    title: "2024 Toyota Grand Highlander",
    slug: "toyota-grand-highlander-2024",
    price: {
      amount: 43320,
      currency: "USD",
      year: 2024
    },
    shortDescription: "A spacious three-row SUV designed for comfort and practicality for the whole family.",
    fullDescription: "The 2024 Toyota Grand Highlander is a spacious three-row SUV that prioritizes passenger comfort, particularly in the third row, and offers substantial cargo volume. The base engine is a 2.4-liter turbocharged four-cylinder producing 265 horsepower and 310 lb-ft of torque, paired with an 8-speed automatic transmission. It is available with both front-wheel drive and all-wheel drive. The interior features a standard 12.3-inch infotainment touchscreen and ample storage options throughout the cabin. The Grand Highlander is designed to be a comfortable and versatile family hauler, slotting in size between the standard Highlander and the Sequoia.",
    imageUrl: "https://di-uploads-pod44.dealerinspire.com/nyetoyota/uploads/2023/07/2024-Toyota-Grand-Highlander-Hybrid-Max-Platinum_KL_6-1.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "family-vehicle"],
    tags: ["SUV", "Three-row", "Family Car", "Spacious", "Turbocharged"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Grand Highlander"
      },
      {
        title: "Base Price",
        value: "$43,320"
      },
      {
        title: "Base Engine",
        value: "2.4L Turbo 4-Cylinder"
      },
      {
        title: "Horsepower",
        value: "265 hp"
      },
      {
        title: "Torque",
        value: "310 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Available AWD"
      },
      {
        title: "Seating Capacity",
        value: "Up to 8"
      },
      {
        title: "EPA Estimated Combined MPG (FWD)",
        value: "24 MPG"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
      {
        title: "Cargo Capacity (behind 3rd row)",
        value: "20.6 cu.ft."
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch (Standard)"
      }
    ]
  },
  "toyota-bz4x-2024": {
    id: "toyota-bz4x-2024",
    title: "2024 Toyota bZ4X",
    slug: "toyota-bz4x-2024",
    price: {
      amount: 43070,
      currency: "USD",
      year: 2024
    },
    shortDescription: "Toyota's all-electric compact SUV offering zero-emission driving and notable range.",
    fullDescription: "The 2024 Toyota bZ4X is a key part of Toyota's electric vehicle push. This all-electric compact SUV is available with front-wheel drive (201 hp) or all-wheel drive (214 hp). It features a lithium-ion battery pack providing an EPA-estimated range of up to 252 miles (FWD). The bZ4X offers a comfortable ride and a modern interior with a 12.3-inch touchscreen infotainment system and a 7-inch digital gauge cluster. While DC fast-charging speeds are not class-leading, the bZ4X provides a practical and reliable option for those seeking a zero-emission SUV with Toyota's reputation for durability.",
    imageUrl: "https://bucket.dealervenom.com/2024/08/7NizY7H2-2024-toyota-bz4x.jpg?auto=compress%2Cformat&ixlib=php-3.3.1",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "ev", "suv", "electric"],
    tags: ["EV", "Electric Vehicle", "SUV", "Zero Emission", "Compact SUV"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "bZ4X"
      },
      {
        title: "Base Price",
        value: "$43,070"
      },
      {
        title: "Powertrain Type",
        value: "Battery Electric Vehicle (BEV)"
      },
      {
        title: "Base Horsepower (FWD)",
        value: "201 hp"
      },
       {
        title: "Horsepower (AWD)",
        value: "214 hp"
      },
      {
        title: "Drive Type",
        value: "Available AWD"
      },
      {
        title: "EPA Estimated Range (FWD)",
        value: "Up to 252 miles"
      },
      {
        title: "Vehicle Type",
        value: "Compact SUV"
      },
      {
        title: "Battery Capacity",
        value: "71.4 kWh (FWD), 72.8 kWh (AWD)"
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch"
      },
      {
        title: "Charging Port",
        value: "SAE J1772/CCS1"
      },
       {
        title: "Seating Capacity",
        value: "5"
      }
    ]
  },
  "toyota-crown-2025": {
    id: "toyota-crown-2025",
    title: "2025 Toyota Crown",
    slug: "toyota-crown-2025",
    price: {
      amount: 41440,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A unique elevated sedan offering hybrid powertrains, standard AWD, and a premium interior.",
    fullDescription: "The 2025 Toyota Crown is a distinctive vehicle that blends sedan and SUV characteristics with its elevated ride height. It comes standard with a hybrid powertrain consisting of a 2.5-liter four-cylinder engine and electric motors, producing 236 net combined horsepower and paired with a CVT and standard all-wheel drive. A more powerful Hybrid MAX turbocharged hybrid powertrain is available on higher trims. The interior offers a premium feel with comfortable seating for five and features like dual 12.3-inch displays for infotainment and the digital gauge cluster. The Crown provides a smooth ride and comes with a comprehensive suite of safety features.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-crown-signia-102-661fe11678096.jpg?crop=0.696xw:0.588xh;0.211xw,0.280xh&resize=1200:*",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "sedan", "hybrid", "awd"],
    tags: ["Sedan", "Hybrid", "AWD", "Premium", "Elevated Sedan"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Crown"
      },
      {
        title: "Base Price",
        value: "$41,440"
      },
      {
        title: "Standard Hybrid Powertrain",
        value: "2.5L 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower",
        value: "236 hp"
      },
      {
        title: "Transmission",
        value: "CVT Automatic"
      },
      {
        title: "Drive Type",
        value: "Standard AWD"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "EPA Estimated Combined MPG",
        value: "41 MPG"
      },
      {
        title: "Vehicle Type",
        value: "Sedan / Elevated Sedan"
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch"
      },
      {
        title: "Digital Gauge Cluster Size",
        value: "12.3-inch"
      },
       {
        title: "Available Powertrain",
        value: "Hybrid MAX (340 hp)"
      }
    ]
  },
    "toyota-crown-2026": {
    id: "toyota-crown-2026",
    title: "2026 Toyota Crown",
    slug: "toyota-crown-2026",
    price: {
      amount: 41440,
      currency: "USD",
      year: 2026
    },
    shortDescription: "An elevated sedan challenging traditional styling with hybrid power and standard AWD.",
    fullDescription: "The 2026 Toyota Crown is a distinctive vehicle featuring a raised ride height that blurs the lines between sedan and SUV. It comes standard with a hybrid powertrain, offering a base setup with a 2.5-liter four-cylinder engine and electric motors producing 236 horsepower, paired with a CVT. A more powerful Hybrid MAX turbocharged hybrid is available with 340 horsepower and a 6-speed automatic. All-wheel drive is standard across the lineup. The interior is premium with available dual 12.3-inch displays and a focus on comfort. The Crown provides a smooth ride and is equipped with a comprehensive suite of safety features.",
    imageUrl: "https://i.ytimg.com/vi/DZe0ZPmLzyE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARqsgy9e2RWBXSWbWVsuU7gbRQoQ", 
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "sedan", "hybrid", "awd"],
    tags: ["Sedan", "Hybrid", "AWD", "Premium", "Elevated Sedan"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2026"
      },
      {
        title: "Model",
        value: "Crown"
      },
      {
        title: "Base Price",
        value: "$41,440 (Estimated based on 2025)"
      },
      {
        title: "Standard Powertrain",
        value: "2.5L 4-Cylinder Hybrid"
      },
      {
        title: "Combined Horsepower (Base)",
        value: "236 hp"
      },
      {
        title: "Transmission",
        value: "CVT Automatic (Base), 6-Speed Automatic (Hybrid MAX)"
      },
      {
        title: "Drive Type",
        value: "Standard AWD"
      },
      {
        title: "Seating Capacity",
        value: "5"
      },
      {
        title: "EPA Estimated Combined MPG (Base)",
        value: "41 MPG (Based on 2025)"
      },
      {
        title: "Vehicle Type",
        value: "Sedan / Elevated Sedan"
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch"
      },
      {
        title: "Digital Gauge Cluster Size",
        value: "12.3-inch"
      },
      {
        title: "Available Powertrain",
        value: "Hybrid MAX (340 hp)"
      }
    ]
  },
  "toyota-grand-highlander-2025": {
    id: "toyota-grand-highlander-2025",
    title: "2025 Toyota Grand Highlander",
    slug: "toyota-grand-highlander-2025",
    price: {
      amount: 40860,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A spacious non-hybrid three-row SUV with ample room for passengers and cargo.",
    fullDescription: "The 2025 Toyota Grand Highlander is a large three-row SUV designed for families needing maximum space without a hybrid powertrain. It features a base 2.4-liter turbocharged four-cylinder engine producing 265 horsepower and 310 lb-ft of torque, paired with an 8-speed automatic transmission. Front-wheel drive is standard, with all-wheel drive available. The cabin offers comfortable seating for up to eight passengers and a generous cargo area. Equipped with a standard 12.3-inch infotainment touchscreen and a suite of safety features, the Grand Highlander provides a comfortable and practical experience for daily driving and road trips.",
    imageUrl: "https://media.ed.edmunds-media.com/toyota/grand-highlander-hybrid/2025/oem/2025_toyota_grand-highlander-hybrid_4dr-suv_max-limited_fq_oem_1_1600.jpg", 
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "family-vehicle"],
    tags: ["SUV", "Three-row", "Family Car", "Spacious", "Turbocharged"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Grand Highlander"
      },
      {
        title: "Base Price",
        value: "$40,860"
      },
      {
        title: "Base Engine",
        value: "2.4L Turbo 4-Cylinder"
      },
      {
        title: "Horsepower",
        value: "265 hp"
      },
      {
        title: "Torque",
        value: "310 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "Available AWD"
      },
      {
        title: "Seating Capacity",
        value: "Up to 8"
      },
      {
        title: "EPA Estimated Combined MPG (FWD)",
        value: "24 MPG (Based on 2024)"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
      {
        title: "Cargo Capacity (behind 3rd row)",
        value: "20.6 cu.ft."
      },
      {
        title: "Infotainment Screen Size",
        value: "12.3-inch (Standard)"
      },
      {
        title: "Added Trim for 2025",
        value: "New entry-level LE trim"
      }
    ]
  },
  "toyota-4runner-2025": {
    id: "toyota-4runner-2025",
    title: "2025 Toyota 4Runner",
    slug: "toyota-4runner-2025",
    price: {
      amount: 40770,
      currency: "USD",
      year: 2025
    },
    shortDescription: "The redesigned 2025 4Runner retains its rugged capability with a new turbocharged base engine.",
    fullDescription: "The 2025 Toyota 4Runner marks the introduction of the sixth generation, featuring a significant redesign. The standard engine is a 2.4-liter turbocharged four-cylinder delivering 278 horsepower and 317 lb-ft of torque, paired with an 8-speed automatic transmission. Rear-wheel drive is standard, with various part-time and full-time four-wheel drive systems available. While a hybrid i-FORCE MAX is offered (reviewed separately), the non-hybrid 4Runner maintains its body-on-frame construction and off-road prowess. The interior is modernized with available larger touchscreens and updated tech, and an optional third row provides seating for up to seven, though it's snug for adults. The power rear window remains a signature feature.",
    imageUrl: "https://www.edmunds.com/assets/m/cs/blt3ae7b966c6aaf3db/661586496741ebe64ca1deba/2025_Toyota_4Runner_001_1600.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "suv", "off-road"],
    tags: ["SUV", "Off-road", "4x4", "Rugged", "Redesigned", "Mid-size SUV"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "4Runner"
      },
      {
        title: "Base Price",
        value: "$40,770"
      },
      {
        title: "Base Engine",
        value: "2.4L Turbo 4-Cylinder (i-FORCE)"
      },
      {
        title: "Horsepower",
        value: "278 hp"
      },
      {
        title: "Torque",
        value: "317 lb-ft"
      },
      {
        title: "Transmission",
        value: "8-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "RWD or Available 4WD"
      },
      {
        title: "Seating Capacity",
        value: "5 or 7 (Available 3rd Row)"
      },
      {
        title: "Chassis",
        value: "Body-on-Frame (TNGA-F platform)"
      },
      {
        title: "Vehicle Type",
        value: "SUV"
      },
      {
        title: "Generation",
        value: "Sixth Generation"
      },
      {
        title: "Notable Feature",
        value: "Power Rear Window"
      }
    ]
  },
  "toyota-tundra-2025": {
    id: "toyota-tundra-2025",
    title: "2025 Toyota Tundra",
    slug: "toyota-tundra-2025",
    price: {
      amount: 40090,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A full-size pickup truck offering powerful turbocharged V6 engine options and strong capability.",
    fullDescription: "The 2025 Toyota Tundra is a capable full-size pickup truck powered by a standard i-FORCE 3.4-liter twin-turbocharged V6 engine, which produces either 358 or 389 horsepower depending on the trim level, and up to 479 lb-ft of torque. This engine is paired with a 10-speed automatic transmission. Rear-wheel drive is standard, with part-time or full-time four-wheel drive available. The Tundra offers a comfortable ride thanks to its coil-spring rear suspension (unlike many rivals with leaf springs). It boasts a maximum towing capacity of up to 12,000 pounds and features a modern interior with available large touchscreens and technology.",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2022-toyota-tundra-limited-crewmax-258-1648649438.jpg?crop=0.567xw:0.477xh;0.264xw,0.458xh&resize=1200:*",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "truck", "pickup-truck"],
    tags: ["Truck", "Pickup Truck", "Full-size Truck", "V6 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "Tundra"
      },
      {
        title: "Base Price",
        value: "$40,090"
      },
      {
        title: "Base Engine",
        value: "i-FORCE 3.4L Twin-Turbo V6"
      },
      {
        title: "Horsepower Range",
        value: "358-389 hp"
      },
      {
        title: "Torque Range",
        value: "406-479 lb-ft"
      },
      {
        title: "Transmission",
        value: "10-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "RWD or Available 4WD"
      },
      {
        title: "Max Towing Capacity",
        value: "Up to 12,000 lbs"
      },
      {
        title: "Max Payload Capacity",
        value: "Up to 1940 lbs"
      },
      {
        title: "Vehicle Type",
        value: "Full-size Pickup Truck"
      },
      {
        title: "Rear Suspension",
        value: "Coil Spring Multi-Link"
      },
       {
        title: "Available Infotainment",
        value: "14-inch Touchscreen"
      }
    ]
  },
  "toyota-tundra-2024": {
    id: "toyota-tundra-2024",
    title: "2024 Toyota Tundra",
    slug: "toyota-tundra-2024",
    price: {
      amount: 39965,
      currency: "USD",
      year: 2024
    },
    shortDescription: "A capable full-size pickup truck offering powerful V6 engine options and a comfortable ride.",
    fullDescription: "The 2024 Toyota Tundra is a robust full-size pickup truck featuring the i-FORCE 3.4-liter twin-turbocharged V6 engine as its standard powertrain. This engine provides either 358 or 389 horsepower and up to 479 lb-ft of torque, mated to a 10-speed automatic transmission. It offers rear-wheel drive or available four-wheel drive. The Tundra is known for its comfortable ride, partly due to its multi-link rear suspension with coil springs. It boasts a maximum towing capacity of up to 12,000 pounds. The interior is modern, featuring available large touchscreens and updated technology.",
    imageUrl: "https://www.motortrend.com/uploads/2023/09/2-2024-Toyota-Tundra-1974-LTD-front-view.jpg",
    categoryId: "toyota",
    categoryIds: ["toyota", "cars", "truck", "pickup-truck"],
    tags: ["Truck", "Pickup Truck", "Full-size Truck", "Turbocharged", "V6 Engine"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "Tundra"
      },
      {
        title: "Base Price",
        value: "$39,965"
      },
      {
        title: "Base Engine",
        value: "i-FORCE 3.4L Twin-Turbo V6"
      },
      {
        title: "Horsepower Range",
        value: "358-389 hp"
      },
      {
        title: "Torque Range",
        value: "406-479 lb-ft"
      },
      {
        title: "Transmission",
        value: "10-Speed Automatic"
      },
      {
        title: "Drive Type",
        value: "RWD or Available 4WD"
      },
      {
        title: "Max Towing Capacity",
        value: "Up to 12,000 lbs"
      },
      {
        title: "Max Payload Capacity",
        value: "Up to 1940 lbs"
      },
      {
        title: "Vehicle Type",
        value: "Full-size Pickup Truck"
      },
      {
        title: "Rear Suspension Type",
        value: "Multi-Link with Coil Springs"
      },
       {
        title: "Available Screen Size",
        value: "14-inch Touchscreen"
      }
    ]
  },
    "ram-1500-trx-ignition-edition-2022": {
    id: "ram-1500-trx-ignition-edition-2022",
    title: "2022 RAM 1500 TRX Ignition Edition",
    slug: "ram-1500-trx-ignition-edition-2022",
    price: {
      amount: 125075,
      currency: "USD",
      year: 2022
    },
    shortDescription: "The most expensive RAM truck produced in 2022, a high-performance pickup with a supercharged HEMI V8.",
    fullDescription: "RAM has built a legacy of producing some of the most powerful and luxurious trucks on the market, catering to off-road enthusiasts, luxury seekers, and performance lovers. The 2022 RAM 1500 TRX Ignition Edition stands out as the most expensive RAM truck produced that year. This high-performance pickup is equipped with a 6.2-liter supercharged HEMI V8 engine, delivering an incredible 702 horsepower. It boasts rapid acceleration, achieving 0 to 60 mph in just 4.5 seconds and reaching a top speed of 118 mph. The Ignition Edition features an exclusive Ignition Orange exterior, black racing stripes, and an aggressive body design with an off-road reinforced frame and 35-inch tires. The luxurious cabin includes premium leather upholstery, a 12-inch touchscreen, and a 900-watt Harman Kardon sound system.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2022-RAM-1500-TRX-Ignition-Edition-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Performance Truck", "Off-road", "Luxury"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2022"
      },
      {
        title: "Model",
        value: "1500 TRX Ignition Edition"
      },
      {
        title: "Base Price",
        value: "$125,075"
      },
      {
        title: "Engine",
        value: "6.2L Supercharged HEMI V8"
      },
      {
        title: "Horsepower",
        value: "702 hp"
      },
      {
        title: "0-60 mph",
        value: "4.5 seconds"
      },
      {
        title: "Top Speed",
        value: "118 mph"
      },
      {
        title: "Body Features",
        value: "Off-road reinforced frame, 35-inch tires"
      },
      {
        title: "Exterior Color",
        value: "Ignition Orange (Exclusive)"
      },
      {
        title: "Interior Upholstery",
        value: "Premium Leather"
      },
      {
        title: "Infotainment",
        value: "12-inch Touchscreen"
      },
      {
        title: "Sound System",
        value: "900-watt Harman Kardon"
      }
    ]
  },
  "ram-1500-trx-lunar-edition-2023": {
    id: "ram-1500-trx-lunar-edition-2023",
    title: "2023 RAM 1500 TRX Lunar Edition",
    slug: "ram-1500-trx-lunar-edition-2023",
    price: {
      amount: 106445,
      currency: "USD",
      year: 2023
    },
    shortDescription: "A high-performance and luxurious TRX variant featuring a unique Ceramic Gray paint job.",
    fullDescription: "The 2023 RAM 1500 TRX Lunar Edition is a high-performance beast designed for those who love speed and luxury, part of RAM's legacy of producing powerful trucks. This truck is powered by a 6.2-liter supercharged HEMI V8 engine that produces 702 horsepower and 650 lb-ft of torque, enabling it to sprint from 0 to 60 mph in 4.5 seconds. The Lunar Edition features a unique Ceramic Gray paint job with blue interior accents. Built for off-road adventures, it includes Bilstein Black Hawk e2 adaptive suspension and all-terrain tires. Luxury amenities include ventilated leather seats and a panoramic sunroof.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2023-RAM-1500-TRX-Lunar-Edition-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Performance Truck", "Luxury", "Off-road"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2023"
      },
      {
        title: "Model",
        value: "1500 TRX Lunar Edition"
      },
      {
        title: "Base Price",
        value: "$106,445"
      },
      {
        title: "Engine",
        value: "6.2L Supercharged HEMI V8"
      },
      {
        title: "Horsepower",
        value: "702 hp"
      },
      {
        title: "Torque",
        value: "650 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "4.5 seconds"
      },
      {
        title: "Top Speed",
        value: "118 mph"
      },
      {
        title: "Exterior Color",
        value: "Ceramic Gray (Unique)"
      },
      {
        title: "Interior Accents",
        value: "Blue"
      },
      {
        title: "Suspension",
        value: "Bilstein Black Hawk e2 Adaptive"
      },
      {
        title: "Tires",
        value: "All-Terrain"
      },
      {
        title: "Luxury Features",
        value: "Ventilated Leather Seats, Panoramic Sunroof"
      }
    ]
  },
  "ram-1500-tungsten-2025": {
    id: "ram-1500-tungsten-2025",
    title: "2025 RAM 1500 Tungsten",
    slug: "ram-1500-tungsten-2025",
    price: {
      amount: 96470,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A new top-tier luxury trim for the 2025 RAM 1500 with a powerful new Hurricane engine.",
    fullDescription: "The 2025 RAM 1500 Tungsten is introduced as a top-tier luxury trim, blending style with power within RAM's lineup of capable trucks. This model features the new 3.0-liter twin-turbocharged Hurricane I-6 engine, producing 540 horsepower and 521 lb-ft of torque. It can accelerate from 0 to 60 mph in 5.2 seconds and reach a top speed of 115 mph. The exterior is highlighted by 22-inch polished wheels, a high-strength steel frame, and a refined aerodynamic design. The cabin boasts luxury amenities resembling a premium SUV, including quilted leather seats, massaging front seats, and a 23-speaker premium sound system.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2023-RAM-1500-TRX-Lunar-Edition-Capital-Exotic-1.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Luxury Truck", "Turbocharged", "Premium"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "1500 Tungsten"
      },
      {
        title: "Base Price",
        value: "$96,470"
      },
      {
        title: "Engine",
        value: "3.0L Twin-Turbo Hurricane I-6"
      },
      {
        title: "Horsepower",
        value: "540 hp"
      },
      {
        title: "Torque",
        value: "521 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "5.2 seconds"
      },
      {
        title: "Top Speed",
        value: "115 mph"
      },
      {
        title: "Body Features",
        value: "High-strength steel frame, Aerodynamic design"
      },
      {
        title: "Wheels",
        value: "22-inch Polished"
      },
      {
        title: "Interior Seating",
        value: "Quilted Leather Seats, Massaging Front Seats"
      },
      {
        title: "Sound System",
        value: "23-speaker Premium"
      }
    ]
  },
  "ram-1500-trx-2024": {
    id: "ram-1500-trx-2024",
    title: "2024 RAM 1500 TRX",
    slug: "ram-1500-trx-2024",
    price: {
      amount: 96585,
      currency: "USD",
      year: 2024
    },
    shortDescription: "One of the most aggressive off-road trucks, powered by a supercharged HEMI V8.",
    fullDescription: "The 2024 RAM 1500 TRX continues its reputation as one of the most aggressive off-road trucks in the world, embodying RAM's focus on powerful and capable vehicles. This truck is equipped with a 6.2-liter supercharged HEMI V8 engine, delivering 702 horsepower and 650 lb-ft of torque. It accelerates from 0 to 60 mph in 4.5 seconds and has a top speed of 118 mph. The body is built to handle rough terrain, featuring a reinforced chassis, 35-inch Goodyear all-terrain tires, and an advanced off-road suspension. The interior includes modern tech like a 12-inch touchscreen and a digital gauge cluster, alongside leather-trimmed seats.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2024-RAM-1500-TRX-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Off-road", "Performance Truck", "Supercharged"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "1500 TRX"
      },
      {
        title: "Base Price",
        value: "$96,585"
      },
      {
        title: "Engine",
        value: "6.2L Supercharged HEMI V8"
      },
      {
        title: "Horsepower",
        value: "702 hp"
      },
      {
        title: "Torque",
        value: "650 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "4.5 seconds"
      },
      {
        title: "Top Speed",
        value: "118 mph"
      },
      {
        title: "Body Features",
        value: "Reinforced chassis"
      },
      {
        title: "Tires",
        value: "35-inch Goodyear All-Terrain"
      },
      {
        title: "Suspension",
        value: "Advanced Off-road"
      },
      {
        title: "Infotainment",
        value: "12-inch Touchscreen"
      }
    ]
  },
  "ram-hd-limited-2024": {
    id: "ram-hd-limited-2024",
    title: "2024 RAM HD Limited",
    slug: "ram-hd-limited-2024",
    price: {
      amount: 89700,
      currency: "USD",
      year: 2024
    },
    shortDescription: "A heavy-duty truck blending immense power, especially for towing, with luxurious amenities.",
    fullDescription: "The 2024 RAM HD Limited is a heavy-duty truck designed for those who need both significant power and luxury, characteristic of RAM's higher-end offerings. It is powered by a 6.7-liter Cummins Turbo Diesel I6 engine that delivers 420 horsepower and an impressive 1,075 lb-ft of torque, enabling it to tow massive loads. The truck has a 0 to 60 mph time of around 6.5 seconds and a top speed of 105 mph. The body is built with high-strength steel, featuring chrome accents and LED lighting. The luxurious cabin includes heated and ventilated seats, a 12-inch touchscreen, and real wood trim.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2024-RAM-HD-Limited-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Heavy Duty", "Diesel", "Luxury"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2024"
      },
      {
        title: "Model",
        value: "HD Limited"
      },
      {
        title: "Base Price",
        value: "$89,700"
      },
      {
        title: "Engine",
        value: "6.7L Cummins Turbo Diesel I6"
      },
      {
        title: "Horsepower",
        value: "420 hp"
      },
      {
        title: "Torque",
        value: "1,075 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "Approx. 6.5 seconds"
      },
      {
        title: "Top Speed",
        value: "105 mph"
      },
      {
        title: "Body Features",
        value: "High-strength steel, Chrome accents, LED lighting"
      },
      {
        title: "Interior Features",
        value: "Heated and Ventilated Seats, Real Wood Trim"
      },
      {
        title: "Infotainment",
        value: "12-inch Touchscreen"
      },
      {
        title: "Vehicle Type",
        value: "Heavy Duty Pickup Truck"
      }
    ]
  },
  "ram-1500-limited-longhorn-2025": {
    id: "ram-1500-limited-longhorn-2025",
    title: "2025 RAM 1500 Limited Longhorn",
    slug: "ram-1500-limited-longhorn-2025",
    price: {
      amount: 78440,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A luxury-focused RAM 1500 trim with Western-themed design and powerful performance.",
    fullDescription: "The 2025 RAM 1500 Limited Longhorn is designed for truck lovers who appreciate Western luxury and powerful performance, reflecting RAM's diverse offerings. It features a 5.7-liter HEMI V8 engine producing 395 horsepower and 410 lb-ft of torque. It accelerates from 0 to 60 mph in 6.4 seconds with a top speed of 112 mph. The exterior features chrome-accented bumpers, 20-inch polished wheels, and a signature Longhorn badge on the tailgate. The truck’s interior boasts real wood, leather, and bronze accents, heated and ventilated front and rear seats, a 12-inch touchscreen, and a 10-speaker premium sound system.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2025-RAM-1500-Limited-Longhorn-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Luxury Truck", "V8 Engine", "Premium"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "1500 Limited Longhorn"
      },
      {
        title: "Base Price",
        value: "$78,440"
      },
      {
        title: "Engine",
        value: "5.7L HEMI V8"
      },
      {
        title: "Horsepower",
        value: "395 hp"
      },
      {
        title: "Torque",
        value: "410 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "6.4 seconds"
      },
      {
        title: "Top Speed",
        value: "112 mph"
      },
      {
        title: "Body Features",
        value: "Chrome-accented bumpers, Signature Longhorn badge"
      },
      {
        title: "Wheels",
        value: "20-inch Polished"
      },
      {
        title: "Interior Materials",
        value: "Real Wood, Leather, Bronze Accents"
      },
      {
        title: "Interior Seating",
        value: "Heated and Ventilated Front and Rear Seats"
      },
      {
        title: "Infotainment",
        value: "12-inch Touchscreen"
      },
      {
        title: "Sound System",
        value: "10-speaker Premium"
      }
    ]
  },
  "ram-1500-limited-2025": {
    id: "ram-1500-limited-2025",
    title: "2025 RAM 1500 Limited",
    slug: "ram-1500-limited-2025",
    price: {
      amount: 77445,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A high-end RAM 1500 trim focusing on performance and luxury with the new Hurricane engine.",
    fullDescription: "The 2025 RAM 1500 Limited is a high-end truck built for performance and luxury, part of RAM's offering of capable and comfortable trucks. It features the 3.0-liter twin-turbocharged Hurricane I-6 engine, producing 540 horsepower and 521 lb-ft of torque. It reaches 0 to 60 mph in 5.4 seconds with a top speed of 115 mph. The exterior features sleek LED lighting, a refined grille, and 22-inch wheels, making it one of the most stylish RAM trucks. The interior offers quilted leather seats, a 14.5-inch touchscreen infotainment system, and a 23-speaker premium sound system.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2025-RAM-1500-Limited-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Luxury Truck", "Turbocharged", "Stylish"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "1500 Limited"
      },
      {
        title: "Base Price",
        value: "$77,445"
      },
      {
        title: "Engine",
        value: "3.0L Twin-Turbo Hurricane I-6"
      },
      {
        title: "Horsepower",
        value: "540 hp"
      },
      {
        title: "Torque",
        value: "521 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "5.4 seconds"
      },
      {
        title: "Top Speed",
        value: "115 mph"
      },
      {
        title: "Exterior Features",
        value: "Sleek LED lighting, Refined grille"
      },
      {
        title: "Wheels",
        value: "22-inch"
      },
      {
        title: "Interior Seating",
        value: "Quilted Leather Seats"
      },
      {
        title: "Infotainment",
        value: "14.5-inch Touchscreen"
      },
      {
        title: "Sound System",
        value: "23-speaker Premium"
      }
    ]
  },
  "ram-1500-rebel-2025": {
    id: "ram-1500-rebel-2025",
    title: "2025 RAM 1500 Rebel",
    slug: "ram-1500-rebel-2025",
    price: {
      amount: 66485,
      currency: "USD",
      year: 2025
    },
    shortDescription: "An off-road focused RAM 1500 combining power with aggressive styling and trail capability.",
    fullDescription: "The 2025 RAM 1500 Rebel is an off-road truck combining power and aggressive styling, built for utility and off-road enthusiasts within the RAM lineup. It features a 5.7-liter HEMI V8 engine that produces 395 horsepower and 410 lb-ft of torque. The truck can accelerate from 0 to 60 mph in 6.6 seconds with a top speed of 110 mph. This truck is equipped for off-road adventures with 33-inch all-terrain tires, skid plates, and a factory lift for better ground clearance. The interior is functional and stylish, offering durable cloth and vinyl seats, a 12-inch touchscreen, and off-road driving modes.",
imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2025-RAM-1500-Rebel-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Off-road", "V8 Engine", "Adventure"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "1500 Rebel"
      },
      {
        title: "Base Price",
        value: "$66,485"
      },
      {
        title: "Engine",
        value: "5.7L HEMI V8"
      },
      {
        title: "Horsepower",
        value: "395 hp"
      },
      {
        title: "Torque",
        value: "410 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "6.6 seconds"
      },
      {
        title: "Top Speed",
        value: "110 mph"
      },
      {
        title: "Tires",
        value: "33-inch All-Terrain"
      },
      {
        title: "Off-road Features",
        value: "Skid plates, Factory lift"
      },
      {
        title: "Interior Seating",
        value: "Durable Cloth and Vinyl Seats"
      },
      {
        title: "Infotainment",
        value: "12-inch Touchscreen"
      }
    ]
  },
  "ram-1500-laramie-2025": {
    id: "ram-1500-laramie-2025",
    title: "2025 RAM 1500 Laramie",
    slug: "ram-1500-laramie-2025",
    price: {
      amount: 62320,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A well-balanced RAM 1500 trim offering a blend of comfort, power, and premium features.",
    fullDescription: "The 2025 RAM 1500 Laramie is a well-balanced truck that delivers comfort and power, fitting within RAM's diverse lineup. It features a 3.6-liter Pentastar V6 engine that generates 305 horsepower and 269 lb-ft of torque. It achieves 0 to 60 mph in 7.2 seconds with a top speed of 108 mph. The exterior features chrome-accented bumpers, LED lighting, and 20-inch wheels. It provides a leather-trimmed interior, an 8.4-inch touchscreen infotainment system, and a 10-speaker Alpine audio system.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2025-RAM-1500-Laramie-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Premium Truck", "V6 Engine", "Comfort"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "1500 Laramie"
      },
      {
        title: "Base Price",
        value: "$62,320"
      },
      {
        title: "Engine",
        value: "3.6L Pentastar V6"
      },
      {
        title: "Horsepower",
        value: "305 hp"
      },
      {
        title: "Torque",
        value: "269 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "7.2 seconds"
      },
      {
        title: "Top Speed",
        value: "108 mph"
      },
      {
        title: "Exterior Features",
        value: "Chrome-accented bumpers, LED lighting"
      },
      {
        title: "Wheels",
        value: "20-inch"
      },
      {
        title: "Interior Upholstery",
        value: "Leather-trimmed"
      },
      {
        title: "Infotainment",
        value: "8.4-inch Touchscreen"
      },
      {
        title: "Sound System",
        value: "10-speaker Alpine"
      }
    ]
  },
  "ram-1500-big-horn-2025": {
    id: "ram-1500-big-horn-2025",
    title: "2025 RAM 1500 Big Horn",
    slug: "ram-1500-big-horn-2025",
    price: {
      amount: 47175,
      currency: "USD",
      year: 2025
    },
    shortDescription: "A popular RAM 1500 trim offering a balance of features and performance at a more accessible price.",
    fullDescription: "The 2025 RAM 1500 Big Horn is presented as a premium truck offering great performance at a lower price point within the RAM lineup. It features a 3.6-liter Pentastar V6 engine that produces 305 horsepower and 269 lb-ft of torque. It goes from 0 to 60 mph in 7.5 seconds with a top speed of 105 mph. The exterior features a bold grille design, chrome accents, and 18-inch alloy wheels. The interior includes cloth seats, an 8.4-inch touchscreen, and Apple CarPlay/Android Auto compatibility.",
    imageUrl: "https://capitalexotic.com/wp-content/uploads/2025/02/2025-RAM-1500-Big-Horn-Capital-Exotic.webp",
    categoryId: "ram",
    categoryIds: ["ram", "cars", "truck"],
    tags: ["Truck", "Popular", "V6 Engine", "Accessible Price"],
    createdAt: "2025-04-24",
    updatedAt: "2025-04-24",
    facts: [
      {
        title: "Model Year",
        value: "2025"
      },
      {
        title: "Model",
        value: "1500 Big Horn"
      },
      {
        title: "Base Price",
        value: "$47,175"
      },
      {
        title: "Engine",
        value: "3.6L Pentastar V6"
      },
      {
        title: "Horsepower",
        value: "305 hp"
      },
      {
        title: "Torque",
        value: "269 lb-ft"
      },
      {
        title: "0-60 mph",
        value: "7.5 seconds"
      },
      {
        title: "Top Speed",
        value: "105 mph"
      },
      {
        title: "Exterior Features",
        value: "Bold grille design, Chrome accents"
      },
      {
        title: "Wheels",
        value: "18-inch Alloy"
      },
      {
        title: "Interior Seating",
        value: "Cloth Seats"
      },
      {
        title: "Infotainment",
        value: "8.4-inch Touchscreen"
      },
      {
        title: "Smartphone Connectivity",
        value: "Apple CarPlay/Android Auto"
      }
    ]
  }
};
