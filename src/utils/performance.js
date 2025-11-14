/**
 * Performance Optimization Utilities
 */

// Debounce function for scroll and resize events
export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for high-frequency events
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Preload critical resources
export const preloadCriticalAssets = (assets = []) => {
  assets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = asset.type || 'image';
    link.href = asset.url;
    if (asset.type === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Detect slow connection
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' || 
           connection.saveData;
  }
  return false;
};

// Optimize animations based on device capabilities
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Request Idle Callback polyfill
export const requestIdleCallback = typeof window !== 'undefined' && window.requestIdleCallback 
  ? window.requestIdleCallback 
  : (cb) => setTimeout(cb, 1);

// Cancel Idle Callback polyfill
export const cancelIdleCallback = typeof window !== 'undefined' && window.cancelIdleCallback
  ? window.cancelIdleCallback
  : clearTimeout;

// Measure component render time
export const measureRenderTime = (componentName, callback) => {
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`[Performance] ${componentName} rendered in ${(end - start).toFixed(2)}ms`);
};

// Check if device has good performance
export const hasGoodPerformance = () => {
  // Check for hardware concurrency (number of CPU cores)
  const cores = navigator.hardwareConcurrency || 2;
  // Check for available memory (if supported)
  const memory = navigator.deviceMemory || 4;
  
  return cores >= 4 && memory >= 4 && !isSlowConnection();
};
