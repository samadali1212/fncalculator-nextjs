
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
  title = "MoneyWorth - South African Financial Guides & Calculators",
  description = "MoneyWorth provides expert financial insights tailored for South Africans. Find salary guides, tax calculators, and practical money advice.",
  canonicalUrl,
  ogImage = "/MoneyWorth.webp", 
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) => {
  const siteUrl = "https://moneyworth.co.za";
  const fullTitle = title.includes("MoneyWorth") ? title : `${title} | MoneyWorth`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Favicon */}
      <link rel="icon" href="/Money Worth Favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/Money Worth Favicon.png" />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content="MoneyWorth" />
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
