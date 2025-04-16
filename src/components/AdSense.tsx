
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
  const [adLoaded, setAdLoaded] = useState(false);
  
  // Reset the ad when the route changes
  useEffect(() => {
    setAdKey(Date.now());
    setAdLoaded(false);
  }, [location.pathname]);
  
  useEffect(() => {
    try {
      if (adRef.current && typeof window !== 'undefined') {
        // Verbose logging for AdSense initialization
        console.log(`Initializing AdSense for slot: ${slot} at ${location.pathname}`);
        
        // Traditional way to push ads
        if (window.adsbygoogle) {
          try {
            window.adsbygoogle.push({});
            console.log(`AdSense ad successfully pushed for slot: ${slot}`);
            setAdLoaded(true);
          } catch (pushError) {
            console.error(`Error pushing AdSense ad for slot ${slot}:`, pushError);
          }
        } else {
          console.warn('AdSense not available yet - will rely on traditional page load');
          
          // Set up a fallback timer to try again
          const fallbackTimer = setTimeout(() => {
            if (window.adsbygoogle) {
              try {
                window.adsbygoogle.push({});
                console.log(`AdSense ad pushed via fallback for slot: ${slot}`);
                setAdLoaded(true);
              } catch (e) {
                console.error('Fallback ad push error:', e);
              }
            }
          }, 1000);
          
          return () => clearTimeout(fallbackTimer);
        }
      }
    } catch (error) {
      console.error('Critical AdSense initialization error:', error);
    }
    
    // Add event listener for ad load/error
    const handleAdLoad = () => {
      console.log(`Ad in slot ${slot} loaded successfully`);
      setAdLoaded(true);
    };
    
    const adElement = adRef.current;
    if (adElement) {
      adElement.addEventListener('load', handleAdLoad);
      
      return () => {
        adElement.removeEventListener('load', handleAdLoad);
      };
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
        {!adLoaded && (
          <div className="h-20 w-full bg-gray-100 animate-pulse rounded">
            <div className="flex items-center justify-center h-full">
              <span className="text-xs text-gray-400">Advertisement loading...</span>
            </div>
          </div>
        )}
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
      {!adLoaded && (
        <div className="h-20 w-full bg-gray-100 animate-pulse rounded">
          <div className="flex items-center justify-center h-full">
            <span className="text-xs text-gray-400">Advertisement loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdSense;
