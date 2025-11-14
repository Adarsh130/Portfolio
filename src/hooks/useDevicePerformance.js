/**
 * Device Performance Hook
 * Detects device capabilities and network conditions
 */

import { useState, useEffect } from 'react';

export const useDevicePerformance = () => {
  const [performance, setPerformance] = useState({
    isHighPerformance: true,
    isMobile: false,
    isSlowConnection: false,
    shouldReduceMotion: false,
    cores: 4,
    memory: 4
  });

  useEffect(() => {
    // Check device memory
    const memory = navigator.deviceMemory || 4;
    
    // Check CPU cores
    const cores = navigator.hardwareConcurrency || 4;
    
    // Check connection speed
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection ? 
      (connection.effectiveType === 'slow-2g' || 
       connection.effectiveType === '2g' || 
       connection.saveData) : false;
    
    // Check for mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     window.innerWidth < 768;
    
    // Check for reduced motion preference
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Determine if device has good performance
    const isHighPerformance = cores >= 4 && memory >= 4 && !isSlowConnection && !isMobile;
    
    setPerformance({
      isHighPerformance,
      isMobile,
      isSlowConnection,
      shouldReduceMotion,
      cores,
      memory
    });

    // Log performance info in development
    if (import.meta.env.DEV) {
      console.log('[Device Performance]', {
        cores,
        memory: `${memory}GB`,
        connection: connection?.effectiveType || 'unknown',
        isHighPerformance: isHighPerformance ? '✅' : '❌',
        isMobile: isMobile ? '📱' : '🖥️'
      });
    }
  }, []);

  return performance;
};

/**
 * Get recommended isotope intensity based on device performance
 */
export const getRecommendedIntensity = (performance) => {
  if (!performance.isHighPerformance || performance.shouldReduceMotion) {
    return 'low';
  }
  if (performance.isMobile) {
    return 'low';
  }
  if (performance.isSlowConnection) {
    return 'low';
  }
  if (performance.cores >= 8 && performance.memory >= 8) {
    return 'high';
  }
  return 'medium';
};

/**
 * Determine if isotope should be enabled at all
 */
export const shouldEnableIsotope = (performance) => {
  // Disable on very low-end devices
  if (performance.cores < 2 || performance.memory < 2) {
    return false;
  }
  // Disable if user prefers reduced motion
  if (performance.shouldReduceMotion) {
    return false;
  }
  return true;
};
