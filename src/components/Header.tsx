
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-blog-text font-medium text-xl transition-transform hover:scale-[1.01] focus:outline-none"
        >
          <span className="text-blog-accent">Blog</span>Domain
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-blog-text hover:text-blog-accent transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link 
            to="/category/technology" 
            className="text-blog-text hover:text-blog-accent transition-colors text-sm font-medium"
          >
            Technology
          </Link>
          <Link 
            to="/category/programming" 
            className="text-blog-text hover:text-blog-accent transition-colors text-sm font-medium"
          >
            Programming
          </Link>
          <Link 
            to="/category/design" 
            className="text-blog-text hover:text-blog-accent transition-colors text-sm font-medium"
          >
            Design
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-blog-text focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
