
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaForPrerender } from '../utils/prerender';

const PrerendererFix = () => {
  const location = useLocation();

  useEffect(() => {
    // Update meta tags for current route
    updateMetaForPrerender(location.pathname);
    
    // For react-snap compatibility
    if (typeof window !== 'undefined' && window.navigator.userAgent.includes('ReactSnap')) {
      // Give react-snap time to capture the page
      setTimeout(() => {
        updateMetaForPrerender(location.pathname);
      }, 500);
    }
  }, [location.pathname]);

  return null;
};

export default PrerendererFix;
