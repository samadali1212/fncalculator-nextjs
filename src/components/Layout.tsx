
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TooltipProvider>
        <div className="bg-[#f6f6f0] min-h-screen">
          <Toaster />
          <Sonner />
          <div>
            {children}
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

export default Layout;
