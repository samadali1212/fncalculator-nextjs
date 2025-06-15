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
}

const SEO = ({
  title, // Remove default value
  description = "TMS check is the easiest way to know deni la gari in Tanzania, including traffic fines and penalties. Whether you want to check deni la gari before buying a vehicle or need to confirm if your car has any traffic fines, Denilagari.com provides quick and accurate results.",
  canonicalUrl,
  ogImage = "/denilagarifavicon.png", 
  ogType = "website",
  twitterCard = "summary_large_image",
  person,
  socialMedia
}: SEOProps) => {
  const siteUrl = "https://denilagari.com";
  const defaultTitle = "Kuangalia Deni La Gari (TMS Check)";
  
  // Use the passed title or fall back to default
  const pageTitle = title || defaultTitle;

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

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Favicon */}
      <link rel="icon" href="/denilagarifavicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/denilagarifavicon.png" />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content="denilagari" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={`${siteUrl}${canonicalUrl}`} />}
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
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
    </Helmet>
  );
};

export default SEO;
