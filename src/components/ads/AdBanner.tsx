
import { useEffect, useRef } from "react";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = ({ 
  adSlot, 
  adFormat = "auto", 
  style = {}, 
  className = "" 
}: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // Push the ad to Google AdSense
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  let formatClass = "block";
  if (adFormat === "rectangle") formatClass = "w-full max-w-[336px] h-[280px]";
  if (adFormat === "horizontal") formatClass = "w-full h-[90px]";
  if (adFormat === "vertical") formatClass = "w-[160px] h-[600px]";

  return (
    <div className={`ad-container my-4 mx-auto text-center ${className}`}>
      <div className="text-xs text-gray-400 mb-1">Advertisement</div>
      <div
        ref={adRef}
        className={`adsbygoogle ${formatClass}`}
        style={style}
        data-ad-client="ca-pub-7886138136550351"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
