
/**
 * Helper functions for Google AdSense integration
 */

// Function to refresh ads
export const refreshAds = () => {
  try {
    if (
      typeof window !== "undefined" &&
      window.adsbygoogle &&
      Array.isArray(window.adsbygoogle)
    ) {
      window.adsbygoogle.forEach((ad) => {
        if (typeof ad.refresh === "function") {
          ad.refresh();
        }
      });
    }
  } catch (error) {
    console.error("Error refreshing ads:", error);
  }
};

// Common ad slot IDs - replace these with your actual ad slots from AdSense dashboard
export const AD_SLOTS = {
  HEADER_BANNER: "1234567890",
  IN_ARTICLE: "9876543210", 
  SIDEBAR: "5432167890",
  FOOTER_BANNER: "2468013579",
  CONTENT_BANNER: "1357924680",
  RECTANGLE_AD: "3691215487"
};

// Ad formats
export type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";

// Helper to detect ad blockers (basic implementation)
export const detectAdBlocker = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    let detected = false;
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.onerror = () => {
      detected = true;
      resolve(true);
    };
    script.onload = () => {
      resolve(detected);
    };
    document.head.appendChild(script);
    
    setTimeout(() => {
      resolve(detected);
    }, 500);
  });
};
