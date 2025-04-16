
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to handle page reloads when navigating between pages
 * @returns An object containing the pageKey
 */
export const usePageReload = () => {
  const [pageKey, setPageKey] = useState(Date.now());
  const location = useLocation();

  // Function to force refresh ads
  const refreshAds = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        if (window.adsbygoogle && window.adsbygoogle.push) {
          window.adsbygoogle.push({});
          console.log('Ad refresh triggered');
        }
      } catch (e) {
        console.error('Error refreshing ads:', e);
      }
    }
  }, []);

  // Reset component state when location changes
  useEffect(() => {
    setPageKey(Date.now());
    
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      refreshAds();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname, refreshAds]);

  return { pageKey, refreshAds };
};
