
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowRight, Sparkles, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    setMounted(true);
    
    // Trigger glitch effect periodically
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [location.pathname]);

  const FloatingElement = ({ delay = 0, children, className = "" }) => (
    <div 
      className={`absolute animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} className="top-20 left-10 text-purple-500/20">
          <Sparkles size={24} />
        </FloatingElement>
        <FloatingElement delay={1000} className="top-40 right-20 text-blue-500/20">
          <Zap size={32} />
        </FloatingElement>
        <FloatingElement delay={2000} className="bottom-40 left-1/4 text-pink-500/20">
          <Sparkles size={16} />
        </FloatingElement>
        <FloatingElement delay={1500} className="bottom-60 right-1/3 text-cyan-500/20">
          <Zap size={20} />
        </FloatingElement>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className={`max-w-2xl w-full text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main 404 Display */}
          <div className="relative mb-8">
            <h1 className={`text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 transition-all duration-200 ${glitchActive ? 'animate-pulse' : ''}`}>
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-white/5 transform translate-x-2 translate-y-2 -z-10">
              404
            </div>
          </div>

          {/* Glitch effect overlay */}
          {glitchActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl md:text-[12rem] font-black text-red-500/50 transform -translate-x-1">
                404
              </div>
            </div>
          )}

          {/* Subtitle with animation */}
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
              Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Cyberspace</span>
            </h2>
            <p className="text-xl text-gray-300 mb-2 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              The page you're looking for has drifted into the digital void
            </p>
            <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <p className="text-red-400 text-sm font-mono">
                ERROR: <span className="text-white">{location.pathname}</span> not found
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <Link to="/" className="block">
              <Button 
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group"
              >
                <Home className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Return Home
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Link to="/events" className="flex-1">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
                >
                  <Search className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Events
                </Button>
              </Link>
              
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
              >
                Go Back
                <ArrowRight className="ml-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Fun fact */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <p className="text-gray-400 text-sm">
              <span className="text-purple-400 font-semibold">Fun fact:</span> The first 404 error was at CERN in 1992. You're now part of internet history! 🚀
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
