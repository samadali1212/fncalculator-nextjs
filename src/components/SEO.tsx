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
  title = "Deni La Gari - Tanzania Traffic Offence Checker",
  description = "Check your traffic violations and outstanding fines in Tanzania. Search using your vehicle registration, driving license, or violation reference number.",
  canonicalUrl,
  ogImage = "/denilagarifavicon.png", 
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) => {
  const siteUrl = "https://denilagari.com";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Favicon */}
      <link rel="icon" href="/denilagarifavicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/denilagarifavicon.png" />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content="Deni La Gari" />
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
    </Helmet>
  );
};

export default SEO;
