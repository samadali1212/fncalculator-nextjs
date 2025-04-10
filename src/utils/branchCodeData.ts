
import { v4 as uuidv4 } from 'uuid';

// Define BranchCode interface
export interface BranchCode {
  id: string;
  branchCode: string;
  bicCode: string;
  bankName: string;
  branchName: string;
  branchAddress: string;
  city: string;
  phone: string;
  fax?: string;
  slug: string;
}

// Define Bank interface
export interface Bank {
  id: string;
  name: string;
  slug: string;
  description: string;
  logoUrl?: string;
}

// Sample banks data
export const banks: Bank[] = [
  {
    id: "absa",
    name: "ABSA Bank",
    slug: "absa",
    description: "ABSA Bank is one of South Africa's largest financial services organizations.",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LoqRWQTESf-mVCQO8rv2Yw9aSJaC_jKMiw&s"
  },
  {
    id: "fnb",
    name: "First National Bank (FNB)",
    slug: "fnb",
    description: "First National Bank (FNB) is one of South Africa's 'big four' banks.",
    logoUrl: "https://www.sagoodnews.co.za/wp-content/uploads/2023/01/FNB-BANK-LOGO-A-1.jpg"
  },
  {
    id: "standard-bank",
    name: "Standard Bank",
    slug: "standard-bank",
    description: "Standard Bank is the largest African banking group by assets.",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxou7nwUERZ2Q0owpFbZxRA19UcvfEo62_Bg&s"
  },
  {
    id: "nedbank",
    name: "Nedbank",
    slug: "nedbank",
    description: "Nedbank is one of South Africa's largest banks with a strong focus on wholesale and retail banking.",
    logoUrl: "https://pbs.twimg.com/profile_images/1720439094486986752/t_CsE5qC_400x400.jpg"
  },
  {
    id: "capitec",
    name: "Capitec Bank",
    slug: "capitec",
    description: "Capitec Bank is a South African retail bank focusing on essential banking services.",
    logoUrl: "https://psquare.co.za/wp-content/uploads/2017/05/CAPITEC-300-1.jpg"
  },
  {
    id: "bank-of-china",
    name: "Bank of China",
    slug: "bank-of-china",
    description: "Bank of China is one of the largest state-owned commercial banks in China with branches in South Africa.",
    logoUrl: "https://files.structuredretailproducts.com/files/Bank%20of%20China%20Logo%20square.png"
  },
  {
    id: "investec",
    name: "Investec",
    slug: "investec",
    description: "Investec is an international banking and wealth management group providing financial services.",
    logoUrl: "https://media.glassdoor.com/sqll/2902965/investec-wealth-squarelogo-1686918302098.png"
  },
  {
    id: "african-bank",
    name: "African Bank",
    slug: "african-bank",
    description: "African Bank is a retail bank offering personal loans, credit cards, and savings products.",
    logoUrl: "https://pbs.twimg.com/profile_images/1789852995544326144/VMW0ZI_I_400x400.jpg"
  },
    {
    id: "barclays-bank",
    name: "Barclays Bank",
    slug: "barclays-bank",
    description: "Barclays Bank is a British multinational bank with a presence in South Africa.",
    logoUrl: "https://pbs.twimg.com/profile_images/1572261226326941703/I9f0JqvK_400x400.jpg"
  },
  {
    id: "bidvest-bank",
    name: "Bidvest Bank",
    slug: "bidvest-bank",
    description: "Bidvest Bank specializes in foreign exchange and retail banking solutions.",
    logoUrl: "https://debicheck.co.za/wp-content/uploads/2019/02/bidvest-colour.jpg"
  },
  {
    id: "discovery-bank",
    name: "Discovery Bank",
    slug: "discovery-bank",
    description: "Discovery Bank is a digital bank offering innovative financial solutions.",
    logoUrl: "https://pbs.twimg.com/profile_images/1721480044810285056/8EbaUpL2_400x400.jpg"
  },
  {
    id: "firstrand-bank",
    name: "FirstRand Bank Limited",
    slug: "firstrand-bank",
    description: "FirstRand Bank is one of South Africa’s largest financial institutions.",
    logoUrl: "https://media.glassdoor.com/sqll/3472202/firstrand-bank-squarelogo-1663584835960.png"
  },
  {
    id: "old-mutual",
    name: "Old Mutual",
    slug: "old-mutual",
    description: "Old Mutual offers banking, investment, and insurance solutions.",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vJilX8b-3wc_LamPCSVyVrsG4tiJ0kJBDA&s"
  },
  {
    id: "sasfin-bank",
    name: "Sasfin Bank",
    slug: "sasfin-bank",
    description: "Sasfin Bank provides tailored banking and investment solutions.",
    logoUrl: "https://debtfreedigi.co.za/wp-content/uploads/2024/08/sasfin-bank-square.png"
  },
  {
    id: "tyme-bank",
    name: "Tyme Bank",
    slug: "tyme-bank",
    description: "Tyme Bank is a digital bank offering affordable financial solutions.",
    logoUrl: "https://pbs.twimg.com/profile_images/1389197416713367556/iAeWaakc_400x400.jpg"
  },
  {
    id: "ubank",
    name: "Ubank",
    slug: "ubank",
    description: "Ubank focuses on providing financial services to mining communities.",
    logoUrl: "https://cdn.prod.website-files.com/63529a078779c0c455a24ded/642a427a4ff68e45fc2f2788_zBZV035UR9OYb_wQ5zkyGrcyrk7eCndbwU66wLZE7WA.png"
  }
];

// Sample branch codes data
export const branchCodes: BranchCode[] = [
  {
    id: uuidv4(),
    branchCode: "632005",
    bicCode: "ABSAZAJJ",
    bankName: "ABSA Bank",
    branchName: "Sandton",
    branchAddress: "15 Alice Lane, Sandton",
    city: "Johannesburg",
    phone: "011 350-4000",
    fax: "011 350-4001",
    slug: "absa-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "250655",
    bicCode: "FIRNZAJJ",
    bankName: "First National Bank (FNB)",
    branchName: "Sandton",
    branchAddress: "4 Merchant Place, Corner Fredman Drive & Rivonia Road",
    city: "Johannesburg",
    phone: "011 352-5000",
    fax: "011 352-5001",
    slug: "fnb-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "051001",
    bicCode: "SBZAZAJJ",
    bankName: "Standard Bank",
    branchName: "Sandton",
    branchAddress: "30 Baker Street, Rosebank",
    city: "Johannesburg",
    phone: "011 721-7000",
    fax: "011 721-7001",
    slug: "standard-bank-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "198765",
    bicCode: "NEDSZAJJ",
    bankName: "Nedbank",
    branchName: "Sandton",
    branchAddress: "135 Rivonia Road, Sandown",
    city: "Johannesburg",
    phone: "011 294-4444",
    fax: "011 294-4445",
    slug: "nedbank-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Sandton City",
    branchAddress: "Sandton City Shopping Centre, Corner Rivonia Road & 5th Street",
    city: "Johannesburg",
    phone: "0860 102-043",
    slug: "capitec-sandton-city"
  },
  {
    id: uuidv4(),
    branchCode: "686000",
    bicCode: "BKCHZAJJ",
    bankName: "Bank of China",
    branchName: "Johannesburg",
    branchAddress: "14th - 16th Floors, Alice Lane Towers, 15 Alice Lane, Sandown Sandton",
    city: "Johannesburg",
    phone: "011 520-9600",
    fax: "011 783-2336",
    slug: "bank-of-china-johannesburg"
  },
  {
    id: uuidv4(),
    branchCode: "580105",
    bicCode: "IVESZAJJ",
    bankName: "Investec",
    branchName: "Sandton",
    branchAddress: "100 Grayston Drive, Sandown",
    city: "Johannesburg",
    phone: "011 286-7000",
    fax: "011 286-7001",
    slug: "investec-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "430000",
    bicCode: "AFRLZAJJ",
    bankName: "African Bank",
    branchName: "Midrand Head Office",
    branchAddress: "59 16th Road, Midrand",
    city: "Midrand",
    phone: "011 256-9000",
    slug: "african-bank-midrand"
  },
  {
    id: uuidv4(),
    branchCode: "632005",
    bicCode: "ABSAZAJJ",
    bankName: "ABSA Bank",
    branchName: "Cape Town",
    branchAddress: "Absa Towers, 2 Riebeek Street",
    city: "Cape Town",
    phone: "021 412-3000",
    fax: "021 412-3001",
    slug: "absa-cape-town"
  },
  {
    id: uuidv4(),
    branchCode: "250655",
    bicCode: "FIRNZAJJ",
    bankName: "First National Bank (FNB)",
    branchName: "Durban",
    branchAddress: "151 Musgrave Road, Berea",
    city: "Durban",
    phone: "031 360-5000",
    fax: "031 360-5001",
    slug: "fnb-durban"
  },
    {
    id: uuidv4(),
    branchCode: "590000",
    bicCode: "BARCLZAZ",
    bankName: "Barclays Bank",
    branchName: "Sandton",
    branchAddress: "140 West St, 4th Floor, Sandton 2057",
    city: "Johannesburg",
    phone: "+27 11 217 6600",
    slug: "barclays-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "679000",
    bicCode: "BIDBZAJJ",
    bankName: "Bidvest Bank",
    branchName: "Sandton",
    branchAddress: "1 Park Ln, Wierda Valley, Sandton",
    city: "Johannesburg",
    phone: "+27 11 407 3100",
    slug: "bidvest-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "679000",
    bicCode: "DISCZAJJ",
    bankName: "Discovery Bank",
    branchName: "Sandton",
    branchAddress: "1 Discovery Place, Sandton",
    city: "Johannesburg",
    phone: "+27 11 529 9000",
    slug: "discovery-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "250655",
    bicCode: "FIRNZAJJ",
    bankName: "FirstRand Bank Limited",
    branchName: "Sandton",
    branchAddress: "Merchant Place, 4 Corner Fredman Drive and Rivonia Road, Sandton",
    city: "Johannesburg",
    phone: "+27 11 282 1800",
    slug: "firstrand-sandton"
  },
  {
    id: uuidv4(),
    branchCode: "462005",
    bicCode: "OMAMZAJC",
    bankName: "Old Mutual",
    branchName: "Pinelands",
    branchAddress: "Mutualpark, Jan Smuts Drive, Pinelands",
    city: "Cape Town",
    phone: "+27 21 509 9111",
    slug: "oldmutual-pinelands"
  },
  {
    id: uuidv4(),
    branchCode: "683000",
    bicCode: "SASFZAJJ",
    bankName: "Sasfin Bank",
    branchName: "Sandown",
    branchAddress: "140 West Street, Sandown",
    city: "Johannesburg",
    phone: "+27 11 809 3000",
    slug: "sasfin-sandown"
  },
  {
    id: uuidv4(),
    branchCode: "678910",
    bicCode: "CBZAZAJJ",
    bankName: "Tyme Bank",
    branchName: "Rosebank",
    branchAddress: "30 Jellicoe Avenue",
    city: "Rosebank",
    phone: "+27 86 000 8545",
    slug: "tyme-rosebank"
  },
  {
    id: uuidv4(),
    branchCode: "431010",
    bicCode: "YOUBZAJJ",
    bankName: "Ubank",
    branchName: "Midrand",
    branchAddress: "Private Bag X0030, Halfway House",
    city: "Midrand",
    phone: "+27 11 564 6800",
    slug: "ubank-midrand"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Capitec Bank HQ Building",
    branchAddress: "60 Main St, Marshalltown, Johannesburg, 2107",
    city: "Johannesburg",
    phone: "+27 21 809 4231",
    slug: "capitec-bank-hq-building"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Campus Square",
    branchAddress: "Kingsway, Kingsway Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-campus-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Rosettenville",
    branchAddress: "4 Geranium St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-rosettenville"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Harrison",
    branchAddress: "Shop 1, 25 Harrison St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-harrison"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Carlton Centre",
    branchAddress: "Shop 139A & 140, Carlton Centre, Commissioner St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-carlton-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Plein St",
    branchAddress: "Plein St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-plein-st"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Rosebank Mall",
    branchAddress: "Shop 131, Rosebank Mall, Bath Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-rosebank-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Braamfontein",
    branchAddress: "Devonshire House, Jorissen St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-braamfontein"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Bree",
    branchAddress: "Lilian Ngoyi St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-bree"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Eloff",
    branchAddress: "Shop 3, Diamond Corner Building, 66 Eloff St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-eloff"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Station East",
    branchAddress: "Park Station, Rissik St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-station-east"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Mall of the South",
    branchAddress: "Shop G133, Mall of the South, Swartkoppies Rd",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-mall-of-the-south"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Station West",
    branchAddress: "Shop M13, Johannesburg Park Station, Rissik St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-station-west"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Pritchard",
    branchAddress: "Shop 20, Schreiner Chambers, Pritchard St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-pritchard"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Brixton",
    branchAddress: "Shop 8 -10, Protea Shopping Centre, 80 High St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-brixton"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "The Glen Shopping Centre M45",
    branchAddress: "Shop M45, Glen Shopping Centre, Orpen Rd",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-the-glen-shopping-centre-m45"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Newtown Quarter",
    branchAddress: "Shop 109, Newtown Junction, Miriam Makeba St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-newtown-quarter"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Wits Campus",
    branchAddress: "Shop 14, The Matrix Building, University Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-wits-campus"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg South",
    branchAddress: "We Buy Cars Warehouse, Sabax Rd",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-south"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Southdale Centre",
    branchAddress: "Shop 51 & 52, Southdale Shopping Centre, Landsborough St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-southdale-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Killarney Mall",
    branchAddress: "Shop 19B, Killarney Mall, Killarney Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-killarney-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Station East",
    branchAddress: "Park Station, Rissik St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-station-east"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bedfordview Park Meadows Shopping Centre",
    branchAddress: "Shop 11, Park Meadows Shopping Centre, Nicol Rd",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-bedfordview-park-meadows-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Brixton",
    branchAddress: "Shop 8 -10, Protea Shopping Centre, 80 High St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-brixton"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Northgate Shopping Centre",
    branchAddress: "Shop 35, Northgate Shopping Centre, Northumberland Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-northgate-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Station West",
    branchAddress: "Shop M13, Johannesburg Park Station, Rissik St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-station-west"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Fox",
    branchAddress: "Shop 12, Colloseum, Kruis St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-fox"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "The Glen Shopping Centre M45",
    branchAddress: "Shop M45, Glen Shopping Centre, Orpen Rd",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-the-glen-shopping-centre-m45"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Campus Square",
    branchAddress: "Kingsway, Kingsway Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-campus-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Edenvale Van Riebeeck Mall",
    branchAddress: "Shop 2A, VR Mall, Van Riebeeck Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-edenvale-van-riebeeck-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Braamfontein",
    branchAddress: "Devonshire House, Jorissen St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-braamfontein"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Johannesburg The Bridge",
    branchAddress: "Shopping Centre, King George St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-dnr-johannesburg-the-bridge"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Balfour Park",
    branchAddress: "Shop 133, Balfour Park Shopping Centre, Louis Botha Service Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-balfour-park"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg Rosettenville",
    branchAddress: "4 Geranium St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-rosettenville"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR JHB Wits Campus",
    branchAddress: "Shop 14, The Matrix Building, University Ave",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-dnr-jhb-wits-campus"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Johannesburg South",
    branchAddress: "We Buy Cars Warehouse, Sabax Rd",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-johannesburg-south"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Jhb Oriental Plaza",
    branchAddress: "Shop 17, Oriental Plaza, Lilian Ngoyi St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-dnr-jhb-oriental-plaza"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Hillbrow Elkam Building",
    branchAddress: "Shop 1, Elkam Building, Pretoria St",
    city: "Johannesburg",
    phone: "+27 860 102 043",
    slug: "capitec-hillbrow-elkam-building"
  },
    {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town Riebeeck",
    branchAddress: "Riebeek St",
    city: "Cape Town",
    phone: "+27 21 809 4231",
    slug: "capitec-bank-cape-town-riebeeck"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town Grand Central",
    branchAddress: "Shop 20, Grand Central, Adderley St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-town-grand-central"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town Constitution House",
    branchAddress: "Constitution House, Adderley St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-town-constitution-house"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Gate Centre",
    branchAddress: "Capegate Shopping Centre, Capegate Blvd",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-gate-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town Gardens Centre",
    branchAddress: "Shop 39A, Gardens Shopping Centre, Mill St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-town-gardens-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town Golden Acre",
    branchAddress: "Shop S41, Shopping Centre, Golden Acre, Strand St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-town-golden-acre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town Darling",
    branchAddress: "Mutual Heights, Darling St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-town-darling"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Canal Walk",
    branchAddress: "Shop 171, Canal Walk Shopping Centre, Century Blvd",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-canal-walk"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Capitec Business Centre - Cape Town",
    branchAddress: "Roggebaai Place, 4 Jetty St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-business-centre-cape-town"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Sea Point",
    branchAddress: "Main Rd",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-sea-point"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Montague Gardens",
    branchAddress: "John Montague Centre, Montague Drive",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-montague-gardens"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Table View Table Bay Mall",
    branchAddress: "Shop G073, Table Bay Mall, Berkshire Blvd",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-table-view-table-bay-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Woodstock",
    branchAddress: "172 Victoria Rd",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-woodstock"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Goodwood N1 City Mall",
    branchAddress: "Shop 40, N1 City Mall, Louwtjie Rothman St",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-goodwood-n1-city-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Cape Town St Georges Mall",
    branchAddress: "St Georges Mall",
    city: "Cape Town",
    phone: "+27 860 102 043",
    slug: "capitec-bank-cape-town-st-georges-mall"
  },
    {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Quagga Centre",
    branchAddress: "Shop 24, Quagga Centre, Court St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-quagga-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Station Square",
    branchAddress: "Shop 24A, Station Square, Bosman St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-station-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria",
    branchAddress: "Shop L73 & L74, The Grove Mall, Lynnwood Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Brooklyn Mall",
    branchAddress: "Shop 148 & 149, Brooklyn Mall, Fehrsen St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-brooklyn-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Waverley Plaza",
    branchAddress: "Plaza, Hertzog Street Waverley",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-waverley-plaza"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Tramshed",
    branchAddress: "Office 8, The Tramshed Mall, Lilian Ngoyi St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-tramshed"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Bloed Street Mall",
    branchAddress: "Shop 25, Mall, Bloed St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-bloed-street-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Moreleta Park Parkview Centre",
    branchAddress: "Shop G177, Parkview Centre, Garsfontein Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-moreleta-park-parkview-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Middestad Mall",
    branchAddress: "Shop G135 & G137, Middestad Mall, Pretorius St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-middestad-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Sunnypark",
    branchAddress: "Shop L3, Sunnypark Shopping Centre, Steve Biko Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-sunnypark"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Vermeulen St",
    branchAddress: "Regent Place, Queen St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-vermeulen-st"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Die Meent",
    branchAddress: "Shop 4, Die Meent, Pretorius St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-die-meent"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Bougainville",
    branchAddress: "Shop 12, Bougainville Shopping Centre, Jennings St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-bougainville"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Church 221",
    branchAddress: "Tudor Chambers, Church St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-church-221"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Andries",
    branchAddress: "Shop 4, Park, 250 Madiba Street, Sophie de Bruyn St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-andries"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Silver Lakes Chamberlain Centre",
    branchAddress: "Shop 2, Chamberlain Centre, Bendeman Blvd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-silver-lakes-chamberlain-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Gezina Galleries",
    branchAddress: "Shop 23, Gezina Galleries, Nico Smith St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-gezina-galleries"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Woodlands Boulevard",
    branchAddress: "Shop 78 & 79, Woodlands Boulevard, Garsfontein Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-woodlands-boulevard"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Kolonnade Centre",
    branchAddress: "Shop 5, Kolonnade Shopping Centre, Dr Van Der Merwe Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-kolonnade-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Menlyn Park Shopping Centre",
    branchAddress: "Shop LG16, Menlyn Park, Atterbury Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-menlyn-park-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Station Square",
    branchAddress: "Shop 24A, Station Square, Bosman St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-station-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Capitec Bank",
    branchAddress: "Wapadrand Centre, Kwikspar, 886 Wapadrand Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria",
    branchAddress: "Shop L73 & L74, The Grove Mall, Lynnwood Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Hatfield",
    branchAddress: "Dr Savage Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-hatfield"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Pretoria Sinoville",
    branchAddress: "Burnett St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-pretoria-sinoville"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Waverley Plaza",
    branchAddress: "Shopping Centre, Mirca Ave",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-waverley-plaza"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Silver Lakes Chamberlain Centre",
    branchAddress: "Plaza, Hertzog Street Waverley",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-silver-lakes-chamberlain-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Menlyn Park Shopping Centre",
    branchAddress: "Shop 2, Chamberlain Centre, Bendeman Blvd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-menlyn-park-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Andries",
    branchAddress: "Shop LG16, Menlyn Park, Atterbury Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-andries"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Atteridgeville Stadium",
    branchAddress: "Shop 4, Park, 250 Madiba Street, Sophie de Bruyn St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-atteridgeville-stadium"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Montana Kolonnade Retail Park",
    branchAddress: "Shop 16, Atteridge Stadium Centre, Komane St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-montana-kolonnade-retail-park"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Moreleta Park Parkview Centre",
    branchAddress: "300 Church St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-moreleta-park-parkview-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Church 221",
    branchAddress: "Shop 9, Kolonnade Retail Park, Enkeldoorn Ave",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-church-221"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Mamelodi Mams Mall 111",
    branchAddress: "Station Center Square, Bosman St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-mamelodi-mams-mall-111"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Sunnypark",
    branchAddress: "Menlyn Park, Lois Ave",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-sunnypark"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Mamelodi Crossing Centre H14",
    branchAddress: "Shop G177, Parkview Centre, Garsfontein Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-mamelodi-crossing-centre-h14"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Hazeldean Square",
    branchAddress: "Tudor Chambers, Church St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-hazeldean-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Silverton Silverwater Crossing",
    branchAddress: "Shop 111, Mams Mall, Tsamaya Ave",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-silverton-silverwater-crossing"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Baviaanspoort",
    branchAddress: "Shop L3, Sunnypark Shopping Centre, Steve Biko Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-baviaanspoort"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Mamelodi Gateway Centre",
    branchAddress: "G06 Barclays Square, Celliers St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-mamelodi-gateway-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Atteridgeville Nkomo Village",
    branchAddress: "Station Square Shopping Centre, M11",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-atteridgeville-nkomo-village"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria North Wonderpark 209",
    branchAddress: "Shop 13, Shoprite Northpark Centre, Emily Hobhouse Ave",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-north-wonderpark-209"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Bougainville",
    branchAddress: "11 Steve Biko Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-bougainville"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Gezina Galleries",
    branchAddress: "Shop H14, Mamelodi Crossing Shopping Centre, Maphalla St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-gezina-galleries"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Pretoria Blaauw Village",
    branchAddress: "Shop 08, Hazeldean Square, Silverlakes Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-pretoria-blaauw-village"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Atteridgeville Attlyn",
    branchAddress: "Shop 4D, Silverwater Crossing Shopping Centre, Watermeyer St",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-atteridgeville-attlyn"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Karenpark Wonderpark Centre",
    branchAddress: "Shop 7, Shopping Centre, Baviaanspoort Rd",
    city: "Pretoria",
    phone: "+27 860 102 043",
    slug: "capitec-bank-karenpark-wonderpark-centre"
  },
   {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Victoria",
    branchAddress: "Shop 3 & 3A, Qualbert Centre, Victoria St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-victoria"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban West 331",
    branchAddress: "341 West St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-west-331"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Smith 407",
    branchAddress: "Shop 5, Salmon Grove Chambers, Beach Grove",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-smith-407"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Westwood Mall",
    branchAddress: "Shop L94, Westwood Mall, Lincoln Terrace",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-westwood-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Pavilion",
    branchAddress: "Shop 256, The Pavillion Shopping Centre, Jack Martens Dr",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-pavilion"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "City View (Game City) Capitec Bank",
    branchAddress: "302 Umgeni Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "city-view-(game-city)-capitec-bank"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban The Workshop 72",
    branchAddress: "The Workshop Shopping Centre, 78 Samora Machel St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-the-workshop-72"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban The Wheel Centre",
    branchAddress: "Shop 18A, The Wheel Shopping Centre",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-the-wheel-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Davenport Square",
    branchAddress: "Shop 24 & 27, Davenport Square, Helen Joseph Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-davenport-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban West 320",
    branchAddress: "Shop 19, Redefine Towers, West St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-west-320"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Overport City",
    branchAddress: "Shop 335, Overport City, Peter Mokaba Ridge",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-overport-city"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban West 448",
    branchAddress: "448 West St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-west-448"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Salisbury House",
    branchAddress: "Shop 27, Salisbury House, Anton Lembede St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-salisbury-house"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Southway Mall",
    branchAddress: "Shop 4, Southway Mall, Titren Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-southway-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Bluff Centre",
    branchAddress: "Shop 38A, Bluff Centre, Tara Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-bluff-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Junaid Centre",
    branchAddress: "Shop 5, Junaid Centre, Dr Yusuf Dadoo St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-junaid-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Aliwal",
    branchAddress: "Shop 2, Boland Bank House, Samora Machel St",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-aliwal"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Durban Musgrave",
    branchAddress: "Shop 109C, Musgrave Centre, 119 Stephen Dlamini Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-durban-musgrave"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Springfield Park",
    branchAddress: "Intersite Ave",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-springfield-park"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban North Kensington Square",
    branchAddress: "Shop 6, Kensington Square, Adelaide Tambo Dr",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-north-kensington-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Montclair Mall",
    branchAddress: "Shop 3, Montclair Mall, Wood Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-montclair-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Berea Centre",
    branchAddress: "Shop 10, Berea Shopping Centre, King Dinuzulu Rd (South )",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-berea-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Durban City View G11A",
    branchAddress: "Shop G11A, City View Shopping Centre, 10 Mathews Meyiwa Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-durban-city-view-g11a"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Durban Pine Parkade",
    branchAddress: "Shop 15, Pine Parkade, Monty Naicker Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-durban-pine-parkade"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Durban Berea Centre 01",
    branchAddress: "Centre, King Dinuzulu Road Berea",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-durban-berea-centre-01"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "The Atrium Berea",
    branchAddress: "Shop 430, Berea Centre, Noble Rd",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-the-atrium-berea"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Durban Bluff Hillside",
    branchAddress: "Tara Road Shop 20A, Bluff Hillside Mall Bluff",
    city: "Durban",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-durban-bluff-hillside"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Waterfront",
    branchAddress: "Shop S11B, Loch Logan Waterfront, Henry St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-waterfront"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Mimosa Mall",
    branchAddress: "Shop U54 A & B, Mimosa Mall, Kellner St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-mimosa-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Fleurdal Mall",
    branchAddress: "Fleurdal Mall, 35C Vereeniging Dr",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-fleurdal-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Plaza",
    branchAddress: "Shop 154, Bloem Plaza, Charlotte Maxeke St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-plaza"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Charlotte Maxeke",
    branchAddress: "Charlotte Maxeke St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-charlotte-maxeke"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Preller Square",
    branchAddress: "Shop 26, Preller Square Centre, Graaf Reinet St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-preller-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Central Park 116",
    branchAddress: "Shop 116, Central Park Shopping Centre, Oos Burger Straat",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-central-park-116"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein St Andrews",
    branchAddress: "Shop 4, Liberty Building, St Andrew St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-st-andrews"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Wes Burger",
    branchAddress: "NBS Building, Cnr Elizabeth and, W Burger St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-wes-burger"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein The Walk 17",
    branchAddress: "Shop 17, The Walk Shopping Centre, Jan Spies St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-the-walk-17"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Bloemfontein Park Rd",
    branchAddress: "Park Rd",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-bloemfontein-park-rd"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Bloemfontein Central",
    branchAddress: "Central Park Shopping Centre, Oos Burger Straat",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-bloemfontein-central"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Capitec Business Centre - Bloemfontein",
    branchAddress: "31 Third Ave",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-business-centre-bloemfontein"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Bloemfontein The Towers",
    branchAddress: "Shop 16, The Towers Shopping Centre, Koppie Rd",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-bloemfontein-the-towers"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Lemo Mall",
    branchAddress: "Shop 51, The Lemo Mall, Dr Belcher Rd",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-lemo-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Heidedal Twin City",
    branchAddress: "Shop 32, Twin City Shopping Centre, Heatherdale Rd",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-heidedal-twin-city"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Bloemfontein Northridge",
    branchAddress: "Shop 41A, Northridge Mall, Kenneth Kaunda Rd",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-bloemfontein-northridge"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Bloemfontein Middestad",
    branchAddress: "Shop A1C, Middestad Mall, W Burger St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-bloemfontein-middestad"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Bloemfontein Rocklands",
    branchAddress: "Shopping Centre, Moshoeshoe St",
    city: "Bloemfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-bloemfontein-rocklands"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Benoni Lakeside Mall 11",
    branchAddress: "Shop 11, Lakeside Mall, Rothsay St",
    city: "Benoni",
    phone: "+27 860 102 043",
    slug: "capitec-bank-benoni-lakeside-mall-11"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Benoni Northmead Square",
    branchAddress: "Shop G8A, Northmead Square, Fourteenth Ave",
    city: "Benoni",
    phone: "+27 860 102 043",
    slug: "capitec-bank-benoni-northmead-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Benoni Princess Avenue",
    branchAddress: "Princes Ave",
    city: "Benoni",
    phone: "+27 860 102 043",
    slug: "capitec-bank-benoni-princess-avenue"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Benoni Lakeside Mall 24",
    branchAddress: "Shop 24, Lakeside Mall, Tom Jones St",
    city: "Benoni",
    phone: "+27 860 102 043",
    slug: "capitec-bank-benoni-lakeside-mall-24"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Randfontein Village Square",
    branchAddress: "R41 Shop, 56 Villiage Square",
    city: "Randfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-randfontein-village-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Randfontein Centre",
    branchAddress: "Shop 15, Randfontein Station Mall, Station St",
    city: "Randfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-randfontein-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Randfontein Sutherland",
    branchAddress: "Shop 3, 15 Sutherland Ave",
    city: "Randfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-randfontein-sutherland"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Randfontein Tambotie Mall",
    branchAddress: "Shop 17 & 18, Tambotie Mall, Tambotie Rd",
    city: "Randfontein",
    phone: "+27 860 102 043",
    slug: "capitec-bank-randfontein-tambotie-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Krugersdorp Human St",
    branchAddress: "Human St",
    city: "Krugersdorp",
    phone: "+27 860 102 043",
    slug: "capitec-bank-krugersdorp-human-st"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Krugersdorp Key West",
    branchAddress: "Shop 46, Key West Shopping Centre, Paardekraal Dr",
    city: "Krugersdorp",
    phone: "+27 860 102 043",
    slug: "capitec-bank-krugersdorp-key-west"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Krugersdorp President Square",
    branchAddress: "Shop 14, President Square, Pretoria St",
    city: "Krugersdorp",
    phone: "+27 860 102 043",
    slug: "capitec-bank-krugersdorp-president-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Roodepoort Westgate Centre 52",
    branchAddress: "Shop 52, Westgate Shopping Centre, Ontdekkers Rd",
    city: "Roodepoort",
    phone: "+27 860 102 043",
    slug: "capitec-bank-roodepoort-westgate-centre-52"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Roodepoort Arcade",
    branchAddress: "Van Wyk St Shop, 3rd St",
    city: "Roodepoort",
    phone: "+27 860 102 043",
    slug: "capitec-bank-roodepoort-arcade"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Roodepoort Westgate Centre 6B",
    branchAddress: "Shop 006B, Westgate Shopping Centre, Ontdekkers Rd",
    city: "Roodepoort",
    phone: "+27 860 102 043",
    slug: "capitec-bank-roodepoort-westgate-centre-6b"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Roodepoort Village @ Horizon",
    branchAddress: "Shop 42, The Village @ Horizon, Sonop St",
    city: "Roodepoort",
    phone: "+27 860 102 043",
    slug: "capitec-bank-roodepoort-village-@-horizon"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Roodepoort Clearwater Mall",
    branchAddress: "LM054A, Clearwater Mall, Christiaan de Wet Rd",
    city: "Roodepoort",
    phone: "+27 860 102 043",
    slug: "capitec-bank-roodepoort-clearwater-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Maponya Mall 208",
    branchAddress: "Shop 208, Maponya Mall, Chris Hani Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-maponya-mall-208"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Bara Mall",
    branchAddress: "Shop 37, Bara Mall, Second Street",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-bara-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Maponya Mall 125",
    branchAddress: "Shop 125, Maponya Mall, Chris Hani Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-maponya-mall-125"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Dobson Point",
    branchAddress: "Shop 17 & 19, Dobson Point Shopping Centre, Mohajane",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-dobson-point"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Diepkloof Square",
    branchAddress: "Immink Drive Shop 15, Diepkloof Square Diepmeadow",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-diepkloof-square"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Eldorado Park",
    branchAddress: "Shop 2, Shoprite Centre, Sirkel Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-eldorado-park"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Jabulani Mall 79",
    branchAddress: "Shop 79, Jabulani Mall, Bolani Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-jabulani-mall-79"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Protea Glen",
    branchAddress: "Shop 11, Protea Glen Shopping Centre, Protea Blvd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-protea-glen"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Meadowpoint Centre",
    branchAddress: "Shop 7 & 9, Meadowpoint Shopping Centre, Heckroodt Circle",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-meadowpoint-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Protea Gardens",
    branchAddress: "Shop 67, Protea Gardens Mall, Chris Hani Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-protea-gardens"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Dube",
    branchAddress: "Shop 2202, Kronen Centre, Mahalefele Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-dube"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Dobsonville",
    branchAddress: "Shop 107, Dobsonville Shopping Centre, Elias Motsoaledi Rd",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-dobsonville"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Soweto Protea Glen 22",
    branchAddress: "Shop 22, Protea Glen Shopping Centre, R558",
    city: "Soweto",
    phone: "+27 860 102 043",
    slug: "capitec-bank-soweto-protea-glen-22"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Alberton City Mall",
    branchAddress: "Shop L23, Alberton City Mall, Voortrekker Rd",
    city: "Alberton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-alberton-city-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Alberton New Market",
    branchAddress: "Shop 14, Mall at Newmarket, Voortrekker Rd",
    city: "Alberton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-alberton-new-market"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Alberton Promenade",
    branchAddress: "Shop 1, Promenade Centre, Alberton Blvd",
    city: "Alberton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-alberton-promenade"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Alberton Lemon Tree",
    branchAddress: "Shop 25A, The Lemon Tree Shopping Centre, Swartkoppies Rd",
    city: "Alberton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-alberton-lemon-tree"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Midrand Boulders Shopping Centre",
    branchAddress: "The Boulders Shopping Centre, Shop 17, Old Pretoria Rd",
    city: "Midrand",
    phone: "+27 860 102 043",
    slug: "capitec-bank-midrand-boulders-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Midrand Carlswald Lifestyle Shopping Centre",
    branchAddress: "Shop 4, Carlswald Lifestyle Shopping Centre, New Rd",
    city: "Midrand",
    phone: "+27 860 102 043",
    slug: "capitec-bank-midrand-carlswald-lifestyle-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Midrand Blue Hills Centre",
    branchAddress: "Shop 67, Blue Hills Shopping Centre, African View Dr",
    city: "Midrand",
    phone: "+27 860 102 043",
    slug: "capitec-bank-midrand-blue-hills-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Midrand Old Pretoria",
    branchAddress: "SHOP 1, The Link Shopping Mall, Old Pretoria Rd",
    city: "Midrand",
    phone: "+27 860 102 043",
    slug: "capitec-bank-midrand-old-pretoria"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Mall Of Africa",
    branchAddress: "Shop 1041A, Mall of Africa, Magwa Cres",
    city: "Midrand",
    phone: "+27 860 102 043",
    slug: "capitec-bank-mall-of-africa"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Midrand Boulders 7",
    branchAddress: "Shop 7, The Boulders Shopping Centre, Old Pretoria Rd",
    city: "Midrand",
    phone: "+27 860 102 043",
    slug: "capitec-bank-midrand-boulders-7"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vereeniging Voortrekker",
    branchAddress: "Shop 2, Voortrekker St",
    city: "Vereeniging",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vereeniging-voortrekker"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vereeniging River Walk",
    branchAddress: "Riverwalk Shopping Center, Nile Dr",
    city: "Vereeniging",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vereeniging-river-walk"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vereeniging Markpark Shopping Centre",
    branchAddress: "Markpark Shopping Centre, Voortrekker St",
    city: "Vereeniging",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vereeniging-markpark-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Sandton City L14f",
    branchAddress: "Shop L14f, Rivonia Rd",
    city: "Sandton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-sandton-city-l14f"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Sandton Benmore Gardens",
    branchAddress: "Shop G39, Benmore Gardens Shopping Centre, Grayston Dr",
    city: "Sandton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-sandton-benmore-gardens"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Mercantile Sandton West",
    branchAddress: "Capitec Business Centre, West St",
    city: "Sandton",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-mercantile-sandton-west"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vereeniging Voortrekker",
    branchAddress: "Shop 2, Voortrekker St",
    city: "Vereeniging",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vereeniging-voortrekker"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vereeniging River Walk",
    branchAddress: "Riverwalk Shopping Center, Nile Dr",
    city: "Vereeniging",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vereeniging-river-walk"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vereeniging Markpark Shopping Centre",
    branchAddress: "Markpark Shopping Centre, Voortrekker St",
    city: "Vereeniging",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vereeniging-markpark-shopping-centre"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vanderbijlpark Vaal Mall",
    branchAddress: "Shop 8, Vaal Mall, Barrage Rd",
    city: "Vanderbijlpark",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vanderbijlpark-vaal-mall"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vanderbijlpark Vaalgate",
    branchAddress: "Shop 12, Vaalgate Shopping Centre, Hans Strijdom St",
    city: "Vanderbijlpark",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vanderbijlpark-vaalgate"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "DNR Vanderbijl Vaalgate A",
    branchAddress: "Vaalgate Shopping Centre, Hans Strijdom St",
    city: "Vanderbijlpark",
    phone: "+27 860 102 043",
    slug: "capitec-bank-dnr-vanderbijl-vaalgate-a"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Capitec Business Centre - Vanderbijlpark",
    branchAddress: "The Palms Shopping Centre, Louis Trichardt Blvd",
    city: "Vanderbijlpark",
    phone: "+27 860 102 043",
    slug: "capitec-business-centre-vanderbijlpark"
  },
  {
    id: uuidv4(),
    branchCode: "470010",
    bicCode: "CABLZAJJ",
    bankName: "Capitec Bank",
    branchName: "Vanderbijlpark DF Malan",
    branchAddress: "D F Malan St",
    city: "Vanderbijlpark",
    phone: "+27 860 102 043",
    slug: "capitec-bank-vanderbijlpark-df-malan"
  }
];

// Find bank by slug
export const findBankBySlug = (slug: string): Bank | undefined => {
  console.log("Finding bank with slug:", slug);
  const foundBank = banks.find(bank => bank.slug === slug);
  console.log("Found bank:", foundBank?.name);
  return foundBank;
};

// Find branch code by slug
export const findBranchCodeBySlug = (slug: string): BranchCode | undefined => {
  console.log("Finding branch with slug:", slug);
  const foundBranch = branchCodes.find(branch => branch.slug === slug);
  console.log("Found branch:", foundBranch?.branchName);
  return foundBranch;
};

// Get branch codes by bank
export const getBranchCodesByBank = (bankId: string): BranchCode[] => {
  const bank = banks.find(b => b.id === bankId);
  if (!bank) return [];
  
  return branchCodes.filter(branch => branch.bankName === bank.name);
};

// Get similar branch codes (same bank or city)
export const getSimilarBranchCodes = (branchCode: BranchCode, limit: number = 5): BranchCode[] => {
  return branchCodes
    .filter(b => 
      b.id !== branchCode.id && 
      (b.bankName === branchCode.bankName || b.city === branchCode.city)
    )
    .sort((a, b) => {
      // Sort by bank name match first, then by city
      if (a.bankName === branchCode.bankName && b.bankName !== branchCode.bankName) {
        return -1;
      }
      if (a.bankName !== branchCode.bankName && b.bankName === branchCode.bankName) {
        return 1;
      }
      return 0;
    })
    .slice(0, limit);
};
