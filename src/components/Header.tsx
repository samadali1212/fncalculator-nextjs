
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <img src="/MoneyWorth.png" alt="MoneyWorth Logo" className="h-6" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100",
              location.pathname === "/" && "font-medium text-gray-900"
            )}
          >
            Home
          </Link>
          <Link
            to="/salaries"
            className={cn(
              "px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100",
              location.pathname === "/salaries" && "font-medium text-gray-900"
            )}
          >
            Salaries
          </Link>
          <Link
            to="/hourly-rates"
            className={cn(
              "px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100",
              location.pathname === "/hourly-rates" && "font-medium text-gray-900"
            )}
          >
            Hourly Rates
          </Link>
          <Link
            to="/tax-calculator"
            className={cn(
              "px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100",
              location.pathname === "/tax-calculator" && "font-medium text-gray-900"
            )}
          >
            Tax Calculator
          </Link>
          <Link
            to="/about"
            className={cn(
              "px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100",
              location.pathname === "/about" && "font-medium text-gray-900"
            )}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation */}
        {isOpen && isMobile && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-sm py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-2">
              <Link
                to="/"
                className={cn(
                  "px-4 py-2 rounded-md hover:bg-gray-100",
                  location.pathname === "/" &&
                    "bg-gray-100 font-medium text-gray-900"
                )}
              >
                Home
              </Link>
              <Link
                to="/salaries"
                className={cn(
                  "px-4 py-2 rounded-md hover:bg-gray-100",
                  location.pathname === "/salaries" &&
                    "bg-gray-100 font-medium text-gray-900"
                )}
              >
                Salaries
              </Link>
              <Link
                to="/hourly-rates"
                className={cn(
                  "px-4 py-2 rounded-md hover:bg-gray-100",
                  location.pathname === "/hourly-rates" &&
                    "bg-gray-100 font-medium text-gray-900"
                )}
              >
                Hourly Rates
              </Link>
              <Link
                to="/tax-calculator"
                className={cn(
                  "px-4 py-2 rounded-md hover:bg-gray-100",
                  location.pathname === "/tax-calculator" &&
                    "bg-gray-100 font-medium text-gray-900"
                )}
              >
                Tax Calculator
              </Link>
              <Link
                to="/about"
                className={cn(
                  "px-4 py-2 rounded-md hover:bg-gray-100",
                  location.pathname === "/about" &&
                    "bg-gray-100 font-medium text-gray-900"
                )}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
