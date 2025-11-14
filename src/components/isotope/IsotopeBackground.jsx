import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IsotopeBackground = ({ 
  density = 'medium', 
  color = 'blue', 
  opacity = 0.1,
  animated = true,
  pattern = 'grid',
  className = ''
}) => {
  const [elements, setElements] = useState([]);

  const densitySettings = {
    low: 6,
    medium: 10,
    high: 15,
    ultra: 20
  };

  const colorSchemes = {
    blue: ['#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE'],
    purple: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#E9D5FF'],
    pink: ['#EC4899', '#F472B6', '#F9A8D4', '#FCE7F3'],
    green: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
    orange: ['#F59E0B', '#FBBF24', '#FCD34D', '#FEF3C7'],
    red: ['#EF4444', '#F87171', '#FCA5A5', '#FEE2E2'],
    indigo: ['#6366F1', '#818CF8', '#A5B4FC', '#C7D2FE'],
    teal: ['#14B8A6', '#2DD4BF', '#5EEAD4', '#99F6E4']
  };

  const patternTypes = {
    grid: 'grid',
    hexagon: 'hexagon',
    triangle: 'triangle',
    circle: 'circle',
    diamond: 'diamond'
  };

  useEffect(() => {
    const generateElements = () => {
      const count = densitySettings[density];
      const colors = colorSchemes[color];
      const newElements = [];

      for (let i = 0; i < count; i++) {
        const element = {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 15,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          delay: Math.random() * 8,
          duration: Math.random() * 15 + 8,
          pattern: pattern,
          glowIntensity: Math.random() * 0.5 + 0.3,
          pulseSpeed: Math.random() * 3 + 2,
          floatDirection: Math.random() > 0.5 ? 1 : -1,
          morphSpeed: Math.random() * 20 + 10
        };
        newElements.push(element);
      }
      setElements(newElements);
    };

    generateElements();
  }, [density, color, pattern]);

  const getShapeComponent = (element) => {
    const baseProps = {
      className: "absolute isotope-element",
      style: {
        left: `${element.x}%`,
        top: `${element.y}%`,
        width: `${element.size}px`,
        height: `${element.size}px`,
        backgroundColor: element.color,
        opacity: opacity,
        transform: `rotate(${element.rotation}deg)`,
        willChange: "transform, opacity"
      }
    };

    const animationProps = animated ? {
      animate: {
        rotate: [element.rotation, element.rotation + 180],
        scale: [0.9, 1.1, 0.9],
        opacity: [opacity * 0.5, opacity * 0.8, opacity * 0.5]
      },
      transition: {
        duration: element.duration,
        repeat: Infinity,
        ease: "linear",
        delay: element.delay
      }
    } : {};

    const glowStyle = {
      boxShadow: `0 0 ${element.size * 0.5}px ${element.color}${Math.floor(element.glowIntensity * 255).toString(16).padStart(2, '0')}, 
                  0 0 ${element.size}px ${element.color}${Math.floor(element.glowIntensity * 128).toString(16).padStart(2, '0')}, 
                  inset 0 0 ${element.size * 0.3}px ${element.color}${Math.floor(element.glowIntensity * 64).toString(16).padStart(2, '0')}`
    };

    switch (element.pattern) {
      case 'hexagon':
        return (
          <motion.div
            key={element.id}
            {...baseProps}
            {...animationProps}
            style={{
              ...baseProps.style,
              ...glowStyle,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        );
      
      case 'triangle':
        return (
          <motion.div
            key={element.id}
            {...baseProps}
            {...animationProps}
            style={{
              ...baseProps.style,
              ...glowStyle,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        );
      
      case 'circle':
        return (
          <motion.div
            key={element.id}
            {...baseProps}
            {...animationProps}
            style={{
              ...baseProps.style,
              ...glowStyle,
              borderRadius: '50%'
            }}
          />
        );
      
      case 'diamond':
        return (
          <motion.div
            key={element.id}
            {...baseProps}
            {...animationProps}
            style={{
              ...baseProps.style,
              ...glowStyle,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        );
      
      default: // grid
        return (
          <motion.div
            key={element.id}
            {...baseProps}
            {...animationProps}
            style={{
              ...baseProps.style,
              ...glowStyle,
              borderRadius: '8px'
            }}
          />
        );
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none isotope-background ${className}`}>
      {elements.map(element => getShapeComponent(element))}
    </div>
  );
};

export default IsotopeBackground;