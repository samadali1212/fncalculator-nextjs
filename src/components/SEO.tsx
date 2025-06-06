
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
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
}

const SEO = ({
  title = "Tanzania Jobs - Find Latest Job Opportunities",
  description = "Discover the latest job opportunities across Tanzania. Browse jobs by category, location and apply for positions in Dar es Salaam, Arusha, Mwanza and other cities.",
  canonicalUrl,
  ogImage = "/SalaryList favicon.png", 
  ogType = "website",
  twitterCard = "summary_large_image",
  jobPosting
}: SEOProps) => {
  const siteUrl = "https://salarylist.co.za";
  
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
            addressRegion: "Tanzania",
            addressCountry: {
              "@type": "Country",
              name: "Tanzania"
            }
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
        applicantLocationRequirements: {
          "@type": "Country",
          name: "Tanzania"
        },
        ...(jobPosting.jobLocationType && {
          jobLocationType: jobPosting.jobLocationType
        })
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

      {/* Job Posting Structured Data */}
      {jobPosting && (
        <script type="application/ld+json">
          {JSON.stringify(getJobPostingSchema())}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
