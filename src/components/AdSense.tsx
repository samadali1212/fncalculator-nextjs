
import { useEffect, useRef } from 'react';

type AdFormat = 'auto' | 'horizontal' | 'vertical' | 'rectangle';

interface AdSenseProps {
  slot: string;
  format?: AdFormat;
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSense = ({ slot, format = 'auto', responsive = true, className = '' }: AdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && typeof window !== 'undefined') {
        // Push the ad only if adsbygoogle is defined
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        } else {
          console.log('AdSense not loaded yet');
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Base classes for the ad container
  const containerClasses = `overflow-hidden text-center ${className}`;

  return (
    <div className={containerClasses}>
      <ins
        ref={adRef as any}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6455681110933282"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSense;
