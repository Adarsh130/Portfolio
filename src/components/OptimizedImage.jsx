import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  priority = false,
  placeholder = true,
  width,
  height,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Create WebP/AVIF source set if supported
    const img = new Image();
    
    // Check for WebP support and use it if available
    if (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png')) {
      const baseSrc = src.substring(0, src.lastIndexOf('.'));
      const ext = src.substring(src.lastIndexOf('.'));
      
      // Try WebP first for better compression
      const webpSrc = `${baseSrc}.webp`;
      
      img.onerror = () => {
        // Fallback to original if WebP not found
        setCurrentSrc(src);
      };
      
      img.onload = () => {
        setCurrentSrc(webpSrc);
      };
      
      // For now, just use original - WebP conversion should be done at build time
      setCurrentSrc(src);
    } else {
      setCurrentSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state - Simplified for performance */}
      {placeholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
        />
      )}
      
      {/* Actual Image */}
      <motion.img
        src={currentSrc || src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`w-full h-full object-cover ${hasError ? 'hidden' : ''}`}
        style={{
          willChange: 'opacity'
        }}
        {...props}
      />
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;