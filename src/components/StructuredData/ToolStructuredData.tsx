
import { Helmet } from "react-helmet-async";

interface ToolStructuredDataProps {
  toolType: string;
}

const ToolStructuredData = ({ toolType }: ToolStructuredDataProps) => {
  const getStructuredData = () => {
    switch (toolType) {
      case "paye":
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "PAYE Tax Calculator South Africa",
          "description": "Calculate your PAYE tax in South Africa with our 2024/2025 tax calculator. Monthly and annual income tax calculations based on current tax brackets and rebates.",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "ZAR"
          }
        };
      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Tax Calculator Tool",
          "description": "Financial calculator tool for tax calculations",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web Browser"
        };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default ToolStructuredData;
