import React, { useState, useEffect } from 'react';
import IsotopeBackground from './IsotopeBackground';
import IsotopeGrid from './IsotopeGrid';
import IsotopeParticles from './IsotopeParticles';

const IsotopeUI = ({ 
  theme = 'blue',
  intensity = 'medium',
  showGrid = true,
  showParticles = true,
  showBackground = true,
  animated = true,
  className = '',
  glowEffects = true,
  magneticParticles = false,
  pulseIntensity = 'medium',
  morphingShapes = true
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark') ||
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  const themeConfig = {
    blue: {
      primary: isDark ? '#60A5FA' : '#3B82F6',
      secondary: isDark ? '#93C5FD' : '#1E40AF',
      accent: isDark ? '#DBEAFE' : '#1E3A8A'
    },
    purple: {
      primary: isDark ? '#A78BFA' : '#8B5CF6',
      secondary: isDark ? '#C4B5FD' : '#7C3AED',
      accent: isDark ? '#E9D5FF' : '#5B21B6'
    },
    pink: {
      primary: isDark ? '#F472B6' : '#EC4899',
      secondary: isDark ? '#F9A8D4' : '#DB2777',
      accent: isDark ? '#FCE7F3' : '#BE185D'
    },
    green: {
      primary: isDark ? '#34D399' : '#10B981',
      secondary: isDark ? '#6EE7B7' : '#059669',
      accent: isDark ? '#A7F3D0' : '#047857'
    },
    orange: {
      primary: isDark ? '#FBBF24' : '#F59E0B',
      secondary: isDark ? '#FCD34D' : '#D97706',
      accent: isDark ? '#FEF3C7' : '#B45309'
    },
    indigo: {
      primary: isDark ? '#818CF8' : '#6366F1',
      secondary: isDark ? '#A5B4FC' : '#4F46E5',
      accent: isDark ? '#C7D2FE' : '#3730A3'
    }
  };

  const intensityConfig = {
    low: {
      gridOpacity: 0.03,
      particleCount: 8,
      particleOpacity: 0.2,
      backgroundDensity: 'low',
      backgroundOpacity: 0.04,
      gridSize: 30,
      pulseIntensity: 'low'
    },
    medium: {
      gridOpacity: 0.05,
      particleCount: 15,
      particleOpacity: 0.3,
      backgroundDensity: 'medium',
      backgroundOpacity: 0.06,
      gridSize: 25,
      pulseIntensity: 'medium'
    },
    high: {
      gridOpacity: 0.08,
      particleCount: 25,
      particleOpacity: 0.4,
      backgroundDensity: 'high',
      backgroundOpacity: 0.08,
      gridSize: 20,
      pulseIntensity: 'high'
    },
    ultra: {
      gridOpacity: 0.1,
      particleCount: 35,
      particleOpacity: 0.5,
      backgroundDensity: 'ultra',
      backgroundOpacity: 0.1,
      gridSize: 18,
      pulseIntensity: 'high'
    }
  };

  const config = intensityConfig[intensity];
  const colors = themeConfig[theme];

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none isotope-container ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      {showGrid && (
        <IsotopeGrid
          gridSize={config.gridSize}
          color={colors.accent}
          opacity={config.gridOpacity}
          animated={animated}
          glowEffect={glowEffects}
          pulseIntensity={config.pulseIntensity}
        />
      )}
      
      {showBackground && (
        <IsotopeBackground
          density={config.backgroundDensity}
          color={theme}
          opacity={config.backgroundOpacity}
          animated={animated && morphingShapes}
          pattern={intensity === 'high' || intensity === 'ultra' ? 'hexagon' : 'grid'}
        />
      )}
      
      {showParticles && (
        <IsotopeParticles
          count={config.particleCount}
          color={colors.primary}
          opacity={config.particleOpacity}
          size="mixed"
          speed={intensity === 'high' || intensity === 'ultra' ? 'fast' : 'medium'}
          shape={intensity === 'ultra' ? 'hexagon' : 'circle'}
          glowEffect={glowEffects}
          magneticEffect={magneticParticles}
        />
      )}
    </div>
  );
};

export default IsotopeUI;