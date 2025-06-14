
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "TMS Check" },
    { path: "/insurance", label: "Insurance Check" },
    { path: "/paye", label: "PAYE Calculator" },
    { path: "/crdb", label: "CRDB Loan Calculator" },
    { path: "/events", label: "Holidays" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    
    // Handle exact matches for jobs pages to avoid conflicts
    if (path === "/jobs" && location.pathname === "/jobs") return true;
    if (path === "/jobs-browse" && location.pathname === "/jobs-browse") return true;
    
    // For other paths, use startsWith but exclude jobs paths to avoid conflicts
    if (path !== "/" && path !== "/jobs" && path !== "/jobs-browse" && location.pathname.startsWith(path)) return true;
    
    // Handle job detail pages and sub-routes for /jobs
    if (path === "/jobs" && location.pathname.startsWith("/jobs/") && !location.pathname.startsWith("/jobs-browse")) return true;
    
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#f6f6f0]"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Use regular anchor for the logo/homepage link */}
        <a 
          href="/" 
          className="flex items-center gap-2 font-bold text-2xl"
        >
          <img src="/denilagarilogo.png" alt="Deni La Gari" className="h-5" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive(item.path)
                  ? "text-[#1a1f2c] bg-white shadow-sm"
                  : "text-[#555] hover:text-[#000] hover:bg-white/60"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-white/80 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="bg-white px-4 pt-2 pb-3 space-y-1 shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "text-[#333] bg-gray-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#333]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
