
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePageReload } from "../hooks/usePageReload";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pageKey, isLoading } = usePageReload();

  return (
    <TooltipProvider>
      <div className="bg-[#f6f6f0] min-h-screen">
        <Toaster />
        <Sonner />
        <motion.div
          key={pageKey} // Add key to force re-render when changing pages
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </TooltipProvider>
  );
};

export default Layout;
