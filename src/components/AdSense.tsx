
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
        // Verbose logging for AdSense initialization
        console.log(`Initializing AdSense for slot: ${slot}`);
        console.log(`Current pathname: ${location.pathname}`);
        
        let attempts = 0;
        const maxAttempts = 10;
        
        const checkAdsbygoogle = () => {
          attempts++;
          
          if (window.adsbygoogle) {
            try {
              window.adsbygoogle.push({});
              console.log(`AdSense ad successfully pushed for slot: ${slot}`);
            } catch (pushError) {
              console.error(`Error pushing AdSense ad for slot ${slot}:`, pushError);
            }
          } else {
            console.warn(`AdSense not ready (Attempt ${attempts})`);
            
            if (attempts < maxAttempts) {
              // Retry with exponential backoff
              setTimeout(checkAdsbygoogle, Math.pow(2, attempts) * 100);
            } else {
              console.error('AdSense failed to initialize after multiple attempts');
            }
          }
        };
        
        // Initial check
        checkAdsbygoogle();
        
        return () => {
          // Cleanup logic (if needed)
        };
      }
    } catch (error) {
      console.error('Critical AdSense initialization error:', error);
    }
  }, [slot, adKey, location.pathname]);

  // For display ads with no specific format
  const isDisplayAd = slot === "9889084223";
  
  if (isDisplayAd) {
    return (
      <div className={className} key={adKey}>
        <ins
          ref={adRef as any}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7886138136550351"
          data-ad-slot="9889084223"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

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
      'data-ad-client': 'ca-pub-7886138136550351',
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
