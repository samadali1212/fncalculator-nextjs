
import React from 'react';

interface ToolStructuredDataProps {
  toolType: 'traffic' | 'insurance';
}

const ToolStructuredData = ({ toolType }: ToolStructuredDataProps) => {
  const getStructuredData = () => {
    if (toolType === 'traffic') {
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "TMS Traffic Fine Check - Denilagari",
        "description": "Free online tool to check traffic violations and outstanding fines in Tanzania using official TMS data. Search by vehicle registration, driving license, or violation reference number.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": ["Web"],
        "url": "https://denilagari.com/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.6,
          "ratingCount": 6801,
          "bestRating": 5,
          "worstRating": 1
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TZS"
        },
        "author": {
          "@type": "Organization",
          "name": "Deni La Gari",
          "url": "https://denilagari.com"
        },
        "datePublished": "2024-01-15",
        "softwareVersion": "2.1"
      };
    } else {
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "TIRA Insurance Check - Denilagari",
        "description": "Free online tool to verify vehicle insurance coverage status in Tanzania using official TIRA data. Check insurance by vehicle registration, policy number, or sticker number.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": ["Web"],
        "url": "https://denilagari.com/insurance",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "ratingCount": 4892,
          "bestRating": 5,
          "worstRating": 1
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TZS"
        },
        "author": {
          "@type": "Organization",
          "name": "Deni La Gari",
          "url": "https://denilagari.com"
        },
        "datePublished": "2024-02-10",
        "softwareVersion": "1.5"
      };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
};

export default ToolStructuredData;
