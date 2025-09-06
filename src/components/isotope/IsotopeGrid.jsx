import React from 'react';
import { motion } from 'framer-motion';

const IsotopeGrid = ({ 
  gridSize = 20, 
  color = '#3B82F6', 
  opacity = 0.05,
  animated = true,
  className = '',
  glowEffect = true,
  pulseIntensity = 'medium'
}) => {
  const gridLines = [];
  const viewportWidth = 100;
  const viewportHeight = 100;

  // Create vertical lines
  for (let i = 0; i <= viewportWidth; i += gridSize) {
    gridLines.push({
      type: 'vertical',
      position: i,
      id: `v-${i}`
    });
  }

  // Create horizontal lines
  for (let i = 0; i <= viewportHeight; i += gridSize) {
    gridLines.push({
      type: 'horizontal',
      position: i,
      id: `h-${i}`
    });
  }

  const pulseSettings = {
    low: { min: 0.3, max: 0.8, duration: 4 },
    medium: { min: 0.2, max: 1.2, duration: 3 },
    high: { min: 0.1, max: 1.5, duration: 2 }
  };

  const currentPulse = pulseSettings[pulseIntensity];

  const lineVariants = {
    hidden: { opacity: 0, scale: 0, pathLength: 0 },
    visible: (i) => ({
      opacity: opacity,
      scale: 1,
      pathLength: 1,
      transition: {
        delay: i * 0.05,
        duration: 2.5,
        ease: "easeOut"
      }
    }),
    pulse: {
      opacity: [opacity * currentPulse.min, opacity * currentPulse.max, opacity * currentPulse.min],
      strokeWidth: ["0.05", "0.2", "0.05"],
      filter: glowEffect ? 
        [`drop-shadow(0 0 2px ${color})`, `drop-shadow(0 0 8px ${color})`, `drop-shadow(0 0 2px ${color})`] :
        ["none", "none", "none"],
      transition: {
        duration: currentPulse.duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    wave: {
      pathLength: [0, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3
      }
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none isotope-grid ${className}`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ willChange: "transform, opacity" }}
      >
        {gridLines.map((line, index) => (
          <motion.line
            key={line.id}
            custom={index}
            variants={lineVariants}
            initial="hidden"
            animate={animated ? ["visible", "pulse", "wave"] : "visible"}
            x1={line.type === 'vertical' ? line.position : 0}
            y1={line.type === 'vertical' ? 0 : line.position}
            x2={line.type === 'vertical' ? line.position : 100}
            y2={line.type === 'vertical' ? 100 : line.position}
            stroke={color}
            strokeWidth="0.1"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            fill="none"
            style={{ willChange: "transform, opacity" }}
          />
        ))}
      </svg>
    </div>
  );
};

export default IsotopeGrid;