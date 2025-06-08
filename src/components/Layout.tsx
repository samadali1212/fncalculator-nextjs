
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    // Try to push a new ad on every pathname change
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        // It's possible there are multiple ins.adsbygoogle in the DOM: this just triggers AdSense for all of them.
        window.adsbygoogle.push({});
        console.log("AdSense reload triggered from Layout for:", location.pathname);
      } catch (e) {
        console.error("AdSense reload error in Layout effect:", e);
      }
    }
  }, [location.pathname]);

  return (
    <TooltipProvider>
      <div className="bg-[#f6f6f0] min-h-screen">
        <Toaster />
        <Sonner />
        <main>
          {children}
        </main>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
