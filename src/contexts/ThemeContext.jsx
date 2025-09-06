import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  // Initialize theme based on system preference or saved preference
  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const savedIsSystemTheme = localStorage.getItem('isSystemTheme');
      
      if (savedTheme && savedIsSystemTheme === 'false') {
        // User has manually set a preference
        setDarkMode(savedTheme === 'dark');
        setIsSystemTheme(false);
      } else {
        // Use system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(systemPrefersDark);
        setIsSystemTheme(true);
        localStorage.setItem('isSystemTheme', 'true');
      }
    };

    initializeTheme();
  }, []);

  // Apply theme changes to DOM
  useEffect(() => {
    const root = document.documentElement;
    
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save theme preference only if manually set
    if (!isSystemTheme) {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode, isSystemTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only auto-update if following system theme
      if (isSystemTheme) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [isSystemTheme]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setIsSystemTheme(false);
    localStorage.setItem('isSystemTheme', 'false');
  };

  const resetToSystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(systemPrefersDark);
    setIsSystemTheme(true);
    localStorage.setItem('isSystemTheme', 'true');
    localStorage.removeItem('theme');
  };

  const value = {
    darkMode,
    isSystemTheme,
    toggleTheme,
    resetToSystemTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};