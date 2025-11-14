/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals: LCP, FID, CLS, FCP, TTFB
 */

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
      onINP(onPerfEntry);
    }).catch(err => {
      console.warn('Web Vitals not available:', err);
    });
  }
};

// Log performance metrics to console (development only)
export const logWebVitals = () => {
  if (import.meta.env.DEV) {
    reportWebVitals((metric) => {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
      
      // Color-code based on thresholds
      const thresholds = {
        LCP: { good: 2500, needsImprovement: 4000 },
        FID: { good: 100, needsImprovement: 300 },
        CLS: { good: 0.1, needsImprovement: 0.25 },
        FCP: { good: 1800, needsImprovement: 3000 },
        TTFB: { good: 800, needsImprovement: 1800 },
        INP: { good: 200, needsImprovement: 500 }
      };
      
      const threshold = thresholds[metric.name];
      if (threshold) {
        if (metric.value <= threshold.good) {
          console.log(`✅ ${metric.name} is GOOD`);
        } else if (metric.value <= threshold.needsImprovement) {
          console.log(`⚠️ ${metric.name} needs improvement`);
        } else {
          console.log(`❌ ${metric.name} is POOR`);
        }
      }
    });
  }
};

// Send metrics to analytics
export const sendToAnalytics = (metric) => {
  // Send to Vercel Analytics or your preferred analytics service
  if (window.va) {
    window.va('event', 'Web Vitals', {
      metric: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      rating: metric.rating
    });
  }
};
