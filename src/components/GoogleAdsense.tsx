
import { useEffect, useRef } from "react";

interface GoogleAdsenseProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  style?: React.CSSProperties;
  className?: string;
  responsive?: boolean;
}

const GoogleAdsense = ({
  slot,
  format = "auto",
  style = {},
  className = "",
  responsive = true,
}: GoogleAdsenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only run this on client-side
    if (typeof window !== "undefined") {
      try {
        // Add AdSense script to the document if it's not already loaded
        if (!window.adsbygoogle) {
          const script = document.createElement("script");
          script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
          script.async = true;
          script.crossOrigin = "anonymous";
          // Replace "ca-pub-XXXXXXXXXXXXXXXX" with your actual AdSense Publisher ID
          script.dataset.adClient = "ca-pub-XXXXXXXXXXXXXXXX";
          document.head.appendChild(script);
        }
        
        // Push the ad to Google AdSense when the component mounts
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("Error loading AdSense ads:", error);
      }
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense Publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default GoogleAdsense;
