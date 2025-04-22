
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  width?: number;
  height?: number;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackClassName = '',
  width,
  height 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  
  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setImgSrc(null);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setIsLoaded(true); // Mark as loaded to remove loading state
      setImgSrc(null); // Will use fallback
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  return (
    <>
      {!isLoaded && (
        <div 
          className={cn(
            "bg-gray-200 animate-pulse rounded", 
            fallbackClassName
          )}
          style={{ width, height }}
        />
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300",
            className
          )}
          loading="lazy"
        />
      )}
      {isLoaded && !imgSrc && (
        <div 
          className={cn(
            "bg-gray-100 flex items-center justify-center text-gray-400 rounded",
            fallbackClassName
          )}
          style={{ width, height }}
        >
          {alt.substring(0, 2).toUpperCase()}
        </div>
      )}
    </>
  );
};

export default LazyImage;
