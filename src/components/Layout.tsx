
import { ReactNode, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePageReload } from "../hooks/usePageReload";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pageKey, refreshAds } = usePageReload();

  // Initial ad load and periodic refresh
  useEffect(() => {
    // Initial ad refresh when page loads
    refreshAds();

    // Refresh ads periodically (every 60 seconds)
    const periodicRefresh = setInterval(() => {
      refreshAds();
    }, 60000);

    return () => clearInterval(periodicRefresh);
  }, [refreshAds]);

  return (
    <TooltipProvider>
      <div className="bg-[#f6f6f0] min-h-screen" key={pageKey}>
        <Toaster />
        <Sonner />
        <div>
          {children}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
