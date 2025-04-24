
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
}

const SEO = ({
  title = "South African Salary Guide & Career Information",
  description = "Access South Africa's most comprehensive salary guide. Find average salaries by profession, hourly rates, tax information, and more to help with your career planning.",
  canonicalUrl,
  ogImage = "/sassainsiderfavicon.png", 
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) => {
  const siteUrl = "https://sassainsider.co.za";
  const fullTitle = title.includes("Sassa Insider") ? `${title} - Sassa Insider`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Favicon */}
      <link rel="icon" href="/sassainsiderfavicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/sassainsiderfavicon.png" />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content="Sassa Insider" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={`${siteUrl}${canonicalUrl}`} />}
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}
    </Helmet>
  );
};

export default SEO;
