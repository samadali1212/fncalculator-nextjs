
import { useEffect, useRef } from "react";

interface InArticleAdProps {
  adSlot: string;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const InArticleAd = ({ adSlot, className = "" }: InArticleAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`ad-container my-6 mx-auto text-center ${className}`}>
      <div className="text-xs text-gray-400 mb-1">Advertisement</div>
      <div
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-7886138136550351"
        data-ad-slot={adSlot}
      />
    </div>
  );
};

export default InArticleAd;
