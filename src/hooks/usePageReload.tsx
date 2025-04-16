
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to handle page reloads and ad refreshing when navigating between pages
 * @returns An object containing the pageKey and a setIsLoading function
 */
export const usePageReload = () => {
  const [pageKey, setPageKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('Error refreshing ads:', e);
        }
      }
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { pageKey, isLoading, setIsLoading };
};
