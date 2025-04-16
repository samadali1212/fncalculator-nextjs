
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to handle page reloads and ad refreshing when navigating between pages
 * @returns An object containing the pageKey and loading state functions
 */
export const usePageReload = () => {
  const [pageKey, setPageKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Function to force refresh ads
  const refreshAds = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Try to refresh Google AdSense ads
      try {
        if (window.adsbygoogle && window.adsbygoogle.push) {
          // Force refresh of ad units
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
    // Set loading state to true
    setIsLoading(true);
    
    // Generate a new key to force component remount
    setPageKey(Date.now());
    
    // Small timeout for loading state
    const timer = setTimeout(() => {
      // Scroll to top of the page
      window.scrollTo(0, 0);
      
      // Force refresh of ad units
      refreshAds();
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname, refreshAds]);

  return { pageKey, isLoading, setIsLoading, refreshAds };
};
