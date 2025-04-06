
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface InArticleAdProps {
  adSlot?: string;
  className?: string;
}

const InArticleAd = ({ adSlot, className = "" }: InArticleAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // Push the ad to adsbygoogle for rendering
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`ad-container my-6 mx-auto text-center ${className}`}>
      <div ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-7886138136550351"
          data-ad-slot={adSlot}
        ></ins>
      </div>
    </div>
  );
};

export default InArticleAd;
