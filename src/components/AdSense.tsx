
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type AdFormat = 'auto' | 'horizontal' | 'vertical' | 'rectangle' | 'leaderboard';

interface AdSenseProps {
  slot: string;
  format?: AdFormat;
  responsive?: boolean;
  className?: string;
  layout?: 'in-article' | 'in-feed' | 'normal';
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSense = ({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  className = '',
  layout = 'normal'
}: AdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [adKey, setAdKey] = useState(Date.now());
  const location = useLocation();
  
  // Reset the ad when the route changes
  useEffect(() => {
    setAdKey(Date.now());
  }, [location.pathname]);
  
  useEffect(() => {
    try {
      if (adRef.current && typeof window !== 'undefined') {
        // Push the ad only if adsbygoogle is defined
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
          console.log(`AdSense ad pushed: ${slot} at ${location.pathname}`);
        } else {
          console.log('AdSense not loaded yet');
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [slot, adKey, location.pathname]);

  // Base classes for the ad container
  const containerClasses = `overflow-hidden text-center ${className}`;
  
  // Format sizing classes
  const formatClasses = {
    horizontal: 'min-h-[90px] w-full',
    vertical: 'min-h-[600px] w-full max-w-[160px] mx-auto',
    rectangle: 'min-h-[250px] w-full max-w-[336px] mx-auto',
    leaderboard: 'min-h-[90px] w-full max-w-[728px] mx-auto',
    auto: 'min-h-[100px] w-full',
  };
  
  // Get the class based on format
  const sizeClass = formatClasses[format] || formatClasses.auto;

  // Create additional attributes based on layout type
  const getAdAttributes = () => {
    const attributes: Record<string, string> = {
      'data-ad-client': 'ca-pub-6455681110933282',
      'data-ad-slot': slot,
      'data-ad-format': format,
      'data-full-width-responsive': responsive ? 'true' : 'false',
    };
    
    // Add layout-specific attributes
    if (layout === 'in-article') {
      attributes['data-ad-layout'] = 'in-article';
      attributes['data-ad-format'] = 'fluid';
    } else if (layout === 'in-feed') {
      attributes['data-ad-layout-key'] = '-fb+5w+4e-db+86';
      attributes['data-ad-format'] = 'fluid';
    }
    
    return attributes;
  };

  return (
    <div className={`${containerClasses} ${sizeClass}`} key={adKey}>
      <ins
        ref={adRef as any}
        className="adsbygoogle"
        style={{ display: 'block' }}
        {...getAdAttributes()}
      />
    </div>
  );
};

export default AdSense;
