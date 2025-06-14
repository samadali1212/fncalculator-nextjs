
import React from 'react';

interface ToolStructuredDataProps {
  toolType: 'traffic' | 'insurance' | 'paye';
}

const ToolStructuredData = ({ toolType }: ToolStructuredDataProps) => {
  const getStructuredData = () => {
    if (toolType === 'traffic') {
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "TMS Traffic Fine Check - Deni La Gari",
        "description": "Free online tool to check traffic violations and outstanding fines in Tanzania using official TMS data. Search by vehicle registration, driving license, or violation reference number.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": ["Web"],
        "url": "https://denilagari.com/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "ratingCount": 5984,
          "bestRating": 5,
          "worstRating": 3
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
    } else if (toolType === 'insurance') {
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "TIRA MIS Free Insurance Sticker Check - Bima Ya Gari",
        "description": "Free online tool to verify vehicle insurance coverage status in Tanzania using official TIRA data. Check insurance by vehicle registration, policy number, or sticker number.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": ["Web"],
        "url": "https://denilagari.com/insurance",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "ratingCount": 4892,
          "bestRating": 5,
          "worstRating": 2
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
    } else {
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "PAYE Tax Calculator Tanzania",
        "description": "Free online PAYE tax calculator in Tanzania. Calculate your monthly and annual income tax, PAYE rates, and take-home pay based on current TRA tax brackets for 2024/2025.",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": ["Web"],
        "url": "https://denilagari.com/paye",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 3247,
          "bestRating": 5,
          "worstRating": 4
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
        "datePublished": "2024-03-01",
        "softwareVersion": "1.0",
        "keywords": ["PAYE calculator", "Tanzania tax calculator", "income tax calculator", "TRA tax rates", "salary calculator Tanzania"]
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
