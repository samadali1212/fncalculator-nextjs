
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: any;
  person?: {
    name: string;
    netWorth: number;
    currency: string;
    occupation: string;
    description: string;
    imageUrl?: string;
  };
  socialMedia?: {
    headline: string;
    articleBody: string;
    datePublished: string;
    author: string;
    url: string;
  };
  jobPosting?: {
    title: string;
    description: string;
    datePosted: string;
    validThrough: string;
    employmentType?: string;
    hiringOrganization: {
      name: string;
      logo?: string;
    };
    jobLocation: {
      addressLocality: string;
      addressRegion?: string;
      addressCountry?: string;
    };
    baseSalary?: {
      currency: string;
      value: {
        minValue?: number;
        maxValue?: number;
        value?: number;
      };
      unitText: "YEAR" | "MONTH" | "WEEK" | "DAY" | "HOUR";
    };
    applicantLocationRequirements?: string;
    jobLocationType?: string;
  };
  jobListing?: {
    listingType: "province" | "city" | "category";
    name: string;
    count: number;
  };
}

const SEO = ({
  title = "Deni La Gari - Tanzania Traffic Offence Checker",
  description = "Check your traffic violations and outstanding fines in Tanzania. Search using your vehicle registration, driving license, or violation reference number.",
  canonicalUrl,
  ogImage = "/denilagarifavicon.png", 
  ogType = "website",
  twitterCard = "summary_large_image",
  person,
  socialMedia,
  jobPosting,
  jobListing
}: SEOProps) => {
  const siteUrl = "https://denilagari.com";

  const getStructuredData = () => {
    if (person) {
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": person.name,
        "netWorth": {
          "@type": "MonetaryAmount",
          "currency": person.currency,
          "value": person.netWorth
        },
        "jobTitle": person.occupation,
        "description": person.description,
        ...(person.imageUrl && { "image": `${siteUrl}${person.imageUrl}` })
      };
    }
    return null;
  };

  const getSocialMediaPostingSchema = () => {
    if (socialMedia) {
      return {
        "@context": "https://schema.org",
        "@type": "SocialMediaPosting",
        "headline": socialMedia.headline,
        "articleBody": socialMedia.articleBody,
        "datePublished": socialMedia.datePublished,
        "author": {
          "@type": "Person",
          "name": socialMedia.author
        },
        "url": socialMedia.url
      };
    }
    return null;
  };

  const getJobPostingSchema = () => {
    if (jobPosting) {
      return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: jobPosting.title,
        description: jobPosting.description,
        datePosted: jobPosting.datePosted,
        validThrough: jobPosting.validThrough,
        employmentType: jobPosting.employmentType,
        hiringOrganization: {
          "@type": "Organization",
          name: jobPosting.hiringOrganization.name,
          logo: jobPosting.hiringOrganization.logo ? `${siteUrl}${jobPosting.hiringOrganization.logo}` : undefined
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: jobPosting.jobLocation.addressLocality,
            addressRegion: jobPosting.jobLocation.addressRegion,
            addressCountry: jobPosting.jobLocation.addressCountry || "Tanzania"
          }
        },
        ...(jobPosting.baseSalary && {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: jobPosting.baseSalary.currency,
            value: {
              "@type": "QuantitativeValue",
              ...(jobPosting.baseSalary.value.minValue && { minValue: jobPosting.baseSalary.value.minValue }),
              ...(jobPosting.baseSalary.value.maxValue && { maxValue: jobPosting.baseSalary.value.maxValue }),
              ...(jobPosting.baseSalary.value.value && { value: jobPosting.baseSalary.value.value }),
              unitText: jobPosting.baseSalary.unitText
            }
          }
        }),
        ...(jobPosting.applicantLocationRequirements && {
          applicantLocationRequirements: {
            "@type": "Country",
            name: jobPosting.applicantLocationRequirements
          }
        }),
        ...(jobPosting.jobLocationType && {
          jobLocationType: jobPosting.jobLocationType
        })
      };
    }
    return null;
  };

  const getJobListingSchema = () => {
    if (jobListing) {
      let itemListType;
      let itemListName;
      
      switch(jobListing.listingType) {
        case "province":
          itemListType = "JobListingsByProvince";
          itemListName = `Jobs in ${jobListing.name}`;
          break;
        case "city":
          itemListType = "JobListingsByCity";
          itemListName = `Jobs in ${jobListing.name}`;
          break;
        case "category":
          itemListType = "JobListingsByCategory"; 
          itemListName = `${jobListing.name}`;
          break;
      }
      
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": itemListName,
        "numberOfItems": jobListing.count,
        "itemListOrder": "Descending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": `${siteUrl}${canonicalUrl}`
          }
        ]
      };
    }
    return null;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Favicon */}
      <link rel="icon" href="/SalaryList favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/SalaryList favicon.png" />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content="SalaryList" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={`${siteUrl}${canonicalUrl}`} />}
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}

      {/* Structured Data */}
      {person && (
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>
      )}
      
      {socialMedia && (
        <script type="application/ld+json">
          {JSON.stringify(getSocialMediaPostingSchema())}
        </script>
      )}
      
      {jobPosting && (
        <script type="application/ld+json">
          {JSON.stringify(getJobPostingSchema())}
        </script>
      )}
      
      {jobListing && (
        <script type="application/ld+json">
          {JSON.stringify(getJobListingSchema())}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
