
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to handle page reloads and ad refreshing when navigating between pages
 * @returns An object containing the pageKey and loading state
 */
export const usePageReload = () => {
  const [pageKey, setPageKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
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

  // Reset component state and force reload when location changes
  useEffect(() => {
    setIsLoading(true);
    setPageKey(Date.now());
    
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      refreshAds();
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname, refreshAds]);

  return { pageKey, isLoading, setIsLoading, refreshAds };
};
